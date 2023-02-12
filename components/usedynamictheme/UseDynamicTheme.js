export function useDynamicTheme() {
    const setTheme = (themeName) => {
        replaceHref(themeName);
    };

    return {
        setTheme
    };
}

const replaceHref = (themeName) => {
    const linkElement = document.getElementById('theme-link');

    linkElement.setAttribute('href', themeName + '.css');
};
