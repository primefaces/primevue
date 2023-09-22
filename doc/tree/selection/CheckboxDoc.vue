<template>
    <DocSectionText v-bind="$attrs">
        <p>Selection of multiple nodes via checkboxes is enabled by configuring <i>selectionMode</i> as <i>checkbox</i>.</p>
        <p>
            In checkbox selection mode, value binding should be a key-value pair where key is the node key and value is an object that has <i>checked</i> and <i>partialChecked</i> properties to represent the checked state of a node obje to indicate
            selection.
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
            selectedKey: null,
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
const selectedKey = ref(null);
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
