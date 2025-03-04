<template>
    <DocSectionText v-bind="$attrs">
        <p>Custom content inside the ProgressBar is defined with the <i>default</i> slot.</p>
    </DocSectionText>
    <div class="card">
        <ProgressBar :value="progress"> {{ progress }}/100 </ProgressBar>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import ProgressBar from '@/volt/progressbar';
import { ref } from 'vue';

const progress = ref(40);

const code = ref(`
<template>
    <div class="card">
        <ProgressBar :value="progress"> {{ progress }}/100 </ProgressBar>
    </div>
</template>

<script setup>
import ProgressBar from '@/volt/progressbar';

const progress = ref(40);
<\/script>
`);
</script>
