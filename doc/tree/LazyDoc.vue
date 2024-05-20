<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Lazy loading is useful when dealing with huge datasets, in this example nodes are dynamically loaded on demand using <i>loading</i> property and <i>node-expand</i> method. Default value of <i>loadingMode</i> is <i>mask</i> and also
            <i>icon</i> is available.
        </p>
    </DocSectionText>
    <div class="card flex flex-wrap p-fluid gap-4">
        <div class="flex-auto md:flex md:justify-start md:items-center flex-col">
            <label class="font-bold block mb-2">Mask Mode</label>
            <Tree :value="nodes" @node-expand="onNodeExpand" :loading="loading" class="w-full md:w-[30rem]"></Tree>
        </div>
        <div class="flex-auto md:flex md:justify-start md:items-center flex-col">
            <label class="font-bold block mb-2">Icon Mode</label>
            <Tree :value="nodes2" @node-expand="onNodeExpand2" loadingMode="icon" class="w-full md:w-[30rem]"></Tree>
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            nodes: null,
            nodes2: null,
            loading: false,
            code: {
                basic: `
<Tree :value="nodes" @node-expand="onNodeExpand" :loading="loading" class="w-full md:w-[30rem]"></Tree>
<Tree :value="nodes2" @node-expand="onNodeExpand2" loadingMode="icon" class="w-full md:w-[30rem]"></Tree>
`,
                options: `
<template>
    <div class="card flex flex-wrap p-fluid gap-4">
        <div class="flex-auto md:flex md:justify-start md:items-center flex-col">
            <label class="font-bold block mb-2">Mask Mode</label>
            <Tree :value="nodes" @node-expand="onNodeExpand" :loading="loading" class="w-full md:w-[30rem]"></Tree>
        </div>
        <div class="flex-auto md:flex md:justify-start md:items-center flex-col">
            <label class="font-bold block mb-2">Icon Mode</label>
            <Tree :value="nodes2" @node-expand="onNodeExpand2" loadingMode="icon" class="w-full md:w-[30rem]"></Tree>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nodes: null,
            nodes2: null,
            loading: false
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

                    let _nodes = { ...this.nodes };
                    _nodes[parseInt(node.key, 10)] = _node;

                    this.nodes = _nodes;
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

                    let _nodes = { ...this.nodes2 };

                    _nodes[parseInt(node.key, 10)] = { ..._node, loading: false };

                    this.nodes2 = _nodes;
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
    <div class="card flex flex-wrap p-fluid gap-4">
        <div class="flex-auto md:flex md:justify-start md:items-center flex-col">
            <label class="font-bold block mb-2">Mask Mode</label>
            <Tree :value="nodes" @node-expand="onNodeExpand" :loading="loading" class="w-full md:w-[30rem]"></Tree>
        </div>
        <div class="flex-auto md:flex md:justify-start md:items-center flex-col">
            <label class="font-bold block mb-2">Icon Mode</label>
            <Tree :value="nodes2" @node-expand="onNodeExpand2" loadingMode="icon" class="w-full md:w-[30rem]"></Tree>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const nodes = ref(null);
const nodes2 = ref(null);
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

            let _nodes = { ...nodes.value };
            _nodes[parseInt(node.key, 10)] = _node;

            nodes.value = _nodes;
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

            let _nodes = { ...nodes2.value };

            _nodes[parseInt(node.key, 10)] = { ..._node, loading: false };

            nodes2.value = _nodes;
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
`,
                data: `
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`
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

                    let _nodes = { ...this.nodes };

                    _nodes[parseInt(node.key, 10)] = _node;

                    this.nodes = _nodes;
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

                    let _nodes = { ...this.nodes2 };

                    _nodes[parseInt(node.key, 10)] = { ..._node, loading: false };

                    this.nodes2 = _nodes;
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
