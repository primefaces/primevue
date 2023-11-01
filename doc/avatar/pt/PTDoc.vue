<template>
    <DocSectionText v-bind="$attrs"> </DocSectionText>
    <div class="card flex justify-content-center">
        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" :pt="{ image: { class: 'w-4rem h-4rem' } }" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
    :pt="{
        image: { class: 'w-4rem h-4rem' }
    }"
/>
`,
                options: `
<template>
    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
        :pt="{
            image: { class: 'w-4rem h-4rem' }
        }"
    />
</template>
`,
                composition: `
<template>
    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
        :pt="{
            image: { class: 'w-4rem h-4rem' }
        }"
    />
</template>
`
            }
        };
    }
};
</script>
