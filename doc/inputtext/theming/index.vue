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
import StyledDoc from './StyledDoc.vue';
import UnstyledDoc from './UnstyledDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'styled',
                    label: 'Styled',
                    component: StyledDoc
                },
                {
                    id: 'unstyled',
                    label: 'Unstyled',
                    component: UnstyledDoc
                }
            ]
        };
    }
};
</script>
