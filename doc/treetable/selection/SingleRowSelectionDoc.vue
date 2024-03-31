<template>
    <DocSectionText v-bind="$attrs">
        <p>Single node selection is configured by setting <i>selectionMode</i> as <i>single</i> along with <i>selectionKeys</i> property to manage the selection value binding.</p>
        <p>
            By default, metaKey press (e.g. <i>⌘</i>) is necessary to unselect a node however this can be configured with disabling the <i>metaKeySelection</i> property. In touch enabled devices this option has no effect and behavior is same as
            setting it to false.
        </p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <div class="flex justify-content-center align-items-center mb-4 gap-2">
                <InputSwitch v-model="metaKey" inputId="input-metakey" />
                <label for="input-metakey">MetaKey</label>
            </div>
            <TreeTable v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" :metaKeySelection="metaKey">
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
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
<InputSwitch v-model="metaKey" inputId="input-metakey" />

<TreeTable v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" :metaKeySelection="metaKey">
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>
`,
                options: `
<template>
    <div class="card">
        <div class="flex justify-content-center align-items-center mb-4 gap-2">
            <InputSwitch v-model="metaKey" inputId="input-metakey" />
            <label for="input-metakey">MetaKey</label>
        </div>
        <TreeTable v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" :metaKeySelection="metaKey">
            <Column field="name" header="Name" expander></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
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
        <div class="flex justify-content-center align-items-center mb-4 gap-2">
            <InputSwitch v-model="metaKey" inputId="input-metakey" />
            <label for="input-metakey">MetaKey</label>
        </div>
        <TreeTable v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" :metaKeySelection="metaKey">
            <Column field="name" header="Name" expander></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
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
