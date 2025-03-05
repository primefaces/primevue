<template>
    <DocSectionText v-bind="$attrs">
        <p>A font icon next to the value can be displayed with the <i>icon</i> property.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center gap-2">
        <Tag icon="pi pi-user" value="Primary"></Tag>
        <Tag icon="pi pi-search" severity="secondary" value="Secondary"></Tag>
        <Tag icon="pi pi-check" severity="success" value="Success"></Tag>
        <Tag icon="pi pi-info-circle" severity="info" value="Info"></Tag>
        <Tag icon="pi pi-exclamation-triangle" severity="warn" value="Warn"></Tag>
        <Tag icon="pi pi-times" severity="danger" value="Danger"></Tag>
        <Tag icon="pi pi-cog" severity="contrast" value="Contrast"></Tag>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Tag from '@/volt/tag';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card flex flex-wrap justify-center gap-2">
        <Tag icon="pi pi-user" value="Primary"></Tag>
        <Tag icon="pi pi-search" severity="secondary" value="Secondary"></Tag>
        <Tag icon="pi pi-check" severity="success" value="Success"></Tag>
        <Tag icon="pi pi-info-circle" severity="info" value="Info"></Tag>
        <Tag icon="pi pi-exclamation-triangle" severity="warn" value="Warn"></Tag>
        <Tag icon="pi pi-times" severity="danger" value="Danger"></Tag>
        <Tag icon="pi pi-cog" severity="contrast" value="Contrast"></Tag>
    </div>
</template>

<script setup>
import Tag from '@/volt/tag';
<\/script>
`);
</script>
