<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TreeSelect</h1>
                <p>TreeSelect is a form component to choose from hierarchical data.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Single</h5>
                <TreeSelect v-model="selectedNode" :options="nodes" placeholder="Select Item"></TreeSelect>

                <h5>Multiple</h5>
                <TreeSelect v-model="selectedNodes1" :options="nodes" selectionMode="multiple" :metaKeySelection="false" placeholder="Select Items"></TreeSelect>

                <h5>Checkbox</h5>
                <TreeSelect v-model="selectedNodes2" :options="nodes" display="chip" selectionMode="checkbox"  placeholder="Select Items"></TreeSelect>
            </div>
        </div>

        <TreeSelectDoc />
    </div>
</template>

<script>
import NodeService from '../../service/NodeService';
import TreeSelectDoc from './TreeSelectDoc';

export default {
    data() {
        return {
            nodes: null,
            selectedNode: null,
            selectedNodes1: null,
            selectedNodes2: null
        }
    },
    nodeService: null,
    created() {
        this.nodeService = new NodeService();
    },
    mounted() {
        this.nodeService.getTreeNodes().then(data => this.nodes = data);
    },
    components: {
        'TreeSelectDoc': TreeSelectDoc
    }
}
</script>

<style scoped>
.p-treeselect {
    width:19rem;
}

@media screen and (max-width: 640px) {
    .p-treeselect {
        width: 100%;
    }
}
</style>