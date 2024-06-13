<template>
    <DocSectionText v-bind="$attrs">
        <p>An event is provided for each type of user interaction such as expand, collapse and selection.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Tree
            v-model:selectionKeys="selectedKey"
            :value="nodes"
            selectionMode="single"
            :metaKeySelection="false"
            @nodeSelect="onNodeSelect"
            @nodeUnselect="onNodeUnselect"
            @nodeExpand="onNodeExpand"
            @nodeCollapse="onNodeCollapse"
            class="w-full md:w-[30rem]"
        ></Tree>
    </div>
    <DocSectionCode :code="code" v-bind="$attrs" :service="['NodeService']" />
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
<Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" :metaKeySelection="false" class="w-full md:w-[30rem]"
    @nodeSelect="onNodeSelect" @nodeUnselect="onNodeUnselect" @nodeExpand="onNodeExpand" @nodeCollapse="onNodeCollapse" class="w-full md:w-[30rem]"></Tree>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Toast />
        <Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" :metaKeySelection="false"
            @nodeSelect="onNodeSelect" @nodeUnselect="onNodeUnselect" @nodeExpand="onNodeExpand" @nodeCollapse="onNodeCollapse" class="w-full md:w-[30rem]"></Tree>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null
        };
    },
    mounted() {
        NodeService.getTreeNodes().then((data) => (this.nodes = data));
    },
    methods: {
        onNodeSelect(node) {
            this.$toast.add({ severity: 'success', summary: 'Node Selected', detail: node.label, life: 3000 });
        },
        onNodeUnselect(node) {
            this.$toast.add({ severity: 'warn', summary: 'Node Unselected', detail: node.label, life: 3000 });
        },
        onNodeExpand(node) {
            this.$toast.add({ severity: 'info', summary: 'Node Expanded', detail: node.label, life: 3000 });
        },
        onNodeCollapse(node) {
            this.$toast.add({ severity: 'error', summary: 'Node Collapsed', detail: node.label, life: 3000 });
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Toast />
        <Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" :metaKeySelection="false"
            @nodeSelect="onNodeSelect" @nodeUnselect="onNodeUnselect" @nodeExpand="onNodeExpand" @nodeCollapse="onNodeCollapse" class="w-full md:w-[30rem]"></Tree>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';
import { useToast } from "primevue/usetoast";

const nodes = ref(null);
const selectedKey = ref(null);
const toast = useToast();

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});

const onNodeSelect = (node) => {
    toast.add({ severity: 'success', summary: 'Node Selected', detail: node.label, life: 3000 });
};

const onNodeUnselect = (node) => {
    toast.add({ severity: 'warn', summary: 'Node Unselected', detail: node.label, life: 3000 });
};

const onNodeExpand = (node) => {
    toast.add({ severity: 'info', summary: 'Node Expanded', detail: node.label, life: 3000 });
};

const onNodeCollapse (node) => {
    toast.add({ severity: 'error', summary: 'Node Collapsed', detail: node.label, life: 3000 });
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
...`
            }
        };
    },
    mounted() {
        NodeService.getTreeNodes().then((data) => (this.nodes = data));
    },
    methods: {
        onNodeSelect(node) {
            this.$toast.add({ severity: 'success', summary: 'Node Selected', detail: node.label, life: 3000 });
        },
        onNodeUnselect(node) {
            this.$toast.add({ severity: 'warn', summary: 'Node Unselected', detail: node.label, life: 3000 });
        },
        onNodeExpand(node) {
            this.$toast.add({ severity: 'info', summary: 'Node Expanded', detail: node.label, life: 3000 });
        },
        onNodeCollapse(node) {
            this.$toast.add({ severity: 'error', summary: 'Node Collapsed', detail: node.label, life: 3000 });
        }
    }
};
</script>
