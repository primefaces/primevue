<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import Spinner from 'primevue/spinner';
</CodeHighlight>

				<h3>Getting Started</h3>
				<p>Two-way value binding is defined using standard v-model directive.</p>
<CodeHighlight>
&lt;Spinner v-model=&quot;value&quot; /&gt;
</CodeHighlight>

				<h3>Min-Max</h3>
				<p>Boundaries are specified with <i>min</i> and <i>max</i> attributes.</p>
<CodeHighlight>
&lt;Spinner v-model=&quot;value&quot; :min=&quot;0&quot; :max=&quot;100&quot; /&gt;
</CodeHighlight>

				<h3>Step</h3>
				<p>Step factor is 1 by default and can be customized with <i>step</i> option.</p>
<CodeHighlight>
&lt;Spinner v-model=&quot;value&quot; :step=&quot;0.25&quot; /&gt;
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
							<td>value</td>
							<td>string</td>
							<td>null</td>
							<td>Value of the component.</td>
						</tr>
						<tr>
							<td>step</td>
							<td>number</td>
							<td>1</td>
							<td>Step factor to increment/decrement the value.</td>
						</tr>
						<tr>
							<td>min</td>
							<td>number</td>
							<td>null</td>
							<td>Mininum boundary value.</td>
						</tr>
						<tr>
							<td>max</td>
							<td>number</td>
							<td>null</td>
							<td>Maximum boundary value.</td>
						</tr>
						<tr>
							<td>disabled</td>
							<td>boolean</td>
							<td>false</td>
							<td>When present, it specifies that the element should be disabled.</td>
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
							<td>p-spinner</td>
							<td>Container element</td>
						</tr>
						<tr>
							<td>p-spinner-up</td>
							<td>Up icon.</td>
						</tr>
						<tr>
							<td>p-spinner-down</td>
							<td>Down icon.</td>
						</tr>
						<tr>
							<td>p-spinner-input</td>
							<td>Input element</td>
						</tr>
						</tbody>
					</table>
				</div>

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/spinner" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;template&gt;
	&lt;div&gt;
		&lt;div class=&quot;content-section introduction&quot;&gt;
			&lt;div class=&quot;feature-intro&quot;&gt;
				&lt;h1&gt;Spinner&lt;/h1&gt;
				&lt;p&gt;Spinner is an input component to provide a numerical input.&lt;/p&gt;
			&lt;/div&gt;
		&lt;/div&gt;

		&lt;div class=&quot;content-section implementation&quot;&gt;
			&lt;h3 class=&quot;first&quot;&gt;Basic&lt;/h3&gt;
			&lt;Spinner v-model=&quot;value1&quot; /&gt;

			&lt;h3&gt;Min/Max&lt;/h3&gt;
			&lt;Spinner v-model=&quot;value2&quot; :min=&quot;0&quot; :max=&quot;100&quot; /&gt;

			&lt;h3&gt;Step&lt;/h3&gt;
			&lt;Spinner v-model=&quot;value3&quot; :step=&quot;0.25&quot; /&gt;

			&lt;h3&gt;Disabled&lt;/h3&gt;
			&lt;Spinner v-model=&quot;value4&quot; :disabled=&quot;true&quot; /&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/template&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
	data() {
		return {
			value1: null,
			value2: null,
			value3: null,
			value4: null
		}
	}
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>