<template>
    <div>
        <TreeTableSubMenu />

        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TreeTable - Sort</h1>
               <p>TreeTable supports both single column and multiple column sorting..</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3>Single Column Sorting</h3>
            <TreeTable :value="nodes" sortMode="single">
                <Column field="name" header="Name" :expander="true" :sortable="true"></Column>
                <Column field="size" header="Size" :sortable="true"></Column>
                <Column field="type" header="Type" :sortable="true"></Column>
            </TreeTable>

            <h3>Multiple Column Sorting</h3>
            <TreeTable :value="nodes" sortMode="multiple">
                <Column field="name" header="Name" :expander="true" :sortable="true"></Column>
                <Column field="size" header="Size" :sortable="true"></Column>
                <Column field="type" header="Type" :sortable="true"></Column>
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