import { Signup } from 'src/components/Signup';

describe('Signup', () => {
    it('matches snapshot', () => {
        global.expectComponentToMatchSnapshot(Signup);
    });
});
