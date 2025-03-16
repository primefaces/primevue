<template>
    <DocSectionText v-bind="$attrs">
        <p>The full screen mode is enabled when <i>position</i> property is set as <i>full</i>.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Drawer v-model:visible="visible" header="Drawer" position="full" :modal="false">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Drawer>
        <Button icon="pi pi-window-maximize" @click="visible = true" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Button from '@/volt/button';
import Drawer from '@/volt/drawer';
import { ref } from 'vue';

const visible = ref(false);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Drawer v-model:visible="visible" header="Drawer" position="full" :modal="false">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Drawer>
        <Button icon="pi pi-window-maximize" @click="visible = true" />
    </div>
</template>

<script setup>
import Button from '@/volt/button';
import Drawer from '@/volt/drawer';
import { ref } from 'vue';

const visible = ref(false);
<\/script>
`);
</script>
