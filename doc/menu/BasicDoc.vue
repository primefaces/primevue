<template>
    <DocSectionText v-bind="$attrs">
        <p>Menu requires a collection of menuitems as its <i>model</i>.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Menu :model="items" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            items: [
                { label: 'New', icon: 'pi pi-fw pi-plus' },
                { label: 'Delete', icon: 'pi pi-fw pi-trash' }
            ],
            code: {
                basic: `
<Menu :model="items" />`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Menu :model="items" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { label: 'New', icon: 'pi pi-fw pi-plus' },
                { label: 'Delete', icon: 'pi pi-fw pi-trash' }
            ]
        };
    }
};
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Menu :model="items" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    { label: 'New', icon: 'pi pi-fw pi-plus' },
    { label: 'Delete', icon: 'pi pi-fw pi-trash' }
]);
<\/script>`
            }
        };
    }
};
</script>
