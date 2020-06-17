<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<CodeHighlight lang="javascript">
import SplitButton from 'primevue/splitbutton';
</CodeHighlight>

				<h5>Getting Started</h5>
				<p>SplitButton has a default command button and a collection of additional options defined by the <i>model</i> property.</p>
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
					command: () => {
						window.location.href = 'https://vuejs.org/'
					}
				},
				{
					label: 'Upload',
					icon: 'pi pi-upload',
					command: () => {
						window.location.hash = "/fileupload"
					}
				}
			]
		}
	}
}
</CodeHighlight>

<CodeHighlight>
&lt;SplitButton label="Save" icon="pi pi-plus" :model="items"&gt;&lt;/SplitButton&gt;
</CodeHighlight>

                <h5>MenuModel</h5>
                <p>SplitButton uses the common MenuModel API to define the items, visit <router-link to="/menumodel">MenuModel API</router-link> for details.

				<h5>Severity</h5>
				<p>Different color options are available as severity levels.</p>

				<ul>
					<li>.p-button-secondary</li>
					<li>.p-button-success</li>
					<li>.p-button-info</li>
					<li>.p-button-warning</li>
					<li>.p-button-danger</li>
				</ul>

<CodeHighlight>
&lt;SplitButton label="Save" icon="pi pi-plus" :model="items"&gt;&lt;/SplitButton&gt;
&lt;SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-secondary"&gt;&lt;/SplitButton&gt;
&lt;SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-success"&gt;&lt;/SplitButton&gt;
&lt;SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-info"&gt;&lt;/SplitButton&gt;
&lt;SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-warning"&gt;&lt;/SplitButton&gt;
&lt;SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-danger"&gt;&lt;/SplitButton&gt;
</CodeHighlight>

				<h5>Properties</h5>
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
                                <td>disabled</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When present, it specifies that the component should be disabled.</td>
                            </tr>
                            <tr>
                                <td>tabindex</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Index of the element in tabbing order.</td>
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
                                <td>null</td>
                                <td>Id of the element or "body" for document where the overlay should be appended to.</td>
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
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/splitbutton" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;h3&gt;Basic&lt;/h3&gt;
&lt;SplitButton label="Save" icon="pi pi-plus" @click="save" :model="items"&gt;&lt;/SplitButton&gt;

&lt;h3&gt;Severities&lt;/h3&gt;
&lt;SplitButton label="Save" icon="pi pi-plus" :model="items"&gt;&lt;/SplitButton&gt;
&lt;SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-secondary"&gt;&lt;/SplitButton&gt;
&lt;SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-success"&gt;&lt;/SplitButton&gt;
&lt;SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-info"&gt;&lt;/SplitButton&gt;
&lt;SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-warning"&gt;&lt;/SplitButton&gt;
&lt;SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-danger"&gt;&lt;/SplitButton&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
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
					command: () => {
						window.location.hash = "/fileupload"
					}
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
</CodeHighlight>

<CodeHighlight lang="css">
.p-splitbutton {
	margin-right: .5rem;
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>
