import { addComponent, addImports } from '@nuxt/kit';
import { components } from './runtime/core/components';
import { composables } from './runtime/core/composables';
import { directives } from './runtime/core/directives';
import { Utils } from './utils';

function registerItems(items = [], options = {}, params) {
    const included = Utils.object.getValue(options.include, params);
    const excluded = Utils.object.getValue(options.exclude, params);

    return items.filter((item) => {
        const name = item?.name;
        const matchedIn = included === '*' || included === undefined ? true : Utils.object.isNotEmpty(included) ? included.some((inc) => name?.toLowerCase() === inc.toLowerCase()) : false;
        const matchedEx = excluded === '*' ? true : Utils.object.isNotEmpty(excluded) ? excluded.some((exc) => name?.toLowerCase() === exc.toLowerCase()) : false;

        return matchedIn && !matchedEx;
    });
}

function registerConfig(resolvePath) {
    return [
        {
            name: 'PrimeVue',
            as: 'PrimeVue',
            from: resolvePath({ name: 'PrimeVue', as: 'PrimeVue', from: `primevue/config`, type: 'config' })
        }
    ];
}

function registerComponents(resolvePath, options = {}) {
    const items = registerItems(components, options, { components });

    return items.map((item) => {
        const _item = { ...item, name: item.name, as: item.name, from: `primevue/${item.name.toLowerCase()}` };
        const name = Utils.object.getName(_item, options);
        const from = resolvePath({ name, as: _item.as, from: _item.from, type: 'component' });
        const opt = {
            export: 'default',
            name,
            filePath: from,
            global: true
        };

        addComponent(opt);

        return {
            ..._item,
            ...opt
        };
    });
}

function registerDirectives(resolvePath, options = {}) {
    const items = registerItems(directives, options, { directives });

    return items.map((item) => {
        const name = Utils.object.getName(item, options);
        const opt = {
            ...item,
            name,
            from: resolvePath({ name, as: item.as, from: item.from, type: 'directive' })
        };

        return opt;
    });
}

function registerComposables(resolvePath, options = {}) {
    const items = registerItems(composables, options, { composables });

    return items.map((item) => {
        const name = Utils.object.getName(item, options);
        const opt = {
            ...item,
            name,
            from: resolvePath({ name, as: item.as, from: item.from, type: 'composable' })
        };

        addImports(opt);

        return opt;
    });
}

function registerServices(resolvePath, registered) {
    const services = new Set();

    registered?.components?.forEach((component) => component?.use && services.add(component.use.as));

    return [...services].map((service) => ({
        name: service,
        as: service,
        from: resolvePath({ name: service, as: service, from: `primevue/${service.toLowerCase()}`, type: 'service' })
    }));
}

function registerStyles(resolvePath, registered, options) {
    const styles = [
        {
            name: 'BaseStyle',
            as: 'BaseStyle',
            from: resolvePath({ name: 'BaseStyle', as: 'BaseStyle', from: 'primevue/base/style', type: 'style' })
        }
    ];

    if (!options?.unstyled) {
        if (Utils.object.isNotEmpty(registered?.components)) {
            styles.push({
                name: 'BaseComponentStyle',
                as: 'BaseComponentStyle',
                from: resolvePath({ name: 'BaseComponentStyle', as: 'BaseComponentStyle', from: 'primevue/basecomponent/style', type: 'style' })
            });
        }

        [registered.components, registered.directives]
            .flat()
            .reduce((acc, citem) => (acc.some((item) => item.as.toLowerCase() === citem.as.toLowerCase()) ? acc : [...acc, citem]), [])
            .forEach((item) =>
                styles.push({
                    name: `${item.as}Style`,
                    as: `${item.as}Style`,
                    from: resolvePath({ name: `${item.as}Style`, as: `${item.as}Style`, from: `primevue/${item.as.toLowerCase()}/style`, type: 'style' })
                })
            );
    }

    return styles;
}

function registerInjectStylesAsString(options) {
    return [Utils.object.createStyleAsString(options.layerOrder ? `@layer ${options.layerOrder}` : undefined, { name: 'layer-order' })];
}

export function register(moduleOptions) {
    const resolvePath = (resolveOptions) => Utils.object.getPath(moduleOptions.resolvePath, resolveOptions);

    const config = registerConfig(resolvePath);
    const components = registerComponents(resolvePath, moduleOptions.components);
    const directives = registerDirectives(resolvePath, moduleOptions.directives);
    const composables = registerComposables(resolvePath, moduleOptions.composables);
    const registered = {
        components,
        directives,
        composables
    };
    const services = registerServices(resolvePath, registered);
    const styles = registerStyles(resolvePath, registered, moduleOptions.options);
    const injectStylesAsString = registerInjectStylesAsString(moduleOptions);

    return {
        config,
        ...registered,
        services,
        styles,
        injectStylesAsString
    };
}
