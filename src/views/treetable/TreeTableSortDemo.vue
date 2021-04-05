<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TreeTable <span>Sort</span></h1>
               <p>TreeTable supports both single column and multiple column sorting..</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Single Column Sorting</h5>
                <TreeTable :value="nodes" sortMode="single">
                    <Column field="name" header="Name" :expander="true" :sortable="true"></Column>
                    <Column field="size" header="Size" :sortable="true"></Column>
                    <Column field="type" header="Type" :sortable="true"></Column>
                </TreeTable>
            </div>

            <div class="card">
                <h5>Multiple Column Sorting</h5>
                <TreeTable :value="nodes" sortMode="multiple">
                    <Column field="name" header="Name" :expander="true" :sortable="true"></Column>
                    <Column field="size" header="Size" :sortable="true"></Column>
                    <Column field="type" header="Type" :sortable="true"></Column>
                </TreeTable>
            </div>

            <div class="card">
                <h5>Removable Sort</h5>
                <TreeTable :value="nodes" sortMode="single" removableSort>
                    <Column field="name" header="Name" :expander="true" :sortable="true"></Column>
                    <Column field="size" header="Size" :sortable="true"></Column>
                    <Column field="type" header="Type" :sortable="true"></Column>
                </TreeTable>
            </div>
        </div>
        
        <AppDoc name="TreeTableSortDemo" :sources="sources" :service="['NodeService']" :data="['treetablenodes']" />
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
        <div class="card">
            <h5>Single Column Sorting</h5>
            <TreeTable :value="nodes" sortMode="single">
                <Column field="name" header="Name" :expander="true" :sortable="true"></Column>
                <Column field="size" header="Size" :sortable="true"></Column>
                <Column field="type" header="Type" :sortable="true"></Column>
            </TreeTable>
        </div>

        <div class="card">
            <h5>Multiple Column Sorting</h5>
            <TreeTable :value="nodes" sortMode="multiple">
                <Column field="name" header="Name" :expander="true" :sortable="true"></Column>
                <Column field="size" header="Size" :sortable="true"></Column>
                <Column field="type" header="Type" :sortable="true"></Column>
            </TreeTable>
        </div>

        <div class="card">
            <h5>Removable Sort</h5>
            <TreeTable :value="nodes" sortMode="single" removableSort>
                <Column field="name" header="Name" :expander="true" :sortable="true"></Column>
                <Column field="size" header="Size" :sortable="true"></Column>
                <Column field="type" header="Type" :sortable="true"></Column>
            </TreeTable>
        </div>
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
        <div class="card">
            <h5>Single Column Sorting</h5>
            <TreeTable :value="nodes" sortMode="single">
                <Column field="name" header="Name" :expander="true" :sortable="true"></Column>
                <Column field="size" header="Size" :sortable="true"></Column>
                <Column field="type" header="Type" :sortable="true"></Column>
            </TreeTable>
        </div>

        <div class="card">
            <h5>Multiple Column Sorting</h5>
            <TreeTable :value="nodes" sortMode="multiple">
                <Column field="name" header="Name" :expander="true" :sortable="true"></Column>
                <Column field="size" header="Size" :sortable="true"></Column>
                <Column field="type" header="Type" :sortable="true"></Column>
            </TreeTable>
        </div>

        <div class="card">
            <h5>Removable Sort</h5>
            <TreeTable :value="nodes" sortMode="single" removableSort>
                <Column field="name" header="Name" :expander="true" :sortable="true"></Column>
                <Column field="size" header="Size" :sortable="true"></Column>
                <Column field="type" header="Type" :sortable="true"></Column>
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
            nodeService.value.getTreeTableNodes().then(data => nodes.value = data);
        })

        const nodes = ref();
        const nodeService = ref(new NodeService());

        return { nodes, nodeService }
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
    }
}
</script>