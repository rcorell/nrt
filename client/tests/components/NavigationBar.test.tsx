import { NavigationBar } from 'src/components/NavigationBar';

describe('NavigationBar', () => {
    it('matches snapshot', () => {
        global.expectComponentToMatchSnapshot(NavigationBar);
    });
});
