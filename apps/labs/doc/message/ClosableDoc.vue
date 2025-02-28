<template>
    <DocSectionText v-bind="$attrs">
        <p>Enable <i>closable</i> option to display an icon to remove a message.</p>
    </DocSectionText>
    <div class="card">
        <Message closable>Closable Message</Message>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Message closable>Closable Message</Message>
`,
                options: `
<template>
    <div class="card">
        <Message closable>Closable Message</Message>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Message closable>Closable Message</Message>
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
