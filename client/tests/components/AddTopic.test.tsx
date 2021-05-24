import { AddTopic } from 'src/components/AddTopic';

describe('AddTopic', () => {
    it('matches snapshot', () => {
        global.expectComponentToMatchSnapshot(AddTopic);
    });
});
