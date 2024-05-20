<template>
    <DocSectionText v-bind="$attrs">
        <p>StyleClass has two modes, <i>toggleClass</i> to simply add-remove a class and enter/leave animations.</p>
    </DocSectionText>
    <div class="card flex flex-col items-center gap-4">
        <Button v-styleclass="{ selector: '@next', toggleClass: 'p-disabled' }" label="Toggle .p-disabled" />
        <InputText />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button v-styleclass="{ selector: '@next', toggleClass: 'p-disabled' }" label="Toggle p-disabled" />
<InputText />
`,
                options: `
<template>
    <div class="card flex flex-col items-center gap-4">
        <Button v-styleclass="{ selector: '@next', toggleClass: 'p-disabled' }" label="Toggle .p-disabled" />
        <InputText />
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-col items-center gap-4">
        <Button v-styleclass="{ selector: '@next', toggleClass: 'p-disabled' }" label="Toggle .p-disabled" />
        <InputText />
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
