<template>
    <DocPTViewer :docs="docs">
        <TreeTable :value="nodes" tableStyle="min-width: 50rem">
            <Column field="name" header="Name" expander style="width: 34%"></Column>
            <Column field="size" header="Size" style="width: 33%"></Column>
            <Column field="type" header="Type" style="width: 33%"></Column>
        </TreeTable>
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            docs: [
                {
                    data: getPTOptions('TreeTable'),
                    key: 'TreeTable'
                },
                {
                    data: getPTOptions('Column'),
                    key: 'Column'
                }
            ]
        };
    },
    mounted() {
        NodeService.getTreeTableNodes().then((data) => (this.nodes = data));
    }
};
</script>
