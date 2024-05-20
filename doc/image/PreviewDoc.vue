<template>
    <DocSectionText v-bind="$attrs">
        <p>Enabling <i>preview</i> mode displays a modal layer when the image is clicked to provide transformation options such as rotating and zooming.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="250" preview />
    </div>

    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Image src="/image.jpg" alt="Image" width="250" preview />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="250" preview />
    </div>
</template>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="250" preview />
    </div>
</template>
`
            }
        };
    }
};
</script>
