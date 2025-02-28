<template>
    <DocSectionText v-bind="$attrs">
        <p>For progresses with no value to track, set the <i>mode</i> property to <i>indeterminate</i>.</p>
    </DocSectionText>
    <div class="card">
        <ProgressBar mode="indeterminate" style="height: 6px"></ProgressBar>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<ProgressBar mode="indeterminate" style="height: 6px"></ProgressBar>
`,
                options: `
<template>
    <div class="card">
        <ProgressBar mode="indeterminate" style="height: 6px"></ProgressBar>
    </div>
</template>

<script>

<\/script>
`,
                composition: `
<template>
    <div class="card">
        <ProgressBar mode="indeterminate" style="height: 6px"></ProgressBar>
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
