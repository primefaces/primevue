<template>
    <DocSectionText v-bind="$attrs">
        <p>TreeTable provides <i>nodeSelect</i> and <i>nodeUnselect</i> events to listen selection events.</p>
    </DocSectionText>
    <div class="card">
        <TreeTable v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" @nodeSelect="onNodeSelect" @nodeUnselect="onNodeUnselect" :metaKeySelection="false">
            <Column field="name" header="Name" expander></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
        </TreeTable>
    </div>
    <DocSectionCode :code="code" :service="['NodeService']" />
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            selectedKey: null,
            code: {
                basic: `
<TreeTable v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" :metaKeySelection="false"
    @nodeSelect="onNodeSelect" @nodeUnselect="onNodeUnselect">
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>
`,
                options: `
<template>
    <div class="card">
        <TreeTable v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" :metaKeySelection="false"
            @nodeSelect="onNodeSelect" @nodeUnselect="onNodeUnselect">
            <Column field="name" header="Name" expander></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
        </TreeTable>
        <Toast />
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            selectedKey: null
        }
    },
    mounted() {
        NodeService.getTreeTableNodes().then((data) => (this.nodes = data));
    },
    methods: {
        onNodeSelect(node) {
            this.$toast.add({ severity: 'success', summary: 'Node Selected', detail: node.data.name, life: 3000 });
        },
        onNodeUnselect(node) {
            this.$toast.add({ severity: 'warn', summary: 'Node Unselected', detail: node.data.name, life: 3000 });
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <TreeTable v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" :metaKeySelection="false"
            @nodeSelect="onNodeSelect" @nodeUnselect="onNodeUnselect">
            <Column field="name" header="Name" expander></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
        </TreeTable>
        <Toast />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast'
import { NodeService } from '@/service/NodeService';

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
});

const nodes = ref();
const selectedKey = ref();
const toast = useToast();
const onNodeSelect = (node) => {
    toast.add({ severity: 'success', summary: 'Node Selected', detail: node.data.name, life: 3000 });
};
const onNodeUnselect = (node) => {
    toast.add({ severity: 'warn', summary: 'Node Unselected', detail: node.data.name, life: 3000 });
};
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
...
`
            }
        };
    },
    mounted() {
        NodeService.getTreeTableNodes().then((data) => (this.nodes = data));
    },
    methods: {
        onNodeSelect(node) {
            this.$toast.add({ severity: 'success', summary: 'Node Selected', detail: node.data.name, life: 3000 });
        },
        onNodeUnselect(node) {
            this.$toast.add({ severity: 'warn', summary: 'Node Unselected', detail: node.data.name, life: 3000 });
        }
    }
};
</script>
