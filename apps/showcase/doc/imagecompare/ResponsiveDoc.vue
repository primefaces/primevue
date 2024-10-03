<template>
    <DocSectionText v-bind="$attrs">
        <p>Apply responsive styles to the container element to optimize display per screen size.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <ImageCompare class="sm:!w-96 shadow-lg rounded-2xl">
            <template #left>
                <img src="~/assets/images/island1.jpg" />
            </template>
            <template #right>
                <img src="~/assets/images/island2.jpg" />
            </template>
        </ImageCompare>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<ImageCompare class="sm:!w-96 shadow-lg rounded-2xl">
    <template #left>
        <img src="~/assets/images/island1.jpg" />
    </template>
    <template #right>
        <img src="~/assets/images/island2.jpg" />
    </template>
</ImageCompare>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <ImageCompare class="sm:!w-96 shadow-lg rounde-2xl">
            <template #left>
                <img src="~/assets/images/island1.jpg" />
            </template>
            <template #right>
                <img src="~/assets/images/island2.jpg" />
            </template>
        </ImageCompare>
    </div>
</template>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <ImageCompare class="sm:!w-96 shadow-lg">
            <template #left>
                <img src="~/assets/images/island1.jpg" />
            </template>
            <template #right>
                <img src="~/assets/images/island2.jpg" />
            </template>
        </ImageCompare>
    </div>
</template>
`
            }
        };
    }
};
</script>
