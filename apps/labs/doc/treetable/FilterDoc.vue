<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Filtering is enabled by adding the <i>filter</i> property to a Column. The <i>filterMode</i> specifies the filtering strategy, in <i>lenient</i> mode when the query matches a node, children of the node are not searched further as all
            descendants of the node are included. On the other hand, in <i>strict</i> mode when the query matches a node, filtering continues on all descendants. A general filled called <i>globalFilter</i> is also provided to search all columns that
            support filtering.
        </p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <div class="flex justify-center mb-6">
                <SelectButton v-model="filterMode" optionLabel="label" dataKey="label" :options="filterOptions" />
            </div>
            <TreeTable :value="nodes" :filters="filters" :filterMode="filterMode.value">
                <template #header>
                    <div class="flex justify-end">
                        <IconField>
                            <InputIcon class="pi pi-search" />
                            <InputText v-model="filters['global']" placeholder="Global Search" />
                        </IconField>
                    </div>
                </template>
                <Column field="name" header="Name" expander style="min-width: 12rem">
                    <template #filter>
                        <InputText v-model="filters['name']" type="text" placeholder="Filter by name" />
                    </template>
                </Column>
                <Column field="size" header="Size" style="min-width: 12rem">
                    <template #filter>
                        <InputText v-model="filters['size']" type="text" placeholder="Filter by size" />
                    </template>
                </Column>
                <Column field="type" header="Type" style="min-width: 12rem">
                    <template #filter>
                        <InputText v-model="filters['type']" type="text" placeholder="Filter by type" />
                    </template>
                </Column>
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
            filters: {},
            filterMode: { label: 'Lenient', value: 'lenient' },
            filterOptions: [
                { label: 'Lenient', value: 'lenient' },
                { label: 'Strict', value: 'strict' }
            ],
            code: {
                basic: `
<SelectButton v-model="filterMode" optionLabel="label" dataKey="label" :options="filterOptions" />
<TreeTable :value="nodes" :filters="filters" :filterMode="filterMode.value">
    <template #header>
        <div class="flex justify-end">
            <IconField>
                <InputIcon class="pi pi-search" />
                <InputText v-model="filters['global']" placeholder="Global Search" />
            </IconField>
        </div>
    </template>
    <Column field="name" header="Name" expander style="min-width: 12rem">
        <template #filter>
            <InputText v-model="filters['name']" type="text" placeholder="Filter by name" />
        </template>
    </Column>
    <Column field="size" header="Size" style="min-width: 12rem">
        <template #filter>
            <InputText v-model="filters['size']" type="text" placeholder="Filter by size" />
        </template>
    </Column>
    <Column field="type" header="Type" style="min-width: 12rem">
        <template #filter>
            <InputText v-model="filters['type']" type="text" placeholder="Filter by type" />
        </template>
    </Column>
</TreeTable>
`,
                options: `
<template>
    <div class="card">
        <div class="flex justify-center mb-6">
            <SelectButton v-model="filterMode" optionLabel="label" dataKey="label" :options="filterOptions" />
        </div>
        <TreeTable :value="nodes" :filters="filters" :filterMode="filterMode.value">
            <template #header>
                <div class="flex justify-end">
                    <IconField>
                        <InputIcon class="pi pi-search" />
                        <InputText v-model="filters['global']" placeholder="Global Search" />
                    </IconField>
                </div>
            </template>
            <Column field="name" header="Name" expander style="min-width: 12rem">
                <template #filter>
                    <InputText v-model="filters['name']" type="text" placeholder="Filter by name" />
                </template>
            </Column>
            <Column field="size" header="Size" style="min-width: 12rem">
                <template #filter>
                    <InputText v-model="filters['size']" type="text" placeholder="Filter by size" />
                </template>
            </Column>
            <Column field="type" header="Type" style="min-width: 12rem">
                <template #filter>
                    <InputText v-model="filters['type']" type="text" placeholder="Filter by type" />
                </template>
            </Column>
        </TreeTable>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            filters: {},
            filterMode: { label: 'Lenient', value: 'lenient' },
            filterOptions: [
                { label: 'Lenient', value: 'lenient' },
                { label: 'Strict', value: 'strict' }
            ]
        }
    },
    mounted() {
        NodeService.getTreeTableNodes().then((data) => (this.nodes = data));
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <div class="flex justify-center mb-6">
            <SelectButton v-model="filterMode" optionLabel="label" dataKey="label" :options="filterOptions" />
        </div>
        <TreeTable :value="nodes" :filters="filters" :filterMode="filterMode.value">
            <template #header>
                <div class="flex justify-end">
                    <IconField>
                        <InputIcon class="pi pi-search" />
                        <InputText v-model="filters['global']" placeholder="Global Search" />
                    </IconField>
                </div>
            </template>
            <Column field="name" header="Name" expander style="min-width: 12rem">
                <template #filter>
                    <InputText v-model="filters['name']" type="text" placeholder="Filter by name" />
                </template>
            </Column>
            <Column field="size" header="Size" style="min-width: 12rem">
                <template #filter>
                    <InputText v-model="filters['size']" type="text" placeholder="Filter by size" />
                </template>
            </Column>
            <Column field="type" header="Type" style="min-width: 12rem">
                <template #filter>
                    <InputText v-model="filters['type']" type="text" placeholder="Filter by type" />
                </template>
            </Column>
        </TreeTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
});

const nodes = ref();
const filters = ref({});
const filterMode = ref({ label: 'Lenient', value: 'lenient' });
const filterOptions = ref([
    { label: 'Lenient', value: 'lenient' },
    { label: 'Strict', value: 'strict' }
]);
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
    methods: {
        loadDemoData() {
            NodeService.getTreeTableNodes().then((data) => (this.nodes = data));
        }
    }
};
</script>
