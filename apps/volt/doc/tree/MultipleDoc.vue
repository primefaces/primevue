<template>
    <DocSectionText v-bind="$attrs">
        <p>
            More than one node is selectable by setting <i>selectionMode</i> to <i>multiple</i>. By default in multiple selection mode, metaKey press (e.g. <i>⌘</i>) is not necessary to add to existing selections. When the optional
            <i>metaKeySelection</i> is present, behavior is changed in a way that selecting a new node requires meta key to be present. Note that in touch enabled devices, Tree always ignores metaKey.
        </p>
        <p>In multiple selection mode, value binding should be a key-value pair where key is the node key and value is a boolean to indicate selection.</p>
    </DocSectionText>
    <div class="card">
        <div class="flex items-center mb-6 gap-2">
            <ToggleSwitch v-model="checked" inputId="input-metakey" />
            <label for="input-metakey">MetaKey</label>
        </div>
        <Tree v-model:selectionKeys="selectedKeys" :value="nodes" selectionMode="multiple" :metaKeySelection="checked" class="w-full md:w-[30rem]"></Tree>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import { NodeService } from '@/service/NodeService';
import ToggleSwitch from '@/volt/toggleswitch';
import Tree from '@/volt/tree';
import { onMounted, ref } from 'vue';

const nodes = ref(null);
const selectedKeys = ref(null);
const checked = ref(false);

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});

const code = ref(`
<template>
    <div class="card">
        <div class="flex items-center mb-6 gap-2">
            <ToggleSwitch v-model="checked" inputId="input-metakey" />
            <label for="input-metakey">MetaKey</label>
        </div>
        <Tree v-model:selectionKeys="selectedKeys" :value="nodes" selectionMode="multiple" :metaKeySelection="checked" class="w-full md:w-[30rem]"></Tree>
    </div>
</template>

<script setup>
import { NodeService } from '@/service/NodeService';
import Tree from '@/volt/tree';
import ToggleSwitch from '@/volt/toggleswitch';
import { onMounted, ref } from 'vue';

const nodes = ref(null);
const selectedKeys = ref(null);
const checked = ref(false);

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});
<\/script>
`);
</script>
