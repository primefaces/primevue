<template>
    <DocSectionText v-bind="$attrs"> </DocSectionText>
    <div class="card flex justify-content-center">
        <Breadcrumb
            :home="home"
            :model="items"
            :pt="{
                root: { class: 'surface-ground' },
                label: ({ props }) => ({
                    class: props.index === items.length - 1 ? 'font-italic' : undefined
                })
            }"
        />
    </div>
    <DocSectionCode :code="code" />
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
                basic: `
<Breadcrumb :home="home" :model="items"
    :pt="{
        root: { class: 'surface-ground' },
        label: ({ props }) => ({
            class: props.index === items.length - 1 ? 'font-italic' : undefined
        })
    }"
/>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Breadcrumb :home="home" :model="items"
            :pt="{
                root: { class: 'surface-ground' },
                label: ({ props }) => ({
                    class: props.index === items.length - 1 ? 'font-italic' : undefined
                })
            }"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            home: {
                icon: 'pi pi-home',
                to: '/',
            },
            items: [
                {label: 'Computer'},
                {label: 'Notebook'},
                {label: 'Accessories'},
                {label: 'Backpacks'},
                {label: 'Item'}
            ]
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Breadcrumb :home="home" :model="items"
            :pt="{
                root: { class: 'surface-ground' },
                label: ({ props }) => ({
                    class: props.index === items.length - 1 ? 'font-italic' : undefined
                })
            }"
        />
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
<\/script>
`
            }
        };
    }
};
</script>
