<template>
    <DocSectionText v-bind="$attrs">
        <p>
            More than one node is selectable by setting <i>selectionMode</i> to <i>multiple</i>. By default in multiple selection mode, metaKey press (e.g. <i>⌘</i>) is necessary to add to existing selections however this can be configured with
            disabling the <i>metaKeySelection</i> property. Note that in touch enabled devices, Tree always ignores metaKey.
        </p>
        <p>In multiple selection mode, value binding should be a key-value pair where key is the node key and value is a boolean to indicate selection.</p>
    </DocSectionText>
    <div class="card flex flex-column align-items-center justify-content-center">
        <div class="flex align-items-center mb-4 gap-2">
            <InputSwitch v-model="checked" inputId="input-metakey" />
            <label for="input-metakey">MetaKey</label>
        </div>
        <Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="multiple" class="w-full md:w-30rem" :metaKeySelection="checked"></Tree>
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
<Tree v-model:selectionKeys="selectedKey" :value="nodes" class="w-full md:w-30rem" 
    selectionMode="multiple" :metaKeySelection="checked"></Tree>`,
                options: `
<template>
    <div class="card flex flex-column align-items-center justify-content-center">
        <div class="flex align-items-center mb-4 gap-2">
            <InputSwitch v-model="checked" inputId="input-metakey" />
            <label for="input-metakey">MetaKey</label>
        </div>
        <Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="multiple" class="w-full md:w-30rem" :metaKeySelection="checked"></Tree>
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
<\/script>`,
                composition: `
<template>
    <div class="card flex flex-column align-items-center justify-content-center">
        <div class="flex align-items-center mb-4 gap-2">
            <InputSwitch v-model="checked" inputId="input-metakey" />
            <label for="input-metakey">MetaKey</label>
        </div>
        <Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="multiple" class="w-full md:w-30rem" :metaKeySelection="checked"></Tree>
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
<\/script>`
            }
        };
    },
    mounted() {
        NodeService.getTreeNodes().then((data) => (this.nodes = data));
    }
};
</script>
