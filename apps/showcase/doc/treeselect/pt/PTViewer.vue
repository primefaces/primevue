<template>
    <DocPTViewer :docs="docs">
        <TreeSelect v-model="selectedValue" :options="nodes" selectionMode="checkbox" placeholder="Select Item" class="md:w-80 w-full" />
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';
import { NodeService } from '/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            selectedValue: null,
            docs: [
                {
                    data: getPTOptions('TreeSelect'),
                    key: 'TreeSelect'
                }
            ]
        };
    },
    mounted() {
        NodeService.getTreeNodes().then((data) => (this.nodes = data));
    }
};
</script>
