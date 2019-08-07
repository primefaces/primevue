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
                        <InputText type="text" v-model="filters['name']" class="p-column-filter" />
                    </template>
                </Column>
                <Column field="size" header="Size">
                    <template #filter>
                        <InputText type="text" v-model="filters['size']" class="p-column-filter" />
                    </template>
                </Column>
                <Column field="type" header="Type">
                    <template #filter>
                        <InputText type="text" v-model="filters['type']" class="p-column-filter" />
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
                        <InputText type="text" v-model="filters['name']" class="p-column-filter" />
                    </template>
                </Column>
                <Column field="size" header="Size">
                    <template #filter>
                        <InputText type="text" v-model="filters['size']" class="p-column-filter" />
                    </template>
                </Column>
                <Column field="type" header="Type">
                    <template #filter>
                        <InputText type="text" v-model="filters['type']" class="p-column-filter" />
                    </template>
                </Column>
            </TreeTable>
        </div>

        <TreeTableDoc />
    </div>
</template>

<script>
import NodeService from '../../service/NodeService';
import TreeTableDoc from './TreeTableDoc';
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
        'TreeTableDoc': TreeTableDoc,
        'TreeTableSubMenu': TreeTableSubMenu
    }
}
</script>

<style scoped>

</style>