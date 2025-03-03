<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>handle</i> slot is available to display custom content.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <ToggleSwitch v-model="checked">
            <template #handle="{ checked }">
                <i :class="['!text-xs pi', { 'pi-check': checked, 'pi-times': !checked }]" />
            </template>
        </ToggleSwitch>
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
        <ToggleSwitch v-model="checked">
            <template #handle="{ checked }">
                <i :class="['!text-xs pi', { 'pi-check': checked, 'pi-times': !checked }]" />
            </template>
        </ToggleSwitch>
    </div>
</template>

<script setup>
import ToggleSwitch from '@/volt/toggleswitch';
import { ref } from 'vue';

const checked = ref(false);
<\/script>
`);
</script>
