<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <div class="card flex justify-content-center">
        <Image
            src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg"
            alt="Image"
            width="250"
            preview
            :pt="{
                image: { class: 'w-15rem' }
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
<Image
    src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg"
    alt="Image"
    width="250"
    preview
    :pt="{
        image: { class: 'w-15rem' }
    }"
/>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Image
            src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg"
            alt="Image"
            width="250"
            preview
            :pt="{
                image: { class: 'w-15rem' }
            }"
        />
    </div>
</template>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Image
            src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg"
            alt="Image"
            width="250"
            preview
            :pt="{
                image: { class: 'w-15rem' }
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
