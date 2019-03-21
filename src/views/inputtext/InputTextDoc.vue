<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import InputText from 'primevue/inputtext';
</CodeHighlight>

				<h3>Getting Started</h3>
				<p>A model can be bound using the standard v-model directive.</p>
<CodeHighlight>
&lt;InputText type=&quot;text&quot; v-model=&quot;value&quot; /&gt;
</CodeHighlight>

				<h3>Float Label</h3>
				<p>A floating label is implemented by wrapping the input and the label inside a container having <i>.p-float-label</i> style class.</p>
<CodeHighlight>
&lt;span class=&quot;p-float-label&quot;&gt;
	&lt;InputText type=&quot;text&quot; v-model=&quot;value&quot; /&gt;
	&lt;label htmlFor=&quot;float-input&quot;&gt;Username&lt;/label&gt;
&lt;/span&gt;
</CodeHighlight>

				<h3>Properties</h3>
				<p>InputText passes any valid attribute to the underlying input element.</p>

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
							<td>p-inputtext</td>
							<td>Input element</td>
						</tr>
						</tbody>
					</table>
				</div>

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/inputtext" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;template&gt;
	&lt;div&gt;
		&lt;div class=&quot;content-section introduction&quot;&gt;
			&lt;div class=&quot;feature-intro&quot;&gt;
				&lt;h1&gt;InputText&lt;/h1&gt;
				&lt;p&gt;InputText renders and input field where the user can enter data.&lt;/p&gt;
			&lt;/div&gt;
		&lt;/div&gt;

		&lt;div class=&quot;content-section implementation&quot;&gt;
			&lt;h3 class=&quot;first&quot;&gt;Basic&lt;/h3&gt;
			&lt;InputText type=&quot;text&quot; v-model=&quot;value1&quot; /&gt;
			&lt;span :style=&quot;{marginLeft: '.5em'}&quot;&gt;{{value1}}&lt;/span&gt;

			&lt;h3&gt;Floating Label&lt;/h3&gt;
			&lt;span class=&quot;p-float-label&quot;&gt;
				&lt;InputText type=&quot;text&quot; v-model=&quot;value2&quot; /&gt;
				&lt;label htmlFor=&quot;float-input&quot;&gt;Username&lt;/label&gt;
			&lt;/span&gt;

			&lt;h3&gt;Disabled&lt;/h3&gt;
			&lt;InputText type=&quot;text&quot; v-model=&quot;value3&quot; disabled /&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/template&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
	data() {
		return {
			value1: '',
			value2: '',
			value3: 'PrimeVue'
		}
	}
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>