import { App } from 'src/components/App';
import { mockFetchUserWithGroupTopics } from 'tests/mocks';
import { renderComponentWithMocks } from 'tests/testHelpers';

describe('App', () => {
    it('matches snapshot', () => {
        expect(renderComponentWithMocks(App, [mockFetchUserWithGroupTopics.success]).container).toMatchSnapshot();
    });
});
