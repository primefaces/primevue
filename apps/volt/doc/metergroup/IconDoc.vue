<template>
    <DocSectionText v-bind="$attrs">
        <p>Icons can be displayed next to the labels instead of the default marker.</p>
    </DocSectionText>
    <div class="card">
        <MeterGroup :value="value" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import MeterGroup from '@/volt/MeterGroup.vue';
import { ref } from 'vue';

const value = ref([
    { label: 'Apps', color: '#34d399', value: 16, icon: 'pi pi-table' },
    { label: 'Messages', color: '#fbbf24', value: 8, icon: 'pi pi-inbox' },
    { label: 'Media', color: '#60a5fa', value: 24, icon: 'pi pi-image' },
    { label: 'System', color: '#c084fc', value: 10, icon: 'pi pi-cog' }
]);

const code = ref(`
<template>
    <div class="card">
        <MeterGroup :value="value" />
    </div>
</template>

<script setup lang="ts">
import MeterGroup from '@/volt/MeterGroup.vue';
import { ref } from 'vue';

const value = ref([
    { label: 'Apps', color: '#34d399', value: 16, icon: 'pi pi-table' },
    { label: 'Messages', color: '#fbbf24', value: 8, icon: 'pi pi-inbox' },
    { label: 'Media', color: '#60a5fa', value: 24, icon: 'pi pi-image' },
    { label: 'System', color: '#c084fc', value: 10, icon: 'pi pi-cog' }
]);
<\/script>
`);
</script>
