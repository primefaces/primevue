<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>severity</i> option specifies the type of the message.</p>
    </DocSectionText>
    <div class="card flex flex-wrap align-items-center justify-content-center gap-3">
        <InlineMessage severity="success">Success Content</InlineMessage>
        <InlineMessage severity="info">Info Content</InlineMessage>
        <InlineMessage severity="warn">Warning Content</InlineMessage>
        <InlineMessage severity="error">Error Content</InlineMessage>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<InlineMessage severity="success">Success Content</InlineMessage>
<InlineMessage severity="info">Info Content</InlineMessage>
<InlineMessage severity="warn">Warning Content</InlineMessage>
<InlineMessage severity="error">Error Content</InlineMessage>`,
                options: `
<template>
    <div class="card flex flex-wrap align-items-center justify-content-center gap-3">
        <InlineMessage severity="success">Success Content</InlineMessage>
        <InlineMessage severity="info">Info Content</InlineMessage>
        <InlineMessage severity="warn">Warning Content</InlineMessage>
        <InlineMessage severity="error">Error Content</InlineMessage>
    </div>
</template>

<script>
<\/script>`,
                composition: `
<template>
    <div class="card flex flex-wrap align-items-center justify-content-center gap-3">
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
