<template>
    <div>
        <TreeTableSubMenu />

        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TreeTable - Column Toggle</h1>
                <p>MultiSelect component can be used to implement column toggle functionality.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <TreeTable :value="nodes">
                <template #header>
                    <div style="text-align:left">
                        <MultiSelect v-model="columns" :options="columnOptions" optionLabel="header" placeholder="Select Columns" style="width: 20em"/>
                    </div>
                </template>
                <Column field="name" header="Name" :expander="true"></Column>
                <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"></Column>
            </TreeTable>
        </div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;TreeTable :value="nodes"&gt;
    &lt;template #header&gt;
        &lt;div style="text-align:left"&gt;
            &lt;MultiSelect v-model="columns" :options="columnOptions" optionLabel="header" placeholder="Select Columns" style="width: 20em"/&gt;
        &lt;/div&gt;
    &lt;/template&gt;
    &lt;Column field="name" header="Name" :expander="true"&gt;&lt;/Column&gt;
    &lt;Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"&gt;&lt;/Column&gt;
&lt;/TreeTable&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import NodeService from '../../service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            columnOptions: null,
            columns: null
        }
    },
    nodeService: null,
    created() {
        this.nodeService = new NodeService();

        this.columns = [
            {field: 'size', header: 'Size'},
            {field: 'type', header: 'Type'}
        ];

        this.columnOptions = [...this.columns];
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
            nodes: null,
            columnOptions: null,
            columns: null
        }
    },
    nodeService: null,
    created() {
        this.nodeService = new NodeService();

        this.columns = [
            {field: 'size', header: 'Size'},
            {field: 'type', header: 'Type'}
        ];

        this.columnOptions = [...this.columns];
    },
    mounted() {
        this.nodeService.getTreeTableNodes().then(data => this.nodes = data);
    },
    components: {
        'TreeTableSubMenu': TreeTableSubMenu
    }
}
</script>