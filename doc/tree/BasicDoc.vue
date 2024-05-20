<template>
    <DocSectionText v-bind="$attrs">
        <p>Tree component requires an array of TreeNode objects as its <i>value</i>.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Tree :value="nodes" class="w-full md:w-[30rem]"></Tree>
    </div>
    <DocSectionCode :code="code" v-bind="$attrs" :service="['NodeService']" />
</template>

<script>
import { NodeService } from '@/service/NodeService';
export default {
    data() {
        return {
            nodes: null,
            code: {
                basic: `
<Tree :value="nodes" class="w-full md:w-[30rem]"></Tree>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Tree :value="nodes" class="w-full md:w-[30rem]"></Tree>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null
        };
    },
    mounted() {
        NodeService.getTreeNodes().then((data) => (this.nodes = data));
    } 
}
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Tree :value="nodes" class="w-full md:w-[30rem]"></Tree>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

const nodes = ref(null);

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
