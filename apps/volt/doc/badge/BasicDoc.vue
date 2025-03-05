<template>
    <DocSectionText v-bind="$attrs">
        <p>Content to display is defined with the <i>value</i> property or the default slot.</p>
    </DocSectionText>
    <div class="card flex justify-center gap-2">
        <Badge value="2"></Badge>
        <Badge>10</Badge>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Badge from '@/volt/badge';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card flex justify-center gap-2">
        <Badge value="2"></Badge>
        <Badge>10</Badge>
    </div>
</template>

<script setup>
import Badge from '@/volt/badge';
<\/script>
`);
</script>
