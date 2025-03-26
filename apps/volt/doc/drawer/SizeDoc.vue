<template>
    <DocSectionText v-bind="$attrs">
        <p>Drawer dimension can be defined with <i>style</i> or <i>class</i> properties.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Drawer v-model:visible="visible" header="Drawer" class="w-full! md:w-80! lg:w-[30rem]!">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Drawer>
        <Button icon="pi pi-arrow-right" @click="visible = true" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Button from '@/volt/Button.vue';
import Drawer from '@/volt/Drawer.vue';
import { ref } from 'vue';

const visible = ref(false);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Drawer v-model:visible="visible" header="Drawer" class="w-full! md:w-80! lg:w-[30rem]!">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Drawer>
        <Button icon="pi pi-arrow-right" @click="visible = true" />
    </div>
</template>

<script setup>
import Button from '@/volt/Button.vue';
import Drawer from '@/volt/Drawer.vue';
import { ref } from 'vue';

const visible = ref(false);
<\/script>
`);
</script>
