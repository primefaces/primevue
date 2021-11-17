<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TreeTable <span>Filter</span></h1>
                <p>Filtering is enabled by defining a filter template per column to populate the filters property of the TreTable.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Lenient Filter</h5>
                <TreeTable :value="nodes" :filters="filters1" filterMode="lenient">
                    <template #header>
                        <div class="p-text-right">
                            <div class="p-input-icon-left">
                                <i class="pi pi-search"></i>
                                <InputText v-model="filters1['global']" placeholder="Global Search" size="50" />
                            </div>
                        </div>
                    </template>
                    <Column field="name" header="Name" :expander="true">
                        <template #filter>
                            <InputText type="text" v-model="filters1['name']" class="p-column-filter" placeholder="Filter by name" />
                        </template>
                    </Column>
                    <Column field="size" header="Size">
                        <template #filter>
                            <InputText type="text" v-model="filters1['size']" class="p-column-filter" placeholder="Filter by size"/>
                        </template>
                    </Column>
                    <Column field="type" header="Type">
                        <template #filter>
                            <InputText type="text" v-model="filters1['type']" class="p-column-filter" placeholder="Filter by type"/>
                        </template>
                    </Column>
                </TreeTable>
            </div>

            <div class="card">
                <h5>Strict Filter</h5>
                <TreeTable :value="nodes" :filters="filters2" filterMode="strict">
                    <template #header>
                        <div class="p-text-right">
                            <div class="p-input-icon-left">
                                <i class="pi pi-search"></i>
                                <InputText v-model="filters2['global']" placeholder="Global Search" size="50" />
                            </div>
                        </div>
                    </template>
                    <Column field="name" header="Name" :expander="true">
                        <template #filter>
                            <InputText type="text" v-model="filters2['name']" class="p-column-filter" placeholder="Filter by name" />
                        </template>
                    </Column>
                    <Column field="size" header="Size">
                        <template #filter>
                            <InputText type="text" v-model="filters2['size']" class="p-column-filter" placeholder="Filter by size" />
                        </template>
                    </Column>
                    <Column field="type" header="Type">
                        <template #filter>
                            <InputText type="text" v-model="filters2['type']" class="p-column-filter" placeholder="Filter by type" />
                        </template>
                    </Column>
                </TreeTable>
            </div>
        </div>

        <AppDoc name="TreeTableFilterDemo" :sources="sources" :service="['NodeService']" :data="['treetablenodes']" github="treetable/TreeTableFilterDemo.vue" />
    </div>
</template>

<script>
import NodeService from '../../service/NodeService';

export default {
    data() {
        return {
            filters1: {},
            filters2: {},
            nodes: null,
            sources: {
                'options-api': {
                    tabName: 'Options API Source',
                    content: `
<template>
    <div>
        <div class="card">
            <h5>Lenient Filter</h5>
            <TreeTable :value="nodes" :filters="filters1" filterMode="lenient">
                <template #header>
                    <div class="p-text-right">
                        <div class="p-input-icon-left">
                            <i class="pi pi-search"></i>
                            <InputText v-model="filters1['global']" placeholder="Global Search" size="50" />
                        </div>
                    </div>
                </template>
                <Column field="name" header="Name" :expander="true">
                    <template #filter>
                        <InputText type="text" v-model="filters1['name']" class="p-column-filter" placeholder="Filter by name" />
                    </template>
                </Column>
                <Column field="size" header="Size">
                    <template #filter>
                        <InputText type="text" v-model="filters1['size']" class="p-column-filter" placeholder="Filter by size"/>
                    </template>
                </Column>
                <Column field="type" header="Type">
                    <template #filter>
                        <InputText type="text" v-model="filters1['type']" class="p-column-filter" placeholder="Filter by type"/>
                    </template>
                </Column>
            </TreeTable>
        </div>

        <div class="card">
            <h5>Strict Filter</h5>
            <TreeTable :value="nodes" :filters="filters2" filterMode="strict">
                <template #header>
                    <div class="p-text-right">
                        <div class="p-input-icon-left">
                            <i class="pi pi-search"></i>
                            <InputText v-model="filters2['global']" placeholder="Global Search" size="50" />
                        </div>
                    </div>
                </template>
                <Column field="name" header="Name" :expander="true">
                    <template #filter>
                        <InputText type="text" v-model="filters2['name']" class="p-column-filter" placeholder="Filter by name" />
                    </template>
                </Column>
                <Column field="size" header="Size">
                    <template #filter>
                        <InputText type="text" v-model="filters2['size']" class="p-column-filter" placeholder="Filter by size" />
                    </template>
                </Column>
                <Column field="type" header="Type">
                    <template #filter>
                        <InputText type="text" v-model="filters2['type']" class="p-column-filter" placeholder="Filter by type" />
                    </template>
                </Column>
            </TreeTable>
        </div>
    </div>                    
</template>

<script>
import NodeService from './service/NodeService';

export default {
    data() {
        return {
            filters1: {},
            filters2: {},
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

<style scoped lang="scss">
.p-filter-column {
    .p-multiselect, .p-dropdown, .p-inputtext {
        width: 100%;
    }
}
</style>`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <div class="card">
            <h5>Lenient Filter</h5>
            <TreeTable :value="nodes" :filters="filters1" filterMode="lenient">
                <template #header>
                    <div class="p-text-right">
                        <div class="p-input-icon-left">
                            <i class="pi pi-search"></i>
                            <InputText v-model="filters1['global']" placeholder="Global Search" size="50" />
                        </div>
                    </div>
                </template>
                <Column field="name" header="Name" :expander="true">
                    <template #filter>
                        <InputText type="text" v-model="filters1['name']" class="p-column-filter" placeholder="Filter by name" />
                    </template>
                </Column>
                <Column field="size" header="Size">
                    <template #filter>
                        <InputText type="text" v-model="filters1['size']" class="p-column-filter" placeholder="Filter by size"/>
                    </template>
                </Column>
                <Column field="type" header="Type">
                    <template #filter>
                        <InputText type="text" v-model="filters1['type']" class="p-column-filter" placeholder="Filter by type"/>
                    </template>
                </Column>
            </TreeTable>
        </div>

        <div class="card">
            <h5>Strict Filter</h5>
            <TreeTable :value="nodes" :filters="filters2" filterMode="strict">
                <template #header>
                    <div class="p-text-right">
                        <div class="p-input-icon-left">
                            <i class="pi pi-search"></i>
                            <InputText v-model="filters2['global']" placeholder="Global Search" size="50" />
                        </div>
                    </div>
                </template>
                <Column field="name" header="Name" :expander="true">
                    <template #filter>
                        <InputText type="text" v-model="filters2['name']" class="p-column-filter" placeholder="Filter by name" />
                    </template>
                </Column>
                <Column field="size" header="Size">
                    <template #filter>
                        <InputText type="text" v-model="filters2['size']" class="p-column-filter" placeholder="Filter by size" />
                    </template>
                </Column>
                <Column field="type" header="Type">
                    <template #filter>
                        <InputText type="text" v-model="filters2['type']" class="p-column-filter" placeholder="Filter by type" />
                    </template>
                </Column>
            </TreeTable>
        </div>
    </div>                    
</template>

<script>
import { ref, onMounted } from 'vue';
import NodeService from './service/NodeService';

export default {
    setup() {
        onMounted(() => {
            nodeService.value.getTreeTableNodes().then(data => nodes.value = data)
        })

        const filters1 = ref({});
        const filters2 = ref({});
        const nodes = ref();
        const nodeService = ref(new NodeService());

        return { filters1, filters2, nodes, nodeService }
    }
}
<\\/script>

<style scoped lang="scss">
.p-filter-column {
    .p-multiselect, .p-dropdown, .p-inputtext {
        width: 100%;
    }
}
</style>`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/treetable/treetable.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>
        <script src="./NodeService.js"><\\/script>`,
                    content: `<div id="app">
            <div class="card">
                <h5>Lenient Filter</h5>
                <p-treetable :value="nodes" :filters="filters1" filter-mode="lenient">
                    <template #header>
                        <div class="p-text-right">
                            <div class="p-input-icon-left">
                                <i class="pi pi-search"></i>
                                <p-inputtext v-model="filters1['global']" placeholder="Global Search" size="50"></p-inputtext>
                            </div>
                        </div>
                    </template>
                    <p-column field="name" header="Name" :expander="true">
                        <template #filter>
                            <p-inputtext type="text" v-model="filters1['name']" class="p-column-filter" placeholder="Filter by name"></p-inputtext>
                        </template>
                    </p-column>
                    <p-column field="size" header="Size">
                        <template #filter>
                            <p-inputtext type="text" v-model="filters1['size']" class="p-column-filter" placeholder="Filter by size"></p-inputtext>
                        </template>
                    </p-column>
                    <p-column field="type" header="Type">
                        <template #filter>
                            <p-inputtext type="text" v-model="filters1['type']" class="p-column-filter" placeholder="Filter by type"></p-inputtext>
                        </template>
                    </p-column>
                </p-treetable>
            </div>

            <div class="card">
                <h5>Strict Filter</h5>
                <p-treetable :value="nodes" :filters="filters2" filter-mode="strict">
                    <template #header>
                        <div class="p-text-right">
                            <div class="p-input-icon-left">
                                <i class="pi pi-search"></i>
                                <p-inputtext v-model="filters2['global']" placeholder="Global Search" size="50"></p-inputtext>
                            </div>
                        </div>
                    </template>
                    <p-column field="name" header="Name" :expander="true">
                        <template #filter>
                            <p-inputtext type="text" v-model="filters2['name']" class="p-column-filter" placeholder="Filter by name"></p-inputtext>
                        </template>
                    </p-column>
                    <p-column field="size" header="Size">
                        <template #filter>
                            <p-inputtext type="text" v-model="filters2['size']" class="p-column-filter" placeholder="Filter by size"></p-inputtext>
                        </template>
                    </p-column>
                    <p-column field="type" header="Type">
                        <template #filter>
                            <p-inputtext type="text" v-model="filters2['type']" class="p-column-filter" placeholder="Filter by type"></p-inputtext>
                        </template>
                    </p-column>
                </p-treetable>
            </div>
        </div>                    

        <script type="module">
        const { createApp, ref, onMounted } = Vue;

        const App = {
            setup() {
                onMounted(() => {
                    nodeService.value.getTreeTableNodes().then(data => nodes.value = data)
                })

                const filters1 = ref({});
                const filters2 = ref({});
                const nodes = ref();
                const nodeService = ref(new NodeService());

                return { filters1, filters2, nodes, nodeService }
            },
            components: {
                "p-treetable": primevue.treetable,
                "p-column": primevue.column,
                "p-inputtext": primevue.inputtext
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>

        <style>
            .p-filter-column .p-multiselect, 
            .p-filter-column .p-dropdown, 
            .p-filter-column .p-inputtext {
                width: 100%;
            }
        </style>`
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

<style scoped lang="scss">
.p-filter-column {
    .p-multiselect, .p-dropdown, .p-inputtext {
        width: 100%;
    }
}
</style>