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
&lt;Button label=&quot;Success&quot; class=&quot;p-button-success&quot; @click=&quot;showSuccess&quot; /&gt;
&lt;Button @click=&quot;showMultiple&quot; label=&quot;Multiple&quot; class=&quot;p-button-warning&quot; /&gt;
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
		&lt;div class=&quot;content-section introduction&quot;&gt;
			&lt;div class=&quot;feature-intro&quot;&gt;
				&lt;h1&gt;Toast&lt;/h1&gt;
				&lt;p&gt;Toast is used to display messages in an overlay.&lt;/p&gt;
			&lt;/div&gt;
		&lt;/div&gt;

		&lt;div class=&quot;content-section implementation p-fluid&quot;&gt;
			&lt;h3&gt;Severities&lt;/h3&gt;
			&lt;div class=&quot;p-grid&quot;&gt;
				&lt;div class=&quot;p-col-12 p-md-3&quot;&gt;
					&lt;Button label=&quot;Success&quot; class=&quot;p-button-success&quot; @click=&quot;showSuccess&quot; /&gt;
				&lt;/div&gt;
				&lt;div class=&quot;p-col-12 p-md-3&quot;&gt;
					&lt;Button label=&quot;Info&quot; class=&quot;p-button-info&quot; @click=&quot;showInfo&quot; /&gt;
				&lt;/div&gt;
				&lt;div class=&quot;p-col-12 p-md-3&quot;&gt;
					&lt;Button label=&quot;Warn&quot; class=&quot;p-button-warning&quot; @click=&quot;showWarn&quot; /&gt;
				&lt;/div&gt;
				&lt;div class=&quot;p-col-12 p-md-3&quot;&gt;
					&lt;Button label=&quot;Error&quot; class=&quot;p-button-danger&quot; @click=&quot;showError&quot; /&gt;
				&lt;/div&gt;
			&lt;/div&gt;

			&lt;h3&gt;Positions&lt;/h3&gt;
			&lt;div class=&quot;p-grid&quot;&gt;
				&lt;div class=&quot;p-col-12 p-md-4&quot;&gt;
					&lt;Button label=&quot;Top Left&quot; @click=&quot;showTopLeft&quot; /&gt;
				&lt;/div&gt;
				&lt;div class=&quot;p-col-12 p-md-4&quot;&gt;
					&lt;Button label=&quot;Bottom Left&quot; class=&quot;p-button-warning&quot; @click=&quot;showBottomLeft&quot; /&gt;
				&lt;/div&gt;
				&lt;div class=&quot;p-col-12 p-md-4&quot;&gt;
					&lt;Button label=&quot;Bottom Right&quot; class=&quot;p-button-success&quot; @click=&quot;showBottomRight&quot; /&gt;
				&lt;/div&gt;
			&lt;/div&gt;

			&lt;h3&gt;Options&lt;/h3&gt;
			&lt;div class=&quot;p-grid&quot;&gt;
				&lt;div class=&quot;p-col-12 p-md-6&quot;&gt;
					&lt;Button @click=&quot;showMultiple&quot; label=&quot;Multiple&quot; class=&quot;p-button-warning&quot; /&gt;
				&lt;/div&gt;
				&lt;div class=&quot;p-col-12 p-md-6&quot;&gt;
					&lt;Button @click=&quot;showSticky&quot; label=&quot;Sticky&quot; /&gt;
				&lt;/div&gt;
			&lt;/div&gt;

			&lt;h3&gt;Remove All&lt;/h3&gt;
			&lt;Button @click=&quot;clear&quot; label=&quot;Clear&quot; /&gt;
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