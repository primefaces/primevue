<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>severity</i> option specifies the type of the message.</p>
    </DocSectionText>
    <div class="card">
        <Message severity="success">Success Message</Message>
        <Message severity="info">Info Message</Message>
        <Message severity="warn">Warn Message</Message>
        <Message severity="error">Error Message</Message>
        <Message severity="secondary">Secondary Message</Message>
        <Message severity="contrast">Contrast Message</Message>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Message severity="success">Success Message</Message>
<Message severity="info">Info Message</Message>
<Message severity="warn">Warn Message</Message>
<Message severity="error">Error Message</Message>
<Message severity="secondary">Secondary Message</Message>
<Message severity="contrast">Contrast Message</Message>
`,
                options: `
<template>
    <div class="card">
        <Message severity="success">Success Message</Message>
        <Message severity="info">Info Message</Message>
        <Message severity="warn">Warn Message</Message>
        <Message severity="error">Error Message</Message>
        <Message severity="secondary">Secondary Message</Message>
        <Message severity="contrast">Contrast Message</Message>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Message severity="success">Success Message</Message>
        <Message severity="info">Info Message</Message>
        <Message severity="warn">Warn Message</Message>
        <Message severity="error">Error Message</Message>
        <Message severity="secondary">Secondary Message</Message>
        <Message severity="contrast">Contrast Message</Message>
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
