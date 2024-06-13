<template>
    <DocSectionText v-bind="$attrs">
        <p>An infinite spin animation is displayed by default.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <ProgressSpinner />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<ProgressSpinner />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <ProgressSpinner />
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <ProgressSpinner />
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
