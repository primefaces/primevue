<template>
    <DocSectionText v-bind="$attrs">
        <p>Validation errors in a form are displayed with the <i>error</i> severity.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <div class="flex flex-col gap-4">
            <Message severity="error" icon="pi pi-times-circle" class="mb-2">Validation Failed</Message>
            <div class="flex flex-col">
                <InputText placeholder="Username" aria-label="username" invalid />
                <Message severity="error" variant="plain" size="small">Username is required</Message>
            </div>
            <div class="flex flex-col">
                <InputText placeholder="Email" aria-label="email" invalid />
                <Message severity="error" variant="plain" size="small">Email is not valid</Message>
            </div>
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
<div class="flex flex-col gap-4">
    <Message severity="error" icon="pi pi-times-circle" class="mb-2">Validation Failed</Message>
    <div class="flex flex-col">
        <InputText placeholder="Username" aria-label="username" invalid />
        <Message severity="error" variant="plain" size="small">Username is required</Message>
    </div>
    <div class="flex flex-col">
        <InputText placeholder="Email" aria-label="email" invalid />
        <Message severity="error" variant="plain" size="small">Email is not valid</Message>
    </div>
</div>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <div class="flex flex-col gap-4">
            <Message severity="error" icon="pi pi-times-circle" class="mb-2">Validation Failed</Message>
            <div class="flex flex-col">
                <InputText placeholder="Username" aria-label="username" invalid />
                <Message severity="error" variant="plain" size="small">Username is required</Message>
            </div>
            <div class="flex flex-col">
                <InputText placeholder="Email" aria-label="email" invalid />
                <Message severity="error" variant="plain" size="small">Email is not valid</Message>
            </div>
        </div>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <div class="flex flex-col gap-4">
            <Message severity="error" icon="pi pi-times-circle" class="mb-2">Validation Failed</Message>
            <div class="flex flex-col">
                <InputText placeholder="Username" aria-label="username" invalid />
                <Message severity="error" variant="plain" size="small">Username is required</Message>
            </div>
            <div class="flex flex-col">
                <InputText placeholder="Email" aria-label="email" invalid />
                <Message severity="error" variant="plain" size="small">Email is not valid</Message>
            </div>
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
