<template>
	<AppDoc name="MenubarDemo" :sources="sources" github="menubar/MenubarDemo.vue">
        <h5>Import via Module</h5>
<pre v-code.script><code>
import Menubar from 'primevue/menubar';

</code></pre>

		<h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/menubar/menubar.min.js"&gt;&lt;/script&gt;

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
                   label:'Quit',
                   icon:'pi pi-fw pi-power-off'
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
							label:'Quit',
							icon:'pi pi-fw pi-power-off'
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
						label:'Quit',
						icon:'pi pi-fw pi-power-off'
					}
				]);

				return { items }
			}
		}
		<\\/script>
		`
				},
				'browser-source': {
					tabName: 'Browser Source',
					imports: `<script src="https://unpkg.com/vue-router@4.0.0/dist/vue-router.global.js"><\\/script>
		<script src="https://unpkg.com/primevue@^3/menubar/menubar.min.js"><\\/script>`,
					content: `<div id="app">
			<p-menubar :model="items">
				<template #start>
					<img alt="logo" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" height="40" class="p-mr-2">
				</template>
				<template #end>
					<p-inputtext placeholder="Search" type="text"></p-inputtext>
				</template>
			</p-menubar>
		</div>

		<script type="module">
		const { createApp, ref } = Vue;

		const App = {
			setup() {
				const items = ref([
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
						label:'Quit',
						icon:'pi pi-fw pi-power-off'
					}
				]);

				return { items }
			},
			components: {
				"p-menubar": primevue.menubar,
				"p-inputtext": primevue.inputtext
			}
		};

		const routes = [{ path: "/", component: App }];

        const router = VueRouter.createRouter({
            history: VueRouter.createWebHashHistory(),
            routes
        });

		createApp(App)
			.use(router)
            .use(primevue.config.default)
            .mount("#app");
		<\\/script>
		`
				}
			}
        }
    }
}
</script>