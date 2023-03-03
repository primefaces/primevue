<template>
    <section class="pt-3">
        <div :id="id">
            <DocSectionText :id="id" :label="label">
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

                                <NuxtLink v-else-if="isLinkType(k, v)" :to="setLinkPath(v)" class="doc-option-link"> {{ v }} </NuxtLink>

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
                <DocApiTable :id="childData.id" :data="childData.data" :label="childData.label" :description="childData.description" :relatedProp="childData.relatedProp" />
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
        }
    },
    methods: {
        isLinkType(key, value) {
            const primitiveTypes = ['string', 'number', 'boolean', 'object', 'array', 'function', 'symbol', 'null', 'undefined', 'any', 'Event'];

            return key === 'type' && !primitiveTypes.includes(value);
        },
        setLinkPath(value) {
            const currentRoute = this.$router.currentRoute.value.name;

            const definationType = value.includes('Type') ? 'types' : 'interfaces';

            return `/${currentRoute}/#api.${currentRoute}.${definationType}.${value}`;
        }
    }
};
</script>
