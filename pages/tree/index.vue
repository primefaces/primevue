<template>
    <DocComponent title="Vue Tree Component" header="Tree" description="Tree is used to display hierarchical data." :componentDocs="docs" :apiDocs="['Tree', 'TreeNode']" :ptTabComponent="ptComponent" :themingDocs="themingDoc" />
</template>
<script>
import AccessibilityDoc from '@/doc/tree/AccessibilityDoc.vue';
import BasicDoc from '@/doc/tree/BasicDoc.vue';
import ControlledDoc from '@/doc/tree/ControlledDoc.vue';
import EventsDoc from '@/doc/tree/EventsDoc.vue';
import FilterDoc from '@/doc/tree/FilterDoc.vue';
import ImportDoc from '@/doc/tree/ImportDoc.vue';
import LazyDoc from '@/doc/tree/LazyDoc.vue';
import TemplateDoc from '@/doc/tree/TemplateDoc.vue';
import PTComponent from '@/doc/tree/pt/index.vue';
import CheckboxDoc from '@/doc/tree/selection/CheckboxDoc.vue';
import MultipleDoc from '@/doc/tree/selection/MultipleDoc.vue';
import SingleDoc from '@/doc/tree/selection/SingleDoc.vue';
import ThemingDoc from '@/doc/tree/theming/index.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'import',
                    label: 'Import',
                    component: ImportDoc
                },
                {
                    id: 'basic',
                    label: 'Basic',
                    component: BasicDoc
                },
                {
                    id: 'controlled',
                    label: 'Controlled',
                    component: ControlledDoc
                },
                {
                    id: 'selection',
                    label: 'Selection',
                    children: [
                        {
                            id: 'single',
                            label: 'Single',
                            component: SingleDoc
                        },
                        {
                            id: 'multiple',
                            label: 'Multiple',
                            component: MultipleDoc
                        },
                        {
                            id: 'checkbox',
                            label: 'Checkbox',
                            component: CheckboxDoc
                        }
                    ]
                },
                {
                    id: 'events',
                    label: 'Events',
                    component: EventsDoc
                },
                {
                    id: 'lazy',
                    label: 'Lazy',
                    component: LazyDoc
                },
                {
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
                },
                {
                    id: 'filter',
                    label: 'Filter',
                    component: FilterDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            ptComponent: PTComponent,
            themingDoc: ThemingDoc
        };
    }
};
</script>
