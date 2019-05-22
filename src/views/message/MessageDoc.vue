<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import Message from 'primevue/message';
import ValidationMessage from 'primevue/validationmessage';
</CodeHighlight>

				<h3>Getting Started</h3>
				<p>A single message is specified by Message interface in PrimeVue that defines the severity and content as the properties.
					Messages to display can either be defined using the value property which should an array of Message instances.</p>
<CodeHighlight>
<template v-pre>
&lt;Message v-for="msg of messages" :severity="msg.severity" :key="msg.content"&gt;{{msg.content}}&lt;/Message&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="js">
data() {
	return {
		messages: [
			{severity: 'info', content: 'Dynamic Info Message'},
			{severity: 'success', content: 'Dynamic Success Message'},
			{severity: 'warn', content: 'Dynamic Warning Message'}
		]
	}
}
</CodeHighlight>

				<h3>Severities</h3>
				<p>There are four possible values for the severity of a message.</p>

				<ul>
					<li>success</li>
					<li>info</li>
					<li>warn</li>
					<li>error</li>
				</ul>

				<h3>Closable</h3>
				<p>Messages are closable by default resulting in a close icon being displayed on top right corner. In order to disable closable messages, set <i>closable</i> to false.</p>
<CodeHighlight>
&lt;Message severity="success" :closable="false"&gt;Order Submitted&lt;/Message&gt;
</CodeHighlight>

				<h3>Sticky</h3>
				<p>Messages are cleared automatically after the timeout defined by <i>life</i> property which is 3 seconds by default. Use <i>sticky</i> mode to make them stay until
					they are manually removed.</p>
<CodeHighlight>
&lt;Message severity="warn" :life="5000" :sticky="false"&gt;This message will hide in 5 seconds.&lt;/Message&gt;
</CodeHighlight>

				<h3>ValidationMessage Component</h3>
				<p>ValidationMessage component is useful in cases where a single message needs to be displayed related to an element such as forms. It has one property, <i>severity</i> of the message.</p>
<CodeHighlight>
&lt;InputText placeholder="Username" class="p-error" /&gt;
&lt;ValidationMessage&gt;Field is required&lt;/ValidationMessage&gt;
</CodeHighlight>


				<h3>Properties of Message</h3>
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
							<td>info</td>
							<td>Severity level of the message.</td>
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
							<td>p-messages</td>
							<td>Container element.</td>
						</tr>
						<tr>
							<td>p-messages-info</td>
							<td>Container element when displaying info messages.</td>
						</tr>
						<tr>
							<td>p-messages-warn</td>
							<td>Container element when displaying warning messages.</td>
						</tr>
						<tr>
							<td>p-messages-error</td>
							<td>Container element when displaying error messages.</td>
						</tr>
						<tr>
							<td>p-messages-success</td>
							<td>Container element when displaying success messages.</td>
						</tr>
						<tr>
							<td>p-messages-close</td>
							<td>Close icon.</td>
						</tr>
						<tr>
							<td>p-messages-icon</td>
							<td>Severity icon.</td>
						</tr>
						<tr>
							<td>p-messages-summary</td>
							<td>Summary of a message.</td>
						</tr>
						<tr>
							<td>p-messages-detail</td>
							<td>Detail of a message.</td>
						</tr>
						</tbody>
					</table>
				</div>

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/message" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;template&gt;
	&lt;div&gt;
		&lt;div class="content-section introduction"&gt;
			&lt;div class="feature-intro"&gt;
				&lt;h1&gt;Message&lt;/h1&gt;
				&lt;p&gt;Messages is used to display inline messages with various severities.&lt;/p&gt;
			&lt;/div&gt;
		&lt;/div&gt;

		&lt;div class="content-section implementation"&gt;
			&lt;h3 class="first"&gt;Severities&lt;/h3&gt;
			&lt;Message severity="success"&gt;Order Submitted&lt;/Message&gt;
			&lt;Message severity="info"&gt;PrimeVue Rocks&lt;/Message&gt;
			&lt;Message severity="warn"&gt;There are unsaved changes&lt;/Message&gt;
			&lt;Message severity="error"&gt;Validation Failed&lt;/Message&gt;

			&lt;h3&gt;Dynamic&lt;/h3&gt;
			&lt;Button label="Show" @click="addMessages()" /&gt;
			&lt;Button label="Clear" @click="removeMessages()" class="p-button-secondary"/&gt;
			&lt;Message v-for="msg of messages" :severity="msg.severity" :key="msg.content"&gt;{{msg.content}}&lt;/Message&gt;

			&lt;h3&gt;Auto Dismiss&lt;/h3&gt;
			&lt;Message severity="warn" :life="5000" :sticky="false"&gt;This message will hide in 5 seconds.&lt;/Message&gt;

			&lt;h3&gt;Validation Message&lt;/h3&gt;
			&lt;div class="p-grid"&gt;
				&lt;div class="p-col-12"&gt;
					&lt;InputText placeholder="Username" class="p-error" /&gt;
					&lt;ValidationMessage&gt;Field is required&lt;/ValidationMessage&gt;
				&lt;/div&gt;
				&lt;div class="p-col-12"&gt;
					&lt;InputText placeholder="Email" class="p-error" :closable="false" /&gt;
					&lt;ValidationMessage /&gt;
				&lt;/div&gt;
			&lt;/div&gt;
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
			count: 0
		}
	},
	methods: {
		addMessages() {
			this.messages = [
				{severity: 'info', content: 'Dynamic Info Message'},
				{severity: 'success', content: 'Dynamic Success Message'},
				{severity: 'warn', content: 'Dynamic Warning Message'}
			]
		},
		removeMessages() {
			this.messages = null;
		}
	}
}
</CodeHighlight>

<CodeHighlight lang="css">
button.p-button {
	margin-right: .5em;
}

.p-inputtext {
	margin-right: .25em;
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>