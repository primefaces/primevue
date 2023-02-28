<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>icon</i> property can change the icon of the message.</p>
    </DocSectionText>
    <div class="card">
        <Message severity="info" icon="pi-send">Info Message Content</Message>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Message severity="info" icon="pi-send">Info Message Content</Message>`,
                options: `
<template>
    <div class="card">
        <Message severity="info" icon="pi-send">Info Message Content</Message>
    </div>
</template>

<script>
<\/script>`,
                composition: `
<template>
    <div class="card">
        <Message severity="info" icon="pi-send">Info Message Content</Message>
    </div>
</template>

<script setup>
<\/script>`
            }
        };
    }
};
</script>
