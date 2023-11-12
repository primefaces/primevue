<template>
    <DocSectionText v-bind="$attrs"> </DocSectionText>
    <div class="card flex flex-wrap gap-3 justify-content-center">
        <Button label="Submit" icon="pi pi-check" :pt="{ root: { class: 'bg-indigo-600 border-indigo-600' } }" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button label="Submit" icon="pi pi-check"
    :pt="{ 
        root: { class: 'bg-indigo-600 border-indigo-600' } 
    }"
/>
`,
                options: `
<template>
    <div class="card flex flex-wrap gap-3 justify-content-center">
        <Button label="Submit" icon="pi pi-check"
            :pt="{ 
                root: { class: 'bg-indigo-600 border-indigo-600' } 
            }"
        />
    </div>
</template>
`,
                composition: `
<template>
    <div class="card flex flex-wrap gap-3 justify-content-center">
        <Button label="Submit" icon="pi pi-check"
            :pt="{ 
                root: { class: 'bg-indigo-600 border-indigo-600' } 
            }"
        />
    </div>
</template>
`
            }
        };
    }
};
</script>
