<template>
    <DocComponent title="Vue Tooltip Component" header="Tooltip" description="Tooltip directive provides advisory information for a component." :componentDocs="docs" :presetDoc="presetDoc" apiLink="/tooltip/#api" ptLink="/tooltip/#pt" />
</template>

<script>
import AccessibilityDoc from '@/doc/tooltip/AccessibilityDoc.vue';
import AutoHideDoc from '@/doc/tooltip/AutoHideDoc.vue';
import CustomDoc from '@/doc/tooltip/CustomDoc.vue';
import DelayDoc from '@/doc/tooltip/DelayDoc.vue';
import EventDoc from '@/doc/tooltip/EventDoc.vue';
import ImportDoc from '@/doc/tooltip/ImportDoc.vue';
import PositionDoc from '@/doc/tooltip/PositionDoc.vue';

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
                    id: 'autohide',
                    label: 'Auto Hide',
                    component: AutoHideDoc
                },
                {
                    id: 'delay',
                    label: 'Delay',
                    component: DelayDoc
                },
                {
                    id: 'custom',
                    label: 'Custom',
                    component: CustomDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            presetDoc: {
                key: 'directives.tooltip'
            }
        };
    }
};
</script>
