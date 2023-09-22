<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>severity</i> option specifies the type of the message.</p>
    </DocSectionText>
    <div class="card">
        <Message severity="success">Success Message Content</Message>
        <Message severity="info">Info Message Content</Message>
        <Message severity="warn">Warning Message Content</Message>
        <Message severity="error">Error Message Content</Message>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Message severity="success">Success Message Content</Message>
<Message severity="info">Info Message Content</Message>
<Message severity="warn">Warning Message Content</Message>
<Message severity="error">Error Message Content</Message>`,
                options: `
<template>
    <div class="card">
        <Message severity="success">Success Message Content</Message>
        <Message severity="info">Info Message Content</Message>
        <Message severity="warn">Warning Message Content</Message>
        <Message severity="error">Error Message Content</Message>
    </div>
</template>

<script>
<\/script>`,
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
