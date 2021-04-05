<template>
	<AppDoc name="PanelMenuDemo" :sources="sources">
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

<pre v-code.script><code>
export default {
	data() {
		return {
			items: [
                {
                   label: 'File',
                   icon:'pi pi-fw pi-file',
                   items: [
                      {
                         label: 'New',
                         icon:'pi pi-fw pi-plus',
                         items: [
                            {
                               label: 'Bookmark',
                               icon:'pi pi-fw pi-bookmark'
                            },
                            {
                               label: 'Video',
                               icon:'pi pi-fw pi-video'
                            }
                         ]
                      },
                      {
                         label: 'Delete',
                         icon:'pi pi-fw pi-trash'
                      },
                      {
                         label: 'Export',
                         icon:'pi pi-fw pi-external-link'
                      }
                   ]
                },
                {
                   label: 'Edit',
                   icon:'pi pi-fw pi-pencil',
                   items: [
                      {
                         label: 'Left',
                         icon:'pi pi-fw pi-align-left'
                      },
                      {
                         label: 'Right',
                         icon:'pi pi-fw pi-align-right'
                      },
                      {
                         label: 'Center',
                         icon:'pi pi-fw pi-align-center'
                      },
                      {
                         label: 'Justify',
                         icon:'pi pi-fw pi-align-justify'
                      }
                   ]
                },
                {
                   label: 'Users',
                   icon:'pi pi-fw pi-user',
                   items: [
                      {
                         label: 'New',
                         icon:'pi pi-fw pi-user-plus',

                      },
                      {
                         label: 'Delete',
                         icon:'pi pi-fw pi-user-minus',
                      },
                      {
                         label: 'Search',
                         icon:'pi pi-fw pi-users',
                         items: [
                            {
                               label: 'Filter',
                               icon:'pi pi-fw pi-filter',
                               items: [
                                  {
                                     label: 'Print',
                                     icon:'pi pi-fw pi-print'
                                  }
                               ]
                            },
                            {
                               icon:'pi pi-fw pi-bars',
                               label: 'List'
                            }
                         ]
                      }
                   ]
                },
                {
                   label: 'Events',
                   icon:'pi pi-fw pi-calendar',
                   items: [
                      {
                         label: 'Edit',
                         icon:'pi pi-fw pi-pencil',
                         items: [
                            {
                               label: 'Save',
                               icon:'pi pi-fw pi-calendar-plus'
                            },
                            {
                               label: 'Delete',
                               icon:'pi pi-fw pi-calendar-minus'
                            }
                         ]
                      },
                      {
                         label: 'Archieve',
                         icon:'pi pi-fw pi-calendar-times',
                         items: [
                            {
                               label: 'Remove',
                               icon:'pi pi-fw pi-calendar-minus'
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
        <PanelMenu :model="items" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                   label: 'File',
                   icon:'pi pi-fw pi-file',
                   items: [
                      {
                         label: 'New',
                         icon:'pi pi-fw pi-plus',
                         items: [
                            {
                               label: 'Bookmark',
                               icon:'pi pi-fw pi-bookmark'
                            },
                            {
                               label: 'Video',
                               icon:'pi pi-fw pi-video'
                            }
                         ]
                      },
                      {
                         label: 'Delete',
                         icon:'pi pi-fw pi-trash'
                      },
                      {
                         label: 'Export',
                         icon:'pi pi-fw pi-external-link'
                      }
                   ]
                },
                {
                   label: 'Edit',
                   icon:'pi pi-fw pi-pencil',
                   items: [
                      {
                         label: 'Left',
                         icon:'pi pi-fw pi-align-left'
                      },
                      {
                         label: 'Right',
                         icon:'pi pi-fw pi-align-right'
                      },
                      {
                         label: 'Center',
                         icon:'pi pi-fw pi-align-center'
                      },
                      {
                         label: 'Justify',
                         icon:'pi pi-fw pi-align-justify'
                      }
                   ]
                },
                {
                   label: 'Users',
                   icon:'pi pi-fw pi-user',
                   items: [
                      {
                         label: 'New',
                         icon:'pi pi-fw pi-user-plus',

                      },
                      {
                         label: 'Delete',
                         icon:'pi pi-fw pi-user-minus',
                      },
                      {
                         label: 'Search',
                         icon:'pi pi-fw pi-users',
                         items: [
                            {
                               label: 'Filter',
                               icon:'pi pi-fw pi-filter',
                               items: [
                                  {
                                     label: 'Print',
                                     icon:'pi pi-fw pi-print'
                                  }
                               ]
                            },
                            {
                               icon:'pi pi-fw pi-bars',
                               label: 'List'
                            }
                         ]
                      }
                   ]
                },
                {
                   label: 'Events',
                   icon:'pi pi-fw pi-calendar',
                   items: [
                      {
                         label: 'Edit',
                         icon:'pi pi-fw pi-pencil',
                         items: [
                            {
                               label: 'Save',
                               icon:'pi pi-fw pi-calendar-plus'
                            },
                            {
                               label: 'Delete',
                               icon:'pi pi-fw pi-calendar-minus'
                            }
                         ]
                      },
                      {
                         label: 'Archieve',
                         icon:'pi pi-fw pi-calendar-times',
                         items: [
                            {
                               label: 'Remove',
                               icon:'pi pi-fw pi-calendar-minus'
                            }
                         ]
                      }
                   ]
                }
             ]
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
        <PanelMenu :model="items" />
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const items = ref([
            {
               label: 'File',
               icon:'pi pi-fw pi-file',
               items: [
                  {
                     label: 'New',
                     icon:'pi pi-fw pi-plus',
                     items: [
                        {
                           label: 'Bookmark',
                           icon:'pi pi-fw pi-bookmark'
                        },
                        {
                           label: 'Video',
                           icon:'pi pi-fw pi-video'
                        }
                     ]
                  },
                  {
                     label: 'Delete',
                     icon:'pi pi-fw pi-trash'
                  },
                  {
                     label: 'Export',
                     icon:'pi pi-fw pi-external-link'
                  }
               ]
            },
            {
               label: 'Edit',
               icon:'pi pi-fw pi-pencil',
               items: [
                  {
                     label: 'Left',
                     icon:'pi pi-fw pi-align-left'
                  },
                  {
                     label: 'Right',
                     icon:'pi pi-fw pi-align-right'
                  },
                  {
                     label: 'Center',
                     icon:'pi pi-fw pi-align-center'
                  },
                  {
                     label: 'Justify',
                     icon:'pi pi-fw pi-align-justify'
                  }
               ]
            },
            {
               label: 'Users',
               icon:'pi pi-fw pi-user',
               items: [
                  {
                     label: 'New',
                     icon:'pi pi-fw pi-user-plus',
                  },
                  {
                     label: 'Delete',
                     icon:'pi pi-fw pi-user-minus',
                  },
                  {
                     label: 'Search',
                     icon:'pi pi-fw pi-users',
                     items: [
                        {
                           label: 'Filter',
                           icon:'pi pi-fw pi-filter',
                           items: [
                              {
                                 label: 'Print',
                                 icon:'pi pi-fw pi-print'
                              }
                           ]
                        },
                        {
                           icon:'pi pi-fw pi-bars',
                           label: 'List'
                        }
                     ]
                  }
               ]
            },
            {
               label: 'Events',
               icon:'pi pi-fw pi-calendar',
               items: [
                  {
                     label: 'Edit',
                     icon:'pi pi-fw pi-pencil',
                     items: [
                        {
                           label: 'Save',
                           icon:'pi pi-fw pi-calendar-plus'
                        },
                        {
                           label: 'Delete',
                           icon:'pi pi-fw pi-calendar-minus'
                        }
                     ]
                  },
                  {
                     label: 'Archieve',
                     icon:'pi pi-fw pi-calendar-times',
                     items: [
                        {
                           label: 'Remove',
                           icon:'pi pi-fw pi-calendar-minus'
                        }
                     ]
                  }
               ]
            }
        ]);

        return { items }
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