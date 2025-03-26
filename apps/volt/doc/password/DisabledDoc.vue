<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>disabled</i> is present, the element cannot be edited and focused.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Password disabled placeholder="Disabled" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Password from '@/volt/Password.vue';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Password disabled placeholder="Disabled" />
    </div>
</template>

<script setup>
import Password from '@/volt/Password.vue';
<\/script>
`);
</script>
