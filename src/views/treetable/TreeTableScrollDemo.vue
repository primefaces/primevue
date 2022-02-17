<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TreeTable <span>Scroll</span></h1>
                <p>Data scrolling is available horizontally, vertically or both with support for frozen columns.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Vertical</h5>
                <TreeTable :value="nodes" style="margin-bottom: 2rem" :scrollable="true" scrollHeight="400px">
                    <Column field="name" header="Name" :expander="true" style="min-width:200px"></Column>
                    <Column field="size" header="Size" style="min-width:200px"></Column>
                    <Column field="type" header="Type" style="min-width:200px"></Column>
                </TreeTable>
            </div>

            <div class="card">
                <h5>Flexible Scroll</h5>
                <p>Flex scroll feature makes the scrollable viewport section dynamic instead of a fixed value so that it can grow or shrink relative to the parent size of the table.
                    Click the button below to display a maximizable Dialog where data viewport adjusts itself according to the size changes.</p>

                <Button label="Show" icon="pi pi-external-link" @click="openDialog" />
            </div>

            <Dialog header="Flex Scroll" v-model:visible="dialogVisible" :style="{width: '75vw'}" :maximizable="true" :modal="true" :contentStyle="{height: '300px'}">
                <TreeTable :value="nodes" :scrollable="true" scrollHeight="flex">
                    <Column field="name" header="Name" :expander="true" style="min-width:200px"></Column>
                    <Column field="size" header="Size" style="min-width:200px"></Column>
                    <Column field="type" header="Type" style="min-width:200px"></Column>
                </TreeTable>
                <template #footer>
                    <Button label="Ok" icon="pi pi-check" @click="closeDialog" />
                </template>
            </Dialog>

            <div class="card">
                <h5>Horizontal and Vertical with Footer</h5>
                <TreeTable :value="nodes" :scrollable="true" scrollHeight="400px" scrollDirection="both">
                    <Column field="name" header="Name" footer="Name" :expander="true" style="width:300px"></Column>
                    <Column header="Key" footer="Key" style="width:300px">
                        <template #body="{node}">
                            {{node.key}}
                        </template>
                    </Column>
                    <Column field="size" header="Size" footer="Size" style="width:300px"></Column>
                    <Column field="type" header="Type" footer="Type" style="width:300px"></Column>
                    <Column header="Children" footer="Children" style="width:300px">
                        <template #body="{node}">
                            {{node.children ? node.children.length : 0}}
                        </template>
                    </Column>
                    <Column header="Options" footer="Options" style="width:300px">
                        <template #body>
                            <Button type="Button" icon="pi pi-check" label="Edit" class="mr-2"></Button>
                            <Button type="Button" icon="pi pi-check" label="Delete" class="p-button-warning"></Button>
                        </template>
                    </Column>
                </TreeTable>
            </div>

            <div class="card">
                <h5>Frozen Columns</h5>
                <ToggleButton v-model="optionsFrozen" onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Unfreeze Options" offLabel="Freeze Options" style="width: 12rem" />

                <TreeTable :value="nodes" :scrollable="true" scrollHeight="400px" scrollDirection="both" class="mt-3">
                    <Column field="name" header="Name" :expander="true" style="width:300px" frozen></Column>
                    <Column header="Key" style="width:300px">
                        <template #body="{node}">
                            {{node.key}}
                        </template>
                    </Column>
                    <Column field="size" header="Size" style="width:300px"></Column>
                    <Column field="type" header="Type" style="width:300px"></Column>
                    <Column header="Children" style="width:300px">
                        <template #body="{node}">
                            {{node.children ? node.children.length : 0}}
                        </template>
                    </Column>
                    <Column header="Options" style="width:200px" alignFrozen="right" :frozen="optionsFrozen">
                        <template #body>
                            <Button type="Button" icon="pi pi-check" label="Edit Item" class="mr-2" style="width:100%"></Button>
                        </template>
                    </Column>
                </TreeTable>
            </div>
        </div>

        <AppDoc name="TreeTableScrollDemo" :sources="sources" :service="['NodeService']" :data="['treetablenodes']" github="treetable/TreeTableSizeDemo.vue" />
    </div>
</template>

<script>
import NodeService from '../../service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            dialogVisible: false,
            optionsFrozen: false,
            sources: {
                'options-api': {
                    tabName: 'Options API Source',
                    content: `
<template>
    <div>
        <div class="card">
            <h5>Vertical</h5>
            <TreeTable :value="nodes" style="margin-bottom: 2rem" :scrollable="true" scrollHeight="400px">
                <Column field="name" header="Name" :expander="true" style="min-width:200px"></Column>
                <Column field="size" header="Size" style="min-width:200px"></Column>
                <Column field="type" header="Type" style="min-width:200px"></Column>
            </TreeTable>
        </div>

        <div class="card">
            <h5>Flexible Scroll</h5>
            <p>Flex scroll feature makes the scrollable viewport section dynamic instead of a fixed value so that it can grow or shrink relative to the parent size of the table.
                Click the button below to display a maximizable Dialog where data viewport adjusts itself according to the size changes.</p>

            <Button label="Show" icon="pi pi-external-link" @click="openDialog" />
        </div>

        <Dialog header="Flex Scroll" v-model:visible="dialogVisible" :style="{width: '75vw'}" :maximizable="true" :modal="true" :contentStyle="{height: '300px'}">
                <TreeTable :value="nodes" :scrollable="true" scrollHeight="flex">
                <Column field="name" header="Name" :expander="true" style="min-width:200px"></Column>
                <Column field="size" header="Size" style="min-width:200px"></Column>
                <Column field="type" header="Type" style="min-width:200px"></Column>
            </TreeTable>
            <template #footer>
                <Button label="Ok" icon="pi pi-check" @click="closeDialog" />
            </template>
        </Dialog>

        <div class="card">
            <h5>Horizontal and Vertical with Footer</h5>
            <TreeTable :value="nodes" :scrollable="true" scrollHeight="400px" scrollDirection="both">
                <Column field="name" header="Name" footer="Name" :expander="true" style="width:300px"></Column>
                <Column header="Key" footer="Key" style="width:300px">
                    <template #body="{node}">
                        {{node.key}}
                    </template>
                </Column>
                <Column field="size" header="Size" footer="Size" style="width:300px"></Column>
                <Column field="type" header="Type" footer="Type" style="width:300px"></Column>
                <Column header="Children" footer="Children" style="width:300px">
                    <template #body="{node}">
                        {{node.children ? node.children.length : 0}}
                    </template>
                </Column>
                <Column header="Options" footer="Options" style="width:300px">
                    <template #body>
                        <Button type="Button" icon="pi pi-check" label="Edit" class="mr-2"></Button>
                        <Button type="Button" icon="pi pi-check" label="Delete" class="p-button-warning"></Button>
                    </template>
                </Column>
            </TreeTable>
        </div>

        <div class="card">
            <h5>Frozen Columns</h5>
            <ToggleButton v-model="optionsFrozen" onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Unfreeze Options" offLabel="Freeze Options" style="width: 12rem" />

            <TreeTable :value="nodes" :scrollable="true" scrollHeight="400px" scrollDirection="both" class="mt-3">
                <Column field="name" header="Name" :expander="true" style="width:300px" frozen></Column>
                <Column header="Key" style="width:300px">
                    <template #body="{node}">
                        {{node.key}}
                    </template>
                </Column>
                <Column field="size" header="Size" style="width:300px"></Column>
                <Column field="type" header="Type" style="width:300px"></Column>
                <Column header="Children" style="width:300px">
                    <template #body="{node}">
                        {{node.children ? node.children.length : 0}}
                    </template>
                </Column>
                <Column header="Options" style="width:200px" alignFrozen="right" :frozen="optionsFrozen">
                    <template #body>
                        <Button type="Button" icon="pi pi-check" label="Edit Item" class="mr-2" style="width:100%"></Button>
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
            nodes: null,
            dialogVisible: false,
            optionsFrozen: false
        }
    },
    nodeService: null,
    created() {
        this.nodeService = new NodeService();
    },
    mounted() {
        this.nodeService.getTreeTableNodes().then(data => this.nodes = data);
    },
    methods: {
        openDialog() {
            this.dialogVisible = true;
        },
        closeDialog() {
            this.dialogVisible = false;
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
        <div class="card">
            <h5>Vertical</h5>
            <TreeTable :value="nodes" style="margin-bottom: 2rem" :scrollable="true" scrollHeight="400px">
                <Column field="name" header="Name" :expander="true" style="min-width:200px"></Column>
                <Column field="size" header="Size" style="min-width:200px"></Column>
                <Column field="type" header="Type" style="min-width:200px"></Column>
            </TreeTable>
        </div>

        <div class="card">
            <h5>Flexible Scroll</h5>
            <p>Flex scroll feature makes the scrollable viewport section dynamic instead of a fixed value so that it can grow or shrink relative to the parent size of the table.
                Click the button below to display a maximizable Dialog where data viewport adjusts itself according to the size changes.</p>

            <Button label="Show" icon="pi pi-external-link" @click="openDialog" />
        </div>

        <Dialog header="Flex Scroll" v-model:visible="dialogVisible" :style="{width: '75vw'}" :maximizable="true" :modal="true" :contentStyle="{height: '300px'}">
                <TreeTable :value="nodes" :scrollable="true" scrollHeight="flex">
                <Column field="name" header="Name" :expander="true" style="min-width:200px"></Column>
                <Column field="size" header="Size" style="min-width:200px"></Column>
                <Column field="type" header="Type" style="min-width:200px"></Column>
            </TreeTable>
            <template #footer>
                <Button label="Ok" icon="pi pi-check" @click="closeDialog" />
            </template>
        </Dialog>

        <div class="card">
            <h5>Horizontal and Vertical with Footer</h5>
            <TreeTable :value="nodes" :scrollable="true" scrollHeight="400px" scrollDirection="both">
                <Column field="name" header="Name" footer="Name" :expander="true" style="width:300px"></Column>
                <Column header="Key" footer="Key" style="width:300px">
                    <template #body="{node}">
                        {{node.key}}
                    </template>
                </Column>
                <Column field="size" header="Size" footer="Size" style="width:300px"></Column>
                <Column field="type" header="Type" footer="Type" style="width:300px"></Column>
                <Column header="Children" footer="Children" style="width:300px">
                    <template #body="{node}">
                        {{node.children ? node.children.length : 0}}
                    </template>
                </Column>
                <Column header="Options" footer="Options" style="width:300px">
                    <template #body>
                        <Button type="Button" icon="pi pi-check" label="Edit" class="mr-2"></Button>
                        <Button type="Button" icon="pi pi-check" label="Delete" class="p-button-warning"></Button>
                    </template>
                </Column>
            </TreeTable>
        </div>

        <div class="card">
            <h5>Frozen Columns</h5>
            <ToggleButton v-model="optionsFrozen" onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Unfreeze Options" offLabel="Freeze Options" style="width: 12rem" />

            <TreeTable :value="nodes" :scrollable="true" scrollHeight="400px" scrollDirection="both" class="mt-3">
                <Column field="name" header="Name" :expander="true" style="width:300px" frozen></Column>
                <Column header="Key" style="width:300px">
                    <template #body="{node}">
                        {{node.key}}
                    </template>
                </Column>
                <Column field="size" header="Size" style="width:300px"></Column>
                <Column field="type" header="Type" style="width:300px"></Column>
                <Column header="Children" style="width:300px">
                    <template #body="{node}">
                        {{node.children ? node.children.length : 0}}
                    </template>
                </Column>
                <Column header="Options" style="width:200px" alignFrozen="right" :frozen="optionsFrozen">
                    <template #body>
                        <Button type="Button" icon="pi pi-check" label="Edit Item" class="mr-2" style="width:100%"></Button>
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
            nodeService.value.getTreeTableNodes().then(data => nodes.value = data);
        })

        const nodes = ref();
        const nodeService = ref(new NodeService());
        const dialogVisible = ref(false);
        const optionsFrozen = ref(false);

        const openDialog = () => {
            dialogVisible.value = true;
        };
        const closeDialog = () => {
            dialogVisible.value = false;
        };

        return { nodes, openDialog, closeDialog, dialogVisible, optionsFrozen }
    }
}
<\\/script>
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/treetable/treetable.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/togglebutton/togglebutton.min.js"><\\/script>
        <script src="./NodeService.js"><\\/script>`,
                    content: `<div id="app">
            <div class="card">
                <h5>Vertical</h5>
                <p-treetable :value="nodes" style="margin-bottom: 2rem" :scrollable="true" scroll-height="400px">
                    <p-column field="name" header="Name" :expander="true" style="min-width:200px"></p-column>
                    <p-column field="size" header="Size" style="min-width:200px"></p-column>
                    <p-column field="type" header="Type" style="min-width:200px"></p-column>
                </p-treetable>
            </div>

            <div class="card">
                <h5>Flexible Scroll</h5>
                <p>Flex scroll feature makes the scrollable viewport section dynamic instead of a fixed value so that it can grow or shrink relative to the parent size of the table.
                    Click the button below to display a maximizable Dialog where data viewport adjusts itself according to the size changes.</p>

                <p-button label="Show" icon="pi pi-external-link" @click="openDialog"></p-button>
            </div>

            <p-dialog header="Flex Scroll" v-model:visible="dialogVisible" :style="{width: '75vw'}" :maximizable="true" :modal="true" :content-style="{height: '300px'}">
                    <p-treetable :value="nodes" :scrollable="true" scroll-height="flex">
                    <p-column field="name" header="Name" :expander="true" style="min-width:200px"></p-column>
                    <p-column field="size" header="Size" style="min-width:200px"></p-column>
                    <p-column field="type" header="Type" style="min-width:200px"></p-column>
                </p-treetable>
                <template #footer>
                    <p-button label="Ok" icon="pi pi-check" @click="closeDialog"></p-button>
                </template>
            </p-dialog>

            <div class="card">
                <h5>Horizontal and Vertical with Footer</h5>
                <p-treetable :value="nodes" :scrollable="true" scroll-height="400px" scroll-direction="both">
                    <p-column field="name" header="Name" footer="Name" :expander="true" style="width:300px"></p-column>
                    <p-column header="Key" footer="Key" style="width:300px">
                        <template #body="{node}">
                            {{node.key}}
                        </template>
                    </p-column>
                    <p-column field="size" header="Size" footer="Size" style="width:300px"></p-column>
                    <p-column field="type" header="Type" footer="Type" style="width:300px"></p-column>
                    <p-column header="Children" footer="Children" style="width:300px">
                        <template #body="{node}">
                            {{node.children ? node.children.length : 0}}
                        </template>
                    </p-column>
                    <p-column header="Options" footer="Options" style="width:300px">
                        <template #body>
                            <p-button type="Button" icon="pi pi-check" label="Edit" class="mr-2"></p-button>
                            <p-button type="Button" icon="pi pi-check" label="Delete" class="p-button-warning"></p-button>
                        </template>
                    </p-column>
                </p-treetable>
            </div>

            <div class="card">
                <h5>Frozen Columns</h5>
                <p-togglebutton v-model="optionsFrozen" on-icon="pi pi-lock" off-icon="pi pi-lock-open" on-label="Unfreeze Options" off-label="Freeze Options" style="width: 12rem"></p-togglebutton>

                <p-treetable :value="nodes" :scrollable="true" scroll-height="400px" scroll-direction="both" class="mt-3">
                    <p-column field="name" header="Name" :expander="true" style="width:300px" frozen></p-column>
                    <p-column header="Key" style="width:300px">
                        <template #body="{node}">
                            {{node.key}}
                        </template>
                    </p-column>
                    <p-column field="size" header="Size" style="width:300px"></p-column>
                    <p-column field="type" header="Type" style="width:300px"></p-column>
                    <p-column header="Children" style="width:300px">
                        <template #body="{node}">
                            {{node.children ? node.children.length : 0}}
                        </template>
                    </p-column>
                    <p-column header="Options" style="width:200px" alignFrozen="right" :frozen="optionsFrozen">
                        <template #body>
                            <p-button type="Button" icon="pi pi-check" label="Edit Item" class="mr-2" style="width:100%"></p-button>
                        </template>
                    </p-column>
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
                const dialogVisible = ref(false);
                const optionsFrozen = ref(false);

                const openDialog = () => {
                    dialogVisible.value = true;
                };
                const closeDialog = () => {
                    dialogVisible.value = false;
                };

                return { nodes, openDialog, closeDialog, dialogVisible, optionsFrozen }
            },
            components: {
                "p-treetable": primevue.treetable,
                "p-column": primevue.column,
                "p-dialog": primevue.dialog,
                "p-button": primevue.button,
                "p-togglebutton": primevue.togglebutton
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
    },
    methods: {
        openDialog() {
            this.dialogVisible = true;
        },
        closeDialog() {
            this.dialogVisible = false;
        }
    }
}
</script>

<style lang="scss" scoped>
::v-deep(.p-treetable-scrollable .p-frozen-column) {
    font-weight: bold;
}
</style>