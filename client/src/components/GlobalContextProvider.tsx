import React, { useState } from 'react';

import { isAuthenticated } from 'src/api/api';

type GlobalContextType = {
    authenticated: boolean;
    setAuthenticated: (authenticated: boolean) => void;
};

export const GlobalContext = React.createContext<GlobalContextType>({
    authenticated: false,
    setAuthenticated: (_authenticated) => {}
});

export const GlobalContextProvider: React.FC = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(isAuthenticated());

    const contextFunctions = { authenticated, setAuthenticated };

    return <GlobalContext.Provider value={contextFunctions}>{children}</GlobalContext.Provider>;
};
