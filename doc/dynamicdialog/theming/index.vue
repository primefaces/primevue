<template>
    <div class="doc-main">
        <div class="doc-intro">
            <h1>DynamicDialog Theming</h1>
        </div>
        <DocSections :docs="docs" />
    </div>
    <DocSectionNav :docs="docs" />
</template>

<script>
import UnstyledDoc from './UnstyledDoc.vue';

export default {
    data() {
        return {
            docs: [
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
