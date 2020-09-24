<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TreeTable - Responsive</h1>
                <p>TreeTable display can be optimized according for different screen sizes, this example demonstrates a demo where columns are stacked on small screens.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
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

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;TreeTable :value="nodes" class="p-treetable-responsive"&gt;
    &lt;template #header&gt;
        Responsive
    &lt;/template&gt;
    &lt;Column field="name" header="Name" :expander="true"&gt;
            &lt;template #body="slotProps"&gt;
            &#123;&#123;slotProps.node.data.name&#125;&#125;
            &lt;span class="sm-visible"&gt;&#123;&#123;slotProps.node.data.size&#125;&#125;&lt;/span&gt;
            &lt;span class="sm-visible"&gt;&#123;&#123;slotProps.node.data.type&#125;&#125;&lt;/span&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="size" header="Size" headerClass="sm-invisible" bodyClass="sm-invisible"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type" headerClass="sm-invisible" bodyClass="sm-invisible"&gt;&lt;/Column&gt;
&lt;/TreeTable&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import NodeService from '../../service/NodeService';

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
    }
}
</CodeHighlight>

<CodeHighlight lang="css">
.sm-visible {
    display: none;
}

@media screen and (max-width: 40em) {
    ::v-deep(.sm-visible) {
        display: inline;
        margin-right: .5rem;
    }
}
</CodeHighlight>

                </TabPanel>
            </TabView>
        </div>
    </div>
</template>

<script>
import NodeService from '../../service/NodeService';

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
    }
}
</script>

<style scoped lang="scss">
.sm-visible {
    display: none;
}

@media screen and (max-width: 40em) {
    ::v-deep(.sm-invisible) {
        display: none;
    }

    ::v-deep(.sm-visible) {
        display: inline;
        margin-right: .5rem;
    }
}
</style>