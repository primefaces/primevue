<template>
    <DocSectionText v-bind="$attrs">
        <p>The default slot allows displaying custom content inside a chip.</p>
    </DocSectionText>
    <div class="card">
        <Chip pt:root:class="py-0 pl-0 pr-4" removable>
            <span class="bg-primary text-primary-contrast rounded-full w-8 h-8 flex items-center justify-center">P</span>
            <span class="font-medium">PRIME</span>
        </Chip>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Chip from '@/volt/chip';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card">
        <Chip pt:root:class="py-0 pl-0 pr-4">
            <span class="bg-primary text-primary-contrast rounded-full w-8 h-8 flex items-center justify-center">P</span>
            <span class="font-medium">PRIME</span>
        </Chip>
    </div>
</template>

<script setup>
import Chip from '@/volt/chip';
<\/script>
`);
</script>
