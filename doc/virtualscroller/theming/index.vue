<template>
    <div class="doc-main">
        <div class="doc-intro">
            <h1>VirtualScroller Theming</h1>
        </div>
        <DocSections :docs="docs" />
    </div>
    <DocSectionNav :docs="docs" />
</template>

<script>
import DocApiTable from '@/components/doc/DocApiTable.vue';
import { getStyleOptions } from '@/components/doc/helpers';

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
                            data: getStyleOptions('VirtualScroller')
                        }
                    ]
                }
            ]
        };
    }
};
</script>
