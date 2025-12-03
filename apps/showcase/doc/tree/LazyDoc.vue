<template>
    <DocSectionText v-bind="$attrs">
        <p>Lazy loading is useful when dealing with huge datasets, in this example nodes are dynamically loaded on demand using <i>loading</i> property and <i>node-expand</i> method.</p>
    </DocSectionText>
    <div class="card">
        <Tree :value="nodes" @node-expand="onNodeExpand" loadingMode="icon" class="w-full md:w-[30rem]"></Tree>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            nodes: null,
            code: {
                basic: `
<Tree :value="nodes" @node-expand="onNodeExpand" loadingMode="icon" class="w-full md:w-[30rem]"></Tree>
`,
                options: `
<template>
    <div class="card">
        <Tree :value="nodes" @node-expand="onNodeExpand" loadingMode="icon" class="w-full md:w-[30rem]"></Tree>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nodes: null
        };
    },
    mounted() {
        this.nodes = this.initiateNodes();

        setTimeout(() => {
            this.nodes.map((node) => (node.loading = false));
        }, 2000);
    },
    methods: {
        onNodeExpand(node) {
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

                    let _nodes = { ...this.nodes };

                    _nodes[parseInt(node.key, 10)] = { ..._node, loading: false };

                    this.nodes = _nodes;
                }, 500);
            }
        },
        initiateNodes() {
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
    <div class="card">
        <Tree :value="nodes" @node-expand="onNodeExpand" loadingMode="icon" class="w-full md:w-[30rem]"></Tree>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const nodes = ref(null);

onMounted(() => {
    nodes.value = initiateNodes();

    setTimeout(() => {
        nodes.value.map((node) => (node.loading = false));
    }, 2000);
});


const onNodeExpand = (node) => {
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

            let _nodes = { ...nodes.value };

            _nodes[parseInt(node.key, 10)] = { ..._node, loading: false };

            nodes.value = _nodes;
        }, 500);
    }
};

const initiateNodes = () => {
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
        this.nodes = this.initiateNodes();

        setTimeout(() => {
            this.nodes.map((node) => (node.loading = false));
        }, 2000);
    },
    methods: {
        onNodeExpand(node) {
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

                    let _nodes = { ...this.nodes };

                    _nodes[parseInt(node.key, 10)] = { ..._node, loading: false };

                    this.nodes = _nodes;
                }, 500);
            }
        },
        initiateNodes() {
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
