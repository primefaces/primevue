<template>
    <DocSectionText v-bind="$attrs">
        <p>TabMenu requires a collection of menuitems as its <i>model</i>.</p>
    </DocSectionText>
    <div class="card">
        <TabMenu :model="items" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            items: [
                { label: 'Dashboard', icon: 'pi pi-home' },
                { label: 'Transactions', icon: 'pi pi-chart-line' },
                { label: 'Products', icon: 'pi pi-list' },
                { label: 'Messages', icon: 'pi pi-inbox' }
            ],
            code: {
                basic: `
<TabMenu :model="items" />
`,
                options: `
<template>
    <div class="card">
        <TabMenu :model="items" />
    </div>
</template>

<script>
export default {
    data() {
        return {
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
        <TabMenu :model="items" />
    </div>
</template>

<script setup>
import { ref } from "vue";

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
