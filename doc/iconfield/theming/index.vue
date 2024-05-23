<template>
    <div class="doc-main">
        <div class="doc-intro">
            <h1>IconField Theming</h1>
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
                            id: 'theming.classes.iconfield',
                            label: 'IconField CSS Classes',
                            description: 'List of class names used in the styled mode.',
                            component: DocApiTable,
                            data: getStyleOptions('IconField')
                        },
                        {
                            id: 'theming.classes.inputicon',
                            label: 'InputIcon CSS Classes',
                            description: 'List of class names used in the styled mode.',
                            component: DocApiTable,
                            data: getStyleOptions('InputIcon')
                        },
                        {
                            id: 'theming.tokens',
                            label: 'Design Tokens',
                            description: 'List of design tokens used in a preset.',
                            component: DocApiTable,
                            data: getTokenOptions('IconField')
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
