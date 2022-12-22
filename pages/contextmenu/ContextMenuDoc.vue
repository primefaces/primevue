<template>
    <AppDoc name="ContextMenuDemo" :sources="sources">
        <h5>Import via Module</h5>
        <pre v-code.script><code>
import ContextMenu from 'primevue/contextmenu';

</code></pre>

        <h5>Import via CDN</h5>
        <pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/contextmenu/contextmenu.min.js"&gt;&lt;/script&gt;

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

</code></pre>

        <h5>Document Menu</h5>
        <p>Setting global property attaches the context menu to the document.</p>
        <pre v-code><code>
&lt;ContextMenu :global="true" :model="items" /&gt;

</code></pre>

        <h5>Element Menu</h5>
        <p>ContextMenu is attached to a custom element manually using the reference and calling the <i>show(event)</i> method.</p>

        <pre v-code><code>
&lt;img alt="logo" src="/demo/images/nature/nature3.jpg" @contextmenu="onImageRightClick"&gt;
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
        <pre v-code><code>
&lt;ContextMenu :model="items"&gt;
	&lt;template #item="{item}"&gt;
			&lt;a :href="item.url"&gt;&#123;&#123;item.label&#125;&#125;&lt;/a&gt;
	&lt;/template&gt;
&lt;/ContextMenu&gt;

</code></pre>

        <p><i>router-link</i> with route configuration can also be used within templating for further customization.</p>
        <pre v-code><code>
&lt;ContextMenu :model="items"&gt;
	&lt;template #item="{item}"&gt;
			&lt;router-link :to="item.to" custom v-slot="{href, route, navigate, isActive, isExactActive}"&gt;
					&lt;a :href="href" @click="navigate" :class="{'active-link': isActive, 'active-link-exact": isExactActive}&gt;&#123;&#123;route.fullPath&#125;&#125;&lt;/a&gt;
			&lt;/router-link&gt;
	&lt;/template&gt;
&lt;/ContextMenu&gt;

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
                    <tr>
                        <td>tabindex</td>
                        <td>number</td>
                        <td>0</td>
                        <td>Index of the element in tabbing order.</td>
                    </tr>
                    <tr>
                        <td>aria-label</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Defines a string value that labels an interactive element.</td>
                    </tr>
                    <tr>
                        <td>aria-labelledby</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Establishes relationships between the component and label(s) where its value should be one or more element IDs.</td>
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
                        <td>focus</td>
                        <td>event</td>
                        <td>Callback to invoke when the component receives focus.</td>
                    </tr>
                    <tr>
                        <td>blur</td>
                        <td>event</td>
                        <td>Callback to invoke when the component loses focus.</td>
                    </tr>
                    <tr>
                        <td>before-show</td>
                        <td>-</td>
                        <td>Callback to invoke before the popup is shown.</td>
                    </tr>
                    <tr>
                        <td>before-hide</td>
                        <td>-</td>
                        <td>Callback to invoke before the popup is hidden.</td>
                    </tr>
                    <tr>
                        <td>show</td>
                        <td>-</td>
                        <td>Callback to invoke when the popup is shown.</td>
                    </tr>
                    <tr>
                        <td>hide</td>
                        <td>-</td>
                        <td>Callback to invoke when the popup is hidden.</td>
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
                        <td>p-contextmenu-root-list</td>
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
            ContextMenu component uses the <i>menubar</i> role with <i>aria-orientation</i> set to "vertical" and the value to describe the menu can either be provided with <i>aria-labelledby</i> or <i>aria-label</i> props. Each list item has a
            <i>menuitem</i> role with <i>aria-label</i> referring to the label of the item and <i>aria-disabled</i> defined if the item is disabled. A submenu within a ContextMenu uses the <i>menu</i> role with an <i>aria-labelledby</i> defined as
            the id of the submenu root menuitem label. In addition, menuitems that open a submenu have <i>aria-haspopup</i>, <i>aria-expanded</i> and <i>aria-controls</i> to define the relation between the item and the submenu.
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
                        <td>When focus is in the menu, closes the context menu and moves focus to the next focusable element in the page sequence.</td>
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
                        <td>Closes the context menu.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>down arrow</i>
                        </td>
                        <td>If focus is not inside the menu and menu is open, add focus to the first item. If an item is already focused, moves focus to the next menuitem within the submenu.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>up arrow</i>
                        </td>
                        <td>If focus is not inside the menu and menu is open, add focus to the last item. If an item is already focused, moves focus to the next menuitem within the submenu.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>right arrow</i>
                        </td>
                        <td>Opens a submenu if there is one available and moves focus to the first item.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>left arrow</i>
                        </td>
                        <td>Closes a submenu and moves focus to the root item of the closed submenu.</td>
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
		]);

		const onImageRightClick = (event) => {
			menu.value.show(event);
		};

		return { menu, items, onImageRightClick }
	}
}
<\\/script>
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/vue-router@4.0.0/dist/vue-router.global.js"><\\/script>
		<script src="https://unpkg.com/primevue@^3/contextmenu/contextmenu.min.js"><\\/script>`,
                    content: `<div id="app">
		<img alt="logo" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" @contextmenu="onImageRightClick" aria-haspopup="true">
		<p-contextmenu ref="menu" :model="items"></p-contextmenu>
	</div>

	<script type="module">
	const { createApp, ref } = Vue;

	const App = {
		setup() {
			const menu = ref();
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
				separator:true
				},
				{
				label:'Quit',
				icon:'pi pi-fw pi-power-off'
				}
			]);

			const onImageRightClick = (event) => {
				menu.value.show(event);
			};

			return { menu, items, onImageRightClick }
		},
		components: {
			"p-contextmenu": primevue.contextmenu
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
