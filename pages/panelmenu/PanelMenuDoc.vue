<template>
    <AppDoc name="PanelMenuDemo" :sources="sources">
        <h5>Import via Module</h5>
        <pre v-code.script><code>
import PanelMenu from 'primevue/panelmenu';

</code></pre>

        <h5>Import via CDN</h5>
        <pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/panelmenu/panelmenu.min.js"&gt;&lt;/script&gt;

</code></pre>

        <h5>MenuModel</h5>
        <p>PanelMenu uses the common MenuModel API to define the items, visit <router-link to="/menumodel">MenuModel API</router-link> for details.</p>

        <h5>Getting Started</h5>
        <p>PanelMenu requires a collection of menuitems as its model.</p>
        <pre v-code><code>
&lt;PanelMenu :model="items" /&gt;

</code></pre>

        <div style="height: 400px; overflow: auto">
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
        </div>

        <h5>Templating</h5>
        <p>PanelMenu offers content customization with the <i>item</i> template that receives the menuitem instance from the model as a parameter.</p>
        <pre v-code><code>
&lt;PanelMenu :model="items"&gt;
    &lt;template #item="{item}"&gt;
        &lt;a :href="item.url"&gt;&#123;&#123;item.label&#125;&#125;&lt;/a&gt;
    &lt;/template&gt;
&lt;/PanelMenu&gt;

</code></pre>

        <p><i>router-link</i> with route configuration can also be used within templating for further customization.</p>
        <pre v-code><code>
&lt;PanelMenu :model="items"&gt;
    &lt;template #item="{item}"&gt;
        &lt;router-link :to="item.to" custom v-slot="{href, route, navigate, isActive, isExactActive}"&gt;
            &lt;a :href="href" @click="navigate" :class="{'active-link': isActive, 'active-link-exact': isExactActive}"&gt;&#123;&#123;route.fullPath&#125;&#125;&lt;/a&gt;
        &lt;/router-link&gt;
    &lt;/template&gt;
&lt;/PanelMenu&gt;

</code></pre>

        <h5>Programmatic Control</h5>
        <p>
            If the menuitem has a <i>key</i> defined, PanelMenu state can be controlled programmatically with the <i>expandedKeys</i> property that defines the keys that are expanded. This property is a Map instance whose key is the key of a node and
            value is a boolean. Note that <i>expandedKeys</i> also supports two-way binding with the v-model directive.
        </p>

        <p>Example below expands and collapses all nodes with buttons.</p>
        <pre v-code><code>
&lt;div&gt;
    &lt;Button type="button" icon="pi pi-plus" label="Expand All" @click="expandAll" /&gt;
    &lt;Button type="button" icon="pi pi-minus" label="Collapse All" @click="collapseAll" /&gt;
&lt;/div&gt;
&lt;PanelMenu :model="items" v-model:expandedKeys="expandedKeys""&gt;&lt;/PanelMenu&gt;

</code></pre>

        <div style="height: 400px; overflow: auto">
            <pre v-code.script><code>
export default {
    data() {
        return {
            items: [{
                    key: '0',
                    label: 'File',
                    icon: 'pi pi-fw pi-file',
                    items: [{
                            key: '0_0',
                            label: 'New',
                            icon: 'pi pi-fw pi-plus',
                            items: [{
                                    key: '0_0_0',
                                    label: 'Bookmark',
                                    icon: 'pi pi-fw pi-bookmark'
                                },
                                {
                                    key: '0_0_1',
                                    label: 'Video',
                                    icon: 'pi pi-fw pi-video'
                                }
                            ]
                        },
                        {
                            key: '0_1',
                            label: 'Delete',
                            icon: 'pi pi-fw pi-trash'
                        },
                        {
                            key: '0_2',
                            label: 'Export',
                            icon: 'pi pi-fw pi-external-link'
                        }
                    ]
                },
                {
                    key: '1',
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil',
                    items: [{
                            key: '1_0',
                            label: 'Left',
                            icon: 'pi pi-fw pi-align-left'
                        },
                        {
                            key: '1_1',
                            label: 'Right',
                            icon: 'pi pi-fw pi-align-right'
                        },
                        {
                            key: '1_2',
                            label: 'Center',
                            icon: 'pi pi-fw pi-align-center'
                        },
                        {
                            key: '1_3',
                            label: 'Justify',
                            icon: 'pi pi-fw pi-align-justify'
                        }
                    ]
                },
                {
                    key: '2',
                    label: 'Users',
                    icon: 'pi pi-fw pi-user',
                    items: [{
                            key: '2_0',
                            label: 'New',
                            icon: 'pi pi-fw pi-user-plus',

                        },
                        {
                            key: '2_1',
                            label: 'Delete',
                            icon: 'pi pi-fw pi-user-minus',
                        },
                        {
                            key: '2_2',
                            label: 'Search',
                            icon: 'pi pi-fw pi-users',
                            items: [{
                                    key: '2_2_0',
                                    label: 'Filter',
                                    icon: 'pi pi-fw pi-filter',
                                    items: [{
                                        key: '2_2_0_0',
                                        label: 'Print',
                                        icon: 'pi pi-fw pi-print'
                                    }]
                                },
                                {
                                    key: '2_2_1',
                                    icon: 'pi pi-fw pi-bars',
                                    label: 'List'
                                }
                            ]
                        }
                    ]
                },
                {
                    key: '3',
                    label: 'Events',
                    icon: 'pi pi-fw pi-calendar',
                    items: [{
                            key: '3_0',
                            label: 'Edit',
                            icon: 'pi pi-fw pi-pencil',
                            items: [{
                                    key: '3_0_0',
                                    label: 'Save',
                                    icon: 'pi pi-fw pi-calendar-plus'
                                },
                                {
                                    key: '3_0_0',
                                    label: 'Delete',
                                    icon: 'pi pi-fw pi-calendar-minus'
                                }
                            ]
                        },
                        {
                            key: '3_1',
                            label: 'Archieve',
                            icon: 'pi pi-fw pi-calendar-times',
                            items: [{
                                key: '3_1_0',
                                label: 'Remove',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }]
                        }
                    ]
                }
            ],
            expandedKeys: {}
        }
    },
    methods: {
        expandAll() {
            for (let node of this.items) {
                this.expandNode(node);
            }

            this.expandedKeys = {
                ...this.expandedKeys
            };
        },
        collapseAll() {
            this.expandedKeys = {};
        },
        expandNode(node) {
            if (node.items && node.items.length) {
                this.expandedKeys[node.key] = true;

                for (let child of node.items) {
                    this.expandNode(child);
                }
            }
        }
    }
}

</code></pre>
        </div>

        <p class="mt-3">In order to display some nodes as expanded by default, simply add their keys to the map.</p>
        <pre v-code.script><code>
export default {
    data() {
        return {
            items: //menu model instance,
            expandedKeys: {}
        }
    },
    mounted() {
        this.expandedKeys[this.items[0.key]] = true;
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
                    <tr>
                        <td>expandedKeys</td>
                        <td>array</td>
                        <td>null</td>
                        <td>A map of keys to represent the expansion state in controlled mode.</td>
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
                        <td>panel-open</td>
                        <td>
                            event.originalEvent: Browser event <br />
                            event.item: Current item
                        </td>
                        <td>Callback to invoke when a panel gets expanded.</td>
                    </tr>
                    <tr>
                        <td>panel-close</td>
                        <td>
                            event.originalEvent: Browser event <br />
                            event.item: Current item
                        </td>
                        <td>Callback to invoke when an active panel is collapsed by clicking on the header.</td>
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
                        <td>p-panelmenu</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-panelmenu-panel</td>
                        <td>Submenu container.</td>
                    </tr>
                    <tr>
                        <td>p-toggleable-content</td>
                        <td>Accordion content of root submenu.</td>
                    </tr>
                    <tr>
                        <td>p-panelmenu-header</td>
                        <td>Accordion header of root submenu.</td>
                    </tr>
                    <tr>
                        <td>p-panelmenu-header-content</td>
                        <td>Content of accordion header.</td>
                    </tr>
                    <tr>
                        <td>p-panelmenu-header-action</td>
                        <td>Action of accordion header.</td>
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
                        <td>p-submenu-icon</td>
                        <td>Arrow icon of an accordion header.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5>Accessibility</h5>
        <h6>Screen Reader</h6>
        <p>
            Accordion header elements have a <i>button</i> role, an <i>aria-label</i> defined using the <i>label</i> property of the menuitem model and <i>aria-controls</i> to define the id of the content section along with <i>aria-expanded</i> for
            the visibility state.
        </p>
        <p>The content of an accordion panel uses <i>region</i> role, defines an id that matches the <i>aria-controls</i> of the header and <i>aria-labelledby</i> referring to the id of the header.</p>

        <p>
            The tree elements has a <i>tree</i> as the role and each menu item has a <i>treeitem</i> role along with <i>aria-label</i>, <i>aria-selected</i> and <i>aria-expanded</i> attributes. The container element of a treenode has the
            <i>group</i> role. The <i>aria-setsize</i>, <i>aria-posinset</i> and <i>aria-level</i> attributes are calculated implicitly and added to each treeitem.
        </p>

        <h6>Header Keyboard Support</h6>
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
                        <td>Moves focus to the next the focusable element in the page tab sequence.</td>
                    </tr>
                    <tr>
                        <td><i>shift</i> + <i>tab</i></td>
                        <td>Moves focus to the previous the focusable element in the page tab sequence.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>enter</i>
                        </td>
                        <td>Toggles the visibility of the content.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>space</i>
                        </td>
                        <td>Toggles the visibility of the content.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>down arrow</i>
                        </td>
                        <td>Moves focus to the next header. If focus is on the last header, moves focus to the first header.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>up arrow</i>
                        </td>
                        <td>Moves focus to the previous header. If focus is on the first header, moves focus to the last header.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>home</i>
                        </td>
                        <td>Moves focus to the first header.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>end</i>
                        </td>
                        <td>Moves focus to the last header.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h6>Tree Keyboard Support</h6>
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
                        <td>Moves focus to the next focusable element in the page tab order.</td>
                    </tr>
                    <tr>
                        <td><i>shift</i> + <i>tab</i></td>
                        <td>Moves focus to the previous focusable element in the page tab order.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>enter</i>
                        </td>
                        <td>Activates the focused treenode.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>space</i>
                        </td>
                        <td>Activates the focused treenode.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>down arrow</i>
                        </td>
                        <td>Moves focus to the next treenode.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>up arrow</i>
                        </td>
                        <td>Moves focus to the previous treenode.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>right arrow</i>
                        </td>
                        <td>If node is closed, opens the node otherwise moves focus to the first child node.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>left arrow</i>
                        </td>
                        <td>If node is open, closes the node otherwise moves focus to the parent node.</td>
                    </tr>
                    <tr>
                        <td><i>any printable character</i></td>
                        <td>Moves focus to the visible option whose label starts with the characters being typed.</td>
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
        <h5>Default</h5>
        <PanelMenu :model="items" />

        <h5>Programmatic</h5>
        <div class="mb-3">
            <Button type="button" icon="pi pi-plus" label="Expand All" @click="expandAll" class="mr-2" />
            <Button type="button" icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
            </div>
        <PanelMenu :model="items" v-model:expandedKeys="expandedKeys" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            expandedKeys: {},
            items: [{
                    key: '0',
                    label: 'File',
                    icon: 'pi pi-fw pi-file',
                    items: [{
                            key: '0_0',
                            label: 'New',
                            icon: 'pi pi-fw pi-plus',
                            items: [{
                                    key: '0_0_0',
                                    label: 'Bookmark',
                                    icon: 'pi pi-fw pi-bookmark'
                                },
                                {
                                    key: '0_0_1',
                                    label: 'Video',
                                    icon: 'pi pi-fw pi-video'
                                }
                            ]
                        },
                        {
                            key: '0_1',
                            label: 'Delete',
                            icon: 'pi pi-fw pi-trash'
                        },
                        {
                            key: '0_2',
                            label: 'Export',
                            icon: 'pi pi-fw pi-external-link'
                        }
                    ]
                },
                {
                    key: '1',
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil',
                    items: [{
                            key: '1_0',
                            label: 'Left',
                            icon: 'pi pi-fw pi-align-left'
                        },
                        {
                            key: '1_1',
                            label: 'Right',
                            icon: 'pi pi-fw pi-align-right'
                        },
                        {
                            key: '1_2',
                            label: 'Center',
                            icon: 'pi pi-fw pi-align-center'
                        },
                        {
                            key: '1_3',
                            label: 'Justify',
                            icon: 'pi pi-fw pi-align-justify'
                        }
                    ]
                },
                {
                    key: '2',
                    label: 'Users',
                    icon: 'pi pi-fw pi-user',
                    items: [{
                            key: '2_0',
                            label: 'New',
                            icon: 'pi pi-fw pi-user-plus',

                        },
                        {
                            key: '2_1',
                            label: 'Delete',
                            icon: 'pi pi-fw pi-user-minus',
                        },
                        {
                            key: '2_2',
                            label: 'Search',
                            icon: 'pi pi-fw pi-users',
                            items: [{
                                    key: '2_2_0',
                                    label: 'Filter',
                                    icon: 'pi pi-fw pi-filter',
                                    items: [{
                                        key: '2_2_0_0',
                                        label: 'Print',
                                        icon: 'pi pi-fw pi-print'
                                    }]
                                },
                                {
                                    key: '2_2_1',
                                    icon: 'pi pi-fw pi-bars',
                                    label: 'List'
                                }
                            ]
                        }
                    ]
                },
                {
                    key: '3',
                    label: 'Events',
                    icon: 'pi pi-fw pi-calendar',
                    items: [{
                            key: '3_0',
                            label: 'Edit',
                            icon: 'pi pi-fw pi-pencil',
                            items: [{
                                    key: '3_0_0',
                                    label: 'Save',
                                    icon: 'pi pi-fw pi-calendar-plus'
                                },
                                {
                                    key: '3_0_0',
                                    label: 'Delete',
                                    icon: 'pi pi-fw pi-calendar-minus'
                                }
                            ]
                        },
                        {
                            key: '3_1',
                            label: 'Archieve',
                            icon: 'pi pi-fw pi-calendar-times',
                            items: [{
                                key: '3_1_0',
                                label: 'Remove',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }]
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        expandAll() {
            for (let node of this.items) {
                this.expandNode(node);
            }

            this.expandedKeys = {
                ...this.expandedKeys
            };
        },
        collapseAll() {
            this.expandedKeys = {};
        },
        expandNode(node) {
            if (node.items && node.items.length) {
                this.expandedKeys[node.key] = true;

                for (let child of node.items) {
                    this.expandNode(child);
                }
            }
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
        <h5>Default</h5>
        <PanelMenu :model="items" />

        <h5>Programmatic</h5>
        <div class="mb-3">
            <Button type="button" icon="pi pi-plus" label="Expand All" @click="expandAll" class="mr-2" />
            <Button type="button" icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
            </div>
        <PanelMenu :model="items" v-model:expandedKeys="expandedKeys" />
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const expandedKeys = ref({});
        const items = ref([
            {
                key: '0',
                label: 'File',
                icon: 'pi pi-fw pi-file',
                items: [{
                        key: '0_0',
                        label: 'New',
                        icon: 'pi pi-fw pi-plus',
                        items: [{
                                key: '0_0_0',
                                label: 'Bookmark',
                                icon: 'pi pi-fw pi-bookmark'
                            },
                            {
                                key: '0_0_1',
                                label: 'Video',
                                icon: 'pi pi-fw pi-video'
                            }
                        ]
                    },
                    {
                        key: '0_1',
                        label: 'Delete',
                        icon: 'pi pi-fw pi-trash'
                    },
                    {
                        key: '0_2',
                        label: 'Export',
                        icon: 'pi pi-fw pi-external-link'
                    }
                ]
            },
            {
                key: '1',
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [{
                        key: '1_0',
                        label: 'Left',
                        icon: 'pi pi-fw pi-align-left'
                    },
                    {
                        key: '1_1',
                        label: 'Right',
                        icon: 'pi pi-fw pi-align-right'
                    },
                    {
                        key: '1_2',
                        label: 'Center',
                        icon: 'pi pi-fw pi-align-center'
                    },
                    {
                        key: '1_3',
                        label: 'Justify',
                        icon: 'pi pi-fw pi-align-justify'
                    }
                ]
            },
            {
                key: '2',
                label: 'Users',
                icon: 'pi pi-fw pi-user',
                items: [{
                        key: '2_0',
                        label: 'New',
                        icon: 'pi pi-fw pi-user-plus',

                    },
                    {
                        key: '2_1',
                        label: 'Delete',
                        icon: 'pi pi-fw pi-user-minus',
                    },
                    {
                        key: '2_2',
                        label: 'Search',
                        icon: 'pi pi-fw pi-users',
                        items: [{
                                key: '2_2_0',
                                label: 'Filter',
                                icon: 'pi pi-fw pi-filter',
                                items: [{
                                    key: '2_2_0_0',
                                    label: 'Print',
                                    icon: 'pi pi-fw pi-print'
                                }]
                            },
                            {
                                key: '2_2_1',
                                icon: 'pi pi-fw pi-bars',
                                label: 'List'
                            }
                        ]
                    }
                ]
            },
            {
                key: '3',
                label: 'Events',
                icon: 'pi pi-fw pi-calendar',
                items: [{
                        key: '3_0',
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [{
                                key: '3_0_0',
                                label: 'Save',
                                icon: 'pi pi-fw pi-calendar-plus'
                            },
                            {
                                key: '3_0_0',
                                label: 'Delete',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    },
                    {
                        key: '3_1',
                        label: 'Archieve',
                        icon: 'pi pi-fw pi-calendar-times',
                        items: [{
                            key: '3_1_0',
                            label: 'Remove',
                            icon: 'pi pi-fw pi-calendar-minus'
                        }]
                    }
                ]
            }
        ]);

        const expandAll = () => {
            for (let node of nodes.value) {
                expandNode(node);
            }

            expandedKeys.value = {...expandedKeys.value};
        };
        const collapseAll = () => {
            expandedKeys.value = {};
        };
        const expandNode = (node) => {
            if (node.children && node.children.length) {
                expandedKeys.value[node.key] = true;

                for (let child of node.children) {
                    expandNode(child);
                }
            }
        };

        return { items, expandedKeys, expandAll, collapseAll, expandNode }
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
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/vue-router@4.0.0/dist/vue-router.global.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/panelmenu/panelmenu.min.js"><\\/script>`,
                    content: `<div id="app">
            <h5>Default</h5>
            <p-panelmenu :model="items"></p-panelmenu>

            <h5>Programmatic</h5>
            <div class="mb-3">
                <p-button type="button" icon="pi pi-plus" label="Expand All" @click="expandAll" class="mr-2"></p-button>
                <p-button type="button" icon="pi pi-minus" label="Collapse All" @click="collapseAll"></p-button>
                </div>
            <p-panelmenu :model="items" v-model:expanded-keys="expandedKeys"></p-panelmenu>
        </div>

        <script type="module">
        const { createApp, ref } = Vue;

        const App = {
            setup() {
                const expandedKeys = ref({});
                const items = ref([{
                        key: '0',
                        label: 'File',
                        icon: 'pi pi-fw pi-file',
                        items: [{
                                key: '0_0',
                                label: 'New',
                                icon: 'pi pi-fw pi-plus',
                                items: [{
                                        key: '0_0_0',
                                        label: 'Bookmark',
                                        icon: 'pi pi-fw pi-bookmark'
                                    },
                                    {
                                        key: '0_0_1',
                                        label: 'Video',
                                        icon: 'pi pi-fw pi-video'
                                    }
                                ]
                            },
                            {
                                key: '0_1',
                                label: 'Delete',
                                icon: 'pi pi-fw pi-trash'
                            },
                            {
                                key: '0_2',
                                label: 'Export',
                                icon: 'pi pi-fw pi-external-link'
                            }
                        ]
                    },
                    {
                        key: '1',
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [{
                                key: '1_0',
                                label: 'Left',
                                icon: 'pi pi-fw pi-align-left'
                            },
                            {
                                key: '1_1',
                                label: 'Right',
                                icon: 'pi pi-fw pi-align-right'
                            },
                            {
                                key: '1_2',
                                label: 'Center',
                                icon: 'pi pi-fw pi-align-center'
                            },
                            {
                                key: '1_3',
                                label: 'Justify',
                                icon: 'pi pi-fw pi-align-justify'
                            }
                        ]
                    },
                    {
                        key: '2',
                        label: 'Users',
                        icon: 'pi pi-fw pi-user',
                        items: [{
                                key: '2_0',
                                label: 'New',
                                icon: 'pi pi-fw pi-user-plus',

                            },
                            {
                                key: '2_1',
                                label: 'Delete',
                                icon: 'pi pi-fw pi-user-minus',
                            },
                            {
                                key: '2_2',
                                label: 'Search',
                                icon: 'pi pi-fw pi-users',
                                items: [{
                                        key: '2_2_0',
                                        label: 'Filter',
                                        icon: 'pi pi-fw pi-filter',
                                        items: [{
                                            key: '2_2_0_0',
                                            label: 'Print',
                                            icon: 'pi pi-fw pi-print'
                                        }]
                                    },
                                    {
                                        key: '2_2_1',
                                        icon: 'pi pi-fw pi-bars',
                                        label: 'List'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        key: '3',
                        label: 'Events',
                        icon: 'pi pi-fw pi-calendar',
                        items: [{
                                key: '3_0',
                                label: 'Edit',
                                icon: 'pi pi-fw pi-pencil',
                                items: [{
                                        key: '3_0_0',
                                        label: 'Save',
                                        icon: 'pi pi-fw pi-calendar-plus'
                                    },
                                    {
                                        key: '3_0_0',
                                        label: 'Delete',
                                        icon: 'pi pi-fw pi-calendar-minus'
                                    }
                                ]
                            },
                            {
                                key: '3_1',
                                label: 'Archieve',
                                icon: 'pi pi-fw pi-calendar-times',
                                items: [{
                                    key: '3_1_0',
                                    label: 'Remove',
                                    icon: 'pi pi-fw pi-calendar-minus'
                                }]
                            }
                        ]
                    }
                ]);

                const expandAll = () => {
                    for (let node of nodes.value) {
                        expandNode(node);
                    }

                    expandedKeys.value = {...expandedKeys.value};
                };
                const collapseAll = () => {
                    expandedKeys.value = {};
                };
                const expandNode = (node) => {
                    if (node.children && node.children.length) {
                        expandedKeys.value[node.key] = true;

                        for (let child of node.children) {
                            expandNode(child);
                        }
                    }
                };

                return { items, expandedKeys, expandAll, collapseAll, expandNode }
            },
            components: {
                "p-panelmenu": primevue.panelmenu,
                "p-button": primevue.button
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

        <style>
        .p-panelmenu {
            width: 22rem;
        }
        </style>
`
                }
            }
        };
    }
};
</script>
