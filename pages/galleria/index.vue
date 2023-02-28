<template>
    <DocComponent title="Vue Gallery Component" header="Galleria" description="Galleria is a content gallery component." :componentDocs="docs" :apiDocs="['Galleria']" />
</template>

<script>
import AccessibilityDoc from '@/doc/galleria/AccessibilityDoc';
import AdvancedDoc from '@/doc/galleria/AdvancedDoc';
import AutoPlayDoc from '@/doc/galleria/AutoPlayDoc';
import BasicDoc from '@/doc/galleria/BasicDoc';
import CaptionDoc from '@/doc/galleria/CaptionDoc';
import ControlledDoc from '@/doc/galleria/ControlledDoc';
import CustomContentDoc from '@/doc/galleria/fullscreen/CustomContentDoc';
import WithoutThumbnailsDoc from '@/doc/galleria/fullscreen/WithoutThumbnailsDoc';
import WithThumbnailsDoc from '@/doc/galleria/fullscreen/WithThumbnailsDoc';
import ImportDoc from '@/doc/galleria/ImportDoc';
import ClickEventDoc from '@/doc/galleria/indicator/ClickEventDoc';
import HoverEventDoc from '@/doc/galleria/indicator/HoverEventDoc';
import PositionDoc from '@/doc/galleria/indicator/PositionDoc';
import TemplateDoc from '@/doc/galleria/indicator/TemplateDoc';
import HoverDoc from '@/doc/galleria/navigator/HoverDoc';
import IndicatorsDoc from '@/doc/galleria/navigator/IndicatorsDoc';
import ItemThumbnailsDoc from '@/doc/galleria/navigator/ItemThumbnailsDoc';
import ItemWithoutThumbnailsDoc from '@/doc/galleria/navigator/ItemWithoutThumbnailsDoc';
import ResponsiveDoc from '@/doc/galleria/ResponsiveDoc';
import StyleDoc from '@/doc/galleria/StyleDoc';
import ThumbnailDoc from '@/doc/galleria/ThumbnailDoc';

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
