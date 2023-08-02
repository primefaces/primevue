<template>
    <DocSectionText v-bind="$attrs">
        <p>Theming is implemented with the pass through properties in unstyled mode. Example below demonstrates the built-in Tailwind theme.</p>
    </DocSectionText>
    <DocSectionCode :code="code" embedded />
</template>

<script>
export default {
    data() {
        return {
            code: {
                composition: `
<template>
    <div class="card flex flex-wrap align-center justify-center gap-3">
        <InlineMessage severity="success">Success Content</InlineMessage>
        <InlineMessage severity="info">Info Content</InlineMessage>
        <InlineMessage severity="warn">Warning Content</InlineMessage>
        <InlineMessage severity="error">Error Content</InlineMessage>
    </div>
</template>

<script setup>
<\/script>`
            }
        };
    }
};
</script>
