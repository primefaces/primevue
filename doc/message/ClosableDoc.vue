<template>
    <DocSectionText v-bind="$attrs">
        <p>Messages are closable by default resulting in a close icon being displayed on top right corner. In order to disable closable messages, set <i>closable</i> to false.</p>
    </DocSectionText>
    <div class="card">
        <Message :closable="false">Message Content</Message>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Message :closable="false">Message Content</Message>`,
                options: `
<template>
    <div class="card">
        <Message :closable="false">Message Content</Message>
    </div>
</template>

<script>
<\/script>`,
                composition: `
<template>
    <div class="card">
        <Message :closable="false">Message Content</Message>
    </div>
</template>

<script setup>
<\/script>`
            }
        };
    }
};
</script>
