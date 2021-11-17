<template>
	<AppDoc name="TreeTableDemo" :sources="sources" :service="['NodeService']" :data="['treetablenodes']" github="treetable/TreeTableDemo.vue" >
        <h5>Import via Module</h5>
<pre v-code.script><code>
import TreeTable from 'primevue/treetable';
import Column from 'primevue/column';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/treetable/treetable.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/column/column.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>Tree component requires an array of TreeNode objects as its <i>value</i> and columns defined with Column component.</p>

        <h5>TreeNode API utilized by the TreeTable</h5>
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
                        <td>data</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Data represented by the node.</td>
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
                        <td>leaf</td>
                        <td>boolean</td>
                        <td>null</td>
                        <td>Specifies if the node has children. Used in lazy loading.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p>Example below loads the nodes from a remote datasource via a service called NodeService.</p>
<pre v-code><code><template v-pre>
&lt;TreeTable :value="nodes"&gt;
    &lt;Column field="name" header="Name" :expander="true"&gt;&lt;/Column&gt;
    &lt;Column field="size" header="Size"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type"&gt;&lt;/Column&gt;
&lt;/TreeTable&gt;
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
        this.nodeService.getTreeTableNodes().then(data => this.nodes = data);
    }
}

</code></pre>

<pre v-code.script><code>
export default class NodeService {

    getTreeTableNodes() {
        return fetch('demo/data/treetablenodes.json').then(res => res.json())
                .then(d => d.root);
    }

}

</code></pre>

        <p>The json response sample would be as following.</p>

<div style="height: 400px; overflow: auto">
<pre v-code.script><code>
{
    "root":
    [
        {
            "key": "0",
            "data":{
                "name":"Applications",
                "size":"100kb",
                "type":"Folder"
            },
            "children":[
                {
                    "key": "0-0",
                    "data":{
                        "name":"Vue",
                        "size":"25kb",
                        "type":"Folder"
                    },
                    "children":[
                        {
                            "key": "0-0-0",
                            "data":{
                                "name":"Vue.app",
                                "size":"10kb",
                                "type":"Application"
                            }
                        },
                        {
                            "key": "0-0-1",
                            "data":{
                                "name":"native.app",
                                "size":"10kb",
                                "type":"Application"
                            }
                        },
                        {
                            "key": "0-0-2",
                            "data":{
                                "name":"mobile.app",
                                "size":"5kb",
                                "type":"Application"
                            }
                        }
                    ]
                },
                {
                    "key": "0-1",
                    "data":{
                        "name":"editor.app",
                        "size":"25kb",
                        "type":"Application"
                    }
                },
                {
                    "key": "0-2",
                    "data":{
                        "name":"settings.app",
                        "size":"50kb",
                        "type":"Application"
                    }
                }
            ]
        },
        {
            "key": "1",
            "data":{
                "name":"Cloud",
                "size":"20kb",
                "type":"Folder"
            },
            "children":[
                {
                    "key": "1-0",
                    "data":{
                        "name":"backup-1.zip",
                        "size":"10kb",
                        "type":"Zip"
                    }
                },
                {
                    "key": "1-1",
                    "data":{
                        "name":"backup-2.zip",
                        "size":"10kb",
                        "type":"Zip"
                    }
                }
            ]
        },
        {
            "key": "2",
            "data": {
                "name":"Desktop",
                "size":"150kb",
                "type":"Folder"
            },
            "children":[
                {
                    "key": "2-0",
                    "data":{
                        "name":"note-meeting.txt",
                        "size":"50kb",
                        "type":"Text"
                    }
                },
                {
                    "key": "2-1",
                    "data":{
                        "name":"note-todo.txt",
                        "size":"100kb",
                        "type":"Text"
                    }
                }
            ]
        },
        {
            "key": "3",
            "data":{
                "name":"Documents",
                "size":"75kb",
                "type":"Folder"
            },
            "children":[
                {
                    "key": "3-0",
                    "data":{
                        "name":"Work",
                        "size":"55kb",
                        "type":"Folder"
                    },
                    "children":[
                        {
                            "key": "3-0-0",
                            "data":{
                                "name":"Expenses.doc",
                                "size":"30kb",
                                "type":"Document"
                            }
                        },
                        {
                            "key": "3-0-1",
                            "data":{
                                "name":"Resume.doc",
                                "size":"25kb",
                                "type":"Resume"
                            }
                        }
                    ]
                },
                {
                    "key": "3-1",
                    "data":{
                        "name":"Home",
                        "size":"20kb",
                        "type":"Folder"
                    },
                    "children":[
                        {
                            "key": "3-1-0",
                            "data":{
                                "name":"Invoices",
                                "size":"20kb",
                                "type":"Text"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "key": "4",
            "data": {
                "name":"Downloads",
                "size":"25kb",
                "type":"Folder"
            },
            "children":[
                {
                    "key": "4-0",
                    "data": {
                        "name":"Spanish",
                        "size":"10kb",
                        "type":"Folder"
                    },
                    "children":[
                        {
                            "key": "4-0-0",
                            "data":{
                                "name":"tutorial-a1.txt",
                                "size":"5kb",
                                "type":"Text"
                            }
                        },
                        {
                            "key": "4-0-1",
                            "data":{
                                "name":"tutorial-a2.txt",
                                "size":"5kb",
                                "type":"Text"
                            }
                        }
                    ]
                },
                {
                    "key": "4-1",
                    "data":{
                        "name":"Travel",
                        "size":"15kb",
                        "type":"Text"
                    },
                    "children":[
                        {
                            "key": "4-1-0",
                            "data":{
                                "name":"Hotel.pdf",
                                "size":"10kb",
                                "type":"PDF"
                            }
                        },
                        {
                            "key": "4-1-1",
                            "data":{
                                "name":"Flight.pdf",
                                "size":"5kb",
                                "type":"PDF"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "key": "5",
            "data": {
                "name":"Main",
                "size":"50kb",
                "type":"Folder"
            },
            "children":[
                {
                    "key": "5-0",
                    "data":{
                        "name":"bin",
                        "size":"50kb",
                        "type":"Link"
                    }
                },
                {
                    "key": "5-1",
                    "data":{
                        "name":"etc",
                        "size":"100kb",
                        "type":"Link"
                    }
                },
                {
                    "key": "5-2",
                    "data":{
                        "name":"var",
                        "size":"100kb",
                        "type":"Link"
                    }
                }
            ]
        },
        {
            "key": "6",
            "data":{
                "name":"Other",
                "size":"5kb",
                "type":"Folder"
            },
            "children":[
                {
                    "key": "6-0",
                    "data":{
                        "name":"todo.txt",
                        "size":"3kb",
                        "type":"Text"
                    }
                },
                {
                    "key": "6-1",
                    "data":{
                        "name":"logo.png",
                        "size":"2kb",
                        "type":"Picture"
                    }
                }
            ]
        },
        {
            "key": "7",
            "data":{
                "name":"Pictures",
                "size":"150kb",
                "type":"Folder"
            },
            "children":[
                {
                    "key": "7-0",
                    "data":{
                        "name":"barcelona.jpg",
                        "size":"90kb",
                        "type":"Picture"
                    }
                },
                {
                    "key": "7-1",
                    "data":{
                        "name":"primevue.png",
                        "size":"30kb",
                        "type":"Picture"
                    }
                },
                {
                    "key": "7-2",
                    "data":{
                        "name":"prime.jpg",
                        "size":"30kb",
                        "type":"Picture"
                    }
                }
            ]
        },
        {
            "key": "8",
            "data":{
                "name":"Videos",
                "size":"1500kb",
                "type":"Folder"
            },
            "children":[
                {
                    "key": "8-0",
                    "data":{
                        "name":"primefaces.mkv",
                        "size":"1000kb",
                        "type":"Video"
                    }
                },
                {
                    "key": "8-1",
                    "data":{
                        "name":"intro.avi",
                        "size":"500kb",
                        "type":"Video"
                    }
                }
            ]
        }
    ]
}

</code></pre>
</div>

        <h5>Dynamic Columns</h5>
        <p>Column components can be dynamically generated using a v-for as well.</p>

<pre v-code><code><template v-pre>
&lt;TreeTable :value="nodes"&gt;
    &lt;Column v-for="col of columns" :key="col.field"
        :field="col.field" :header="col.header" :expander="col.expander"&gt;&lt;/Column&gt;
&lt;/TreeTable&gt;
</template>
</code></pre>

<pre v-code.script><code>
import NodeService from '../../service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            columns: null
        }
    },
    nodeService: null,
    created() {
        this.nodeService = new NodeService();

        this.columns = [
            {field: 'name', header: 'Vin', expander: true},
            {field: 'size', header: 'Size'},
            {field: 'type', header: 'Type'}
        ];
    },
    mounted() {
        this.nodeService.getTreeTableNodes().then(data => this.nodes = data);
    }
}

</code></pre>

        <h5>Column Component Properties utilized by the TreeTable</h5>
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
                        <td>columnKey</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Identifier of a column if field property is not defined.</td>
                    </tr>
                    <tr>
                        <td>expander</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Whether the column would display a toggle icon.</td>
                    </tr>
                    <tr>
                        <td>field</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Property name or a getter function of a row data.</td>
                    </tr>
                    <tr>
                        <td>sortField</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Property name or a getter function of a row data used for sorting, defaults to field.</td>
                    </tr>
                    <tr>
                        <td>sortable</td>
                        <td>any</td>
                        <td>false</td>
                        <td>Defines if a column is sortable.</td>
                    </tr>
                    <tr>
                        <td>header</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Header content of the column.</td>
                    </tr>
                    <tr>
                        <td>footer</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Footer content of the column.</td>
                    </tr>
                    <tr>
                        <td>headerStyle</td>
                        <td>object</td>
                        <td>null</td>
                        <td>Inline style of the column.</td>
                    </tr>
                    <tr>
                        <td>headerClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of the column.</td>
                    </tr>
                    <tr>
                        <td>bodyStyle</td>
                        <td>object</td>
                        <td>null</td>
                        <td>Inline style of the column.</td>
                    </tr>
                    <tr>
                        <td>bodyClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of the column.</td>
                    </tr>
                    <tr>
                        <td>footerStyle</td>
                        <td>object</td>
                        <td>null</td>
                        <td>Inline style of the column.</td>
                    </tr>
                    <tr>
                        <td>footerClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of the column.</td>
                    </tr>
                    <tr>
                        <td>filterHeaderStyle</td>
                        <td>object</td>
                        <td>null</td>
                        <td>Inline style of the column filter header.</td>
                    </tr>
                    <tr>
                        <td>filterHeaderClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of the column filter header.</td>
                    </tr>
                    <tr>
                        <td>filterMatchMode</td>
                        <td>string</td>
                        <td>startsWith</td>
                        <td>Defines filterMatchMode; "startsWith", "contains", "endsWidth", "equals", "notEquals", "in" and "custom".</td>
                    </tr>
                    <tr>
                        <td>excludeGlobalFilter</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Whether to exclude from global filtering or not.</td>
                    </tr>
                    <tr>
                        <td>hidden</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Whether the column is rendered.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5>Programmatic Control</h5>
        <p>Tree state can be controlled programmatically with the <i>expandedKeys</i> property that defines the keys
            that are expanded. This property is a Map instance whose key is the key of a node and value is a boolean. Note that <i>expandedKeys</i> also supports two-way binding with the v-model directive.
        </p>

        <p>Example below expands and collapses all nodes with buttons.</p>
<pre v-code><code><template v-pre>
&lt;div style="margin-bottom: 1em"&gt;
    &lt;Button type="button" icon="pi pi-plus" label="Expand All" @click="expandAll" /&gt;
    &lt;Button type="button" icon="pi pi-minus" label="Collapse All" @click="collapseAll" /&gt;
&lt;/div&gt;
&lt;TreeTable :value="nodes" :expandedKeys="expandedKeys"&gt;
    &lt;Column field="name" header="Name" :expander="true"&gt;&lt;/Column&gt;
    &lt;Column field="size" header="Size"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type"&gt;&lt;/Column&gt;
&lt;/TreeTable&gt;
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
        this.nodeService.getTreeTableNodes().then(data => this.nodes = data);
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
            if (node.children &amp;&amp; node.children.length) {
                this.expandedKeys[node.key] = true;

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
        this.nodeService.getTreeTableNodes().then(data => {
            this.nodes = data;
            this.expandedKeys[this.nodes[0].key] = true;
            this.expandedKeys[this.nodes[1].key] = true;
        });
    }
}

</code></pre>

        <h5>Templating</h5>
        <p>Field data of a corresponding node is displayed as the cell content by default, this can be customized using a <i>body</i> template where current node data and column properties are passed via the slot props.
            On the other hand, <i>header</i> and <i>footer</i> sections of a column can either be defined with the properties or the templates. Similarly TreeTable itself also provides header and footer properties along with the templates for the main header and footer of the table.</p>

        <pre v-code><code><template v-pre>
&lt;TreeTable :value="nodes"&gt;
    &lt;template #header&gt;
        FileSystem
    &lt;/template&gt;
    &lt;Column field="name" header="Name" :expander="true"&gt;&lt;/Column&gt;
    &lt;Column field="size" header="Size"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type"&gt;&lt;/Column&gt;
    &lt;Column headerStyle="width: 8em" bodyStyle="text-align: center"&gt;
        &lt;template #header&gt;
            &lt;Button type="button" icon="pi pi-cog"&gt;&lt;/Button&gt;
        &lt;/template&gt;
        &lt;template #body="slotProps"&gt;
            &lt;Button type="button" icon="pi pi-search" class="p-button-success" style="margin-right: .5em"&gt;&lt;/Button&gt;
            &lt;Button type="button" icon="pi pi-pencil" class="p-button-warning"&gt;&lt;/Button&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;template #footer&gt;
        &lt;div style="text-align:left"&gt;
            &lt;Button icon="pi pi-refresh" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/TreeTable&gt;
</template>
</code></pre>

        <h5>Sizes</h5>
        <p>In addition to the regular table, a smal and a large version are available with different paddings. For a table
        with smaller paddings use <i>p-treetable-sm</i> class and for a larger one use <i>p-treetable-lg</i>.</p>

<pre v-code><code><template v-pre>
&lt;TreeTable :value="nodes" class="p-treetable-sm"&gt;
    &lt;template #header&gt;
        Small Table
    &lt;/template&gt;
    &lt;Column field="name" header="Name" :expander="true"&gt;&lt;/Column&gt;
    &lt;Column field="size" header="Size"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type"&gt;&lt;/Column&gt;
&lt;/TreeTable&gt;

&lt;TreeTable :value="nodes"&gt;
    &lt;template #header&gt;
        Small Table
    &lt;/template&gt;
    &lt;Column field="name" header="Name" :expander="true"&gt;&lt;/Column&gt;
    &lt;Column field="size" header="Size"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type"&gt;&lt;/Column&gt;
&lt;/TreeTable&gt;

&lt;TreeTable :value="nodes" class="p-treetable-lg"&gt;
    &lt;template #header&gt;
        Small Table
    &lt;/template&gt;
    &lt;Column field="name" header="Name" :expander="true"&gt;&lt;/Column&gt;
    &lt;Column field="size" header="Size"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type"&gt;&lt;/Column&gt;
&lt;/TreeTable&gt;
</template>
</code></pre>

        <h5>Pagination</h5>
        <p>Pagination is enabled by setting <i>paginator</i> property to true and defining the <i>rows</i> property defines the number of rows per page.
            See the <router-link to="/paginator">Paginator</router-link> for the available customization options such as paginator templates, page links,
            rows per page options and more which can be passed through the TreeTable.</p>

<pre v-code><code><template v-pre>
&lt;TreeTable :value="nodes" :paginator="true" :rows="10"&gt;
    &lt;Column field="name" header="Name" :expander="true"&gt;&lt;/Column&gt;
    &lt;Column field="size" header="Size"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type"&gt;&lt;/Column&gt;
&lt;/TreeTable&gt;
</template>
</code></pre>

        <p><i>paginatorstart</i> and <i>paginatorend</i> templates are available to specify custom content at the left and right side.</p>
<pre v-code><code><template v-pre>
&lt;TreeTable :value="nodes" :paginator="true" :rows="10"&gt;
    &lt;Column field="name" header="Name" :expander="true"&gt;&lt;/Column&gt;
    &lt;Column field="size" header="Size"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type"&gt;&lt;/Column&gt;
    &lt;template #paginatorstart&gt;
        &lt;Button type="button" icon="pi pi-refresh" /&gt;
    &lt;/template&gt;
    &lt;template #paginatorend&gt;
        &lt;Button type="button" icon="pi pi-cloud" /&gt;
    &lt;/template&gt;
&lt;/TreeTable&gt;
</template>
</code></pre>

        <p>Paginator can also be programmed programmatically using a binding to the <i>first</i> property that defines the index of the
        first element to display. For example setting first to zero will reset the paginator to the very first page. This property
        also supports the v-model directive in case you'd like your binding to be updated whenever the user changes the page.</p>
<pre v-code><code><template v-pre>
&lt;TreeTable :value="nodes" :paginator="true" :rows="10" :first="firstRecordIndex"&gt;
    &lt;Column field="name" header="Name" :expander="true"&gt;&lt;/Column&gt;
    &lt;Column field="size" header="Size"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type"&gt;&lt;/Column&gt;
&lt;/TreeTable&gt;
</template>
</code></pre>

        <h5>Sorting</h5>
        <p>Enabling <i>sortable</i> property at column component would be enough to make a column sortable.
        The property to use when sorting is the <i>field</i> by default and can be customized using the <i>sortField</i>.</p>

<pre v-code><code><template v-pre>
&lt;TreeTable :value="nodes" sortMode="single"&gt;
    &lt;Column field="name" header="Name" :expander="true" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="size" header="Size" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type" :sortable="true"&gt;&lt;/Column&gt;
&lt;/TreeTable&gt;
</template>
</code></pre>

        <p>By default sorting is executed on the clicked column only. To enable multiple field sorting, set <i>sortMode</i> property to "multiple" and use metakey when clicking on another column.</p>
<pre v-code><code><template v-pre>
&lt;TreeTable :value="nodes" sortMode="multiple"&gt;
    &lt;Column field="name" header="Name" :expander="true" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="size" header="Size" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type" :sortable="true"&gt;&lt;/Column&gt;
&lt;/TreeTable&gt;
</template>
</code></pre>

        <p>In case you'd like to display the table as sorted per a single column by default on mount or programmatically apply sort, use <i>sortField</i> and <i>sortOrder</i> properties. These
        two properties also support the v-model directive to get updated when the user applies sort a column.</p>
<pre v-code><code><template v-pre>
&lt;TreeTable :value="nodes" sortField="size" :sortOrder="1""&gt;
    &lt;Column field="name" header="Name" :expander="true" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="size" header="Size" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type" :sortable="true"&gt;&lt;/Column&gt;
&lt;/TreeTable&gt;

&lt;TreeTable :value="nodes" sortMode="single" sortField="dynamicSortField" :sortOrder="dynamicSortOrder"&gt;
    &lt;Column field="name" header="Name" :expander="true" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="size" header="Size" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type" :sortable="true"&gt;&lt;/Column&gt;
&lt;/TreeTable&gt;
</template>
</code></pre>

        <p>In multiple mode, use the <i>multiSortMeta</i> property and bind an array of SortMeta objects instead.</p>
<pre v-code><code><template v-pre>
&lt;TreeTable :value="nodes" sortMode="multiple" :multiSortMeta="multiSortMeta"&gt;
    &lt;Column field="name" header="Name" :expander="true" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="size" header="Size" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type" :sortable="true"&gt;&lt;/Column&gt;
&lt;/TreeTable&gt;
</template>
</code></pre>

<pre v-code.script><code>
data() {
    return {
        multiSortMeta: [
            {field: 'year', order: 1},
            {field: 'brand', order: -1}
        ]
    }
}

</code></pre>

        <h5>Filtering</h5>
        <p>Filtering is enabled by defining a filter template per column to populate the <i>filters</i> property of the TreeTable. The <i>filters</i>
        property should be an key-value object where keys are the field name and the value is the filter value. The filter template receives the column properties
        via the slotProps and accepts any form element as the filter element. Default match mode is "startsWith" and this can be configured per column using the <i>filterMatchMode</i> property that also accepts
        "contains", "endsWith", "equals", "notEquals" and "in" as available modes.</p>
        <p>Optionally a global filter is available to search against all the fields, in this case the special <i>global</i> keyword should be the property to be populated.</p>

        <p>In addition <i>filterMode</i> specifies the filtering strategy. In <b>lenient</b> mode when the query matches a node, children of the node are not searched further as all descendants of the node are included. On the other hand,
         in <b>strict</b> mode when the query matches a node, filtering continues on all descendants.</p>
<pre v-code><code><template v-pre>
&lt;TreeTable :value="nodes" :filters="filters" filterMode="lenient"&gt;
    &lt;template #header&gt;
        &lt;div style="text-align: right"&gt;
            &lt;i class="pi pi-search" style="margin: 4px 4px 0px 0px;"&gt;&lt;/i&gt;
            &lt;InputText v-model="filters['global']" placeholder="Global Search" size="50" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
    &lt;Column field="name" header="Name" :expander="true"&gt;
        &lt;template #filter&gt;
            &lt;InputText type="text" v-model="filters['name']" class="p-column-filter" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="size" header="Size"&gt;
        &lt;template #filter&gt;
            &lt;InputText type="text" v-model="filters['size']" class="p-column-filter" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="type" header="Type"&gt;
        &lt;template #filter&gt;
            &lt;InputText type="text" v-model="filters['type']" class="p-column-filter" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
&lt;/TreeTable&gt;
</template>
</code></pre>

<pre v-code.script><code>
import NodeService from '../../service/NodeService';

export default {
    data() {
        return {
            filters: {},
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

</code></pre>

        <h5>Selection</h5>
        <p>Tree supports <b>single</b>, <b>multiple</b> and <b>checkbox</b> selection modes. Define the <i>selectionKeys</i> with the v-model operator and the <i>selectionMode</i> properties to enable the selection.
        By default in multiple selection mode, metaKey is necessary to add to existing selections however this can be configured with <i>metaKeySelection</i> property. Note that
        in touch enabled devices, Tree does not require metaKey. In addition selection on a particular node can be disabled if the <i>selectable</i> is false on the node instance.</p>

        <p>Similarly to the <i>expandedKeys</i>, <i>selectionKeys</i> is a Map instance whose key is the key of a node and value is a boolean in "single" and "multiple" cases. On the other hand
        in "checkbox" mode, instead of a boolean, value should be an object that has "checked" and "partialChecked" properties to represent the checked state of a node.</p>
<pre v-code><code><template v-pre>
&lt;TreeTable :value="nodes" selectionMode="multiple" v-model:selectionKeys="selectedKeys1"&gt;
    &lt;Column field="name" header="Name" :expander="true"&gt;&lt;/Column&gt;
    &lt;Column field="size" header="Size"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type"&gt;&lt;/Column&gt;
&lt;/TreeTable&gt;

&lt;h3&gt;Multiple Selection without MetaKey&lt;/h3&gt;
&lt;TreeTable :value="nodes" selectionMode="multiple" v-model:selectionKeys="selectedKeys2" :metaKeySelection="false"&gt;
    &lt;Column field="name" header="Name" :expander="true"&gt;&lt;/Column&gt;
    &lt;Column field="size" header="Size"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type"&gt;&lt;/Column&gt;
&lt;/TreeTable&gt;

&lt;h3&gt;Checkbox Selection&lt;/h3&gt;
&lt;TreeTable :value="nodes" selectionMode="checkbox" v-model:selectionKeys="selectedKeys3"&gt;
    &lt;Column field="name" header="Name" :expander="true"&gt;&lt;/Column&gt;
    &lt;Column field="size" header="Size"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type"&gt;&lt;/Column&gt;
&lt;/TreeTable&gt;

&lt;h3&gt;Events&lt;/h3&gt;
&lt;TreeTable :value="nodes" selectionMode="single" v-model:selectionKeys="selectedKey2"
    @node-select="onNodeSelect" @node-unselect="onNodeUnselect"&gt;
    &lt;Column field="name" header="Name" :expander="true"&gt;&lt;/Column&gt;
    &lt;Column field="size" header="Size"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type"&gt;&lt;/Column&gt;
&lt;/TreeTable&gt;
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
        this.nodeService.getTreeTableNodes().then(data => this.nodes = data);
    },
    methods: {
        onNodeSelect(node) {
            this.$toast.add({severity:'success', summary: 'Node Selected', detail: node.data.name, life: 3000});
        },
        onNodeUnselect(node) {
            this.$toast.add({severity:'success', summary: 'Node Unselected', detail: node.data.name, life: 3000});
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
        this.nodeService.getTreeTableNodes().then(data => {
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

            <h5>Scrolling</h5>
            <p>TreeTable supports both horizontal and vertical scrolling with support for frozen columns. Scrollable TreeTable is enabled using <i>scrollable</i> property and <i>scrollHeight</i> to define the viewport height.</p>
<pre v-code><code><template v-pre>
&lt;TreeTable :value="nodes" style="margin-bottom: 2rem" :scrollable="true" scrollHeight="400px"&gt;
    &lt;Column field="name" header="Name" :expander="true" style="min-width:200px"&gt;&lt;/Column&gt;
    &lt;Column field="size" header="Size" style="min-width:200px"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type" style="min-width:200px"&gt;&lt;/Column&gt;
&lt;/TreeTable&gt;
</template>
</code></pre>

            <h5>Column Widths of a Scrollable TreeTable</h5>
            <p>Scrollable treetable uses flex layout so there are a couple of rules to consider when adjusting the widths of columns.</p>
            <ul>
                <li>Use <i>min-width</i> in vertical scrolling only so that when there is enough space columns may grow and for smaller screens a horizontal scrollbar is displayed to provide responsive design.</li>
                <li>When horizontal scrolling is enabled, prefer <i>width</i> instead of <i>min-width</i>.</li>
                <li>In vertical scrolling only, use <i>flex</i> to disable grow and shrink while defining a initial width. When horizontal scrolling is enabled, this is not required as columns do not grow or shrink in horizontal scrolling.</li>
            </ul>

<pre v-code><code><template v-pre>
&lt;Column field="vin" header="Vin" style="flex: 0 0 4rem"&gt;&lt;/Column&gt;
</template>
</code></pre>

            <h6>Flex Scroll</h6>
            <p>In cases where viewport should adjust itself according to the table parent's height instead of a fixed viewport height, set scrollHeight option as flex. In example below, table is inside a Dialog where viewport size dynamically responds to the dialog size changes such as maximizing.
            FlexScroll can also be used for cases where scrollable viewport should be responsive with respect to the window size for full page scroll.</p>
<pre v-code><code><template v-pre>
&lt;Button label="Show" icon="pi pi-external-link" @click="openDialog" /&gt;
&lt;Dialog header="Flex Scroll" v-model:visible="dialogVisible" :style="{width: '50vw'}" :maximizable="true" :modal="true" :contentStyle="{height: '300px'}"&gt;
    &lt;TreeTable :value="nodes" :scrollable="true" scrollHeight="flex"&gt;
        &lt;Column field="name" header="Name" :expander="true" style="min-width:200px"&gt;&lt;/Column&gt;
        &lt;Column field="size" header="Size" style="min-width:200px"&gt;&lt;/Column&gt;
        &lt;Column field="type" header="Type" style="min-width:200px"&gt;&lt;/Column&gt;
    &lt;/TreeTable&gt;
    &lt;template #footer&gt;
        &lt;Button label="Yes" icon="pi pi-check" @click="closeDialog" /&gt;
        &lt;Button label="No" icon="pi pi-times" @click="closeDialog" class="p-button-secondary"/&gt;
    &lt;/template&gt;
&lt;/Dialog&gt;
</template>
</code></pre>

            <h6>Horizontal Scrolling</h6>
            <p>For horizontal scrolling, it is required to set <i>scrollDirection</i> to "horizontal" and give fixed widths to columns.</p>
<pre v-code><code><template v-pre>
&lt;TreeTable :value="nodes" :scrollable="true" scrollDirection="horizontal"&gt;
    &lt;Column field="name" header="Name" :expander="true" style="width:200px"&gt;&lt;/Column&gt;
    &lt;Column field="size" header="Size" style="width:200px"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type" style="width:200px"&gt;&lt;/Column&gt;
&lt;/TreeTable&gt;
</template>
</code></pre>

            <h6>Horizontal and Vertical Scrolling</h6>
            <p>Set <i>scrollDirection</i> to "both" and give fixed widths to columns to scroll both ways.</p>
<pre v-code><code><template v-pre>
&lt;TreeTable :value="customers" :scrollable="true" scrollHeight="400px" scrollDirection="both"&gt;
    &lt;Column field="name" header="Name" :expander="true" style="width:200px"&gt;&lt;/Column&gt;
    &lt;Column field="size" header="Size" style="width:200px"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type" style="width:200px"&gt;&lt;/Column&gt;
&lt;/TreeTable&gt;
</template>
</code></pre>

            <h6>Frozen Columns</h6>
            <p>Certain columns can be frozen by using the <i>frozen</i> property of the column component. In addition <i>alignFrozen</i> is available to define whether the column should
            be fixed on the left or right.</p>

<pre v-code><code><template v-pre>
&lt;TreeTable :value="customers" :scrollable="true" scrollHeight="400px" scrollDirection="both"&gt;
    &lt;Column field="name" header="Name" :expander="true" style="width:200px" frozen&gt;&lt;/Column&gt;
    &lt;Column field="size" header="Size" style="width:200px"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type" style="width:200px" frozen alignFrozen="right"&gt;&lt;/Column&gt;
&lt;/TreeTable&gt;
</template>
</code></pre>

        <h5>Lazy</h5>
        <p>Lazy Loading is handy to deal with huge datasets. Idea is instead of loading the whole tree, load nodes on demand when necessary.
            The important part when lazy loading nodes is setting <i>leaf</i> to true on a node instance so that even without children,
            tree would render an expand icon. Example below uses an in memory collection to mimic a lazy loading scenario with timeouts.
        </p>

        <p>In addition lazy loading of root level nodes is implemented by handling pagination and sorting using <i>page</i> and <i>sort</i> events by making a remote query using the information
        passed to the events such as first offset, number of rows and sort field for ordering. Filtering is handled differently as filter elements are defined using templates, use
        the event you prefer on your form elements such as input, change, blur to make a remote call by passing the filters property to update the displayed data. Note that,
        in lazy filtering, totalRecords should also be updated to align the data with the paginator.</p>.

        <p> Example below uses an in memory collection to mimic a lazy loading scenario with timeouts.</p>

<pre v-code><code><template v-pre>
&lt;TreeTable :value="nodes" :lazy="true" :paginator="true" :rows="rows" :loading="loading"
    @node-expand="onExpand" @page="onPage" :totalRecords="totalRecords"&gt;
    &lt;Column field="name" header="Name" :expander="true"&gt;&lt;/Column&gt;
    &lt;Column field="size" header="Size"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type"&gt;&lt;/Column&gt;
&lt;/TreeTable&gt;
</template>
</code></pre>

<pre v-code.script><code>
export default {
    data() {
        return {
            nodes: null,
            rows: 10,
            loading: false,
            totalRecords: 0
        }
    },
    mounted() {
        this.loading = true;

        setTimeout(() => {
            this.loading = false;
            this.nodes = this.loadNodes(0, this.rows);
            this.totalRecords = 1000;
        }, 1000);
    },
    methods: {
        onExpand(node) {
            if (!node.children) {
                this.loading = true;

                setTimeout(() => {
                    let lazyNode = {...node};

                    lazyNode.children = [
                        {
                            data: {
                                name: lazyNode.data.name + ' - 0',
                                size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                                type: 'File'
                            },
                        },
                        {
                            data: {
                                name: lazyNode.data.name + ' - 1',
                                size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                                type: 'File'
                            }
                        }
                    ];

                    let nodes = this.nodes.map(n => {
                        if (n.key === node.key) {
                            n = lazyNode;
                        }

                        return n;
                    });

                    this.loading = false;
                    this.nodes = nodes;
                }, 250);
            }
        },
        onPage(event) {
            this.loading = true;

            //imitate delay of a backend call
            setTimeout(() => {
                this.loading = false;
                this.nodes = this.loadNodes(event.first, this.rows);
            }, 1000);
        },
        loadNodes(first, rows) {
            let nodes = [];

            for(let i = 0; i &lt; rows; i++) {
                let node = {
                    key: (first + i),
                    data: {
                        name: 'Item ' + (first + i),
                        size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                        type: 'Type ' + (first + i)
                    },
                    leaf: false
                };

                nodes.push(node);
            }

            return nodes;
        }
    }
}

</code></pre>

        <h5>Column Resize</h5>
        <p>Columns can be resized using drag drop by setting the <i>resizableColumns</i> to true. There are two resize modes; "fit" and "expand". Fit is the default one and the overall table width does not change when a column is resized.
            In "expand" mode, table width also changes along with the column width. <i>column-resize-end</i> is a callback that passes the resized column header and delta change as a parameter.</p>
<pre v-code><code><template v-pre>
&lt;h3&gt;Fit Mode&lt;/h3&gt;
&lt;TreeTable :value="nodes" :resizableColumns="true" columnResizeMode="fit"&gt;
    &lt;Column field="name" header="Name" :expander="true"&gt;&lt;/Column&gt;
    &lt;Column field="size" header="Size"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type"&gt;&lt;/Column&gt;
&lt;/TreeTable&gt;

&lt;h3&gt;Expand Mode&lt;/h3&gt;
&lt;TreeTable :value="nodes" :resizableColumns="true" columnResizeMode="expand"&gt;
    &lt;Column field="name" header="Name" :expander="true"&gt;&lt;/Column&gt;
    &lt;Column field="size" header="Size"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type"&gt;&lt;/Column&gt;
&lt;/TreeTable&gt;
</template>
</code></pre>

        <p>It is important to note that when you need to change column widths, since table width is 100%, giving fixed pixel widths does not work well as browsers scale them, instead give percentage widths.</p>
<pre v-code><code><template v-pre>
&lt;TreeTable :value="nodes" :resizableColumns="true"&gt;
    &lt;Column field="name" header="Name" :expander="true"&gt;&lt;/Column headerStyle="width: 20%"&gt;
    &lt;Column field="size" header="Size" headerStyle="width: 40%"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type headerStyle="width: 40%""&gt;&lt;/Column&gt;
&lt;/TreeTable&gt;
</template>
</code></pre>

        <h5>Responsive</h5>
        <p>TreeTable display can be optimized according to screen sizes using the built-in <i>responsiveLayout</i> property. Currently only available option is "scroll" that displays a horizontal scrollbar for small devices.</p>
<pre v-code><code><template v-pre>
&lt;TreeTable :value="nodes" responsiveLayout="scroll"&gt;
    &lt;Column field="name" header="Name" :expander="true" style="min-width:200px"&gt;&lt;/Column&gt;
    &lt;Column field="size" header="Size" style="min-width:200px"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type" style="min-width:200px"&gt;&lt;/Column&gt;
&lt;/TreeTable&gt;
</template>
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
                        <td>A map of keys to represent the state of the tree expansion state in controlled mode.</td>
                    </tr>
                    <tr>
                        <td>selectionKeys</td>
                        <td>any</td>
                        <td>null</td>
                        <td>A map of keys to control the selection state.</td>
                    </tr>
                    <tr>
                        <td>selectionMode</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Defines the selection mode, valid values "single", "multiple", and "checkbox".</td>
                    </tr>
                    <tr>
                        <td>metaKeySelection</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item
                            can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.</td>
                    </tr>
                    <tr>
                        <td>rows</td>
                        <td>number</td>
                        <td>null</td>
                        <td>Number of rows to display per page.</td>
                    </tr>
                    <tr>
                        <td>first</td>
                        <td>number</td>
                        <td>0</td>
                        <td>Index of the first row to be displayed.</td>
                    </tr>
                    <tr>
                        <td>totalRecords</td>
                        <td>number</td>
                        <td>null</td>
                        <td>Number of total records, defaults to length of value when not defined.</td>
                    </tr>
                     <tr>
                        <td>paginator</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When specified as true, enables the pagination.</td>
                    </tr>
                    <tr>
                        <td>paginatorPosition</td>
                        <td>string</td>
                        <td>bottom</td>
                        <td>Position of the paginator, options are "top","bottom" or "both".</td>
                    </tr>
                    <tr>
                        <td>alwaysShowPaginator</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Whether to show it even there is only one page.</td>
                    </tr>
                    <tr>
                        <td>paginatorTemplate</td>
                        <td>string</td>
                        <td>FirstPageLink PrevPageLink PageLinks <br /> NextPageLink LastPageLink RowsPerPageDropdown</td>
                        <td>Template of the paginator. See the <router-link to="/paginator">Paginator</router-link> for all available options.</td>
                    </tr>
                    <tr>
                        <td>pageLinkSize</td>
                        <td>number</td>
                        <td>5</td>
                        <td>Number of page links to display.</td>
                    </tr>
                    <tr>
                        <td>rowsPerPageOptions</td>
                        <td>array</td>
                        <td>null</td>
                        <td>Array of integer values to display inside rows per page dropdown.</td>
                    </tr>
                    <tr>
                        <td>currentPageReportTemplate</td>
                        <td>string</td>
                        <td>(&#123;currentPage&#125; of &#123;totalPages&#125;)</td>
                        <td>Template of the current page report element.</td>
                    </tr>
                    <tr>
                        <td>lazy</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Defines if data is loaded and interacted with in lazy manner.</td>
                    </tr>
                    <tr>
                        <td>loading</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Displays a loader to indicate data load is in progress.</td>
                    </tr>
                    <tr>
                        <td>loadingIcon</td>
                        <td>string</td>
                        <td>pi pi-spinner</td>
                        <td>The icon to show while indicating data load is in progress.</td>
                    </tr>
                    <tr>
                        <td>rowHover</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When enabled, background of the rows change on hover.</td>
                    </tr>
                    <tr>
                        <td>autoLayout</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Whether the cell widths scale according to their content or not.</td>
                    </tr>
                    <tr>
                        <td>sortField</td>
                        <td>string</td>
                        <td>null</td>
                       <td>Property name or a getter function of a row data used for sorting by default.</td>
                    </tr>
                    <tr>
                        <td>sortOrder</td>
                        <td>number</td>
                        <td>null</td>
                        <td>Order to sort the data by default.</td>
                    </tr>
                    <tr>
                        <td>defaultSortOrder</td>
                        <td>number</td>
                        <td>1</td>
                        <td>Default sort order of an unsorted column.</td>
                    </tr>
                    <tr>
                        <td>multiSortMeta</td>
                        <td>array</td>
                        <td>null</td>
                        <td>An array of SortMeta objects to sort the data by default in multiple sort mode.</td>
                    </tr>
                    <tr>
                        <td>sortMode</td>
                        <td>string</td>
                        <td>single</td>
                        <td>Defines whether sorting works on single column or on multiple columns.</td>
                    </tr>
                    <tr>
                        <td>removableSort</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When enabled, columns can have an un-sorted state.</td>
                    </tr>
                    <tr>
                        <td>filters</td>
                        <td>object</td>
                        <td>null</td>
                        <td>Filters object with key-value pairs to define the filters.</td>
                    </tr>
                    <tr>
                        <td>filterMode</td>
                        <td>string</td>
                        <td>lenient</td>
                        <td>Mode for filtering valid values are "lenient" and "strict". Default is lenient.</td>
                    </tr>
                    <tr>
                        <td>filterLocale</td>
                        <td>string</td>
                        <td>undefined</td>
                        <td>Locale to use in filtering. The default locale is the host environment's current locale.</td>
                    </tr>
                    <tr>
                        <td>resizableColumns</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When enabled, columns can be resized using drag and drop.</td>
                    </tr>
                    <tr>
                        <td>columnResizeMode</td>
                        <td>string</td>
                        <td>fit</td>
                        <td>Defines whether the overall table width should change on column resize, <br/> valid values are "fit" and "expand".</td>
                    </tr>
                    <tr>
                        <td>indentation</td>
                        <td>number</td>
                        <td>1</td>
                        <td>Indentation factor as rem value for children nodes. Defaults to 1rem.</td>
                    </tr>
                    <tr>
                        <td>showGridlines</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Whether to show grid lines between cells.</td>
                    </tr>
                    <tr>
                        <td>scrollable</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When specified, enables horizontal and/or vertical scrolling.</td>
                    </tr>
                    <tr>
                        <td>scrollDirection</td>
                        <td>string</td>
                        <td>vertical</td>
                        <td>Orientation of the scrolling, options are "vertical", "horizontal" and "both".</td>
                    </tr>
                    <tr>
                        <td>scrollHeight</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Height of the scroll viewport in fixed pixels or the "flex" keyword for a dynamic size.</td>
                    </tr>
                    <tr>
                        <td>responsiveLayout</td>
                        <td>string</td>
                        <td>stack</td>
                        <td>Defines the responsive mode, currently only option is scroll..</td>
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
                        <td>page</td>
                        <td>event.originalEvent: Browser event <br >
                            event.page: New page number <br/>
                            event.pageCount: Total page count <br/>
                            event.first: Index of first record <br/>
                            event.rows: Number of rows to display in new page <br/>
                            event.sortField: Field to sort against <br />
                            event.sortOrder: Sort order as integer <br />
                            event.multiSortMeta: MultiSort metadata <br />
                            event.filters: Collection of active filters <br />
                            event.filterMatchModes: Match modes per field
                        </td>
                        <td>Callback to invoke on pagination. Sort and Filter information is also available for lazy loading implementation.</td>
                    </tr>
                    <tr>
                        <td>sort</td>
                        <td>event.originalEvent: Browser event <br >
                            event.first: Index of first record <br/>
                            event.rows: Number of rows to display in new page <br/>
                            event.sortField: Field to sort against <br />
                            event.sortOrder: Sort order as integer <br />
                            event.multiSortMeta: MultiSort metadata <br />
                            event.filters: Collection of active filters <br />
                            event.filterMatchModes: Match modes per field
                        </td>
                        <td>Callback to invoke on sort. Page and Filter information is also available for lazy loading implementation.</td>
                    </tr>
                    <tr>
                        <td>filter</td>
                        <td>event.originalEvent: Browser event <br >
                            event.first: Index of first record <br/>
                            event.rows: Number of rows to display in new page <br/>
                            event.sortField: Field to sort against <br />
                            event.sortOrder: Sort order as integer <br />
                            event.multiSortMeta: MultiSort metadata <br />
                            event.filters: Collection of active filters <br />
                            event.filteredValue: Filtered collection <br />
                            event.filterMatchModes: Match modes per field
                        </td>
                        <td>Event to emit after filtering, not triggered in lazy mode.</td>
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
                    <tr>
                        <td>column-resize-end</td>
                        <td>event.element: DOM element of the resized column.<br />
                            event.delta: Change in column width</td>
                        <td>Callback to invoke when a column is resized.</td>
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
                        <td>header</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>paginatorstart</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>paginatorend</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>empty</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>footer</td>
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
                        <td>p-treetable</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-treetable-scrollable</td>
                        <td>Container element when table is scrollable.</td>
                    </tr>
                    <tr>
                        <td>p-treetable-header</td>
                        <td>Header section.</td>
                    </tr>
                    <tr>
                        <td>p-treetable-footer</td>
                        <td>Footer section.</td>
                    </tr>
                    <tr>
                        <td>p-treetable-wrapper</td>
                        <td>Wrapper of table element.</td>
                    </tr>
                    <tr>
                        <td>p-treetable-table</td>
                        <td>Table element.</td>
                    </tr>
                        <tr>
                        <td>p-treetable-thead</td>
                        <td>Table thead element.</td>
                    </tr>
                        <tr>
                        <td>p-treetable-tbody</td>
                        <td>Table tbody element.</td>
                    </tr>
                        <tr>
                        <td>p-treetable-tfoot</td>
                        <td>Table tfoot element.</td>
                    </tr>
                    <tr>
                        <td>p-column-title</td>
                        <td>Title of a column.</td>
                    </tr>
                    <tr>
                        <td>p-sortable-column</td>
                        <td>Sortable column header.</td>
                    </tr>
                    <tr>
                        <td>p-frozen-column</td>
                        <td>Frozen column header.</td>
                    </tr>
                    <tr>
                        <td>p-treetable-toggler</td>
                        <td>Toggle element for a row.</td>
                    </tr>
                    <tr>
                        <td>p-treetable-emptymessage</td>
                        <td>Cell containing the empty message.</td>
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
        <div class="card">
            <h5>Basic</h5>
            <TreeTable :value="nodes">
                <Column field="name" header="Name" :expander="true"></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>

        <div class="card">
            <h5>Dynamic Columns</h5>
            <TreeTable :value="nodes">
                <Column v-for="col of columns" :key="col.field"
                    :field="col.field" :header="col.header" :expander="col.expander"></Column>
            </TreeTable>
        </div>

        <div class="card">
            <h5>Programmatic Control</h5>
            <div style="margin-bottom: 1em">
                <Button type="button" icon="pi pi-plus" label="Expand All" @click="expandAll" />
                <Button type="button" icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
            </div>
            <TreeTable :value="nodes" :expandedKeys="expandedKeys">
                <Column field="name" header="Name" :expander="true"></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    </div>
</template>

<script>
import NodeService from './service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            columns: null,
            expandedKeys: {}
        }
    },
    nodeService: null,
    created() {
        this.nodeService = new NodeService();

        this.columns = [
            {field: 'name', header: 'Vin', expander: true},
            {field: 'size', header: 'Size'},
            {field: 'type', header: 'Type'}
        ];
    },
    mounted() {
        this.nodeService.getTreeTableNodes().then(data => this.nodes = data);
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
button {
    margin-right: .5rem;
}
</style>`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <div class="card">
            <h5>Basic</h5>
            <TreeTable :value="nodes">
                <Column field="name" header="Name" :expander="true"></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>

        <div class="card">
            <h5>Dynamic Columns</h5>
            <TreeTable :value="nodes">
                <Column v-for="col of columns" :key="col.field"
                    :field="col.field" :header="col.header" :expander="col.expander"></Column>
            </TreeTable>
        </div>

        <div class="card">
            <h5>Programmatic Control</h5>
            <div style="margin-bottom: 1em">
                <Button type="button" icon="pi pi-plus" label="Expand All" @click="expandAll" />
                <Button type="button" icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
            </div>
            <TreeTable :value="nodes" :expandedKeys="expandedKeys">
                <Column field="name" header="Name" :expander="true"></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from "vue";
import NodeService from './service/NodeService';

export default {
    setup() {
        onMounted(() => {
            nodeService.value.getTreeTableNodes().then(data => nodes.value = data);
        })
        const nodes = ref();
        const expandedKeys = ref({});
        const nodeService = ref(new NodeService());
        const columns = ref([
            {field: 'name', header: 'Vin', expander: true},
            {field: 'size', header: 'Size'},
            {field: 'type', header: 'Type'}
        ]);
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
        return { nodes, columns, expandedKeys, nodeService, expandAll, collapseAll, expandNode }
    }
}
<\\/script>

<style scoped>
button {
    margin-right: .5rem;
}
</style>`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/treetable/treetable.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>
        <script src="./NodeService.js"><\\/script>`,
                    content: `<div id="app">
            <div class="card">
                <h5>Basic</h5>
                <p-treetable :value="nodes">
                    <p-column field="name" header="Name" :expander="true"></p-column>
                    <p-column field="size" header="Size"></p-column>
                    <p-column field="type" header="Type"></p-column>
                </p-treetable>
            </div>

            <div class="card">
                <h5>Dynamic Columns</h5>
                <p-treetable :value="nodes">
                    <p-column v-for="col of columns" :key="col.field"
                        :field="col.field" :header="col.header" :expander="col.expander"></p-column>
                </p-treetable>
            </div>

            <div class="card">
                <h5>Programmatic Control</h5>
                <div style="margin-bottom: 1em">
                    <p-button type="button" icon="pi pi-plus" label="Expand All" @click="expandAll"></p-button>
                    <p-button type="button" icon="pi pi-minus" label="Collapse All" @click="collapseAll"></p-button>
                </div>
                <p-treetable :value="nodes" :expanded-keys="expandedKeys">
                    <p-column field="name" header="Name" :expander="true"></p-column>
                    <p-column field="size" header="Size"></p-column>
                    <p-column field="type" header="Type"></p-column>
                </p-treetable>
            </div>
        </div>

        <script type="module">
        const { createApp, ref, onMounted } = Vue;

        const App = {
            setup() {
                onMounted(() => {
                    nodeService.value.getTreeTableNodes().then(data => nodes.value = data);
                })
                const nodes = ref();
                const expandedKeys = ref({});
                const nodeService = ref(new NodeService());
                const columns = ref([
                    {field: 'name', header: 'Vin', expander: true},
                    {field: 'size', header: 'Size'},
                    {field: 'type', header: 'Type'}
                ]);
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
                return { nodes, columns, expandedKeys, nodeService, expandAll, collapseAll, expandNode }
            },
            components: {
                "p-treetable": primevue.treetable,
                "p-column": primevue.column,
                "p-button": primevue.button
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>

        <style >
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
