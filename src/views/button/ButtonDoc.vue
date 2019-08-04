<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import Button from 'primevue/button';
</CodeHighlight>

				<h3>Getting Started</h3>
				<p>Button is created using the Button element.</p>
<CodeHighlight>
&lt;Button /&gt;
</CodeHighlight>

				<h3>Label</h3>
				<p>Text of the button is defined using the <i>label</i> property.</p>
<CodeHighlight>
&lt;Button label="Click" /&gt;
</CodeHighlight>
				<h3>Icons</h3>
				<p>Icon on a button is specified with <i>icon</i> property and position is configured using <i>iconPos</i> attribute. Default
					icon position is "left" and alternative is "right". To display only an icon, leave the label as undefined.</p>
<CodeHighlight>
&lt;Button label="Click" icon="pi pi-check" iconPos="right" /&gt;
</CodeHighlight>

				<h3>Events</h3>
				<p>Events are defined with the standard notation.</p>
<CodeHighlight>
&lt;Button label="Click" @click="handleClick($event)"/&gt;
</CodeHighlight>

				<h3>Severity</h3>
				<p>Different color options are available as severity levels.</p>

				<ul>
					<li>.p-button-secondary</li>
					<li>.p-button-success</li>
					<li>.p-button-info</li>
					<li>.p-button-warning</li>
					<li>.p-button-danger</li>
				</ul>

<CodeHighlight>
&lt;Button label="Primary" /&gt;
&lt;Button label="Secondary" class="p-button-secondary" /&gt;
&lt;Button label="Success" class="p-button-success" /&gt;
&lt;Button label="Info" class="p-button-info" /&gt;
&lt;Button label="Warning" class="p-button-warning" /&gt;
&lt;Button label="Danger" class="p-button-danger" /&gt;
</CodeHighlight>

				<h3>Raised and Rounded Buttons</h3>
				<p>A button can be raised by having "p-button-raised" style class and similarly borders can be made rounded using "p-button-rounded" class.</p>
<CodeHighlight>
&lt;Button label="Primary" class="p-button-raised p-button-rounded" /&gt;
</CodeHighlight>

				<h3>Properties</h3>
                <p>Any valid attribute such as style and class are passed to the underlying input element. Following are the additional properties to configure the component.</p>
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
                                <td>label</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Text of the button.</td>
                            </tr>
                            <tr>
                                <td>icon</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Name of the icon.</td>
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
							<td>p-button</td>
							<td>Button element</td>
						</tr>
						<tr>
							<td>p-button-icon</td>
							<td>Icon element</td>
						</tr>
						<tr>
							<td>p-button-text</td>
							<td>Label element of the button</td>
						</tr>
						</tbody>
					</table>
				</div>

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/button" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;h3&gt;Basic&lt;/h3&gt;
&lt;Button label="Click" /&gt;
&lt;Button label="Click" icon="pi pi-check" /&gt;
&lt;Button label="Click" icon="pi pi-check" iconPos="right" /&gt;
&lt;Button icon="pi pi-check" /&gt;
&lt;Button label="Click" disabled="disabled" /&gt;

&lt;h3&gt;Severities&lt;/h3&gt;
&lt;Button label="Primary" /&gt;
&lt;Button label="Secondary" class="p-button-secondary" /&gt;
&lt;Button label="Success" class="p-button-success" /&gt;
&lt;Button label="Info" class="p-button-info" /&gt;
&lt;Button label="Warning" class="p-button-warning" /&gt;
&lt;Button label="Danger" class="p-button-danger" /&gt;

&lt;h3&gt;Raised Buttons&lt;/h3&gt;
&lt;Button label="Primary" class="p-button-raised" /&gt;
&lt;Button label="Secondary" class="p-button-raised p-button-secondary" /&gt;
&lt;Button label="Success" class="p-button-raised p-button-success" /&gt;
&lt;Button label="Info" class="p-button-raised p-button-info" /&gt;
&lt;Button label="Warning" class="p-button-raised p-button-warning" /&gt;
&lt;Button label="Danger" class="p-button-raised p-button-danger" /&gt;

&lt;h3&gt;Rounded Buttons&lt;/h3&gt;
&lt;Button label="Primary" class="p-button-rounded" /&gt;
&lt;Button label="Secondary" class="p-button-rounded p-button-secondary" /&gt;
&lt;Button label="Success" class="p-button-rounded p-button-success" /&gt;
&lt;Button label="Info" class="p-button-rounded p-button-info" /&gt;
&lt;Button label="Warning" class="p-button-rounded p-button-warning" /&gt;
&lt;Button label="Danger" class="p-button-rounded p-button-danger" /&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="css">
button {
	margin-right: .5em;
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>