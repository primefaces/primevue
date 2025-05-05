<template>
    <DocSectionText v-bind="$attrs">
        <p>Enabling <i>checked</i> property displays the component as active initially.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <ToggleSwitch v-model="checked" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import ToggleSwitch from '@/volt/ToggleSwitch.vue';
import { ref } from 'vue';

const checked = ref(true);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <ToggleSwitch v-model="checked" />
    </div>
</template>

<script setup lang="ts">
import ToggleSwitch from '@/volt/ToggleSwitch.vue';
import { ref } from 'vue';

const checked = ref(true);
<\/script>
`);
</script>
