<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>disabled</i> is present, the element cannot be edited and focused.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <InputNumber v-model="value" disabled prefix="%" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import InputNumber from '@/volt/inputnumber';
import { ref } from 'vue';

const value = ref(50);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <InputNumber v-model="value" disabled prefix="%" />
    </div>
</template>

<script setup>
import InputNumber from '@/volt/inputnumber';
import { ref } from 'vue';

const value = ref(50);
<\/script>
`);
</script>
