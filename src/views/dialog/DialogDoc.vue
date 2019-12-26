<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import Dialog from 'primevue/dialog';
</CodeHighlight>

				<h3>Getting Started</h3>
				<p>Dialog is used as a container and visibility is managed with <i>visible</i> property that requires the sync operator for two-way binding.</p>
<CodeHighlight>
&lt;Dialog header="Godfather I" :visible.sync="display" &gt;
	The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
	His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
	Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
	kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
&lt;/Dialog&gt;
</CodeHighlight>

<CodeHighlight lang="js">
export default {
	data() {
		return {
			display: false
		}
	}
}
</CodeHighlight>

				<h3>Header and Footer</h3>
				<p>Header and Footer sections are defined using properties with the same name that accept simple strings or with the <i>header</i> and <i>footer</i> templates for custom content.</p>
<CodeHighlight>
&lt;Dialog header="Header Text" footer="Footer Text" :visible.sync="display"&gt;
	Content
&lt;/Dialog&gt;
</CodeHighlight>

<CodeHighlight>
&lt;Dialog :visible.sync="display"&gt;
    &lt;template #header&gt;
		&lt;h3&gt;Header&lt;/h3&gt;
	&lt;/template&gt;

	Content
	&lt;template #footer&gt;
		&lt;Button label="Yes" icon="pi pi-check" /&gt;
		&lt;Button label="No" icon="pi pi-times" class="p-button-secondary"/&gt;
	&lt;/template&gt;
&lt;/Dialog&gt;
</CodeHighlight>

				<h3>Dynamic Content</h3>
				<p>Dynamic content may move the dialog boundaries outside of the viewport. Common solution is defining max-height via <i>contentStyle</i> so longer content displays a scrollbar.</p>

				<h3>Properties</h3>
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
                                <td>any</td>
                                <td>null</td>
                                <td>Title content of the dialog.</td>
                            </tr>
                            <tr>
                                <td>footer</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Footer content of the dialog.</td>
                            </tr>
                            <tr>
                                <td>visible</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Specifies the visibility of the dialog.</td>
                            </tr>
                            <tr>
                                <td>modal</td>
                                <td>boolean</td>
                                <td>null</td>
                                <td>Defines if background should be blocked when dialog is displayed.</td>
                            </tr>
                            <tr>
                                <td>contentStyle</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Style of the content section.</td>
                            </tr>
                            <tr>
                                <td>rtl</td>
                                <td>boolean</td>
                                <td>null</td>
                                <td>When enabled dialog is displayed in RTL direction.</td>
                            </tr>
                            <tr>
                                <td>closable</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Adds a close icon to the header to hide the dialog.</td>
                            </tr>
                            <tr>
                                <td>showHeader</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether to show the header or not.</td>
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
                                <td>ariaCloseLabel</td>
                                <td>string</td>
                                <td>close</td>
                                <td>Aria label of the close icon.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h3>Events</h3>
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
							<td>hide</td>
							<td>event: Event object</td>
							<td>Callback to invoke when dialog is hidden.</td>
						</tr>
						<tr>
							<td>show</td>
							<td>event: Event object</td>
							<td>Callback to invoke when dialog is showed.</td>
						</tr>
						</tbody>
					</table>
				</div>

				<h3>Styling</h3>
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
							<td>p-dialog</td>
							<td>Container element.</td>
						</tr>
						<tr>
							<td>p-dialog-titlebar</td>
							<td>Container of header.</td>
						</tr>
						<tr>
							<td>p-dialog-title</td>
							<td>Header element.</td>
						</tr>
						<tr>
							<td>p-dialog-titlebar-icon</td>
							<td>Icon container inside header.</td>
						</tr>
						<tr>
							<td>p-dialog-titlebar-close</td>
							<td>Close icon element.</td>
						</tr>
						<tr>
							<td>p-dialog-content</td>
							<td>Content element</td>
						</tr>
						</tbody>
					</table>
				</div>

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/dialog" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;Button label="Show" icon="pi pi-external-link" @click="open" /&gt;
&lt;Dialog header="Godfather I" :visible.sync="display" :style="{width: '50vw'}" :modal="true"&gt;
    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
    &lt;template #footer&gt;
        &lt;Button label="Yes" icon="pi pi-check" @click="close" /&gt;
        &lt;Button label="No" icon="pi pi-times" @click="close" class="p-button-secondary"/&gt;
    &lt;/template&gt;
&lt;/Dialog&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
	data() {
		return {
			display: false
		}
	},
	methods: {
		open() {
			this.display = true;
		},
		close() {
			this.display = false;
		}
	}
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>