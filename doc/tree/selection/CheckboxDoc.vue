<template>
    <DocSectionText v-bind="$attrs">
        <p>Selection of multiple nodes via checkboxes is enabled by configuring <i>selectionMode</i> as <i>checkbox</i>.</p>
        <p>
            In checkbox selection mode, value binding should be an array of string where string is the node key <br> 
            for example: <i><code>selectedKey:[ "0", "1", "0-0"]</code></i>.
        </p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="checkbox" class="w-full md:w-30rem"></Tree>
    </div>
    <DocSectionCode :code="code" v-bind="$attrs" :service="['NodeService']" />
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            selectedKey: [ "0", "1", "0-0", "0-0-0", "0-0-1", "1-0", "1-1", "1-2" ],
            code: {
                basic: `
<Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="checkbox" class="w-full md:w-30rem"></Tree>`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Toast />
        <Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="checkbox" class="w-full md:w-30rem"></Tree>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            selectedKey: [ "0", "1", "0-0", "0-0-0", "0-0-1", "1-0", "1-1", "1-2" ]
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
            this.$toast.add({ severity: 'success', summary: 'Node Unselected', detail: node.label, life: 3000 });
        }
    }
}
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Toast />
        <Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="checkbox" class="w-full md:w-30rem"></Tree>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';
import { useToast } from "primevue/usetoast";

const nodes = ref(null);
const selectedKey = ref([ "0", "1", "0-0", "0-0-0", "0-0-1", "1-0", "1-1", "1-2" ]);
const toast = useToast();

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});

const onNodeSelect = (node) => {
    toast.add({ severity: 'success', summary: 'Node Selected', detail: node.label, life: 3000 });
};

const onNodeUnselect = (node) => {
    toast.add({ severity: 'success', summary: 'Node Unselected', detail: node.label, life: 3000 });
};
<\/script>`
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
            this.$toast.add({ severity: 'success', summary: 'Node Unselected', detail: node.label, life: 3000 });
        }
    }
};
</script>
