<template>
    <DocSectionText v-bind="$attrs"> </DocSectionText>
    <div class="card flex justify-content-center">
        <Chip
            label="Amy Elsner"
            image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
            :pt="{
                root: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)', borderRadius: '24px' } },
                label: { class: 'text-white' }
            }"
        />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Chip
    label="Amy Elsner"
    image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
    :pt="{
        root: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)', borderRadius: '24px' } },
        label: { class: 'text-white' }
    }"
/>
`,
                options: `
<template>
    <Chip
        label="Amy Elsner"
        image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
        :pt="{
            root: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)', borderRadius: '24px' } },
            label: { class: 'text-white' }
        }"
    />
</template>
`,
                composition: `
<template>
    <Chip
        label="Amy Elsner"
        image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
        :pt="{
            root: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)', borderRadius: '24px' } },
            label: { class: 'text-white' }
        }"
    />
</template>
`
            }
        };
    }
};
</script>
