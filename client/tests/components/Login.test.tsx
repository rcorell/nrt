import { Login } from 'src/components/Login';

describe('Login', () => {
    it('matches snapshot', () => {
        global.expectComponentToMatchSnapshot(Login);
    });
});
