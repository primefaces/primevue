<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Tree <span>Filter</span></h1>
                <p>Filtering updates the node based on the constraints.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Lenient Filter</h5>
                <Tree :value="nodes" :filter="true" filterMode="lenient"></Tree>

                <h5>Strict Filter</h5>
                <Tree :value="nodes" :filter="true" filterMode="strict"></Tree>
            </div>
        </div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
                    <div class="p-d-flex p-jc-end">
                        <LiveEditor name="TreeDemo" :sources="sources" service="NodeService" data="treenodes" />
                    </div>
<pre v-code><code><template v-pre>
&lt;h3&gt;Lenient Filter&lt;/h3&gt;
&lt;Tree :value="nodes" :filter="true" filterMode="lenient"&gt;&lt;/Tree&gt;

&lt;h3&gt;Strict Filter&lt;/h3&gt;
&lt;Tree :value="nodes" :filter="true" filterMode="strict"&gt;&lt;/Tree&gt;
</template>
</code></pre>

<pre v-code.script><code>
import NodeService from '../../service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            expandedKeys: {}
        }
    },
    nodeService: null,
    created() {
        this.nodeService = new NodeService();
    },
    mounted() {
        this.nodeService.getTreeNodes().then(data => this.nodes = data);
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
            this.expandedKeys[node.key] = true;
            if (node.children &lt;&lt; node.children.length) {
                for (let child of node.children) {
                    this.expandNode(child);
                }
            }
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
            nodes: null,
            expandedKeys: {},
            sources: {
                'template': {
                    content: `<template>
    <div class="layout-content">
        <div class="content-section implementation">
            <div class="card">
                <h5>Lenient Filter</h5>
                <Tree :value="nodes" :filter="true" filterMode="lenient"></Tree>

                <h5>Strict Filter</h5>
                <Tree :value="nodes" :filter="true" filterMode="strict"></Tree>
            </div>
        </div>
    </div>
</template>

<script>
import NodeService from '../service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            expandedKeys: {}
        }
    },
    nodeService: null,
    created() {
        this.nodeService = new NodeService();
    },
    mounted() {
        this.nodeService.getTreeNodes().then(data => this.nodes = data);
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
            this.expandedKeys[node.key] = true;
            if (node.children && node.children.length) {
                for (let child of node.children) {
                    this.expandNode(child);
                }
            }
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
        this.nodeService.getTreeNodes().then(data => this.nodes = data);
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
            this.expandedKeys[node.key] = true;
            if (node.children && node.children.length) {
                for (let child of node.children) {
                    this.expandNode(child);
                }
            }
        }
    },
    components: {
        LiveEditor
    }
}
</script>

<style scoped>
button {
    margin-right: .5rem;
}
</style>