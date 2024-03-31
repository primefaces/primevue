<template>
    <DocSectionText v-bind="$attrs">
        <p>Message component is handy when displaying error messages next to form elements.</p>
    </DocSectionText>
    <div class="card">
        <div class="flex flex-wrap align-items-center mb-3 gap-2">
            <label for="username" class="p-sr-only">Username</label>
            <InputText id="username" placeholder="Username" invalid />
            <InlineMessage>Username is required</InlineMessage>
        </div>
        <div class="flex flex-wrap align-items-center gap-2">
            <label for="email" class="p-sr-only">email</label>
            <InputText id="email" placeholder="Email" invalid />
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
<div class="flex flex-wrap align-items-center mb-3 gap-2">
    <label for="username" class="p-sr-only">Username</label>
    <InputText id="username" placeholder="Username" invalid />
    <InlineMessage>Username is required</InlineMessage>
</div>
<div class="flex flex-wrap align-items-center gap-2">
    <label for="email" class="p-sr-only">email</label>
    <InputText id="email" placeholder="Email" invalid />
    <InlineMessage />
</div>
`,
                options: `
<template>
    <div class="card">
        <div class="flex flex-wrap align-items-center mb-3 gap-2">
            <label for="username" class="p-sr-only">Username</label>
            <InputText id="username" placeholder="Username" invalid />
            <InlineMessage>Username is required</InlineMessage>
        </div>
        <div class="flex flex-wrap align-items-center gap-2">
            <label for="email" class="p-sr-only">email</label>
            <InputText id="email" placeholder="Email" invalid />
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
        <div class="flex flex-wrap align-items-center mb-3 gap-2">
            <label for="username" class="p-sr-only">Username</label>
            <InputText id="username" placeholder="Username" invalid />
            <InlineMessage>Username is required</InlineMessage>
        </div>
        <div class="flex flex-wrap align-items-center gap-2">
            <label for="email" class="p-sr-only">email</label>
            <InputText id="email" placeholder="Email" invalid />
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
