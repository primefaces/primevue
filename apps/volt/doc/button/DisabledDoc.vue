<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>disabled</i> is present, the element cannot be used.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Button label="Submit" disabled />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Button from '@/volt/button';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Button label="Submit" disabled />
    </div>
</template>

<script setup>
import Button from '@/volt/button';
<\/script>
`);
</script>
