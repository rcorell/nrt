import { DocumentNode } from '@apollo/client';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { act, fireEvent, render, screen } from '@testing-library/react';
import React, { useContext } from 'react';

import { GlobalContext, GlobalContextProvider } from 'src/components/GlobalContextProvider';

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

export const renderComponent = (component: React.FC, mocks: MockedResponse[] = []) => {
    return render(
        <GlobalContextProvider>
            <MockedProvider
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

/*
    I sincerely hope there's a better way to do this.
*/
let globalAuthenticated = false;

const MockComponent: React.FC = (): JSX.Element => {
    const { authenticated } = useContext(GlobalContext);

    globalAuthenticated = authenticated;

    return <></>;
};

export const getGlobalContext = () => {
    render(
        <GlobalContextProvider>
            <MockComponent {...{}} />
        </GlobalContextProvider>
    );

    return {
        authenticated: globalAuthenticated
    };
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
