<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>range</i> property is present, slider provides two handles to define two values. In range mode, value should be an array instead of a single value.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Slider v-model="value" range class="w-56" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Slider from '@/volt/slider';
import { ref } from 'vue';

const value = ref([20, 80]);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Slider v-model="value" range class="w-56" />
    </div>
</template>

<script setup>
import Slider from '@/volt/slider';
import { ref } from 'vue';

const value = ref([20, 80]);
<\/script>
`);
</script>
