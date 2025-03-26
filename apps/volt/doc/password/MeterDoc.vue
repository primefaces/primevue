<template>
    <DocSectionText v-bind="$attrs">
        <p>Strength meter is displayed as a popup while a value is being entered.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Password v-model="value" />
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
        <Password v-model="value" />
    </div>
</template>

<script setup>
import Password from '@/volt/Password.vue';
import { ref } from 'vue';

const value = ref(null);
<\/script>
`);
</script>
