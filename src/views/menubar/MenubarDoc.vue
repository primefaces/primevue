<template>
	<AppDoc name="MenubarDemo" :sources="sources" github="menubar/MenubarDemo.vue">
        <h5>Import</h5>
<pre v-code.script><code>
import Menubar from 'primevue/menubar';

</code></pre>

        <h5>MenuModel</h5>
        <p>Menubar uses the common MenuModel API to define the items, visit <router-link to="/menumodel">MenuModel API</router-link> for details.</p>

		<h5>Getting Started</h5>
		<p>Menubar requires a collection of menuitems as its model.</p>
<pre v-code><code>
&lt;Menubar :model="items" /&gt;

</code></pre>

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
                   label:'Quit',
                   icon:'fw power-off'
                }
             ]
        }
    }
}

</code></pre>

        <h5>Templating</h5>
        <p>Two slots named "start" and "end" are provided to embed content before or after the menubar. In additon Menubar, offers item customization with the <i>item</i> template that receives the menuitem instance from the model as a parameter.</p>
<pre v-code><code><template v-pre>
&lt;Menubar :model="items"&gt;
    &lt;template #start&gt;
        Before
    &lt;/template&gt;
    &lt;template #item="{item}"&gt;
        &lt;a :href="item.url"&gt;{{item.label}}&lt;/a&gt;
    &lt;/template&gt;
    &lt;template #end&gt;
        After
    &lt;/template&gt;
&lt;/Menubar&gt;
</template>
</code></pre>

<p><i>router-link</i> with route configuration can also be used within templating for further customization.</p>
<pre v-code><code><template v-pre>
&lt;Menubar :model="items"&gt;
    &lt;template #item="{item}"&gt;
        &lt;router-link :to="item.to" custom v-slot="{href, route, navigate, isActive, isExactActive}"&gt;
            &lt;a :href="href" @click="navigate" :class="{'active-link': isActive, 'active-link-exact": isExactActive}&gt;{{route.fullPath}}&lt;/a&gt;
        &lt;/router-link&gt;
    &lt;/template&gt;
&lt;/Menubar&gt;
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
                     <td>start</td>
                     <td>-</td>
                  </tr>
                  <tr>
                     <td>end</td>
                     <td>-</td>
                  </tr>
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
                        <td>p-menubar</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-menubar-root-list</td>
                        <td>Root list element.</td>
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
        <Menubar :model="items">
            <template #start>
                <img alt="logo" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" height="40" class="p-mr-2">
            </template>
            <template #end>
                <InputText placeholder="Search" type="text" />
            </template>
        </Menubar>
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
                   label:'Quit',
                   icon:'fw power-off'
                }
             ]
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
        <Menubar :model="items">
            <template #start>
                <img alt="logo" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" height="40" class="p-mr-2">
            </template>
            <template #end>
                <InputText placeholder="Search" type="text" />
            </template>
        </Menubar>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
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
               label:'Quit',
               icon:'fw power-off'
            }
        ]);

        return { items }
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
