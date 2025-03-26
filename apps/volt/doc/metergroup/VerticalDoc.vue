<template>
    <DocSectionText v-bind="$attrs">
        <p>Layout of the MeterGroup is configured with the <i>orientation</i> property that accepts either <i>horizontal</i> or <i>vertical</i> as available options.</p>
    </DocSectionText>
    <div class="card flex justify-center" style="height: 360px">
        <MeterGroup :value="value" orientation="vertical" labelOrientation="vertical" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import MeterGroup from '@/volt/MeterGroup.vue';
import { ref } from 'vue';

const value = ref([
    { label: 'Apps', color: '#34d399', value: 24 },
    { label: 'Messages', color: '#fbbf24', value: 16 },
    { label: 'Media', color: '#60a5fa', value: 24 },
    { label: 'System', color: '#c084fc', value: 12 }
]);

const code = ref(`
<template>
    <div class="card flex justify-center" style="height: 360px">
        <MeterGroup :value="value" orientation="vertical" labelOrientation="vertical" />
    </div>
</template>

<script setup lang="ts">
import MeterGroup from '@/volt/MeterGroup.vue';
import { ref } from 'vue';

const value = ref([
    { label: 'Apps', color: '#34d399', value: 24 },
    { label: 'Messages', color: '#fbbf24', value: 16 },
    { label: 'Media', color: '#60a5fa', value: 24 },
    { label: 'System', color: '#c084fc', value: 12 }
]);
<\/script>
`);
</script>
