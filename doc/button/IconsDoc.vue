<template>
    <DocSectionText v-bind="$attrs">
        <p>Icon of a button is specified with <i>icon</i> property and position is configured using <i>iconPos</i> attribute.</p>
    </DocSectionText>
    <div class="card flex flex-wrap gap-3 justify-content-center">
        <Button icon="pi pi-check" class="align-self-center" aria-label="Submit" />
        <Button label="Submit" icon="pi pi-check" class="align-self-center" />
        <Button label="Submit" icon="pi pi-check" iconPos="right" class="align-self-center" />
        <Button label="Submit" icon="pi pi-check" iconPos="top" />
        <Button label="Submit" icon="pi pi-check" iconPos="bottom" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button icon="pi pi-check" aria-label="Submit" />
<Button label="Submit" icon="pi pi-check" />
<Button label="Submit" icon="pi pi-check" iconPos="right" />
<Button label="Submit" icon="pi pi-check" iconPos="top" />
<Button label="Submit" icon="pi pi-check" iconPos="bottom" />
`,
                options: `
<template>
    <div class="card flex flex-wrap gap-3 justify-content-center">
        <Button icon="pi pi-check" aria-label="Submit" />
        <Button label="Submit" icon="pi pi-check" />
        <Button label="Submit" icon="pi pi-check" iconPos="right" />
        <Button label="Submit" icon="pi pi-check" iconPos="top" />
        <Button label="Submit" icon="pi pi-check" iconPos="bottom" />
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap gap-3 justify-content-center">
        <Button icon="pi pi-check" aria-label="Submit" />
        <Button label="Submit" icon="pi pi-check" />
        <Button label="Submit" icon="pi pi-check" iconPos="right" />
        <Button label="Submit" icon="pi pi-check" iconPos="top" />
        <Button label="Submit" icon="pi pi-check" iconPos="bottom" />
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
