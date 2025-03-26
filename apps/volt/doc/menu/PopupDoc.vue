<template>
    <DocSectionText v-bind="$attrs">
        <p>Overlay mode is enabled by adding <i>popup</i> property and calling <i>toggle</i> function of the menu ref with an event of the target.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Button type="button" icon="pi pi-ellipsis-v" plain @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Button from '@/volt/Button.vue';
import Menu from '@/volt/Menu.vue';
import { ref } from 'vue';

const menu = ref();
const items = ref([
    {
        label: 'Options',
        items: [
            {
                label: 'Refresh',
                icon: 'pi pi-refresh'
            },
            {
                label: 'Export',
                icon: 'pi pi-upload'
            }
        ]
    }
]);

const toggle = (event) => {
    menu.value.toggle(event);
};

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Button type="button" icon="pi pi-ellipsis-v" plain @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
    </div>
</template>

<script setup>
import Button from '@/volt/Button.vue';
import Menu from '@/volt/Menu.vue';
import { ref } from 'vue';

const menu = ref();
const items = ref([
    {
        label: 'Options',
        items: [
            {
                label: 'Refresh',
                icon: 'pi pi-refresh'
            },
            {
                label: 'Export',
                icon: 'pi pi-upload'
            }
        ]
    }
]);

const toggle = (event) => {
    menu.value.toggle(event);
};
<\/script>
`);
</script>
