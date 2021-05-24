import { App } from 'src/components/App';

describe('App', () => {
    it('matches snapshot', () => {
        global.expectComponentToMatchSnapshot(App);
    });
});
