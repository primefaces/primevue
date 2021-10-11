<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TreeTable <span>Column Toggle</span></h1>
                <p>MultiSelect component can be used to implement column toggle functionality.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <TreeTable :value="nodes">
                    <template #header>
                        <div style="text-align:left">
                            <MultiSelect :modelValue="selectedColumns" @update:modelValue="onToggle" :options="columns" optionLabel="header" placeholder="Select Columns" style="width: 20em"/>
                        </div>
                    </template>
                    <Column field="name" header="Name" :expander="true"></Column>
                    <Column v-for="col of selectedColumns" :field="col.field" :header="col.header" :key="col.field"></Column>
                </TreeTable>
            </div>
        </div>

        <AppDoc name="TreeTableColToggleDemo" :sources="sources" :service="['NodeService']" :data="['treetablenodes']" github="treetable/TreeTableColToggleDemo.vue" />
    </div>
</template>

<script>
import NodeService from '../../service/NodeService';

export default {
    data() {
        return {
            selectedColumns: null,
            columns: null,
            nodes: null,
            sources: {
                'options-api': {
                    tabName: 'Options API Source',
                    content: `
<template>
    <div>
        <TreeTable :value="nodes">
            <template #header>
                <div style="text-align:left">
                    <MultiSelect :modelValue="selectedColumns" @update:modelValue="onToggle" :options="columns" optionLabel="header" placeholder="Select Columns" style="width: 20em"/>
                </div>
            </template>
            <Column field="name" header="Name" :expander="true"></Column>
            <Column v-for="col of selectedColumns" :field="col.field" :header="col.header" :key="col.field"></Column>
        </TreeTable>
    </div>                    
</template>

<script>
import NodeService from './service/NodeService';

export default {
    data() {
        return {
            selectedColumns: null,
            columns: null,
            nodes: null,
        }
    },
    nodeService: null,
    created() {
        this.nodeService = new NodeService();

        this.columns = [
            {field: 'size', header: 'Size'},
            {field: 'type', header: 'Type'}
        ];

        this.selectedColumns = this.columns;
    },
    mounted() {
        this.nodeService.getTreeTableNodes().then(data => this.nodes = data);
    },
    methods: {
        onToggle(value) {
            this.selectedColumns = this.columns.filter(col => value.includes(col));
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
        <TreeTable :value="nodes">
            <template #header>
                <div style="text-align:left">
                    <MultiSelect :modelValue="selectedColumns" @update:modelValue="onToggle" :options="columns" optionLabel="header" placeholder="Select Columns" style="width: 20em"/>
                </div>
            </template>
            <Column field="name" header="Name" :expander="true"></Column>
            <Column v-for="col of selectedColumns" :field="col.field" :header="col.header" :key="col.field"></Column>
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
        const columns = ref([
            {field: 'size', header: 'Size'},
            {field: 'type', header: 'Type'}
        ]);
        const nodes = ref();
        const nodeService = ref(new NodeService());
        const selectedColumns = ref(columns.value);
        const onToggle = (val) => {
            selectedColumns.value = columns.value.filter(col => val.includes(col));
        }

        return { columns, nodes, nodeService, selectedColumns, onToggle }
    }
}
<\\/script>
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/treetable/treetable.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/multiselect/multiselect.min.js"><\\/script>
        <script src="./NodeService.js"><\\/script>`,
                    content: `<div id="app">
            <p-treetable :value="nodes">
                <template #header>
                    <div style="text-align:left">
                        <p-multiselect :model-value="selectedColumns" @update:model-value="onToggle" :options="columns" option-label="header" placeholder="Select Columns" style="width: 20em"></p-multiselect>
                    </div>
                </template>
                <p-column field="name" header="Name" :expander="true"></p-column>
                <p-column v-for="col of selectedColumns" :field="col.field" :header="col.header" :key="col.field"></p-olumn>
            </p-treetable>
        </div>                    

        <script type="module">
        const { createApp, ref, onMounted } = Vue;

        const App = {
            setup() {
                onMounted(() => {
                    nodeService.value.getTreeTableNodes().then(data => nodes.value = data);
                })
                const columns = ref([
                    {field: 'size', header: 'Size'},
                    {field: 'type', header: 'Type'}
                ]);
                const nodes = ref();
                const nodeService = ref(new NodeService());
                const selectedColumns = ref(columns.value);
                const onToggle = (val) => {
                    selectedColumns.value = columns.value.filter(col => val.includes(col));
                }

                return { columns, nodes, nodeService, selectedColumns, onToggle }
            },
            components: {
                "p-treetable": primevue.treetable,
                "p-column": primevue.column,
                "p-multiselect": primevue.multiselect
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

        this.columns = [
            {field: 'size', header: 'Size'},
            {field: 'type', header: 'Type'}
        ];

        this.selectedColumns = this.columns;
    },
    mounted() {
        this.nodeService.getTreeTableNodes().then(data => this.nodes = data);
    },
    methods: {
        onToggle(value) {
            this.selectedColumns = this.columns.filter(col => value.includes(col));
        }
    }
}
</script>