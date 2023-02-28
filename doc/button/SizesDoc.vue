<template>
    <DocSectionText v-bind="$attrs">
        <p>Button provides <i>small</i> and <i>large</i> sizes as alternatives to the standard.</p>
    </DocSectionText>
    <div class="card flex flex-wrap align-items-center justify-content-center gap-3">
        <Button label="Small" icon="pi pi-check" class="p-button-sm" />
        <Button label="Normal" icon="pi pi-check" class="p-button" />
        <Button label="Large" icon="pi pi-check" class="p-button-lg" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button label="Small" icon="pi pi-check" class="p-button-sm" />
<Button label="Normal" icon="pi pi-check" class="p-button" />
<Button label="Large" icon="pi pi-check" class="p-button-lg" />`,
                options: `
<template>
    <div class="card flex flex-wrap align-items-center justify-content-center gap-3">
        <Button label="Small" icon="pi pi-check" class="p-button-sm" />
        <Button label="Normal" icon="pi pi-check" class="p-button" />
        <Button label="Large" icon="pi pi-check" class="p-button-lg" />
    </div>
</template>

<script>
<\/script>`,
                composition: `
<template>
    <div class="card flex flex-wrap align-items-center justify-content-center gap-3">
        <Button label="Small" icon="pi pi-check" class="p-button-sm" />
        <Button label="Normal" icon="pi pi-check" class="p-button" />
        <Button label="Large" icon="pi pi-check" class="p-button-lg" />
    </div>
</template>

<script setup>
<\/script>`
            }
        };
    }
};
</script>
