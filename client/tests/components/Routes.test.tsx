import { Routes } from 'src/components/Routes';

describe('Routes', () => {
    it('matches snapshot', () => {
        global.expectComponentToMatchSnapshot(Routes);
    });
});
