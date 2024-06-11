<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>severity</i> option specifies the type of the message.</p>
    </DocSectionText>
    <div class="card flex flex-wrap items-center justify-center gap-4">
        <InlineMessage severity="success">Success Message</InlineMessage>
        <InlineMessage severity="info">Info Message</InlineMessage>
        <InlineMessage severity="warn">Warn Message</InlineMessage>
        <InlineMessage severity="error">Error Message</InlineMessage>
        <InlineMessage severity="secondary">Secondary Message</InlineMessage>
        <InlineMessage severity="contrast">Contrast Message</InlineMessage>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<InlineMessage severity="success">Success Message</InlineMessage>
<InlineMessage severity="info">Info Message</InlineMessage>
<InlineMessage severity="warn">Warn Message</InlineMessage>
<InlineMessage severity="error">Error Message</InlineMessage>
<InlineMessage severity="secondary">Secondary Message</InlineMessage>
<InlineMessage severity="contrast">Contrast Message</InlineMessage>
`,
                options: `
<template>
    <div class="card flex flex-wrap items-center justify-center gap-4">
        <InlineMessage severity="success">Success Message</InlineMessage>
        <InlineMessage severity="info">Info Message</InlineMessage>
        <InlineMessage severity="warn">Warn Message</InlineMessage>
        <InlineMessage severity="error">Error Message</InlineMessage>
        <InlineMessage severity="secondary">Secondary Message</InlineMessage>
        <InlineMessage severity="contrast">Contrast Message</InlineMessage>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap items-center justify-center gap-4">
        <InlineMessage severity="success">Success Message</InlineMessage>
        <InlineMessage severity="info">Info Message</InlineMessage>
        <InlineMessage severity="warn">Warn Message</InlineMessage>
        <InlineMessage severity="error">Error Message</InlineMessage>
        <InlineMessage severity="secondary">Secondary Message</InlineMessage>
        <InlineMessage severity="contrast">Contrast Message</InlineMessage>
    </div>
</template>

<script setup>
<\/script>
`
            }
        };
    }
};
</script>
