<template>
    <DocSectionText v-bind="$attrs">
        <p>ToggleButton is used with the <i>v-model</i> property for two-way value binding.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <ToggleButton v-model="checked" class="w-24" onLabel="On" offLabel="Off" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import ToggleButton from '@/volt/ToggleButton.vue';
import { ref } from 'vue';

const checked = ref(false);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <ToggleButton v-model="checked" class="w-24" onLabel="On" offLabel="Off" />
    </div>
</template>

<script setup lang="ts">
import ToggleButton from '@/volt/ToggleButton.vue';
import { ref } from 'vue';

const checked = ref(false);
<\/script>
`);
</script>
