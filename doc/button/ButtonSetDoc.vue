<template>
    <DocSectionText v-bind="$attrs">
        <p>Multiple buttons are grouped when wrapped inside an element with <i>p-buttonset</i> class.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <span class="p-buttonset">
            <Button label="Save" icon="pi pi-check" />
            <Button label="Delete" icon="pi pi-trash" />
            <Button label="Cancel" icon="pi pi-times" />
        </span>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<span class="p-buttonset">
    <Button label="Save" icon="pi pi-check" />
    <Button label="Delete" icon="pi pi-trash" />
    <Button label="Cancel" icon="pi pi-times" />
</span>`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <span class="p-buttonset">
            <Button label="Save" icon="pi pi-check" />
            <Button label="Delete" icon="pi pi-trash" />
            <Button label="Cancel" icon="pi pi-times" />
        </span>
    </div>
</template>

<script>
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <span class="p-buttonset">
            <Button label="Save" icon="pi pi-check" />
            <Button label="Delete" icon="pi pi-trash" />
            <Button label="Cancel" icon="pi pi-times" />
        </span>
    </div>
</template>

<script setup>
<\/script>`
            }
        };
    }
};
</script>
