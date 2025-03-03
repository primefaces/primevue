<template>
    <DocSectionText v-bind="$attrs">
        <p>An advisory text can be defined with the <NuxtLink to="/message">Message</NuxtLink> component.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <InputText v-model="value" type="text" />
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
        <InputText v-model="value" type="text" />
    </div>
</template>

<script setup>
import InputText from '@/volt/inputtext';
import { ref } from 'vue';

const value = ref(null);
<\/script>
`);
</script>
