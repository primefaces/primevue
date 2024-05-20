<template>
    <DocSectionText v-bind="$attrs">
        <p>Expansion state is controlled with <i>expandedKeys</i> property. The <i>expandedKeys</i> should be an object whose keys refer to the node key and values represent the expanded state e.g. <i>&#123;'0-0': true&#125;</i>.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <Button @click="toggleApplications" label="Toggle Applications" />
            <TreeTable v-model:expandedKeys="expandedKeys" :value="nodes" class="mt-6" tableStyle="min-width: 50rem">
                <Column field="name" header="Name" expander style="width: 34%"></Column>
                <Column field="size" header="Size" style="width: 33%"></Column>
                <Column field="type" header="Type" style="width: 33%"></Column>
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
            expandedKeys: {},
            code: {
                basic: `
<Button @click="toggleApplications" label="Toggle Applications" />
<TreeTable v-model:expandedKeys="expandedKeys" :value="nodes" class="mt-6" tableStyle="min-width: 50rem">
    <Column field="name" header="Name" expander style="width: 34%"></Column>
    <Column field="size" header="Size" style="width: 33%"></Column>
    <Column field="type" header="Type" style="width: 33%"></Column>
</TreeTable>
`,
                options: `
<template>
    <div class="card">
        <Button @click="toggleApplications" label="Toggle Applications" />
        <TreeTable v-model:expandedKeys="expandedKeys" :value="nodes" class="mt-6" tableStyle="min-width: 50rem">
            <Column field="name" header="Name" expander style="width: 34%"></Column>
            <Column field="size" header="Size" style="width: 33%"></Column>
            <Column field="type" header="Type" style="width: 33%"></Column>
        </TreeTable>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            expandedKeys: {}
        }
    },
    mounted() {
        NodeService.getTreeTableNodes().then((data) => (this.nodes = data));
    },
    methods: {
        toggleApplications() {
            let _expandedKeys = { ...this.expandedKeys };

            if (_expandedKeys['0']) delete _expandedKeys['0'];
            else _expandedKeys['0'] = true;

            this.expandedKeys = _expandedKeys;
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Button @click="toggleApplications" label="Toggle Applications" />
        <TreeTable v-model:expandedKeys="expandedKeys" :value="nodes" class="mt-6" tableStyle="min-width: 50rem">
            <Column field="name" header="Name" expander style="width: 34%"></Column>
            <Column field="size" header="Size" style="width: 33%"></Column>
            <Column field="type" header="Type" style="width: 33%"></Column>
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
const expandedKeys = ref({});
const toggleApplications = () => {
    let _expandedKeys = { ...expandedKeys.value };

    if (_expandedKeys['0']) delete _expandedKeys['0'];
    else _expandedKeys['0'] = true;

    expandedKeys.value = _expandedKeys;
}
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
        },
        toggleApplications() {
            let _expandedKeys = { ...this.expandedKeys };

            if (_expandedKeys['0']) delete _expandedKeys['0'];
            else _expandedKeys['0'] = true;

            this.expandedKeys = _expandedKeys;
        }
    }
};
</script>
