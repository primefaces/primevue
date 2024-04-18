<template>
    <DocSectionText v-bind="$attrs">
        <p>Loading state can be used <i>loading</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Select placeholder="Loading..." loading class="w-full md:w-14rem"></Select>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Select placeholder="Loading..." loading class="w-full md:w-14rem"></Select>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Select placeholder="Loading..." loading class="w-full md:w-14rem"></Select>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Select placeholder="Loading..." loading class="w-full md:w-14rem"></Select>
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
