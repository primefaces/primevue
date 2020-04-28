<template>
    <div>
        <TreeTableSubMenu />

        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TreeTable</h1>
                <p>TreeTable is used to display hierarchical data in tabular format.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3>Basic</h3>
            <TreeTable :value="nodes">
                <Column field="name" header="Name" :expander="true"></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>

            <h3>Dynamic Columns</h3>
            <TreeTable :value="nodes">
                <Column v-for="col of columns" :key="col.field"
                    :field="col.field" :header="col.header" :expander="col.expander"></Column>
            </TreeTable>

            <h3>Programmatic Control</h3>
            <div style="margin-bottom: 1em">
                <Button type="button" icon="pi pi-plus" label="Expand All" @click="expandAll" />
                <Button type="button" icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
            </div>
            <TreeTable :value="nodes" :expandedKeys="expandedKeys">
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
            nodes: null,
            columns: null,
            expandedKeys: {}
        }
    },
    nodeService: null,
    created() {
        this.nodeService = new NodeService();

        this.columns = [
            {field: 'name', header: 'Vin', expander: true},
            {field: 'size', header: 'Size'},
            {field: 'type', header: 'Type'}
        ];
    },
    mounted() {
        this.nodeService.getTreeTableNodes().then(data => this.nodes = data);
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