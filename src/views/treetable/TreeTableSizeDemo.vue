<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TreeTable <span>Size</span></h1>
                <p>In addition to a regular table, a smaller and a larger alternatives available.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <TreeTable :value="nodes" class="p-treetable-sm" style="margin-bottom: 2rem">
                    <template #header>
                        Small Table
                    </template>
                    <Column field="name" header="Name" :expander="true"></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>

            <div class="card">
                <TreeTable :value="nodes" style="margin-bottom: 2rem">
                    <template #header>
                        Normal Table
                    </template>
                    <Column field="name" header="Name" :expander="true"></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>

            <div class="card">
                <TreeTable :value="nodes" class="p-treetable-lg" >
                    <template #header>
                        Large Table
                    </template>
                    <Column field="name" header="Name" :expander="true"></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>
        </div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
                    <div class="p-d-flex p-jc-end">
                        <LiveEditor name="TreeTableDemo" :sources="sources" service="NodeService" data="treetablenodes" :components="['Column', 'Button']" />
                    </div>
<pre v-code><code><template v-pre>
&lt;TreeTable :value="nodes" class="p-treetable-sm" style="margin-bottom: 2rem"&gt;
    &lt;template #header&gt;
        Small Table
    &lt;/template&gt;
    &lt;Column field="name" header="Name" :expander="true"&gt;&lt;/Column&gt;
    &lt;Column field="size" header="Size"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type"&gt;&lt;/Column&gt;
&lt;/TreeTable&gt;

&lt;TreeTable :value="nodes" style="margin-bottom: 2rem"&gt;
    &lt;template #header&gt;
        Small Table
    &lt;/template&gt;
    &lt;Column field="name" header="Name" :expander="true"&gt;&lt;/Column&gt;
    &lt;Column field="size" header="Size"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type"&gt;&lt;/Column&gt;
&lt;/TreeTable&gt;

&lt;TreeTable :value="nodes" class="p-treetable-lg"&gt;
    &lt;template #header&gt;
        Small Table
    &lt;/template&gt;
    &lt;Column field="name" header="Name" :expander="true"&gt;&lt;/Column&gt;
    &lt;Column field="size" header="Size"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type"&gt;&lt;/Column&gt;
&lt;/TreeTable&gt;
</template>
</code></pre>

<pre v-code.script><code>
import NodeService from '../../service/NodeService';

export default {
    data() {
        return {
            nodes: null,
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

</code></pre>
                </TabPanel>
            </TabView>
        </div>
    </div>
</template>

<script>
import NodeService from '../../service/NodeService';
import LiveEditor from '../liveeditor/LiveEditor';

export default {
    data() {
        return {
            nodes: null,
            sources: {
                'template': {
                    content: `<template>
    <div class="layout-content">
        <div class="content-section implementation">
            <div class="card">
                <TreeTable :value="nodes" class="p-treetable-sm" style="margin-bottom: 2rem">
                    <template #header>
                        Small Table
                    </template>
                    <Column field="name" header="Name" :expander="true"></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>

            <div class="card">
                <TreeTable :value="nodes" style="margin-bottom: 2rem">
                    <template #header>
                        Normal Table
                    </template>
                    <Column field="name" header="Name" :expander="true"></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>

            <div class="card">
                <TreeTable :value="nodes" class="p-treetable-lg" >
                    <template #header>
                        Large Table
                    </template>
                    <Column field="name" header="Name" :expander="true"></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>
        </div>
    </div>                    
</template>

<script>
import NodeService from '../service/NodeService';

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
`
                }
            }
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
        LiveEditor
    }
}
</script>