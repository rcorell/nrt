import { AddGroup } from 'src/components/AddGroup';

describe('AddGroup', () => {
    it('matches snapshot', () => {
        global.expectComponentToMatchSnapshot(AddGroup);
    });
});
