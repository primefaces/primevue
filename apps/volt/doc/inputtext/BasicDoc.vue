<template>
    <DocSectionText v-bind="$attrs">
        <p>InputText is used with the <i>v-model</i> property for two-way value binding.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <InputText v-model="value" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import InputText from '@/volt/inputtext';
import { ref } from 'vue';

const value = ref(null);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <InputText v-model="value" />
    </div>
</template>

<script setup>
import InputText from '@/volt/inputtext';
import { ref } from 'vue';

const value = ref(null);
<\/script>
`);
</script>
