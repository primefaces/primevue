<template>
    <DocSectionText v-bind="$attrs">
        <p>Loading state can be used <i>loading</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <CascadeSelect loading placeholder="Loading..." class="w-56" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<CascadeSelect loading placeholder="Loading..." class="w-56" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <CascadeSelect loading placeholder="Loading..." class="w-56" />
    </div>
</template>

<script>

<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <CascadeSelect loading placeholder="Loading..." class="w-56" />
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
