<template>
    <div class="doc-main">
        <div class="doc-intro">
            <h1>DeferredContent Theming</h1>
        </div>
        <DocSections :docs="docs" />
    </div>
    <DocSectionNav :docs="docs" />
</template>

<script>
import StyledDoc from './StyledDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'theming.styled',
                    label: 'Styled',
                    component: StyledDoc
                }
            ]
        };
    }
};
</script>
