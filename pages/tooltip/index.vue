<template>
    <DocComponent title="Vue Tooltip Directive" header="Tooltip" description="Tooltip directive provides advisory information for a component." :componentDocs="docs" :apiDocs="['Tooltip']" :themingDocs="themingDoc" />
</template>

<script>
import AccessibilityDoc from '@/doc/tooltip/AccessibilityDoc';
import DelayDoc from '@/doc/tooltip/DelayDoc';
import EventDoc from '@/doc/tooltip/EventDoc';
import ImportDoc from '@/doc/tooltip/ImportDoc';
import PositionDoc from '@/doc/tooltip/PositionDoc';
import TemplateDoc from '@/doc/tooltip/TemplateDoc';
import ThemingDoc from '@/doc/tooltip/theming/index.vue';

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
                    id: 'delay',
                    label: 'Delay',
                    component: DelayDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            themingDoc: ThemingDoc
        };
    }
};
</script>
