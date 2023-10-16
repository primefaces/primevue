<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <div class="card">
        <Message
            :pt="{
                root: { class: 'bg-yellow-100' }
            }"
        >
            Message Content
        </Message>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Message
    :pt="{
        root: { class: 'bg-yellow-100' }
    }"
>
    Message Content
</Message>
`,
                options: `
<template>
    <div class="card">
        <Message
            :pt="{
                root: { class: 'bg-yellow-100' }
            }"
        >
            Message Content
        </Message>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Message
            :pt="{
                root: { class: 'bg-yellow-100' }
            }"
        >
            Message Content
        </Message>
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
