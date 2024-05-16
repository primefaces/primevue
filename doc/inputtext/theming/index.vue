<template>
    <div class="doc-main">
        <div class="doc-intro">
            <h1>InputText Theming</h1>
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
                            label: 'CSS Classes',
                            description: 'List of class names used in the styled mode.',
                            component: DocApiTable,
                            data: getStyleOptions('InputText')
                        },
                        {
                            id: 'theming.tokens',
                            label: 'Design Tokens',
                            description: `List of design tokens used in <i>${this.$appState.preset}</i> Preset.`,
                            component: DocApiTable,
                            data: getTokenOptions(this.$appState.preset, 'InputText')
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
    },
    watch: {
        '$appState.preset': {
            flush: 'post',
            handler(newValue) {
                this.docs[1] = { ...this.docs[1], description: `List of design tokens used in <i>${newValue}</i> Preset.`, data: getTokenOptions(newValue, 'InputText') };
            }
        }
    }
};
</script>
