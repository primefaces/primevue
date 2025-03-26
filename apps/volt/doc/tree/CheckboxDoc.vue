<template>
    <DocSectionText v-bind="$attrs">
        <p>Selection of multiple nodes via checkboxes is enabled by configuring <i>selectionMode</i> as <i>checkbox</i>.</p>
        <p>
            In checkbox selection mode, value binding should be a key-value pair where key is the node key and value is an object that has <i>checked</i> and <i>partialChecked</i> properties to represent the checked state of a node object to indicate
            selection.
        </p>
    </DocSectionText>
    <div class="card">
        <Tree v-model:selectionKeys="selectedKeys" :value="nodes" selectionMode="checkbox" class="w-full md:w-[30rem]"></Tree>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import { NodeService } from '@/service/NodeService';
import Tree from '@/volt/Tree.vue';
import { onMounted, ref } from 'vue';

const nodes = ref(null);
const selectedKeys = ref(null);

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});

const code = ref(`
<template>
    <div class="card">
        <Tree v-model:selectionKeys="selectedKeys" :value="nodes" selectionMode="checkbox" class="w-full md:w-[30rem]"></Tree>
    </div>
</template>

<script setup>
import { NodeService } from '@/service/NodeService';
import Tree from '@/volt/Tree.vue';
import { onMounted, ref } from 'vue';

const nodes = ref(null);
const selectedKeys = ref(null);

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});
<\/script>
`);
</script>
