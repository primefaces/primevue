<template>
    <DocSectionText v-bind="$attrs">
        <p>Default layout of slider is <i>horizontal</i>, use <i>orientation</i> property for the alternative <i>vertical</i> mode.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Slider v-model="value" orientation="vertical" class="h-56" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import Slider from '@/volt/Slider.vue';
import { ref } from 'vue';

const value = ref(50);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Slider v-model="value" orientation="vertical" class="h-56" />
    </div>
</template>

<script setup lang="ts">
import Slider from '@/volt/Slider.vue';
import { ref } from 'vue';

const value = ref(50);
<\/script>
`);
</script>
