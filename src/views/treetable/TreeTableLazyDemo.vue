<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TreeTable <span>Lazy</span></h1>
                <p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking corresponding callbacks everytime paging or sorting. In addition,
                    children of a node can be loaded on demand at onNodeExpand event as well. Sample belows imitates lazy paging by using an in memory list..</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <TreeTable :value="nodes" :lazy="true" :paginator="true" :rows="rows" :loading="loading"
                    @node-expand="onExpand" @page="onPage" :totalRecords="totalRecords">
                    <Column field="name" header="Name" :expander="true"></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>
        </div>

        <AppDoc name="TreeTableLazyDemo" :sources="sources" :service="['NodeService']" :data="['treetablenodes']" github="treetable/TreeTableLazyDemo.vue" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            nodes: null,
            rows: 10,
            loading: false,
            totalRecords: 0,
            sources: {
                'options-api': {
                    tabName: 'Options API Source',
                    content: `
<template>
    <div>
        <TreeTable :value="nodes" :lazy="true" :paginator="true" :rows="rows" :loading="loading"
            @nodeExpand="onExpand" @page="onPage" :totalRecords="totalRecords">
            <Column field="name" header="Name" :expander="true"></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
        </TreeTable>
    </div>                   
</template>

<script>
export default {
    data() {
        return {
            nodes: null,
            rows: 10,
            loading: false,
            totalRecords: 0
        }
    },
    mounted() {
        this.loading = true;

        setTimeout(() => {
            this.loading = false;
            this.nodes = this.loadNodes(0, this.rows);
            this.totalRecords = 1000;
        }, 1000);
    },
    methods: {
        onExpand(node) {
            if (!node.children) {
                this.loading = true;

                setTimeout(() => {
                    let lazyNode = {...node};

                    lazyNode.children = [
                        {
                            data: {
                                name: lazyNode.data.name + ' - 0',
                                size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                                type: 'File'
                            },
                        },
                        {
                            data: {
                                name: lazyNode.data.name + ' - 1',
                                size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                                type: 'File'
                            }
                        }
                    ];

                    let nodes = this.nodes.map(n => {
                        if (n.key === node.key) {
                            n = lazyNode;
                        }

                        return n;
                    });

                    this.loading = false;
                    this.nodes = nodes;
                }, 250);
            }
        },
        onPage(event) {
            this.loading = true;

            //imitate delay of a backend call
            setTimeout(() => {
                this.loading = false;
                this.nodes = this.loadNodes(event.first, this.rows);
            }, 1000);
        },
        loadNodes(first, rows) {
            let nodes = [];

            for(let i = 0; i < rows; i++) {
                let node = {
                    key: (first + i),
                    data: {
                        name: 'Item ' + (first + i),
                        size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                        type: 'Type ' + (first + i)
                    },
                    leaf: false
                };

                nodes.push(node);
            }

            return nodes;
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
        <TreeTable :value="nodes" :lazy="true" :paginator="true" :rows="rows" :loading="loading"
            @nodeExpand="onExpand" @page="onPage" :totalRecords="totalRecords">
            <Column field="name" header="Name" :expander="true"></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
        </TreeTable>
    </div>                   
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
    setup() {
        onMounted(() => {
            loading.value = true;

            setTimeout(() => {
                loading.value = false;
                nodes.value = loadNodes(0, rows.value);
                totalRecords.value = 1000;
            }, 1000);
        })
        const nodes = ref();
        const rows = ref(10);
        const loading = ref(false);
        const totalRecords = ref(0);
        const onExpand = (node) => {
            if (!node.children) {
                loading.value = true;

                setTimeout(() => {
                    let lazyNode = {...node};

                    lazyNode.children = [
                        {
                            data: {
                                name: lazyNode.data.name + ' - 0',
                                size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                                type: 'File'
                            },
                        },
                        {
                            data: {
                                name: lazyNode.data.name + ' - 1',
                                size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                                type: 'File'
                            }
                        }
                    ];

                    let newNodes = nodes.value.map(n => {
                        if (n.key === node.key) {
                            n = lazyNode;
                        }

                        return n;
                    });

                    loading.value = false;
                    nodes.value = newNodes;
                }, 250);
            }
        };
        const onPage = (event) => {
            loading.value = true;

            //imitate delay of a backend call
            setTimeout(() => {
                loading.value = false;
                nodes.value = loadNodes(event.first, rows.value);
            }, 1000);
        };
        const loadNodes = (first, rows) => {
            let nodes = [];

            for(let i = 0; i < rows; i++) {
                let node = {
                    key: (first + i),
                    data: {
                        name: 'Item ' + (first + i),
                        size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                        type: 'Type ' + (first + i)
                    },
                    leaf: false
                };

                nodes.push(node);
            }

            return nodes;
        }

        return { nodes, rows, loading, totalRecords, onExpand, onPage, loadNodes }
    }
    
}
<\\/script>
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/treetable/treetable.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>`,
                    content: `<div id="app">
            <p-treetable :value="nodes" :lazy="true" :paginator="true" :rows="rows" :loading="loading"
                @node-expand="onExpand" @page="onPage" :total-records="totalRecords">
                <p-column field="name" header="Name" :expander="true"></p-column>
                <p-column field="size" header="Size"></p-column>
                <p-column field="type" header="Type"></p-column>
            </p-treetable>
        </div>                   

        <script type="module">
        const { createApp, ref, onMounted } = Vue;

        const App = {
            setup() {
                onMounted(() => {
                    loading.value = true;

                    setTimeout(() => {
                        loading.value = false;
                        nodes.value = loadNodes(0, rows.value);
                        totalRecords.value = 1000;
                    }, 1000);
                })
                const nodes = ref();
                const rows = ref(10);
                const loading = ref(false);
                const totalRecords = ref(0);
                const onExpand = (node) => {
                    if (!node.children) {
                        loading.value = true;

                        setTimeout(() => {
                            let lazyNode = {...node};

                            lazyNode.children = [
                                {
                                    data: {
                                        name: lazyNode.data.name + ' - 0',
                                        size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                                        type: 'File'
                                    },
                                },
                                {
                                    data: {
                                        name: lazyNode.data.name + ' - 1',
                                        size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                                        type: 'File'
                                    }
                                }
                            ];

                            let newNodes = nodes.value.map(n => {
                                if (n.key === node.key) {
                                    n = lazyNode;
                                }

                                return n;
                            });

                            loading.value = false;
                            nodes.value = newNodes;
                        }, 250);
                    }
                };
                const onPage = (event) => {
                    loading.value = true;

                    //imitate delay of a backend call
                    setTimeout(() => {
                        loading.value = false;
                        nodes.value = loadNodes(event.first, rows.value);
                    }, 1000);
                };
                const loadNodes = (first, rows) => {
                    let nodes = [];

                    for(let i = 0; i < rows; i++) {
                        let node = {
                            key: (first + i),
                            data: {
                                name: 'Item ' + (first + i),
                                size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                                type: 'Type ' + (first + i)
                            },
                            leaf: false
                        };

                        nodes.push(node);
                    }

                    return nodes;
                }

                return { nodes, rows, loading, totalRecords, onExpand, onPage, loadNodes }
            },
            components: {
                "p-treetable": primevue.treetable,
                "p-column": primevue.column
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
    mounted() {
        this.loading = true;

        setTimeout(() => {
            this.loading = false;
            this.nodes = this.loadNodes(0, this.rows);
            this.totalRecords = 1000;
        }, 1000);
    },
    methods: {
        onExpand(node) {
            if (!node.children) {
                this.loading = true;

                setTimeout(() => {
                    let lazyNode = {...node};

                    lazyNode.children = [
                        {
                            data: {
                                name: lazyNode.data.name + ' - 0',
                                size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                                type: 'File'
                            },
                        },
                        {
                            data: {
                                name: lazyNode.data.name + ' - 1',
                                size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                                type: 'File'
                            }
                        }
                    ];

                    let nodes = this.nodes.map(n => {
                        if (n.key === node.key) {
                            n = lazyNode;
                        }

                        return n;
                    });

                    this.loading = false;
                    this.nodes = nodes;
                }, 250);
            }
        },
        onPage(event) {
            this.loading = true;

            //imitate delay of a backend call
            setTimeout(() => {
                this.loading = false;
                this.nodes = this.loadNodes(event.first, this.rows);
            }, 1000);
        },
        loadNodes(first, rows) {
            let nodes = [];

            for(let i = 0; i < rows; i++) {
                let node = {
                    key: (first + i),
                    data: {
                        name: 'Item ' + (first + i),
                        size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                        type: 'Type ' + (first + i)
                    },
                    leaf: false
                };

                nodes.push(node);
            }

            return nodes;
        }
    }
}
</script>