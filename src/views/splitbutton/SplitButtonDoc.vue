<template>
	<AppDoc name="SplitButtonDemo" :sources="sources" github="splitbutton/SplitButtonDemo.vue" >
		<h5>Import</h5>
<pre v-code.script><code>
import SplitButton from 'primevue/splitbutton';

</code></pre>

		<h5>Getting Started</h5>
		<p>SplitButton has a default command button and a collection of additional options defined by the <i>model</i> property.</p>
<pre v-code.script><code>
export default {
	data() {
		return {
			items: [
				{
					label: 'Update',
					icon: 'pi pi-refresh',
					command: () => {
						this.$toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000});
					}
				},
				{
					label: 'Delete',
					icon: 'pi pi-times',
					command: () => {
						this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000});
					}
				},
				{
					label: 'Vue Website',
					icon: 'pi pi-external-link',
					command: () => {
						window.location.href = 'https://vuejs.org/'
					}
				},
				{
					label: 'Upload',
					icon: 'pi pi-upload',
                    to: '/fileupload'
				}
			]
		}
	}
}

</code></pre>

<pre v-code><code>
&lt;SplitButton label="Save" icon="pi pi-plus" :model="items"&gt;&lt;/SplitButton&gt;

</code></pre>

        <h5>MenuModel</h5>
        <p>SplitButton uses the common MenuModel API to define the items, visit <router-link to="/menumodel">MenuModel API</router-link> for details.</p>

		<h5>Severity</h5>
		<p>Different color options are available as severity levels.</p>

		<ul>
			<li>.p-button-secondary</li>
			<li>.p-button-success</li>
			<li>.p-button-info</li>
			<li>.p-button-warning</li>
			<li>.p-button-help</li>
			<li>.p-button-danger</li>
		</ul>

<pre v-code><code>
&lt;SplitButton label="Save" icon="pi pi-plus" :model="items"&gt;&lt;/SplitButton&gt;
&lt;SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-secondary"&gt;&lt;/SplitButton&gt;
&lt;SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-success"&gt;&lt;/SplitButton&gt;
&lt;SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-info"&gt;&lt;/SplitButton&gt;
&lt;SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-warning"&gt;&lt;/SplitButton&gt;
&lt;SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-help"&gt;&lt;/SplitButton&gt;
&lt;SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-danger"&gt;&lt;/SplitButton&gt;

</code></pre>

		<h5>Properties</h5>
		<p>Any property such as tabindex are passed to the underlying input element. Following are the additional properties to configure the component.</p>
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
                        <td>label</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Text of the button.</td>
                    </tr>
                    <tr>
                        <td>icon</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Name of the icon.</td>
                    </tr>
                    <tr>
                        <td>model</td>
                        <td>object</td>
                        <td>null</td>
                        <td>MenuModel instance to define the overlay items.</td>
                    </tr>
                    <tr>
                        <td>autoZIndex</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Whether to automatically manage layering.</td>
                    </tr>
                    <tr>
                        <td>baseZIndex</td>
                        <td>number</td>
                        <td>0</td>
                        <td>Base zIndex value to use in layering.</td>
                    </tr>
                    <tr>
                        <td>appendTo</td>
                        <td>string</td>
                        <td>body</td>
                        <td>A valid query selector or an HTMLElement to specify where the overlay gets attached.</td>
                    </tr>
                    <tr>
                        <td>style</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Style class of the component.</td>
                    </tr>
                    <tr>
                        <td>class</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Inline style of the component.</td>
                    </tr>
				</tbody>
			</table>
		</div>

		<h5>Events</h5>
		<p>Any valid event such as focus, blur and input are passed to the underlying button element. Following are the additional events to configure the component.</p>
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
						<td>click</td>
						<td>event: Browser event</td>
						<td>Callback to invoke when main button is clicked.</td>
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
						<td>p-splitbutton</td>
						<td>Container element.</td>
					</tr>
					<tr>
						<td>p-splitbutton-button</td>
						<td>Dropdown button.</td>
					</tr>
					<tr>
						<td>p-menu</td>
						<td>Overlay menu.</td>
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
			sources:{
				'options-api': {
					tabName: 'Options API Source',
					content:`
<template>
    <div>
		<Toast />

        <h5>Basic</h5>
        <SplitButton label="Save" icon="pi pi-plus" @click="save" :model="items"></SplitButton>

        <h5>Nested</h5>
        <SplitButton label="Save" icon="pi pi-plus" @click="save" :model="nestedItems"></SplitButton>

        <h5>Severities</h5>
        <SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-mb-2"></SplitButton>
        <SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-secondary p-mb-2"></SplitButton>
        <SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-success p-mb-2"></SplitButton>
        <SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-info p-mb-2"></SplitButton>
        <SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-warning p-mb-2"></SplitButton>
        <SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-help p-mb-2"></SplitButton>
        <SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-danger p-mb-2"></SplitButton>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    command: () => {
                        this.$toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000});
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                    command: () => {
                        this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000});
                    }
                },
                {
                    label: 'Vue Website',
                    icon: 'pi pi-external-link',
                    command: () => {
                        window.location.href = 'https://vuejs.org/'
                    }
                },
                {   label: 'Upload',
                    icon: 'pi pi-upload',
                    command: () => {
						window.location.hash = "/fileupload"
					}
                }
            ],
            nestedItems: [
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
        save() {
            this.$toast.add({severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000});
        }
    }
}
<\\/script>

<style lang="scss" scoped>
.p-splitbutton {
    margin-right: .5rem;
}
</style>`		},
				'composition-api': {
					tabName: 'Composition API Source',
					content:`
<template>
    <div>
		<Toast />

        <h5>Basic</h5>
		<SplitButton label="Save" icon="pi pi-plus" @click="save" :model="items"></SplitButton>

        <h5>Nested</h5>
        <SplitButton label="Save" icon="pi pi-plus" @click="save" :model="nestedItems"></SplitButton>

        <h5>Severities</h5>
        <SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-mb-2"></SplitButton>
        <SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-secondary p-mb-2"></SplitButton>
        <SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-success p-mb-2"></SplitButton>
        <SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-info p-mb-2"></SplitButton>
        <SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-warning p-mb-2"></SplitButton>
        <SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-help p-mb-2"></SplitButton>
        <SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-danger p-mb-2"></SplitButton>
    </div>
</template>

<script>
import { ref } from "vue";
import { useToast } from "primevue/usetoast";

export default {
    setup() {
		const toast = useToast();
        const items = ref([
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000});
                }
            },
            {
                label: 'Delete',
                icon: 'pi pi-times',
                command: () => {
                    toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000});
                }
            },
            {
                label: 'Vue Website',
                icon: 'pi pi-external-link',
                command: () => {
                    window.location.href = 'https://vuejs.org/'
                }
            },
            {   label: 'Upload',
                icon: 'pi pi-upload',
                command: () => {
					window.location.hash = "/fileupload"
				}
            }
        ]);
        const nestedItems: [
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
                        }
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
                  }
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
                        }
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
        ];
        const save = () => {
            toast.add({severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000});
        };
        return {items, nestedItems, save, toast}
    }
}
<\\/script>

<style lang="scss" scoped>
.p-splitbutton {
    margin-right: .5rem;
}
</style>`		},
			}
		}
	}
}
</script>