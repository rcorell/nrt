import { setBrowserTitle } from '../src/utils';

describe('setBrowserTitle()', () => {
    const cases = [
        ['', 'Top 5 Daily'],
        ['a', 'Top 5 Daily | a'],
        ['Foo Bar Baz', 'Top 5 Daily | Foo Bar Baz'],
        ['<b>Misplaced markup</b>', 'Top 5 Daily | <b>Misplaced markup</b>']
    ];

    test.each(cases)('%p should return %p', (input, expected) => {
        window.document.title = '';

        setBrowserTitle(input);

        expect(window.document.title).toEqual(expected);
    });
});
