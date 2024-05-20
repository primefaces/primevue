<template>
    <DocSectionText v-bind="$attrs">
        <p>
            More than one node is selectable by setting <i>selectionMode</i> to <i>multiple</i>. By default in multiple selection mode, metaKey press (e.g. <i>⌘</i>) is not necessary to add to existing selections. When the optional
            <i>metaKeySelection</i> is present, behavior is changed in a way that selecting a new node requires meta key to be present. Note that in touch enabled devices, Tree always ignores metaKey.
        </p>
        <p>In multiple selection mode, value binding should be a key-value pair where key is the node key and value is a boolean to indicate selection.</p>
    </DocSectionText>
    <div class="card flex flex-col items-center justify-center">
        <div class="flex items-center mb-6 gap-2">
            <ToggleSwitch v-model="checked" inputId="input-metakey" />
            <label for="input-metakey">MetaKey</label>
        </div>
        <Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="multiple" class="w-full md:w-[30rem]" :metaKeySelection="checked"></Tree>
    </div>
    <DocSectionCode :code="code" v-bind="$attrs" :service="['NodeService']" />
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            checked: false,
            nodes: null,
            selectedKey: null,
            code: {
                basic: `
<Tree v-model:selectionKeys="selectedKey" :value="nodes" class="w-full md:w-[30rem]"
    selectionMode="multiple" :metaKeySelection="checked"></Tree>
`,
                options: `
<template>
    <div class="card flex flex-col items-center justify-center">
        <div class="flex items-center mb-6 gap-2">
            <ToggleSwitch v-model="checked" inputId="input-metakey" />
            <label for="input-metakey">MetaKey</label>
        </div>
        <Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="multiple" class="w-full md:w-[30rem]" :metaKeySelection="checked"></Tree>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            checked: false,
            nodes: null,
            selectedKey: null
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
    <div class="card flex flex-col items-center justify-center">
        <div class="flex items-center mb-6 gap-2">
            <ToggleSwitch v-model="checked" inputId="input-metakey" />
            <label for="input-metakey">MetaKey</label>
        </div>
        <Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="multiple" class="w-full md:w-[30rem]" :metaKeySelection="checked"></Tree>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

const nodes = ref(null);
const selectedKey = ref(null);
const checked = ref(false);

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
