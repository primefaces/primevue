<template>
    <DocSectionText v-bind="$attrs">
        <p>Size of each movement is defined with the <i>step</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Slider v-model="value" :step="20" class="w-56" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Slider from '@/volt/slider';
import { ref } from 'vue';

const value = ref(20);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Slider v-model="value" :step="20" class="w-56" />
    </div>
</template>

<script setup>
import Slider from '@/volt/slider';
import { ref } from 'vue';

const value = ref(20);
<\/script>
`);
</script>
