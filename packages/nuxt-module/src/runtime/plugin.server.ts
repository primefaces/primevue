import type { NitroApp } from 'nitropack/types';
// @ts-expect-error
import { stylesToTop } from '#primevue-style';

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
    nitroApp.hooks.hook('render:html' as any, (html: NuxtRenderHTMLContext, { event }: any) => {
        html.head.unshift(stylesToTop);
        const collected: Map<string, string> | undefined = event?.context?._primevueStyles;
        if (collected) {
            const styleHtml = Array.from(collected.entries()).map(([name, css]) => `<style type="text/css" data-primevue-style-id="${name}">${css}</style>`).join('');

            html.head.push(styleHtml);
        }
    });
});
