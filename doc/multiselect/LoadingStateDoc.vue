<template>
    <DocSectionText v-bind="$attrs">
        <p>Loading state can be used <i>loading</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <MultiSelect placeholder="Loading..." loading class="w-full md:w-80"></MultiSelect>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<MultiSelect placeholder="Loading..." loading class="w-full md:w-80"></MultiSelect>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <MultiSelect placeholder="Loading..." loading class="w-full md:w-80"></MultiSelect>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <MultiSelect placeholder="Loading..." loading class="w-full md:w-80"></MultiSelect>
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
