<template>
    <section>
        <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0 capitalize">{{ sectionName }}</div>
        <div class="grid grid-cols-4 gap-2">
            <template v-for="(t_value, t_name) in tokens" :key="t_name">
                <DesignTokenField v-if="!isObject(t_value)" v-model="tokens[t_name]" :label="camelCaseToSpaces(t_name)" :type="isColor(t_name) ? 'color' : null" :componentKey="componentKey" :path="path + '.' + t_name" />
            </template>
        </div>
        <template v-if="hasNestedTokens">
            <DesignComponentSection v-for="(n_value, n_name) in nestedTokens" :key="n_name" :componentKey="componentKey" :path="path + '.' + n_name" class="mt-3" />
        </template>
    </section>
</template>

<script>
export default {
    props: {
        componentKey: {
            type: null,
            default: null
        },
        path: {
            type: null,
            default: null
        }
    },
    methods: {
        camelCaseToSpaces(val) {
            return val.replace(/([a-z])([A-Z])/g, '$1 $2');
        },
        isColor(val) {
            return val.toLowerCase().includes('color') || val.toLowerCase().includes('background');
        },
        isObject(val) {
            return val !== null && typeof val === 'object';
        },
        getObjectProperty(obj, path) {
            const keys = path.split('.');
            let current = obj;

            for (const key of keys) {
                if (current[key] !== undefined) {
                    current = current[key];
                } else {
                    return undefined;
                }
            }

            return current;
        },
        capitalize(str) {
            if (typeof str !== 'string' || str.length === 0) {
                return str;
            }

            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    },
    computed: {
        sectionName() {
            const names = this.path.split('.');

            return names
                .filter((n) => n !== 'colorScheme' && n !== 'light' && n !== 'dark')
                .map((n) => this.capitalize(this.camelCaseToSpaces(n)))
                .join(' ');
        },
        tokens() {
            const source = this.$appState.designer.theme.preset.components[this.componentKey] || this.$appState.designer.theme.preset.directives[this.componentKey];

            return this.getObjectProperty(source, this.path);
        },
        nestedTokens() {
            const groups = {};
            const obj = this.tokens;

            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    const value = obj[key];

                    if (this.isObject(value)) {
                        groups[key] = value;
                    }
                }
            }

            return groups;
        },
        hasNestedTokens() {
            return Object.keys(this.nestedTokens).length > 0;
        }
    }
};
</script>
