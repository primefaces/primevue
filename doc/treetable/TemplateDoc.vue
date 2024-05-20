<template>
    <DocSectionText v-bind="$attrs">
        <p>Custom content at <i>header</i> and <i>footer</i> slots are supported via templating.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <TreeTable :value="nodes" tableStyle="min-width: 50rem">
                <template #header>
                    <div class="text-xl font-bold">File Viewer</div>
                </template>
                <Column field="name" header="Name" expander style="width: 250px"></Column>
                <Column field="size" header="Size" style="width: 150px"></Column>
                <Column field="type" header="Type" style="width: 150px"></Column>
                <Column style="width: 10rem">
                    <template #body>
                        <div class="flex flex-wrap gap-2">
                            <Button type="button" icon="pi pi-search" rounded />
                            <Button type="button" icon="pi pi-pencil" rounded severity="success" />
                        </div>
                    </template>
                </Column>
                <template #footer>
                    <div class="flex justify-start">
                        <Button icon="pi pi-refresh" label="Reload" severity="warn" />
                    </div>
                </template>
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
            code: {
                basic: `
<TreeTable :value="nodes" tableStyle="min-width: 50rem">
    <template #header>
        <div class="text-xl font-bold">File Viewer</div>
    </template>
    <Column field="name" header="Name" expander style="width: 250px"></Column>
    <Column field="size" header="Size" style="width: 150px"></Column>
    <Column field="type" header="Type" style="width: 150px"></Column>
    <Column style="width: 10rem">
        <template #body>
            <div class="flex flex-wrap gap-2">
                <Button type="button" icon="pi pi-search" rounded />
                <Button type="button" icon="pi pi-pencil" rounded severity="success" />
            </div>
        </template>
    </Column>
    <template #footer>
        <div class="flex justify-start">
            <Button icon="pi pi-refresh" label="Reload" severity="warn" />
        </div>
    </template>
</TreeTable>
`,
                options: `
<template>
    <div class="card">
        <TreeTable :value="nodes" tableStyle="min-width: 50rem">
            <template #header>
                <div class="text-xl font-bold">File Viewer</div>
            </template>
            <Column field="name" header="Name" expander style="width: 250px"></Column>
            <Column field="size" header="Size" style="width: 150px"></Column>
            <Column field="type" header="Type" style="width: 150px"></Column>
            <Column style="width: 10rem">
                <template #body>
                    <div class="flex flex-wrap gap-2">
                        <Button type="button" icon="pi pi-search" rounded/>
                        <Button type="button" icon="pi pi-pencil" rounded severity="success" />
                    </div>
                </template>
            </Column>
            <template #footer>
                <div class="flex justify-start">
                    <Button icon="pi pi-refresh" label="Reload" severity="warn" />
                </div>
            </template>
        </TreeTable>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
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
        <TreeTable :value="nodes" tableStyle="min-width: 50rem">
            <template #header>
                <div class="text-xl font-bold">File Viewer</div>
            </template>
            <Column field="name" header="Name" expander style="width: 250px"></Column>
            <Column field="size" header="Size" style="width: 150px"></Column>
            <Column field="type" header="Type" style="width: 150px"></Column>
            <Column style="width: 10rem">
                <template #body>
                    <div class="flex flex-wrap gap-2">
                        <Button type="button" icon="pi pi-search" rounded/>
                        <Button type="button" icon="pi pi-pencil" rounded severity="success" />
                    </div>
                </template>
            </Column>
            <template #footer>
                <div class="flex justify-start">
                    <Button icon="pi pi-refresh" label="Reload" severity="warn" />
                </div>
            </template>
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
