<template>
    <DocSectionText v-bind="$attrs">
        <p>Buttons can be placed at either side of an input element.</p>
    </DocSectionText>
    <div class="card flex flex-column md:flex-row gap-3">
        <div class="p-inputgroup flex-1">
            <Button label="Search" />
            <InputText placeholder="Keyword" />
        </div>

        <div class="p-inputgroup flex-1">
            <InputText placeholder="Keyword" />
            <Button icon="pi pi-search" class="p-button-warning" />
        </div>

        <div class="p-inputgroup flex-1">
            <Button icon="pi pi-check" class="p-button-success" />
            <InputText placeholder="Vote" />
            <Button icon="pi pi-times" class="p-button-danger" />
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
<div class="p-inputgroup flex-1">
    <Button label="Search" />
    <InputText placeholder="Keyword" />
</div>

<div class="p-inputgroup flex-1">
    <InputText placeholder="Keyword" />
    <Button icon="pi pi-search" class="p-button-warning" />
</div>

<div class="p-inputgroup flex-1">
    <Button icon="pi pi-check" class="p-button-success" />
    <InputText placeholder="Vote" />
    <Button icon="pi pi-times" class="p-button-danger" />
</div>`,
                options: `
<template>
    <div class="card flex flex-column md:flex-row gap-3">
        <div class="p-inputgroup flex-1">
            <Button label="Search" />
            <InputText placeholder="Keyword" />
        </div>

        <div class="p-inputgroup flex-1">
            <InputText placeholder="Keyword" />
            <Button icon="pi pi-search" class="p-button-warning" />
        </div>

        <div class="p-inputgroup flex-1">
            <Button icon="pi pi-check" class="p-button-success" />
            <InputText placeholder="Vote" />
            <Button icon="pi pi-times" class="p-button-danger" />
        </div>
    </div>
</template>`,
                composition: `
<template>
    <div class="card flex flex-column md:flex-row gap-3">
        <div class="p-inputgroup flex-1">
            <Button label="Search" />
            <InputText placeholder="Keyword" />
        </div>

        <div class="p-inputgroup flex-1">
            <InputText placeholder="Keyword" />
            <Button icon="pi pi-search" class="p-button-warning" />
        </div>

        <div class="p-inputgroup flex-1">
            <Button icon="pi pi-check" class="p-button-success" />
            <InputText placeholder="Vote" />
            <Button icon="pi pi-times" class="p-button-danger" />
        </div>
    </div>
</template>`
            }
        };
    }
};
</script>
