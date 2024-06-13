<template>
    <DocSectionText v-bind="$attrs">
        <p>Message component requires a content to display.</p>
    </DocSectionText>
    <div class="card">
        <Message>Message Content</Message>
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
