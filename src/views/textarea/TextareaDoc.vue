<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import Textarea from 'primevue/textarea';
</CodeHighlight>

				<h3>Getting Started</h3>
				<p>A model can be bound using the standard v-model directive.</p>
<CodeHighlight>
&lt;Textarea v-model=&quot;value&quot; rows=&quot;5&quot; cols=&quot;30&quot; /&gt;
</CodeHighlight>

				<h3>AutoResize</h3>
				<p>In auto resize mode, textarea grows instead of displaying a scrollbar.</p>
<CodeHighlight>
&lt;Textarea v-model=&quot;value&quot; :autoResize=&quot;true&quot; rows=&quot;5&quot; cols=&quot;30&quot; /&gt;
</CodeHighlight>

				<h3>Properties</h3>
				<p>InputTextarea passes any attribute to the underlying textarea element, additional attributes are as follows;</p>
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
							<td>value</td>
							<td>any</td>
							<td>null</td>
							<td>Value of the component.</td>
						</tr>
						<tr>
							<td>autoResize</td>
							<td>boolean</td>
							<td>false</td>
							<td>When present, height of textarea changes as being typed.</td>
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
							<td>input</td>
							<td>event: New value</td>
							<td>Callback to invoke on value change.</td>
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
							<td>p-inputtextarea</td>
							<td>Textarea element</td>
						</tr>
						</tbody>
					</table>
				</div>

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/textarea" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;template&gt;
	&lt;div&gt;
		&lt;div class=&quot;content-section introduction&quot;&gt;
			&lt;div class=&quot;feature-intro&quot;&gt;
				&lt;h1&gt;Textarea&lt;/h1&gt;
				&lt;p&gt;Textarea is a multi-line text input element.&lt;/p&gt;
			&lt;/div&gt;
		&lt;/div&gt;

		&lt;div class=&quot;content-section implementation&quot;&gt;
			&lt;h3 class=&quot;first&quot;&gt;Basic&lt;/h3&gt;
			&lt;Textarea v-model=&quot;value1&quot; rows=&quot;5&quot; cols=&quot;30&quot; /&gt;

			&lt;h3&gt;Auto Resize&lt;/h3&gt;
			&lt;Textarea v-model=&quot;value2&quot; :autoResize=&quot;true&quot; rows=&quot;5&quot; cols=&quot;30&quot; /&gt;

			&lt;h3&gt;Disabled&lt;/h3&gt;
			&lt;Textarea v-model=&quot;value3&quot; disabled rows=&quot;5&quot; cols=&quot;30&quot; /&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/template&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
	data() {
		return {
			value1: 'Welcome to PrimeVue',
			value2: '',
			value3: ''
		}
	}
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>