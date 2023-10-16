<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>disabled</i> is present, the element cannot be edited and focused.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <MultiSelect disabled placeholder="Select Cities" class="w-full md:w-20rem" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<MultiSelect disabled placeholder="Select Cities" class="w-full md:w-20rem" />
`,
                options: `
<template>
    <div class="flex justify-content-center">
        <MultiSelect disabled placeholder="Select Cities" class="w-full md:w-20rem" />
    </div>
</template>

<script>

<\/script>
`,
                composition: `
<template>
    <div class="flex justify-content-center">
        <MultiSelect disabled placeholder="Select Cities" class="w-full md:w-20rem" />
    </div>
</template>

<script setup>

<\/script>
`
            }
        };
    }
};
</script>
