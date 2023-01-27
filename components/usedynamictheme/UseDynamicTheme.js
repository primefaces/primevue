import { onBeforeMount, ref } from 'vue';
let themes = ref(null);
let defaultTheme = ref(null);

export function useDynamicTheme() {
    onBeforeMount(() => {
        if (import.meta.hot) {
            import.meta.hot.send('get:themes');

            import.meta.hot.on('send:themes', (data) => {
                if (data.options) {
                    themes.value = data.options.themes;
                    defaultTheme.value = data.options.defaultTheme;
                }
            });
        }
    });

    const setTheme = (themeName) => {
        replaceLink(themeName);
    };

    return {
        setTheme
    };
}

const replaceLink = (themeName) => {
    const linkElement = document.getElementById('theme-link');
    const href = `/${themeName}.css`;

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
