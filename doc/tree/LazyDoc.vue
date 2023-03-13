<template>
    <DocSectionText v-bind="$attrs">
        <p>Lazy loading is useful when dealing with huge datasets, in this example nodes are dynamically loaded on demand using <i>loading</i> property and <i>node-expand</i> method.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Tree :value="nodes" @node-expand="onNodeExpand" :loading="loading" class="w-full md:w-30rem"></Tree>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            nodes: null,
            loading: false,
            code: {
                basic: `
<Tree :value="nodes" @node-expand="onNodeExpand" :loading="loading" class="w-full md:w-30rem"></Tree>`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Tree :value="nodes" @node-expand="onNodeExpand" :loading="loading" class="w-full md:w-30rem"></Tree>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nodes: null,
            loading: false
        };
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
        initateNodes() {
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
        }
    }
}
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Tree :value="nodes" @node-expand="onNodeExpand" :loading="loading" class="w-full md:w-30rem"></Tree>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const nodes = ref(null);
const loading = ref(false);

onMounted(() => {
    loading.value = true;

    setTimeout(() => {
        nodes.value = initateNodes();
        loading.value = false;
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

const initateNodes = () => {
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
<\/script>`,
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
        initateNodes() {
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
        }
    }
};
</script>
