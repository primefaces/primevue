<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TreeTable <span>Templating</span></h1>
                <p>Custom content at header, body and footer sections are supported via templating.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <TreeTable :value="nodes">
                    <template #header>
                        FileSystem
                    </template>
                    <Column field="name" header="Name" :expander="true"></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                    <Column headerStyle="width: 10rem" headerClass="text-center" bodyClass="text-center">
                        <template #header>
                            <Button type="button" icon="pi pi-cog"></Button>
                        </template>
                        <template #body>
                            <Button type="button" icon="pi pi-search" class="p-button-success" style="margin-right: .5em"></Button>
                            <Button type="button" icon="pi pi-pencil" class="p-button-warning"></Button>
                        </template>
                    </Column>
                    <template #footer>
                        <div style="text-align:left">
                            <Button icon="pi pi-refresh" />
                        </div>
                    </template>
                </TreeTable>
            </div>
        </div>

        <AppDoc name="TreeTableTemplatingDemo" :sources="sources" :service="['NodeService']" :data="['treetablenodes']" github="treetable/TreeTableTemplatingDemo.vue" />
            
    </div>
</template>

<script>
import NodeService from '../../service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            sources: {
                'options-api': {
                    tabName: 'Options API Source',
                    content: `
<template>
    <div>
        <TreeTable :value="nodes">
            <template #header>
                FileSystem
            </template>
            <Column field="name" header="Name" :expander="true"></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
            <Column headerStyle="width: 10rem" headerClass="text-center" bodyClass="text-center">
                <template #header>
                    <Button type="button" icon="pi pi-cog"></Button>
                </template>
                <template #body>
                    <Button type="button" icon="pi pi-search" class="p-button-success" style="margin-right: .5em"></Button>
                    <Button type="button" icon="pi pi-pencil" class="p-button-warning"></Button>
                </template>
            </Column>
            <template #footer>
                <div style="text-align:left">
                    <Button icon="pi pi-refresh" />
                </div>
            </template>
        </TreeTable>
    </div>                  
</template>

<script>
import NodeService from './service/NodeService';

export default {
    data() {
        return {
            nodes: null
        }
    },
    nodeService: null,
    created() {
        this.nodeService = new NodeService();
    },
    mounted() {
        this.nodeService.getTreeTableNodes().then(data => this.nodes = data);
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
        <TreeTable :value="nodes">
            <template #header>
                FileSystem
            </template>
            <Column field="name" header="Name" :expander="true"></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
            <Column headerStyle="width: 10rem" headerClass="text-center" bodyClass="text-center">
                <template #header>
                    <Button type="button" icon="pi pi-cog"></Button>
                </template>
                <template #body>
                    <Button type="button" icon="pi pi-search" class="p-button-success" style="margin-right: .5em"></Button>
                    <Button type="button" icon="pi pi-pencil" class="p-button-warning"></Button>
                </template>
            </Column>
            <template #footer>
                <div style="text-align:left">
                    <Button icon="pi pi-refresh" />
                </div>
            </template>
        </TreeTable>
    </div>                  
</template>

<script>
import { ref, onMounted } from 'vue';
import NodeService from './service/NodeService';

export default {
    setup() {
        onMounted(() => {
            nodeService.value.getTreeTableNodes().then(data => nodes.value = data);
        })

        const nodes = ref();
        const nodeService = ref(new NodeService());

        return { nodes, nodeService }
    }
}
<\\/script>
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/treetable/treetable.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>
        <script src="./NodeService.js"><\\/script>`,
                    content: `<div id="app">
            <p-treetable :value="nodes">
                <template #header>
                    FileSystem
                </template>
                <p-column field="name" header="Name" :expander="true"></p-column>
                <p-column field="size" header="Size"></p-column>
                <p-column field="type" header="Type"></p-column>
                <p-column header-style="width: 10rem" header-class="text-center" body-class="text-center">
                    <template #header>
                        <p-button type="button" icon="pi pi-cog"></p-button>
                    </template>
                    <template #body>
                        <p-button type="button" icon="pi pi-search" class="p-button-success" style="margin-right: .5em"></p-button>
                        <p-button type="button" icon="pi pi-pencil" class="p-button-warning"></p-button>
                    </template>
                </p-column>
                <template #footer>
                    <div style="text-align:left">
                        <p-button icon="pi pi-refresh"></p-button>
                    </div>
                </template>
            </p-treetable>
        </div>                  

        <script type="module">
        const { createApp, ref, onMounted } = Vue;

        const App = {
            setup() {
                onMounted(() => {
                    nodeService.value.getTreeTableNodes().then(data => nodes.value = data);
                })

                const nodes = ref();
                const nodeService = ref(new NodeService());

                return { nodes, nodeService }
            },
            components: {
                "p-treetable": primevue.treetable,
                "p-column": primevue.column,
                "p-button": primevue.button
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
        this.nodeService.getTreeTableNodes().then(data => this.nodes = data);
    }
}
</script>