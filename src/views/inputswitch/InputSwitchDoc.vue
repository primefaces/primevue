<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import InputSwitch from 'primevue/inputswitch';
</CodeHighlight>

				<h3>Getting Started</h3>
				<p>Two-way binding to a boolean property is defined using the standard v-model directive.</p>
<CodeHighlight>
&lt;InputSwitch v-model=&quot;checked&quot; /&gt;
</CodeHighlight>

<CodeHighlight lang="js">
export default {
	data() {
		return {
			checked: false
		}
	}
}
</CodeHighlight>

				<p>As model is two-way binding enabled, setting the bound value as true displays the state as checked by default.</p>

<CodeHighlight lang="js">
export default {
	data() {
		return {
			checked: true
		}
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
                                <td>value</td>
                                <td>boolean</td>
                                <td>null</td>
                                <td>Specifies whether a inputswitch should be checked or not.</td>
                            </tr>
                            <tr>
                                <td>inputId</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Identifier of the input element.</td>
                            </tr>
                            <tr>
                                <td>name</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Name of the input element.</td>
                            </tr>
                            <tr>
                                <td>disabled</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When present, it specifies that the component should be disabled.</td>
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
							<td>event: Browser event.</td>
							<td>Callback to invoke on value change.</td>
						</tr>
						<tr>
							<td>click</td>
							<td>event: Browser event.</td>
							<td>Callback to invoke on click.</td>
						</tr>
						<tr>
							<td>input</td>
							<td>event: Checked state as a boolean.</td>
							<td>Callback to invoke on value change.</td>
						</tr>
						<tr>
							<td>focus</td>
							<td>event: Browser event.</td>
							<td>Callback to invoke when the element receives focus.</td>
						</tr>
						<tr>
							<td>blur</td>
							<td>event: Browser event.</td>
							<td>Callback to invoke when the element loses focus.</td>
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
                                <td>p-inputswitch</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-inputswitch-checked</td>
                                <td>Container element in active state.</td>
                            </tr>
                            <tr>
                                <td>p-inputswitch-slider</td>
                                <td>Slider element behind the handle.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/inputswitch" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;template&gt;
	&lt;div&gt;
		&lt;div class=&quot;content-section introduction&quot;&gt;
			&lt;div class=&quot;feature-intro&quot;&gt;
				&lt;h1&gt;InputSwitch&lt;/h1&gt;
				&lt;p&gt;InputSwitch is used to select a boolean value.&lt;/p&gt;
			&lt;/div&gt;
		&lt;/div&gt;

		&lt;div class=&quot;content-section implementation&quot;&gt;
			&lt;h3 class=&quot;first&quot;&gt;Basic&lt;/h3&gt;
			&lt;InputSwitch v-model=&quot;checked1&quot; /&gt;
			&lt;p style=&quot;font-weight: bold&quot;&gt;{{checked1}}&lt;/p&gt;

			&lt;h3&gt;Preselection&lt;/h3&gt;
			&lt;InputSwitch v-model=&quot;checked2&quot; /&gt;
			&lt;p style=&quot;font-weight: bold&quot;&gt;{{checked2}}&lt;/p&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/template&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
	data() {
		return {
			checked1: false,
			checked2: true
		}
	}
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>