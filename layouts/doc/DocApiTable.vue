<template>
    <section class="pt-3">
        <div :id="id">
            <DocSectionText :id="id" :label="label" :level="componentLevel">
                {{ description || null }}
                <p v-if="relatedProp" class="inline-block">
                    See <i>{{ relatedProp }}</i>
                </p>
            </DocSectionText>
        </div>

        <div v-if="!data[0].data" class="doc-tablewrapper mt-3">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th v-for="header in Object.keys(data[0])" :key="header">
                            <template v-if="header !== 'readonly' && header !== 'optional' && header !== 'deprecated'">
                                {{ header }}
                            </template>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="prop in data" :key="prop">
                        <td v-for="[k, v] in Object.entries(prop)" :key="k" :class="{ 'doc-option-type': k === 'type', 'doc-option-default': k === 'defaultValue' }">
                            <template v-if="k !== 'readonly' && k !== 'optional' && k !== 'deprecated'">
                                <span v-if="k === 'name'" :id="id + '.' + v" class="doc-option-name">
                                    {{ v }}
                                    <NuxtLink :to="`/${$router.currentRoute.value.name}/#${id}.${v}`" class="doc-option-link">
                                        <i class="pi pi-link"></i>
                                    </NuxtLink>
                                </span>
                                <template v-else-if="k === 'type'">
                                    <template v-for="(value, i) in getType(v)" :key="value">
                                        {{ i !== 0 ? ' |' : '' }}
                                        <NuxtLink v-if="isLinkType(value)" :to="setLinkPath(value)" class="doc-option-link"> {{ value }} </NuxtLink>
                                        <span v-else> {{ value }} </span>
                                    </template>
                                </template>

                                <template v-else-if="k === 'parameters'">
                                    <span v-if="v.name"> {{ v.name }} : </span>
                                    <template v-for="(value, i) in getType(v.type)" :key="value">
                                        {{ i !== 0 ? ' |' : '' }}
                                        <NuxtLink v-if="isLinkType(value)" :to="setLinkPath(value)" class="doc-option-link"> {{ value }} </NuxtLink>
                                        <span v-else> {{ value }} </span>
                                    </template>
                                </template>

                                <span v-else :id="id + '.' + v">
                                    {{ v }}
                                </span>
                            </template>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <template v-if="data[0].data && data[0].data.length > 0">
            <template v-for="childData in data" :key="childData">
                <DocApiTable :id="childData.id" :data="childData.data" :label="childData.label" :description="childData.description" :relatedProp="childData.relatedProp" :level="3" />
            </template>
        </template>
    </section>
</template>
<script>
export default {
    props: {
        id: {
            type: String
        },
        label: {
            type: String
        },
        data: {
            type: Array,
            default: () => []
        },
        description: {
            type: String
        },
        relatedProp: {
            type: String
        },
        level: {
            type: Number,
            default: 1
        },
        header: {
            type: String,
            default: null
        }
    },
    methods: {
        getType(value) {
            const newValue = value?.split('|').map((item) => {
                return item
                    .replace(/"/g, '')
                    .replace(/(\[|\]|<|>).*$/gm, '')
                    .trim();
            });

            return newValue;
        },

        getParameters(value) {
            const newValue = value.split(':').map((item) => {
                return item
                    .replace(/"/g, '')
                    .replace(/(\[|\]|<|>).*$/gm, '')
                    .trim();
            });

            return this.getType(newValue[1]);
        },
        isLinkType(value) {
            return value.includes(this.header);
        },
        setLinkPath(value) {
            const currentRoute = this.$router.currentRoute.value.name;

            const definationType = value.includes('Type') ? 'types' : value.includes('Event') ? 'events' : 'interfaces';

            return `/${currentRoute}/#api.${currentRoute}.${definationType}.${value}`;
        }
    },
    computed: {
        componentLevel() {
            if (this.label === 'Interfaces' || this.label === 'Events') {
                return 2;
            } else if (this.level === 3) {
                return 3;
            }

            return this.data[0].data ? 1 : 2;
        }
    }
};
</script>
