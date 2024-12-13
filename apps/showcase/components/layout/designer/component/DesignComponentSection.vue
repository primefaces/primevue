<template>
    <section>
        <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0 capitalize">{{ sectionName }}</div>
        <div class="grid grid-cols-4 gap-2">
            <template v-for="(t_value, t_name) in tokens" :key="t_name">
                <DesignTokenField v-if="!isObject(t_value)" v-model="tokens[t_name]" :label="camelCaseToSpaces(t_name)" :type="isColor(t_name) ? 'color' : null" />
            </template>
        </div>
        <template v-if="hasNestedTokens">
            <DesignComponentSection v-for="(n_value, n_name) in nestedTokens" :key="n_name" :componentKey="componentKey" :name="n_name" :parentPath="fullPath" class="mt-3" />
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
        name: {
            type: null,
            default: null
        },
        parentPath: {
            type: null,
            default: null
        },
        colorScheme: {
            type: null,
            default: null
        }
    },
    inject: ['$preset'],
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
        fullPath() {
            return this.parentPath ? this.parentPath + '.' + this.name : this.name;
        },
        sectionName() {
            const names = this.fullPath.split('.');

            return names.map((n) => this.capitalize(this.camelCaseToSpaces(n))).join(' ');
        },
        tokens() {
            if (this.colorScheme) return this.getObjectProperty(this.$preset.components[this.componentKey].colorScheme[this.colorScheme], this.fullPath);
            else return this.getObjectProperty(this.$preset.components[this.componentKey], this.fullPath);
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
