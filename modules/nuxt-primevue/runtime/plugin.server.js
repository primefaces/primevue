// @ts-expect-error
import { styles, themes } from '#primevue-style';
//import { useRuntimeConfig } from '#imports';

const defineNitroPlugin = (def) => def;

export default defineNitroPlugin(async (nitroApp) => {
    nitroApp.hooks.hook('render:html', (html) => {
        html.head.unshift(styles);
        html.head.unshift(themes);
        //html.htmlAttrs.push('class="p-dark"'); // @todo
    });
});
