<template>
    <DocSectionText v-bind="$attrs">
        <p>For progresses with no value to track, set the <i>mode</i> property to <i>indeterminate</i>.</p>
    </DocSectionText>
    <div class="card">
        <ProgressBar mode="indeterminate" style="height: 6px"></ProgressBar>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import ProgressBar from '@/volt/progressbar';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card">
        <ProgressBar mode="indeterminate" style="height: 6px"></ProgressBar>
    </div>
</template>

<script setup>
import ProgressBar from '@/volt/progressbar';
<\/script>
`);
</script>
