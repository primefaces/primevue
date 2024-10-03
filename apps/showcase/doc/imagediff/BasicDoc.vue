<template>
    <DocSectionText v-bind="$attrs">
        <p>ImageDiff</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <ImageDiff />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<ImageDiff />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="250" />
    </div>
</template>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="250" />
    </div>
</template>
`
            }
        };
    }
};
</script>
