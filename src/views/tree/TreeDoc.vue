<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import Tree from 'primevue/tree';
</CodeHighlight>

				<h3>Getting Started</h3>
				<p>Tree component requires an array of TreeNode objects as its <i>value</i>.</p>

                <h3>TreeNode API</h3>
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
                                <td>Mandatory unique key of the node.</td>
                            </tr>
                            <tr>
                                <td>label</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Label of the node.</td>
                            </tr>
                            <tr>
                                <td>data</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Data represented by the node.</td>
                            </tr>
                            <tr>
                                <td>icon</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Icon of the node to display next to content.</td>
                            </tr>
                            <tr>
                                <td>children</td>
                                <td>TreeNode[]</td>
                                <td>null</td>
                                <td>An array of treenodes as children.</td>
                            </tr>
                            <tr>
                                <td>style</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Inline style of the node.</td>
                            </tr>
                            <tr>
                                <td>className</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the node.</td>
                            </tr>
                            <tr>
                                <td>draggable</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether the node is draggable when dragdrop is enabled.</td>
                            </tr>
                            <tr>
                                <td>droppable</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether the node is droppable when dragdrop is enabled.</td>
                            </tr>
                            <tr>
                                <td>selectable</td>
                                <td>boolean</td>
                                <td>null</td>
                                <td>Whether the node is selectable when selection mode is enabled.</td>
                            </tr>
                            <tr>
                                <td>leaf</td>
                                <td>boolean</td>
                                <td>null</td>
                                <td>Specifies if the node has children. Used in lazy loading.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p>Example below loads the tree nodes from a remote datasource via a service called NodeService.</p>
<CodeHighlight>
<template v-pre>
&lt;Tree :value="nodes"&gt;&lt;/Tree&gt;  
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
        this.nodeService.getTreeNodes().then(data => this.nodes = data);
    }
}
</CodeHighlight>

<CodeHighlight lang="javascript">
import axios from 'axios';

export default class NodeService {

    getTreeNodes() {
        return axios.get('demo/data/treenodes.json').then(res => res.data.root);
    }
    
}
</CodeHighlight>

                <p>The json response sample would be as following.</p>
<CodeHighlight lang="javascript">
{
    "root": [
        {
            "key": "0",
            "label": "Documents",
            "data": "Documents Folder",
            "icon": "pi pi-fw pi-inbox",
            "children": [{
                "key": "0-0",
                "label": "Work",
                "data": "Work Folder",
                "icon": "pi pi-fw pi-cog",
                "children": [{ "key": "0-0-0", "label": "Expenses.doc", "icon": "pi pi-fw pi-file", "data": "Expenses Document" }, { "key": "0-0-1", "label": "Resume.doc", "icon": "pi pi-fw pi-file", "data": "Resume Document" }]
            },
            {
                "key": "0-1",
                "label": "Home",
                "data": "Home Folder",
                "icon": "pi pi-fw pi-home",
                "children": [{ "key": "0-1-0", "label": "Invoices.txt", "icon": "pi pi-fw pi-file", "data": "Invoices for this month" }]
            }]
        },
        {
            "key": "1",
            "label": "Events",
            "data": "Events Folder",
            "icon": "pi pi-fw pi-calendar",
            "children": [
                { "key": "1-0", "label": "Meeting", "icon": "pi pi-fw pi-calendar-plus", "data": "Meeting" },
                { "key": "1-1", "label": "Product Launch", "icon": "pi pi-fw pi-calendar-plus", "data": "Product Launch" },
                { "key": "1-2", "label": "Report Review", "icon": "pi pi-fw pi-calendar-plus", "data": "Report Review" }]
        },
        {
            "key": "2",
            "label": "Movies",
            "data": "Movies Folder",
            "icon": "pi pi-fw pi-star",
            "children": [{
                "key": "2-0",
                "icon": "pi pi-fw pi-star",
                "label": "Al Pacino",
                "data": "Pacino Movies",
                "children": [{ "key": "2-0-0", "label": "Scarface", "icon": "pi pi-fw pi-video", "data": "Scarface Movie" }, { "key": "2-0-1", "label": "Serpico", "icon": "pi pi-fw pi-video", "data": "Serpico Movie" }]
            },
            {
                "key": "2-1",
                "label": "Robert De Niro",
                "icon": "pi pi-fw pi-star",
                "data": "De Niro Movies",
                "children": [{ "key": "2-1-0", "label": "Goodfellas", "icon": "pi pi-fw pi-video", "data": "Goodfellas Movie" }, { "key": "2-1-1", "label": "Untouchables", "icon": "pi pi-fw pi-video", "data": "Untouchables Movie" }]
            }]
        }
    ]
}
</CodeHighlight>

                <h3>Programmatic Control</h3>
                <p>Tree state can be controlled programmatically with the <i>expandedKeys</i> property that defines the keys
                    that are expanded. This property is a Map instance whose key is the key of a node and value is a boolean. Note that <i>expandedKeys</i> also supports two-way binding with the sync modifier.
                </p>

                <p>Example below expands and collapses all nodes with buttons.</p>
<CodeHighlight>
<template v-pre>
&lt;div&gt;
    &lt;Button type="button" icon="pi pi-plus" label="Expand All" @click="expandAll" /&gt;
    &lt;Button type="button" icon="pi pi-minus" label="Collapse All" @click="collapseAll" /&gt;
&lt;/div&gt;
&lt;Tree :value="nodes" :expandedKeys="expandedKeys"&gt;&lt;/Tree&gt; 
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import NodeService from '../../service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            expandedKeys: {}
        }
    },
    nodeService: null,
    created() {
        this.nodeService = new NodeService();
    },
    mounted() {
        this.nodeService.getTreeNodes().then(data => this.nodes = data);
    },
    methods: {
        expandAll() {
            for (let node of this.nodes) {
                this.expandNode(node);
            }

            this.expandedKeys = {...this.expandedKeys};
        },
        collapseAll() {
            this.expandedKeys = {};
        },
        expandNode(node) {
            this.expandedKeys[node.key] = true;
            if (node.children &amp;&amp; node.children.length) {
                for (let child of node.children) {
                    this.expandNode(child);
                }
            }
        }
    }
}
</CodeHighlight>

                <p>To display some nodes as expanded by default, simply add their keys to the map.</p>
<CodeHighlight lang="javascript">
import NodeService from '../../service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            expandedKeys: {}
        }
    },
    nodeService: null,
    created() {
        this.nodeService = new NodeService();
    },
    mounted() {
        this.nodeService.getTreeNodes().then(data => {
            this.nodes = data;
            this.expandedKeys[this.nodes[0].key] = true;
            this.expandedKeys[this.nodes[1].key] = true;
        });
    }
}
</CodeHighlight>

                <h3>Selection</h3>

                <h3>Templating</h3>

                <h3>Filtering</h3>

				<h3>Properties</h3>
                <p>Any valid attribute such as name and autofocus are passed to the underlying input element. Following is the additional property to configure the component.</p>
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
                                <td>array</td>
                                <td>null</td>
                                <td>An array of treenodes.</td>
                            </tr>
                            <tr>
                                <td>expandedKeys</td>
                                <td>array</td>
                                <td>null</td>
                                <td>A map of keys to represent the state of the tree expansion state in controlled mode.</td>
                            </tr>
                            <tr>
                                <td>selectionMode</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Defines the selection mode, valid values "single", "multiple", and "checkbox".</td>
                            </tr>
                            <tr>
                                <td>selectionKeys</td>
                                <td>any</td>
                                <td>null</td>
                                <td>A map of keys to control the selection state.</td>
                            </tr>
                            <tr>
                                <td>metaKeySelection</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item
                                    can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.</td>
                            </tr>
                            <tr>
                                <td>loading</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether to display loading indicator.</td>
                            </tr>
                            <tr>
                                <td>loadingIcon</td>
                                <td>string</td>
                                <td>pi pi-spin</td>
                                <td>Icon to display when tree is loading.</td>
                            </tr>
                            <tr>
                                <td>filter</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When specified, displays an input field to filter the items.</td>
                            </tr>
                            <tr>
                                <td>filterBy</td>
                                <td>string</td>
                                <td>label</td>
                                <td>When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.</td>
                            </tr>
                            <tr>
                                <td>filterMode</td>
                                <td>string</td>
                                <td>lenient</td>
                                <td>Mode for filtering valid values are "lenient" and "strict". Default is lenient.</td>
                            </tr>
                            <tr>
                                <td>filterPlaceholder</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Placeholder text to show when filter input is empty.</td>
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
                                <td>p-tree</td>
                                <td>Main container element</td>
                            </tr>
                            <tr>
                                <td>p-tree-horizontal</td>
                                <td>Main container element in horizontal mode</td>
                            </tr>
                            <tr>
                                <td>p-tree-container</td>
                                <td>Container of nodes</td>
                            </tr>
                            <tr>
                                <td>p-treenode</td>
                                <td>A treenode element</td>
                            </tr>
                            <tr>
                                <td>p-treenode-content</td>
                                <td>Content of a treenode</td>
                            </tr>
                            <tr>
                                <td>p-treenode-toggler</td>
                                <td>Toggle element</td>
                            </tr>
                            <tr>
                                <td>p-treenode-toggler-icon</td>
                                <td>Toggle icon</td>
                            </tr>
                            <tr>
                                <td>p-treenode-icon</td>
                                <td>Icon of a treenode</td>
                            </tr>
                            <tr>
                                <td>p-treenode-label</td>
                                <td>Label of a treenode</td>
                            </tr>
                            <tr>
                                <td>p-treenode-children</td>
                                <td>Container element for node children</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/tree" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;h3&gt;Basic&lt;/h3&gt;
&lt;Tree :value="nodes"&gt;&lt;/Tree&gt;

&lt;h3&gt;Programmatic Control&lt;/h3&gt;
&lt;div style="margin-bottom: 1em"&gt;
    &lt;Button type="button" icon="pi pi-plus" label="Expand All" @click="expandAll" /&gt;
    &lt;Button type="button" icon="pi pi-minus" label="Collapse All" @click="collapseAll" /&gt;
&lt;/div&gt;
&lt;Tree :value="nodes" :expandedKeys="expandedKeys"&gt;&lt;/Tree&gt;   
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import NodeService from '../../service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            expandedKeys: {}
        }
    },
    nodeService: null,
    created() {
        this.nodeService = new NodeService();
    },
    mounted() {
        this.nodeService.getTreeNodes().then(data => this.nodes = data);
    },
    methods: {
        expandAll() {
            for (let node of this.nodes) {
                this.expandNode(node);
            }

            this.expandedKeys = {...this.expandedKeys};
        },
        collapseAll() {
            this.expandedKeys = {};
        },
        expandNode(node) {
            this.expandedKeys[node.key] = true;
            if (node.children &amp;&amp; node.children.length) {
                for (let child of node.children) {
                    this.expandNode(child);
                }
            }
        }
    }
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>