<template>
	<AppDoc name="TreeDemo" :sources="sources" :service="['NodeService']" :data="['treenodes']" github="tree/TreeDemo.vue">
        <h5>Import via Module</h5>
<pre v-code.script><code>
import Tree from 'primevue/tree';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>Tree component requires an array of TreeNode objects as its <i>value</i>.</p>

        <h5>TreeNode API utilized by the Tree</h5>
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
                        <td>type</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Type of the node to match a template.</td>
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
                        <td>styleClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of the node.</td>
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
<pre v-code><code><template v-pre>
&lt;Tree :value="nodes"&gt;&lt;/Tree&gt;
</template>
</code></pre>

<pre v-code.script><code>
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

</code></pre>

<pre v-code.script><code>
export default class NodeService {

    getTreeNodes() {
       return fetch('demo/data/treenodes.json').then(res => res.json())
                .then(d => d.root);
    }

}

</code></pre>

        <p>The json response sample would be as following.</p>
<pre v-code.script><code>
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
            "icon": "pi pi-fw pi-star-fill",
            "children": [{
                "key": "2-0",
                "icon": "pi pi-fw pi-star-fill",
                "label": "Al Pacino",
                "data": "Pacino Movies",
                "children": [{ "key": "2-0-0", "label": "Scarface", "icon": "pi pi-fw pi-video", "data": "Scarface Movie" }, { "key": "2-0-1", "label": "Serpico", "icon": "pi pi-fw pi-video", "data": "Serpico Movie" }]
            },
            {
                "key": "2-1",
                "label": "Robert De Niro",
                "icon": "pi pi-fw pi-star-fill",
                "data": "De Niro Movies",
                "children": [{ "key": "2-1-0", "label": "Goodfellas", "icon": "pi pi-fw pi-video", "data": "Goodfellas Movie" }, { "key": "2-1-1", "label": "Untouchables", "icon": "pi pi-fw pi-video", "data": "Untouchables Movie" }]
            }]
        }
    ]
}

</code></pre>

        <h5>Programmatic Control</h5>
        <p>Tree state can be controlled programmatically with the <i>expandedKeys</i> property that defines the keys
            that are expanded. This property is a Map instance whose key is the key of a node and value is a boolean. Note that <i>expandedKeys</i> also supports two-way binding with the v-model directive.
        </p>

        <p>Example below expands and collapses all nodes with buttons.</p>
<pre v-code><code><template v-pre>
&lt;div&gt;
    &lt;Button type="button" icon="pi pi-plus" label="Expand All" @click="expandAll" /&gt;
    &lt;Button type="button" icon="pi pi-minus" label="Collapse All" @click="collapseAll" /&gt;
&lt;/div&gt;
&lt;Tree :value="nodes" :expandedKeys="expandedKeys"&gt;&lt;/Tree&gt;
</template>
</code></pre>

<pre v-code.script><code>
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

</code></pre>

        <p>To display some nodes as expanded by default, simply add their keys to the map.</p>
<pre v-code.script><code>
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

</code></pre>

        <h5>Selection</h5>
        <p>Tree supports <b>single</b>, <b>multiple</b> and <b>checkbox</b> selection modes. Define the <i>selectionKeys</i> with the v-model directive and the <i>selectionMode</i> properties to enable the selection.
        By default in multiple selection mode, metaKey is necessary to add to existing selections however this can be configured with <i>metaKeySelection</i> property. Note that
        in touch enabled devices, Tree does not require metaKey. In addition selection on a particular node can be disabled if the <i>selectable</i> is false on the node instance.</p>

        <p>Similarly to the <i>expandedKeys</i>, <i>selectionKeys</i> is a Map instance whose key is the key of a node and value is a boolean in "single" and "multiple" cases. On the other hand
        in "checkbox" mode, instead of a boolean, value should be an object that has "checked" and "partialChecked" properties to represent the checked state of a node.</p>
<pre v-code><code><template v-pre>
&lt;h3&gt;Single Selection&lt;/h3&gt;
&lt;Tree :value="nodes" selectionMode="single" v-model:selectionKeys="selectedKey1"&gt;&lt;/Tree&gt;

&lt;h3&gt;Multiple Selection with MetaKey&lt;/h3&gt;
&lt;Tree :value="nodes" selectionMode="multiple" v-model:selectionKeys="selectedKeys1"&gt;&lt;/Tree&gt;

&lt;h3&gt;Multiple Selection without MetaKey&lt;/h3&gt;
&lt;Tree :value="nodes" selectionMode="multiple" v-model:selectionKeys="selectedKeys2" :metaKeySelection="false"&gt;&lt;/Tree&gt;

&lt;h3&gt;Checkbox Selection&lt;/h3&gt;
&lt;Tree :value="nodes" selectionMode="checkbox" v-model:selectionKeys="selectedKeys3"&gt;&lt;/Tree&gt;

&lt;h3&gt;Events&lt;/h3&gt;
&lt;Tree :value="nodes" selectionMode="single" v-model:selectionKeys="selectedKey2" :metaKeySelection="false"
    @node-select="onNodeSelect" @node-unselect="onNodeUnselect"&gt;&lt;/Tree&gt;
</template>
</code></pre>

<pre v-code.script><code>
import NodeService from '../../service/NodeService';

export default {
    data() {
        return {
            selectedKey1: null,
            selectedKey2: null,
            selectedKeys1: null,
            selectedKeys2: null,
            selectedKeys3: null,
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
    methods: {
        onNodeSelect(node) {
            this.$toast.add({severity:'success', summary: 'Node Selected', detail: node.label, life: 3000});
        },
        onNodeUnselect(node) {
            this.$toast.add({severity:'success', summary: 'Node Unselected', detail: node.label, life: 3000});
        }
    }
}

</code></pre>

        <p>To display some nodes as selected by default, simply add their keys to the map.</p>
<pre v-code.script><code>
import NodeService from '../../service/NodeService';

export default {
    data() {
        return {
            selectedKey1: null,
            selectedKey2: null,
            selectedKeys1: null,
            selectedKeys2: null,
            selectedKeys3: null,
            nodes: null
        }
    },
    nodeService: null,
    created() {
        this.nodeService = new NodeService();
    },
    mounted() {
        this.nodeService.getTreeNodes().then(data => {
            this.nodes = data;

            //single preselection
            this.selectedKey1[this.nodes[0].key] = true;

            //multiple preselection
            this.selectedKeys2[this.nodes[0].key] = true;
            this.selectedKeys2[this.nodes[1].key] = true;

            //checkbox preselection
            this.selectedKeys2[this.nodes[1].key] = {checked: true};
        });
    }
}

</code></pre>

        <h5>Lazy</h5>
        <p>Lazy Loading is handy to deal with huge datasets. Idea is instead of loading the whole tree, load child nodes on demand
            using expand expand. The important part is setting <i>leaf</i> to true on a node instance so that even without children,
            tree would render an expand icon. Example below uses an in memory collection to mimic a lazy loading scenario with timeouts.
        </p>

<pre v-code><code><template v-pre>
&lt;Tree :value="nodes" @node-expand="onNodeExpand" :loading="loading"&gt;&lt;/Tree&gt;
</template>
</code></pre>

<pre v-code.script><code>
import NodeService from '../../service/NodeService';

export default {
    data() {
        return {
            loading: false,
            nodes: null
        }
    },
    nodeService: null,
    created() {
        this.nodeService = new NodeService();
    },
    mounted() {
        this.loading = true;

        setTimeout(() => {
            this.nodes = this.initateNodes();
            this.loading = false;
        }, 2000);
    },
    methods: {
        onNodeExpand(node) {
            if (!node.children) {
                this.loading = true;

                setTimeout(() => {
                    let _node = {...node};
                    _node.children = [];

                    for (let i = 0; i &lt; 3; i++) {
                        _node.children.push({
                            key: node.key + '-' + i,
                            label: 'Lazy ' + node.label + '-' + i
                        });
                    }

                    let _nodes = {...this.nodes}
                    _nodes[parseInt(node.key, 10)] = _node;

                    this.nodes = _nodes;
                    this.loading = false;
                }, 500);
            }
        },
        initateNodes() {
            return [{
                key: '0',
                label: 'Node 0',
                leaf: false
            },
            {
                key: '1',
                label: 'Node 1',
                leaf: false
            },
            {
                key: '2',
                label: 'Node 2',
                leaf: false
            }];
        }
    }
}

</code></pre>

        <h5>Templating</h5>
        <p>The <i>type</i> property of a TreeNode is used to map a template to a node to create the node label. If it is undefined and no default template is available,
        label of the node is used.</p>
<pre v-code><code><template v-pre>
&lt;Tree :value="nodes"&gt;
    &lt;template #default="slotProps"&gt;
        &lt;b&gt;&#123;&#123;slotProps.node.label&#125;&#125;&lt;/b&gt;
    &lt;/template&gt;
    &lt;template #url="slotProps"&gt;
        &lt;a :href="slotProps.node.data"&gt;&#123;&#123;slotProps.node.label&#125;&#125;&lt;/a&gt;
    &lt;/template&gt;
&lt;/Tree&gt;
</template>
</code></pre>

<pre v-code.script><code>
export default {
    data() {
        return {
            nodes: [
                {
                    key: '0',
                    label: 'Introduction',
                    children: [
                        {key: '0-0', label: 'What is Vue.js?', data:'https://vuejs.org/v2/guide/#What-is-Vue-js', type: 'url'},
                        {key: '0-1', label: 'Getting Started', data: 'https://vuejs.org/v2/guide/#Getting-Started', type: 'url'},
                        {key: '0-2', label: 'Declarative Rendering', data:'https://vuejs.org/v2/guide/#Declarative-Rendering', type: 'url'},
                        {key: '0-3', label: 'Conditionals and Loops', data: 'https://vuejs.org/v2/guide/#Conditionals-and-Loops', type: 'url'}
                    ]
                },
                {
                    key: '1',
                    label: 'Components In-Depth',
                    children: [
                        {key: '1-0', label: 'Component Registration', data: 'https://vuejs.org/v2/guide/components-registration.html', type: 'url'},
                        {key: '1-1', llabel: 'Props', data: 'https://vuejs.org/v2/guide/components-props.html', type: 'url'},
                        {key: '1-2', llabel: 'Custom Events', data: 'https://vuejs.org/v2/guide/components-custom-events.html', type: 'url'},
                        {key: '1-3', llabel: 'Slots', data: 'https://vuejs.org/v2/guide/components-slots.html', type: 'url'}
                    ]
                }
            ]
        }
    }
}

</code></pre>

                <h5>Scrolling</h5>
                <p>Scrolling is used to preserve space as content of the tree is dynamic and enabled by <i>scrollHeight</i> property.</p>
<pre v-code><code><template v-pre>
&lt;Tree :value="nodes1" scrollHeight="200px"&gt;&lt;/Tree&gt;
</template>
</code></pre>

                <h5>Flex Scroll</h5>
                <p>In cases where viewport should adjust itself according to the table parent's height instead of a fixed viewport height, set <i>scrollHeight</i> option as <b>flex</b>. In example below,
                table is inside a Dialog where viewport size dynamically responds to the dialog size changes such as maximizing.</p>

<pre v-code><code><template v-pre>
&lt;Button type="button" icon="pi pi-external-link" label="View" @click="dialogVisible = true"&gt;&lt;/Button&gt;

&lt;Dialog header="Flex Scroll" v-model:visible="dialogVisible" :style="{width: '50vw'}" maximizable
    :contentStyle="{height: '300px'}" class="p-fluid"&gt;
    &lt;Tree :value="nodes2" scrollHeight="flex"&gt;&lt;/Tree&gt;
    &lt;template #footer&gt;
        &lt;Button type="button" icon="pi pi-check" @click="dialogVisible = false" class="p-button-text"&gt;&lt;/Button&gt;
    &lt;/template&gt;
&lt;/Dialog&gt;
</template>
</code></pre>

        <h5>Filtering</h5>
        <p>Filtering is enabled by setting the <i>filter</i> property to true, by default label property of a node
        is used to compare against the value in the text field, in order to customize which field(s) should be used during search, define the <i>filterBy</i> property as a comma separated list.</p>

        <p>In addition <i>filterMode</i> specifies the filtering strategy. In <b>lenient</b> mode when the query matches a node, children of the node are not searched further as all descendants of the node are included. On the other hand,
         in <b>strict</b> mode when the query matches a node, filtering continues on all descendants.</p>

<pre v-code><code><template v-pre>
&lt;h3&gt;Lenient Filter&lt;/h3&gt;
&lt;Tree :value="nodes" :filter="true" filterMode="lenient"&gt;&lt;/Tree&gt;

&lt;h3&gt;Strict Filter&lt;/h3&gt;
&lt;Tree :value="nodes" :filter="true" filterMode="strict"&gt;&lt;/Tree&gt;
</template>
</code></pre>

<pre v-code.script><code>
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
            if (node.children &lt;&lt; node.children.length) {
                this.expandedKeys[node.key] = true;

                for (let child of node.children) {
                    this.expandNode(child);
                }
            }
        }
    }
}

</code></pre>

		<h5>Properties</h5>
        <p>Any property such as style and class are passed to the underlying root element. Following is the additional property to configure the component.</p>
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
                        <td>A map of keys to represent the expansion state in controlled mode.</td>
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
                    <tr>
                        <td>filterLocale</td>
                        <td>string</td>
                        <td>undefined</td>
                        <td>Locale to use in filtering. The default locale is the host environment's current locale.</td>
                    </tr>
                    <tr>
                        <td>scrollHeight</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Height of the scroll viewport in fixed units or the "flex" keyword for a dynamic size.</td>
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
        <h5>Basic</h5>
        <Tree :value="nodes"></Tree>

        <h5>Programmatic Control</h5>
        <div style="margin-bottom: 1em">
            <Button type="button" icon="pi pi-plus" label="Expand All" @click="expandAll" />
            <Button type="button" icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
        </div>
        <Tree :value="nodes" :expandedKeys="expandedKeys"></Tree>
    </div>
</template>

<script>
import NodeService from './service/NodeService';

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
            if (node.children && node.children.length) {
                this.expandedKeys[node.key] = true;

                for (let child of node.children) {
                    this.expandNode(child);
                }
            }
        }
    }
}
<\\/script>

<style scoped>
.p-button {
    margin-right: .5rem;
}
</style>`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <h5>Basic</h5>
        <Tree :value="nodes"></Tree>

        <h5>Programmatic Control</h5>
        <div style="margin-bottom: 1em">
            <Button type="button" icon="pi pi-plus" label="Expand All" @click="expandAll" />
            <Button type="button" icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
        </div>
        <Tree :value="nodes" :expandedKeys="expandedKeys"></Tree>
    </div>
</template>

<script>
import { ref, onMounted } from "vue";
import NodeService from './service/NodeService';

export default {
    setup() {
        onMounted(() => {
            nodeService.value.getTreeNodes().then(data => nodes.value = data);
        })

        const nodes = ref();
        const expandedKeys = ref({});
        const nodeService = ref(new NodeService());
        const expandAll = () => {
            for (let node of nodes.value) {
                expandNode(node);
            }

            expandedKeys.value = {...expandedKeys.value};
        };
        const collapseAll = () => {
            expandedKeys.value = {};
        };
        const expandNode = (node) => {
            if (node.children && node.children.length) {
                expandedKeys.value[node.key] = true;

                for (let child of node.children) {
                    expandNode(child);
                }
            }
        };

        return { nodes, expandedKeys, nodeService, expandAll, collapseAll, expandNode }
    }
}
<\\/script>

<style scoped>
.p-button {
    margin-right: .5rem;
}
</style>`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="./NodeService.js"><\\/script>`,
                    content: `<div id="app">
            <h5>Basic</h5>
            <p-tree :value="nodes"></p-tree>

            <h5>Programmatic Control</h5>
            <div style="margin-bottom: 1em">
                <p-button type="button" icon="pi pi-plus" label="Expand All" @click="expandAll"></p-button>
                <p-button type="button" icon="pi pi-minus" label="Collapse All" @click="collapseAll"></p-button>
            </div>
            <p-tree :value="nodes" :expanded-keys="expandedKeys"></p-tree>
        </div>

        <script type="module">
        const { createApp, ref, onMounted } = Vue;

        const App = {
            setup() {
                onMounted(() => {
                    nodeService.value.getTreeNodes().then(data => nodes.value = data);
                })

                const nodes = ref();
                const expandedKeys = ref({});
                const nodeService = ref(new NodeService());
                const expandAll = () => {
                    for (let node of nodes.value) {
                        expandNode(node);
                    }

                    expandedKeys.value = {...expandedKeys.value};
                };
                const collapseAll = () => {
                    expandedKeys.value = {};
                };
                const expandNode = (node) => {
                    if (node.children && node.children.length) {
                        expandedKeys.value[node.key] = true;

                        for (let child of node.children) {
                            expandNode(child);
                        }
                    }
                };

                return { nodes, expandedKeys, nodeService, expandAll, collapseAll, expandNode }
            },
            components: {
                "p-tree": primevue.tree,
                "p-button": primevue.button
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>

        <style>
        .p-button {
            margin-right: .5rem;
        }
        </style>`
                }
            }
        }
    }
}
</script>
