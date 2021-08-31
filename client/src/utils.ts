import React, { useEffect } from 'react';

export const setBrowserTitle = (pageName: string) => {
    window.document.title = 'Top 5 Daily';
    if (pageName) {
        window.document.title += ` | ${pageName}`;
    }
};

export const useMountEffect = (f: React.EffectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return useEffect(f, []);
};
