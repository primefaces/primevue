<template>
	<AppDoc name="OrganizationChartDemo" :sources="sources" github="organizationchart/OrganizationChartDemo.vue">
        <h5>Import via Module</h5>
<pre v-code.script><code>
import OrganizationChart from 'primevue/organizationchart';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/organizationchart/organizationchart.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>OrganizationChart requires an OrganizationChartNode instance as its root value and at least one template to display node content where node instance is passed via slotProps.</p>
<pre v-code><code><template v-pre>
 &lt;OrganizationChart :value="data"&gt;
    &lt;template #default="slotProps"&gt;
        &lt;span&gt;&#123;&#123;slotProps.node.data.label&#125;&#125;&lt;/span&gt;
    &lt;/template&gt;
&lt;/OrganizationChart&gt;
</template>
</code></pre>

<pre v-code.script><code>
export default {
    data() {
        return {
            data: {
                key: '0',
                data: {label: 'F.C. Barcelona'},
                children: [
                    {
                        key: '0_0',
                        data: {label: 'F.C. Barcelona'},
                        children: [
                            {
                                key: '0_0_0',
                                data: {label: 'Chelsea F.C.'}
                            },
                            {
                                key: '0_0_1',
                                data: {label: 'F.C. Barcelona'}
                            }
                        ]
                    },
                    {
                        key: '0_1',
                        data: {label: 'Real Madrid'},
                        children: [
                            {
                                key: '0_1_0',
                                data: {label: 'Bayern Munich'}
                            },
                            {
                                key: '0_1_1',
                                data: {label: 'Real Madrid'}
                            }
                        ]
                    }
                ]
            }
        }
    }
}

</code></pre>

        <h5>OrganizationChartNode</h5>
        <p>API of the OrganizationChartNode has the properties below.</p>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>key</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Unique identifier of the node. (required)</td>
                    </tr>
                    <tr>
                        <td>type</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Type of the node to match a template.</td>
                    </tr>
                    <tr>
                        <td>styleClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of the node content.</td>
                    </tr>
                    <tr>
                        <td>data</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Data represented by the node.</td>
                    </tr>
                    <tr>
                        <td>selectable</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Whether node is selectable when selection is enabled.</td>
                    </tr>
                    <tr>
                        <td>collapsible</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Whether node is collapsible when node expansion is enabled.</td>
                    </tr>
                    <tr>
                        <td>children</td>
                        <td>array</td>
                        <td>null</td>
                        <td>Children nodes array.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5>Collapsible Nodes</h5>
        <p>All nodes are expanded by default however they can be expanded and collapsed when <i>collapsible</i> is enabled. The optional <i>collapsedKeys</i> property defines the keys
            that are collapsed, this property is two-way binding enabled so that user changes or programmatic changes are reflected to the UI.
        </p>
        <p>Example below displays the root of chart in previous example as collapsed. Notice that the collapsedKeys is a map whose key is the
            key of the node and value is true.
        </p>
<pre v-code><code><template v-pre>
 &lt;OrganizationChart :value="data" :collapsible="true" :collapsedKeys="collapsedKeys"&gt;
    &lt;template #default="slotProps"&gt;
        &lt;span&gt;&#123;&#123;slotProps.node.data.label&#125;&#125;&lt;/span&gt;
    &lt;/template&gt;
&lt;/OrganizationChart&gt;
</template>
</code></pre>

<pre v-code.script><code>
export default {
    data() {
        return {
            collapsedKeys: {
                '0': true
            },
            data: {
                key: '0',
                data: {label: 'F.C. Barcelona'},
                children: [
                    {
                        key: '0_0',
                        data: {label: 'F.C. Barcelona'},
                        children: [
                            {
                                key: '0_0_0',
                                data: {label: 'Chelsea F.C.'}
                            },
                            {
                                key: '0_0_1',
                                data: {label: 'F.C. Barcelona'}
                            }
                        ]
                    },
                    {
                        key: '0_1',
                        data: {label: 'Real Madrid'},
                        children: [
                            {
                                key: '0_1_0',
                                data: {label: 'Bayern Munich'}
                            },
                            {
                                key: '0_1_1',
                                data: {label: 'Real Madrid'}
                            }
                        ]
                    }
                ]
            }
        }
    }
}

</code></pre>

		<h5>Selection</h5>
		<p>Selection is enabled by defining the <i>selectionMode</i> to either "single" or "multiple" and specifying the <i>selectionKeys</i> with the v-model directive. Note that
        selection on a particular node can be disabled if the <i>selectable</i> is false on the node instance.</p>
<pre v-code><code><template v-pre>
 &lt;OrganizationChart :value="data" selecionMode="single" v-model:selectionKeys="selectionKeys"&gt;
    &lt;template #default="slotProps"&gt;
        &lt;span&gt;&#123;&#123;slotProps.node.data.label&#125;&#125;&lt;/span&gt;
    &lt;/template&gt;
&lt;/OrganizationChart&gt;
</template>
</code></pre>

<pre v-code.script><code>
export default {
    data() {
        return {
            selectionKeys: null,
            data: {
                key: '0',
                data: {label: 'F.C. Barcelona'},
                children: [
                    {
                        key: '0_0',
                        data: {label: 'F.C. Barcelona'},
                        children: [
                            {
                                key: '0_0_0',
                                data: {label: 'Chelsea F.C.'}
                            },
                            {
                                key: '0_0_1',
                                data: {label: 'F.C. Barcelona'}
                            }
                        ]
                    },
                    {
                        key: '0_1',
                        data: {label: 'Real Madrid'},
                        children: [
                            {
                                key: '0_1_0',
                                data: {label: 'Bayern Munich'}
                            },
                            {
                                key: '0_1_1',
                                data: {label: 'Real Madrid'}
                            }
                        ]
                    }
                ]
            }
        }
    }
}

</code></pre>

        <h5>Templating</h5>
        <p>The <i>type</i> property of an OrganizationChartNode is used to map a template to a node. If it is undefined, the default template is used.</p>

<pre v-code><code><template v-pre>
&lt;OrganizationChart :value="data"&gt;
    &lt;template #person="slotProps"&gt;
        &lt;div class="node-header ui-corner-top"&gt;&#123;&#123;slotProps.node.data.label&#125;&#125;&lt;/div&gt;
        &lt;div class="node-content"&gt;
            &lt;img :src="'demo/images/organization/' + slotProps.node.data.avatar" width="32"&gt;
            &lt;div&gt;&#123;&#123;slotProps.node.data.name&#125;&#125;&lt;/div&gt;
        &lt;/div&gt;
    &lt;/template&gt;
    &lt;template #default="slotProps"&gt;
        &lt;span&gt;&#123;&#123;slotProps.node.data.label&#125;&#125;&lt;/span&gt;
    &lt;/template&gt;
&lt;/OrganizationChart&gt;
</template>
</code></pre>

<pre v-code.script><code>
export default {
    data() {
        return {
            data: {
                key: '0',
                type: 'person',
                styleClass: 'p-person',
                data: {label: 'CEO', name: 'Walter White', avatar: 'walter.jpg'},
                children: [
                    {
                        key: '0_0',
                        type: 'person',
                        styleClass: 'p-person',
                        data: {label: 'CFO', name:'Saul Goodman', avatar: 'saul.jpg'},
                        children:[{
                            key: '0_0_0',
                            data: {label: 'Tax'},
                            selectable: false,
                            styleClass: 'department-cfo'
                        },
                        {
                            key: '0_0_1',
                            data: {label: 'Legal'},
                            selectable: false,
                            styleClass: 'department-cfo'
                        }],
                    },
                    {
                        key: '0_1',
                        type: 'person',
                        styleClass: 'p-person',
                        data: {label: 'COO', name:'Mike E.', avatar: 'mike.jpg'},
                        children:[{
                            key: '0_1_0',
                            data: {label: 'Operations'},
                            selectable: false,
                            styleClass: 'department-coo'
                        }]
                    },
                    {
                        key: '0_2',
                        type: 'person',
                        styleClass: 'p-person',
                        data: {label: 'CTO', name:'Jesse Pinkman', avatar: 'jesse.jpg'},
                        children:[{
                            key: '0_2_0',
                            data: {label: 'Development'},
                            selectable: false,
                            styleClass: 'department-cto',
                            children:[{
                                key: '0_2_0_0',
                                data: {label: 'Analysis'},
                                selectable: false,
                                styleClass: 'department-cto'
                            },
                            {
                                key: '0_2_0_1',
                                data: {label: 'Front End'},
                                selectable: false,
                                styleClass: 'department-cto'
                            },
                            {
                                key: '0_2_0_2',
                                data: {label: 'Back End'},
                                selectable: false,
                                styleClass: 'department-cto'
                            }]
                        },
                        {
                            key: '0_2_1',
                            data: {label: 'QA'},
                            selectable: false,
                            styleClass: 'department-cto'
                        },
                        {
                            key: '0_2_2',
                            data: {label: 'R&amp;D'},
                            selectable: false,
                            styleClass: 'department-cto'
                        }]
                    }
                ]
            }
        }
    }
}

</code></pre>

		<h5>Properties</h5>
        <p>Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.</p>
		<div class="doc-tablewrapper">
			<table class="doc-table">
				<thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
				</thead>
				<tbody>
                    <tr>
                        <td>value</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Value of the component.</td>
                    </tr>
                    <tr>
                        <td>selectionKeys</td>
                        <td>object</td>
                        <td>null</td>
                        <td>A map instance of key-value pairs to represented the selected nodes.</td>
                    </tr>
                    <tr>
                        <td>selectionMode</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Type of the selection, valid values are "single" and "multiple".</td>
                    </tr>
                    <tr>
                        <td>collapsible</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Whether the nodes can be expanded or toggled.</td>
                    </tr>
                    <tr>
                        <td>collapsedKeys</td>
                        <td>object</td>
                        <td>null</td>
                        <td>A map instance of key-value pairs to represented the collapsed nodes.</td>
                    </tr>
				</tbody>
			</table>
		</div>

		<h5>Events</h5>
		<div class="doc-tablewrapper">
			<table class="doc-table">
				<thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                        <th>Description</th>
                    </tr>
				</thead>
				<tbody>
                    <tr>
                        <td>node-select</td>
                        <td>node: Node instance</td>
                        <td>Callback to invoke when a node is selected.</td>
                    </tr>
                    <tr>
                        <td>node-unselect</td>
                        <td>node: Node instance</td>
                        <td>Callback to invoke when a node is unselected.</td>
                    </tr>
                    <tr>
                        <td>node-expand</td>
                        <td>node: Node instance</td>
                        <td>Callback to invoke when a node is expanded.</td>
                    </tr>
                    <tr>
                        <td>node-collapse</td>
                        <td>node: Node instance</td>
                        <td>Callback to invoke when a node is collapsed.</td>
                    </tr>
				</tbody>
			</table>
		</div>

		<h5>Styling</h5>
		<p>Following is the list of structural style classes, for theming classes visit <router-link to="/theming">theming</router-link> page.</p>
		<div class="doc-tablewrapper">
			<table class="doc-table">
				<thead>
                    <tr>
                        <th>Name</th>
                        <th>Element</th>
                    </tr>
				</thead>
				<tbody>
                    <tr>
                        <td>p-organizationchart</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-organizationchart-table</td>
                        <td>Table container of a node.</td>
                    </tr>
                    <tr>
                        <td>p-organizationchart-lines</td>
                        <td>Connector lines container.</td>
                    </tr>
                    <tr>
                        <td>p-organizationchart-nodes</td>
                        <td>Contained of node children.</td>
                    </tr>
                    <tr>
                        <td>p-organizationchart-line-right</td>
                        <td>Right side line of a node connector.</td>
                    </tr>
                    <tr>
                        <td>p-organizationchart-line-left</td>
                        <td>Left side line of a node connector.</td>
                    </tr>
                    <tr>
                        <td>p-organizationchart-line-top</td>
                        <td>Top side line of a node connector.</td>
                    </tr>
				</tbody>
			</table>
		</div>

		<h5>Dependencies</h5>
		<p>None.</p>
    </AppDoc>
</template>

<script>
export default {
    data() {
        return {
            sources: {
                'options-api': {
                    tabName: 'Options API Source',
                    content: `
<template>
    <div>
        <Toast />

        <div class="card">
            <h5>Advanced</h5>
            <OrganizationChart :value="data1" :collapsible="true" class="company" selectionMode="single" v-model:selectionKeys="selection"
                @nodeSelect="onNodeSelect" @nodeUnselect="onNodeUnselect" @nodeCollapse="onNodeCollapse" @nodeExpand="onNodeExpand">
                <template #person="slotProps">
                    <div class="node-header ui-corner-top">{{slotProps.node.data.label}}</div>
                    <div class="node-content">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="32">
                        <div>{{slotProps.node.data.name}}</div>
                    </div>
                </template>
                <template #default="slotProps">
                    <span>{{slotProps.node.data.label}}</span>
                </template>
            </OrganizationChart>
        </div>

        <div class="card">
            <h5>Basic</h5>
            <OrganizationChart :value="data2">
                <template #default="slotProps">
                    <span>{{slotProps.node.data.label}}</span>
                </template>
            </OrganizationChart>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data1: {
                key: '0',
                type: 'person',
                styleClass: 'p-person',
                data: {label: 'CEO', name: 'Walter White', avatar: 'walter.jpg'},
                children: [
                    {
                        key: '0_0',
                        type: 'person',
                        styleClass: 'p-person',
                        data: {label: 'CFO', name:'Saul Goodman', avatar: 'saul.jpg'},
                        children:[{
                            key: '0_0_0',
                            data: {label: 'Tax'},
                            selectable: false,
                            styleClass: 'department-cfo'
                        },
                        {
                            key: '0_0_1',
                            data: {label: 'Legal'},
                            selectable: false,
                            styleClass: 'department-cfo'
                        }],
                    },
                    {
                        key: '0_1',
                        type: 'person',
                        styleClass: 'p-person',
                        data: {label: 'COO', name:'Mike E.', avatar: 'mike.jpg'},
                        children:[{
                            key: '0_1_0',
                            data: {label: 'Operations'},
                            selectable: false,
                            styleClass: 'department-coo'
                        }]
                    },
                    {
                        key: '0_2',
                        type: 'person',
                        styleClass: 'p-person',
                        data: {label: 'CTO', name:'Jesse Pinkman', avatar: 'jesse.jpg'},
                        children:[{
                            key: '0_2_0',
                            data: {label: 'Development'},
                            selectable: false,
                            styleClass: 'department-cto',
                            children:[{
                                key: '0_2_0_0',
                                data: {label: 'Analysis'},
                                selectable: false,
                                styleClass: 'department-cto'
                            },
                            {
                                key: '0_2_0_1',
                                data: {label: 'Front End'},
                                selectable: false,
                                styleClass: 'department-cto'
                            },
                            {
                                key: '0_2_0_2',
                                data: {label: 'Back End'},
                                selectable: false,
                                styleClass: 'department-cto'
                            }]
                        },
                        {
                            key: '0_2_1',
                            data: {label: 'QA'},
                            selectable: false,
                            styleClass: 'department-cto'
                        },
                        {
                            key: '0_2_2',
                            data: {label: 'R&D'},
                            selectable: false,
                            styleClass: 'department-cto'
                        }]
                    }
                ]
            },
            data2 : {
                key: '0',
                data: {label: 'F.C. Barcelona'},
                children: [
                    {
                        key: '0_0',
                        data: {label: 'F.C. Barcelona'},
                        children: [
                            {
                                key: '0_0_0',
                                data: {label: 'Chelsea F.C.'}
                            },
                            {
                                key: '0_0_1',
                                data: {label: 'F.C. Barcelona'}
                            }
                        ]
                    },
                    {
                        key: '0_1',
                        data: {label: 'Real Madrid'},
                        children: [
                            {
                                key: '0_1_0',
                                data: {label: 'Bayern Munich'}
                            },
                            {
                                key: '0_1_1',
                                data: {label: 'Real Madrid'}
                            }
                        ]
                    }
                ]
            },
            selection: {}
        }
    },
    methods: {
        onNodeSelect(node) {
            this.$toast.add({severity:'success', summary: 'Node Selected', detail: node.data.label, life: 3000});
        },
        onNodeUnselect(node) {
            this.$toast.add({severity:'success', summary: 'Node Unselected', detail: node.data.label, life: 3000});
        },
        onNodeExpand(node) {
            this.$toast.add({severity:'success', summary: 'Node Expanded', detail: node.data.label, life: 3000});
        },
        onNodeCollapse(node) {
            this.$toast.add({severity:'success', summary: 'Node Collapsed', detail: node.data.label, life: 3000});
        }
    }
}
<\\/script>

<style scoped lang="scss">
::v-deep(.p-organizationchart) {
    .p-person {
        padding: 0;
        border: 0 none;
    }

    .node-header, .node-content {
        padding: .5em .7rem;
    }

    .node-header {
        background-color: #495ebb;
        color: #ffffff;
    }

    .node-content {
        text-align: center;
        border: 1px solid #495ebb;
    }

    .node-content img {
        border-radius: 50%;
    }

    .department-cfo {
        background-color: #7247bc;
        color: #ffffff;
    }

    .department-coo {
        background-color: #a534b6;
        color: #ffffff;
    }

    .department-cto {
        background-color: #e9286f;
        color: #ffffff;
    }
}
</style>`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
   <div>
        <Toast />

        <div class="card">
            <h5>Advanced</h5>
            <OrganizationChart :value="data1" :collapsible="true" class="company" selectionMode="single" v-model:selectionKeys="selection"
                @nodeSelect="onNodeSelect" @nodeUnselect="onNodeUnselect" @nodeCollapse="onNodeCollapse" @nodeExpand="onNodeExpand">
                <template #person="slotProps">
                    <div class="node-header ui-corner-top">{{slotProps.node.data.label}}</div>
                    <div class="node-content">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="32">
                        <div>{{slotProps.node.data.name}}</div>
                    </div>
                </template>
                <template #default="slotProps">
                    <span>{{slotProps.node.data.label}}</span>
                </template>
            </OrganizationChart>
        </div>

        <div class="card">
            <h5>Basic</h5>
            <OrganizationChart :value="data2">
                <template #default="slotProps">
                    <span>{{slotProps.node.data.label}}</span>
                </template>
            </OrganizationChart>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';

export default {
    setup() {
        const toast = useToast();

        const data1 = ref({
            key: '0',
            type: 'person',
            styleClass: 'p-person',
            data: {label: 'CEO', name: 'Walter White', avatar: 'walter.jpg'},
            children: [
                {
                    key: '0_0',
                    type: 'person',
                    styleClass: 'p-person',
                    data: {label: 'CFO', name:'Saul Goodman', avatar: 'saul.jpg'},
                    children:[{
                        key: '0_0_0',
                        data: {label: 'Tax'},
                        selectable: false,
                        styleClass: 'department-cfo'
                    },
                    {
                        key: '0_0_1',
                        data: {label: 'Legal'},
                        selectable: false,
                        styleClass: 'department-cfo'
                    }],
                },
                {
                    key: '0_1',
                    type: 'person',
                    styleClass: 'p-person',
                    data: {label: 'COO', name:'Mike E.', avatar: 'mike.jpg'},
                    children:[{
                        key: '0_1_0',
                        data: {label: 'Operations'},
                        selectable: false,
                        styleClass: 'department-coo'
                    }]
                },
                {
                    key: '0_2',
                    type: 'person',
                    styleClass: 'p-person',
                    data: {label: 'CTO', name:'Jesse Pinkman', avatar: 'jesse.jpg'},
                    children:[{
                        key: '0_2_0',
                        data: {label: 'Development'},
                        selectable: false,
                        styleClass: 'department-cto',
                        children:[{
                        key: '0_2_0_0',
                            data: {label: 'Analysis'},
                            selectable: false,
                            styleClass: 'department-cto'
                        },
                        {
                            key: '0_2_0_1',
                            data: {label: 'Front End'},
                            selectable: false,
                            styleClass: 'department-cto'
                        },
                        {
                            key: '0_2_0_2',
                            data: {label: 'Back End'},
                            selectable: false,
                            styleClass: 'department-cto'
                        }]
                    },
                    {
                        key: '0_2_1',
                        data: {label: 'QA'},
                        selectable: false,
                        styleClass: 'department-cto'
                    },
                    {
                        key: '0_2_2',
                        data: {label: 'R&D'},
                        selectable: false,
                        styleClass: 'department-cto'
                    }]
                }
            ]
        });
        const data2 = ref({
            key: '0',
            data: {label: 'F.C. Barcelona'},
            children: [
                {
                    key: '0_0',
                    data: {label: 'F.C. Barcelona'},
                    children: [
                        {
                            key: '0_0_0',
                            data: {label: 'Chelsea F.C.'}
                        },
                        {
                            key: '0_0_1',
                            data: {label: 'F.C. Barcelona'}
                        }
                    ]
                },
                {
                    key: '0_1',
                    data: {label: 'Real Madrid'},
                    children: [
                        {
                            key: '0_1_0',
                            data: {label: 'Bayern Munich'}
                        },
                        {
                            key: '0_1_1',
                            data: {label: 'Real Madrid'}
                        }
                    ]
                }
            ]
        });
        const selection = ref({});
        const onNodeSelect = (node) => {
            toast.add({severity:'success', summary: 'Node Selected', detail: node.data.label, life: 3000});
        };
        const onNodeUnselect = (node) => {
            toast.add({severity:'success', summary: 'Node Unselected', detail: node.data.label, life: 3000});
        };
        const onNodeExpand = (node) => {
            toast.add({severity:'success', summary: 'Node Expanded', detail: node.data.label, life: 3000});
        };
        const onNodeCollapse = (node) => {
            toast.add({severity:'success', summary: 'Node Collapsed', detail: node.data.label, life: 3000});
        };

        return { data1, data2, selection, onNodeSelect, onNodeUnselect, onNodeExpand, onNodeCollapse }
    }
}
<\\/script>

<style scoped lang="scss">
::v-deep(.p-organizationchart) {
    .p-person {
        padding: 0;
        border: 0 none;
    }

    .node-header, .node-content {
        padding: .5em .7rem;
    }

    .node-header {
        background-color: #495ebb;
        color: #ffffff;
    }

    .node-content {
        text-align: center;
        border: 1px solid #495ebb;
    }

    .node-content img {
        border-radius: 50%;
    }

    .department-cfo {
        background-color: #7247bc;
        color: #ffffff;
    }

    .department-coo {
        background-color: #a534b6;
        color: #ffffff;
    }

    .department-cto {
        background-color: #e9286f;
        color: #ffffff;
    }
}
</style>`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/organizationchart/organizationchart.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/toast/toast.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/toastservice/toastservice.min.js"><\\/script>`,
                    content: `<div id="app">
                <p-toast></p-toast>

                <div class="card">
                    <h5>Advanced</h5>
                    <p-organizationchart :value="data1" :collapsible="true" class="company" selection-mode="single" v-model:selection-keys="selection"
                        @node-select="onNodeSelect" @node-unselect="onNodeUnselect" @node-collapse="onNodeCollapse" @node-expand="onNodeExpand">
                        <template #person="slotProps">
                            <div class="node-header ui-corner-top">{{slotProps.node.data.label}}</div>
                            <div class="node-content">
                                <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="32">
                                <div>{{slotProps.node.data.name}}</div>
                            </div>
                        </template>
                        <template #default="slotProps">
                            <span>{{slotProps.node.data.label}}</span>
                        </template>
                    </p-organizationchart>
                </div>

                <div class="card">
                    <h5>Basic</h5>
                    <p-organizationchart :value="data2">
                        <template #default="slotProps">
                            <span>{{slotProps.node.data.label}}</span>
                        </template>
                    </p-organizationchart>
                </div>
            </div>

            <script>
            const { createApp, ref } = Vue;
            const { useToast } = primevue.usetoast;

            const App = {
                setup() {
                    const toast = useToast();

                    const data1 = ref({
                        key: '0',
                        type: 'person',
                        styleClass: 'p-person',
                        data: {label: 'CEO', name: 'Walter White', avatar: 'walter.jpg'},
                        children: [
                            {
                                key: '0_0',
                                type: 'person',
                                styleClass: 'p-person',
                                data: {label: 'CFO', name:'Saul Goodman', avatar: 'saul.jpg'},
                                children:[{
                                    key: '0_0_0',
                                    data: {label: 'Tax'},
                                    selectable: false,
                                    styleClass: 'department-cfo'
                                },
                                {
                                    key: '0_0_1',
                                    data: {label: 'Legal'},
                                    selectable: false,
                                    styleClass: 'department-cfo'
                                }],
                            },
                            {
                                key: '0_1',
                                type: 'person',
                                styleClass: 'p-person',
                                data: {label: 'COO', name:'Mike E.', avatar: 'mike.jpg'},
                                children:[{
                                    key: '0_1_0',
                                    data: {label: 'Operations'},
                                    selectable: false,
                                    styleClass: 'department-coo'
                                }]
                            },
                            {
                                key: '0_2',
                                type: 'person',
                                styleClass: 'p-person',
                                data: {label: 'CTO', name:'Jesse Pinkman', avatar: 'jesse.jpg'},
                                children:[{
                                    key: '0_2_0',
                                    data: {label: 'Development'},
                                    selectable: false,
                                    styleClass: 'department-cto',
                                    children:[{
                                    key: '0_2_0_0',
                                        data: {label: 'Analysis'},
                                        selectable: false,
                                        styleClass: 'department-cto'
                                    },
                                    {
                                        key: '0_2_0_1',
                                        data: {label: 'Front End'},
                                        selectable: false,
                                        styleClass: 'department-cto'
                                    },
                                    {
                                        key: '0_2_0_2',
                                        data: {label: 'Back End'},
                                        selectable: false,
                                        styleClass: 'department-cto'
                                    }]
                                },
                                {
                                    key: '0_2_1',
                                    data: {label: 'QA'},
                                    selectable: false,
                                    styleClass: 'department-cto'
                                },
                                {
                                    key: '0_2_2',
                                    data: {label: 'R&D'},
                                    selectable: false,
                                    styleClass: 'department-cto'
                                }]
                            }
                        ]
                    });
                    const data2 = ref({
                        key: '0',
                        data: {label: 'F.C. Barcelona'},
                        children: [
                            {
                                key: '0_0',
                                data: {label: 'F.C. Barcelona'},
                                children: [
                                    {
                                        key: '0_0_0',
                                        data: {label: 'Chelsea F.C.'}
                                    },
                                    {
                                        key: '0_0_1',
                                        data: {label: 'F.C. Barcelona'}
                                    }
                                ]
                            },
                            {
                                key: '0_1',
                                data: {label: 'Real Madrid'},
                                children: [
                                    {
                                        key: '0_1_0',
                                        data: {label: 'Bayern Munich'}
                                    },
                                    {
                                        key: '0_1_1',
                                        data: {label: 'Real Madrid'}
                                    }
                                ]
                            }
                        ]
                    });
                    const selection = ref({});
                    const onNodeSelect = (node) => {
                        toast.add({severity:'success', summary: 'Node Selected', detail: node.data.label, life: 3000});
                    };
                    const onNodeUnselect = (node) => {
                        toast.add({severity:'success', summary: 'Node Unselected', detail: node.data.label, life: 3000});
                    };
                    const onNodeExpand = (node) => {
                        toast.add({severity:'success', summary: 'Node Expanded', detail: node.data.label, life: 3000});
                    };
                    const onNodeCollapse = (node) => {
                        toast.add({severity:'success', summary: 'Node Collapsed', detail: node.data.label, life: 3000});
                    };

                    return { data1, data2, selection, onNodeSelect, onNodeUnselect, onNodeExpand, onNodeCollapse }
                },
                components: {
                    "p-organizationchart": primevue.organizationchart,
                    "p-toast": primevue.toast
                }
            };

            createApp(App)
                .use(primevue.config.default)
                .use(primevue.toastservice)
                .mount("#app");
            <\\/script>

            <style>
            .p-organizationchart .p-person {
                padding: 0;
                border: 0 none;
            }

            .p-organizationchart .node-header, .p-organizationchart .node-content {
                padding: .5em .7rem;
            }

            .p-organizationchart .node-header {
                background-color: #495ebb;
                color: #ffffff;
            }

            .p-organizationchart .node-content {
                text-align: center;
                border: 1px solid #495ebb;
            }

            .p-organizationchart .node-content img {
                border-radius: 50%;
            }

            .p-organizationchart .department-cfo {
                background-color: #7247bc;
                color: #ffffff;
            }

            .p-organizationchart .department-coo {
                background-color: #a534b6;
                color: #ffffff;
            }

            .p-organizationchart .department-cto {
                background-color: #e9286f;
                color: #ffffff;
            }
            </style>`
                }
            }
        }
    }
}
</script>