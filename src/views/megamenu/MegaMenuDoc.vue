<template>
	<AppDoc name="MegaMenuDemo" :sources="sources" github="megamenu/MegaMenuDemo.vue">
        <h5>Import via Module</h5>
<pre v-code.script><code>
import MegaMenu from 'primevue/megamenu';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/megamenu/megamenu.min.js"&gt;&lt;/script&gt;

</code></pre>

        <h5>MenuModel</h5>
        <p>MegaMenu uses the common MenuModel API to define the items of the model, visit <router-link to="/menumodel">MenuModel API</router-link> for details.</p>
<pre v-code><code>
&lt;MegaMenu :model="items" /&gt;

</code></pre>

<pre v-code.script><code>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Videos', icon: 'pi pi-fw pi-video',
                    items: [
                        [
                            {
                                label: 'Video 1',
                                items: [{label: 'Video 1.1'}, {label: 'Video 1.2'}]
                            },
                            {
                                label: 'Video 2',
                                items: [{label: 'Video 2.1'}, {label: 'Video 2.2'}]
                            }
                        ],
                        [
                            {
                                label: 'Video 3',
                                items: [{label: 'Video 3.1'}, {label: 'Video 3.2'}]
                            },
                            {
                                label: 'Video 4',
                                items: [{label: 'Video 4.1'}, {label: 'Video 4.2'}]
                            }
                        ]
                    ]
                },
                {
                    label: 'Users', icon: 'pi pi-fw pi-users',
                    items: [
                        [
                            {
                                label: 'User 1',
                                items: [{label: 'User 1.1'}, {label: 'User 1.2'}]
                            },
                            {
                                label: 'User 2',
                                items: [{label: 'User 2.1'}, {label: 'User 2.2'}]
                            },
                        ],
                        [
                            {
                                label: 'User 3',
                                items: [{label: 'User 3.1'}, {label: 'User 3.2'}]
                            },
                            {
                                label: 'User 4',
                                items: [{label: 'User 4.1'}, {label: 'User 4.2'}]
                            }
                        ],
                        [
                            {
                                label: 'User 5',
                                items: [{label: 'User 5.1'}, {label: 'User 5.2'}]
                            },
                            {
                                label: 'User 6',
                                items: [{label: 'User 6.1'}, {label: 'User 6.2'}]
                            }
                        ]
                    ]
                },
                {
                    label: 'Events', icon: 'pi pi-fw pi-calendar',
                    items: [
                        [
                            {
                                label: 'Event 1',
                                items: [{label: 'Event 1.1'}, {label: 'Event 1.2'}]
                            },
                            {
                                label: 'Event 2',
                                items: [{label: 'Event 2.1'}, {label: 'Event 2.2'}]
                            }
                        ],
                        [
                            {
                                label: 'Event 3',
                                items: [{label: 'Event 3.1'}, {label: 'Event 3.2'}]
                            },
                            {
                                label: 'Event 4',
                                items: [{label: 'Event 4.1'}, {label: 'Event 4.2'}]
                            }
                        ]
                    ]
                },
                {
                    label: 'Settings', icon: 'pi pi-fw pi-cog',
                    items: [
                        [
                            {
                                label: 'Setting 1',
                                items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}]
                            },
                            {
                                label: 'Setting 2',
                                items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}]
                            },
                            {
                                label: 'Setting 3',
                                items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}]
                            }
                        ],
                        [
                            {
                                label: 'Setting 4',
                                items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}]
                            }
                        ]
                    ]
                }
            ]
        }
    }
}

</code></pre>

        <h5>Orientation</h5>
        <p>Default orientation is "horizontal" with "vertical" as the alternative.</p>
<pre v-code><code>
&lt;MegaMenu :model="items" orientation="vertical" /&gt;

</code></pre>

        <h5>Templating</h5>
        <p>Two slots named "start" and "end" are provided to embed content before or after the items. In additon MegaMenu, offers item customization with the <i>item</i> template that receives the menuitem instance from the model as a parameter.</p>
<pre v-code><code><template v-pre>
&lt;MegaMenu :model="items"&gt;
    &lt;template #start&gt;
        Before
    &lt;/template&gt;
    &lt;template #item="{item}"&gt;
        &lt;a :href="item.url"&gt;{{item.label}}&lt;/a&gt;
    &lt;/template&gt;
    &lt;template #end&gt;
        After
    &lt;/template&gt;
&lt;/MegaMenu&gt;
</template>
</code></pre>

<p><i>router-link</i> with route configuration can also be used within templating for further customization.</p>
<pre v-code><code><template v-pre>
&lt;MegaMenu :model="items"&gt;
    &lt;template #item="{item}"&gt;
        &lt;router-link :to="item.to" custom v-slot="{href, route, navigate, isActive, isExactActive}"&gt;
            &lt;a :href="href" @click="navigate" :class="{'active-link': isActive, 'active-link-exact': isExactActive}"&gt;{{route.fullPath}}&lt;/a&gt;
        &lt;/router-link&gt;
    &lt;/template&gt;
&lt;/MegaMenu&gt;
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
                        <td>orientation</td>
                        <td>string</td>
                        <td>horizontal</td>
                        <td>Defines the orientation, valid values are horizontal and vertical.</td>
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
                    <tr>
                        <td>start</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>end</td>
                        <td>-</td>
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
                        <td>p-megamenu</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-megamenu-horizontal</td>
                        <td>Container element in horizontal orientation.</td>
                    </tr>
                    <tr>
                        <td>p-megamenu-vertical</td>
                        <td>Container element in vertical orientation.</td>
                    </tr>
                    <tr>
                        <td>p-megamenu-root-list</td>
                        <td>Root list element.</td>
                    </tr>
                    <tr>
                        <td>p-megamenu-panel</td>
                        <td>Submenu container.</td>
                    </tr>
                    <tr>
                        <td>p-megamenu-submenu</td>
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
                    <tr>
                        <td>p-megamenu-custom</td>
                        <td>Container of the default slot.</td>
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
        <h5>Horizontal</h5>
        <MegaMenu :model="items" />

        <h5>Vertical</h5>
        <MegaMenu :model="items" orientation="vertical"/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Videos', icon: 'pi pi-fw pi-video',
                    items: [
                        [
                            {
                                label: 'Video 1',
                                items: [{label: 'Video 1.1'}, {label: 'Video 1.2'}]
                            },
                            {
                                label: 'Video 2',
                                items: [{label: 'Video 2.1'}, {label: 'Video 2.2'}]
                            }
                        ],
                        [
                            {
                                label: 'Video 3',
                                items: [{label: 'Video 3.1'}, {label: 'Video 3.2'}]
                            },
                            {
                                label: 'Video 4',
                                items: [{label: 'Video 4.1'}, {label: 'Video 4.2'}]
                            }
                        ]
                    ]
                },
                {
                    label: 'Users', icon: 'pi pi-fw pi-users',
                    items: [
                        [
                            {
                                label: 'User 1',
                                items: [{label: 'User 1.1'}, {label: 'User 1.2'}]
                            },
                            {
                                label: 'User 2',
                                items: [{label: 'User 2.1'}, {label: 'User 2.2'}]
                            },
                        ],
                        [
                            {
                                label: 'User 3',
                                items: [{label: 'User 3.1'}, {label: 'User 3.2'}]
                            },
                            {
                                label: 'User 4',
                                items: [{label: 'User 4.1'}, {label: 'User 4.2'}]
                            }
                        ],
                        [
                            {
                                label: 'User 5',
                                items: [{label: 'User 5.1'}, {label: 'User 5.2'}]
                            },
                            {
                                label: 'User 6',
                                items: [{label: 'User 6.1'}, {label: 'User 6.2'}]
                            }
                        ]
                    ]
                },
                {
                    label: 'Events', icon: 'pi pi-fw pi-calendar',
                    items: [
                        [
                            {
                                label: 'Event 1',
                                items: [{label: 'Event 1.1'}, {label: 'Event 1.2'}]
                            },
                            {
                                label: 'Event 2',
                                items: [{label: 'Event 2.1'}, {label: 'Event 2.2'}]
                            }
                        ],
                        [
                            {
                                label: 'Event 3',
                                items: [{label: 'Event 3.1'}, {label: 'Event 3.2'}]
                            },
                            {
                                label: 'Event 4',
                                items: [{label: 'Event 4.1'}, {label: 'Event 4.2'}]
                            }
                        ]
                    ]
                },
                {
                    label: 'Settings', icon: 'pi pi-fw pi-cog',
                    items: [
                        [
                            {
                                label: 'Setting 1',
                                items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}]
                            },
                            {
                                label: 'Setting 2',
                                items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}]
                            },
                            {
                                label: 'Setting 3',
                                items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}]
                            }
                        ],
                        [
                            {
                                label: 'Setting 4',
                                items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}]
                            }
                        ]
                    ]
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
        <h5>Horizontal</h5>
        <MegaMenu :model="items" />

        <h5>Vertical</h5>
        <MegaMenu :model="items" orientation="vertical"/>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const items = ref([
            {
                label: 'Videos', icon: 'pi pi-fw pi-video',
                items: [
                    [
                        {
                            label: 'Video 1',
                            items: [{label: 'Video 1.1'}, {label: 'Video 1.2'}]
                        },
                        {
                            label: 'Video 2',
                            items: [{label: 'Video 2.1'}, {label: 'Video 2.2'}]
                        }
                    ],
                    [
                        {
                            label: 'Video 3',
                            items: [{label: 'Video 3.1'}, {label: 'Video 3.2'}]
                        },
                        {
                            label: 'Video 4',
                            items: [{label: 'Video 4.1'}, {label: 'Video 4.2'}]
                        }
                    ]
                ]
            },
            {
                label: 'Users', icon: 'pi pi-fw pi-users',
                items: [
                    [
                        {
                            label: 'User 1',
                            items: [{label: 'User 1.1'}, {label: 'User 1.2'}]
                        },
                        {
                            label: 'User 2',
                            items: [{label: 'User 2.1'}, {label: 'User 2.2'}]
                        },
                    ],
                    [
                        {
                            label: 'User 3',
                            items: [{label: 'User 3.1'}, {label: 'User 3.2'}]
                        },
                        {
                            label: 'User 4',
                            items: [{label: 'User 4.1'}, {label: 'User 4.2'}]
                        }
                    ],
                    [
                        {
                            label: 'User 5',
                            items: [{label: 'User 5.1'}, {label: 'User 5.2'}]
                        },
                        {
                            label: 'User 6',
                            items: [{label: 'User 6.1'}, {label: 'User 6.2'}]
                        }
                    ]
                ]
            },
            {
                label: 'Events', icon: 'pi pi-fw pi-calendar',
                items: [
                    [
                        {
                            label: 'Event 1',
                            items: [{label: 'Event 1.1'}, {label: 'Event 1.2'}]
                        },
                        {
                            label: 'Event 2',
                            items: [{label: 'Event 2.1'}, {label: 'Event 2.2'}]
                        }
                    ],
                    [
                        {
                            label: 'Event 3',
                            items: [{label: 'Event 3.1'}, {label: 'Event 3.2'}]
                        },
                        {
                            label: 'Event 4',
                            items: [{label: 'Event 4.1'}, {label: 'Event 4.2'}]
                        }
                    ]
                ]
            },
            {
                label: 'Settings', icon: 'pi pi-fw pi-cog',
                items: [
                    [
                        {
                            label: 'Setting 1',
                            items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}]
                        },
                        {
                            label: 'Setting 2',
                            items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}]
                        },
                        {
                            label: 'Setting 3',
                            items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}]
                        }
                    ],
                    [
                        {
                            label: 'Setting 4',
                            items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}]
                        }
                    ]
                ]
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
        <script src="https://unpkg.com/primevue@^3/megamenu/megamenu.min.js"><\\/script>`,
                    content: `<div id="app">
            <h5>Horizontal</h5>
            <p-megamenu :model="items"></p-megamenu>

            <h5>Vertical</h5>
            <p-megamenu :model="items" orientation="vertical"></p-megamenu>
        </div>

        <script type="module">
        const { createApp, ref } = Vue;

        const App = {
            setup() {
                const items = ref([
                    {
                        label: 'Videos', icon: 'pi pi-fw pi-video',
                        items: [
                            [
                                {
                                    label: 'Video 1',
                                    items: [{label: 'Video 1.1'}, {label: 'Video 1.2'}]
                                },
                                {
                                    label: 'Video 2',
                                    items: [{label: 'Video 2.1'}, {label: 'Video 2.2'}]
                                }
                            ],
                            [
                                {
                                    label: 'Video 3',
                                    items: [{label: 'Video 3.1'}, {label: 'Video 3.2'}]
                                },
                                {
                                    label: 'Video 4',
                                    items: [{label: 'Video 4.1'}, {label: 'Video 4.2'}]
                                }
                            ]
                        ]
                    },
                    {
                        label: 'Users', icon: 'pi pi-fw pi-users',
                        items: [
                            [
                                {
                                    label: 'User 1',
                                    items: [{label: 'User 1.1'}, {label: 'User 1.2'}]
                                },
                                {
                                    label: 'User 2',
                                    items: [{label: 'User 2.1'}, {label: 'User 2.2'}]
                                },
                            ],
                            [
                                {
                                    label: 'User 3',
                                    items: [{label: 'User 3.1'}, {label: 'User 3.2'}]
                                },
                                {
                                    label: 'User 4',
                                    items: [{label: 'User 4.1'}, {label: 'User 4.2'}]
                                }
                            ],
                            [
                                {
                                    label: 'User 5',
                                    items: [{label: 'User 5.1'}, {label: 'User 5.2'}]
                                },
                                {
                                    label: 'User 6',
                                    items: [{label: 'User 6.1'}, {label: 'User 6.2'}]
                                }
                            ]
                        ]
                    },
                    {
                        label: 'Events', icon: 'pi pi-fw pi-calendar',
                        items: [
                            [
                                {
                                    label: 'Event 1',
                                    items: [{label: 'Event 1.1'}, {label: 'Event 1.2'}]
                                },
                                {
                                    label: 'Event 2',
                                    items: [{label: 'Event 2.1'}, {label: 'Event 2.2'}]
                                }
                            ],
                            [
                                {
                                    label: 'Event 3',
                                    items: [{label: 'Event 3.1'}, {label: 'Event 3.2'}]
                                },
                                {
                                    label: 'Event 4',
                                    items: [{label: 'Event 4.1'}, {label: 'Event 4.2'}]
                                }
                            ]
                        ]
                    },
                    {
                        label: 'Settings', icon: 'pi pi-fw pi-cog',
                        items: [
                            [
                                {
                                    label: 'Setting 1',
                                    items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}]
                                },
                                {
                                    label: 'Setting 2',
                                    items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}]
                                },
                                {
                                    label: 'Setting 3',
                                    items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}]
                                }
                            ],
                            [
                                {
                                    label: 'Setting 4',
                                    items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}]
                                }
                            ]
                        ]
                    }
                ]);

                return { items }
            },
            components: {
                "p-megamenu": primevue.megamenu
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
