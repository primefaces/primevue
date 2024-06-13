import { components, directives } from '@primevue/metadata';
import type { ComponentResolver } from 'unplugin-vue-components/types';

export interface PrimeVueResolverOptions {
    components?: {
        prefix?: string;
    };
    directives?: {
        prefix?: string;
    };
}

export function PrimeVueResolver(options: PrimeVueResolverOptions = {}): ComponentResolver[] {
    const getName = (name: string, prefix?: string) => {
        if (prefix) {
            if (!name.startsWith(prefix)) return;

            name = name.substring(prefix.length);
        }

        return name;
    };

    return [
        {
            type: 'component',
            resolve: (name: string) => {
                const { prefix } = options.components || {};
                const cName = getName(name, prefix);
                const cMeta = components.find((c) => c.name === cName);

                if (cMeta) {
                    return {
                        from: cMeta.from
                    };
                }
            }
        },
        {
            type: 'directive',
            resolve: (name: string) => {
                const { prefix } = options.directives || {};
                const dName = getName(name, prefix);
                const dMeta = directives.find((d) => d.name === dName);

                if (dMeta) {
                    return {
                        as: dMeta.as,
                        from: dMeta.from
                    };
                }
            }
        }
    ];
}
