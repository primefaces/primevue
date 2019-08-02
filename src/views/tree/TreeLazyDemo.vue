<template>
    <div>
        <TreeSubMenu />

        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Tree - Lazy</h1>
                <p>Tree is used to display hierarchical data.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3>Basic</h3>
            <Tree :value="nodes"></Tree>

            <h3>Programmatic Control</h3>
            <div style="margin-bottom: 1em">
                <Button type="button" icon="pi pi-plus" label="Expand All" @click="expandAll" />
                <Button type="button" icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
            </div>
            <Tree :value="nodes" :expandedKeys="expandedKeys"></Tree>            
        </div>

        <TreeDoc />
    </div>
</template>
<script>
import NodeService from '../../service/NodeService';
import TreeDoc from './TreeDoc';
import TreeSubMenu from './TreeSubMenu';

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
            this.expandedKeys[node.key] = true;
            if (node.children && node.children.length) {
                for (let child of node.children) {
                    this.expandNode(child);
                }
            }
        }
    },
    components: {
        'TreeDoc': TreeDoc,
        'TreeSubMenu': TreeSubMenu
    }
}
</script>

<style scoped>
button {
    margin-right: .5em;
}
</style>