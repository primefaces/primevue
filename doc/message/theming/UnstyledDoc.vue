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
    <div class="card">
        <Message severity="success">Success Message Content</Message>
        <Message severity="info">Info Message Content</Message>
        <Message severity="warn">Warning Message Content</Message>
        <Message severity="error">Error Message Content</Message>
    </div>
</template>

<script setup>
<\/script>`
            }
        };
    }
};
</script>
