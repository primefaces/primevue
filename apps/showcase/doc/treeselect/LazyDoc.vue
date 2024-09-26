<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Lazy loading is useful when dealing with huge datasets, in this example nodes are dynamically loaded on demand using <i>loading</i> property and <i>node-expand</i> method. Default value of <i>loadingMode</i> is <i>mask</i> and also
            <i>icon</i> is available.
        </p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center items-end gap-4">
        <TreeSelect v-model="selectedValue" :loading="loading" :options="nodes" @node-expand="onNodeExpand" placeholder="Select Item" class="md:w-80 w-full" />
        <TreeSelect v-model="selectedValue2" loadingMode="icon" :options="nodes2" @node-expand="onNodeExpand2" placeholder="Select Item" class="md:w-80 w-full" />
    </div>
    <DocSectionCode :code="code" v-bind="$attrs" />
</template>

<script>
export default {
    data() {
        return {
            nodes: null,
            nodes2: null,
            loading: false,
            selectedValue: null,
            selectedValue2: null,
            code: {
                basic: `
<TreeSelect v-model="selectedValue" :loading="loading" :options="nodes" @node-expand="onNodeExpand" placeholder="Select Item" class="md:w-80 w-full" />
<TreeSelect v-model="selectedValue2" loadingMode="icon" :options="nodes2" @node-expand="onNodeExpand2" placeholder="Select Item" class="md:w-80 w-full" />
`,
                options: `
<template>
    <div class="card flex flex-wrap justify-center items-end gap-4">
        <TreeSelect v-model="selectedValue" :loading="loading" :options="nodes" @node-expand="onNodeExpand" placeholder="Select Item" class="md:w-80 w-full" />
        <TreeSelect v-model="selectedValue2" loadingMode="icon" :options="nodes2" @node-expand="onNodeExpand2" placeholder="Select Item" class="md:w-80 w-full" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            nodes: null,
            nodes2: null,
            loading: false,
            selectedValue: null,
            selectedValue2: null,
        }
    },
    mounted() {
        this.loading = true;
        this.nodes2 = this.initiateNodes2();

        setTimeout(() => {
            this.nodes = this.initiateNodes();
            this.loading = false;
            this.nodes2.map((node) => (node.loading = false));
        }, 2000);
    },
    methods: {
        onNodeExpand(node) {
            if (!node.children) {
                this.loading = true;

                setTimeout(() => {
                    let _node = { ...node };

                    _node.children = [];

                    for (let i = 0; i < 3; i++) {
                        _node.children.push({
                            key: node.key + '-' + i,
                            label: 'Lazy ' + node.label + '-' + i
                        });
                    }

                    this.nodes[parseInt(node.key, 10)] = _node;
                    this.loading = false;
                }, 500);
            }
        },
        onNodeExpand2(node) {
            if (!node.children) {
                node.loading = true;

                setTimeout(() => {
                    let _node = { ...node };

                    _node.children = [];

                    for (let i = 0; i < 3; i++) {
                        _node.children.push({
                            key: node.key + '-' + i,
                            label: 'Lazy ' + node.label + '-' + i
                        });
                    }

                    this.nodes2[parseInt(node.key, 10)] = { ..._node, loading: false };
                }, 500);
            }
        },
        initiateNodes() {
            return [
                {
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
                }
            ];
        },
        initiateNodes2() {
            return [
                {
                    key: '0',
                    label: 'Node 0',
                    leaf: false,
                    loading: true
                },
                {
                    key: '1',
                    label: 'Node 1',
                    leaf: false,
                    loading: true
                },
                {
                    key: '2',
                    label: 'Node 2',
                    leaf: false,
                    loading: true
                }
            ];
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap justify-center items-end gap-4">
        <TreeSelect v-model="selectedValue" :loading="loading" :options="nodes" @node-expand="onNodeExpand" placeholder="Select Item" class="md:w-80 w-full" />
        <TreeSelect v-model="selectedValue2" loadingMode="icon" :options="nodes2" @node-expand="onNodeExpand2" placeholder="Select Item" class="md:w-80 w-full" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const nodes = ref(null);
const nodes2 = ref(null);
const selectedValue = ref(null);
const selectedValue2 = ref(null);
const loading = ref(false);

onMounted(() => {
    loading.value = true;
    nodes2.value = initiateNodes2();

    setTimeout(() => {
        nodes.value = initiateNodes();
        loading.value = false;
        nodes2.value.map((node) => (node.loading = false));
    }, 2000);
});

const onNodeExpand = (node) => {
    if (!node.children) {
        loading.value = true;

        setTimeout(() => {
            let _node = { ...node };

            _node.children = [];

            for (let i = 0; i < 3; i++) {
                _node.children.push({
                    key: node.key + '-' + i,
                    label: 'Lazy ' + node.label + '-' + i
                });
            }

            nodes.value[parseInt(node.key, 10)] = _node;
            loading.value = false;
        }, 500);
    }
};

const onNodeExpand2 = (node) => {
    if (!node.children) {
        node.loading = true;

        setTimeout(() => {
            let _node = { ...node };

            _node.children = [];

            for (let i = 0; i < 3; i++) {
                _node.children.push({
                    key: node.key + '-' + i,
                    label: 'Lazy ' + node.label + '-' + i
                });
            }

            nodes2.value[parseInt(node.key, 10)] = { ..._node, loading: false };
        }, 500);
    }
};

const initiateNodes = () => {
    return [
        {
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
        }
    ];
};

const initiateNodes2 = () => {
    return [
        {
            key: '0',
            label: 'Node 0',
            leaf: false,
            loading: true
        },
        {
            key: '1',
            label: 'Node 1',
            leaf: false,
            loading: true
        },
        {
            key: '2',
            label: 'Node 2',
            leaf: false,
            loading: true
        }
    ];
};
<\/script>
`
            }
        };
    },
    mounted() {
        this.loading = true;
        this.nodes2 = this.initiateNodes2();

        setTimeout(() => {
            this.nodes = this.initiateNodes();
            this.loading = false;
            this.nodes2.map((node) => (node.loading = false));
        }, 2000);
    },
    methods: {
        onNodeExpand(node) {
            if (!node.children) {
                this.loading = true;

                setTimeout(() => {
                    let _node = { ...node };

                    _node.children = [];

                    for (let i = 0; i < 3; i++) {
                        _node.children.push({
                            key: node.key + '-' + i,
                            label: 'Lazy ' + node.label + '-' + i
                        });
                    }

                    this.nodes[parseInt(node.key, 10)] = _node;
                    this.loading = false;
                }, 500);
            }
        },
        onNodeExpand2(node) {
            if (!node.children) {
                node.loading = true;

                setTimeout(() => {
                    let _node = { ...node };

                    _node.children = [];

                    for (let i = 0; i < 3; i++) {
                        _node.children.push({
                            key: node.key + '-' + i,
                            label: 'Lazy ' + node.label + '-' + i
                        });
                    }

                    this.nodes2[parseInt(node.key, 10)] = { ..._node, loading: false };
                }, 500);
            }
        },
        initiateNodes() {
            return [
                {
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
                }
            ];
        },
        initiateNodes2() {
            return [
                {
                    key: '0',
                    label: 'Node 0',
                    leaf: false,
                    loading: true
                },
                {
                    key: '1',
                    label: 'Node 1',
                    leaf: false,
                    loading: true
                },
                {
                    key: '2',
                    label: 'Node 2',
                    leaf: false,
                    loading: true
                }
            ];
        }
    }
};
</script>
