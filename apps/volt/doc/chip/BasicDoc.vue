<template>
    <DocSectionText v-bind="$attrs">
        <p>A basic chip with a text is created with the <i>label</i> property. In addition when <i>removable</i> is added, a delete icon is displayed to remove a chip.</p>
    </DocSectionText>
    <div class="card flex flex-wrap gap-2">
        <Chip label="Action" />
        <Chip label="Comedy" />
        <Chip label="Mystery" />
        <Chip label="Thriller" removable />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Chip from '@/volt/chip';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card flex flex-wrap gap-2">
        <Chip label="Action" />
        <Chip label="Comedy" />
        <Chip label="Mystery" />
        <Chip label="Thriller" removable />
    </div>
</template>

<script setup>
import Chip from '@/volt/chip';
<\/script>
`);
</script>
