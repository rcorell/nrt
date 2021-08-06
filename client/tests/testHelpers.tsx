import { ApolloLink, DocumentNode } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { MockedProvider, MockedResponse, MockLink } from '@apollo/client/testing';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { GraphQLError } from 'graphql';
import { print } from 'graphql/language/printer';
import React from 'react';

import { GlobalContextProvider } from 'src/components/GlobalContextProvider';

export let lastNavigationPath = '';

export const setLastNavigationPath = (path: string) => {
    lastNavigationPath = path;
};

export interface ComponentParameters {
    query?: DocumentNode;
    results?: any;
}

export const oneTick = async () => {
    await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 0));
    });
};

export const localStorageMocks = {
    getItemMock: jest.spyOn(window.localStorage.__proto__, 'getItem'),
    setItemMock: jest.spyOn(window.localStorage.__proto__, 'setItem')
};

export const renderComponent = (component: React.FC, mocks: MockedResponse[] = []) => {
    const reportErrors = !mocks.some((mock: any) => mock?.error || mock?.result?.errors);

    const cleanedMocks = mocks.map((mock) => {
        const query = JSON.parse(JSON.stringify(mock.request.query.definitions[0]));
        return {
            error: mock.error,
            newData: mock?.newData?.toString(),
            request: {
                query: query.name.value,
                variables: mock.request.variables
            },
            result: mock.result
        };
    });
    const mockLink = new MockLink(mocks);
    const errorLoggingLink = onError(({ graphQLErrors, networkError }) => {
        if (!reportErrors) {
            return;
        }

        console.log('MOCKS:', JSON.stringify(cleanedMocks, null, 4));

        if (graphQLErrors)
            graphQLErrors.map(({ message, locations, path }) =>
                console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
            );

        if (networkError) {
            console.log(`[Network error]: ${networkError}`);
        }
    });
    const link = ApolloLink.from([errorLoggingLink, mockLink]);

    return render(
        <GlobalContextProvider>
            <MockedProvider
                link={link}
                mocks={mocks}
                addTypename={false}
                defaultOptions={{
                    mutate: {
                        errorPolicy: 'all'
                    }
                }}
            >
                {React.createElement(component)}
            </MockedProvider>
        </GlobalContextProvider>
    );
};

export const setField = (label: string, value: string) => {
    const input = screen.getByLabelText(label);
    fireEvent.change(input, { target: { value } });
};

export type FieldEntry = {
    invalidValue: string;
    label: string;
    validValue: string;
};

export type TestFormOptions = {
    component: React.FC;
    fields: FieldEntry[];
    pageName: string;
};

export const testFormSnapshots = (options: TestFormOptions, mocks: MockedResponse[] = []) => {
    let container: HTMLElement;

    describe('standard snapshots', () => {
        beforeEach(async () => {
            container = renderComponent(options.component, mocks).container;
            await oneTick();
        });

        it('fresh load', () => {
            expect(container).toMatchSnapshot();
        });

        it('invalid parameters', () => {
            for (const field of options.fields) {
                setField(field.label, field.invalidValue);
            }
            expect(container).toMatchSnapshot();
        });

        it('valid parameters', async () => {
            for (const field of options.fields) {
                setField(field.label, field.validValue);
            }

            expect(container).toMatchSnapshot();
        });
    });

    it('should have the correct document title', () => {
        expect(window.document.title).toEqual(`Top 5 Daily | ${options.pageName}`);
    });
};

export type MockParameters<DataType, VariablesType = never> = {
    data: DataType;
    query: DocumentNode;
    spyOnNewData?: boolean;
    variables?: VariablesType;
};

export const assembleMocks = ({ data, query, spyOnNewData = false, variables = {} }: MockParameters<any, any>) => {
    const name = print(query).split(' ')[1].split('(')[0];

    return {
        graphQLError: {
            request: {
                query,
                variables
            },
            result: {
                errors: [new GraphQLError(`${name}: GraphQL error`)]
            }
        },
        networkError: {
            error: new Error(`${name}: network error`),
            request: {
                query,
                variables
            }
        },
        success: {
            newData: spyOnNewData ? jest.fn(() => ({ data })) : undefined,
            request: {
                query,
                variables
            },
            result: {
                data
            }
        }
    };
};

export type CustomHookResult<T> = Partial<T> & {
    loading: boolean;
    error?: any;
};

export function createHookMockingWrapper<T>(hook: () => any, mock: MockedResponse<T>) {
    const wrapper = ({ children }: { children: any }) => (
        <MockedProvider mocks={[mock]} addTypename={false}>
            {children}
        </MockedProvider>
    );
    const { result, waitForNextUpdate } = renderHook<any, CustomHookResult<T>>(() => hook(), {
        wrapper
    });
    return { result: result, waitForNextUpdate };
}
