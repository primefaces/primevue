<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>disabled</i> is present, the element cannot be edited and focused.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <ToggleSwitch v-model="checked" disabled />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import ToggleSwitch from '@/volt/toggleswitch';
import { ref } from 'vue';

const checked = ref(false);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <ToggleSwitch v-model="checked" disabled />
    </div>
</template>

<script setup>
import ToggleSwitch from '@/volt/toggleswitch';
import { ref } from 'vue';

const checked = ref(false);
<\/script>
`);
</script>
