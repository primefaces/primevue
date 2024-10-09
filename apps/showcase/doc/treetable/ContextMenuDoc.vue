<template>
    <DocSectionText v-bind="$attrs">
        <p>
            TreeTable has exclusive integration with ContextMenu using the <i>contextMenu</i> event to open a menu on right click alont with <i>contextMenuSelection</i> property and <i>row-contextmenu</i> event to control the selection via the menu.
        </p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <ContextMenu ref="cm" :model="menuModel" @hide="selectedNode = null" />
            <TreeTable v-model:contextMenuSelection="selectedNode" :value="nodes" contextMenu @row-contextmenu="onRowContextMenu" tableStyle="min-width: 50rem">
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
            selectedNode: null,
            menuModel: [
                { label: 'View', icon: 'pi pi-fw pi-search', command: () => this.viewNode(this.selectedNode) },
                { label: 'Delete', icon: 'pi pi-fw pi-times', command: () => this.deleteNode(this.selectedNode) }
            ],
            code: {
                basic: `
<ContextMenu ref="cm" :model="menuModel" @hide="selectedNode = null" />
<TreeTable v-model:contextMenuSelection="selectedNode" :value="nodes" contextMenu @row-contextmenu="onRowContextMenu" tableStyle="min-width: 50rem">
    <Column field="name" header="Name" expander style="width: 34%"></Column>
    <Column field="size" header="Size" style="width: 33%"></Column>
    <Column field="type" header="Type" style="width: 33%"></Column>
</TreeTable>
`,
                options: `
<template>
    <div class="card">
        <ContextMenu ref="cm" :model="menuModel" @hide="selectedNode = null" />
        <TreeTable v-model:contextMenuSelection="selectedNode" :value="nodes" contextMenu @row-contextmenu="onRowContextMenu" tableStyle="min-width: 50rem">
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
            selectedNode: null,
            menuModel: [
                { label: 'View', icon: 'pi pi-fw pi-search', command: () => this.viewNode(this.selectedNode) },
                { label: 'Delete', icon: 'pi pi-fw pi-times', command: () => this.deleteNode(this.selectedNode) }
            ]
        }
    },
    methods: {
        onRowContextMenu(event) {
            this.$refs.cm.show(event.originalEvent);
        },
        viewNode(node) {
            this.$toast.add({ severity: 'info', summary: 'Node Selected', detail: node.data.name, life: 3000 });
        },
        deleteNode(node) {
            this.nodes = this.filterNodes(this.nodes, node.key);
            this.$toast.add({ severity: 'error', summary: 'Node Deleted', detail: node.data.name, life: 3000 });
            this.selectedNode = null;
        },
        filterNodes(nodes, keyToRemove) {
            return nodes
                .map((node) => {
                    if (node.key === keyToRemove) {
                        return null;
                    }

                    if (node.children) {
                        const filteredChildren = this.filterNodes(node.children, keyToRemove);

                        return { ...node, children: filteredChildren };
                    }

                    return node;
                })
                .filter((node) => node !== null);
        }
    },
    mounted() {
        NodeService.getTreeTableNodes().then((data) => (this.nodes = data));
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <ContextMenu ref="cm" :model="menuModel" @hide="selectedNode = null" />
        <TreeTable v-model:contextMenuSelection="selectedNode" :value="nodes" contextMenu @row-contextmenu="onRowContextMenu" tableStyle="min-width: 50rem">
            <Column field="name" header="Name" expander style="width: 34%"></Column>
            <Column field="size" header="Size" style="width: 33%"></Column>
            <Column field="type" header="Type" style="width: 33%"></Column>
        </TreeTable>
        <Toast />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import { NodeService } from '@/service/NodeService';

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
});

const cm = ref();
const toast = useToast();
const nodes = ref();
const selectedNode = ref();
const menuModel = ref(
    [
        { label: 'View', icon: 'pi pi-fw pi-search', command: () => this.viewNode(this.selectedNode) },
        { label: 'Delete', icon: 'pi pi-fw pi-times', command: () => this.deleteNode(this.selectedNode) }
    ]
);

const onRowContextMenu = (event) => {
    cm.value.show(event.originalEvent);
};

const viewNode = (product) => {
    toast.add({severity: 'info', summary: 'Node Selected', detail: node.data.name, life: 3000});
};

const deleteProduct = (node) => {
    nodes.value = filterNodes(nodes.value, node.key);
    toast.add({severity: 'error', summary: 'Node Deleted', detail: node.data.name, life: 3000});
    selectedProduct.value = null;
};

const filterNodes = (nodeList, keyToRemove) => {
    return nodes
        .map((node) => {
            if (node.key === keyToRemove) {
                return null;
            }

            if (node.children) {
                const filteredChildren = filterNodes(node.children, keyToRemove);

                return { ...node, children: filteredChildren };
            }

            return node;
        })
        .filter((node) => node !== null);
}
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
        onRowContextMenu(event) {
            this.$refs.cm.show(event.originalEvent);
        },
        viewNode(node) {
            this.$toast.add({ severity: 'info', summary: 'Node Selected', detail: node.data.name, life: 3000 });
        },
        deleteNode(node) {
            this.nodes = this.filterNodes(this.nodes, node.key);
            this.$toast.add({ severity: 'error', summary: 'Node Deleted', detail: node.data.name, life: 3000 });
            this.selectedNode = null;
        },
        filterNodes(nodes, keyToRemove) {
            return nodes
                .map((node) => {
                    if (node.key === keyToRemove) {
                        return null;
                    }

                    if (node.children) {
                        const filteredChildren = this.filterNodes(node.children, keyToRemove);

                        return { ...node, children: filteredChildren };
                    }

                    return node;
                })
                .filter((node) => node !== null);
        }
    }
};
</script>
