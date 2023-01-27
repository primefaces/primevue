export function useDynamicTheme() {
    const setTheme = (themeName) => {
        replaceLink(themeName);
    };

    return {
        setTheme
    };
}

const replaceLink = (themeName) => {
    const linkElement = document.getElementById('theme-link');
    const linkHrefLastIndex = linkElement.href.lastIndexOf('/');
    const href = removeBaseUrl(linkElement.href.substring(0, linkHrefLastIndex) + '/') + themeName + '.css';

    if (!linkElement || !href) {
        return;
    }

    const id = linkElement.getAttribute('id');

    const cloneLinkElement = linkElement.cloneNode(true);

    cloneLinkElement.setAttribute('href', href);
    cloneLinkElement.setAttribute('id', id + '-clone');

    linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

    cloneLinkElement.addEventListener('load', () => {
        linkElement.remove();

        const element = document.getElementById(id); // re-check

        element && element.remove();

        cloneLinkElement.setAttribute('id', id);
    });
};

function removeBaseUrl(url) {
    return url.replace(/^(?:\/\/|[^\/]+)*\//, '');
}
