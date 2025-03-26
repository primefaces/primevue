<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>toggleMask</i> is present, an icon is displayed to show the value as plain text.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Password v-model="value" toggleMask />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Password from '@/volt/Password.vue';
import { ref } from 'vue';

const value = ref(null);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Password v-model="value" toggleMask />
    </div>
</template>

<script setup>
import Password from '@/volt/Password.vue';
import { ref } from 'vue';

const value = ref(null);
<\/script>
`);
</script>
