<template>
    <DocSectionText v-bind="$attrs">
        <p>Buttons have built-in badge support with <i>badge</i> and <i>badgeSeverity</i> properties.</p>
    </DocSectionText>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button type="button" label="Emails" badge="2" />
        <Button type="button" label="Messages" icon="pi pi-users" badge="2" badgeSeverity="contrast" variant="outlined" />
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
        <Button type="button" label="Messages" icon="pi pi-users" badge="2" badgeSeverity="contrast" variant="outlined" />
    </div>
</template>

<script setup>
import Button from '@/volt/button';
<\/script>
`);
</script>
