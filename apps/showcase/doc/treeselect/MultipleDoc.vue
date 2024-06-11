<template>
    <DocSectionText v-bind="$attrs">
        <p>
            More than one node is selectable by setting <i>selectionMode</i> to <i>multiple</i>. By default in multiple selection mode, metaKey press (e.g. <i>⌘</i>) is not necessary to add to existing selections. When the optional
            <i>metaKeySelection</i> is present, behavior is changed in a way that selecting a new node requires meta key to be present. Note that in touch enabled devices, TreeSelect always ignores metaKey.
        </p>
        <p>In multiple selection mode, value binding should be a key-value pair where key is the node key and value is a boolean to indicate selection.</p>
    </DocSectionText>
    <DocSectionCode :code="activeNodes" hideToggleCode importCode hideStackBlitz v-bind="$attrs" />
    <div class="card flex justify-center">
        <TreeSelect v-model="selectedValue" :options="nodes" selectionMode="multiple" placeholder="Select Items" class="md:w-80 w-full" />
    </div>
    <DocSectionCode :code="code" :service="['NodeService']" v-bind="$attrs" />
</template>

<script>
import { NodeService } from '/service/NodeService';
export default {
    data() {
        return {
            nodes: null,
            selectedValue: null,
            activeNodes: {
                basic: `
{
    '0-0': true,
    '0-1-0': true
}
`
            },
            code: {
                basic: `
<TreeSelect v-model="selectedValue" :options="nodes" selectionMode="multiple" placeholder="Select Item" class="md:w-80 w-full" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <TreeSelect v-model="selectedValue" :options="nodes" selectionMode="multiple" placeholder="Select Item" class="md:w-80 w-full" />
    </div>
</template>

<script>
import { NodeService } from './service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            selectedValue: null,
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
    <div class="card flex justify-center">
        <TreeSelect v-model="selectedValue" :options="nodes" selectionMode="multiple" placeholder="Select Item" class="md:w-80 w-full" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from './service/NodeService';

const nodes = ref(null);
const selectedValue = ref(null);

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
