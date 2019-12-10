<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import ContextMenu from 'primevue/contextmenu';
</CodeHighlight>

                <h3>MenuModel</h3>
                <p>ContextMenu uses the common MenuModel API to define the items, visit <router-link to="/menumodel">MenuModel API</router-link> for details.</p>

				<h3>Getting Started</h3>
				<p>ContextMenu requires a collection of menuitems as its model.</p>

<CodeHighlight lang="js">
export default {
    data() {
        return {
            items: [
                {
                   label:'File',
                   icon:'pi pi-fw pi-file',
                   items:[
                      {
                         label:'New',
                         icon:'pi pi-fw pi-plus',
                         items:[
                            {
                               label:'Bookmark',
                               icon:'pi pi-fw pi-bookmark'
                            },
                            {
                               label:'Video',
                               icon:'pi pi-fw pi-video'
                            },

                         ]
                      },
                      {
                         label:'Delete',
                         icon:'pi pi-fw pi-trash'
                      },
                      {
                         separator:true
                      },
                      {
                         label:'Export',
                         icon:'pi pi-fw pi-external-link'
                      }
                   ]
                },
                {
                   label:'Edit',
                   icon:'pi pi-fw pi-pencil',
                   items:[
                      {
                         label:'Left',
                         icon:'pi pi-fw pi-align-left'
                      },
                      {
                         label:'Right',
                         icon:'pi pi-fw pi-align-right'
                      },
                      {
                         label:'Center',
                         icon:'pi pi-fw pi-align-center'
                      },
                      {
                         label:'Justify',
                         icon:'pi pi-fw pi-align-justify'
                      },

                   ]
                },
                {
                   label:'Users',
                   icon:'pi pi-fw pi-user',
                   items:[
                      {
                         label:'New',
                         icon:'pi pi-fw pi-user-plus',

                      },
                      {
                         label:'Delete',
                         icon:'pi pi-fw pi-user-minus',

                      },
                      {
                         label:'Search',
                         icon:'pi pi-fw pi-users',
                         items:[
                            {
                               label:'Filter',
                               icon:'pi pi-fw pi-filter',
                               items:[
                                  {
                                     label:'Print',
                                     icon:'pi pi-fw pi-print'
                                  }
                               ]
                            },
                            {
                               icon:'pi pi-fw pi-bars',
                               label:'List'
                            }
                         ]
                      }
                   ]
                },
                {
                   label:'Events',
                   icon:'pi pi-fw pi-calendar',
                   items:[
                      {
                         label:'Edit',
                         icon:'pi pi-fw pi-pencil',
                         items:[
                            {
                               label:'Save',
                               icon:'pi pi-fw pi-calendar-plus'
                            },
                            {
                               label:'Delete',
                               icon:'pi pi-fw pi-calendar-minus'
                            },

                         ]
                      },
                      {
                         label:'Archieve',
                         icon:'pi pi-fw pi-calendar-times',
                         items:[
                            {
                               label:'Remove',
                               icon:'pi pi-fw pi-calendar-minus'
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
                   icon:'pi pi-fw pi-power-off'
                }
             ]
        }
    }
}
</CodeHighlight>

                <h3>Document Menu</h3>
                <p>Setting global property attaches the context menu to the document.</p>
<CodeHighlight>
&lt;ContextMenu :global="true" :model="items" /&gt;
</CodeHighlight>

                <h3>Element Menu</h3>
                <p>ContextMenu is attached to a custom element manually using the reference and calling the <i>show(event)</i> method.</p>

<CodeHighlight>
&lt;img alt="logo" src="demo/images/nature/nature3.jpg" @contextmenu="onImageRightClick"&gt;
&lt;ContextMenu ref="menu" :model="items" /&gt;
</CodeHighlight>

<CodeHighlight lang="js">
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
                                <td>model</td>
                                <td>array</td>
                                <td>null</td>
                                <td>An array of menuitems.</td>
                            </tr>
                            <tr>
                                <td>appendTo</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Id of the element or "body" for document where the overlay should be appended to.</td>
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
						</tbody>
					</table>
				</div>

				<h3>Methods</h3>
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

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/contextmenu" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;img alt="logo" src="demo/images/nature/nature3.jpg" @contextmenu="onImageRightClick"&gt;
&lt;ContextMenu ref="menu" :model="items" /&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
    data() {
        return {
            items: [
                {
                   label:'File',
                   icon:'pi pi-fw pi-file',
                   items:[
                      {
                         label:'New',
                         icon:'pi pi-fw pi-plus',
                         items:[
                            {
                               label:'Bookmark',
                               icon:'pi pi-fw pi-bookmark'
                            },
                            {
                               label:'Video',
                               icon:'pi pi-fw pi-video'
                            },

                         ]
                      },
                      {
                         label:'Delete',
                         icon:'pi pi-fw pi-trash'
                      },
                      {
                         separator:true
                      },
                      {
                         label:'Export',
                         icon:'pi pi-fw pi-external-link'
                      }
                   ]
                },
                {
                   label:'Edit',
                   icon:'pi pi-fw pi-pencil',
                   items:[
                      {
                         label:'Left',
                         icon:'pi pi-fw pi-align-left'
                      },
                      {
                         label:'Right',
                         icon:'pi pi-fw pi-align-right'
                      },
                      {
                         label:'Center',
                         icon:'pi pi-fw pi-align-center'
                      },
                      {
                         label:'Justify',
                         icon:'pi pi-fw pi-align-justify'
                      },

                   ]
                },
                {
                   label:'Users',
                   icon:'pi pi-fw pi-user',
                   items:[
                      {
                         label:'New',
                         icon:'pi pi-fw pi-user-plus',

                      },
                      {
                         label:'Delete',
                         icon:'pi pi-fw pi-user-minus',

                      },
                      {
                         label:'Search',
                         icon:'pi pi-fw pi-users',
                         items:[
                            {
                               label:'Filter',
                               icon:'pi pi-fw pi-filter',
                               items:[
                                  {
                                     label:'Print',
                                     icon:'pi pi-fw pi-print'
                                  }
                               ]
                            },
                            {
                               icon:'pi pi-fw pi-bars',
                               label:'List'
                            }
                         ]
                      }
                   ]
                },
                {
                   label:'Events',
                   icon:'pi pi-fw pi-calendar',
                   items:[
                      {
                         label:'Edit',
                         icon:'pi pi-fw pi-pencil',
                         items:[
                            {
                               label:'Save',
                               icon:'pi pi-fw pi-calendar-plus'
                            },
                            {
                               label:'Delete',
                               icon:'pi pi-fw pi-calendar-minus'
                            },

                         ]
                      },
                      {
                         label:'Archieve',
                         icon:'pi pi-fw pi-calendar-times',
                         items:[
                            {
                               label:'Remove',
                               icon:'pi pi-fw pi-calendar-minus'
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
                   icon:'pi pi-fw pi-power-off'
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
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>