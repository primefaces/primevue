<template>
    <DocSectionText v-bind="$attrs">
        <p>Text to display on a button is defined with the <i>label</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Button label="Submit" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Button from '@/volt/button';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Button label="Submit" />
    </div>
</template>

<script setup>
import Button from '@/volt/button';
<\/script>
`);
</script>
