<template>
    <DocSectionText v-bind="$attrs">
        <p>Binary checkbox is used with the <i>v-model</i> for two-way value binding and the <i>binary</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Checkbox v-model="checked" binary />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Checkbox from '@/volt/checkbox';
import { ref } from 'vue';

const checked = ref(false);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Checkbox v-model="checked" binary />
    </div>
</template>

<script setup>
import Checkbox from '@/volt/checkbox';
import { ref } from 'vue';

const checked = ref(false);
<\/script>
`);
</script>
