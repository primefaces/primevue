<template>
    <DocSectionText v-bind="$attrs">
        <p>Tooltip can be customized via <i>class</i> and <i>escape</i> properties.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-content-center gap-2">
        <InputText v-tooltip.right="{ value: `<h4 class='text-white'>PrimeVue Rocks!</h4>`, escape: true, class: 'custom-error' }" type="text" placeholder="Template Tooltip" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<InputText v-tooltip.right="{ value: \`<h4 class='text-white'>PrimeVue Rocks!</h4>\`, escape: true, class: 'custom-error' }" type="text" placeholder="Template Tooltip" />`,
                options: `
<template>
    <div class="card flex flex-wrap justify-content-center gap-2">
        <InputText v-tooltip.right="{ value: \`<h4 class='text-white'>PrimeVue Rocks!</h4>\`, escape: true, class: 'custom-error' }" type="text" placeholder="Template Tooltip" />
    </div>
</template>

<style>
.custom-error .p-tooltip-text {
    background-color: var(--pink-800);
    color: rgb(255, 255, 255);
}
.custom-error.p-tooltip-right .p-tooltip-arrow {
    border-right-color: var(--pink-800);
}
</style>`,
                composition: `
<template>
    <div class="card flex flex-wrap justify-content-center gap-2">
        <InputText v-tooltip.right="{ value: \`<h4 class='text-white'>PrimeVue Rocks!</h4>\`, escape: true, class: 'custom-error' }" type="text" placeholder="Template Tooltip" />
    </div>
</template>

<style>
.custom-error .p-tooltip-text {
    background-color: var(--pink-800);
    color: rgb(255, 255, 255);
}
.custom-error.p-tooltip-right .p-tooltip-arrow {
    border-right-color: var(--pink-800);
}
</style>`
            }
        };
    }
};
</script>

<style>
.custom-error .p-tooltip-text {
    background-color: var(--pink-800);
    color: rgb(255, 255, 255);
}
.custom-error.p-tooltip-right .p-tooltip-arrow {
    border-right-color: var(--pink-800);
}
</style>
