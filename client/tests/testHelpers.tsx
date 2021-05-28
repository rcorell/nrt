import React, { useContext } from 'react';
import { DocumentNode } from '@apollo/client';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { act, render } from '@testing-library/react';

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

export const renderComponent = (
    component: React.FC,
    query: DocumentNode | null = null,
    variables = {},
    results: any = null
) => {
    const mocks: MockedResponse[] = [];

    if (query) {
        mocks.push({
            request: {
                query,
                variables
            }
        });

        if (results?.data) {
            mocks[0].result = {
                data: results.data
            };
        }

        if (results?.error) {
            mocks[0].error = results.error;
        }
    }

    return render(
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
