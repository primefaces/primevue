<template>
    <DocSectionText v-bind="$attrs">
        <p>Use the <i>size</i> property to customize the dimensions of a Badge.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center items-end gap-2">
        <Badge value="8" size="xlarge" severity="success"></Badge>
        <Badge value="6" size="large" severity="warn"></Badge>
        <Badge value="4" severity="info"></Badge>
        <Badge value="2" size="small"></Badge>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Badge from '@/volt/badge';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card flex flex-wrap justify-center items-end gap-2">
        <Badge value="8" size="xlarge" severity="success"></Badge>
        <Badge value="6" size="large" severity="warn"></Badge>
        <Badge value="4" severity="info"></Badge>
        <Badge value="2" size="small"></Badge>
    </div>
</template>

<script setup>
import Badge from '@/volt/badge';
<\/script>
`);
</script>
