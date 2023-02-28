<template>
    <DocSectionText v-bind="$attrs">
        <p>Tree component requires an array of TreeNode objects as its <i>value</i>.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Tree :value="nodes" class="w-full md:w-30rem"></Tree>
    </div>
    <DocSectionCode :code="code" v-bind="$attrs" :service="['NodeService']" />
</template>

<script>
import { NodeService } from '@/service/NodeService';
export default {
    data() {
        return {
            nodes: null,
            code: {
                basic: `
<Tree :value="nodes" class="w-full md:w-30rem"></Tree>`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Tree :value="nodes" class="w-full md:w-30rem"></Tree>
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
    } 
}
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Tree :value="nodes" class="w-full md:w-30rem"></Tree>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

const nodes = ref(null);

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});
<\/script>`
            }
        };
    },
    mounted() {
        NodeService.getTreeNodes().then((data) => (this.nodes = data));
    }
};
</script>
