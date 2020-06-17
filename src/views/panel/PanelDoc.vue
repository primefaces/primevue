<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<CodeHighlight lang="javascript">
import Panel from 'primevue/panel';
</CodeHighlight>

				<h5>Getting Started</h5>
				<p>Panel is a container component that accepts content as its children.</p>
<CodeHighlight>
&lt;Panel header="Header"&gt;
	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
&lt;/Panel&gt;
</CodeHighlight>

                <h5>Custom Header</h5>
                <p>Header of the panel is either defined with the <i>header</i> property or the header template.</p>
<CodeHighlight>
&lt;Panel&gt;
    &lt;template #header&gt;
        Header Content
    &lt;/template&gt;
	Content
&lt;/Panel&gt;
</CodeHighlight>

				<h5>Toggleable</h5>
				<p>Content of the panel can be expanded and collapsed using <i>toggleable</i> option.</p>
<CodeHighlight>
&lt;Panel header="Header" :toggleable="true"&gt;
	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
&lt;/Panel&gt;
</CodeHighlight>

                <p>To control the initial state of the toggleable panel, use the <i>collapsed</i> property.</p>
<CodeHighlight>
&lt;Panel header="Header Text" :toggleable="true" :collapsed="true"&gt;
	Content
&lt;/Panel&gt;
</CodeHighlight>

                <p>Use the sync operator to enable two-way binding.</p>

<CodeHighlight>
&lt;button type="button" @click="isCollapsed = !isCollapsed">Toggle Programmatically&lt;/button&gt;
&lt;Panel header="Header Text" :toggleable="true" :collapsed.sync="isCollapsed"&gt;
	Content
&lt;/Panel&gt;
</CodeHighlight>

                <h5>Custom Icons</h5>
                <p>Additional icons can be placed at the header section of the panel using the special <i>icons</i> slot. For a unified look, it is suggest to add <i>.p-panel-header-icon</i>
                class to your icons.</p>
<CodeHighlight>
&lt;h5&gt;Advanced&lt;/h5&gt;
&lt;Panel header="Header"&gt;
    &lt;template #icons&gt;
        &lt;a tabindex="0" class="p-panel-header-icon" @click="toggle"&gt;
            &lt;span class="pi pi-cog"&gt;&lt;/span&gt;
        &lt;/a&gt;
        &lt;Menu id="config_menu" ref="menu" :model="items" :popup="true" /&gt;
    &lt;/template&gt;
&lt;/Panel&gt;
</CodeHighlight>

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
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/panel" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>

<CodeHighlight>
<template v-pre>
&lt;h5&gt;Regular&lt;/h5&gt;
&lt;Panel header="Header"&gt;
    &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&lt;/p&gt;
&lt;/Panel&gt;

&lt;h5&gt;Advanced&lt;/h5&gt;
&lt;Panel header="Header" :toggleable="true"&gt;
    &lt;template #icons&gt;
        &lt;a tabindex="0" class="p-panel-header-icon" @click="toggle"&gt;
            &lt;span class="pi pi-cog"&gt;&lt;/span&gt;
        &lt;/a&gt;
        &lt;Menu id="config_menu" ref="menu" :model="items" :popup="true" /&gt;
    &lt;/template&gt;
    &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&lt;/p&gt;
&lt;/Panel&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="js">
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
                        to: '/fileupload'
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
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>