<template>
    <DocSectionText v-bind="$attrs">
        <p>ToggleSwitch is used with the <i>v-model</i> property for two-way value binding.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <ToggleSwitch v-model="checked" />
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
        <ToggleSwitch v-model="checked" />
    </div>
</template>

<script setup>
import ToggleSwitch from '@/volt/toggleswitch';
import { ref } from 'vue';

const checked = ref(false);
<\/script>
`);
</script>
