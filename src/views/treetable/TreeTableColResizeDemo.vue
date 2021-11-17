<template>
    <div>
        <div class="content-section introduction">
			<div class="feature-intro">
				<h1>TreeTable <span>Column Resize</span></h1>
				<p>Columns can be resized using drag drop by setting the resizableColumns to true. There are two resize modes; "fit" and "expand". Fit is the default one and the overall table width does not change when a column is resized.
                    In "expand" mode, table width also changes along with the column width.</p>
			</div>
            <AppDemoActions />
		</div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Fit Mode</h5>
                <TreeTable :value="nodes" :resizableColumns="true" columnResizeMode="fit" showGridlines>
                    <Column field="name" header="Name" :expander="true"></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>

            <div class="card">
                <h5>Expand Mode</h5>
                <TreeTable :value="nodes" :resizableColumns="true" columnResizeMode="expand" showGridlines>
                    <Column field="name" header="Name" :expander="true"></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>
        </div>

        <AppDoc name="TreeTableColResizeDemo" :sources="sources" :service="['NodeService']" :data="['treetablenodes']" github="treetable/TreeTableColResizeDemo.vue" />
                
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
            <h5>Fit Mode</h5>
            <TreeTable :value="nodes" :resizableColumns="true" columnResizeMode="fit" showGridlines>
                <Column field="name" header="Name" :expander="true"></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>

        <div class="card">
            <h5>Expand Mode</h5>
            <TreeTable :value="nodes" :resizableColumns="true" columnResizeMode="expand" showGridlines>
                <Column field="name" header="Name" :expander="true"></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
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
            <h5>Fit Mode</h5>
            <TreeTable :value="nodes" :resizableColumns="true" columnResizeMode="fit" showGridlines>
                <Column field="name" header="Name" :expander="true"></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>

        <div class="card">
            <h5>Expand Mode</h5>
            <TreeTable :value="nodes" :resizableColumns="true" columnResizeMode="expand" showGridlines>
                <Column field="name" header="Name" :expander="true"></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
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

        const nodes = ref(null);
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
                <h5>Fit Mode</h5>
                <p-treetable :value="nodes" :resizable-columns="true" column-resize-mode="fit" show-gridlines>
                    <p-column field="name" header="Name" :expander="true"></p-column>
                    <p-column field="size" header="Size"></p-column>
                    <p-column field="type" header="Type"></p-column>
                </p-treetable>
            </div>

            <div class="card">
                <h5>Expand Mode</h5>
                <p-treetable :value="nodes" :resizable-columns="true" column-resize-mode="expand" show-gridlines>
                    <p-column field="name" header="Name" :expander="true"></p-column>
                    <p-column field="size" header="Size"></p-column>
                    <p-column field="type" header="Type"></p-column>
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

                const nodes = ref(null);
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