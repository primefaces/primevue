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
&lt;Button label=&quot;Click&quot; /&gt;
</CodeHighlight>
				<h3>Icons</h3>
				<p>Icon on a button is specified with <i>icon</i> property and position is configured using <i>iconPos</i> attribute. Default
					icon position is "left" and alternative is "right". To display only an icon, leave label as undefined.</p>
<CodeHighlight>
&lt;Button label=&quot;Click&quot; icon=&quot;pi pi-check&quot; iconPos=&quot;right&quot; /&gt;
</CodeHighlight>

				<h3>Events</h3>
				<p>Events are defined with the standard notation.</p>
<CodeHighlight>
&lt;Button label=&quot;Click&quot; @click=&quot;handleClick($event)&quot;/&gt;
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
&lt;Button label=&quot;Primary&quot; /&gt;
&lt;Button label=&quot;Secondary&quot; class=&quot;p-button-secondary&quot; /&gt;
&lt;Button label=&quot;Success&quot; class=&quot;p-button-success&quot; /&gt;
&lt;Button label=&quot;Info&quot; class=&quot;p-button-info&quot; /&gt;
&lt;Button label=&quot;Warning&quot; class=&quot;p-button-warning&quot; /&gt;
&lt;Button label=&quot;Danger&quot; class=&quot;p-button-danger&quot; /&gt;
</CodeHighlight>

				<h3>Raised and Rounded Buttons</h3>
				<p>A button can be raised by having "p-button-raised" style class and similarly borders can be made rounded using "p-button-rounded" class.</p>
<CodeHighlight>
&lt;Button label=&quot;Primary&quot; class=&quot;p-button-raised p-button-rounded&quot; /&gt;
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
&lt;template&gt;
	&lt;div&gt;
		&lt;div class=&quot;content-section introduction&quot;&gt;
			&lt;div class=&quot;feature-intro&quot;&gt;
				&lt;h1&gt;Button&lt;/h1&gt;
				&lt;p&gt;Button is an extension to standard button element with icons and theming.&lt;/p&gt;
			&lt;/div&gt;
		&lt;/div&gt;

		&lt;div class=&quot;content-section implementation&quot;&gt;
			&lt;h3 class=&quot;first&quot;&gt;Basic&lt;/h3&gt;
			&lt;Button label=&quot;Click&quot; /&gt;
			&lt;Button label=&quot;Click&quot; icon=&quot;pi pi-check&quot; /&gt;
			&lt;Button label=&quot;Click&quot; icon=&quot;pi pi-check&quot; iconPos=&quot;right&quot; /&gt;
			&lt;Button icon=&quot;pi pi-check&quot; /&gt;
			&lt;Button label=&quot;Click&quot; disabled=&quot;disabled&quot; /&gt;

			&lt;h3&gt;Severities&lt;/h3&gt;
			&lt;Button label=&quot;Primary&quot; /&gt;
			&lt;Button label=&quot;Secondary&quot; class=&quot;p-button-secondary&quot; /&gt;
			&lt;Button label=&quot;Success&quot; class=&quot;p-button-success&quot; /&gt;
			&lt;Button label=&quot;Info&quot; class=&quot;p-button-info&quot; /&gt;
			&lt;Button label=&quot;Warning&quot; class=&quot;p-button-warning&quot; /&gt;
			&lt;Button label=&quot;Danger&quot; class=&quot;p-button-danger&quot; /&gt;

			&lt;h3&gt;Raised Buttons&lt;/h3&gt;
			&lt;Button label=&quot;Primary&quot; class=&quot;p-button-raised&quot; /&gt;
			&lt;Button label=&quot;Secondary&quot; class=&quot;p-button-raised p-button-secondary&quot; /&gt;
			&lt;Button label=&quot;Success&quot; class=&quot;p-button-raised p-button-success&quot; /&gt;
			&lt;Button label=&quot;Info&quot; class=&quot;p-button-raised p-button-info&quot; /&gt;
			&lt;Button label=&quot;Warning&quot; class=&quot;p-button-raised p-button-warning&quot; /&gt;
			&lt;Button label=&quot;Danger&quot; class=&quot;p-button-raised p-button-danger&quot; /&gt;

			&lt;h3&gt;Rounded Buttons&lt;/h3&gt;
			&lt;Button label=&quot;Primary&quot; class=&quot;p-button-rounded&quot; /&gt;
			&lt;Button label=&quot;Secondary&quot; class=&quot;p-button-rounded p-button-secondary&quot; /&gt;
			&lt;Button label=&quot;Success&quot; class=&quot;p-button-rounded p-button-success&quot; /&gt;
			&lt;Button label=&quot;Info&quot; class=&quot;p-button-rounded p-button-info&quot; /&gt;
			&lt;Button label=&quot;Warning&quot; class=&quot;p-button-rounded p-button-warning&quot; /&gt;
			&lt;Button label=&quot;Danger&quot; class=&quot;p-button-rounded p-button-danger&quot; /&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/template&gt;
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