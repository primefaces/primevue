<template>
    <DocSectionText v-bind="$attrs">
        <p>Breadcrumb requires a collection of menuitems as its <i>model</i>.</p>
    </DocSectionText>

    <DocSectionCode :code="code" embedded />
</template>

<script>
export default {
    data() {
        return {
            home: {
                icon: 'pi pi-home',
                to: '/'
            },
            items: [{ label: 'Computer' }, { label: 'Notebook' }, { label: 'Accessories' }, { label: 'Backpacks' }, { label: 'Item' }],
            code: {
                composition: `
<template>
    <div class="card flex justify-center">
        <Breadcrumb :home="home" :model="items" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const home = ref({
    icon: 'pi pi-home',
    to: '/',
});
const items = ref([
    {label: 'Computer'},
    {label: 'Notebook'},
    {label: 'Accessories'},
    {label: 'Backpacks'},
    {label: 'Item'}
]);
<\/script>`
            }
        };
    }
};
</script>
