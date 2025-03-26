<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>disabled</i> is present, the element cannot be edited and focused.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <MultiSelect disabled placeholder="Select Cities" class="w-full md:w-80" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import MultiSelect from '@/volt/MultiSelect.vue';
import { ref } from 'vue';

const code = ref(`
<template>
   <div class="card flex justify-center">
        <MultiSelect disabled placeholder="Select Cities" class="w-full md:w-80" />
    </div>
</template>

<script setup>
import MultiSelect from '@/volt/MultiSelect.vue';
<\/script>
`);
</script>
