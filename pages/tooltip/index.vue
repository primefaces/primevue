<template>
    <DocComponent title="Vue Tooltip Directive" header="Tooltip" description="Tooltip directive provides advisory information for a component." :componentDocs="docs" :apiDocs="['Tooltip']" />
</template>

<script>
import AccessibilityDoc from '@/doc/tooltip/AccessibilityDoc';
import EventDoc from '@/doc/tooltip/EventDoc';
import ImportDoc from '@/doc/tooltip/ImportDoc';
import PositionDoc from '@/doc/tooltip/PositionDoc';
import StyleDoc from '@/doc/tooltip/StyleDoc';
import TemplateDoc from '@/doc/tooltip/TemplateDoc';

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
                    id: 'position',
                    label: 'Position',
                    component: PositionDoc
                },
                {
                    id: 'event',
                    label: 'Event',
                    component: EventDoc
                },
                {
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
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
