<template>
    <div>
        <TreeTableSubMenu />

        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TreeTable - Filter</h1>
                <p>Filtering is enabled by defining a filter template per column to populate the filters property of the TreTable.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3>Lenient Filter</h3>
            <TreeTable :value="nodes" :filters="filters" filterMode="lenient">
                <template #header>
                    <div style="text-align: right">
                        <i class="pi pi-search" style="margin: 4px 4px 0px 0px;"></i>
                        <InputText v-model="filters['global']" placeholder="Global Search" size="50" />
                    </div>
                </template>
                <Column field="name" header="Name" :expander="true">
                    <template #filter>
                        <InputText type="text" v-model="filters['name']" class="p-column-filter" placeholder="Filter by name" />
                    </template>
                </Column>
                <Column field="size" header="Size">
                    <template #filter>
                        <InputText type="text" v-model="filters['size']" class="p-column-filter" placeholder="Filter by size"/>
                    </template>
                </Column>
                <Column field="type" header="Type">
                    <template #filter>
                        <InputText type="text" v-model="filters['type']" class="p-column-filter" placeholder="Filter by type"/>
                    </template>
                </Column>
            </TreeTable>

            <h3>Strict Filter</h3>
            <TreeTable :value="nodes" :filters="filters" filterMode="strict">
                <template #header>
                    <div style="text-align: right">
                        <i class="pi pi-search" style="margin: 4px 4px 0px 0px;"></i>
                        <InputText v-model="filters['global']" placeholder="Global Search" size="50" />
                    </div>
                </template>
                <Column field="name" header="Name" :expander="true">
                    <template #filter>
                        <InputText type="text" v-model="filters['name']" class="p-column-filter" placeholder="Filter by name" />
                    </template>
                </Column>
                <Column field="size" header="Size">
                    <template #filter>
                        <InputText type="text" v-model="filters['size']" class="p-column-filter" placeholder="Filter by size" />
                    </template>
                </Column>
                <Column field="type" header="Type">
                    <template #filter>
                        <InputText type="text" v-model="filters['type']" class="p-column-filter" placeholder="Filter by type" />
                    </template>
                </Column>
            </TreeTable>
        </div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;h3&gt;Lenient Filter&lt;/h3&gt;
&lt;TreeTable :value="nodes" :filters="filters" filterMode="lenient"&gt;
    &lt;template #header&gt;
        &lt;div style="text-align: right"&gt;
            &lt;i class="pi pi-search" style="margin: 4px 4px 0px 0px;"&gt;&lt;/i&gt;
            &lt;InputText v-model="filters['global']" placeholder="Global Search" size="50" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
    &lt;Column field="name" header="Name" :expander="true"&gt;
        &lt;template #filter&gt;
            &lt;InputText type="text" v-model="filters['name']" class="p-column-filter" placeholder="Filter by name" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="size" header="Size"&gt;
        &lt;template #filter&gt;
            &lt;InputText type="text" v-model="filters['size']" class="p-column-filter" placeholder="Filter by size" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="type" header="Type"&gt;
        &lt;template #filter&gt;
            &lt;InputText type="text" v-model="filters['type']" class="p-column-filter" placeholder="Filter by type" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
&lt;/TreeTable&gt;

&lt;h3&gt;Strict Filter&lt;/h3&gt;
&lt;TreeTable :value="nodes" :filters="filters" filterMode="strict"&gt;
    &lt;template #header&gt;
        &lt;div style="text-align: right"&gt;
            &lt;i class="pi pi-search" style="margin: 4px 4px 0px 0px;"&gt;&lt;/i&gt;
            &lt;InputText v-model="filters['global']" placeholder="Global Search" size="50" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
    &lt;Column field="name" header="Name" :expander="true"&gt;
        &lt;template #filter&gt;
            &lt;InputText type="text" v-model="filters['name']" class="p-column-filter" placeholder="Filter by name" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="size" header="Size"&gt;
        &lt;template #filter&gt;
            &lt;InputText type="text" v-model="filters['size']" class="p-column-filter" placeholder="Filter by size" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="type" header="Type"&gt;
        &lt;template #filter&gt;
            &lt;InputText type="text" v-model="filters['type']" class="p-column-filter" placeholder="Filter by type" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
&lt;/TreeTable&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import NodeService from '../../service/NodeService';

export default {
    data() {
        return {
            filters: {},
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
</CodeHighlight>

                </TabPanel>
            </TabView>
        </div>
    </div>
</template>

<script>
import NodeService from '../../service/NodeService';
import TreeTableSubMenu from './TreeTableSubMenu';

export default {
    data() {
        return {
            filters: {},
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
    components: {
        'TreeTableSubMenu': TreeTableSubMenu
    }
}
</script>

<style scoped>

</style>