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
    <div class="card flex flex-wrap justify-center gap-8">
        <Tree :value="nodes" :filter="true" filterMode="lenient" class="w-full md:w-[30rem]"></Tree>
        <Tree :value="nodes" :filter="true" filterMode="strict" class="w-full md:w-[30rem]"></Tree>
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
