<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>disabled</i> is present, the element cannot be edited and focused.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Select disabled placeholder="Select a City" class="w-full md:w-56" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import Select from '@/volt/Select.vue';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Select disabled placeholder="Select a City" class="w-full md:w-56" />
    </div>
</template>

<script setup lang="ts">
import Select from '@/volt/Select.vue';
<\/script>
`);
</script>
