<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TreeTable <span>Filter</span></h1>
                <p>Filtering is enabled by defining a filter template per column to populate the filters property of the TreTable.</p>
            </div>
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

        <AppDoc name="TreeTableFilterDemo" :sources="sources" service="NodeService" :data="['treetablenodes']" />
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
                    tabName: 'Source',
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
                    tabName: 'Composition API',
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