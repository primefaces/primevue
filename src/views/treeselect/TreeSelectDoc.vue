<template>
	<AppDoc name="TreeSelectDemo" :sources="sources" github="treeselect/TreeSelectDemo.vue" :service="['NodeService']" :data="['treenodes']">
        <h5>Import</h5>
<pre v-code.script><code>
import TreeSelect from 'primevue/treeselect';

</code></pre>

        <h5>Getting Started</h5>
		<p>TreeSelect component requires an array of TreeNode objects as its <i>options</i> and keys of the nodes as its value.</p>

<pre v-code><code>
&lt;TreeSelect v-model="selectedNodeKey" :options="nodes" placeholder="Select Item" /&gt;

</code></pre>

        <p>In example below, nodes are retrieved from a remote data source.</p>

<pre v-code.script><code>
import NodeService from '../../service/NodeService';

export default {
    data() {
        return {
            selectedNodeKey: null,
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
import axios from 'axios';

export default class NodeService {

    getTreeNodes() {
        return axios.get('demo/data/treenodes.json').then(res => res.data.root);
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

</code></pre>

        <h5>TreeNode API utilized by the TreeSelect</h5>
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

        <h5>Selection Mode</h5>
        <p>TreeSelects offers "single", "multiple" and "checkbox" alternatives for the selection behavior that is defined by the <i>selectionMode</i> option.</p>
<pre v-code><code>
&lt;TreeSelect v-model="selectedValue1" :options="nodes" selectionMode="single" placeholder="Select Item" /&gt;

&lt;TreeSelect v-model="selectedValue2" :options="nodes" selectionMode="multiple" placeholder="Select Items" /&gt;

&lt;TreeSelect v-model="selectedValue3" :options="nodes" selectionMode="checkbox" placeholder="Select Items" /&gt;

</code></pre>

        <h5>Value Format</h5>
        <p>Value passed to and from the TreeSelect via the v-model directive should be a an object with key-value pairs where key is the node key and
            value is a boolean to indicate selection. On the other hand
        in "checkbox" mode, instead of a boolean, value should be an object that has "checked" and "partialChecked" properties to represent the checked state of a node. Best way to clarify it is prepopulating a TreeSelect with an existing value.</p>

<pre v-code.script><code>
data() {
    return {
        selectedValue1: {'2-1': true},
        selectedValue2: {'1-1': true, '0-0-0': true},
        selectedValue2: {'1': {checked: true, partialChecked: true}, '1-0': {checked: true}}
        nodes: null
    }
},
</code></pre>

        <h5>Chips Display</h5>
        <p>A comma separated list is used by default to display selected items whereas alternative chip mode is provided using the <i>display</i> property to visualize the items as tokens.</p>
<pre v-code><code>
&lt;TreeSelect v-model="selectedValue" display="chip" :options="nodes" selectionMode="multiple" placeholder="Select Items" /&gt;

</code></pre>

		<h5>Templating</h5>
		<p>Label of an option is used as the display text of an item by default, for custom content support define a <i>value</i> template that gets the selected nodes as a parameter.
        In addition <i>header</i>, <i>footer</i> and <i>empty</i> slots are provided for further customization.</p>
<pre v-code><code><template v-pre>
&lt;TreeSelect v-model="selectedNodes" :options="nodes" placeholder="Select Items"&gt;
	&lt;template #value="{value}"&gt;
		Custom Content
	&lt;/template&gt;
&lt;/TreeSelect&gt;
</template>
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
                        <td>modelValue</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Value of the component.</td>
                    </tr>
                    <tr>
                        <td>options</td>
                        <td>array</td>
                        <td>null</td>
                        <td>An array of treenodes.</td>
                    </tr>
                    <tr>
                        <td>scrollHeight</td>
                        <td>string</td>
                        <td>200px</td>
                        <td>Height of the viewport, a scrollbar is defined if height of list exceeds this value.</td>
                    </tr>
                    <tr>
                        <td>placeholder</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Label to display when there are no selections.</td>
                    </tr>
                    <tr>
                        <td>disabled</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When present, it specifies that the component should be disabled.</td>
                    </tr>
                    <tr>
                        <td>tabindex</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Index of the element in tabbing order.</td>
                    </tr>
                    <tr>
                        <td>inputId</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Identifier of the underlying input element.</td>
                    </tr>
                    <tr>
                        <td>ariaLabelledBy</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Establishes relationships between the component and label(s) where its value should be one or more element IDs.</td>
                    </tr>
                    <tr>
                        <td>selectionMode</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Defines the selection mode, valid values "single", "multiple", and "checkbox".</td>
                    </tr>
                    <tr>
                        <td>panelClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of the overlay panel.</td>
                    </tr>
                    <tr>
                        <td>appendTo</td>
                        <td>string</td>
                        <td>body</td>
                        <td>A valid query selector or an HTMLElement to specify where the overlay gets attached. Special keywords are "body" for document body
                        and "self" for the element itself.</td>
                    </tr>
                    <tr>
                        <td>emptyMessage</td>
                        <td>string</td>
                        <td>No results found</td>
                        <td>Text to display when there are no options available. Defaults to value from PrimeVue locale configuration.</td>
                    </tr>
                    <tr>
                        <td>display</td>
                        <td>string</td>
                        <td>comma</td>
                        <td>Defines how the selected items are displayed, valid values are "comma" and "chip".</td>
                    </tr>
                     <tr>
                        <td>metaKeySelection</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item
                            can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.</td>
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
                        <td>change</td>
                        <td>event: Selected node keys</td>
                        <td>Callback to invoke on value change.</td>
                    </tr>
                    <tr>
                        <td>before-show</td>
                        <td>-</td>
                        <td>Callback to invoke before the overlay is shown.</td>
                    </tr>
                    <tr>
                        <td>before-hide</td>
                        <td>-</td>
                        <td>Callback to invoke before the overlay is hidden.</td>
                    </tr>
                    <tr>
                        <td>show</td>
                        <td>-</td>
                        <td>Callback to invoke when the overlay is shown.</td>
                    </tr>
                    <tr>
                        <td>hide</td>
                        <td>-</td>
                        <td>Callback to invoke when the overlay is hidden.</td>
                    </tr>
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

        <h5>Methods</h5>
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
                        <td>show</td>
                        <td>-</td>
                        <td>Shows the overlay.</td>
                    </tr>
                    <tr>
                        <td>hide</td>
                        <td>-</td>
                        <td>Hides the overlay.</td>
                    </tr>
				</tbody>
			</table>
		</div>

        <h5>Slots</h5>
		<div class="doc-tablewrapper">
            <table class="doc-table">
				<thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                    </tr>
				</thead>
				<tbody>
                    <tr>
                        <td>value</td>
                        <td>value: Selected nodes <br />
                            placeholder: Placeholder value</td>
                    </tr>
                    <tr>
                        <td>header</td>
                        <td>value: Value of the component <br />
                            options: TreeNode options</td>
                    </tr>
                    <tr>
                        <td>footer</td>
                        <td>value: Value of the component <br />
                           options: TreeNode options</td>
                    </tr>
                    <tr>
                        <td>empty</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>indicator</td>
                        <td>-</td>
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
                        <td>p-treeselect</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-treeselect-label-container</td>
                        <td>Container of the label to display selected items.</td>
                    </tr>
                    <tr>
                        <td>p-treeselect-label</td>
                        <td>Label to display selected items.</td>
                    </tr>
                    <tr>
                        <td>p-treeselect-trigger</td>
                        <td>Dropdown button.</td>
                    </tr>
                    <tr>
                        <td>p-treeselect-panel</td>
                        <td>Overlay panel for items.</td>
                    </tr>
                    <tr>
                        <td>p-treeselect-items-wrapper</td>
                        <td>List container of items.</td>
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
        <h5>Single</h5>
        <TreeSelect v-model="selectedNode" :options="nodes" placeholder="Select Item"></TreeSelect>

        <h5>Multiple</h5>
        <TreeSelect v-model="selectedNodes1" :options="nodes" selectionMode="multiple" :metaKeySelection="false" placeholder="Select Items"></TreeSelect>

        <h5>Checkbox</h5>
        <TreeSelect v-model="selectedNodes2" :options="nodes" display="chip" selectionMode="checkbox"  placeholder="Select Items"></TreeSelect>
    </div>
</template>

<script>
import NodeService from './service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            selectedNode: null,
            selectedNodes1: null,
            selectedNodes2: null
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
<\\/script>

<style lang="scss" scoped>
.p-treeselect {
    width:20rem;
}

@media screen and (max-width: 640px) {
    .p-treeselect {
        width: 100%;
    }
}
</style>`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <h5>Single</h5>
        <TreeSelect v-model="selectedNode" :options="nodes" placeholder="Select Item"></TreeSelect>

        <h5>Multiple</h5>
        <TreeSelect v-model="selectedNodes1" :options="nodes" selectionMode="multiple" :metaKeySelection="false" placeholder="Select Items"></TreeSelect>

        <h5>Checkbox</h5>
        <TreeSelect v-model="selectedNodes2" :options="nodes" display="chip" selectionMode="checkbox"  placeholder="Select Items"></TreeSelect>
    </div>
</template>

<script>
import { ref, onMounted } from "vue";
import NodeService from './service/NodeService';

export default {
    setup() {
         onMounted(() => {
            nodeService.value.getTreeNodes().then(data => options.value = data);
        });

        const options = ref();
        const nodeService = ref(new NodeService());

        const selectedNode = ref();
        const selectedNodes1 = ref();
        const selectedNodes2 = ref();
       
        return { options, selectedNode, selectedNodes1, selectedNodes2 };
    }
}
<\\/script>

<style lang="scss" scoped>
.p-treeselect {
    width:20rem;
}

@media screen and (max-width: 640px) {
    .p-treeselect {
        width: 100%;
    }
}
</style>`
                }
            }
        }
    }
}
</script>
