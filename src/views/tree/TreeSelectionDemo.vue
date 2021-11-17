<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Tree <span>Selection</span></h1>
                <p>Tree supports <b>single</b>, <b>multiple</b> and <b>checkbox</b> as selection modes.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Single Selection</h5>
                <Tree :value="nodes" selectionMode="single" v-model:selectionKeys="selectedKey1"></Tree>

                <h5>Multiple Selection with MetaKey</h5>
                <Tree :value="nodes" selectionMode="multiple" v-model:selectionKeys="selectedKeys1"></Tree>

                <h5>Multiple Selection without MetaKey</h5>
                <Tree :value="nodes" selectionMode="multiple" v-model:selectionKeys="selectedKeys2" :metaKeySelection="false"></Tree>

                <h5>Checkbox Selection</h5>
                <Tree :value="nodes" selectionMode="checkbox" v-model:selectionKeys="selectedKeys3"></Tree>

                <h5>Events</h5>
                <Tree :value="nodes" selectionMode="single" v-model:selectionKeys="selectedKey2" :metaKeySelection="false"
                    @node-select="onNodeSelect" @node-unselect="onNodeUnselect"></Tree>
            </div>
        </div>

        <AppDoc name="TreeSelectionDemo" :sources="sources" :service="['NodeService']" :data="['treenodes']" github="tree/TreeSelectionDemo.vue" />
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
                    tabName: 'Options API Source',
                    content: `
<template>
    <div>
        <Toast />

        <h5>Single Selection</h5>
        <Tree :value="nodes" selectionMode="single" v-model:selectionKeys="selectedKey1"></Tree>

        <h5>Multiple Selection with MetaKey</h5>
        <Tree :value="nodes" selectionMode="multiple" v-model:selectionKeys="selectedKeys1"></Tree>

        <h5>Multiple Selection without MetaKey</h5>
        <Tree :value="nodes" selectionMode="multiple" v-model:selectionKeys="selectedKeys2" :metaKeySelection="false"></Tree>

        <h5>Checkbox Selection</h5>
        <Tree :value="nodes" selectionMode="checkbox" v-model:selectionKeys="selectedKeys3"></Tree>

        <h5>Events</h5>
        <Tree :value="nodes" selectionMode="single" v-model:selectionKeys="selectedKey2" :metaKeySelection="false"
            @nodeSelect="onNodeSelect" @nodeUnselect="onNodeUnselect"></Tree>
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
        this.nodeService.getTreeNodes().then(data => this.nodes = data);
    },
    methods: {
        onNodeSelect(node) {
            this.$toast.add({severity:'success', summary: 'Node Selected', detail: node.label, life: 3000});
        },
        onNodeUnselect(node) {
            this.$toast.add({severity:'success', summary: 'Node Unselected', detail: node.label, life: 3000});
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
        <Toast />

        <h5>Single Selection</h5>
        <Tree :value="nodes" selectionMode="single" v-model:selectionKeys="selectedKey1"></Tree>

        <h5>Multiple Selection with MetaKey</h5>
        <Tree :value="nodes" selectionMode="multiple" v-model:selectionKeys="selectedKeys1"></Tree>

        <h5>Multiple Selection without MetaKey</h5>
        <Tree :value="nodes" selectionMode="multiple" v-model:selectionKeys="selectedKeys2" :metaKeySelection="false"></Tree>

        <h5>Checkbox Selection</h5>
        <Tree :value="nodes" selectionMode="checkbox" v-model:selectionKeys="selectedKeys3"></Tree>

        <h5>Events</h5>
        <Tree :value="nodes" selectionMode="single" v-model:selectionKeys="selectedKey2" :metaKeySelection="false"
            @nodeSelect="onNodeSelect" @nodeUnselect="onNodeUnselect"></Tree>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import NodeService from './service/NodeService';

export default {
    setup() {
        onMounted(() => {
            nodeService.value.getTreeNodes().then(data => nodes.value = data);
        })

        const toast = useToast();
        const selectedKey1 = ref(null);
        const selectedKey2 = ref(null);
        const selectedKeys1 = ref(null);
        const selectedKeys2 = ref(null);
        const selectedKeys3 = ref(null);
        const nodes = ref(null);
        const nodeService = ref(new NodeService());
        const onNodeSelect = (node) => {
            toast.add({severity:'success', summary: 'Node Selected', detail: node.label, life: 3000});
        };
        const onNodeUnselect = (node) => {
            toast.add({severity:'success', summary: 'Node Unselected', detail: node.label, life: 3000});
        };

        return { selectedKey1, selectedKey2, selectedKeys1, selectedKeys2, selectedKeys3, nodes, nodeService, onNodeSelect, onNodeUnselect }
    }
}
<\\/script>`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/toast/toast.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/toastservice/toastservice.min.js"><\\/script>
        <script src="./NodeService.js"><\\/script>`,
                    content: `<div id="app">
            <p-toast></p-toast>

            <h5>Single Selection</h5>
            <p-tree :value="nodes" selection-mode="single" v-model:selection-keys="selectedKey1"></p-tree>

            <h5>Multiple Selection with MetaKey</h5>
            <p-tree :value="nodes" selection-mode="multiple" v-model:selection-keys="selectedKeys1"></p-tree>

            <h5>Multiple Selection without MetaKey</h5>
            <p-tree :value="nodes" selection-mode="multiple" v-model:selection-keys="selectedKeys2" :meta-key-selection="false"></p-tree>

            <h5>Checkbox Selection</h5>
            <p-tree :value="nodes" selection-mode="checkbox" v-model:selection-keys="selectedKeys3"></p-tree>

            <h5>Events</h5>
            <p-tree :value="nodes" selection-mode="single" v-model:selection-keys="selectedKey2" :meta-key-delection="false"
                @node-select="onNodeSelect" @node-unselect="onNodeUnselect"></p-tree>
        </div>

        <script type="module">
        const { createApp, ref, onMounted } = Vue;
        const { useToast } = primevue.usetoast;

        const App = {
            setup() {
                onMounted(() => {
                    nodeService.value.getTreeNodes().then(data => nodes.value = data);
                })

                const toast = useToast();
                const selectedKey1 = ref(null);
                const selectedKey2 = ref(null);
                const selectedKeys1 = ref(null);
                const selectedKeys2 = ref(null);
                const selectedKeys3 = ref(null);
                const nodes = ref(null);
                const nodeService = ref(new NodeService());
                const onNodeSelect = (node) => {
                    toast.add({severity:'success', summary: 'Node Selected', detail: node.label, life: 3000});
                };
                const onNodeUnselect = (node) => {
                    toast.add({severity:'success', summary: 'Node Unselected', detail: node.label, life: 3000});
                };

                return { selectedKey1, selectedKey2, selectedKeys1, selectedKeys2, selectedKeys3, nodes, nodeService, onNodeSelect, onNodeUnselect }
            },
            components: {
                "p-tree": primevue.tree,
                "p-toast": primevue.toast
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .use(primevue.toastservice)
            .mount("#app");
        <\\/script>`
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
        onNodeSelect(node) {
            this.$toast.add({severity:'success', summary: 'Node Selected', detail: node.label, life: 3000});
        },
        onNodeUnselect(node) {
            this.$toast.add({severity:'success', summary: 'Node Unselected', detail: node.label, life: 3000});
        }
    }
}
</script>

<style scoped>
button {
    margin-right: .5rem;
}
</style>