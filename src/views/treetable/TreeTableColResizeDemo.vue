<template>
    <div>
        <TreeTableSubMenu />

        <div class="content-section introduction">
			<div class="feature-intro">
				<h1>TreeTable - Column Resize</h1>
				<p>Columns can be resized using drag drop by setting the resizableColumns to true. There are two resize modes; "fit" and "expand". Fit is the default one and the overall table width does not change when a column is resized. 
                    In "expand" mode, table width also changes along with the column width.</p>
			</div>
		</div>

        <div class="content-section implementation">
            <h3>Fit Mode</h3>
            <TreeTable :value="nodes" :resizableColumns="true" columnResizeMode="fit">
                <Column field="name" header="Name" :expander="true"></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>

            <h3>Expand Mdoe</h3>
            <TreeTable :value="nodes" :resizableColumns="true" columnResizeMode="expand">
                <Column field="name" header="Name" :expander="true"></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    </div>
</template>

<script>
import NodeService from '../../service/NodeService';
import TreeTableSubMenu from './TreeTableSubMenu';

export default {
    data() {
        return {
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
    components: {
        'TreeTableSubMenu': TreeTableSubMenu
    }
}
</script>