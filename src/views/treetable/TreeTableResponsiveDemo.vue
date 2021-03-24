<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TreeTable - Responsive</h1>
                <p>TreeTable display can be optimized according for different screen sizes, this example demonstrates a demo where columns are stacked on small screens.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <TreeTable :value="nodes" class="p-treetable-responsive">
                    <template #header>
                        Responsive
                    </template>
                    <Column field="name" header="Name" :expander="true">
                        <template #body="slotProps">
                            {{slotProps.node.data.name}}
                            <span class="sm-visible">{{slotProps.node.data.size}}</span>
                            <span class="sm-visible">{{slotProps.node.data.type}}</span>
                        </template>
                    </Column>
                    <Column field="size" header="Size" headerClass="sm-invisible" bodyClass="sm-invisible"></Column>
                    <Column field="type" header="Type" headerClass="sm-invisible" bodyClass="sm-invisible"></Column>
                </TreeTable>
            </div>
        </div>

        <AppDoc name="TreeTableResponsiveDemo" :sources="sources" :service="['NodeService']" :data="['treetablenodes']" />
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
        <TreeTable :value="nodes" class="p-treetable-responsive">
            <template #header>
                Responsive
            </template>
            <Column field="name" header="Name" :expander="true">
                <template #body="slotProps">
                    {{slotProps.node.data.name}}
                    <span class="sm-visible">{{slotProps.node.data.size}}</span>
                    <span class="sm-visible">{{slotProps.node.data.type}}</span>
                </template>
            </Column>
            <Column field="size" header="Size" headerClass="sm-invisible" bodyClass="sm-invisible"></Column>
            <Column field="type" header="Type" headerClass="sm-invisible" bodyClass="sm-invisible"></Column>
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

<style scoped lang="scss">
.sm-visible {
    display: none;
}

@media screen and (max-width: 40em) {
    ::v-deep(.sm-invisible) {
        display: none;
    }

    ::v-deep(.sm-visible) {
        display: inline;
        margin-right: .5rem;
    }
}
</style>`
                },
                'composition-api': {
                    tabName: 'Composition API',
                    content: `
<template>
    <div>
        <TreeTable :value="nodes" class="p-treetable-responsive">
            <template #header>
                Responsive
            </template>
            <Column field="name" header="Name" :expander="true">
                <template #body="slotProps">
                    {{slotProps.node.data.name}}
                    <span class="sm-visible">{{slotProps.node.data.size}}</span>
                    <span class="sm-visible">{{slotProps.node.data.type}}</span>
                </template>
            </Column>
            <Column field="size" header="Size" headerClass="sm-invisible" bodyClass="sm-invisible"></Column>
            <Column field="type" header="Type" headerClass="sm-invisible" bodyClass="sm-invisible"></Column>
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

<style scoped lang="scss">
.sm-visible {
    display: none;
}

@media screen and (max-width: 40em) {
    ::v-deep(.sm-invisible) {
        display: none;
    }

    ::v-deep(.sm-visible) {
        display: inline;
        margin-right: .5rem;
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
.sm-visible {
    display: none;
}

@media screen and (max-width: 40em) {
    ::v-deep(.sm-invisible) {
        display: none;
    }

    ::v-deep(.sm-visible) {
        display: inline;
        margin-right: .5rem;
    }
}
</style>