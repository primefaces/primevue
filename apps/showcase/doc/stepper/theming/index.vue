<template>
    <div class="doc-main">
        <div class="doc-intro">
            <h1>Stepper Theming</h1>
        </div>
        <DocSections :docs="docs" />
    </div>
    <DocSectionNav :docs="docs" />
</template>

<script>
import DocApiTable from '@/components/doc/DocApiTable.vue';
import { getStyleOptions, getTokenOptions } from '@/components/doc/helpers';
import TailwindDoc from './TailwindDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'theming.styled',
                    label: 'Styled',
                    children: [
                        {
                            id: 'theming.classes',
                            label: 'Stepper CSS Classes',
                            description: 'List of class names used in the styled mode.',
                            component: DocApiTable,
                            data: getStyleOptions('Stepper')
                        },
                        {
                            id: 'theming.classes',
                            label: 'StepList CSS Classes',
                            description: 'List of class names used in the styled mode.',
                            component: DocApiTable,
                            data: getStyleOptions('StepList')
                        },
                        {
                            id: 'theming.classes',
                            label: 'StepPanels CSS Classes',
                            description: 'List of class names used in the styled mode.',
                            component: DocApiTable,
                            data: getStyleOptions('StepPanels')
                        },
                        {
                            id: 'theming.classes',
                            label: 'StepItem CSS Classes',
                            description: 'List of class names used in the styled mode.',
                            component: DocApiTable,
                            data: getStyleOptions('StepItem')
                        },
                        {
                            id: 'theming.classes',
                            label: 'Step CSS Classes',
                            description: 'List of class names used in the styled mode.',
                            component: DocApiTable,
                            data: getStyleOptions('Step')
                        },
                        {
                            id: 'theming.classes',
                            label: 'StepPanel CSS Classes',
                            description: 'List of class names used in the styled mode.',
                            component: DocApiTable,
                            data: getStyleOptions('StepPanel')
                        },
                        {
                            id: 'theming.tokens',
                            label: 'Design Tokens',
                            description: 'List of design tokens used in a preset.',
                            component: DocApiTable,
                            data: getTokenOptions('Stepper')
                        }
                    ]
                },
                {
                    id: 'theming.unstyled',
                    label: 'Unstyled',
                    description: 'Theming is implemented with the pass through properties in unstyled mode.',
                    children: [
                        {
                            id: 'theming.tailwind',
                            label: 'Tailwind',
                            component: TailwindDoc
                        }
                    ]
                }
            ]
        };
    }
};
</script>
