<template>
    <DocSectionText v-bind="$attrs">
        <p>Enabling <i>rounded</i>, displays a tag as a pill.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center gap-2">
        <Tag value="Primary" rounded></Tag>
        <Tag severity="secondary" value="Secondary" rounded></Tag>
        <Tag severity="success" value="Success" rounded></Tag>
        <Tag severity="info" value="Info" rounded></Tag>
        <Tag severity="warn" value="Warn" rounded></Tag>
        <Tag severity="danger" value="Danger" rounded></Tag>
        <Tag severity="contrast" value="Contrast" rounded></Tag>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Tag from '@/volt/tag';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card flex flex-wrap justify-center gap-2">
        <Tag value="Primary" rounded></Tag>
        <Tag severity="secondary" value="Secondary" rounded></Tag>
        <Tag severity="success" value="Success" rounded></Tag>
        <Tag severity="info" value="Info" rounded></Tag>
        <Tag severity="warn" value="Warn" rounded></Tag>
        <Tag severity="danger" value="Danger" rounded></Tag>
        <Tag severity="contrast" value="Contrast" rounded></Tag>
    </div>
</template>

<script setup>
import Tag from '@/volt/tag';
<\/script>
`);
</script>
