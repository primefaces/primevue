<template>
    <DocSectionText v-bind="$attrs">
        <p>ToggleButton provides <i>small</i> and <i>large</i> sizes as alternatives to the base.</p>
    </DocSectionText>
    <div class="card flex flex-col items-center gap-4">
        <ToggleButton v-model="checked1" onLabel="On" offLabel="Off" size="small" class="min-w-16" />
        <ToggleButton v-model="checked2" onLabel="On" offLabel="Off" class="min-w-20" />
        <ToggleButton v-model="checked3" onLabel="On" offLabel="Off" size="large" class="min-w-24" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import ToggleButton from '@/volt/togglebutton';
import { ref } from 'vue';

const checked1 = ref(false);
const checked2 = ref(false);
const checked3 = ref(false);

const code = ref(`
<template>
   <div class="card flex flex-col items-center gap-4">
        <ToggleButton v-model="value1" onLabel="On" offLabel="Off" size="small" class="min-w-16" />
        <ToggleButton v-model="value2" onLabel="On" offLabel="Off" class="min-w-20" />
        <ToggleButton v-model="value3" onLabel="On" offLabel="Off" size="large" class="min-w-24" />
    </div>
</template>

<script setup>
import ToggleButton from '@/volt/togglebutton';
import { ref } from 'vue';

const checked1 = ref(false);
const checked2 = ref(false);
const checked3 = ref(false);
<\/script>
`);
</script>
