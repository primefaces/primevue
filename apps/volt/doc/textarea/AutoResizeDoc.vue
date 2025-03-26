<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>autoResize</i> is enabled, textarea grows instead of displaying a scrollbar.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Textarea v-model="value" autoResize rows="5" cols="30" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import Textarea from '@/volt/Textarea.vue';
import { ref } from 'vue';

const value = ref(null);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Textarea v-model="value" autoResize rows="5" cols="30" />
    </div>
</template>

<script setup lang="ts">
import Textarea from '@/volt/Textarea.vue';
import { ref } from 'vue';

const value = ref(null);
<\/script>
`);
</script>
