<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Tree - Lazy</h1>
                <p>Lazy loading is handy when dealing with huge datasets. This example imitates a lazy loading case with timeouts.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <Tree :value="nodes" @node-expand="onNodeExpand" :loading="loading"></Tree>
        </div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;Tree :value="nodes" @node-expand="onNodeExpand" :loading="loading"&gt;&lt;/Tree&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import NodeService from '../../service/NodeService';

export default {
    data() {
        return {
            loading: false,
            nodes: null
        }
    },
    nodeService: null,
    created() {
        this.nodeService = new NodeService();
    },
    mounted() {
        this.loading = true;

        setTimeout(() => {
            this.nodes = this.initateNodes();
            this.loading = false;
        }, 2000);
    },
    methods: {
        onNodeExpand(node) {
            if (!node.children) {
                this.loading = true;

                setTimeout(() => {
                    let _node = {...node};
                    _node.children = [];

                    for (let i = 0; i &lt; 3; i++) {
                        _node.children.push({
                            key: node.key + '-' + i,
                            label: 'Lazy ' + node.label + '-' + i
                        });
                    }

                    let _nodes = {...this.nodes}
                    _nodes[parseInt(node.key, 10)] = _node;

                    this.nodes = _nodes;
                    this.loading = false;
                }, 500);
            }
        },
        initateNodes() {
            return [{
                key: '0',
                label: 'Node 0',
                leaf: false
            },
            {
                key: '1',
                label: 'Node 1',
                leaf: false
            },
            {
                key: '2',
                label: 'Node 2',
                leaf: false
            }];
        }
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
            loading: false,
            nodes: null
        }
    },
    nodeService: null,
    created() {
        this.nodeService = new NodeService();
    },
    mounted() {
        this.loading = true;

        setTimeout(() => {
            this.nodes = this.initateNodes();
            this.loading = false;
        }, 2000);
    },
    methods: {
        onNodeExpand(node) {
            if (!node.children) {
                this.loading = true;

                setTimeout(() => {
                    let _node = {...node};
                    _node.children = [];

                    for (let i = 0; i < 3; i++) {
                        _node.children.push({
                            key: node.key + '-' + i,
                            label: 'Lazy ' + node.label + '-' + i
                        });
                    }

                    let _nodes = {...this.nodes}
                    _nodes[parseInt(node.key, 10)] = _node;

                    this.nodes = _nodes;
                    this.loading = false;
                }, 500);
            }
        },
        initateNodes() {
            return [{
                key: '0',
                label: 'Node 0',
                leaf: false
            },
            {
                key: '1',
                label: 'Node 1',
                leaf: false
            },
            {
                key: '2',
                label: 'Node 2',
                leaf: false
            }];
        }
    }
}
</script>

<style scoped>
button {
    margin-right: .5em;
}
</style>