<template>
    <DocSectionText v-bind="$attrs">
        <p>Icon of a button is specified with <i>icon</i> property and position is configured using <i>iconPos</i> attribute.</p>
    </DocSectionText>
    <div class="card flex flex-col items-center gap-4">
        <div class="flex flex-wrap gap-4 justify-center">
            <Button icon="pi pi-home" aria-label="Save" />
            <Button label="Profile" icon="pi pi-user" />
            <Button label="Save" icon="pi pi-check" iconPos="right" />
        </div>
        <div class="flex flex-wrap gap-4 justify-center">
            <Button label="Search" icon="pi pi-search" iconPos="top" />
            <Button label="Update" icon="pi pi-refresh" iconPos="bottom" />
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
<Button icon="pi pi-home" aria-label="Save" />
<Button label="Profile" icon="pi pi-user" />
<Button label="Save" icon="pi pi-check" iconPos="right" />
<Button label="Search" icon="pi pi-search" iconPos="top" />
<Button label="Update" icon="pi pi-refresh" iconPos="bottom" />
`,
                options: `
<template>
    <div class="card flex flex-col items-center gap-4">
        <div class="flex flex-wrap gap-4 justify-center">
            <Button icon="pi pi-home" aria-label="Save" />
            <Button label="Profile" icon="pi pi-user" />
            <Button label="Save" icon="pi pi-check" iconPos="right" />
        </div>
        <div class="flex flex-wrap gap-4 justify-center">
            <Button label="Search" icon="pi pi-search" iconPos="top" />
            <Button label="Update" icon="pi pi-refresh" iconPos="bottom" />
        </div>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-col items-center gap-4">
        <div class="flex flex-wrap gap-4 justify-center">
            <Button icon="pi pi-home" aria-label="Save" />
            <Button label="Profile" icon="pi pi-user" />
            <Button label="Save" icon="pi pi-check" iconPos="right" />
        </div>
        <div class="flex flex-wrap gap-4 justify-center">
            <Button label="Search" icon="pi pi-search" iconPos="top" />
            <Button label="Update" icon="pi pi-refresh" iconPos="bottom" />
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
