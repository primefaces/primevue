<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Filtering is enabled by adding the <i>filter</i> property, by default label property of a node is used to compare against the value in the text field, in order to customize which field(s) should be used during search define
            <i>filterBy</i> property. In addition <i>filterMode</i> specifies the filtering strategy. In <i>lenient</i> mode when the query matches a node, children of the node are not searched further as all descendants of the node are included. On
            the other hand, in <i>strict</i> mode when the query matches a node, filtering continues on all descendants.
        </p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center items-end gap-4">
        <TreeSelect v-model="selectedValue" filter filterMode="lenient" :options="nodes" placeholder="Select Item" class="md:w-80 w-full" />
        <TreeSelect v-model="selectedValue" filter filterMode="strict" :options="nodes" placeholder="Select Item" class="md:w-80 w-full" />
    </div>
    <DocSectionCode :code="code" :service="['NodeService']" v-bind="$attrs" />
</template>

<script>
import { NodeService } from '/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            selectedValue: null,
            code: {
                basic: `
<TreeSelect v-model="selectedValue" filter filterMode="lenient" :options="nodes" placeholder="Select Item" class="md:w-80 w-full" />
<TreeSelect v-model="selectedValue" filter filterMode="strict" :options="nodes" placeholder="Select Item" class="md:w-80 w-full" />
`,
                options: `
<template>
    <div class="card flex flex-wrap justify-center items-end gap-4">
        <TreeSelect v-model="selectedValue" filter filterMode="lenient" :options="nodes" placeholder="Select Item" class="md:w-80 w-full" />
        <TreeSelect v-model="selectedValue" filter filterMode="strict" :options="nodes" placeholder="Select Item" class="md:w-80 w-full" />
    </div>
</template>

<script>
import { NodeService } from './service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            selectedValue: null,
        }
    },
    mounted() {
        NodeService.getTreeNodes().then((data) => (this.nodes = data));
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap justify-center items-end gap-4">
        <TreeSelect v-model="selectedValue" filter filterMode="lenient" :options="nodes" placeholder="Select Item" class="md:w-80 w-full" />
        <TreeSelect v-model="selectedValue" filter filterMode="strict" :options="nodes" placeholder="Select Item" class="md:w-80 w-full" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from './service/NodeService';

const nodes = ref(null);
const selectedValue = ref(null);

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});
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
...`
            }
        };
    },
    mounted() {
        NodeService.getTreeNodes().then((data) => (this.nodes = data));
    }
};
</script>
