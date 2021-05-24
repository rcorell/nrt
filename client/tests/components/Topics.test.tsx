import { Topics } from 'src/components/Topics';

describe('Topics', () => {
    it('matches snapshot', () => {
        global.expectComponentToMatchSnapshot(Topics);
    });
});
