<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TreeTable - Responsive</h1>
                <p>TreeTable display can be optimized according for different screen sizes.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Scroll</h5>
                <p>Built-in responsiveness using the <b>responsiveLayout</b> property set to scroll.</p>
                <TreeTable :value="nodes" responsiveLayout="scroll">
                    <Column field="name" header="Name" :expander="true" style="min-width:200px"></Column>
                    <Column field="size" header="Size" style="min-width:200px"></Column>
                    <Column field="type" header="Type" style="min-width:200px"></Column>
                </TreeTable>
            </div>

            <div class="card">
                <h5>Custom</h5>
                <p>Custom implementation using media queries.</p>
                <TreeTable :value="nodes">
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
&lt;div class="card"&gt;
    &lt;h5&gt;Scroll&lt;/h5&gt;
    &lt;TreeTable :value="nodes" responsiveLayout="scroll"&gt;
        &lt;Column field="name" header="Name" :expander="true" style="min-width:200px"&gt;&lt;/Column&gt;
        &lt;Column field="size" header="Size" style="min-width:200px"&gt;&lt;/Column&gt;
        &lt;Column field="type" header="Type" style="min-width:200px"&gt;&lt;/Column&gt;
    &lt;/TreeTable&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
    &lt;h5>Custom&gt;&lt;/h5&gt;
    &lt;TreeTable :value="nodes"&gt;
        &lt;Column field="name" header="Name" :expander="true"&gt;
            &lt;template #body="slotProps"&gt;
                {{slotProps.node.data.name}}
                &lt;span class="sm-visible"&gt;{{slotProps.node.data.size}}&lt;/span&gt;
                &lt;span class="sm-visible"&gt;{{slotProps.node.data.type}}&lt;/span&gt;
            &lt;/template&gt;
        &lt;/Column&gt;
        &lt;Column field="size" header="Size" headerClass="sm-invisible" bodyClass="sm-invisible"&gt;&lt;/Column&gt;
        &lt;Column field="type" header="Type" headerClass="sm-invisible" bodyClass="sm-invisible"&gt;&lt;/Column&gt;
    &lt;/TreeTable&gt;
&lt;/div&gt;
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
    ::v-deep {
        .sm-invisible {
            display: none;
        }

        .sm-visible {
            display: inline;
            margin-right: .5rem;
        }
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
    ::v-deep {
        .sm-invisible {
            display: none;
        }

        .sm-visible {
            display: inline;
            margin-right: .5rem;
        }
    }
}
</style>