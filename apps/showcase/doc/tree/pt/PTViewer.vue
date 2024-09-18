<template>
    <DocSectionText v-bind="$attrs" />
    <DocPTViewer :docs="ptViewerDoc">
        <Tree v-model:selectionKeys="selectedKey" filter :value="nodes" selectionMode="checkbox" class="w-full md:w-[30rem]"></Tree>
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            selectedKey: null,
            ptViewerDoc: [
                {
                    data: getPTOptions('Tree'),
                    key: 'Tree'
                }
            ]
        };
    },
    mounted() {
        NodeService.getTreeNodes().then((data) => (this.nodes = data));
    }
};
</script>
