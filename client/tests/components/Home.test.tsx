import { Home } from 'src/components/Home';

describe('Home', () => {
    it('matches snapshot', () => {
        global.expectComponentToMatchSnapshot(Home);
    });
});
