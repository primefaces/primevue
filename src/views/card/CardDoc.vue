<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import Card from 'primevue/card';
</CodeHighlight>

				<h3>Getting Started</h3>
				<p>Card is used as a container.</p>
<CodeHighlight>
&lt;Card&gt;
	Content
&lt;/Card&gt;
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
							<td>p-card</td>
							<td>Container element.</td>
						</tr>
						<tr>
							<td>p-card-title</td>
							<td>Title element.</td>
						</tr>
						<tr>
							<td>p-card-subtitle</td>
							<td>Subtitle element.</td>
						</tr>
						<tr>
							<td>p-card-content</td>
							<td>Content of the card.</td>
						</tr>
						<tr>
							<td>p-card-footer</td>
							<td>Footer of the card.</td>
						</tr>
						</tbody>
					</table>
				</div>

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/card" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;template&gt;
	&lt;div&gt;
		&lt;div class=&quot;content-section introduction&quot;&gt;
			&lt;div class=&quot;feature-intro&quot;&gt;
				&lt;h1&gt;Card&lt;/h1&gt;
				&lt;p&gt;Card is a flexible container component.&lt;/p&gt;
			&lt;/div&gt;
		&lt;/div&gt;

		&lt;div class=&quot;content-section implementation&quot;&gt;
			&lt;Card style=&quot;width: 25em; margin-bottom: 2em&quot;&gt;
				&lt;template slot=&quot;title&quot;&gt;
					Simple Card
				&lt;/template&gt;
				&lt;template slot=&quot;content&quot;&gt;
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
					quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
				&lt;/template&gt;
			&lt;/Card&gt;

			&lt;Card style=&quot;width: 25em&quot;&gt;
				&lt;template slot=&quot;header&quot;&gt;
					&lt;img alt=&quot;user header&quot; src=&quot;demo/images/usercard.png&quot;&gt;
				&lt;/template&gt;
				&lt;template slot=&quot;title&quot;&gt;
					Advanced Card
				&lt;/template&gt;
				&lt;template slot=&quot;content&quot;&gt;
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
					quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
				&lt;/template&gt;
				&lt;template slot=&quot;footer&quot;&gt;
					&lt;Button icon=&quot;pi pi-check&quot; label=&quot;Save&quot; class=&quot;p-button-raised&quot; /&gt;
					&lt;Button icon=&quot;pi pi-times&quot; label=&quot;Cancel&quot; class=&quot;p-button-raised p-button-secondary&quot; style=&quot;margin-left: .5em&quot; /&gt;
				&lt;/template&gt;
			&lt;/Card&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/template&gt;
</template>
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>