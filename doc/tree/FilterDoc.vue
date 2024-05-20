<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Filtering is enabled by adding the <i>filter</i> property, by default label property of a node is used to compare against the value in the text field, in order to customize which field(s) should be used during search define
            <i>filterBy</i> property. In addition <i>filterMode</i> specifies the filtering strategy. In <i>lenient</i> mode when the query matches a node, children of the node are not searched further as all descendants of the node are included. On
            the other hand, in <i>strict</i> mode when the query matches a node, filtering continues on all descendants.
        </p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center gap-8">
        <Tree :value="nodes" :filter="true" filterMode="lenient" class="w-full md:w-[30rem]"></Tree>
        <Tree :value="nodes" :filter="true" filterMode="strict" class="w-full md:w-[30rem]"></Tree>
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
<Tree :value="nodes" :filter="true" filterMode="lenient" class="w-full md:w-[30rem]"></Tree>
<Tree :value="nodes" :filter="true" filterMode="strict" class="w-full md:w-[30rem]"></Tree>
`,
                options: `
<template>
    <div class="card flex flex-wrap justify-center gap-8">
        <Tree :value="nodes" :filter="true" filterMode="lenient" class="w-full md:w-[30rem]"></Tree>
        <Tree :value="nodes" :filter="true" filterMode="strict" class="w-full md:w-[30rem]"></Tree>
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
        NodeService.getTreeNodes().then(data => this.nodes = data);
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
            this.expandedKeys[node.key] = true;

            if (node.children && node.children.length) {
                for (let child of node.children) {
                    this.expandNode(child);
                }
            }
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap justify-center gap-8">
        <Tree :value="nodes" :filter="true" filterMode="lenient" class="w-full md:w-[30rem]"></Tree>
        <Tree :value="nodes" :filter="true" filterMode="strict" class="w-full md:w-[30rem]"></Tree>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

const nodes = ref(null);

onMounted(() => {
    NodeService.getTreeNodes().then(data => nodes.value = data);
});

const expandedKeys = ref({});

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
    expandedKeys.value[node.key] = true;

    if (node.children && node.children.length) {
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
    }
};
</script>
