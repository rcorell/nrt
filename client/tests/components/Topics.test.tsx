import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import * as React from 'react';

import { FetchTopicsQuery } from 'src/api/__generated__/FetchTopicsQuery';
import { fetchTopicsQueryString } from 'src/api/api';
import { Topics } from 'src/components/Topics';

describe('Topics', () => {
    const renderTopics = (results: any = null) => {
        const mocks: MockedResponse[] = [
            {
                request: {
                    query: fetchTopicsQueryString,
                    variables: {}
                }
            }
        ];

        if (results?.data) {
            mocks[0].result = {
                data: results.data
            };
        } else if (results?.error) {
            mocks[0].error = results.error;
        }

        return render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Topics />
            </MockedProvider>
        );
    };

    describe('snapshots', () => {
        it('loading', () => {
            expect(renderTopics()).toMatchSnapshot();
        });

        it('success', async () => {
            const data: FetchTopicsQuery = {
                topics: [{ __typename: 'Topic', description: 'test-description', title: 'test-title' }]
            };

            renderTopics({ data });

            await waitForElementToBeRemoved(() => screen.getByText('Loading...'));

            // Material UI devs literally hate snapshots
            expect(screen.queryByText('test-description')).toBeInTheDocument();
            expect(screen.queryByText('test-title')).toBeInTheDocument();
        });

        it('network error', async () => {
            const networkError = new Error('Network-error');

            const topicsRender = renderTopics({ error: networkError });

            await waitForElementToBeRemoved(() => screen.getByText('Loading...'));

            expect(screen.queryByText('No results')).toBeNull();

            expect(topicsRender).toMatchSnapshot();
        });

        it('Malformed results', async () => {
            const topicsRender = renderTopics({ data: null });

            await waitForElementToBeRemoved(() => screen.getByText('Loading...'));

            expect(topicsRender).toMatchSnapshot();
        });
    });
});
