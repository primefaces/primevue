<template>
    <DocSectionText v-bind="$attrs">
        <p>ProgressBar is used with the <i>value</i> property.</p>
    </DocSectionText>
    <div class="card">
        <ProgressBar :value="50"></ProgressBar>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<ProgressBar :value="50"></ProgressBar>
`,
                options: `
<template>
    <div class="card">
        <ProgressBar :value="50"></ProgressBar>
    </div>
</template>

<script >

<\/script>
`,
                composition: `
<template>
    <div class="card">
        <ProgressBar :value="50"></ProgressBar>
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
