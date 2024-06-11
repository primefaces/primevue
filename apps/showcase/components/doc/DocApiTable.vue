<template>
    <DocSectionText :id="id" :label="label" :level="componentLevel" :badge="badge">
        <p v-html="description"></p>
        <p v-if="relatedProp" class="inline-block">
            See <NuxtLink :to="setRelatedPropPath(relatedProp)" class="doc-option-link"> {{ relatedPropValue(relatedProp) }} </NuxtLink>
        </p>
    </DocSectionText>

    <div v-if="!data[0].data" class="doc-tablewrapper mt-4">
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
                    <td v-for="[k, v] in Object.entries(prop)" :key="k" :style="{ 'max-width': k === 'default' || k === 'returnType' ? '200px' : undefined }">
                        <template v-if="k !== 'readonly' && k !== 'optional' && k !== 'deprecated'">
                            <span v-if="k === 'name'" :id="id + '.' + v" class="doc-option-name" :class="{ 'line-through cursor-pointer': !!prop.deprecated }" :title="prop.deprecated">
                                {{ v }}<NuxtLink :to="`/${$router.currentRoute.value.name}/#${id}.${v}`" class="doc-option-link"> <i class="pi pi-link"></i> </NuxtLink>
                            </span>

                            <template v-else-if="k === 'type'">
                                <template v-for="(value, i) in getType(v)" :key="value">
                                    <span v-if="i !== 0" class="doc-option-type">{{ ' | ' }}</span>
                                    <NuxtLink v-if="isLinkType(value)" :to="setLinkPath(value)" class="doc-option-type doc-option-link">{{ value }}</NuxtLink
                                    ><span v-else class="doc-option-type">{{ value === 'T' ? 'any' : value }}</span>
                                </template>
                            </template>

                            <template v-else-if="k === 'options'">
                                <template v-for="val in v" :key="val.name">
                                    <div class="doc-option-type-options-container">
                                        {{ val.name }}: <span class="doc-option-type-options doc-option-type">{{ val.type === 'T' || (val.type.includes('\<T') && !val.type.includes('\<Tr')) ? 'any' : val.type }}</span>
                                    </div>
                                </template>
                            </template>

                            <template v-else-if="k === 'parameters'">
                                <div class="doc-option-params">
                                    <span v-if="v.name" class="doc-option-parameter-name"> {{ v.name }}: </span>
                                    <template v-for="(value, i) in getType(v.type)" :key="value">
                                        {{ i !== 0 ? ' | ' : '' }}<NuxtLink v-if="isLinkType(value)" :to="setLinkPath(value)" class="doc-option-link doc-option-parameter-type"> {{ value }} </NuxtLink>
                                        <span v-else :class="{ 'doc-option-parameter-type': label === 'Emits' }" v-html="value"> </span>
                                    </template>
                                </div>
                            </template>

                            <div v-else-if="k === 'default'" :id="id + '.' + k" :class="['doc-option-default', $appState.darkTheme ? 'doc-option-dark' : 'doc-option-light']">
                                {{ v === '' || v === undefined ? 'null' : v }}
                            </div>

                            <div v-else-if="k === 'returnType'" :id="id + '.' + k" :class="['doc-option-returnType', $appState.darkTheme ? 'doc-option-dark' : 'doc-option-light']">
                                {{ v }}
                            </div>

                            <template v-else>
                                <span v-if="typeof v === 'string' && v?.includes('<a')" :id="id + '.' + k" class="doc-option-description" v-html="v"> </span>
                                <span v-else :id="id + '.' + k" class="doc-option-description">{{ v }} </span>
                            </template>
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
        badge: null
    },
    methods: {
        getType(value) {
            if (this.label === 'Slots') {
                return value?.split('|');
            }

            return value?.split('|').map((item) => {
                return item.replace(/(\|\|<).*$/gm, '').trim();
            });
        },
        isLinkType(value) {
            if (this.label === 'Slots' || value.includes('SharedPassThroughOption') || value.includes('PassThrough<')) return false;
            const validValues = ['confirmationoptions', 'toastmessageoptions'];

            return value.toLowerCase().includes(this.id.split('.')[1]) || validValues.includes(value.toLowerCase());
        },
        setLinkPath(value, type) {
            const currentRoute = this.$router.currentRoute.value.name;
            let componentName = this.id.split('.')[1];

            const validValues = ['menuitem', 'confirmationoptions'];
            let definationType = type ? type : value.includes('Type') ? 'types' : value.includes('Event') ? 'events' : validValues.includes(value.toLowerCase()) ? 'options' : 'interfaces';

            if (componentName.includes('toast')) {
                componentName = 'toast';
            }

            return definationType === 'options' ? `/${currentRoute}/#api.${definationType}.${value}` : `/${currentRoute}/#api.${componentName}.${definationType}.${value}`;
        },
        relatedPropValue(value) {
            return this.findRelatedProps(value).secondPart;
        },
        setRelatedPropPath(value) {
            let { firstPart, secondPart } = this.findRelatedProps(value);

            const docName = this.$route.name;

            firstPart = firstPart.toLowerCase().replace(docName, '');

            return this.setLinkPath(secondPart, firstPart);
        },
        findRelatedProps(value) {
            let firstPart = '';
            let secondPart = '';

            if (value.includes('.')) {
                const parts = value.split('.');

                firstPart = parts[0].trim();
                secondPart = parts[1].trim();
            } else if (value.includes('[')) {
                const start = value.indexOf("['") + 2;
                const end = value.indexOf("']");

                firstPart = value.slice(0, start - 2).trim();
                secondPart = value.slice(start, end).trim();
            }

            return { firstPart, secondPart };
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
