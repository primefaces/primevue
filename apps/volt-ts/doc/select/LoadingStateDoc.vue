<template>
    <DocSectionText v-bind="$attrs">
        <p>Loading state is enabled with the <i>loading</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Select placeholder="Loading..." loading class="w-full md:w-56" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import Select from '@/volt/Select.vue';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Select placeholder="Loading..." loading class="w-full md:w-56" />
    </div>
</template>

<script setup lang="ts">
import Select from '@/volt/Select.vue';
<\/script>
`);
</script>
