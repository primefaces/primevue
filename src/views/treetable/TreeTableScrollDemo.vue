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
                <p>Flex scroll feature makes the scrollable viewport section dynamic insteaf of a fixed value so that it can grow or shrink relative to the parent size of the table.
                   Click the button below to display a maximizable Dialog where data viewport adjusts itself according to the size changes.</p>

                <Button label="Show" icon="external-link" @click="openDialog" />
            </div>

            <Dialog header="Flex Scroll" v-model:visible="dialogVisible" :style="{width: '75vw'}" :maximizable="true" :modal="true" :contentStyle="{height: '300px'}">
                 <TreeTable :value="nodes" :scrollable="true" scrollHeight="flex">
                    <Column field="name" header="Name" :expander="true" style="min-width:200px"></Column>
                    <Column field="size" header="Size" style="min-width:200px"></Column>
                    <Column field="type" header="Type" style="min-width:200px"></Column>
                </TreeTable>
                <template #footer>
                    <Button label="Ok" icon="check" @click="closeDialog" />
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
                            <Button type="Button" icon="check" label="Edit" class="p-mr-2"></Button>
                            <Button type="Button" icon="check" label="Delete" class="p-button-warning"></Button>
                        </template>
                    </Column>
                </TreeTable>
            </div>

            <div class="card">
                <h5>Frozen Columns</h5>
                <ToggleButton v-model="optionsFrozen" onIcon="lock" offIcon="lock-open" onLabel="Unfreeze Options" offLabel="Freeze Options" style="width: 12rem" />

                <TreeTable :value="nodes" :scrollable="true" scrollHeight="400px" scrollDirection="both" class="p-mt-3">
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
                            <Button type="Button" icon="check" label="Edit Item" class="p-mr-2" style="width:100%"></Button>
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
            <p>Flex scroll feature makes the scrollable viewport section dynamic insteaf of a fixed value so that it can grow or shrink relative to the parent size of the table.
                Click the button below to display a maximizable Dialog where data viewport adjusts itself according to the size changes.</p>

            <Button label="Show" icon="external-link" @click="openDialog" />
        </div>

        <Dialog header="Flex Scroll" v-model:visible="dialogVisible" :style="{width: '75vw'}" :maximizable="true" :modal="true" :contentStyle="{height: '300px'}">
                <TreeTable :value="nodes" :scrollable="true" scrollHeight="flex">
                <Column field="name" header="Name" :expander="true" style="min-width:200px"></Column>
                <Column field="size" header="Size" style="min-width:200px"></Column>
                <Column field="type" header="Type" style="min-width:200px"></Column>
            </TreeTable>
            <template #footer>
                <Button label="Ok" icon="check" @click="closeDialog" />
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
                        <Button type="Button" icon="check" label="Edit" class="p-mr-2"></Button>
                        <Button type="Button" icon="check" label="Delete" class="p-button-warning"></Button>
                    </template>
                </Column>
            </TreeTable>
        </div>

        <div class="card">
            <h5>Frozen Columns</h5>
            <ToggleButton v-model="optionsFrozen" onIcon="lock" offIcon="lock-open" onLabel="Unfreeze Options" offLabel="Freeze Options" style="width: 12rem" />

            <TreeTable :value="nodes" :scrollable="true" scrollHeight="400px" scrollDirection="both" class="p-mt-3">
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
                        <Button type="Button" icon="check" label="Edit Item" class="p-mr-2" style="width:100%"></Button>
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
            <p>Flex scroll feature makes the scrollable viewport section dynamic insteaf of a fixed value so that it can grow or shrink relative to the parent size of the table.
                Click the button below to display a maximizable Dialog where data viewport adjusts itself according to the size changes.</p>

            <Button label="Show" icon="external-link" @click="openDialog" />
        </div>

        <Dialog header="Flex Scroll" v-model:visible="dialogVisible" :style="{width: '75vw'}" :maximizable="true" :modal="true" :contentStyle="{height: '300px'}">
                <TreeTable :value="nodes" :scrollable="true" scrollHeight="flex">
                <Column field="name" header="Name" :expander="true" style="min-width:200px"></Column>
                <Column field="size" header="Size" style="min-width:200px"></Column>
                <Column field="type" header="Type" style="min-width:200px"></Column>
            </TreeTable>
            <template #footer>
                <Button label="Ok" icon="check" @click="closeDialog" />
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
                        <Button type="Button" icon="check" label="Edit" class="p-mr-2"></Button>
                        <Button type="Button" icon="check" label="Delete" class="p-button-warning"></Button>
                    </template>
                </Column>
            </TreeTable>
        </div>

        <div class="card">
            <h5>Frozen Columns</h5>
            <ToggleButton v-model="optionsFrozen" onIcon="lock" offIcon="lock-open" onLabel="Unfreeze Options" offLabel="Freeze Options" style="width: 12rem" />

            <TreeTable :value="nodes" :scrollable="true" scrollHeight="400px" scrollDirection="both" class="p-mt-3">
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
                        <Button type="Button" icon="check" label="Edit Item" class="p-mr-2" style="width:100%"></Button>
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
