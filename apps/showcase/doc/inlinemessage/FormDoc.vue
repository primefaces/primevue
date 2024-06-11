<template>
    <DocSectionText v-bind="$attrs">
        <p>Message component is handy when displaying error messages next to form elements.</p>
    </DocSectionText>
    <div class="card">
        <div class="flex flex-wrap items-center mb-4 gap-2">
            <InputText placeholder="Username" aria-label="username" invalid />
            <InlineMessage>Username is required</InlineMessage>
        </div>
        <div class="flex flex-wrap items-center gap-2">
            <InputText placeholder="Email" aria-label="email" invalid />
            <InlineMessage />
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<div class="flex flex-wrap items-center mb-4 gap-2">
    <InputText placeholder="Username" aria-label="username" invalid />
    <InlineMessage>Username is required</InlineMessage>
</div>
<div class="flex flex-wrap items-center gap-2">
    <InputText placeholder="Email" aria-label="email" invalid />
    <InlineMessage />
</div>
`,
                options: `
<template>
    <div class="card">
        <div class="flex flex-wrap items-center mb-4 gap-2">
            <InputText placeholder="Username" aria-label="username" invalid />
            <InlineMessage>Username is required</InlineMessage>
        </div>
        <div class="flex flex-wrap items-center gap-2">
            <InputText placeholder="Email" aria-label="email" invalid />
            <InlineMessage />
        </div>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <div class="flex flex-wrap items-center mb-4 gap-2">
            <InputText placeholder="Username" aria-label="username" invalid />
            <InlineMessage>Username is required</InlineMessage>
        </div>
        <div class="flex flex-wrap items-center gap-2">
            <InputText placeholder="Email" aria-label="email" invalid />
            <InlineMessage />
        </div>
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
