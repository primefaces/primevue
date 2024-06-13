<template>
    <DocSectionText v-bind="$attrs">
        <p>
            More than one node is selectable by setting <i>selectionMode</i> to <i>multiple</i>. By default in multiple selection mode, metaKey press (e.g. <i>⌘</i>) is not necessary to add to existing selections. When the optional
            <i>metaKeySelection</i> is present, behavior is changed in a way that selecting a new node requires meta key to be present. Note that in touch enabled devices, TreeTable always ignores metaKey.
        </p>
        <p>In multiple selection mode, value binding should be a key-value pair where key is the node key and value is a boolean to indicate selection.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <div class="flex justify-center items-center mb-6 gap-2">
                <ToggleSwitch v-model="metaKey" inputId="input-metakey" />
                <label for="input-metakey">MetaKey</label>
            </div>
            <TreeTable v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="multiple" :metaKeySelection="metaKey" tableStyle="min-width: 50rem">
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
            selectedKey: null,
            metaKey: true,
            code: {
                basic: `
<ToggleSwitch v-model="metaKey" inputId="input-metakey" />

<TreeTable v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="multiple" :metaKeySelection="metaKey" tableStyle="min-width: 50rem">
    <Column field="name" header="Name" expander style="width: 34%"></Column>
    <Column field="size" header="Size" style="width: 33%"></Column>
    <Column field="type" header="Type" style="width: 33%"></Column>
</TreeTable>
`,
                options: `
<template>
    <div class="card">
        <div class="flex justify-center items-center mb-6 gap-2">
            <ToggleSwitch v-model="metaKey" inputId="input-metakey" />
            <label for="input-metakey">MetaKey</label>
        </div>
        <TreeTable v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="multiple" :metaKeySelection="metaKey" tableStyle="min-width: 50rem">
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
            selectedKey: null,
            metaKey: true
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
        <div class="flex justify-center items-center mb-6 gap-2">
            <ToggleSwitch v-model="metaKey" inputId="input-metakey" />
            <label for="input-metakey">MetaKey</label>
        </div>
        <TreeTable v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="multiple" :metaKeySelection="metaKey" tableStyle="min-width: 50rem">
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
const selectedKey = ref();
const metaKey = ref(true);
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
