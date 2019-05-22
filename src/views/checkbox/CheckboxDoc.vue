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
&lt;Checkbox v-model="checked" :binary="true" /&gt;
</CodeHighlight>

				<h3>Multiple Values</h3>
				<p>Multiple mode is enabled by default, v-model property refers to an array to bind the selected values.</p>
<CodeHighlight>
&lt;Checkbox id="city1" inputId="city1" name="city" value="Chicago" v-model="cities" /&gt;
&lt;Checkbox id="city2" inputId="city2" name="city" value="Los Angeles" v-model="cities" /&gt;
&lt;Checkbox id="city3" inputId="city3" name="city" value="New York" v-model="cities" /&gt;
&lt;Checkbox id="city4" inputId="city4" name="city" value="San Francisco" v-model="cities" /&gt;
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

				<h3>Properties</h3>
                <p>Any valid attribute such as name and autofocus are passed to the underlying input element. Following are the additional properties to configure the component.</p>
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
                                <td>Value of the checkbox.</td>
                            </tr>
                            <tr>
                                <td>binary</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Allows to select a boolean value instead of multiple values.</td>
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
		&lt;div class="content-section introduction"&gt;
			&lt;div class="feature-intro"&gt;
				&lt;h1&gt;Checkbox&lt;/h1&gt;
				&lt;p&gt;Checkbox is an extension to standard checkbox element with theming.&lt;/p&gt;
			&lt;/div&gt;
		&lt;/div&gt;

		&lt;div class="content-section implementation"&gt;
			&lt;h3 class="first"&gt;Basic&lt;/h3&gt;
			&lt;Checkbox id="binary" v-model="checked" :binary="true"/&gt;
			&lt;label for="binary" class="p-checkbox-label" style="font-weight: bold"&gt;{{checked}}&lt;/label&gt;

			&lt;h3&gt;Multiple&lt;/h3&gt;
			&lt;div class="p-grid"&gt;
				&lt;div class="p-col-12"&gt;
					&lt;Checkbox id="city1" name="city" value="Chicago" v-model="cities" /&gt;
					&lt;label for="city1" class="p-checkbox-label"&gt;Chicago&lt;/label&gt;
				&lt;/div&gt;
				&lt;div class="p-col-12"&gt;
					&lt;Checkbox id="city2" name="city" value="Los Angeles" v-model="cities" /&gt;
					&lt;label for="city2" class="p-checkbox-label"&gt;Los Angeles&lt;/label&gt;
				&lt;/div&gt;
				&lt;div class="p-col-12"&gt;
					&lt;Checkbox id="city3" name="city" value="New York" v-model="cities" /&gt;
					&lt;label for="city3" class="p-checkbox-label"&gt;New York&lt;/label&gt;
				&lt;/div&gt;
				&lt;div class="p-col-12"&gt;
					&lt;Checkbox id="city4" name="city" value="San Francisco" v-model="cities" /&gt;
					&lt;label for="city4" class="p-checkbox-label"&gt;San Francisco&lt;/label&gt;
				&lt;/div&gt;
			&lt;/div&gt;
			&lt;p&gt;Selected Cities : &lt;span style="font-weight: bold"&gt;{{cities}}&lt;/span&gt;&lt;/p&gt;

			&lt;h3&gt;Dynamic Values, Preselection, Value Binding and Disabled Option&lt;/h3&gt;
			&lt;div class="p-grid"&gt;
				&lt;div v-for="theme of themes" :key="theme.key" class="p-col-12"&gt;
					&lt;Checkbox :id="theme.key" name="theme" :value="theme" v-model="selectedThemes" :disabled="theme.key === 'U'"/&gt;
					&lt;label :for="theme.key" class="p-checkbox-label"&gt;{{theme.name}}&lt;/label&gt;
				&lt;/div&gt;
			&lt;/div&gt;
			&lt;p&gt;Selected Themes: &lt;span style="font-weight: bold"&gt;{{this.selectedThemes}}&lt;/span&gt;&lt;/p&gt;
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