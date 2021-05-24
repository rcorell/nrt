export const setBrowserTitle = (pageName: string) => {
    window.document.title = 'Top 5 Daily';
    if (pageName) {
        window.document.title += ` | ${pageName}`;
    }
};
