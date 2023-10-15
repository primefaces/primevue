<template>
    <DocSectionText v-bind="$attrs">
        <p>Loading state can be used <i>loading</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Dropdown placeholder="Loading..." loading class="w-full md:w-14rem"></Dropdown>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Dropdown placeholder="Loading..." loading class="w-full md:w-14rem"></Dropdown>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Dropdown placeholder="Loading..." loading class="w-full md:w-14rem"></Dropdown>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Dropdown placeholder="Loading..." loading class="w-full md:w-14rem"></Dropdown>
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
