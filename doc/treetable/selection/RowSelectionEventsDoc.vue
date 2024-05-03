<template>
    <DocSectionText v-bind="$attrs">
        <p>TreeTable provides <i>nodeSelect</i> and <i>nodeUnselect</i> events to listen selection events.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <TreeTable v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" @nodeSelect="onNodeSelect" @nodeUnselect="onNodeUnselect" :metaKeySelection="false" tableStyle="min-width: 50rem">
                <Column field="name" header="Name" expander style="width: 34%"></Column>
                <Column field="size" header="Size" style="width: 33%"></Column>
                <Column field="type" header="Type" style="width: 33%"></Column>
            </TreeTable>
        </div>
    </DeferredDemo>
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
<TreeTable v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" @nodeSelect="onNodeSelect" @nodeUnselect="onNodeUnselect" :metaKeySelection="false" tableStyle="min-width: 50rem">
    <Column field="name" header="Name" expander style="width: 34%"></Column>
    <Column field="size" header="Size" style="width: 33%"></Column>
    <Column field="type" header="Type" style="width: 33%"></Column>
</TreeTable>
`,
                options: `
<template>
    <div class="card">
        <TreeTable v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" @nodeSelect="onNodeSelect" @nodeUnselect="onNodeUnselect" :metaKeySelection="false" tableStyle="min-width: 50rem">
            <Column field="name" header="Name" expander style="width: 34%"></Column>
            <Column field="size" header="Size" style="width: 33%"></Column>
            <Column field="type" header="Type" style="width: 33%"></Column>
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
        <TreeTable v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" @nodeSelect="onNodeSelect" @nodeUnselect="onNodeUnselect" :metaKeySelection="false" tableStyle="min-width: 50rem">
                <Column field="name" header="Name" expander style="width: 34%"></Column>
            <Column field="size" header="Size" style="width: 33%"></Column>
            <Column field="type" header="Type" style="width: 33%"></Column>
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
    methods: {
        loadDemoData() {
            NodeService.getTreeTableNodes().then((data) => (this.nodes = data));
        },
        onNodeSelect(node) {
            this.$toast.add({ severity: 'success', summary: 'Node Selected', detail: node.data.name, life: 3000 });
        },
        onNodeUnselect(node) {
            this.$toast.add({ severity: 'warn', summary: 'Node Unselected', detail: node.data.name, life: 3000 });
        }
    }
};
</script>
