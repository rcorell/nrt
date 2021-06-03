import { App } from 'src/components/App';
import { fetchUserWithGroupTopicsMocks } from 'tests/mocks/userMocks';
import { renderComponent } from 'tests/testHelpers';

describe('App', () => {
    it('matches snapshot', () => {
        expect(renderComponent(App, [fetchUserWithGroupTopicsMocks.success]).container).toMatchSnapshot();
    });
});
