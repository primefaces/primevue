<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<CodeHighlight lang="javascript">
import ToggleButton from 'primevue/togglebutton';
</CodeHighlight>

				<h5>Getting Started</h5>
				<p>Two-way binding to a boolean property is defined using the standard v-model directive.</p>
<CodeHighlight>
&lt;ToggleButton v-model="checked" /&gt;
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

				<h5>Labels and Icons</h5>
				<p>Icons and Labels can be customized using <i>onLabel</i>, <i>offLabel</i>, <i>onIcon</i> and <i>offIcon</i> properties.</p>
<CodeHighlight>
&lt;ToggleButton v-model="checked" onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" /&gt;
</CodeHighlight>

				<h5>Properties</h5>
                <p>Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.</p>
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
                                <td>modelValue</td>
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
                                <td>iconPos</td>
                                <td>string</td>
                                <td>left</td>
                                <td>Position of the icon, valid values are "left" and "right".</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h5>Events</h5>
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
						</tbody>
					</table>
				</div>

				<h5>Styling</h5>
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
                                <td>p-button-icon</td>
                                <td>Icon element.</td>
                            </tr>
                            <tr>
                                <td>p-button-text</td>
                                <td>Label element.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h5>Dependencies</h5>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/togglebutton" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;h3&gt;Basic&lt;/h3&gt;
&lt;ToggleButton v-model="checked1" onIcon="pi pi-check" offIcon="pi pi-times" /&gt;

&lt;h3&gt;Customized&lt;/h3&gt;
&lt;ToggleButton v-model="checked2" onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" style="width: 10em" /&gt;
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