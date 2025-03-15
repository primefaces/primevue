<template>
    <DocComponent title="Select" header="Select" description="Select is a form component to choose a value from a collection of options." :componentDocs="docs" :apiDocs="['Select']" :ptDocs="ptDocs">
        <template v-slot:default="{ pt }">
            <DocSectionNav />
            <BasicDoc :pt="pt" />
            <GroupDoc :pt="pt" />
            <RTLDemo :pt="pt" />
            <TemplateDoc :pt="pt" />
            <FilterDoc :pt="pt" />
            <FloatLabelDoc :pt="pt" />
            <InvalidDoc :pt="pt" />
            <DisabledDoc :pt="pt" />
            <VirtualScrollDoc :pt="pt" />
            <StyleDoc />
            <AccessibilityDoc />
        </template>
    </DocComponent>
</template>

<script>
import AccessibilityDoc from './AccessibilityDoc.vue';
import BasicDoc from './BasicDoc.vue';
import DisabledDoc from './DisabledDoc.vue';
import FilterDoc from './FilterDoc.vue';
import FloatLabelDoc from './FloatLabelDoc.vue';
import GroupDoc from './GroupDoc.vue';
import InvalidDoc from './InvalidDoc.vue';
import RTLDemo from './RTLDemo.vue';
import StyleDoc from './StyleDoc.vue';
import TemplateDoc from './TemplateDoc.vue';
import VirtualScrollDoc from './VirtualScrollDoc.vue';

export default {
    components: {
        AccessibilityDoc,
        BasicDoc,
        DisabledDoc,
        FilterDoc,
        FloatLabelDoc,
        GroupDoc,
        InvalidDoc,
        RTLDemo,
        StyleDoc,
        TemplateDoc,
        VirtualScrollDoc
    },
    data() {
        return {
            docs: {
                basic: {
                    id: 'basic',
                    label: 'Basic',
                    component: 'select/BasicDoc'
                },
                group: {
                    id: 'group',
                    label: 'Group',
                    component: 'select/GroupDoc'
                },
                rtl: {
                    id: 'rtl',
                    label: 'RTL',
                    component: 'select/RTLDemo'
                },
                template: {
                    id: 'template',
                    label: 'Template',
                    component: 'select/TemplateDoc'
                },
                filter: {
                    id: 'filter',
                    label: 'Filter',
                    component: 'select/FilterDoc'
                },
                floatlabel: {
                    id: 'floatlabel',
                    label: 'Float Label',
                    component: 'select/FloatLabelDoc'
                },
                invalid: {
                    id: 'invalid',
                    label: 'Invalid',
                    component: 'select/InvalidDoc'
                },
                disabled: {
                    id: 'disabled',
                    label: 'Disabled',
                    component: 'select/DisabledDoc'
                },
                virtualscroll: {
                    id: 'virtualscroll',
                    label: 'Virtual Scroll',
                    component: 'select/VirtualScrollDoc'
                },
                style: {
                    id: 'style',
                    label: 'Style',
                    component: 'select/StyleDoc'
                },
                accessibility: {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: 'select/AccessibilityDoc'
                }
            },
            ptDocs: ['select']
        };
    }
};
</script>
