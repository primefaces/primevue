<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Tree</h1>
                <p>Tree is used to display hierarchical data.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Basic</h5>
                <Tree :value="nodes"></Tree>

                <h5>Programmatic Control</h5>
                <div style="margin-bottom: 1em">
                    <Button type="button" icon="pi pi-plus" label="Expand All" @click="expandAll" />
                    <Button type="button" icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
                </div>
                <Tree :value="nodes" :expandedKeys="expandedKeys"></Tree>
            </div>
        </div>

        <TreeDoc />
    </div>
</template>
<script>
import NodeService from '../../service/NodeService';
import TreeDoc from './TreeDoc';

export default {
    data() {
        return {
            nodes: null,
            expandedKeys: {}
        }
    },
    nodeService: null,
    created() {
        this.nodeService = new NodeService();
    },
    mounted() {
        this.nodeService.getTreeNodes().then(data => this.nodes = data);
    },
    methods: {
        expandAll() {
            for (let node of this.nodes) {
                this.expandNode(node);
            }

            this.expandedKeys = {...this.expandedKeys};
        },
        collapseAll() {
            this.expandedKeys = {};
        },
        expandNode(node) {
            if (node.children && node.children.length) {
                this.expandedKeys[node.key] = true;

                for (let child of node.children) {
                    this.expandNode(child);
                }
            }
        }
    },
    components: {
        'TreeDoc': TreeDoc
    }
}
</script>

<style scoped>
button {
    margin-right: .5rem;
}
</style>