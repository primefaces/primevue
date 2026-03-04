import { addPlugin, addPluginTemplate, addTemplate, createResolver, defineNuxtModule } from '@nuxt/kit';
import { isNotEmpty } from '@primeuix/utils';
import { PrimeVueResolver } from '@primevue/auto-import-resolver';
import type { MetaType } from '@primevue/metadata';
import { normalize } from 'pathe';
import Components from 'unplugin-vue-components/nuxt';
import { register } from './register';
import type { ModuleOptions } from './types';

export default defineNuxtModule<ModuleOptions>({
    meta: {
        name: '@primevue/nuxt-module',
        configKey: 'primevue',
        compatibility: {
            nuxt: '>=3.0.0'
        }
    },
    defaults: {
        usePrimeVue: true,
        autoImport: true,
        resolvePath: undefined,
        //cssLayerOrder: undefined,
        importPT: undefined,
        importTheme: undefined,
        loadStyles: true,
        options: {},
        components: {
            prefix: '',
            name: undefined,
            include: undefined,
            exclude: undefined
        },
        directives: {
            prefix: '',
            name: undefined,
            include: undefined,
            exclude: undefined
        },
        composables: {
            //prefix: '',
            name: undefined,
            include: undefined,
            exclude: undefined
        }
    },
    hooks: {},
    setup(moduleOptions, nuxt) {
        moduleOptions.components.exclude = moduleOptions.components.exclude || ['Editor', 'Chart'];

        const resolver = createResolver(import.meta.url);
        const registered = register(moduleOptions);
        const { autoImport, importPT, importTheme, options, loadStyles } = moduleOptions;
        const hasTheme = options?.theme !== 'none' && (importTheme || options?.theme) && !options?.unstyled;

        nuxt.options.runtimeConfig.public.primevue = {
            ...moduleOptions,
            ...registered
        };

        //nuxt.options.build.transpile.push('nuxt');
        nuxt.options.build.transpile.push('primevue');
        hasTheme && nuxt.options.build.transpile.push('@primevue/themes');
        hasTheme && nuxt.options.build.transpile.push('@primeuix/themes');

        if (autoImport) {
            const dts = isNotEmpty(moduleOptions.components?.prefix) || isNotEmpty(moduleOptions.directives?.prefix);

            Components(
                {
                    dts,
                    resolvers: [
                        PrimeVueResolver({
                            components: moduleOptions.components,
                            directives: moduleOptions.directives
                        })
                    ]
                },
                nuxt
            );
        }

        const styleContent = () => {
            if (!loadStyles) return `export const styles = '', stylesToTop = '', themes = '';`;

            return `
${hasTheme ? `import { Theme } from '@primeuix/styled';
${importTheme ? `import ${importTheme.as} from '${normalize(importTheme.from)}';\n` : ''}` : ''}

const stylesToTop = ${registered.injectStylesAsStringToTop.length ? `[${registered.injectStylesAsStringToTop.join('')}].join('')` : `''`};
const styles = '';
const themes = '';

${hasTheme ? `Theme.setTheme(${importTheme?.as} || {})` : ''}

export { styles, stylesToTop, themes };
`;
        };

        nuxt.options.alias['#primevue-style'] = addTemplate({
            filename: 'primevue-style.mjs',
            getContents: styleContent
        }).dst;

        addPlugin(resolver.resolve('./runtime/plugin.client'));

        addPluginTemplate({
            filename: 'primevue-plugin.mjs',
            getContents() {
                return `
import { defineNuxtPlugin, useRuntimeConfig } from '#imports';
import Base from '@primevue/core/base';
import { Theme } from '@primeuix/styled';
${registered.config.map((config: MetaType) => `import ${config.as} from '${config.from}';`).join('\n')}
${registered.services.map((service: MetaType) => `import ${service.as} from '${service.from}';`).join('\n')}
${!autoImport && registered.directives.map((directive: MetaType) => `import ${directive.as} from '${directive.from}';`).join('\n')}
${importPT ? `import ${importPT.as} from '${normalize(importPT.from)}';\n` : ''}
${hasTheme && importTheme ? `import ${importTheme.as} from '${normalize(importTheme.from)}';\n` : ''}

export default defineNuxtPlugin((nuxtApp) => {
  const { vueApp } = nuxtApp;
  const runtimeConfig = useRuntimeConfig();
  const config = runtimeConfig?.public?.primevue ?? {};
  const { usePrimeVue = true, options = {} } = config;
  const pt = ${importPT ? `{ pt: ${importPT.as} }` : `{}`};
  const theme = ${hasTheme ? `{ theme: ${importTheme?.as} || options?.theme }` : `{}`};

  let ssrCollect = {};
  if (import.meta.server && nuxtApp.ssrContext?.event) {
    Base.clearLoadedStyleNames();
    Theme.clearLoadedStyleNames();
    const collected = new Map();
    nuxtApp.ssrContext.event.context._primevueStyles = collected;
    ssrCollect = { _styleCollect: (name, css) => collected.set(name, css) };
  }

  usePrimeVue && vueApp.use(PrimeVue, { ...options, ...pt, ...theme, ...ssrCollect });
  ${registered.services.map((service: MetaType) => `vueApp.use(${service.as});`).join('\n')}
  ${!autoImport && registered.directives.map((directive: MetaType) => `vueApp.directive('${directive.name}', ${directive.as});`).join('\n')}
});
        `;
            }
        });

        nuxt.hook('nitro:config', async (config) => {
            config.externals = config.externals || {};
            config.externals.inline = config.externals.inline || [];
            config.externals.inline.push(resolver.resolve('./runtime/plugin.server'));
            config.virtual = config.virtual || {};
            config.virtual['#primevue-style'] = styleContent;
            config.plugins = config.plugins || [];
            config.plugins.push(resolver.resolve('./runtime/plugin.server'));
        });
    }
});
