<template>
    <DocComponent title="Vue Gallery Component" header="Galleria" description="Galleria is a content gallery component." :componentDocs="docs" :apiDocs="['Galleria']" :ptTabComponent="ptComponent" :themingDocs="themingDoc" />
</template>

<script>
import AccessibilityDoc from '@/doc/galleria/AccessibilityDoc.vue';
import AdvancedDoc from '@/doc/galleria/AdvancedDoc.vue';
import AutoPlayDoc from '@/doc/galleria/AutoPlayDoc.vue';
import BasicDoc from '@/doc/galleria/BasicDoc.vue';
import CaptionDoc from '@/doc/galleria/CaptionDoc.vue';
import ControlledDoc from '@/doc/galleria/ControlledDoc.vue';
import ImportDoc from '@/doc/galleria/ImportDoc.vue';
import ThumbnailDoc from '@/doc/galleria/ThumbnailDoc.vue';
import ResponsiveDoc from '@/doc/galleria/ResponsiveDoc.vue';
import CustomContentDoc from '@/doc/galleria/fullscreen/CustomContentDoc.vue';
import WithThumbnailsDoc from '@/doc/galleria/fullscreen/WithThumbnailsDoc.vue';
import WithoutThumbnailsDoc from '@/doc/galleria/fullscreen/WithoutThumbnailsDoc.vue';
import ClickEventDoc from '@/doc/galleria/indicator/ClickEventDoc.vue';
import HoverEventDoc from '@/doc/galleria/indicator/HoverEventDoc.vue';
import PositionDoc from '@/doc/galleria/indicator/PositionDoc.vue';
import TemplateDoc from '@/doc/galleria/indicator/TemplateDoc.vue';
import HoverDoc from '@/doc/galleria/navigator/HoverDoc.vue';
import IndicatorsDoc from '@/doc/galleria/navigator/IndicatorsDoc.vue';
import ItemThumbnailsDoc from '@/doc/galleria/navigator/ItemThumbnailsDoc.vue';
import ItemWithoutThumbnailsDoc from '@/doc/galleria/navigator/ItemWithoutThumbnailsDoc.vue';
import PTComponent from '@/doc/galleria/pt/index.vue';
import ThemingDoc from '@/doc/galleria/theming/index.vue';

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
                    id: 'indicator',
                    label: 'Indicator',
                    description: 'Indicators allow quick navigation between the items.',
                    children: [
                        {
                            id: 'indicatorbasic',
                            label: 'Click Event',
                            component: ClickEventDoc
                        },
                        {
                            id: 'indicatorhoverevent',
                            label: 'Hover Event',
                            component: HoverEventDoc
                        },
                        {
                            id: 'indicatorposition',
                            label: 'Position',
                            component: PositionDoc
                        },
                        {
                            id: 'indicatortemplate',
                            label: 'Template',
                            component: TemplateDoc
                        }
                    ]
                },
                {
                    id: 'thumbnail',
                    label: 'Thumbnail',
                    component: ThumbnailDoc
                },
                {
                    id: 'responsive',
                    label: 'Responsive',
                    component: ResponsiveDoc
                },
                {
                    id: 'fullscreen',
                    label: 'Full Screen',
                    description: 'In fullscreen mode content covers the whole page over a modal layer.',
                    children: [
                        {
                            id: 'fullscreenwiththumbnail',
                            label: 'With Thumbnails',
                            component: WithThumbnailsDoc
                        },
                        {
                            id: 'fullscreenwithoutthumnails',
                            label: 'Without Thumbnails',
                            component: WithoutThumbnailsDoc
                        },
                        {
                            id: 'fullscreencustom',
                            label: 'Custom Content',
                            component: CustomContentDoc
                        }
                    ]
                },
                {
                    id: 'navigator',
                    label: 'Navigator',
                    description: 'Navigators are used to move back and forth between the images.',
                    children: [
                        {
                            id: 'itemthumbnails',
                            label: 'With Thumbnails',
                            component: ItemThumbnailsDoc
                        },
                        {
                            id: 'itemwithouthumbnails',
                            label: 'Without Thumbnails',
                            component: ItemWithoutThumbnailsDoc
                        },
                        {
                            id: 'itemhover',
                            label: 'Display on Hover',
                            component: HoverDoc
                        },
                        {
                            id: 'indicators',
                            label: 'With Indicators',
                            component: IndicatorsDoc
                        }
                    ]
                },
                {
                    id: 'autoplay',
                    label: 'AutoPlay',
                    component: AutoPlayDoc
                },
                {
                    id: 'caption',
                    label: 'Caption',
                    component: CaptionDoc
                },
                {
                    id: 'advanced',
                    label: 'Advanced',
                    component: AdvancedDoc
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
