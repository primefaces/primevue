<template>
    <DocSectionText v-bind="$attrs">
        <p>Configure the <i>variant</i> value as <i>plain</i> for messages without borders and backgrounds.</p>
    </DocSectionText>
    <div class="card flex flex-wrap gap-4 justify-center">
        <Message severity="success" variant="plain">Success Message</Message>
        <Message severity="info" variant="plain">Info Message</Message>
        <Message severity="warn" variant="plain">Warn Message</Message>
        <Message severity="error" variant="plain">Error Message</Message>
        <Message severity="secondary" variant="plain">Secondary Message</Message>
        <Message severity="contrast" variant="plain">Contrast Message</Message>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Message severity="success" variant="plain">Success Message</Message>
<Message severity="info" variant="plain">Info Message</Message>
<Message severity="warn" variant="plain">Warn Message</Message>
<Message severity="error" variant="plain">Error Message</Message>
<Message severity="secondary" variant="plain">Secondary Message</Message>
<Message severity="contrast" variant="plain">Contrast Message</Message>
`,
                options: `
<template>
    <div class="card flex flex-wrap gap-4 justify-center">
        <Message severity="success" variant="plain">Success Message</Message>
        <Message severity="info" variant="plain">Info Message</Message>
        <Message severity="warn" variant="plain">Warn Message</Message>
        <Message severity="error" variant="plain">Error Message</Message>
        <Message severity="secondary" variant="plain">Secondary Message</Message>
        <Message severity="contrast" variant="plain">Contrast Message</Message>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap gap-4 justify-center">
        <Message severity="success" variant="plain">Success Message</Message>
        <Message severity="info" variant="plain">Info Message</Message>
        <Message severity="warn" variant="plain">Warn Message</Message>
        <Message severity="error" variant="plain">Error Message</Message>
        <Message severity="secondary" variant="plain">Secondary Message</Message>
        <Message severity="contrast" variant="plain">Contrast Message</Message>
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
