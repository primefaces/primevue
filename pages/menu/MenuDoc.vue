<template>
    <AppDoc name="MenuDemo" :sources="sources">
        <h5>Import via Module</h5>
        <pre v-code.script><code>
import Menu from 'primevue/menu';

</code></pre>

        <h5>Import via CDN</h5>
        <pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;

</code></pre>

        <h5>MenuModel</h5>
        <p>Menu uses the common MenuModel API to define the items, visit <router-link to="/menumodel">MenuModel API</router-link> for details.</p>

        <h5>Getting Started</h5>
        <p>Menu requires a collection of menuitems as its model.</p>
        <pre v-code><code>
&lt;Menu :model="items" /&gt;

</code></pre>

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
					url: 'https://vuejs.org/'
				},
				{
                    label: 'Router',
                    icon: 'pi pi-upload',
                    to: '/fileupload'
                }
			]
		}
	}
}

</code></pre>

        <h5>SubMenus</h5>
        <p>Menu supports one level of nesting via subitems of an item.</p>
        <pre v-code.script><code>
const items: [
    {
        label: 'Options',
        items: [{label: 'New', icon: 'pi pi-fw pi-plus', command:() => {} },
                {label: 'Delete', icon: 'pi pi-fw pi-trash', url: 'https://www.primetek.com.tr'}]
    },
    {
        label: 'Account',
        items: [{label: 'Options', icon: 'pi pi-fw pi-cog', to: '/options'},
                {label: 'Sign Out', icon: 'pi pi-fw pi-power-off', to: '/logout'} ]
    }
];

</code></pre>

        <h5>Popup Mode</h5>
        <p>Menu is inline by default whereas popup mode is supported by enabling popup property and calling toggle method with an event of the target.</p>

        <pre v-code><code>
&lt;Button type="button" label="Toggle" @click="toggle" /&gt;
&lt;Menu ref="menu" :model="items" :popup="true" /&gt;

</code></pre>

        <pre v-code.script><code>
toggle(event) {
    this.$refs.menu.toggle(event);
}

</code></pre>

        <h5>Templating</h5>
        <p>Menu offers content customization with the <i>item</i> template that receives the menuitem instance from the model as a parameter.</p>
        <pre v-code><code>
&lt;Menu :model="items"&gt;
    &lt;template #item="{item}"&gt;
        &lt;a :href="item.url"&gt;&#123;&#123;item.label&#125;&#125;&lt;/a&gt;
    &lt;/template&gt;
&lt;/Menu&gt;

</code></pre>

        <p><i>router-link</i> with route configuration can also be used within templating for further customization.</p>
        <pre v-code><code>
&lt;Menu :model="items"&gt;
    &lt;template #item="{item}"&gt;
        &lt;router-link :to="item.to" custom v-slot="{href, route, navigate, isActive, isExactActive}"&gt;
            &lt;a :href="href" @click="navigate" :class="{'active-link': isActive, 'active-link-exact': isExactActive}"&gt;&#123;&#123;route.fullPath&#125;&#125;&lt;/a&gt;
        &lt;/router-link&gt;
    &lt;/template&gt;
&lt;/Menu&gt;

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
                        <td>popup</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Defines if menu would displayed as a popup.</td>
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
                        <td>show</td>
                        <td>-</td>
                        <td>Callback to invoke when the overlay is shown.</td>
                    </tr>
                    <tr>
                        <td>hide</td>
                        <td>-</td>
                        <td>Callback to invoke when the overlay is hidden.</td>
                    </tr>
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
                        <td>Toggles the visibility of the overlay.</td>
                    </tr>
                    <tr>
                        <td>show</td>
                        <td>event: Browser event</td>
                        <td>Shows the overlay.</td>
                    </tr>
                    <tr>
                        <td>hide</td>
                        <td>-</td>
                        <td>Hides the overlay.</td>
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
                        <td>p-menu</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-menu-list</td>
                        <td>List element.</td>
                    </tr>
                    <tr>
                        <td>p-submenu-header</td>
                        <td>Header of the submenu list element.</td>
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
                </tbody>
            </table>
        </div>

        <h5>Accessibility</h5>
        <h6>Screen Reader</h6>
        <p>
            Menu component uses the <i>menu</i> role and the value to describe the menu can either be provided with <i>aria-labelledby</i> or <i>aria-label</i> props. Each list item has a <i>menuitem</i> role with <i>aria-label</i> referring to the
            label of the item and <i>aria-disabled</i> defined if the item is disabled.
        </p>

        <p>In popup mode, the component implicitly manages the <i>aria-expanded</i>, <i>aria-haspopup</i> and <i>aria-controls</i> attributes of the target element to define the relation between the target and the popup.</p>

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
                        <td>Activates the focused menuitem. If menu is in overlay mode, popup gets closes and focus moves to target.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>space</i>
                        </td>
                        <td>Activates the focused menuitem. If menu is in overlay mode, popup gets closes and focus moves to target.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>escape</i>
                        </td>
                        <td>If menu is in overlay mode, popup gets closes and focus moves to target.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>down arrow</i>
                        </td>
                        <td>Moves focus to the next menuitem.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>up arrow</i>
                        </td>
                        <td>Moves focus to the previous menuitem.</td>
                    </tr>
                    <tr>
                        <td><i>alt</i> + <i>up arrow</i></td>
                        <td>If menu is in overlay mode, popup gets closes and focus moves to the target.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>home</i>
                        </td>
                        <td>Moves focus to the first menuitem.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>end</i>
                        </td>
                        <td>Moves focus to the last menuitem.</td>
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
        <Toast />

        <h5>Inline</h5>
        <Menu :model="items" />

        <h5>Overlay</h5>
        <Button type="button" label="Toggle" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu"/>
        <Menu id="overlay_menu" ref="menu" :model="items" :popup="true" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Options',
                    items: [{
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
                    }
                ]},
                {
                    label: 'Navigate',
                    items: [{
                        label: 'Vue Website',
                        icon: 'pi pi-external-link',
                        url: 'https://vuejs.org/'
                    },
                    {
                        label: 'Router',
                        icon: 'pi pi-upload',
                        command: () => {
                            window.location.hash = "/fileupload"
                        }
                    }
                ]}
            ]
        }
    },
    methods: {
        toggle(event) {
            this.$refs.menu.toggle(event);
        },
        save() {
            this.$toast.add({severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000});
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
       <Toast />

        <h5>Inline</h5>
        <Menu :model="items" />

        <h5>Overlay</h5>
        <Button type="button" label="Toggle" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu"/>
        <Menu id="overlay_menu" ref="menu" :model="items" :popup="true" />
    </div>
</template>

<script>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';

export default {
    setup() {
        const toast = useToast();
        const menu = ref();
        const items = ref([
            {
                label: 'Options',
                items: [{
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
                }
            ]},
            {
                label: 'Navigate',
                items: [{
                    label: 'Vue Website',
                    icon: 'pi pi-external-link',
                    url: 'https://vuejs.org/'
                },
                {
                    label: 'Router',
                    icon: 'pi pi-upload',
                    command: () => {
                        window.location.hash = "/fileupload"
                    }
                }
            ]}
        ]);

        const toggle = (event) => {
            menu.value.toggle(event);
        };
        const save = () => {
            toast.add({severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000});
        };

        return { items, menu, toggle, save }
    }
}
<\\/script>
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/vue-router@4.0.0/dist/vue-router.global.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/toast/toast.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/toastservice/toastservice.min.js"><\\/script>`,
                    content: `<div id="app">
            <p-toast></p-toast>

            <h5>Inline</h5>
            <p-menu :model="items"></p-menu>

            <h5>Overlay</h5>
            <p-button type="button" label="Toggle" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu"></p-button>
            <p-menu id="overlay_menu" ref="menu" :model="items" :popup="true"></p-menu>
        </div>

        <script type="module">
        const { createApp, ref } = Vue;
        const { useToast } = primevue.usetoast;

        const App = {
            setup() {
                const toast = useToast();
                const menu = ref();
                const items = ref([
                    {
                        label: 'Options',
                        items: [{
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
                        }
                    ]},
                    {
                        label: 'Navigate',
                        items: [{
                            label: 'Vue Website',
                            icon: 'pi pi-external-link',
                            url: 'https://vuejs.org/'
                        },
                        {
                            label: 'Router',
                            icon: 'pi pi-upload',
                            command: () => {
                                window.location.hash = "/fileupload"
                            }
                        }
                    ]}
                ]);

                const toggle = (event) => {
                    menu.value.toggle(event);
                };
                const save = () => {
                    toast.add({severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000});
                };

                return { items, menu, toggle, save }
            },
            components: {
                "p-menu": primevue.menu,
                "p-button": primevue.button,
                "p-toast": primevue.toast
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
            .use(primevue.toastservice)
            .mount("#app");
        <\\/script>
`
                }
            }
        };
    }
};
</script>
