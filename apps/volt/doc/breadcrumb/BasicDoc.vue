<template>
    <DocSectionText v-bind="$attrs">
        <p>Breadcrumb requires a collection of menuitems as its <i>model</i>, the root item is defined with the <i>home</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Breadcrumb :home="home" :model="items" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import Breadcrumb from '@/volt/Breadcrumb.vue';
import { ref } from 'vue';

const home = ref({
    icon: 'pi pi-home'
});
const items = ref([{ label: 'Electronics' }, { label: 'Computer' }, { label: 'Accessories' }, { label: 'Keyboard' }, { label: 'Wireless' }]);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Breadcrumb :home="home" :model="items" />
    </div>
</template>

<script setup lang="ts">
import Breadcrumb from '@/volt/Breadcrumb.vue';
import { ref } from 'vue';

const home = ref({
    icon: 'pi pi-home'
});
const items = ref([{ label: 'Electronics' }, { label: 'Computer' }, { label: 'Accessories' }, { label: 'Keyboard' }, { label: 'Wireless' }]);
<\/script>
`);
</script>
