<template>
    <DocSectionText v-bind="$attrs">
        <p>Menu requires a collection of menuitems as its <i>model</i>.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Menu :model="items" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Menu from '@/volt/menu';
import { ref } from 'vue';

const items = ref([
    { label: 'New', icon: 'pi pi-plus' },
    { label: 'Search', icon: 'pi pi-search' }
]);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Menu :model="items" />
    </div>
</template>

<script setup>
import Menu from '@/volt/menu';
import { ref } from 'vue';

const items = ref([
    { label: 'New', icon: 'pi pi-plus' },
    { label: 'Search', icon: 'pi pi-search' }
]);
<\/script>
`);
</script>
