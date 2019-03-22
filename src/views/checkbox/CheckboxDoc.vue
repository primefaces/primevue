<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import Checkbox from 'primevue/checkbox';
</CodeHighlight>

				<h3>Getting Started</h3>
				<p>Checkbox can either be used in multiple selection with other checkboxes or as a single checkbox to provide a boolean value.</p>
<CodeHighlight>
&lt;Checkbox id=&quot;binary&quot; inputId=&quot;binary&quot; v-model=&quot;checked&quot; /&gt;
</CodeHighlight>

				<h3>Multiple Values</h3>
				<p>Multiple mode is enabled by default, v-model property refers to an array to bind the selected values.</p>
<CodeHighlight>
&lt;Checkbox id=&quot;city1&quot; inputId=&quot;city1&quot; name=&quot;city&quot; value=&quot;Chicago&quot; v-model=&quot;cities&quot; /&gt;
&lt;Checkbox id=&quot;city2&quot; inputId=&quot;city2&quot; name=&quot;city&quot; value=&quot;Los Angeles&quot; v-model=&quot;cities&quot; /&gt;
&lt;Checkbox id=&quot;city3&quot; inputId=&quot;city3&quot; name=&quot;city&quot; value=&quot;New York&quot; v-model=&quot;cities&quot; /&gt;
&lt;Checkbox id=&quot;city4&quot; inputId=&quot;city4&quot; name=&quot;city&quot; value=&quot;San Francisco&quot; v-model=&quot;cities&quot; /&gt;
</CodeHighlight>

<CodeHighlight lang="js">
export default {
	data() {
		return {
			cities: []
		}
	}
}
</CodeHighlight>


				<p>As v-model is two-way binding enabled, prepopulating the model array with values is enough to display the related
					checkboxes as checked by default.</p>
<CodeHighlight lang="js">
export default {
	data() {
		return {
			themes: [{name: 'Apollo', key: 'A'}, {name: 'Babylon', key: 'B'}, {name: 'Serenity', key: 'S'}, {name: 'Ultima', key: 'U'}],
			selectedThemes: []
		}
	},
	created() {
		this.selectedThemes = this.themes.slice(1,3);
	}
}
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
							<td>inputId</td>
							<td>string</td>
							<td>null</td>
							<td>Unique identifier of the inner native checkbox.</td>
						</tr>
						<tr>
							<td>value</td>
							<td>any</td>
							<td>null</td>
							<td>Value of the checkbox.</td>
						</tr>
						<tr>
							<td>name</td>
							<td>string</td>
							<td>null</td>
							<td>Name of the checkbox element .</td>
						</tr>
						<tr>
							<td>disabled</td>
							<td>boolean</td>
							<td>false</td>
							<td>When present, it specifies that the element value cannot be altered.</td>
						</tr>
						<tr>
							<td>modelValue</td>
							<td>any</td>
							<td>null</td>
							<td>Value of the checkbox.</td>
						</tr>
						<tr>
							<td>autocomplete</td>
							<td>string</td>
							<td>null</td>
							<td>When specifies, whether or not an the element should have autocomplete enabled.</td>
						</tr>
						<tr>
							<td>autofocus</td>
							<td>boolean</td>
							<td>false</td>
							<td>When present, it specifies that the element should automatically get focus when the page loads.</td>
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
							<td>change</td>
							<td>event: Browser event</td>
							<td>Callback to invoke on value change.</td>
						</tr>
						<tr>
							<td>input</td>
							<td>event: Value of checkbox</td>
							<td>Callback to invoke on click.</td>
						</tr>
						<tr>
							<td>click</td>
							<td>event: Browser event</td>
							<td>Callback to invoke click.</td>
						</tr>
						<tr>
							<td>focus</td>
							<td>event: Browser event</td>
							<td>Callback to invoke on focus.</td>
						</tr>
						<tr>
							<td>blur</td>
							<td>event: Browser event</td>
							<td>Callback to invoke on blur.</td>
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
							<td>p-chkbox</td>
							<td>Container element</td>
						</tr>
						<tr>
							<td>p-chkbox-box</td>
							<td>Container of icon.</td>
						</tr>
						<tr>
							<td>p-chkbox-icon</td>
							<td>Icon element.</td>
						</tr>
						<tr>
							<td>p-chkbox-label</td>
							<td>Label element.</td>
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
				&lt;h1&gt;Checkbox&lt;/h1&gt;
				&lt;p&gt;Checkbox is an extension to standard checkbox element with theming.&lt;/p&gt;
			&lt;/div&gt;
		&lt;/div&gt;

		&lt;div class=&quot;content-section implementation&quot;&gt;
			&lt;h3 class=&quot;first&quot;&gt;Basic&lt;/h3&gt;
			&lt;Checkbox id=&quot;binary&quot; inputId=&quot;binary&quot; v-model=&quot;checked&quot;/&gt;
			&lt;label for=&quot;binary&quot; class=&quot;p-checkbox-label&quot; style=&quot;font-weight: bold&quot;&gt;{{checked}}&lt;/label&gt;

			&lt;h3&gt;Multiple&lt;/h3&gt;
			&lt;div class=&quot;p-grid&quot;&gt;
				&lt;div class=&quot;p-col-12&quot;&gt;
					&lt;Checkbox id=&quot;city1&quot; inputId=&quot;city1&quot; name=&quot;city&quot; value=&quot;Chicago&quot; v-model=&quot;cities&quot; /&gt;
					&lt;label for=&quot;city1&quot; class=&quot;p-checkbox-label&quot;&gt;Chicago&lt;/label&gt;
				&lt;/div&gt;
				&lt;div class=&quot;p-col-12&quot;&gt;
					&lt;Checkbox id=&quot;city2&quot; inputId=&quot;city2&quot; name=&quot;city&quot; value=&quot;Los Angeles&quot; v-model=&quot;cities&quot; /&gt;
					&lt;label for=&quot;city2&quot; class=&quot;p-checkbox-label&quot;&gt;Los Angeles&lt;/label&gt;
				&lt;/div&gt;
				&lt;div class=&quot;p-col-12&quot;&gt;
					&lt;Checkbox id=&quot;city3&quot; inputId=&quot;city3&quot; name=&quot;city&quot; value=&quot;New York&quot; v-model=&quot;cities&quot; /&gt;
					&lt;label for=&quot;city3&quot; class=&quot;p-checkbox-label&quot;&gt;New York&lt;/label&gt;
				&lt;/div&gt;
				&lt;div class=&quot;p-col-12&quot;&gt;
					&lt;Checkbox id=&quot;city4&quot; inputId=&quot;city4&quot; name=&quot;city&quot; value=&quot;San Francisco&quot; v-model=&quot;cities&quot; /&gt;
					&lt;label for=&quot;city4&quot; class=&quot;p-checkbox-label&quot;&gt;San Francisco&lt;/label&gt;
				&lt;/div&gt;
			&lt;/div&gt;
			&lt;p&gt;Selected Cities : &lt;span style=&quot;font-weight: bold&quot;&gt;{{cities}}&lt;/span&gt;&lt;/p&gt;

			&lt;h3&gt;Dynamic Values, Preselection, Value Binding and Disabled Option&lt;/h3&gt;
			&lt;div class=&quot;p-grid&quot;&gt;
				&lt;div v-for=&quot;theme of themes&quot; :key=&quot;theme.key&quot; class=&quot;p-col-12&quot;&gt;
					&lt;Checkbox :inputId=&quot;theme.key&quot; name=&quot;theme&quot; :value=&quot;theme&quot; v-model=&quot;selectedThemes&quot; :disabled=&quot;theme.key === 'U'&quot;/&gt;
					&lt;label :for=&quot;theme.key&quot; class=&quot;p-checkbox-label&quot;&gt;{{theme.name}}&lt;/label&gt;
				&lt;/div&gt;
			&lt;/div&gt;
			&lt;p&gt;Selected Themes: &lt;span style=&quot;font-weight: bold&quot;&gt;{{this.selectedThemes}}&lt;/span&gt;&lt;/p&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/template&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
	data() {
		return {
			checked: false,
			cities: [],
			themes: [{name: 'Apollo', key: 'A'}, {name: 'Babylon', key: 'B'}, {name: 'Serenity', key: 'S'}, {name: 'Ultima', key: 'U'}],
			selectedThemes: []
		}
	},
	created() {
		this.selectedThemes = this.themes.slice(1,3);
	}
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>