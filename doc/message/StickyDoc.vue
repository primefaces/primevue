<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Messages are sticky by default, if you require them to be cleared automatically, disable <i>sticky</i> property and optionally configure the <i>life</i> property to specify how long the message should be displayed which is 3000 ms by
            default.
        </p>
    </DocSectionText>
    <div class="card">
        <Message severity="success" sticky>Success Message Content</Message>
        <Message severity="info" sticky>Info Message Content</Message>
        <Message severity="warn" sticky>Warning Message Content</Message>
        <Message severity="error" sticky>Error Message Content</Message>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Message severity="success" sticky>Success Message Content</Message>
<Message severity="info" sticky>Info Message Content</Message>
<Message severity="warn" sticky>Warning Message Content</Message>
<Message severity="error" sticky>Error Message Content</Message>`,
                options: `
<template>
    <div class="card">
        <Message severity="success" sticky>Success Message Content</Message>
        <Message severity="info" sticky>Info Message Content</Message>
        <Message severity="warn" sticky>Warning Message Content</Message>
        <Message severity="error" sticky>Error Message Content</Message>
    </div>
</template>

<script>
<\/script>`,
                composition: `
<template>
    <div class="card">
        <Message severity="success" sticky>Success Message Content</Message>
        <Message severity="info" sticky>Info Message Content</Message>
        <Message severity="warn" sticky>Warning Message Content</Message>
        <Message severity="error" sticky>Error Message Content</Message>
    </div>
</template>

<script setup>
<\/script>`
            }
        };
    }
};
</script>
