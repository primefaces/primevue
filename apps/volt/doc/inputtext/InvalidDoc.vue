<template>
    <DocSectionText v-bind="$attrs">
        <p>Invalid state is displayed using the <i>invalid</i> prop to indicate a failed validation. You can use this style when integrating with form validation libraries.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <InputText v-model="value" :invalid="!value" placeholder="Name" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import InputText from '@/volt/inputtext';
import { ref } from 'vue';

const value = ref('');

const code = ref(`
<template>
    <div class="card flex justify-center">
        <InputText v-model="value" :invalid="!value" placeholder="Name" />
    </div>
</template>

<script setup>
import InputText from '@/volt/inputtext';
import { ref } from 'vue';

const value = ref(null);
<\/script>
`);
</script>
