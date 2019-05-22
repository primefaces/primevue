<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import Toast from 'primevue/toast';
</CodeHighlight>

				<h3>Getting Started</h3>
				<p>A single message is represented by the Message interface in PrimeVue that defines various properties such as severity,
					summary and detail. Messages are displayed by using the <i>add</i> method on the ref of the Toast instance.</p>
<CodeHighlight lang="js">
this.$toast.add({severity:'success', summary: 'Success Message', detail:'Order submitted', life: 3000});
</CodeHighlight>

				<h3>Message API</h3>
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
							<td>severity</td>
							<td>string</td>
							<td>null</td>
							<td>Severity of the message.</td>
						</tr>
						<tr>
							<td>summary</td>
							<td>element</td>
							<td>null</td>
							<td>Summary content of the message.</td>
						</tr>
						<tr>
							<td>detail</td>
							<td>element</td>
							<td>null</td>
							<td>Detail content of the message.</td>
						</tr>
						<tr>
							<td>closable</td>
							<td>boolean</td>
							<td>true</td>
							<td>Whether the message can be closed manually using the close icon.</td>
						</tr>
						<tr>
							<td>sticky</td>
							<td>element</td>
							<td>null</td>
							<td>When enabled, message is not removed automatically.</td>
						</tr>
						<tr>
							<td>life</td>
							<td>number</td>
							<td>3000</td>
							<td>Delay in milliseconds to close the message automatically.</td>
						</tr>
						</tbody>
					</table>
				</div>

				<h3>Severities</h3>
				<p>There are four possible values for the severity of a message.</p>

				<ul>
					<li>success</li>
					<li>info</li>
					<li>warn</li>
					<li>error</li>
				</ul>

				<h3>Showing Messages</h3>
				<p>Show method accepts either a single message or an array of messages.</p>
<CodeHighlight>
&lt;Button label="Success" class="p-button-success" @click="showSuccess" /&gt;
&lt;Button @click="showMultiple" label="Multiple" class="p-button-warning" /&gt;
</CodeHighlight>

<CodeHighlight lang="js">
showSuccess() {
	this.$toast.add({severity:'success', summary: 'Success Message', detail:'Order submitted', life: 3000});
},
showMultiple() {
	this.$toast.add({severity:'info', summary:'Message 1', detail:'PrimeVue rocks', life: 3000});
	this.$toast.add({severity:'info', summary:'Message 1', detail:'PrimeVue rocks', life: 3000});
	this.$toast.add({severity:'info', summary:'Message 1', detail:'PrimeVue rocks', life: 3000});
}
</CodeHighlight>

				<h3>Position</h3>
				<p>There are four positions available for the toast container defined by the <i>position</i> property that defaults to "topright". Other
					valid values are "topleft", "bottomleft" and "bottomright"
				</p>
				<CodeHighlight>
					???
				</CodeHighlight>

				<h3>Clearing Messages</h3>
				<p><i>removeAllGroups()</i> method removes all messages from Toast.</p>
<CodeHighlight lang="js">
this.$toast.removeAllGroups();
</CodeHighlight>

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
							<td>group</td>
							<td>string</td>
							<td>null</td>
							<td>???</td>
						</tr>
						<tr>
							<td>position</td>
							<td>string</td>
							<td>topright</td>
							<td>Position of the toast in viewport, valid values are "topright", "topleft", "bottomleft" and "bottomright".</td>
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
							<td>p-toast</td>
							<td>Main container element.</td>
						</tr>
						<tr>
							<td>p-toast-container</td>
							<td>Container of a message item.</td>
						</tr>
						<tr>
							<td>p-toast-item</td>
							<td>Message element.</td>
						</tr>
						<tr>
							<td>p-toast-icon-close</td>
							<td>Close icon of a message.</td>
						</tr>
						<tr>
							<td>p-toast-image</td>
							<td>Severity icon.</td>
						</tr>
						<tr>
							<td>p-toast-message</td>
							<td>Container of message texts.</td>
						</tr>
						<tr>
							<td>p-toast-title</td>
							<td>Summary of the message.</td>
						</tr>
						</tbody>
					</table>
				</div>

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/toast" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;template&gt;
	&lt;div&gt;
		&lt;div class="content-section introduction"&gt;
			&lt;div class="feature-intro"&gt;
				&lt;h1&gt;Toast&lt;/h1&gt;
				&lt;p&gt;Toast is used to display messages in an overlay.&lt;/p&gt;
			&lt;/div&gt;
		&lt;/div&gt;

		&lt;div class="content-section implementation p-fluid"&gt;
			&lt;h3&gt;Severities&lt;/h3&gt;
			&lt;div class="p-grid"&gt;
				&lt;div class="p-col-12 p-md-3"&gt;
					&lt;Button label="Success" class="p-button-success" @click="showSuccess" /&gt;
				&lt;/div&gt;
				&lt;div class="p-col-12 p-md-3"&gt;
					&lt;Button label="Info" class="p-button-info" @click="showInfo" /&gt;
				&lt;/div&gt;
				&lt;div class="p-col-12 p-md-3"&gt;
					&lt;Button label="Warn" class="p-button-warning" @click="showWarn" /&gt;
				&lt;/div&gt;
				&lt;div class="p-col-12 p-md-3"&gt;
					&lt;Button label="Error" class="p-button-danger" @click="showError" /&gt;
				&lt;/div&gt;
			&lt;/div&gt;

			&lt;h3&gt;Positions&lt;/h3&gt;
			&lt;div class="p-grid"&gt;
				&lt;div class="p-col-12 p-md-4"&gt;
					&lt;Button label="Top Left" @click="showTopLeft" /&gt;
				&lt;/div&gt;
				&lt;div class="p-col-12 p-md-4"&gt;
					&lt;Button label="Bottom Left" class="p-button-warning" @click="showBottomLeft" /&gt;
				&lt;/div&gt;
				&lt;div class="p-col-12 p-md-4"&gt;
					&lt;Button label="Bottom Right" class="p-button-success" @click="showBottomRight" /&gt;
				&lt;/div&gt;
			&lt;/div&gt;

			&lt;h3&gt;Options&lt;/h3&gt;
			&lt;div class="p-grid"&gt;
				&lt;div class="p-col-12 p-md-6"&gt;
					&lt;Button @click="showMultiple" label="Multiple" class="p-button-warning" /&gt;
				&lt;/div&gt;
				&lt;div class="p-col-12 p-md-6"&gt;
					&lt;Button @click="showSticky" label="Sticky" /&gt;
				&lt;/div&gt;
			&lt;/div&gt;

			&lt;h3&gt;Remove All&lt;/h3&gt;
			&lt;Button @click="clear" label="Clear" /&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/template&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
	data() {
		return {
			messages: [],
		}
	},
	methods: {
		showSuccess() {
			this.$toast.add({severity:'success', summary: 'Success Message', detail:'Order submitted', life: 3000});
		},
		showInfo() {
			this.$toast.add({severity:'info', summary: 'Info Message', detail:'PrimeVue rocks', life: 3000});
		},
		showWarn() {
			this.$toast.add({severity:'warn', summary: 'Warn Message', detail:'There are unsaved changes', life: 3000});
		},
		showError() {
			this.$toast.add({severity:'error', summary: 'Error Message', detail:'Validation failed', life: 3000});
		},
		showTopLeft() {
			this.$toast.add({severity: 'info', summary: 'Info ', detail: 'You need to close Me', group: 'tl', life: 3000});
		},
		showBottomLeft() {
			this.$toast.add({severity:'warn', summary: 'Warn Message', detail:'There are unsaved changes', group: 'bl', life: 3000});
		},
		showBottomRight() {
			this.$toast.add({severity:'success', summary: 'Success Message', detail:'Order submitted', group: 'br', life: 3000});
		},
		showSticky() {
			this.$toast.add({severity: 'info', summary: 'Sticky Message', detail: 'You need to close Me'});
		},
		showMultiple() {
			this.$toast.add({severity:'info', summary:'Message 1', detail:'PrimeVue rocks', life: 3000});
			this.$toast.add({severity:'info', summary:'Message 1', detail:'PrimeVue rocks', life: 3000});
			this.$toast.add({severity:'info', summary:'Message 1', detail:'PrimeVue rocks', life: 3000});
		},
		clear() {
			this.$toast.removeAllGroups();
		}
	}
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>