<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import Toolbar from 'primevue/toolbar';
</CodeHighlight>

				<h3>Getting Started</h3>
				<p>Toolbar is a container component defined using Toolbar element. Left aligned content is placed inside a template with "left" name and similarly "right" for right alignment..</p>
<CodeHighlight>
&lt;Toolbar&gt;
	&lt;template slot=&quot;left&quot;&gt;
		&lt;Button label=&quot;New&quot; icon=&quot;pi pi-plus&quot; style=&quot;margin-right: .25em&quot; /&gt;
		&lt;Button label=&quot;Upload&quot; icon=&quot;pi pi-upload&quot; class=&quot;p-button-success&quot; /&gt;
		&lt;i class=&quot;pi pi-bars p-toolbar-separator&quot; style=&quot;margin-right: .25em&quot; /&gt;
		&lt;Button label=&quot;Save&quot; icon=&quot;pi pi-check&quot; class=&quot;p-button-warning&quot; /&gt;
	&lt;/template&gt;

	&lt;template slot=&quot;right&quot;&gt;
		&lt;Button icon=&quot;pi pi-search&quot; style=&quot;margin-right: .25em&quot; /&gt;
		&lt;Button icon=&quot;pi pi-calendar&quot; class=&quot;p-button-success&quot; style=&quot;margin-right: .25em&quot; /&gt;
		&lt;Button icon=&quot;pi pi-times&quot; class=&quot;p-button-danger&quot; /&gt;
	&lt;/template&gt;
&lt;/Toolbar&gt;
</CodeHighlight>

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
								<td>p-toolbar</td>
								<td>Main container element.</td>
							</tr>
							<tr>
								<td>p-toolbar-group-left</td>
								<td>Left content container.</td>
							</tr>
							<tr>
								<td>p-toolbar-group-right</td>
								<td>Right content container.</td>
							</tr>
						</tbody>
					</table>
				</div>

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/toolbar" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;template&gt;
	&lt;div&gt;
		&lt;div class=&quot;content-section introduction&quot;&gt;
			&lt;div class=&quot;feature-intro&quot;&gt;
				&lt;h1&gt;Toolbar&lt;/h1&gt;
				&lt;p&gt;Toolbar is a grouping component for buttons and other content.&lt;/p&gt;
			&lt;/div&gt;
		&lt;/div&gt;

		&lt;div class=&quot;content-section implementation&quot;&gt;
			&lt;Toolbar&gt;
				&lt;template slot=&quot;left&quot;&gt;
					&lt;Button label=&quot;New&quot; icon=&quot;pi pi-plus&quot; style=&quot;margin-right: .25em&quot; /&gt;
					&lt;Button label=&quot;Upload&quot; icon=&quot;pi pi-upload&quot; class=&quot;p-button-success&quot; /&gt;
					&lt;i class=&quot;pi pi-bars p-toolbar-separator&quot; style=&quot;margin-right: .25em&quot; /&gt;
					&lt;Button label=&quot;Save&quot; icon=&quot;pi pi-check&quot; class=&quot;p-button-warning&quot; /&gt;
				&lt;/template&gt;

				&lt;template slot=&quot;right&quot;&gt;
					&lt;Button icon=&quot;pi pi-search&quot; style=&quot;margin-right: .25em&quot; /&gt;
					&lt;Button icon=&quot;pi pi-calendar&quot; class=&quot;p-button-success&quot; style=&quot;margin-right: .25em&quot; /&gt;
					&lt;Button icon=&quot;pi pi-times&quot; class=&quot;p-button-danger&quot; /&gt;
				&lt;/template&gt;
			&lt;/Toolbar&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/template&gt;
</template>
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>