import type { NitroApp } from 'nitropack/types';
// @ts-expect-error
import { styles, stylesToTop, themes } from '#primevue-style';
//import { useRuntimeConfig } from '#imports';

type NitroAppPlugin = (nitro: NitroApp) => void;

interface NuxtRenderHTMLContext {
    htmlAttrs: string[];
    head: string[];
    bodyAttrs: string[];
    bodyPreprend: string[];
    body: string[];
    bodyAppend: string[];
}

const defineNitroPlugin = (def: NitroAppPlugin): NitroAppPlugin => def;

export default defineNitroPlugin(async (nitroApp) => {
    nitroApp.hooks.hook('render:html' as any, (html: NuxtRenderHTMLContext) => {
        html.head.unshift(stylesToTop);
        html.head.push(styles);
        html.head.push(themes);
        //html.htmlAttrs.push('class="p-dark"'); // @todo
    });
});
