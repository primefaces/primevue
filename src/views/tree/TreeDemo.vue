<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Tree</h1>
                <p>Tree is used to display hierarchical data.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <Tree :value="nodes"></Tree>
        </div>

        <TreeDoc />
    </div>
</template>
<script>
import NodeService from '../../service/NodeService';
import TreeDoc from './TreeDoc';

export default {
    data() {
        return {
            nodes: null
        }
    },
    nodeService: null,
    created() {
        this.nodeService = new NodeService();
    },
    mounted() {
        this.nodeService.getTreeNodes().then(data => this.nodes = data);
    },
    components: {
        'TreeDoc': TreeDoc
    }
}
</script>