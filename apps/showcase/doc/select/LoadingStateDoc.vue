<template>
    <DocSectionText v-bind="$attrs">
        <p>Loading state is enabled with the <i>loading</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Select placeholder="Loading..." loading class="w-full md:w-56" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Select placeholder="Loading..." loading class="w-full md:w-56" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Select placeholder="Loading..." loading class="w-full md:w-56" />
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Select placeholder="Loading..." loading class="w-full md:w-56" />
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
