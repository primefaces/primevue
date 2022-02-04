<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TreeTable <span>Templating</span></h1>
                <p>Custom content at header, body and footer sections are supported via templating.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <TreeTable :value="nodes">
                    <template #header>
                        FileSystem
                    </template>
                    <Column field="name" header="Name" :expander="true"></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                    <Column :headerStyle="{'width': '10rem'}" headerClass="text-center" bodyClass="text-center">
                        <template #header>
                            <Button type="button" icon="pi pi-cog"></Button>
                        </template>
                        <template #body>
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
        </div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;TreeTable :value="nodes"&gt;
    &lt;template #header&gt;
        FileSystem
    &lt;/template&gt;
    &lt;Column field="name" header="Name" :expander="true"&gt;&lt;/Column&gt;
    &lt;Column field="size" header="Size"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type"&gt;&lt;/Column&gt;
    &lt;Column headerStyle="width: 8em" bodyStyle="text-align: center"&gt;
        &lt;template #header&gt;
            &lt;Button type="button" icon="pi pi-cog"&gt;&lt;/Button&gt;
        &lt;/template&gt;
        &lt;template #body="slotProps"&gt;
            &lt;Button type="button" icon="pi pi-search" class="p-button-success" style="margin-right: .5em"&gt;&lt;/Button&gt;
            &lt;Button type="button" icon="pi pi-pencil" class="p-button-warning"&gt;&lt;/Button&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;template #footer&gt;
        &lt;div style="text-align:left"&gt;
            &lt;Button icon="pi pi-refresh" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
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
</script>