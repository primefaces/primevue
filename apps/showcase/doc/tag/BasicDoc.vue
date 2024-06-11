<template>
    <DocSectionText v-bind="$attrs">
        <p>Label of the tag is defined with the <i>value</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Tag value="New"></Tag>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Tag value="New"></Tag>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Tag value="New"></Tag>
    </div>
</template>

<script>

<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Tag value="New"></Tag>
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
