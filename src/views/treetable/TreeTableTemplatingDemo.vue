<template>
    <div>
        <TreeTableSubMenu />

        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TreeTable - Templating</h1>
                <p>Custom content at header, body and footer sections are supported via templating.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <TreeTable :value="nodes">
                <template #header>
                    FileSystem
                </template>
                <Column field="name" header="Name" :expander="true"></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
                <Column headerStyle="width: 8em" bodyStyle="text-align: center">
                    <template #header>
                        <Button type="button" icon="pi pi-cog"></Button>
                    </template>
                    <template #body="slotProps">
                        <Button type="button" icon="pi pi-search" class="p-button-success" style="margin-right: .5em"></Button>
                        <Button type="button" icon="pi pi-pencil" class="p-button-warning"></Button>
                    </template>
                </Column>
                <template #footer>
                    <div style="text-align:left">
                        <Button icon="pi pi-refresh" />
                    </div>
                </template>
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