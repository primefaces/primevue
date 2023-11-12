<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<DynamicDialog
    :pt="{
        root: { class: 'w-12 sm:w-9 md:w-6' }
    }"
/>
`,
                options: `
<template>
    <DynamicDialog
        :pt="{
            root: { class: 'w-12 sm:w-9 md:w-6' }
        }"
    />
</template>
`,
                composition: `
<template>
    <DynamicDialog
        :pt="{
            root: { class: 'w-12 sm:w-9 md:w-6' }
        }"
    />
</template>
`
            }
        };
    }
};
</script>
