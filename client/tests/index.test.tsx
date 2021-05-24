import React from 'react';
import ReactDOM from 'react-dom';

import { App } from '../src/components/App';

jest.mock('react-dom', () => ({ render: jest.fn() }));

test('renders with App and root div', () => {
    const root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);

    require('./../src/index.tsx');

    expect(ReactDOM.render).toHaveBeenCalledWith(<App />, root);
});
