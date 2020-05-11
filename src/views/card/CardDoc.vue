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

                <h3>Templates</h3>
                <p>Card provides <i>header</i>, <i>title</i>, <i>content</i> and <i>footer</i> as the named templates to place content.</p>
<CodeHighlight>
&lt;Card&gt;
    &lt;template slot="header"&gt;
        &lt;img alt="user header" src="demo/images/usercard.png"&gt;
    &lt;/template&gt;
    &lt;template slot="title"&gt;
        Advanced Card
    &lt;/template&gt;
    &lt;template slot="content"&gt;
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
    &lt;/template&gt;
    &lt;template slot="footer"&gt;
        &lt;Button icon="pi pi-check" label="Save" class="p-button-raised" /&gt;
        &lt;Button icon="pi pi-times" label="Cancel" class="p-button-raised p-button-secondary" style="margin-left: .5em" /&gt;
    &lt;/template&gt;
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
&lt;Card style="width: 25em; margin-bottom: 2em"&gt;
    &lt;template slot="title"&gt;
        Simple Card
    &lt;/template&gt;
    &lt;template slot="content"&gt;
        &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!&lt;/p&gt;
    &lt;/template&gt;
&lt;/Card&gt;

&lt;Card style="width: 25em"&gt;
    &lt;template slot="header"&gt;
        &lt;img alt="user header" src="demo/images/usercard.png"&gt;
    &lt;/template&gt;
    &lt;template slot="title"&gt;
        Advanced Card
    &lt;/template&gt;
    &lt;template slot="content"&gt;
        &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!&lt;/p&gt;
    &lt;/template&gt;
    &lt;template slot="footer"&gt;
        &lt;Button icon="pi pi-check" label="Save" class="p-button-raised" /&gt;
        &lt;Button icon="pi pi-times" label="Cancel" class="p-button-raised p-button-secondary" style="margin-left: .5em" /&gt;
    &lt;/template&gt;
&lt;/Card&gt;
</template>
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>