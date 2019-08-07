<template>
    <div>
        <TreeTableSubMenu />

        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TreeTable - Selection</h1>
                <p>TreeTable supports <b>single</b>, <b>multiple</b> and <b>checkbox</b> as selection modes.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3>Single Selection</h3>
            <TreeTable :value="nodes" selectionMode="single" :selectionKeys.sync="selectedKey1">
                <Column field="name" header="Name" :expander="true"></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>

            <h3>Multiple Selection with MetaKey</h3>
            <TreeTable :value="nodes" selectionMode="multiple" :selectionKeys.sync="selectedKeys1">
                <Column field="name" header="Name" :expander="true"></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>

            <h3>Multiple Selection without MetaKey</h3>
            <TreeTable :value="nodes" selectionMode="multiple" :selectionKeys.sync="selectedKeys2" :metaKeySelection="false">
                <Column field="name" header="Name" :expander="true"></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>

            <h3>Checkbox Selection</h3>
            <TreeTable :value="nodes" selectionMode="checkbox" :selectionKeys.sync="selectedKeys3">
                <Column field="name" header="Name" :expander="true"></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>

            <h3>Events</h3>
            <TreeTable :value="nodes" selectionMode="single" :selectionKeys.sync="selectedKey2"
                @node-select="onNodeSelect" @node-unselect="onNodeUnselect">
                <Column field="name" header="Name" :expander="true"></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>

        <TreeTableDoc />
    </div>
</template>

<script>
import NodeService from '../../service/NodeService';
import TreeTableDoc from './TreeTableDoc';
import TreeTableSubMenu from './TreeTableSubMenu';

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
        this.nodeService.getTreeTableNodes().then(data => this.nodes = data);
    },
    methods: {
        onNodeSelect(node) {
            this.$toast.add({severity:'success', summary: 'Node Selected', detail: node.data.name, life: 3000});
        },
        onNodeUnselect(node) {
            this.$toast.add({severity:'success', summary: 'Node Unselected', detail: node.data.name, life: 3000});
        }
    },
    components: {
        'TreeTableDoc': TreeTableDoc,
        'TreeTableSubMenu': TreeTableSubMenu
    }
}
</script>

<style scoped>
button {
    margin-right: .5em;
}
</style>