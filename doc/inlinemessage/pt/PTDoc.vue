<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <div class="card flex justify-content-center">
        <InlineMessage
            :pt="{
                root: { class: 'bg-yellow-100' },
                icon: { class: 'hidden' }
            }"
        >
            Username is required
        </InlineMessage>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<InlineMessage
    :pt="{
        root: { class: 'bg-yellow-100' },
        icon: { class: 'hidden' }
    }"
>
    Username is required
</InlineMessage>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <InlineMessage
            :pt="{
                root: { class: 'bg-indigo-100' },
                icon: { class: 'hidden' }
            }"
        >
            Username is required
        </InlineMessage>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <InlineMessage
            :pt="{
                root: { class: 'bg-indigo-100' },
                icon: { class: 'hidden' }
            }"
        >
            Username is required
        </InlineMessage>
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
