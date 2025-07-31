<template>
    <DocSectionText v-bind="$attrs">
        <p>Lazy loading is useful when dealing with huge datasets, in this example nodes are dynamically loaded on demand using <i>loading</i> property and <i>node-expand</i> method.</p>
    </DocSectionText>
    <div class="card">
        <Tree :value="nodes" @node-expand="onNodeExpand" loadingMode="icon" class="w-full md:w-[30rem]"></Tree>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import Tree from '@/volt/Tree.vue';
import { ref } from 'vue';

const nodes = ref([
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
]);

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

const code = ref(`
<template>
    <div class="card">
        <Tree :value="nodes" @node-expand="onNodeExpand" loadingMode="icon" class="w-full md:w-[30rem]"></Tree>
    </div>
</template>

<script setup lang="ts">
import Tree from '@/volt/Tree.vue';
import { onMounted, ref } from 'vue';

const nodes1 = ref(null);
const nodes2 = ref(null);
const loading = ref(false);

onMounted(() => {
    loading.value = true;
    nodes2.value = initiateNodes2();

    setTimeout(() => {
        nodes1.value = initiateNodes1();
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

            let _nodes = { ...nodes1.value };
            _nodes[parseInt(node.key, 10)] = _node;

            nodes1.value = _nodes;
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

const initiateNodes1 = () => {
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
`);
</script>
