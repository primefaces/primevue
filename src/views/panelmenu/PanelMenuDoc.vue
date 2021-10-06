<template>
	<AppDoc name="PanelMenuDemo" :sources="sources" github="panelmenu/PanelMenuDemo.vue">
        <h5>Import</h5>
<pre v-code.script><code>
import PanelMenu from 'primevue/panelmenu';

</code></pre>

        <h5>MenuModel</h5>
        <p>PanelMenu uses the common MenuModel API to define the items, visit <router-link to="/menumodel">MenuModel API</router-link> for details.</p>

		<h5>Getting Started</h5>
		<p>PanelMenu requires a collection of menuitems as its model.</p>
<pre v-code><code>
&lt;PanelMenu :model="items" /&gt;

</code></pre>

<div style="height: 400px; overflow:auto">
<pre v-code.script><code>
export default {
	data() {
		return {
			items: [
                {
                   label: 'File',
                   icon:'fw file',
                   items: [
                      {
                         label: 'New',
                         icon:'fw plus',
                         items: [
                            {
                               label: 'Bookmark',
                               icon:'fw bookmark'
                            },
                            {
                               label: 'Video',
                               icon:'fw video'
                            }
                         ]
                      },
                      {
                         label: 'Delete',
                         icon:'fw trash'
                      },
                      {
                         label: 'Export',
                         icon:'fw external-link'
                      }
                   ]
                },
                {
                   label: 'Edit',
                   icon:'fw pencil',
                   items: [
                      {
                         label: 'Left',
                         icon:'fw align-left'
                      },
                      {
                         label: 'Right',
                         icon:'fw align-right'
                      },
                      {
                         label: 'Center',
                         icon:'fw align-center'
                      },
                      {
                         label: 'Justify',
                         icon:'fw align-justify'
                      }
                   ]
                },
                {
                   label: 'Users',
                   icon:'fw user',
                   items: [
                      {
                         label: 'New',
                         icon:'fw user-plus',

                      },
                      {
                         label: 'Delete',
                         icon:'fw user-minus',
                      },
                      {
                         label: 'Search',
                         icon:'fw users',
                         items: [
                            {
                               label: 'Filter',
                               icon:'fw filter',
                               items: [
                                  {
                                     label: 'Print',
                                     icon:'fw print'
                                  }
                               ]
                            },
                            {
                               icon:'fw bars',
                               label: 'List'
                            }
                         ]
                      }
                   ]
                },
                {
                   label: 'Events',
                   icon:'fw calendar',
                   items: [
                      {
                         label: 'Edit',
                         icon:'fw pencil',
                         items: [
                            {
                               label: 'Save',
                               icon:'fw calendar-plus'
                            },
                            {
                               label: 'Delete',
                               icon:'fw calendar-minus'
                            }
                         ]
                      },
                      {
                         label: 'Archieve',
                         icon:'fw calendar-times',
                         items: [
                            {
                               label: 'Remove',
                               icon:'fw calendar-minus'
                            }
                         ]
                      }
                   ]
                }
             ]
		}
	}
}

</code></pre>
</div>

         <h5>Templating</h5>
         <p>PanelMenu offers content customization with the <i>item</i> template that receives the menuitem instance from the model as a parameter.</p>
<pre v-code><code><template v-pre>
&lt;PanelMenu :model="items"&gt;
    &lt;template #item="{item}"&gt;
        &lt;a :href="item.url"&gt;{{item.label}}&lt;/a&gt;
    &lt;/template&gt;
&lt;/PanelMenu&gt;
</template>
</code></pre>

        <p><i>router-link</i> with route configuration can also be used within templating for further customization.</p>
<pre v-code><code><template v-pre>
&lt;PanelMenu :model="items"&gt;
    &lt;template #item="{item}"&gt;
        &lt;router-link :to="item.to" custom v-slot="{href, route, navigate, isActive, isExactActive}"&gt;
            &lt;a :href="href" @click="navigate" :class="{'active-link': isActive, 'active-link-exact": isExactActive}&gt;{{route.fullPath}}&lt;/a&gt;
        &lt;/router-link&gt;
    &lt;/template&gt;
&lt;/PanelMenu&gt;
</template>
</code></pre>

        <h5>Programmatic Control</h5>
        <p>If the menuitem has a <i>key</i> defined, PanelMenu state can be controlled programmatically with the <i>expandedKeys</i> property that defines the keys
            that are expanded. This property is a Map instance whose key is the key of a node and value is a boolean. Note that <i>expandedKeys</i> also supports two-way binding with the v-model directive.
        </p>

        <p>Example below expands and collapses all nodes with buttons.</p>
<pre v-code><code><template v-pre>
&lt;div&gt;
    &lt;Button type="button" icon="plus" label="Expand All" @click="expandAll" /&gt;
    &lt;Button type="button" icon="minus" label="Collapse All" @click="collapseAll" /&gt;
&lt;/div&gt;
&lt;PanelMenu :model="items" v-model:expandedKeys="expandedKeys""&gt;&lt;/PanelMenu&gt;
</template>
</code></pre>

<div style="height: 400px; overflow:auto">
<pre v-code.script><code>
export default {
    data() {
        return {
            items: [{
                    key: '0',
                    label: 'File',
                    icon: 'fw file',
                    items: [{
                            key: '0_0',
                            label: 'New',
                            icon: 'fw plus',
                            items: [{
                                    key: '0_0_0',
                                    label: 'Bookmark',
                                    icon: 'fw bookmark'
                                },
                                {
                                    key: '0_0_1',
                                    label: 'Video',
                                    icon: 'fw video'
                                }
                            ]
                        },
                        {
                            key: '0_1',
                            label: 'Delete',
                            icon: 'fw trash'
                        },
                        {
                            key: '0_2',
                            label: 'Export',
                            icon: 'fw external-link'
                        }
                    ]
                },
                {
                    key: '1',
                    label: 'Edit',
                    icon: 'fw pencil',
                    items: [{
                            key: '1_0',
                            label: 'Left',
                            icon: 'fw align-left'
                        },
                        {
                            key: '1_1',
                            label: 'Right',
                            icon: 'fw align-right'
                        },
                        {
                            key: '1_2',
                            label: 'Center',
                            icon: 'fw align-center'
                        },
                        {
                            key: '1_3',
                            label: 'Justify',
                            icon: 'fw align-justify'
                        }
                    ]
                },
                {
                    key: '2',
                    label: 'Users',
                    icon: 'fw user',
                    items: [{
                            key: '2_0',
                            label: 'New',
                            icon: 'fw user-plus',

                        },
                        {
                            key: '2_1',
                            label: 'Delete',
                            icon: 'fw user-minus',
                        },
                        {
                            key: '2_2',
                            label: 'Search',
                            icon: 'fw users',
                            items: [{
                                    key: '2_2_0',
                                    label: 'Filter',
                                    icon: 'fw filter',
                                    items: [{
                                        key: '2_2_0_0',
                                        label: 'Print',
                                        icon: 'fw print'
                                    }]
                                },
                                {
                                    key: '2_2_1',
                                    icon: 'fw bars',
                                    label: 'List'
                                }
                            ]
                        }
                    ]
                },
                {
                    key: '3',
                    label: 'Events',
                    icon: 'fw calendar',
                    items: [{
                            key: '3_0',
                            label: 'Edit',
                            icon: 'fw pencil',
                            items: [{
                                    key: '3_0_0',
                                    label: 'Save',
                                    icon: 'fw calendar-plus'
                                },
                                {
                                    key: '3_0_0',
                                    label: 'Delete',
                                    icon: 'fw calendar-minus'
                                }
                            ]
                        },
                        {
                            key: '3_1',
                            label: 'Archieve',
                            icon: 'fw calendar-times',
                            items: [{
                                key: '3_1_0',
                                label: 'Remove',
                                icon: 'fw calendar-minus'
                            }]
                        }
                    ]
                }
            ],
            expandedKeys: {}
        }
    },
    methods: {
        expandAll() {
            for (let node of this.items) {
                this.expandNode(node);
            }

            this.expandedKeys = {
                ...this.expandedKeys
            };
        },
        collapseAll() {
            this.expandedKeys = {};
        },
        expandNode(node) {
            if (node.items && node.items.length) {
                this.expandedKeys[node.key] = true;

                for (let child of node.items) {
                    this.expandNode(child);
                }
            }
        }
    }
}

</code></pre>
</div>

        <p class="p-mt-3">In order to display some nodes as expanded by default, simply add their keys to the map.</p>
<pre v-code.script><code>
export default {
    data() {
        return {
            items: //menu model instance,
            expandedKeys: {}
        }
    },
    mounted() {
        this.expandedKeys[this.items[0.key]] = true;
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
                        <td>model</td>
                        <td>array</td>
                        <td>null</td>
                        <td>An array of menuitems.</td>
                    </tr>
                    <tr>
                        <td>expandedKeys</td>
                        <td>array</td>
                        <td>null</td>
                        <td>A map of keys to represent the expansion state in controlled mode.</td>
                    </tr>
                    <tr>
                        <td>exact</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Whether to apply 'router-link-active-exact' class if route exactly matches the item path.</td>
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
                  <td>item</td>
                  <td>item: Menuitem instance</td>
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
                        <td>p-panelmenu</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-panelmenu-header</td>
                        <td>Accordion header of root submenu.</td>
                    </tr>
                    <tr>
                        <td>p-panelmenu-content</td>
                        <td>Accordion content of root submenu.</td>
                    </tr>
                    <tr>
                        <td>p-submenu-list</td>
                        <td>List element.</td>
                    </tr>
                    <tr>
                        <td>p-menuitem</td>
                        <td>Menuitem element.</td>
                    </tr>
                    <tr>
                        <td>p-menuitem-text</td>
                        <td>Label of a menuitem.</td>
                    </tr>
                    <tr>
                        <td>p-menuitem-icon</td>
                        <td>Icon of a menuitem.</td>
                    </tr>
                    <tr>
                        <td>p-panelmenu-icon</td>
                        <td>Arrow icon of an accordion header.</td>
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
        <h5>Default</h5>
         <PanelMenu :model="items" />

         <h5>Programmatic</h5>
         <div class="p-mb-3">
               <Button type="button" icon="plus" label="Expand All" @click="expandAll" class="p-mr-2" />
               <Button type="button" icon="minus" label="Collapse All" @click="collapseAll" />
            </div>
         <PanelMenu :model="items" :expandedKeys="expandedKeys" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            expandedKeys: {},
            items: [{
                    key: '0',
                    label: 'File',
                    icon: 'fw file',
                    items: [{
                            key: '0_0',
                            label: 'New',
                            icon: 'fw plus',
                            items: [{
                                    key: '0_0_0',
                                    label: 'Bookmark',
                                    icon: 'fw bookmark'
                                },
                                {
                                    key: '0_0_1',
                                    label: 'Video',
                                    icon: 'fw video'
                                }
                            ]
                        },
                        {
                            key: '0_1',
                            label: 'Delete',
                            icon: 'fw trash'
                        },
                        {
                            key: '0_2',
                            label: 'Export',
                            icon: 'fw external-link'
                        }
                    ]
                },
                {
                    key: '1',
                    label: 'Edit',
                    icon: 'fw pencil',
                    items: [{
                            key: '1_0',
                            label: 'Left',
                            icon: 'fw align-left'
                        },
                        {
                            key: '1_1',
                            label: 'Right',
                            icon: 'fw align-right'
                        },
                        {
                            key: '1_2',
                            label: 'Center',
                            icon: 'fw align-center'
                        },
                        {
                            key: '1_3',
                            label: 'Justify',
                            icon: 'fw align-justify'
                        }
                    ]
                },
                {
                    key: '2',
                    label: 'Users',
                    icon: 'fw user',
                    items: [{
                            key: '2_0',
                            label: 'New',
                            icon: 'fw user-plus',

                        },
                        {
                            key: '2_1',
                            label: 'Delete',
                            icon: 'fw user-minus',
                        },
                        {
                            key: '2_2',
                            label: 'Search',
                            icon: 'fw users',
                            items: [{
                                    key: '2_2_0',
                                    label: 'Filter',
                                    icon: 'fw filter',
                                    items: [{
                                        key: '2_2_0_0',
                                        label: 'Print',
                                        icon: 'fw print'
                                    }]
                                },
                                {
                                    key: '2_2_1',
                                    icon: 'fw bars',
                                    label: 'List'
                                }
                            ]
                        }
                    ]
                },
                {
                    key: '3',
                    label: 'Events',
                    icon: 'fw calendar',
                    items: [{
                            key: '3_0',
                            label: 'Edit',
                            icon: 'fw pencil',
                            items: [{
                                    key: '3_0_0',
                                    label: 'Save',
                                    icon: 'fw calendar-plus'
                                },
                                {
                                    key: '3_0_0',
                                    label: 'Delete',
                                    icon: 'fw calendar-minus'
                                }
                            ]
                        },
                        {
                            key: '3_1',
                            label: 'Archieve',
                            icon: 'fw calendar-times',
                            items: [{
                                key: '3_1_0',
                                label: 'Remove',
                                icon: 'fw calendar-minus'
                            }]
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        expandAll() {
            for (let node of this.items) {
                this.expandNode(node);
            }

            this.expandedKeys = {
                ...this.expandedKeys
            };
        },
        collapseAll() {
            this.expandedKeys = {};
        },
        expandNode(node) {
            if (node.items && node.items.length) {
                this.expandedKeys[node.key] = true;

                for (let child of node.items) {
                    this.expandNode(child);
                }
            }
        }
    }
}
<\\/script>

<style scoped lang="scss">
.p-panelmenu {
    width: 22rem;
}
</style>
`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <h5>Default</h5>
         <PanelMenu :model="items" />

         <h5>Programmatic</h5>
         <div class="p-mb-3">
               <Button type="button" icon="plus" label="Expand All" @click="expandAll" class="p-mr-2" />
               <Button type="button" icon="minus" label="Collapse All" @click="collapseAll" />
            </div>
         <PanelMenu :model="items" :expandedKeys="expandedKeys" />
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const expandedKeys = ref({});
        const items = ref([{
                  key: '0',
                  label: 'File',
                  icon: 'fw file',
                  items: [{
                           key: '0_0',
                           label: 'New',
                           icon: 'fw plus',
                           items: [{
                                 key: '0_0_0',
                                 label: 'Bookmark',
                                 icon: 'fw bookmark'
                              },
                              {
                                 key: '0_0_1',
                                 label: 'Video',
                                 icon: 'fw video'
                              }
                           ]
                     },
                     {
                           key: '0_1',
                           label: 'Delete',
                           icon: 'fw trash'
                     },
                     {
                           key: '0_2',
                           label: 'Export',
                           icon: 'fw external-link'
                     }
                  ]
               },
               {
                  key: '1',
                  label: 'Edit',
                  icon: 'fw pencil',
                  items: [{
                           key: '1_0',
                           label: 'Left',
                           icon: 'fw align-left'
                     },
                     {
                           key: '1_1',
                           label: 'Right',
                           icon: 'fw align-right'
                     },
                     {
                           key: '1_2',
                           label: 'Center',
                           icon: 'fw align-center'
                     },
                     {
                           key: '1_3',
                           label: 'Justify',
                           icon: 'fw align-justify'
                     }
                  ]
               },
               {
                  key: '2',
                  label: 'Users',
                  icon: 'fw user',
                  items: [{
                           key: '2_0',
                           label: 'New',
                           icon: 'fw user-plus',

                     },
                     {
                           key: '2_1',
                           label: 'Delete',
                           icon: 'fw user-minus',
                     },
                     {
                           key: '2_2',
                           label: 'Search',
                           icon: 'fw users',
                           items: [{
                                 key: '2_2_0',
                                 label: 'Filter',
                                 icon: 'fw filter',
                                 items: [{
                                       key: '2_2_0_0',
                                       label: 'Print',
                                       icon: 'fw print'
                                 }]
                              },
                              {
                                 key: '2_2_1',
                                 icon: 'fw bars',
                                 label: 'List'
                              }
                           ]
                     }
                  ]
               },
               {
                  key: '3',
                  label: 'Events',
                  icon: 'fw calendar',
                  items: [{
                           key: '3_0',
                           label: 'Edit',
                           icon: 'fw pencil',
                           items: [{
                                 key: '3_0_0',
                                 label: 'Save',
                                 icon: 'fw calendar-plus'
                              },
                              {
                                 key: '3_0_0',
                                 label: 'Delete',
                                 icon: 'fw calendar-minus'
                              }
                           ]
                     },
                     {
                           key: '3_1',
                           label: 'Archieve',
                           icon: 'fw calendar-times',
                           items: [{
                              key: '3_1_0',
                              label: 'Remove',
                              icon: 'fw calendar-minus'
                           }]
                     }
                  ]
               }
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

        return { items, expandedKeys, expandAll, collapseAll, expandNode }
    }
}
<\\/script>

<style scoped lang="scss">
.p-panelmenu {
    width: 22rem;
}
</style>
`
                }
            }
        }
    }
}
</script>
