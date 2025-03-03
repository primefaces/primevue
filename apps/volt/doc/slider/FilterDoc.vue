<template>
    <DocSectionText v-bind="$attrs">
        <p>Image filter implementation using multiple sliders.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Slider v-model="value" class="w-56" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Slider from '@/volt/slider';
import { ref } from 'vue';

const value = ref(null);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Slider v-model="value" class="w-56" />
    </div>
</template>

<script setup>
import Slider from '@/volt/slider';
import { ref } from 'vue';

const value = ref(null);
<\/script>
`);
</script>
