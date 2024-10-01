<template>
    <DocComponent title="Vue KeyFilter Component" header="KeyFilter" description="KeyFilter is a built-in feature of InputText to restrict user input based on a regular expression." :componentDocs="docs" :apiDocs="['KeyFilter']" />
</template>

<script>
import AccessibilityDoc from '@/doc/keyfilter/AccessibilityDoc.vue';
import ImportDoc from '@/doc/keyfilter/ImportDoc.vue';
import PresetsDoc from '@/doc/keyfilter/PresetsDoc.vue';
import RegexDoc from '@/doc/keyfilter/RegexDoc.vue';
import RegexWordDoc from '@/doc/keyfilter/RegexWordDoc.vue';

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
                    id: 'presets',
                    label: 'Presets',
                    component: PresetsDoc
                },
                {
                    id: 'regex',
                    label: 'Regex (Single Keypress)',
                    component: RegexDoc
                },
                {
                    id: 'regexword',
                    label: 'Regex (Whole Word)',
                    component: RegexWordDoc
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
