<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>disabled</i> is present, the element cannot be edited and focused.</p>
    </DocSectionText>
    <div class="card flex justify-center gap-2">
        <RadioButton v-model="value" :value="1" disabled />
        <RadioButton v-model="value" :value="2" disabled />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import RadioButton from '@/volt/radiobutton';
import { ref } from 'vue';

const value = ref(2);

const code = ref(`
<template>
    <div class="card flex justify-center gap-2">
        <RadioButton v-model="value" :value="1" disabled />
        <RadioButton v-model="value" :value="2" disabled />
    </div>
</template>

<script setup>
import RadioButton from '@/volt/radiobutton';
import { ref } from 'vue';

const value = ref(2);
<\/script>
`);
</script>
