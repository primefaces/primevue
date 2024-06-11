<template>
    <DocSectionText v-bind="$attrs">
        <p>Messages are closable by default, disable <i>closable</i> option to remove the close button.</p>
    </DocSectionText>
    <div class="card">
        <Message :closable="false">Not Closable</Message>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Message :closable="false">Not Closable</Message>
`,
                options: `
<template>
    <div class="card">
        <Message :closable="false">Not Closable</Message>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Message :closable="false">Not Closable</Message>
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
