<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TreeTable <span>Templating</span></h1>
                <p>Custom content at header, body and footer sections are supported via templating.</p>
            </div>
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
                    <Column headerStyle="width: 8em" headerClass="p-text-center" bodyClass="p-text-center">
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

        <AppDoc name="TreeTableTemplatingDemo" :sources="sources" :service="['NodeService']" :data="['treetablenodes']" />
            
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
                    tabName: 'Source',
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
            <Column headerStyle="width: 8em" headerClass="p-text-center" bodyClass="p-text-center">
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
                    tabName: 'Composition API',
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
            <Column headerStyle="width: 8em" headerClass="p-text-center" bodyClass="p-text-center">
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