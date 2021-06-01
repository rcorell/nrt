import React from 'react';

import { setBrowserTitle } from 'src/utils';

export const Home: React.FC = () => {
    setBrowserTitle('Home');

    return <h1>Home</h1>;
};
