<template>
    <DocComponent title="Vue Ripple Component" header="Ripple" description="Ripple directive adds ripple effect to the host element." :componentDocs="docs" :apiDocs="['Ripple']" />
</template>

<script>
import AccessibilityDoc from '@/doc/ripple/AccessibilityDoc';
import ConfigurationDoc from '@/doc/ripple/ConfigurationDoc.vue';
import CustomDoc from '@/doc/ripple/CustomDoc';
import DefaultDoc from '@/doc/ripple/DefaultDoc';
import ImportDoc from '@/doc/ripple/ImportDoc';
import StyleDoc from '@/doc/ripple/StyleDoc';

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
                    id: 'configuration',
                    label: 'Configuration',
                    component: ConfigurationDoc
                },
                {
                    id: 'default',
                    label: 'Default',
                    component: DefaultDoc
                },
                {
                    id: 'custom',
                    label: 'Custom',
                    component: CustomDoc
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
