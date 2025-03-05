<template>
    <DocSectionText v-bind="$attrs">
        <p>Buttons have built-in badge support with the <i>badge</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button type="button" label="Emails" badge="2" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Button from '@/volt/button';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button type="button" label="Emails" badge="2" />
    </div>
</template>

<script setup>
import Button from '@/volt/button';
<\/script>
`);
</script>
