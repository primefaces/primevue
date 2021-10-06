<template>
	<AppDoc name="ContextMenuDemo" :sources="sources" github="contextmenu/ContextMenuDemo.vue">
        <h5>Import</h5>
<pre v-code.script><code>
import ContextMenu from 'primevue/contextmenu';

</code></pre>

        <h5>MenuModel</h5>
        <p>ContextMenu uses the common MenuModel API to define the items, visit <router-link to="/menumodel">MenuModel API</router-link> for details.</p>

		<h5>Getting Started</h5>
		<p>ContextMenu requires a collection of menuitems as its model.</p>

<pre v-code.script><code>
export default {
    data() {
        return {
            items: [
                {
                   label:'File',
                   icon:'fw file',
                   items:[
                      {
                         label:'New',
                         icon:'fw plus',
                         items:[
                            {
                               label:'Bookmark',
                               icon:'fw bookmark'
                            },
                            {
                               label:'Video',
                               icon:'fw video'
                            },

                         ]
                      },
                      {
                         label:'Delete',
                         icon:'fw trash'
                      },
                      {
                         separator:true
                      },
                      {
                         label:'Export',
                         icon:'fw external-link'
                      }
                   ]
                },
                {
                   label:'Edit',
                   icon:'fw pencil',
                   items:[
                      {
                         label:'Left',
                         icon:'fw align-left'
                      },
                      {
                         label:'Right',
                         icon:'fw align-right'
                      },
                      {
                         label:'Center',
                         icon:'fw align-center'
                      },
                      {
                         label:'Justify',
                         icon:'fw align-justify'
                      },

                   ]
                },
                {
                   label:'Users',
                   icon:'fw user',
                   items:[
                      {
                         label:'New',
                         icon:'fw user-plus',

                      },
                      {
                         label:'Delete',
                         icon:'fw user-minus',

                      },
                      {
                         label:'Search',
                         icon:'fw users',
                         items:[
                            {
                               label:'Filter',
                               icon:'fw filter',
                               items:[
                                  {
                                     label:'Print',
                                     icon:'fw print'
                                  }
                               ]
                            },
                            {
                               icon:'fw bars',
                               label:'List'
                            }
                         ]
                      }
                   ]
                },
                {
                   label:'Events',
                   icon:'fw calendar',
                   items:[
                      {
                         label:'Edit',
                         icon:'fw pencil',
                         items:[
                            {
                               label:'Save',
                               icon:'fw calendar-plus'
                            },
                            {
                               label:'Delete',
                               icon:'fw calendar-minus'
                            },

                         ]
                      },
                      {
                         label:'Archieve',
                         icon:'fw calendar-times',
                         items:[
                            {
                               label:'Remove',
                               icon:'fw calendar-minus'
                            }
                         ]
                      }
                   ]
                },
                {
                   separator:true
                },
                {
                   label:'Quit',
                   icon:'fw power-off'
                }
             ]
        }
    }
}

</code></pre>

        <h5>Document Menu</h5>
        <p>Setting global property attaches the context menu to the document.</p>
<pre v-code><code>
&lt;ContextMenu :global="true" :model="items" /&gt;

</code></pre>

        <h5>Element Menu</h5>
        <p>ContextMenu is attached to a custom element manually using the reference and calling the <i>show(event)</i> method.</p>

<pre v-code><code>
&lt;img alt="logo" src="demo/images/nature/nature3.jpg" @contextmenu="onImageRightClick"&gt;
&lt;ContextMenu ref="menu" :model="items" /&gt;

</code></pre>

<pre v-code.script><code>
export default {
    data() {
        return {
            items: //items
        }
    },
    methods: {
        onImageRightClick(event) {
            this.$refs.menu.show(event);
        }
    }
}

</code></pre>

         <h5>Templating</h5>
         <p>ContextMenu offers content customization with the <i>item</i> template that receives the menuitem instance from the model as a parameter.</p>
<pre v-code><code><template v-pre>
&lt;ContextMenu :model="items"&gt;
    &lt;template #item="{item}"&gt;
        &lt;a :href="item.url"&gt;{{item.label}}&lt;/a&gt;
    &lt;/template&gt;
&lt;/ContextMenu&gt;
</template>
</code></pre>

<p><i>router-link</i> with route configuration can also be used within templating for further customization.</p>
<pre v-code><code><template v-pre>
&lt;ContextMenu :model="items"&gt;
    &lt;template #item="{item}"&gt;
        &lt;router-link :to="item.to" custom v-slot="{href, route, navigate, isActive, isExactActive}"&gt;
            &lt;a :href="href" @click="navigate" :class="{'active-link': isActive, 'active-link-exact": isExactActive}&gt;{{route.fullPath}}&lt;/a&gt;
        &lt;/router-link&gt;
    &lt;/template&gt;
&lt;/ContextMenu&gt;
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
                        <td>model</td>
                        <td>array</td>
                        <td>null</td>
                        <td>An array of menuitems.</td>
                    </tr>
                    <tr>
                        <td>appendTo</td>
                        <td>string</td>
                        <td>body</td>
                        <td>A valid query selector or an HTMLElement to specify where the overlay gets attached.</td>
                    </tr>
                    <tr>
                        <td>baseZIndex</td>
                        <td>number</td>
                        <td>0</td>
                        <td>Base zIndex value to use in layering.</td>
                    </tr>
                    <tr>
                        <td>autoZIndex</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Whether to automatically manage layering.</td>
                    </tr>
                    <tr>
                        <td>global</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Attaches the menu to document instead of a particular item.</td>
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
                        <td>toggle</td>
                        <td>event: Browser event</td>
                        <td>Toggles the visibility of the menu.</td>
                    </tr>
                    <tr>
                        <td>show</td>
                        <td>event: Browser event</td>
                        <td>Shows the menu.</td>
                    </tr>
                    <tr>
                        <td>hide</td>
                        <td>-</td>
                        <td>Hides the menu.</td>
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
                        <td>p-contextmenu</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-submenu-list</td>
                        <td>Submenu list element.</td>
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
                        <td>p-submenu-icon</td>
                        <td>Arrow icon of a submenu.</td>
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
      <img alt="logo" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" @contextmenu="onImageRightClick" aria-haspopup="true">
      <ContextMenu ref="menu" :model="items" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                   label:'File',
                   icon:'fw file',
                   items:[
                      {
                         label:'New',
                         icon:'fw plus',
                         items:[
                            {
                               label:'Bookmark',
                               icon:'fw bookmark'
                            },
                            {
                               label:'Video',
                               icon:'fw video'
                            },

                         ]
                      },
                      {
                         label:'Delete',
                         icon:'fw trash'
                      },
                      {
                         separator:true
                      },
                      {
                         label:'Export',
                         icon:'fw external-link'
                      }
                   ]
                },
                {
                   label:'Edit',
                   icon:'fw pencil',
                   items:[
                      {
                         label:'Left',
                         icon:'fw align-left'
                      },
                      {
                         label:'Right',
                         icon:'fw align-right'
                      },
                      {
                         label:'Center',
                         icon:'fw align-center'
                      },
                      {
                         label:'Justify',
                         icon:'fw align-justify'
                      },

                   ]
                },
                {
                   label:'Users',
                   icon:'fw user',
                   items:[
                      {
                         label:'New',
                         icon:'fw user-plus',

                      },
                      {
                         label:'Delete',
                         icon:'fw user-minus',

                      },
                      {
                         label:'Search',
                         icon:'fw users',
                         items:[
                            {
                               label:'Filter',
                               icon:'fw filter',
                               items:[
                                  {
                                     label:'Print',
                                     icon:'fw print'
                                  }
                               ]
                            },
                            {
                               icon:'fw bars',
                               label:'List'
                            }
                         ]
                      }
                   ]
                },
                {
                   label:'Events',
                   icon:'fw calendar',
                   items:[
                      {
                         label:'Edit',
                         icon:'fw pencil',
                         items:[
                            {
                               label:'Save',
                               icon:'fw calendar-plus'
                            },
                            {
                               label:'Delete',
                               icon:'fw calendar-minus'
                            },

                         ]
                      },
                      {
                         label:'Archieve',
                         icon:'fw calendar-times',
                         items:[
                            {
                               label:'Remove',
                               icon:'fw calendar-minus'
                            }
                         ]
                      }
                   ]
                },
                {
                   separator:true
                },
                {
                   label:'Quit',
                   icon:'fw power-off'
                }
             ]
        }
    },
    methods: {
        onImageRightClick(event) {
            this.$refs.menu.show(event);
        }
    }
}
<\\/script>
`
            },
            'composition-api': {
               tabName: 'Composition API Source',
               content: `
<template>
   <div>
      <img alt="logo" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" @contextmenu="onImageRightClick" aria-haspopup="true">
      <ContextMenu ref="menu" :model="items" />
   </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const menu = ref();
        const items = ref([
            {
               label:'File',
               icon:'fw file',
               items:[
                    {
                        label:'New',
                        icon:'fw plus',
                        items:[
                           {
                              label:'Bookmark',
                              icon:'fw bookmark'
                           },
                           {
                              label:'Video',
                              icon:'fw video'
                           },
                        ]
                    },
                    {
                        label:'Delete',
                        icon:'fw trash'
                    },
                    {
                       separator:true
                    },
                    {
                       label:'Export',
                       icon:'fw external-link'
                    }
                ]
            },
            {
               label:'Edit',
               icon:'fw pencil',
               items:[
                    {
                        label:'Left',
                        icon:'fw align-left'
                    },
                    {
                        label:'Right',
                        icon:'fw align-right'
                    },
                    {
                        label:'Center',
                        icon:'fw align-center'
                    },
                    {
                        label:'Justify',
                        icon:'fw align-justify'
                    },
               ]
            },
            {
               label:'Users',
               icon:'fw user',
               items:[
                    {
                        label:'New',
                        icon:'fw user-plus',
                    },
                    {
                        label:'Delete',
                        icon:'fw user-minus',
                    },
                    {
                        label:'Search',
                        icon:'fw users',
                        items:[
                            {
                                label:'Filter',
                                icon:'fw filter',
                                items:[
                                    {
                                        label:'Print',
                                        icon:'fw print'
                                    }
                                ]
                            },
                            {
                                icon:'fw bars',
                                label:'List'
                            }
                        ]
                    }
                ]
            },
            {
               label:'Events',
               icon:'fw calendar',
               items:[
                    {
                         label:'Edit',
                         icon:'fw pencil',
                         items:[
                            {
                               label:'Save',
                               icon:'fw calendar-plus'
                            },
                            {
                               label:'Delete',
                               icon:'fw calendar-minus'
                            },

                         ]
                    },
                    {
                         label:'Archieve',
                         icon:'fw calendar-times',
                         items:[
                            {
                               label:'Remove',
                               icon:'fw calendar-minus'
                            }
                         ]
                    }
                ]
            },
            {
               separator:true
            },
            {
               label:'Quit',
               icon:'fw power-off'
            }
        ]);

        const onImageRightClick = (event) => {
            menu.value.show(event);
        };

        return { menu, items, onImageRightClick }
    }
}
<\\/script>
`
            }
         }
        }
    }
}
</script>
