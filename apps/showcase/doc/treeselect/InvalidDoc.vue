<template>
    <DocSectionText v-bind="$attrs">
        <p>Invalid state is displayed using the <i>invalid</i> prop to indicate a failed validation. You can use this style when integrating with form validation libraries.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center gap-4">
        <TreeSelect v-model="selectedValue1" :invalid="Object.keys(selectedValue1).length === 0" class="md:w-80 w-full" :options="nodes" placeholder="TreeSelect" />
        <TreeSelect v-model="selectedValue2" :invalid="Object.keys(selectedValue2).length === 0" class="md:w-80 w-full" :options="nodes" placeholder="TreeSelect" variant="filled" />
    </div>
    <DocSectionCode :code="code" :service="['NodeService']" v-bind="$attrs" />
</template>

<script>
import { NodeService } from '/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            selectedValue1: {},
            selectedValue2: {},
            code: {
                basic: `
<TreeSelect v-model="selectedValue1" :invalid="Object.keys(selectedValue1).length === 0" class="md:w-80 w-full" :options="nodes" placeholder="TreeSelect" />
<TreeSelect v-model="selectedValue2" :invalid="Object.keys(selectedValue2).length === 0" class="md:w-80 w-full" :options="nodes" placeholder="TreeSelect" variant="filled" />
`,
                options: `
<template>
    <div class="card flex flex-wrap justify-center gap-4">
        <TreeSelect v-model="selectedValue1" :invalid="Object.keys(selectedValue1).length === 0" class="md:w-80 w-full" :options="nodes" placeholder="TreeSelect" />
        <TreeSelect v-model="selectedValue2" :invalid="Object.keys(selectedValue2).length === 0" class="md:w-80 w-full" :options="nodes" placeholder="TreeSelect" variant="filled" />
    </div>
</template>

<script>
import { NodeService } from './service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            selectedValue1: {},
            selectedValue2: {},
        }
    },
    mounted() {
        NodeService.getTreeNodes().then((data) => (this.nodes = data));
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap justify-center gap-4">
        <TreeSelect v-model="selectedValue1" :invalid="Object.keys(selectedValue1).length === 0" class="md:w-80 w-full" :options="nodes" placeholder="TreeSelect" />
        <TreeSelect v-model="selectedValue2" :invalid="Object.keys(selectedValue2).length === 0" class="md:w-80 w-full" :options="nodes" placeholder="TreeSelect" variant="filled" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from './service/NodeService';

const nodes = ref(null);
const selectedValue1 = ref({});
const selectedValue2 = ref({});

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});
<\/script>
`,
                data: `
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`
            }
        };
    },
    mounted() {
        NodeService.getTreeNodes().then((data) => (this.nodes = data));
    }
};
</script>
