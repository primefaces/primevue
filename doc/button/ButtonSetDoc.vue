<template>
    <DocSectionText v-bind="$attrs">
        <p>Multiple buttons are grouped when wrapped inside an element with <i>ButtonSet</i> component.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <ButtonSet>
            <Button label="Save" icon="pi pi-check" />
            <Button label="Delete" icon="pi pi-trash" />
            <Button label="Cancel" icon="pi pi-times" />
        </ButtonSet>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<ButtonSet>
    <Button label="Save" icon="pi pi-check" />
    <Button label="Delete" icon="pi pi-trash" />
    <Button label="Cancel" icon="pi pi-times" />
</ButtonSet>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <ButtonSet>
            <Button label="Save" icon="pi pi-check" />
            <Button label="Delete" icon="pi pi-trash" />
            <Button label="Cancel" icon="pi pi-times" />
        </ButtonSet>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <ButtonSet>
            <Button label="Save" icon="pi pi-check" />
            <Button label="Delete" icon="pi pi-trash" />
            <Button label="Cancel" icon="pi pi-times" />
        </ButtonSet>
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
