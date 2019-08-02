<template>
    <div>
        <TreeSubMenu />

        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Tree - Selection</h1>
                <p>Tree supports <b>single</b>, <b>multiple</b> and <b>checkbox</b> as selection modes.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3>Single Selection</h3>
            <Tree :value="nodes" selectionMode="single" :selectionKeys.sync="selectedKey1"></Tree>

            <h3>Multiple Selection with MetaKey</h3>
            <Tree :value="nodes" selectionMode="multiple" :selectionKeys.sync="selectedKeys1"></Tree>

            <h3>Multiple Selection without MetaKey</h3>
            <Tree :value="nodes" selectionMode="multiple" :selectionKeys.sync="selectedKeys2" :metaKeySelection="false"></Tree>

            <h3>Checkbox Selection</h3>
            <Tree :value="nodes" selectionMode="checkbox" :selectionKeys.sync="selectedKeys3"></Tree>

            <h3>Events</h3>
            <Tree :value="nodes" selectionMode="single" :selectionKeys.sync="selectedKey2" :metaKeySelection="false"
                @node-select="onNodeSelect" @node-unselect="onNodeUnselect"></Tree>
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
            selectedKey1: null,
            selectedKey2: null,
            selectedKeys1: null,
            selectedKeys2: null,
            selectedKeys3: null,
            nodes: null
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
        onNodeSelect(node) {
            this.$toast.add({severity:'success', summary: 'Node Selected', detail: node.label, life: 3000});
        },
        onNodeUnselect(node) {
            this.$toast.add({severity:'success', summary: 'Node Unselected', detail: node.label, life: 3000});
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