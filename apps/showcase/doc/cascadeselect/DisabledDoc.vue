<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>disabled</i> is present, the element cannot be edited and focused.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <CascadeSelect disabled placeholder="Disabled" style="min-width: 14rem" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<CascadeSelect disabled placeholder="Disabled" style="min-width: 14rem" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <CascadeSelect disabled placeholder="Disabled" style="min-width: 14rem" />
    </div>
</template>

<script>

<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <CascadeSelect disabled placeholder="Disabled" style="min-width: 14rem" />
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
