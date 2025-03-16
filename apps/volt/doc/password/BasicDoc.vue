<template>
    <DocSectionText v-bind="$attrs">
        <p>Password is used with the <i>v-model</i> property for two-way value binding.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Password v-model="value" :feedback="false" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Password from '@/volt/password';
import { ref } from 'vue';

const value = ref(null);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Password v-model="value" :feedback="false" />
    </div>
</template>

<script setup>
import Password from '@/volt/password';
import { ref } from 'vue';

const value = ref(null);
<\/script>
`);
</script>
