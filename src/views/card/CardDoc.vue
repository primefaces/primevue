<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<CodeHighlight lang="javascript">
import Card from 'primevue/card';
</CodeHighlight>

				<h5>Getting Started</h5>
				<p>Card is used as a container.</p>
<CodeHighlight>
&lt;Card&gt;
	Content
&lt;/Card&gt;
</CodeHighlight>

                <h5>Templates</h5>
                <p>Card provides <i>header</i>, <i>title</i>, <i>content</i> and <i>footer</i> as the named templates to place content.</p>
<CodeHighlight>
&lt;Card&gt;
    &lt;template #header&gt;
        &lt;img alt="user header" src="demo/images/usercard.png"&gt;
    &lt;/template&gt;
    &lt;template #title&gt;
        Advanced Card
    &lt;/template&gt;
    &lt;template #content&gt;
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
    &lt;/template&gt;
    &lt;template #footer&gt;
        &lt;Button icon="pi pi-check" label="Save" /&gt;
        &lt;Button icon="pi pi-times" label="Cancel" class="p-button-secondary" style="margin-left: .5em" /&gt;
    &lt;/template&gt;
&lt;/Card&gt;
</CodeHighlight>

				<h5>Slots</h5>
				<div class="doc-tablewrapper">
					<table class="doc-table">
						<thead>
							<tr>
								<th>Name</th>
								<th>Parameters</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>header</td>
								<td>-</td>
							</tr>
							<tr>
								<td>title</td>
								<td>-</td>
							</tr>
							<tr>
								<td>subtitle</td>
								<td>-</td>
							</tr>
							<tr>
								<td>content</td>
								<td>-</td>
							</tr>
							<tr>
								<td>footer</td>
								<td>-</td>
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

				<h5>Dependencies</h5>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/2.x/src/views/card" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;Card style="width: 25rem; margin-bottom: 2em"&gt;
    &lt;template #title&gt;
        Simple Card
    &lt;/template&gt;
    &lt;template #content&gt;
        &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!&lt;/p&gt;
    &lt;/template&gt;
&lt;/Card&gt;

&lt;Card style="width: 25em"&gt;
    &lt;template #header&gt;
        &lt;img alt="user header" src="demo/images/usercard.png"&gt;
    &lt;/template&gt;
    &lt;template #title&gt;
        Advanced Card
    &lt;/template&gt;
    &lt;template #subtitle&gt;
        Card subtitle
    &lt;/template&gt;
    &lt;template #content&gt;
        &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!&lt;/p&gt;
    &lt;/template&gt;
    &lt;template #footer&gt;
        &lt;Button icon="pi pi-check" label="Save" /&gt;
        &lt;Button icon="pi pi-times" label="Cancel" class="p-button-secondary" style="margin-left: .5em" /&gt;
    &lt;/template&gt;
&lt;/Card&gt;
</template>
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>