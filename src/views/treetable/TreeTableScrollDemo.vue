
<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TreeTable <span>Scroll</span></h1>
                <p>Data scrolling is available horizontally, vertically or both with support for frozen columns.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Vertical</h5>
                <TreeTable :value="nodes" style="margin-bottom: 2rem" :scrollable="true" scrollHeight="400px">
                    <Column field="name" header="Name" :expander="true" :styles="{'min-width':'200px'}"></Column>
                    <Column field="size" header="Size" :styles="{'min-width':'200px'}"></Column>
                    <Column field="type" header="Type" :styles="{'min-width':'200px'}"></Column>
                </TreeTable>
            </div>

            <div class="card">
                <h5>Flexible Scroll</h5>
                <p>Flex scroll feature makes the scrollable viewport section dynamic insteaf of a fixed value so that it can grow or shrink relative to the parent size of the table.
                    Click the button below to display a maximizable Dialog where data viewport adjusts itself according to the size changes.</p>

                <Button label="Show" icon="pi pi-external-link" @click="openDialog" />
            </div>

            <Dialog header="Flex Scroll" :visible.sync="dialogVisible" :style="{width: '75vw'}" :maximizable="true" :modal="true" :contentStyle="{height: '300px'}">
                    <TreeTable :value="nodes" :scrollable="true" scrollHeight="flex">
                    <Column field="name" header="Name" :expander="true" style="min-width:200px"></Column>
                    <Column field="size" header="Size" :styles="{'min-width':'200px'}"></Column>
                    <Column field="type" header="Type" :styles="{'min-width':'200px'}"></Column>
                </TreeTable>
                <template #footer>
                    <Button label="Ok" icon="pi pi-check" @click="closeDialog" />
                </template>
            </Dialog>

            <div class="card">
                <h5>Horizontal and Vertical with Footer</h5>
                <TreeTable :value="nodes" :scrollable="true" scrollHeight="400px" scrollDirection="both">
                    <Column field="name" header="Name" footer="Name" :expander="true" :styles="{'width':'300px'}"></Column>
                    <Column header="Key" footer="Key" :styles="{'width':'300px'}">
                        <template #body="{node}">
                            {{node.key}}
                        </template>
                    </Column>
                    <Column field="size" header="Size" footer="Size" :styles="{'width':'300px'}"></Column>
                    <Column field="type" header="Type" footer="Type" :styles="{'width':'300px'}"></Column>
                    <Column header="Children" footer="Children" :styles="{'width':'300px'}">
                        <template #body="{node}">
                            {{node.children ? node.children.length : 0}}
                        </template>
                    </Column>
                    <Column header="Options" footer="Options" :styles="{'width':'300px'}">
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
                    <Column field="name" header="Name" :expander="true" :styles="{'min-width':'300px'}" frozen></Column>
                    <Column header="Key" :styles="{'min-width':'300px'}">
                        <template #body="{node}">
                            {{node.key}}
                        </template>
                    </Column>
                    <Column field="size" header="Size" :styles="{'min-width':'300px'}"></Column>
                    <Column field="type" header="Type" :styles="{'min-width':'300px'}"></Column>
                    <Column header="Children" :styles="{'min-width':'300px'}">
                        <template #body="{node}">
                            {{node.children ? node.children.length : 0}}
                        </template>
                    </Column>
                    <Column header="Options" :styles="{'min-width':'300px'}" alignFrozen="right" :frozen="optionsFrozen">
                        <template #body>
                            <Button type="Button" icon="pi pi-check" label="Edit Item" class="mr-2" style="width:100%"></Button>
                        </template>
                    </Column>
                </TreeTable>
            </div>
        </div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;div class="card"&gt;
    &lt;h5&gt;Vertical&lt;/h5&gt;
    &lt;TreeTable :value="nodes" style="margin-bottom: 2rem" :scrollable="true" scrollHeight="400px"&gt;
        &lt;Column field="name" header="Name" :expander="true" :styles="{'min-width':'200px'}"&gt;&lt;/Column&gt;
        &lt;Column field="size" header="Size" :styles="{'min-width':'200px'}"&gt;&lt;/Column&gt;
        &lt;Column field="type" header="Type" :styles="{'min-width':'200px'}"&gt;&lt;/Column&gt;
    &lt;/TreeTable&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
    &lt;h5&gt;Flexible Scroll&lt;/h5&gt;
    &lt;p&gt;Flex scroll feature makes the scrollable viewport section dynamic insteaf of a fixed value so that it can grow or shrink relative to the parent size of the table.
        Click the button below to display a maximizable Dialog where data viewport adjusts itself according to the size changes.&lt;/p&gt;

    &lt;Button label="Show" icon="pi pi-external-link" @click="openDialog" /&gt;
&lt;/div&gt;

&lt;Dialog header="Flex Scroll" :visible.sync="dialogVisible" :style="{width: '75vw'}" :maximizable="true" :modal="true" :contentStyle="{height: '300px'}"&gt;
        &lt;TreeTable :value="nodes" :scrollable="true" scrollHeight="flex"&gt;
        &lt;Column field="name" header="Name" :expander="true" style="min-width:200px"&gt;&lt;/Column&gt;
        &lt;Column field="size" header="Size" :styles="{'min-width':'200px'}"&gt;&lt;/Column&gt;
        &lt;Column field="type" header="Type" :styles="{'min-width':'200px'}"&gt;&lt;/Column&gt;
    &lt;/TreeTable&gt;
    &lt;template #footer&gt;
        &lt;Button label="Ok" icon="pi pi-check" @click="closeDialog" /&gt;
    &lt;/template&gt;
&lt;/Dialog&gt;

&lt;div class="card"&gt;
    &lt;h5&gt;Horizontal and Vertical with Footer&lt;/h5&gt;
    &lt;TreeTable :value="nodes" :scrollable="true" scrollHeight="400px" scrollDirection="both"&gt;
        &lt;Column field="name" header="Name" footer="Name" :expander="true" :styles="{'width':'300px'}"&gt;&lt;/Column&gt;
        &lt;Column header="Key" footer="Key" :styles="{'width':'300px'}"&gt;
            &lt;template #body="{node}"&gt;
                {{node.key}}
            &lt;/template&gt;
        &lt;/Column&gt;
        &lt;Column field="size" header="Size" footer="Size" :styles="{'width':'300px'}"&gt;&lt;/Column&gt;
        &lt;Column field="type" header="Type" footer="Type" :styles="{'width':'300px'}"&gt;&lt;/Column&gt;
        &lt;Column header="Children" footer="Children" :styles="{'width':'300px'}"&gt;
            &lt;template #body="{node}"&gt;
                {{node.children ? node.children.length : 0}}
            &lt;/template&gt;
        &lt;/Column&gt;
        &lt;Column header="Options" footer="Options" :styles="{'width':'300px'}"&gt;
            &lt;template #body&gt;
                &lt;Button type="Button" icon="pi pi-check" label="Edit" class="mr-2"&gt;&lt;/Button&gt;
                &lt;Button type="Button" icon="pi pi-check" label="Delete" class="p-button-warning"&gt;&lt;/Button&gt;
            &lt;/template&gt;
        &lt;/Column&gt;
    &lt;/TreeTable&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
    &lt;h5&gt;Frozen Columns&lt;/h5&gt;
    &lt;ToggleButton v-model="optionsFrozen" onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Unfreeze Options" offLabel="Freeze Options" style="width: 12rem" /&gt;

    &lt;TreeTable :value="nodes" :scrollable="true" scrollHeight="400px" scrollDirection="both" class="mt-3"&gt;
        &lt;Column field="name" header="Name" :expander="true" :styles="{'min-width':'300px'}" frozen&gt;&lt;/Column&gt;
        &lt;Column header="Key" :styles="{'min-width':'300px'}"&gt;
            &lt;template #body="{node}"&gt;
                {{node.key}}
            &lt;/template&gt;
        &lt;/Column&gt;
        &lt;Column field="size" header="Size" :styles="{'min-width':'300px'}"&gt;&lt;/Column&gt;
        &lt;Column field="type" header="Type" :styles="{'min-width':'300px'}"&gt;&lt;/Column&gt;
        &lt;Column header="Children" :styles="{'min-width':'300px'}"&gt;
            &lt;template #body="{node}"&gt;
                {{node.children ? node.children.length : 0}}
            &lt;/template&gt;
        &lt;/Column&gt;
        &lt;Column header="Options" :styles="{'min-width':'300px'}" alignFrozen="right" :frozen="optionsFrozen"&gt;
            &lt;template #body&gt;
                &lt;Button type="Button" icon="pi pi-check" label="Edit Item" class="mr-2" style="width:100%"&gt;&lt;/Button&gt;
            &lt;/template&gt;
        &lt;/Column&gt;
    &lt;/TreeTable&gt;
&lt;/div&gt;
</template>
</CodeHighlight>
<CodeHighlight lang="javascript">
import NodeService from '../../service/NodeService';

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
</CodeHighlight>

<CodeHighlight lang="css">
::v-deep .p-treetable-scrollable .p-frozen-column {
    font-weight: bold;
}
</CodeHighlight>
                </TabPanel>
            </TabView>
        </div>
    </div>
</template>

<script>
import NodeService from '../../service/NodeService';

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
</script>

<style lang="scss" scoped>
::v-deep .p-treetable-scrollable .p-frozen-column {
    font-weight: bold;
}
</style>