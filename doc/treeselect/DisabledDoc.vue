<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>disabled</i> is present, the element cannot be edited and focused.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <TreeSelect v-model="selectedValue" disabled class="md:w-20rem w-full" :options="nodes" placeholder="TreeSelect" />
    </div>
    <DocSectionCode :code="code" :service="['NodeService']" v-bind="$attrs" />
</template>

<script>
import { NodeService } from '/service/NodeService';
export default {
    data() {
        return {
            nodes: null,
            selectedValue: null,
            code: {
                basic: `
<TreeSelect v-model="selectedValue" disabled class="md:w-20rem w-full" :options="nodes" placeholder="TreeSelect" />`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <TreeSelect v-model="selectedValue" disabled class="md:w-20rem w-full" :options="nodes" placeholder="TreeSelect" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            nodes: null,
            selectedValue: null,
        }
    },
    mounted() {
        NodeService.getTreeNodes().then((data) => (this.nodes     = data));
    }
}
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <TreeSelect v-model="selectedValue" disabled class="md:w-20rem w-full" :options="nodes" placeholder="TreeSelect" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const nodes = ref(null);
const selectedValue = ref(null);

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
