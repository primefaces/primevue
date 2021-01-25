<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TreeTable <span>Selection</span></h1>
                <p>TreeTable supports <b>single</b>, <b>multiple</b> and <b>checkbox</b> as selection modes.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Single Selection</h5>
                <TreeTable :value="nodes" selectionMode="single" v-model:selectionKeys="selectedKey1">
                    <Column field="name" header="Name" :expander="true"></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>

            <div class="card">
                <h5>Multiple Selection with MetaKey</h5>
                <TreeTable :value="nodes" selectionMode="multiple" v-model:selectionKeys="selectedKeys1">
                    <Column field="name" header="Name" :expander="true"></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>

            <div class="card">
                <h5>Multiple Selection without MetaKey</h5>
                <TreeTable :value="nodes" selectionMode="multiple" v-model:selectionKeys="selectedKeys2" :metaKeySelection="false">
                    <Column field="name" header="Name" :expander="true"></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>

            <div class="card">
                <h5>Checkbox Selection</h5>
                <TreeTable :value="nodes" selectionMode="checkbox" v-model:selectionKeys="selectedKeys3">
                    <Column field="name" header="Name" :expander="true"></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>

            <div class="card">
                <h5>Events</h5>
                <TreeTable :value="nodes" selectionMode="single" v-model:selectionKeys="selectedKey2"
                    @node-select="onNodeSelect" @node-unselect="onNodeUnselect">
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
                        <LiveEditor name="TreeTableDemo" :sources="sources" :toastService="true" service="NodeService" data="treetablenodes" :components="['Column']" />
                    </div>
<pre v-code>
<code><template v-pre>
&lt;h3&gt;Single Selection&lt;/h3&gt;
&lt;TreeTable :value="nodes" selectionMode="single" v-model:selectionKeys="selectedKey1"&gt;
    &lt;Column field="name" header="Name" :expander="true"&gt;&lt;/Column&gt;
    &lt;Column field="size" header="Size"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type"&gt;&lt;/Column&gt;
&lt;/TreeTable&gt;

&lt;h3&gt;Multiple Selection with MetaKey&lt;/h3&gt;
&lt;TreeTable :value="nodes" selectionMode="multiple" v-model:selectionKeys="selectedKeys1"&gt;
    &lt;Column field="name" header="Name" :expander="true"&gt;&lt;/Column&gt;
    &lt;Column field="size" header="Size"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type"&gt;&lt;/Column&gt;
&lt;/TreeTable&gt;

&lt;h3&gt;Multiple Selection without MetaKey&lt;/h3&gt;
&lt;TreeTable :value="nodes" selectionMode="multiple" v-model:selectionKeys="selectedKeys2" :metaKeySelection="false"&gt;
    &lt;Column field="name" header="Name" :expander="true"&gt;&lt;/Column&gt;
    &lt;Column field="size" header="Size"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type"&gt;&lt;/Column&gt;
&lt;/TreeTable&gt;

&lt;h3&gt;Checkbox Selection&lt;/h3&gt;
&lt;TreeTable :value="nodes" selectionMode="checkbox" v-model:selectionKeys="selectedKeys3"&gt;
    &lt;Column field="name" header="Name" :expander="true"&gt;&lt;/Column&gt;
    &lt;Column field="size" header="Size"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type"&gt;&lt;/Column&gt;
&lt;/TreeTable&gt;

&lt;h3&gt;Events&lt;/h3&gt;
&lt;TreeTable :value="nodes" selectionMode="single" v-model:selectionKeys="selectedKey2"
    @node-select="onNodeSelect" @node-unselect="onNodeUnselect"&gt;
    &lt;Column field="name" header="Name" :expander="true"&gt;&lt;/Column&gt;
    &lt;Column field="size" header="Size"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type"&gt;&lt;/Column&gt;
&lt;/TreeTable&gt;
</template>
</code></pre>

<pre v-code.script>
<code>
import NodeService from '../../service/NodeService';

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
            selectedKey1: null,
            selectedKey2: null,
            selectedKeys1: null,
            selectedKeys2: null,
            selectedKeys3: null,
            nodes: null,
            sources: {
                'template': {
                    content: `<template>
    <div class="layout-content">
        <Toast />
        <div class="content-section implementation">
            <div class="card">
                <h5>Single Selection</h5>
                <TreeTable :value="nodes" selectionMode="single" v-model:selectionKeys="selectedKey1">
                    <Column field="name" header="Name" :expander="true"></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>

            <div class="card">
                <h5>Multiple Selection with MetaKey</h5>
                <TreeTable :value="nodes" selectionMode="multiple" v-model:selectionKeys="selectedKeys1">
                    <Column field="name" header="Name" :expander="true"></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>

            <div class="card">
                <h5>Multiple Selection without MetaKey</h5>
                <TreeTable :value="nodes" selectionMode="multiple" v-model:selectionKeys="selectedKeys2" :metaKeySelection="false">
                    <Column field="name" header="Name" :expander="true"></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>

            <div class="card">
                <h5>Checkbox Selection</h5>
                <TreeTable :value="nodes" selectionMode="checkbox" v-model:selectionKeys="selectedKeys3">
                    <Column field="name" header="Name" :expander="true"></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>

            <div class="card">
                <h5>Events</h5>
                <TreeTable :value="nodes" selectionMode="single" v-model:selectionKeys="selectedKey2"
                    @node-select="onNodeSelect" @node-unselect="onNodeUnselect">
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
    methods: {
        onNodeSelect(node) {
            this.$toast.add({severity:'success', summary: 'Node Selected', detail: node.data.name, life: 3000});
        },
        onNodeUnselect(node) {
            this.$toast.add({severity:'success', summary: 'Node Unselected', detail: node.data.name, life: 3000});
        }
    },
    components: {
        LiveEditor
    }
}
</script>