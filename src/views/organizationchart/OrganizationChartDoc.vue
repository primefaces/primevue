<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import OrganizationChart from 'primevue/organizationchart';
</CodeHighlight>

				<h3>Getting Started</h3>
				<p>OrganizationChart requires an OrganizationChartNode instance as its root value and at least one template to display node content where node instance is passed via slotProps.</p>
<CodeHighlight>
<template v-pre>
 &lt;OrganizationChart :value="data"&gt;
    &lt;template #default="slotProps"&gt;
        &lt;span&gt;&#123;&#123;slotProps.node.data.label&#125;&#125;&lt;/span&gt;
    &lt;/template&gt;
&lt;/OrganizationChart&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
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
</CodeHighlight>

                <h3>OrganizationChartNode</h3>
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

                <h3>Collapsible Nodes</h3>
                <p>All nodes are expanded by default however they can be expanded and collapsed when <i>collapsible</i> is enabled. The optional <i>collapsedKeys</i> property defines the keys
                    that are collapsed, this property is two-way binding enabled so that user changes or programmatic changes are reflected to the UI.
                </p>
                <p>Example below displays the root of chart in previous example as collapsed. Notice that the collapsedKeys is a map whose key is the 
                    key of the node and value is true.
                </p>
<CodeHighlight>
<template v-pre>
 &lt;OrganizationChart :value="data" :collapsible="true" :collapsedKeys="collapsedKeys"&gt;
    &lt;template #default="slotProps"&gt;
        &lt;span&gt;&#123;&#123;slotProps.node.data.label&#125;&#125;&lt;/span&gt;
    &lt;/template&gt;
&lt;/OrganizationChart&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
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
</CodeHighlight>

				<h3>Selection</h3>
				<p>Selection is enabled by defining the <i>selectionMode</i> to either "single" or "multiple" and specifying the <i>selectionKeys</i> with the sync operator. Note that
                selection on a particular node can be disabled if the <i>selectable</i> is false on the node instance.</p>
<CodeHighlight>
<template v-pre>
 &lt;OrganizationChart :value="data" selecionMode="single" :selectionKeys.sync="selectionKeys"&gt;
    &lt;template #default="slotProps"&gt;
        &lt;span&gt;&#123;&#123;slotProps.node.data.label&#125;&#125;&lt;/span&gt;
    &lt;/template&gt;
&lt;/OrganizationChart&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
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
</CodeHighlight>

                <h3>Templating</h3>
                <p>The <i>type</i> property of an OrganizationChartNode is used to map a template to a node. If it is undefined, the default template is used.</p>

<CodeHighlight>
<template v-pre>
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
</CodeHighlight>

<CodeHighlight lang="javascript">
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
</CodeHighlight>

				<h3>Properties</h3>
                <p>Any attribute such as style and class are passed to the main container element. Following are the additional properties to configure the component.</p>
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
                                <td>OrganizationChartNode</td>
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

				<h3>Events</h3>
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
                                <td>noode-select</td>
                                <td>node: Node instance</td>
                                <td>Callback to invoke when a node is selected.</td>
                            </tr>
                            <tr>
                                <td>noode-unselect</td>
                                <td>node: Node instance</td>
                                <td>Callback to invoke when a node is unselected.</td>
                            </tr>
                            <tr>
                                <td>noode-expand</td>
                                <td>node: Node instance</td>
                                <td>Callback to invoke when a node is expanded.</td>
                            </tr>
                            <tr>
                                <td>noode-collapse</td>
                                <td>node: Node instance</td>
                                <td>Callback to invoke when a node is collapsed.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h3>Styling</h3>
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

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/organizationchart" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;div&gt;
    &lt;div class="content-section introduction"&gt;
        &lt;div class="feature-intro"&gt;
            &lt;h1&gt;OrganizationChart&lt;/h1&gt;
            &lt;p&gt;OrganizationChart visualizes hierarchical organization data.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="content-section implementation"&gt;
        &lt;h3&gt;Advanced&lt;/h3&gt;
        &lt;OrganizationChart :value="data1" :collapsible="true" class="company" selectionMode="single" :selectionKeys.sync="selection"
            @node-select="onNodeSelect" @node-unselect="onNodeUnselect" @node-collapse="onNodeCollapse" @node-expand="onNodeExpand"&gt;
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

        &lt;h3&gt;Basic&lt;/h3&gt;
        &lt;OrganizationChart :value="data2"&gt;
            &lt;template #default="slotProps"&gt;
                &lt;span&gt;&#123;&#123;slotProps.node.data.label&#125;&#125;&lt;/span&gt;
            &lt;/template&gt;
        &lt;/OrganizationChart&gt;
    &lt;/div&gt;
&lt;/div&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
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
                            data: {label: 'R&amp;D'},
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
</CodeHighlight>

<CodeHighlight lang="scss">
/deep/ .p-organizationchart {
    .p-person {
        padding: 0;
        border: 0 none;
    }

    .node-header, .node-content {
        padding: .5em .7em;
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

    .p-person .p-node-toggler {
        color: #495ebb !important;
    }

    .department-cto .p-node-toggler {
        color: #8a0a39 !important;
    }
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>