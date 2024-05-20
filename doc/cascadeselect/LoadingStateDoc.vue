<template>
    <DocSectionText v-bind="$attrs">
        <p>Loading state can be used <i>loading</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <CascadeSelect loading placeholder="Loading..." style="min-width: 14rem" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<CascadeSelect loading placeholder="Loading..."  style="min-width: 14rem" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <CascadeSelect loading placeholder="Loading..."  style="min-width: 14rem" />
    </div>
</template>

<script>

<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <CascadeSelect loading placeholder="Loading..."  style="min-width: 14rem" />
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
