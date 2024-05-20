<template>
    <DocSectionText v-bind="$attrs">
        <p>InlineMessage component requires a content to display.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <InlineMessage severity="info">Username is required</InlineMessage>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<InlineMessage severity="info">Username is required</InlineMessage>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <InlineMessage severity="info">Username is required</InlineMessage>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <InlineMessage severity="info">Username is required</InlineMessage>
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
