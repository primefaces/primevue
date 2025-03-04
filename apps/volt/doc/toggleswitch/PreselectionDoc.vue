<template>
    <DocSectionText v-bind="$attrs">
        <p>Enabling <i>checked</i> property displays the component as active initially.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <ToggleSwitch v-model="checked" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import ToggleSwitch from '@/volt/toggleswitch';
import { ref } from 'vue';

const checked = ref(true);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <ToggleSwitch v-model="checked" />
    </div>
</template>

<script setup>
import ToggleSwitch from '@/volt/toggleswitch';
import { ref } from 'vue';

const checked = ref(true);
<\/script>
`);
</script>
