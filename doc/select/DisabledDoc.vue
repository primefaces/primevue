<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>disabled</i> is present, the element cannot be edited and focused.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Select disabled placeholder="Select a City" class="w-full md:w-56" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Select disabled placeholder="Select a City" class="w-full md:w-56" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Select disabled placeholder="Select a City" class="w-full md:w-56" />
    </div>
</template>

<script>

<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Select disabled placeholder="Select a City" class="w-full md:w-56" />
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
