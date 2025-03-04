<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>disabled</i> is present, a visual hint is applied to indicate that the Knob cannot be interacted with.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Rating v-model="value" disabled />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Rating from '@/volt/rating';
import { ref } from 'vue';

const value = ref(3);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Rating v-model="value" disabled />
    </div>
</template>

<script setup>
import Rating from '@/volt/rating';
import { ref } from 'vue';

const value = ref(3);
<\/script>
`);
</script>
