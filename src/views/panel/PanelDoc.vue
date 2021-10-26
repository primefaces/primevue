<template>
	<AppDoc name="PanelDemo" :sources="sources" github="panel/PanelDemo.vue">
        <h5>Import via Module</h5>
<pre v-code.script><code>
import Panel from 'primevue/panel';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/panel/panel.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>Panel is a container component that accepts content as its children.</p>
<pre v-code><code>
&lt;Panel header="Header"&gt;
	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
&lt;/Panel&gt;

</code></pre>

        <h5>Custom Header</h5>
        <p>Header of the panel is either defined with the <i>header</i> property or the header template.</p>
<pre v-code><code>
&lt;Panel&gt;
    &lt;template #header&gt;
        Header Content
    &lt;/template&gt;
	Content
&lt;/Panel&gt;

</code></pre>

		<h5>Toggleable</h5>
		<p>Content of the panel can be expanded and collapsed using <i>toggleable</i> option.</p>
<pre v-code><code>
&lt;Panel header="Header" :toggleable="true"&gt;
	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
&lt;/Panel&gt;

</code></pre>

        <p>To control the initial state of the toggleable panel, use the <i>collapsed</i> property.</p>
<pre v-code><code>
&lt;Panel header="Header Text" :toggleable="true" :collapsed="true"&gt;
	Content
&lt;/Panel&gt;

</code></pre>

        <p>Use the v-model directive to enable two-way binding.</p>

<pre v-code><code>
&lt;button type="button" @click="isCollapsed = !isCollapsed">Toggle Programmatically&lt;/button&gt;
&lt;Panel header="Header Text" :toggleable="true" v-model:collapsed="isCollapsed"&gt;
	Content
&lt;/Panel&gt;

</code></pre>

        <h5>Custom Icons</h5>
        <p>Additional icons can be placed at the header section of the panel using the special <i>icons</i> slot. For a unified look, it is suggest to add <i>.p-panel-header-icon</i>
        class to your icons.</p>
<pre v-code><code>
&lt;h5&gt;Advanced&lt;/h5&gt;
&lt;Panel header="Header"&gt;
    &lt;template #icons&gt;
        &lt;button class="p-panel-header-icon p-link p-mr-2" @click="toggle"&gt;
            &lt;span class="pi pi-cog"&gt;&lt;/span&gt;
        &lt;/button&gt;
        &lt;Menu id="config_menu" ref="menu" :model="items" :popup="true" /&gt;
    &lt;/template&gt;
&lt;/Panel&gt;

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
                        <td>header</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Header text of the panel.</td>
                    </tr>
                    <tr>
                        <td>toggleable</td>
                        <td>boolean</td>
                        <td>null</td>
                        <td>Defines if content of panel can be expanded and collapsed.</td>
                    </tr>
                    <tr>
                        <td>collapsed</td>
                        <td>boolean</td>
                        <td>null</td>
                        <td>Defines the initial state of panel content.</td>
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
                        <td>toggle</td>
                        <td>event.originalEvent: browser event <br />
                            event.value: collapsed state as a boolean
                        </td>
                        <td>Callback to invoke when a tab toggle.</td>
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
                        <td>header</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>icons</td>
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
                        <td>p-panel</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-panel-header</td>
                        <td>Header section.</td>
                    </tr>
                    <tr>
                        <td>p-panel-title</td>
                        <td>Title text of panel.</td>
                    </tr>
                    <tr>
                        <td>p-panel-header-icon</td>
                        <td>Action icons inside header.</td>
                    </tr>
                    <tr>
                        <td>p-panel-toggler</td>
                        <td>Toggle icon.</td>
                    </tr>
                    <tr>
                        <td>p-panel-content</td>
                        <td>Content of panel.</td>
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

        <h5>Regular</h5>
        <Panel header="Header">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Panel>

        <h5>Advanced</h5>
        <Panel header="Header" :toggleable="true">
            <template #icons>
                <button class="p-panel-header-icon p-link p-mr-2" @click="toggle">
                    <span class="pi pi-cog"></span>
                </button>
                <Menu id="config_menu" ref="menu" :model="items" :popup="true" />
            </template>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Panel>
    </div>
</template>

<script>
export default {
    data() {
        return {
            collapsed: true,
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

<style lang="scss" scoped>
.p-panel p {
    line-height: 1.5;
    margin: 0;
}
</style>`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <Toast />

        <h5>Regular</h5>
        <Panel header="Header">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Panel>

        <h5>Advanced</h5>
        <Panel header="Header" :toggleable="true">
            <template #icons>
                <button class="p-panel-header-icon p-link p-mr-2" @click="toggle">
                    <span class="pi pi-cog"></span>
                </button>
                <Menu id="config_menu" ref="menu" :model="items" :popup="true" />
            </template>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Panel>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';

export default {
    setup() {
        const toast = useToast();
        const menu = ref(null);
        const collapsed = ref(true);
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
        }

        return { menu, collapsed, items, toggle, save }
    }
}
<\\/script>

<style lang="scss" scoped>
.p-panel p {
    line-height: 1.5;
    margin: 0;
}
</style>`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/panel/panel.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/toast/toast.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/toastservice/toastservice.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/menu/menu.min.js"><\\/script>`,
                    content: `<div id="app">
            <p-toast></p-toast>

            <h5>Regular</h5>
            <p-panel header="Header">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </p-panel>

            <h5>Advanced</h5>
            <p-panel header="Header" :toggleable="true">
                <template #icons>
                    <p-button class="p-panel-header-icon p-link p-mr-2" @click="toggle">
                        <span class="pi pi-cog"></span>
                    </p-button>
                    <p-menu id="config_menu" ref="menu" :model="items" :popup="true"></p-menu>
                </template>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </p-panel>
        </div>

        <script type="module">
        const { createApp, ref } = Vue;
        const { useToast } = primevue.usetoast;

        const App = {
            setup() {
                const toast = useToast();
                const menu = ref(null);
                const collapsed = ref(true);
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
                }

                return { menu, collapsed, items, toggle, save }
            },
            components: {
                "p-panel": primevue.panel,
                "p-toast": primevue.toast,
                "p-menu": primevue.menu,
                "p-button": primevue.button
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .use(primevue.toastservice)
            .mount("#app");
        <\\/script>

        <style>
        .p-panel p {
            line-height: 1.5;
            margin: 0;
        }
        </style>`
                }
            }    
        }
    }
}
</script>