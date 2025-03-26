<template>
    <DocSectionText v-bind="$attrs">
        <p>An event is provided for each type of user interaction such as expand, collapse and selection.</p>
    </DocSectionText>
    <div class="card">
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
    <DocSectionCode :code="code" />
</template>

<script setup>
import { NodeService } from '@/service/NodeService';
import Tree from '@/volt/Tree.vue';
import { useToast } from 'primevue/usetoast';
import { onMounted, ref } from 'vue';

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

const onNodeCollapse = (node) => {
    toast.add({ severity: 'info', summary: 'Node Collapsed', detail: node.label, life: 3000 });
};

const code = ref(`
<template>
    <div class="card">
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
</template>

<script setup>
import { NodeService } from '@/service/NodeService';
import Tree from '@/volt/Tree.vue';
import { useToast } from 'primevue/usetoast';
import { onMounted, ref } from 'vue';

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

const onNodeCollapse = (node) => {
    toast.add({ severity: 'info', summary: 'Node Collapsed', detail: node.label, life: 3000 });
};
<\/script>
`);
</script>
