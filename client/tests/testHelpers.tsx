import * as React from 'react';
import { DocumentNode } from '@apollo/client';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { render } from '@testing-library/react';

export interface ComponentParameters {
    query?: DocumentNode;
    results?: any;
}

export const renderComponent = (component: React.FC, query: DocumentNode | null = null, results: any = null) => {
    const mocks: MockedResponse[] = [];

    if (query) {
        mocks.push({
            request: {
                query,
                variables: {}
            }
        });

        if (results?.data) {
            mocks[0].result = {
                data: results.data
            };
        } else if (results?.error) {
            mocks[0].error = results.error;
        }
    }

    return render(
        <MockedProvider mocks={mocks} addTypename={false}>
            {React.createElement(component)}
        </MockedProvider>
    );
};
