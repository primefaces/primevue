<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Tree state can be controlled programmatically with the <i>expandedKeys</i> property that defines the keys that are expanded. This property is a Map instance whose key is the key of a node and value is a boolean. Note that
            <i>expandedKeys</i> also supports two-way binding with the v-model directive.
        </p>
    </DocSectionText>
    <div class="card flex flex-col items-center">
        <div class="flex flex-wrap gap-2 mb-6">
            <Button type="button" icon="pi pi-plus" label="Expand All" @click="expandAll" />
            <Button type="button" icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
        </div>
        <Tree v-model:expandedKeys="expandedKeys" :value="nodes" class="w-full md:w-[30rem]"></Tree>
    </div>
    <DocSectionCode :code="code" v-bind="$attrs" :service="['NodeService']" />
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            expandedKeys: {},
            code: {
                basic: `
<div class="flex flex-wrap gap-2 mb-6">
    <Button type="button" icon="pi pi-plus" label="Expand All" @click="expandAll" />
    <Button type="button" icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
</div>
<Tree v-model:expandedKeys="expandedKeys" :value="nodes" class="w-full md:w-[30rem]"></Tree>
`,
                options: `
<template>
    <div class="card flex flex-col align-items-cente">
        <div class="flex flex-wrap gap-2 mb-6">
            <Button type="button" icon="pi pi-plus" label="Expand All" @click="expandAll" />
            <Button type="button" icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
        </div>
        <Tree v-model:expandedKeys="expandedKeys" :value="nodes" class="w-full md:w-[30rem]"></Tree>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            expandedKeys: {}
        };
    },
    mounted() {
        NodeService.getTreeNodes().then((data) => (this.nodes = data));
    },
    methods: {
        expandAll() {
            for (let node of this.nodes) {
                this.expandNode(node);
            }

            this.expandedKeys = { ...this.expandedKeys };
        },
        collapseAll() {
            this.expandedKeys = {};
        },
        expandNode(node) {
            if (node.children && node.children.length) {
                this.expandedKeys[node.key] = true;

                for (let child of node.children) {
                    this.expandNode(child);
                }
            }
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-col align-items-cente">
        <div class="flex flex-wrap gap-2 mb-6">
            <Button type="button" icon="pi pi-plus" label="Expand All" @click="expandAll" />
            <Button type="button" icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
        </div>
        <Tree v-model:expandedKeys="expandedKeys" :value="nodes" class="w-full md:w-[30rem]"></Tree>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

const nodes = ref(null);
const expandedKeys = ref({});

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});

const expandAll = () => {
    for (let node of nodes.value) {
        expandNode(node);
    }

    expandedKeys.value = { ...expandedKeys.value };
};

const collapseAll = () => {
    expandedKeys.value = {};
};

const expandNode = (node) => {
    if (node.children && node.children.length) {
        expandedKeys.value[node.key] = true;

        for (let child of node.children) {
            expandNode(child);
        }
    }
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
        expandAll() {
            for (let node of this.nodes) {
                this.expandNode(node);
            }

            this.expandedKeys = { ...this.expandedKeys };
        },
        collapseAll() {
            this.expandedKeys = {};
        },
        expandNode(node) {
            if (node.children && node.children.length) {
                this.expandedKeys[node.key] = true;

                for (let child of node.children) {
                    this.expandNode(child);
                }
            }
        }
    }
};
</script>
