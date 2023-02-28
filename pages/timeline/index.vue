<template>
    <DocComponent title="Vue Timeline Component" header="Timeline" description="Timeline visualizes a series of chained events." :componentDocs="docs" :apiDocs="['Timeline']" />
</template>

<script>
import AccessibilityDoc from '@/doc/timeline/AccessibilityDoc';
import AlignmentDoc from '@/doc/timeline/AlignmentDoc';
import BasicDoc from '@/doc/timeline/BasicDoc';
import HorizontalDoc from '@/doc/timeline/HorizontalDoc';
import ImportDoc from '@/doc/timeline/ImportDoc';
import OppositeDoc from '@/doc/timeline/OppositeDoc';
import StyleDoc from '@/doc/timeline/StyleDoc';
import TemplateDoc from '@/doc/timeline/TemplateDoc';

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
                    id: 'alignment',
                    label: 'Alignment',
                    component: AlignmentDoc
                },
                {
                    id: 'opposite',
                    label: 'Opposite',
                    component: OppositeDoc
                },
                {
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
                },
                {
                    id: 'horizontal',
                    label: 'Horizontal',
                    component: HorizontalDoc
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

<style lang="scss" scoped>
@media screen and (max-width: 960px) {
    ::v-deep(.customized-timeline) {
        .p-timeline-event:nth-child(even) {
            flex-direction: row !important;

            .p-timeline-event-content {
                text-align: left !important;
            }
        }

        .p-timeline-event-opposite {
            flex: 0;
        }

        .p-card {
            margin-top: 1rem;
        }
    }
}
</style>
