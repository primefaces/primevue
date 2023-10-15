<template>
    <DocSectionText v-bind="$attrs" :level="2" />
    <div class="card">
        <ProgressBar
            :value="50"
            :pt="{
                value: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)' } }
            }"
        />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<ProgressBar :value="50"
    :pt="{
        value: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)' } }
    }" />
`,
                options: `
<template>
    <div class="card">
        <ProgressBar :value="50"
            :pt="{
                value: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)' } }
            }" />
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <ProgressBar :value="50"
            :pt="{
                value: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)' } }
            }" />
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
