import { render } from '@testing-library/react';
import React from 'react';

import { App } from 'src/components/App';
import { Path } from 'src/components/Routes';

describe('Routes', () => {
    beforeAll(() => {
        // @ts-ignore
        delete window.location;

        window.location = Object.defineProperties(
            {},
            {
                pathname: {
                    writable: true
                }
            }
        );
    });

    Object.values(Path).forEach((path) => {
        it(`routes to ${path} correctly`, () => {
            window.location.pathname = path;
            const routesRender = render(<App />);
            expect(routesRender.container).toMatchSnapshot();
        });
    });

    it('routes to not found correctly', () => {
        window.location.pathname = '/invalid';
        const routesRender = render(<App />);
        expect(routesRender.container).toMatchSnapshot();
    });
});
