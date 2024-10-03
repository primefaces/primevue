<template>
    <DocSectionText v-bind="$attrs">
        <p>Images are defined using templating with <i>left</i> and <i>right</i> slots. Use the <i>style</i> or <i>class</i> properties to define the size of the container.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <ImageCompare class="shadow-lg rounded-2xl">
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
<ImageCompare class="shadow-lg rounded-2xl">
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
        <ImageCompare class="shadow-lg rounded-2xl">
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
        <ImageCompare class="shadow-lg rounded-2xl">
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
