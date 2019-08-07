<template>
    <div>
        <TreeTableSubMenu />

        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TreeTable - Responsive</h1>
                <p>TreeTable display can be optimized according for different screen sizes, this example demonstrates a demo where columns are stacked on small screens.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <TreeTable :value="nodes" class="p-treetable-responsive">
                <template #header>
                    Responsive
                </template>
                <Column field="name" header="Name" :expander="true">
                     <template #body="slotProps">
                        {{slotProps.node.data.name}}
                        <span class="sm-visible">{{slotProps.node.data.size}}</span>
                        <span class="sm-visible">{{slotProps.node.data.type}}</span>
                    </template>
                </Column>
                <Column field="size" header="Size" headerClass="sm-invisible" bodyClass="sm-invisible"></Column>
                <Column field="type" header="Type" headerClass="sm-invisible" bodyClass="sm-invisible"></Column>
            </TreeTable>
        </div>
    </div>
</template>

<script>
import NodeService from '../../service/NodeService';
import TreeTableSubMenu from './TreeTableSubMenu';

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
        this.nodeService.getTreeTableNodes().then(data => this.nodes = data);
    },
    components: {
        'TreeTableSubMenu': TreeTableSubMenu
    }
}
</script>

<style scoped lang="scss">
.sm-visible {
    display: none;
}

@media screen and (max-width: 40em) {
    /deep/ {
        .sm-invisible {
            display: none;
        }

        .sm-visible {
            display: inline;
            margin-right: .5em;
        }
    }
}
</style>