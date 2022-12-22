<template>
    <AppDoc name="MenubarDemo" :sources="sources">
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
        <pre v-code><code>
&lt;Menubar :model="items"&gt;
	&lt;template #start&gt;
			Before
	&lt;/template&gt;
	&lt;template #item="{item}"&gt;
			&lt;a :href="item.url"&gt;&#123;&#123;item.label&#125;&#125;&lt;/a&gt;
	&lt;/template&gt;
	&lt;template #end&gt;
			After
	&lt;/template&gt;
&lt;/Menubar&gt;

</code></pre>

        <p><i>router-link</i> with route configuration can also be used within templating for further customization.</p>
        <pre v-code><code>
&lt;Menubar :model="items"&gt;
	&lt;template #item="{item}"&gt;
			&lt;router-link :to="item.to" custom v-slot="{href, route, navigate, isActive, isExactActive}"&gt;
					&lt;a :href="href" @click="navigate" :class="{'active-link': isActive, 'active-link-exact': isExactActive}"&gt;&#123;&#123;route.fullPath&#125;&#125;&lt;/a&gt;
			&lt;/router-link&gt;
	&lt;/template&gt;
&lt;/Menubar&gt;

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
                    <tr>
                        <td>buttonProps</td>
                        <td>object</td>
                        <td>null</td>
                        <td>Uses to pass all properties of the HTMLButtonElement to the menu button.</td>
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
                        <td>p-menubar-start</td>
                        <td>Container of the start slot.</td>
                    </tr>
                    <tr>
                        <td>p-menubar-end</td>
                        <td>Container of the end slot.</td>
                    </tr>
                    <tr>
                        <td>p-menubar-button</td>
                        <td>Mobile menubar toggle button.</td>
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
                        <td>p-menuitem-active</td>
                        <td>Active menuitem element.</td>
                    </tr>
                    <tr>
                        <td>p-menuitem-content</td>
                        <td>Content of menuitem.</td>
                    </tr>
                    <tr>
                        <td>p-menuitem-link</td>
                        <td>Link element of the menuitem.</td>
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

        <h5>Accessibility</h5>
        <h6>Screen Reader</h6>
        <p>
            Menubar component uses the <i>menubar</i> role and the value to describe the menu can either be provided with <i>aria-labelledby</i> or <i>aria-label</i> props. Each list item has a <i>menuitem</i> role with <i>aria-label</i> referring to
            the label of the item and <i>aria-disabled</i> defined if the item is disabled. A submenu within a MenuBar uses the <i>menu</i> role with an <i>aria-labelledby</i> defined as the id of the submenu root menuitem label. In addition,
            menuitems that open a submenu have <i>aria-haspopup</i>, <i>aria-expanded</i> and <i>aria-controls</i> to define the relation between the item and the submenu.
        </p>

        <p>
            In mobile viewports, a menu icon appears with a <i>button</i> role along with <i>aria-haspopup</i>, <i>aria-expanded</i> and <i>aria-controls</i> to manage the relation between the overlay menubar and the button. The value to describe the
            button can be defined <i>aria-label</i> or <i>aria-labelledby</i> specified using <i>buttonProps</i>, by default <i>navigation</i> key of the <i>aria</i> property from the <router-link to="/locale">locale</router-link> API as the
            <i>aria-label</i>.
        </p>

        <h6>Keyboard Support</h6>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Function</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <i>tab</i>
                        </td>
                        <td>Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the next focusable item in the page tab sequence.</td>
                    </tr>
                    <tr>
                        <td><i>shift</i> + <i>tab</i></td>
                        <td>Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the previous focusable item in the page tab sequence.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>enter</i>
                        </td>
                        <td>If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>space</i>
                        </td>
                        <td>If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>escape</i>
                        </td>
                        <td>If focus is inside a popup submenu, closes the submenu and moves focus to the root item of the closed submenu.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>down arrow</i>
                        </td>
                        <td>If focus is on a root element, open a submenu and moves focus to the first element in the submenu otherwise moves focus to the next menuitem within the submenu.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>up arrow</i>
                        </td>
                        <td>If focus is on a root element, opens a submenu and moves focus to the last element in the submenu otherwise moves focus to the previous menuitem within the submenu.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>right arrow</i>
                        </td>
                        <td>If focus is on a root element, moves focus to the next menuitem otherwise opens a submenu if there is one available and moves focus to the first item.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>left arrow</i>
                        </td>
                        <td>If focus is on a root element, moves focus to the previous menuitem otherwise closes a submenu and moves focus to the root item of the closed submenu.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>home</i>
                        </td>
                        <td>Moves focus to the first menuitem within the submenu.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>end</i>
                        </td>
                        <td>Moves focus to the last menuitem within the submenu.</td>
                    </tr>
                    <tr>
                        <td><i>any printable character</i></td>
                        <td>Moves focus to the menuitem whose label starts with the characters being typed.</td>
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
					<img alt="logo" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" height="40" class="mr-2">
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
					<img alt="logo" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" height="40" class="mr-2">
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
				<img alt="logo" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" height="40" class="mr-2">
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
        };
    }
};
</script>
