<template>
    <DocSectionText v-bind="$attrs">
        <p>Rating is used with the <i>v-model</i> property for two-way value binding.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Rating v-model="value" />
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
        <Rating v-model="value" />
    </div>
</template>

<script setup>
import Rating from '@/volt/rating';
import { ref } from 'vue';

const value = ref(null);
<\/script>
`);
</script>
