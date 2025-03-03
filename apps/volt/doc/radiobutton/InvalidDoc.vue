<template>
    <DocSectionText v-bind="$attrs">
        <p>Invalid state is displayed using the <i>invalid</i> prop to indicate a failed validation. You can use this style when integrating with form validation libraries.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <RadioButton v-model="value" value="1" :invalid="value === null" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import RadioButton from '@/volt/radiobutton';
import { ref } from 'vue';

const value = ref(null);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <RadioButton v-model="value" value="1" :invalid="value === null" />
    </div>
</template>

<script setup>
import RadioButton from '@/volt/radiobutton';
import { ref } from 'vue';

const val = ref(null);
<\/script>
`);
</script>
