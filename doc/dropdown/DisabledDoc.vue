<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>disabled</i> is present, the element cannot be edited and focused.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Dropdown disabled placeholder="Select a City" class="w-full md:w-14rem" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Dropdown disabled placeholder="Select a City" class="w-full md:w-14rem" />
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Dropdown disabled placeholder="Select a City" class="w-full md:w-14rem" />
    </div>
</template>

<script>

<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Dropdown disabled placeholder="Select a City" class="w-full md:w-14rem" />
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
