import { addComponent, addImports } from '@nuxt/kit';
import { isNotEmpty, isString, resolve } from '@primeuix/utils/object';
import type { MetaType } from '@primevue/metadata';
import { components, composables, directives } from '@primevue/metadata';
import type { PrimeVueConfiguration } from 'primevue/config';
import type { ConstructsType, ModuleOptions, ResolvePathOptions } from './types';
import { Utils } from './utils';

function registerItems(items: any[] = [], options: ConstructsType = {}, params: any) {
    const included = resolve(options.include, params);
    const excluded = resolve(options.exclude, params);
    const isMatched = (name: string, tName: any) => name?.toLowerCase() === (isString(tName) ? tName?.toLowerCase() : tName?.name?.toLowerCase());

    return items.filter((item) => {
        const name = item?.name;
        const matchedIn = included === '*' || included === undefined ? true : isNotEmpty(included) ? included.some((inc: any) => isMatched(name, inc)) : false;
        const matchedEx = included === '*' && excluded === '*' ? false : excluded === '*' ? true : isNotEmpty(excluded) ? excluded.some((exc: any) => isMatched(name, exc)) : false;

        return matchedIn && !matchedEx;
    });
}

function registerConfig(resolvePath: any) {
    return [
        {
            name: 'PrimeVue',
            as: 'PrimeVue',
            from: resolvePath({ name: 'PrimeVue', as: 'PrimeVue', from: `primevue/config`, type: 'config' })
        }
    ];
}

function registerComponents(resolvePath: any, moduleOptions: ModuleOptions) {
    const options: ConstructsType = moduleOptions.components || {};
    const items: MetaType[] = registerItems(components, options, { components });

    return items.map((item: MetaType) => {
        const _item = { ...item, name: item.name, as: item.name, from: item.from };
        const name = Utils.object.getName(_item, options);
        const from = resolvePath({ name, as: _item.as, from: _item.from, type: 'component' });
        const opt = {
            export: 'default',
            name,
            filePath: from,
            global: true
        };

        //!moduleOptions.autoImport && addComponent(opt);
        addComponent(opt);

        return {
            ..._item,
            ...opt
        };
    });
}

function registerDirectives(resolvePath: any, moduleOptions: ModuleOptions) {
    const options: ConstructsType = moduleOptions.directives || {};
    const items: MetaType[] = registerItems(directives, options, { directives });

    return items.map((item: MetaType) => {
        const name = Utils.object.getName(item, options);
        const opt = {
            ...item,
            name,
            from: resolvePath({ name, as: item.as, from: item.from, type: 'directive' })
        };

        return opt;
    });
}

function registerComposables(resolvePath: any, moduleOptions: ModuleOptions) {
    const options: ConstructsType = moduleOptions.composables || {};
    const items: MetaType[] = registerItems(composables, options, { composables });

    return items.map((item: MetaType) => {
        const name = item.name; //Utils.object.getName(item, options);
        const opt = {
            ...item,
            name,
            from: resolvePath({ name, as: item.as, from: item.from, type: 'composable' })
        };

        addImports(opt);

        return opt;
    });
}

function registerServices(resolvePath: any, registered: any) {
    const services: any = new Set<string>();

    registered?.components?.forEach((component: MetaType) => component?.use && services.add(component.use.as));

    return [...services].map((service) => ({
        name: service,
        as: service,
        from: resolvePath({ name: service, as: service, from: `primevue/${service.toLowerCase()}`, type: 'service' })
    }));
}

function registerStyles(resolvePath: any, registered: any, moduleOptions: ModuleOptions) {
    const options: PrimeVueConfiguration = moduleOptions.options || {};

    const styles: MetaType[] = [
        {
            name: 'BaseStyle',
            as: 'BaseStyle',
            from: resolvePath({ name: 'BaseStyle', as: 'BaseStyle', from: '@primevue/core/base/style', type: 'style' })
        }
    ];

    if (!options?.unstyled) {
        // !moduleOptions.autoImport && !options?.unstyled
        if (isNotEmpty(registered?.components)) {
            styles.push({
                name: 'BaseComponentStyle',
                as: 'BaseComponentStyle',
                from: resolvePath({ name: 'BaseComponentStyle', as: 'BaseComponentStyle', from: '@primevue/core/basecomponent/style', type: 'style' })
            });
        }

        [registered.components, registered.directives]
            .flat()
            .reduce((acc: any[], citem: any) => (acc.some((item) => item.as.toLowerCase() === citem.as.toLowerCase()) ? acc : [...acc, citem]), [])
            .forEach((item: any) =>
                styles.push({
                    name: `${item.as}Style`,
                    as: `${item.as}Style`,
                    from: resolvePath({ name: `${item.as}Style`, as: `${item.as}Style`, from: `${item.from.toLowerCase()}/style`, type: 'style' })
                })
            );
    }

    return styles;
}

function registerInjectStylesAsString(moduleOptions: ModuleOptions) {
    return [];
}

function registerInjectStylesAsStringToTop(moduleOptions: any) {
    // @todo - Remove `cssLayerOrder`
    return [Utils.object.createStyleAsString(moduleOptions.cssLayerOrder ? `@layer ${moduleOptions.cssLayerOrder}` : undefined, { name: 'layer-order' })];
}

export function register(moduleOptions: ModuleOptions) {
    const resolvePath = (resolveOptions: ResolvePathOptions) => Utils.object.getPath(moduleOptions.resolvePath, resolveOptions);

    const config = registerConfig(resolvePath);
    const components = registerComponents(resolvePath, moduleOptions);
    const directives = registerDirectives(resolvePath, moduleOptions);
    const composables = registerComposables(resolvePath, moduleOptions);
    const registered = {
        components,
        directives,
        composables
    };
    const services = registerServices(resolvePath, registered);
    const styles = registerStyles(resolvePath, registered, moduleOptions);
    const injectStylesAsString = registerInjectStylesAsString(moduleOptions);
    const injectStylesAsStringToTop = registerInjectStylesAsStringToTop(moduleOptions);

    return {
        config,
        ...registered,
        services,
        styles,
        injectStylesAsString,
        injectStylesAsStringToTop
    };
}
