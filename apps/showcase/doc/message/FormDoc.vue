<template>
    <DocSectionText v-bind="$attrs">
        <p>Validation errors in a form are displayed with the <i>error</i> severity.</p>
    </DocSectionText>
    <div class="card">
        <div class="flex flex-wrap mb-4 gap-2">
            <InputText placeholder="Username" aria-label="username" invalid />
            <Message severity="error">Username is required</Message>
        </div>
        <div class="flex flex-wrap gap-2">
            <InputText placeholder="Email" aria-label="email" invalid />
            <Message severity="error" icon="pi pi-times-circle" />
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
 <div class="flex flex-wrap mb-4 gap-2">
    <InputText placeholder="Username" aria-label="username" invalid />
    <Message severity="error">Username is required</Message>
</div>
<div class="flex flex-wrap gap-2">
    <InputText placeholder="Email" aria-label="email" invalid />
    <Message severity="error" icon="pi pi-times-circle" />
</div>
`,
                options: `
<template>
    <div class="card">
        <div class="flex flex-wrap mb-4 gap-2">
            <InputText placeholder="Username" aria-label="username" invalid />
            <Message severity="error">Username is required</Message>
        </div>
        <div class="flex flex-wrap gap-2">
            <InputText placeholder="Email" aria-label="email" invalid />
            <Message severity="error" icon="pi pi-times-circle" />
        </div>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <div class="flex flex-wrap mb-4 gap-2">
            <InputText placeholder="Username" aria-label="username" invalid />
            <Message severity="error">Username is required</Message>
        </div>
        <div class="flex flex-wrap gap-2">
            <InputText placeholder="Email" aria-label="email" invalid />
            <Message severity="error" icon="pi pi-times-circle" />
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
