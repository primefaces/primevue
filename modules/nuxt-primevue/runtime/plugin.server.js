// @ts-expect-error
import { styles } from '#primevue-style';
//import { useRuntimeConfig } from '#imports';

const defineNitroPlugin = (def) => def;

export default defineNitroPlugin(async (nitroApp) => {
    nitroApp.hooks.hook('render:html', (html) => {
        html.head.push(styles);
    });
});
