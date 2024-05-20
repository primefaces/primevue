<template>
    <DocSectionText v-bind="$attrs">
        <p>Column visibility based on a condition can be implemented with dynamic columns, in this sample a MultiSelect is used to manage the visible columns.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <TreeTable :value="nodes" tableStyle="min-width: 50rem">
                <template #header>
                    <div style="text-align: left">
                        <MultiSelect :modelValue="selectedColumns" @update:modelValue="onToggle" :options="columns" optionLabel="header" class="w-full sm:w-64" display="chip" />
                    </div>
                </template>
                <Column field="name" header="Name" :expander="true"></Column>
                <Column v-for="col of selectedColumns" :key="col.field" :field="col.field" :header="col.header"></Column>
            </TreeTable>
        </div>
    </DeferredDemo>
    <DocSectionCode :code="code" :service="['NodeService']" />
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            selectedColumns: null,
            columns: null,
            code: {
                basic: `
<TreeTable :value="nodes" tableStyle="min-width: 50rem">
    <template #header>
        <div style="text-align:left">
            <MultiSelect :modelValue="selectedColumns" @update:modelValue="onToggle" :options="columns" optionLabel="header" class="w-full sm:w-64" display="chip"/>
        </div>
    </template>
    <Column field="name" header="Name" :expander="true"></Column>
    <Column v-for="col of selectedColumns" :field="col.field" :header="col.header" :key="col.field"></Column>
</TreeTable>
`,
                options: `
<template>
    <div class="card">
        <TreeTable :value="nodes" tableStyle="min-width: 50rem">
            <template #header>
                <div style="text-align:left">
                    <MultiSelect :modelValue="selectedColumns" @update:modelValue="onToggle" :options="columns" optionLabel="header" class="w-full sm:w-64" display="chip"/>
                </div>
            </template>
            <Column field="name" header="Name" :expander="true"></Column>
            <Column v-for="col of selectedColumns" :field="col.field" :header="col.header" :key="col.field"></Column>
        </TreeTable>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            selectedColumns: null,
            columns: null,
        }
    },
    created() {
        this.columns = [
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];

        this.selectedColumns = this.columns;
    },
    mounted() {
        NodeService.getTreeTableNodes().then((data) => (this.nodes = data));
    },
    methods: {
        onToggle(value) {
            this.selectedColumns = this.columns.filter(col => value.includes(col));
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <TreeTable :value="nodes" tableStyle="min-width: 50rem">
            <template #header>
                <div style="text-align:left">
                    <MultiSelect :modelValue="selectedColumns" @update:modelValue="onToggle" :options="columns" optionLabel="header" class="w-full sm:w-64" display="chip"/>
                </div>
            </template>
            <Column field="name" header="Name" :expander="true"></Column>
            <Column v-for="col of selectedColumns" :field="col.field" :header="col.header" :key="col.field"></Column>
        </TreeTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
});

const columns = ref([
    {field: 'size', header: 'Size'},
    {field: 'type', header: 'Type'}
]);
const nodes = ref();
const selectedColumns = ref(columns.value);
const onToggle = (val) => {
    selectedColumns.value = columns.value.filter(col => val.includes(col));
};
<\/script>
`,
                data: `
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...
`
            }
        };
    },
    created() {
        this.columns = [
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];

        this.selectedColumns = this.columns;
    },
    methods: {
        loadDemoData() {
            NodeService.getTreeTableNodes().then((data) => (this.nodes = data));
        },
        onToggle(value) {
            this.selectedColumns = this.columns.filter((col) => value.includes(col));
        }
    }
};
</script>
