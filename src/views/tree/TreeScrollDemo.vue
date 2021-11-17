<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Tree <span>Scroll</span></h1>
                <p>Scrolling is used to preserve space in cases when rendering large data.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Regular Scroll</h5>
                <p>Scrollable viewport is fixed.</p>
                <Tree :value="nodes1" scrollHeight="200px"></Tree>

                <h5>Flex Scroll</h5>
                <p>Flex scroll feature makes the scrollable viewport section dynamic so that it can grow or shrink relative to the parent size of the tree. Click the button below
                to display maximizable Dialog where data viewport adjusts itself according to the size changes.</p>
                <Button type="button" icon="pi pi-external-link" label="View" @click="dialogVisible = true"></Button>

                <Dialog header="Flex Scroll" v-model:visible="dialogVisible" :style="{width: '50vw'}" maximizable
                    :contentStyle="{height: '300px'}" class="p-fluid">
                    <Tree :value="nodes2" scrollHeight="flex"></Tree>
                    <template #footer>
                        <Button type="button" icon="pi pi-check" @click="dialogVisible = false" class="p-button-text"></Button>
                    </template>
                </Dialog>
            </div>
        </div>

        <AppDoc name="TreeScrollDemo" :sources="sources" :service="['NodeService']" :data="['treenodes']" github="tree/TreeScrollDemo.vue" />
    </div>
</template>

<script>
import NodeService from '../../service/NodeService';

export default {
    data() {
        return {
            nodes1: null,
            nodes2: null,
            dialogVisible: false,
            sources: {
                'options-api': {
                    tabName: 'Options API Source',
                    content: `
<template>
    <div>
        <h5>Regular Scroll</h5>
        <p>Scrollable viewport is fixed.</p>
        <Tree :value="nodes1" scrollHeight="200px"></Tree>

        <h5>Flex Scroll</h5>
        <p>Flex scroll feature makes the scrollable viewport section dynamic so that it can grow or shrink relative to the parent size of the tree. Click the button below
        to display maximizable Dialog where data viewport adjusts itself according to the size changes.</p>
        <Button type="button" icon="pi pi-external-link" label="View" @click="dialogVisible = true"></Button>

        <Dialog header="Flex Scroll" v-model:visible="dialogVisible" :style="{width: '50vw'}" maximizable
            :contentStyle="{height: '300px'}" class="p-fluid">
            <Tree :value="nodes2" scrollHeight="flex"></Tree>
            <template #footer>
                <Button type="button" icon="pi pi-check" @click="dialogVisible = false" class="p-button-text"></Button>
            </template>
        </Dialog>
    </div>
</template>

<script>
import NodeService from './service/NodeService';

export default {
    data() {
        return {
            nodes1: null,
            nodes2: null,
            dialogVisible: false
        }
    },
    nodeService: null,
    created() {
        this.nodeService = new NodeService();
    },
    mounted() {
        this.nodeService.getTreeNodes().then(data => this.nodes1 = data);
        this.nodes2 = Array.from({length: 100}).map((_,i) => this.createNode(i, 2));
    },
    methods: {
        createNode(i, children) {
            let node = {
                key: 'node_' + i,
                label: 'Node ' + i,
                data: 'Node ' + i,
                expandedIcon: 'pi pi-folder-open',
                collapsedIcon: 'pi pi-folder',
                children: Array.from({length: children}).map((_,j) => {
                    return {
                        label: 'Node ' + i + '.' + j, 
                        data: 'Node ' + i + '.' + j, 
                        icon: 'pi pi-file'
                    }
                })
            };

            return node;
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
        <h5>Regular Scroll</h5>
        <p>Scrollable viewport is fixed.</p>
        <Tree :value="nodes1" scrollHeight="200px"></Tree>

        <h5>Flex Scroll</h5>
        <p>Flex scroll feature makes the scrollable viewport section dynamic so that it can grow or shrink relative to the parent size of the tree. Click the button below
        to display maximizable Dialog where data viewport adjusts itself according to the size changes.</p>
        <Button type="button" icon="pi pi-external-link" label="View" @click="dialogVisible = true"></Button>

        <Dialog header="Flex Scroll" v-model:visible="dialogVisible" :style="{width: '50vw'}" :maximizable="true"
            :contentStyle="{height: '300px'}" class="p-fluid">
            <Tree :value="nodes2" scrollHeight="flex"></Tree>
            <template #footer>
                <Button type="button" icon="pi pi-check" @click="dialogVisible = false" class="p-button-text"></Button>
            </template>
        </Dialog>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import NodeService from './service/NodeService';

export default {
    setup() {
        const createNode = (i, children) => {
            let node = {
                key: 'node_' + i,
                label: 'Node ' + i,
                data: 'Node ' + i,
                expandedIcon: 'pi pi-folder-open',
                collapsedIcon: 'pi pi-folder',
                children: Array.from({length: children}).map((_,j) => {
                    return {
                        label: 'Node ' + i + '.' + j, 
                        data: 'Node ' + i + '.' + j, 
                        icon: 'pi pi-file'
                    }
                })
            };

            return node;
        }

        onMounted(() => {
            nodeService.value.getTreeNodes().then(data => nodes1.value = data);
            nodes2.value = Array.from({length: 100}).map((_,i) => createNode(i, 2));
        })

        const nodes1 = ref(null);
        const nodes2 = ref(null);
        const dialogVisible = ref(false);
        const nodeService = ref(new NodeService());

        return { nodes1, nodes2, dialogVisible }
    }
}
<\\/script>`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/dialog/dialog.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/toast/toast.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/toastservice/toastservice.min.js"><\\/script>
        <script src="./NodeService.js"><\\/script>`,
                    content: `<div id="app">
            <h5>Regular Scroll</h5>
            <p>Scrollable viewport is fixed.</p>
            <p-tree :value="nodes1" scroll-height="200px"></p-tree>

            <h5>Flex Scroll</h5>
            <p>Flex scroll feature makes the scrollable viewport section dynamic so that it can grow or shrink relative to the parent size of the tree. Click the button below
            to display maximizable Dialog where data viewport adjusts itself according to the size changes.</p>
            <p-button type="button" icon="pi pi-external-link" label="View" @click="dialogVisible = true"></p-button>

            <p-dialog header="Flex Scroll" v-model:visible="dialogVisible" :style="{width: '50vw'}" :maximizable="true"
                :content-style="{height: '300px'}" class="p-fluid">
                <p-tree :value="nodes2" scrollHeight="flex"></p-tree>
                <template #footer>
                    <p-button type="button" icon="pi pi-check" @click="dialogVisible = false" class="p-button-text"></p-button>
                </template>
            </p-dialog>
        </div>

        <script type="module">
        const { createApp, ref, onMounted } = Vue;
        const { useToast } = primevue.usetoast;

        const App = {
            setup() {
                const createNode = (i, children) => {
                    let node = {
                        key: 'node_' + i,
                        label: 'Node ' + i,
                        data: 'Node ' + i,
                        expandedIcon: 'pi pi-folder-open',
                        collapsedIcon: 'pi pi-folder',
                        children: Array.from({length: children}).map((_,j) => {
                            return {
                                label: 'Node ' + i + '.' + j, 
                                data: 'Node ' + i + '.' + j, 
                                icon: 'pi pi-file'
                            }
                        })
                    };

                    return node;
                }

                onMounted(() => {
                    nodeService.value.getTreeNodes().then(data => nodes1.value = data);
                    nodes2.value = Array.from({length: 100}).map((_,i) => createNode(i, 2));
                })

                const nodes1 = ref(null);
                const nodes2 = ref(null);
                const dialogVisible = ref(false);
                const nodeService = ref(new NodeService());

                return { nodes1, nodes2, dialogVisible }
            },
            components: {
                "p-tree": primevue.tree,
                "p-toast": primevue.toast,
                "p-dialog": primevue.dialog,
                "p-button": primevue.button
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
        this.nodeService.getTreeNodes().then(data => this.nodes1 = data);
        this.nodes2 = Array.from({length: 100}).map((_,i) => this.createNode(i, 2));
    },
    methods: {
        createNode(i, children) {
            let node = {
                key: 'node_' + i,
                label: 'Node ' + i,
                data: 'Node ' + i,
                expandedIcon: 'pi pi-folder-open',
                collapsedIcon: 'pi pi-folder',
                children: Array.from({length: children}).map((_,j) => {
                    return {
                        label: 'Node ' + i + '.' + j, 
                        data: 'Node ' + i + '.' + j, 
                        icon: 'pi pi-file'
                    }
                })
            };

            return node;
        }
    }
}
</script>

<style scoped>
button {
    margin-right: .5rem;
}
</style>