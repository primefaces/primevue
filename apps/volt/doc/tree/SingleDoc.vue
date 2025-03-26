<template>
    <DocSectionText v-bind="$attrs">
        <p>Single node selection is configured by setting <i>selectionMode</i> as <i>single</i> along with <i>selectionKeys</i> property to manage the selection value binding.</p>
    </DocSectionText>
    <div class="card">
        <Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" class="w-full md:w-[30rem]"></Tree>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import Tree from '@/volt/Tree.vue';
import { onMounted, ref } from 'vue';
import { NodeService } from '~/service/NodeService';

const nodes = ref(null);
const selectedKey = ref(null);

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});

const code = ref(`
<template>
    <div class="card">
        <Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" class="w-full md:w-[30rem]"></Tree>
    </div>
</template>

<script setup lang="ts">
import { NodeService } from '@/service/NodeService';
import Tree from '@/volt/Tree.vue';
import { onMounted, ref } from 'vue';

const nodes = ref(null);
const selectedKey = ref(null);

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});
<\/script>
`);
</script>
