<template>
    <DocComponent title="Vue SplitButton Component" header="SplitButton" description="SplitButton groups a set of commands in an overlay with a default command." :componentDocs="docs" :apiDocs="['SplitButton']" />
</template>

<script>
import AccessibilityDoc from '@/doc/splitbutton/AccessibilityDoc.vue';
import BasicDoc from '@/doc/splitbutton/BasicDoc.vue';
import DisabledDoc from '@/doc/splitbutton/DisabledDoc.vue';
import ImportDoc from '@/doc/splitbutton/ImportDoc.vue';
import OutlinedDoc from '@/doc/splitbutton/OutlinedDoc.vue';
import RaisedDoc from '@/doc/splitbutton/RaisedDoc.vue';
import RaisedTextDoc from '@/doc/splitbutton/RaisedTextDoc.vue';
import RoundedDoc from '@/doc/splitbutton/RoundedDoc.vue';
import SeverityDoc from '@/doc/splitbutton/SeverityDoc.vue';
import SizesDoc from '@/doc/splitbutton/SizesDoc.vue';
import StyleDoc from '@/doc/splitbutton/StyleDoc.vue';
import TemplateDoc from '@/doc/splitbutton/TemplateDoc.vue';
import TextDoc from '@/doc/splitbutton/TextDoc.vue';

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
                    id: 'severity',
                    label: 'Severity',
                    component: SeverityDoc
                },
                {
                    id: 'raised',
                    label: 'Raised',
                    component: RaisedDoc
                },
                {
                    id: 'rounded',
                    label: 'Rounded',
                    component: RoundedDoc
                },
                {
                    id: 'text',
                    label: 'Text',
                    component: TextDoc
                },
                {
                    id: 'raisedtext',
                    label: 'Raised Text',
                    component: RaisedTextDoc
                },
                {
                    id: 'outlined',
                    label: 'Outlined',
                    component: OutlinedDoc
                },
                {
                    id: 'sizes',
                    label: 'Sizes',
                    component: SizesDoc
                },
                {
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
                },
                {
                    id: 'disabled',
                    label: 'Disabled',
                    component: DisabledDoc
                },
                {
                    id: 'style',
                    label: 'Style',
                    component: StyleDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ]
        };
    }
};
</script>
