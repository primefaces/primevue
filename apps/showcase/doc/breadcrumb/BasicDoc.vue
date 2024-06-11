<template>
    <DocSectionText v-bind="$attrs">
        <p>Breadcrumb requires a collection of menuitems as its <i>model</i>, the root item is defined with the <i>home</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Breadcrumb :home="home" :model="items" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            home: {
                icon: 'pi pi-home'
            },
            items: [{ label: 'Electronics' }, { label: 'Computer' }, { label: 'Accessories' }, { label: 'Keyboard' }, { label: 'Wireless' }],
            code: {
                basic: `
<Breadcrumb :home="home" :model="items" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Breadcrumb :home="home" :model="items" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            home: {
                icon: 'pi pi-home'
            },
            items: [
                { label: 'Electronics' }, 
                { label: 'Computer' }, 
                { label: 'Accessories' }, 
                { label: 'Keyboard' }, 
                { label: 'Wireless' }
            ]
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Breadcrumb :home="home" :model="items" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const home = ref({
    icon: 'pi pi-home'
});
const items = ref([
    { label: 'Electronics' }, 
    { label: 'Computer' }, 
    { label: 'Accessories' }, 
    { label: 'Keyboard' }, 
    { label: 'Wireless' }
]);
<\/script>
`
            }
        };
    }
};
</script>
