<template>
    <DocSectionText v-bind="$attrs">
        <p>Tree component requires an array of TreeNode objects as its <i>value</i>.</p>
    </DocSectionText>
    <div class="card">
        <Tree :value="nodes" class="w-full md:w-120"></Tree>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import { NodeService } from '@/service/NodeService';
import Tree from '@/volt/Tree.vue';
import { onMounted, ref } from 'vue';

const nodes = ref(null);

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});

const code = ref(`
<template>
    <div class="card">
        <Tree :value="nodes" class="w-full md:w-120"></Tree>
    </div>
</template>

<script setup>
import Tree from '@/volt/Tree.vue';
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

const nodes = ref(null);

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});
<\/script>
`);
</script>
