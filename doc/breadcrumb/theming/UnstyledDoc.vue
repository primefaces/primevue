<template>
    <DocSectionText v-bind="$attrs">
        <p>Theming is implemented with the pass through properties in unstyled mode. Example below demonstrates the built-in Tailwind theme.</p>
    </DocSectionText>
    <DocSectionCode :code="code" embedded />
</template>

<script>
export default {
    data() {
        return {
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
