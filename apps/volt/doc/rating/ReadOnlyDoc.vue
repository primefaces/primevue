<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>readOnly</i> present, value cannot be edited.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Rating v-model="value" readonly />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import Rating from '@/volt/Rating.vue';
import { ref } from 'vue';

const value = ref(3);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Rating v-model="value" readonly />
    </div>
</template>

<script setup lang="ts">
import Rating from '@/volt/Rating.vue';
import { ref } from 'vue';

const value = ref(3);
<\/script>
`);
</script>
