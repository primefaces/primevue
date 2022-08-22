<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<CodeHighlight lang="javascript">
import Menu from 'primevue/menu';
</CodeHighlight>

                <h5>MenuModel</h5>
                <p>Menu uses the common MenuModel API to define the items, visit <router-link to="/menumodel">MenuModel API</router-link> for details.</p>

				<h5>Getting Started</h5>
				<p>Menu requires a collection of menuitems as its model.</p>
<CodeHighlight>
&lt;Menu :model="items" /&gt;
</CodeHighlight>

<CodeHighlight lang="js">
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
</CodeHighlight>

                <h5>SubMenus</h5>
                <p>Menu supports one level of nesting via subitems of an item.</p>
<CodeHighlight lang="js">
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
</CodeHighlight>

                <h5>Popup Mode</h5>
                <p>Menu is inline by default whereas popup mode is supported by enabling popup property and calling toggle method with an event of the target.</p>

<CodeHighlight>
&lt;Button type="button" label="Toggle" @click="toggle" /&gt;
&lt;Menu ref="menu" :model="items" :popup="true" /&gt;
</CodeHighlight>

<CodeHighlight lang="js">
toggle(event) {
    this.$refs.menu.toggle(event);
}
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
                                <td>exact</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether to apply 'router-link-active-exact' class if route exactly matches the item path.</td>
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
                                <td>event: Browser event <br />
                                    target: Optional target if event.target would not be used</td>
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
						</tbody>
					</table>
				</div>

				<h5>Dependencies</h5>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/2.x/src/views/menu" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;h3&gt;Inline&lt;/h3&gt;
&lt;Menu :model="items" /&gt;

&lt;h3&gt;Overlay&lt;/h3&gt;
&lt;Button type="button" label="Toggle" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" /&gt;
&lt;Menu id="overlay_menu" ref="menu" :model="items" :popup="true" /&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
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