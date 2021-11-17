<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TreeTable - Responsive</h1>
                <p>TreeTable display can be optimized according for different screen sizes.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Scroll</h5>
                <p>Built-in responsiveness using the <b>responsiveLayout</b> property set to scroll.</p>
                <TreeTable :value="nodes" responsiveLayout="scroll">
                    <Column field="name" header="Name" :expander="true" style="min-width:200px"></Column>
                    <Column field="size" header="Size" style="min-width:200px"></Column>
                    <Column field="type" header="Type" style="min-width:200px"></Column>
                </TreeTable>
            </div>

            <div class="card">
                <h5>Custom</h5>
                <p>Custom implementation using media queries.</p>
                <TreeTable :value="nodes">
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

        <AppDoc name="TreeTableResponsiveDemo" :sources="sources" :service="['NodeService']" :data="['treetablenodes']" github="treetable/TreeTableResponsiveDemo.vue" />
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
            <h5>Scroll</h5>
            <p>Built-in responsiveness using the <b>responsiveLayout</b> property set to scroll.</p>
            <TreeTable :value="nodes" responsiveLayout="scroll">
                <Column field="name" header="Name" :expander="true" style="min-width:200px"></Column>
                <Column field="size" header="Size" style="min-width:200px"></Column>
                <Column field="type" header="Type" style="min-width:200px"></Column>
            </TreeTable>
        </div>

        <div class="card">
            <h5>Custom</h5>
            <p>Custom implementation using media queries.</p>
            <TreeTable :value="nodes">
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
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <div class="card">
            <h5>Scroll</h5>
            <p>Built-in responsiveness using the <b>responsiveLayout</b> property set to scroll.</p>
            <TreeTable :value="nodes" responsiveLayout="scroll">
                <Column field="name" header="Name" :expander="true" style="min-width:200px"></Column>
                <Column field="size" header="Size" style="min-width:200px"></Column>
                <Column field="type" header="Type" style="min-width:200px"></Column>
            </TreeTable>
        </div>

        <div class="card">
            <h5>Custom</h5>
            <p>Custom implementation using media queries.</p>
            <TreeTable :value="nodes">
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
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/treetable/treetable.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>
        <script src="./NodeService.js"><\\/script>`,
                    content: `<div id="app">
            <div class="card">
                <h5>Scroll</h5>
                <p>Built-in responsiveness using the <b>responsiveLayout</b> property set to scroll.</p>
                <p-treetable :value="nodes" responsive-layout="scroll">
                    <p-column field="name" header="Name" :expander="true" style="min-width:200px"></p-column>
                    <p-column field="size" header="Size" style="min-width:200px"></p-column>
                    <p-column field="type" header="Type" style="min-width:200px"></p-column>
                </p-treetable>
            </div>

            <div class="card">
                <h5>Custom</h5>
                <p>Custom implementation using media queries.</p>
                <p-treetable :value="nodes">
                    <p-column field="name" header="Name" :expander="true">
                        <template #body="slotProps">
                            {{slotProps.node.data.name}}
                            <span class="sm-visible">{{slotProps.node.data.size}}</span>
                            <span class="sm-visible">{{slotProps.node.data.type}}</span>
                        </template>
                    </p-column>
                    <p-column field="size" header="Size" header-class="sm-invisible" body-class="sm-invisible"></p-column>
                    <p-column field="type" header="Type" header-class="sm-invisible" body-class="sm-invisible"></p-column>
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

        <style>
        .sm-visible {
            display: none;
        }

        @media screen and (max-width: 40em) {
            .sm-invisible {
                display: none;
            }

            .sm-visible {
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