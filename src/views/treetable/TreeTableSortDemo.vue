<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TreeTable <span>Sort</span></h1>
               <p>TreeTable supports both single column and multiple column sorting..</p>
            </div>
            <AppDemoActions />
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
        
        <AppDoc name="TreeTableSortDemo" :sources="sources" :service="['NodeService']" :data="['treetablenodes']" github="treetable/TreeTableSortDemo.vue" />
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
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/treetable/treetable.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>
        <script src="./NodeService.js"><\\/script>`,
                    content: `<div id="app">
            <div class="card">
                <h5>Single Column Sorting</h5>
                <p-treetable :value="nodes" sort-mode="single">
                    <p-column field="name" header="Name" :expander="true" :sortable="true"></p-column>
                    <p-column field="size" header="Size" :sortable="true"></p-column>
                    <p-column field="type" header="Type" :sortable="true"></p-column>
                </p-treetable>
            </div>

            <div class="card">
                <h5>Multiple Column Sorting</h5>
                <p-treetable :value="nodes" sort-mode="multiple">
                    <p-column field="name" header="Name" :expander="true" :sortable="true"></p-column>
                    <p-column field="size" header="Size" :sortable="true"></p-column>
                    <p-column field="type" header="Type" :sortable="true"></p-column>
                </p-treetable>
            </div>

            <div class="card">
                <h5>Removable Sort</h5>
                <p-treetable :value="nodes" sort-mode="single" removable-sort>
                    <p-column field="name" header="Name" :expander="true" :sortable="true"></p-column>
                    <p-column field="size" header="Size" :sortable="true"></p-column>
                    <p-column field="type" header="Type" :sortable="true"></p-column>
                </p-treetable>
            </div>
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
                "p-column": primevue.column
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