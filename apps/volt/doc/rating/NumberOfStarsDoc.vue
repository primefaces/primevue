<template>
    <DocSectionText v-bind="$attrs">
        <p>Number of stars to display is defined with <i>stars</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Rating v-model="value" :stars="10" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Rating from '@/volt/rating';
import { ref } from 'vue';

const value = ref(null);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Rating v-model="value" :stars="10" />
    </div>
</template>

<script setup>
import Rating from '@/volt/rating';
import { ref } from 'vue';

const value = ref(null);
<\/script>
`);
</script>
