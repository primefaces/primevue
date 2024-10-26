<template>
    <DocSectionText v-bind="$attrs">
        <p>Message provides <i>small</i> and <i>large</i> sizes as alternatives to the base.</p>
    </DocSectionText>
    <div class="card flex flex-col items-center gap-4">
        <Message size="small">Small Message</Message>
        <Message>Normal Message</Message>
        <Message size="large">Large Message</Message>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Message>Message Content</Message>
`,
                options: `
<template>
    <div class="card">
        <Message>Message Content</Message>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Message>Message Content</Message>
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
