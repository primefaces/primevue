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

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;h3&gt;Single Column Sorting&lt;/h3&gt;
&lt;TreeTable :value="nodes" sortMode="single"&gt;
    &lt;Column field="name" header="Name" :expander="true" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="size" header="Size" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type" :sortable="true"&gt;&lt;/Column&gt;
&lt;/TreeTable&gt;

&lt;h3&gt;Multiple Column Sorting&lt;/h3&gt;
&lt;TreeTable :value="nodes" sortMode="multiple"&gt;
    &lt;Column field="name" header="Name" :expander="true" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="size" header="Size" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type" :sortable="true"&gt;&lt;/Column&gt;
&lt;/TreeTable&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import NodeService from '../../service/NodeService';

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
    }
}
</CodeHighlight>

                </TabPanel>
            </TabView>
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