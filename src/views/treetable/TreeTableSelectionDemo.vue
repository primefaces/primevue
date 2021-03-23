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

        <AppDoc name="TreeTableSelectionDemo" :sources="sources" :service="['NodeService']" :data="['treetablenodes']" />
    </div>
</template>

<script>
import NodeService from '../../service/NodeService';

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
                'options-api': {
                    tabName: 'Source',
                    content: `
<template>
    <div>
        <Toast />

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
                @nodeSelect="onNodeSelect" @nodeUnselect="onNodeUnselect">
                <Column field="name" header="Name" :expander="true"></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    </div>                    
</template>

<script>
import NodeService from './service/NodeService';

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
<\\/script>
`
                },
                'composition-api': {
                    tabName: 'Composition API',
                    content: `
<template>
    <div>
        <Toast />

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
                @nodeSelect="onNodeSelect" @nodeUnselect="onNodeUnselect">
                <Column field="name" header="Name" :expander="true"></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    </div>                    
</template>

<script>
import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import NodeService from './service/NodeService';

export default {
    setup() {
        onMounted(() => {
            nodeService.value.getTreeTableNodes().then(data => nodes.value = data);
        })

        const toast = useToast();
        const selectedKey1 = ref();
        const selectedKey2 = ref();
        const selectedKeys1 = ref();
        const selectedKeys2 = ref();
        const selectedKeys3 = ref();
        const nodes = ref();
        const nodeService = ref(new NodeService());
        const onNodeSelect = (node) => {
            toast.add({severity:'success', summary: 'Node Selected', detail: node.data.name, life: 3000});
        }
        const onNodeUnselect = (node) => {
            toast.add({severity:'success', summary: 'Node Unselected', detail: node.data.name, life: 3000});
        }

        return { selectedKey1, selectedKey2, selectedKeys1, selectedKeys2, selectedKeys3, nodes, onNodeSelect, onNodeUnselect}
    }
}
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
</script>