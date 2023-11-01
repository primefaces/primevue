<template>
    <DocSectionText v-bind="$attrs"> </DocSectionText>
    <div class="card flex justify-content-center">
        <Tag icon="pi pi-user" value="Waiting" :pt="{ root: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)', borderRadius: '24px' } } }" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Tag icon="pi pi-user" value="Waiting"
    :pt="{
        root: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)', borderRadius: '24px' } }
    }"
/>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Tag icon="pi pi-user" value="Waiting"
            :pt="{
                root: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)', borderRadius: '24px' } }
            }"
        />
    </div>
</template>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Tag icon="pi pi-user" value="Waiting"
            :pt="{
                root: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)', borderRadius: '24px' } }
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
