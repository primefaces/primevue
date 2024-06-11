<template>
    <DocSectionText v-bind="$attrs">
        <p>Tabs can be controlled programmatically using <i>activeIndex</i> property.</p>
    </DocSectionText>
    <div class="card">
        <div class="flex mb-2 gap-2 justify-end">
            <Button @click="active = 0" rounded label="1" class="w-8 h-8 p-0" :outlined="active !== 0" />
            <Button @click="active = 1" rounded label="2" class="w-8 h-8 p-0" :outlined="active !== 1" />
            <Button @click="active = 2" rounded label="3" class="w-8 h-8 p-0" :outlined="active !== 2" />
        </div>

        <TabMenu v-model:activeIndex="active" :model="items" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            active: 0,
            items: [
                { label: 'Dashboard', icon: 'pi pi-home' },
                { label: 'Transactions', icon: 'pi pi-chart-line' },
                { label: 'Products', icon: 'pi pi-list' },
                { label: 'Messages', icon: 'pi pi-inbox' }
            ],
            code: {
                basic: `
<div class="flex mb-2 gap-2 justify-end">
    <Button @click="active = 0" rounded label="1" class="w-8 h-8 p-0" :outlined="active !== 0" />
    <Button @click="active = 1" rounded label="2" class="w-8 h-8 p-0" :outlined="active !== 1" />
    <Button @click="active = 2" rounded label="3" class="w-8 h-8 p-0" :outlined="active !== 2" />
</div>

<TabMenu v-model:activeIndex="active" :model="items" />
`,
                options: `
<template>
    <div class="card">
        <div class="flex mb-2 gap-2 justify-end">
            <Button @click="active = 0" rounded label="1" class="w-8 h-8 p-0" :outlined="active !== 0" />
            <Button @click="active = 1" rounded label="2" class="w-8 h-8 p-0" :outlined="active !== 1" />
            <Button @click="active = 2" rounded label="3" class="w-8 h-8 p-0" :outlined="active !== 2" />
        </div>

        <TabMenu v-model:activeIndex="active" :model="items" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
            items: [
                { label: 'Dashboard', icon: 'pi pi-home' },
                { label: 'Transactions', icon: 'pi pi-chart-line' },
                { label: 'Products', icon: 'pi pi-list' },
                { label: 'Messages', icon: 'pi pi-inbox' }
            ]
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <div class="flex mb-2 gap-2 justify-end">
            <Button @click="active.value = 0" rounded label="1" class="w-8 h-8 p-0" :outlined="active !== 0" />
            <Button @click="active.value = 1" rounded label="2" class="w-8 h-8 p-0" :outlined="active !== 1" />
            <Button @click="active.value = 2" rounded label="3" class="w-8 h-8 p-0" :outlined="active !== 2" />
        </div>

        <TabMenu v-model:activeIndex="active" :model="items" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const active = ref(0);

const items = ref([
    { label: 'Dashboard', icon: 'pi pi-home' },
    { label: 'Transactions', icon: 'pi pi-chart-line' },
    { label: 'Products', icon: 'pi pi-list' },
    { label: 'Messages', icon: 'pi pi-inbox' }
]);
<\/script>
`
            }
        };
    }
};
</script>
