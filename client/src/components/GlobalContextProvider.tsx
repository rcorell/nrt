import React, { useState } from 'react';

type GlobalContextType = {
    authenticated: boolean;
    setAuthenticated: (authenticated: boolean) => void;
};

export const GlobalContext = React.createContext<GlobalContextType>({
    authenticated: false,
    setAuthenticated: (_authenticated) => {}
});

export const GlobalContextProvider: React.FC = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);

    const contextFunctions = { authenticated, setAuthenticated };

    return <GlobalContext.Provider value={contextFunctions}>{children}</GlobalContext.Provider>;
};
