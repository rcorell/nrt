import { NotFound } from 'src/components/NotFound';

describe('NotFound', () => {
    it('matches snapshot', () => {
        global.expectComponentToMatchSnapshot(NotFound);
    });
});
