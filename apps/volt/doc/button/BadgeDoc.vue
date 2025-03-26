<template>
    <DocSectionText v-bind="$attrs">
        <p>Buttons have built-in badge support with the <i>badge</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button type="button" label="Emails" badge="2" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import Button from '@/volt/Button.vue';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button type="button" label="Emails" badge="2" />
    </div>
</template>

<script setup lang="ts">
import Button from '@/volt/Button.vue';
<\/script>
`);
</script>
