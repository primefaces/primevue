<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import ToggleButton from 'primevue/togglebutton';
</CodeHighlight>

				<h3>Getting Started</h3>
				<p>Two-way binding to a boolean property is defined using the standard v-model directive.</p>
<CodeHighlight>
&lt;ToggleButton v-model=&quot;checked&quot; /&gt;
</CodeHighlight>

				<p>As model is two-way binding enabled, setting the bound value as true displays the state as checked.</p>
<CodeHighlight lang="js">
export default {
	data() {
		return {
			checked: true
		}
	}
}
</CodeHighlight>

				<h3>Labels and Icons</h3>
				<p>Icons and Labels can be customized using <i>onLabel</i>, <i>offLabel</i>, <i>onIcon</i> and <i>offIcon</i> properties.</p>
<CodeHighlight>
&lt;ToggleButton v-model=&quot;checked&quot; onLabel=&quot;I confirm&quot; offLabel=&quot;I reject&quot; onIcon=&quot;pi pi-check&quot; offIcon=&quot;pi pi-times&quot; /&gt;
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
                                <td>any</td>
                                <td>null</td>
                                <td>Value of the component.</td>
                            </tr>
                            <tr>
                                <td>onIcon</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Icon for the on state.</td>
                            </tr>
                            <tr>
                                <td>offIcon</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Icon for the off state.</td>
                            </tr>
                            <tr>
                                <td>onLabel</td>
                                <td>string</td>
                                <td>yes</td>
                                <td>Label for the on state.</td>
                            </tr>
                            <tr>
                                <td>offLabel</td>
                                <td>string</td>
                                <td>no</td>
                                <td>Label for the off state.</td>
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
                                <td>iconPos</td>
                                <td>string</td>
                                <td>left</td>
                                <td>Position of the icon, valid values are "left" and "right".</td>
                            </tr>
                            <tr>
                                <td>disabled</td>
                                <td>boolean</td>
                                <td>null</td>
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
                                <td>change</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke on value change.</td>
                            </tr>
                            <tr>
                                <td>input</td>
                                <td>event: Value as the checked state.</td>
                                <td>Callback to invoke on value change.</td>
                            </tr>
                            <tr>
                                <td>click</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke on click.</td>
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
                                <td>p-togglebutton</td>
                                <td>Container element</td>
                            </tr>
                            <tr>
                                <td>p-button-icon-left</td>
                                <td>Icon element.</td>
                            </tr>
                            <tr>
                                <td>p-button-text</td>
                                <td>Label element.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/togglebutton" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;template&gt;
	&lt;div&gt;
		&lt;div class=&quot;content-section introduction&quot;&gt;
			&lt;div class=&quot;feature-intro&quot;&gt;
				&lt;h1&gt;ToggleButton&lt;/h1&gt;
				&lt;p&gt;ToggleButton is used to select a boolean value using a button.&lt;/p&gt;
			&lt;/div&gt;
		&lt;/div&gt;

		&lt;div class=&quot;content-section implementation&quot;&gt;
			&lt;h3 class=&quot;first&quot;&gt;Basic&lt;/h3&gt;
			&lt;ToggleButton v-model=&quot;checked1&quot; onIcon=&quot;pi pi-check&quot; offIcon=&quot;pi pi-times&quot; /&gt;
			&lt;p style=&quot;font-weight: bold&quot;&gt;{{checked1}}&lt;/p&gt;

			&lt;h3&gt;Customized&lt;/h3&gt;
			&lt;ToggleButton v-model=&quot;checked2&quot; onLabel=&quot;I confirm&quot; offLabel=&quot;I reject&quot; onIcon=&quot;pi pi-check&quot; offIcon=&quot;pi pi-times&quot; style=&quot;width: 10em&quot; /&gt;
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