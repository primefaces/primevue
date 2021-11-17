<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Tree <span>Lazy</span></h1>
                <p>Lazy loading is handy when dealing with huge datasets. This example imitates a lazy loading case with timeouts.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <Tree :value="nodes" @node-expand="onNodeExpand" :loading="loading"></Tree>
            </div>
        </div>

        <AppDoc name="TreeLazyDemo" :sources="sources" :service="['NodeService']" :data="['treenodes']" github="tree/TreeLazyDemo.vue" />
    </div>
</template>

<script>
import NodeService from '../../service/NodeService';

export default {
    data() {
        return {
            loading: false,
            nodes: null,
            sources: {
                'options-api': {
                    tabName: 'Options API Source',
                    content: `
<template>
    <div>
        <Tree :value="nodes" @nodeExpand="onNodeExpand" :loading="loading"></Tree>
    </div>                   
</template>

<script>
import NodeService from './service/NodeService';

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
<\\/script>
`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <Tree :value="nodes" @nodeExpand="onNodeExpand" :loading="loading"></Tree>
    </div>                   
</template>

<script>
import { ref, onMounted } from 'vue';
import NodeService from './service/NodeService';

export default {
    setup() {
        onMounted(() => {
            loading.value = true;

            setTimeout(() => {
                nodes.value = initateNodes();
                loading.value = false;
            }, 2000);
        })

        const loading = ref(false);
        const nodes = ref(null);
        const nodeService = ref(new NodeService());
        const onNodeExpand = (node) => {
            if (!node.children) {
                loading.value = true;

                setTimeout(() => {
                    let _node = {...node};
                    _node.children = [];

                    for (let i = 0; i < 3; i++) {
                        _node.children.push({
                            key: node.key + '-' + i,
                            label: 'Lazy ' + node.label + '-' + i
                        });
                    }

                    let _nodes = {...nodes.value}
                    _nodes[parseInt(node.key, 10)] = _node;

                    nodes.value = _nodes;
                    loading.value = false;
                }, 500);
            }
        };

        const initateNodes = () => {
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

        return { loading, nodes, nodeService, onNodeExpand, initateNodes }
    }
}
<\\/script>
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="./NodeService.js"><\\/script>`,
                    content: `<div id="app">
            <p-tree :value="nodes" @node-expand="onNodeExpand" :loading="loading"></p-tree>
        </div>                   

        <script type="module">
        const { createApp, ref, onMounted } = Vue;

        const App = {
            setup() {
                onMounted(() => {
                    loading.value = true;

                    setTimeout(() => {
                        nodes.value = initateNodes();
                        loading.value = false;
                    }, 2000);
                })

                const loading = ref(false);
                const nodes = ref(null);
                const nodeService = ref(new NodeService());
                const onNodeExpand = (node) => {
                    if (!node.children) {
                        loading.value = true;

                        setTimeout(() => {
                            let _node = {...node};
                            _node.children = [];

                            for (let i = 0; i < 3; i++) {
                                _node.children.push({
                                    key: node.key + '-' + i,
                                    label: 'Lazy ' + node.label + '-' + i
                                });
                            }

                            let _nodes = {...nodes.value}
                            _nodes[parseInt(node.key, 10)] = _node;

                            nodes.value = _nodes;
                            loading.value = false;
                        }, 500);
                    }
                };

                const initateNodes = () => {
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

                return { loading, nodes, nodeService, onNodeExpand, initateNodes }
            },
            components: {
                "p-tree": primevue.tree
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>
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
    margin-right: .5rem;
}
</style>