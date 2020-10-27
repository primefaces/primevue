<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<pre v-code.script>
<code>
import Card from 'primevue/card';

</code></pre>

				<h5>Getting Started</h5>
				<p>Card is used as a container.</p>
<pre v-code>
<code>
&lt;Card&gt;
	Content
&lt;/Card&gt;

</code></pre>

                <h5>Templates</h5>
                <p>Card provides <i>header</i>, <i>title</i>, <i>subtitle</i>, <i>content</i> and <i>footer</i> as the named templates to place content.</p>
<pre v-code>
<code>
&lt;Card&gt;
    &lt;template v-slot:header&gt;
        &lt;img alt="user header" src="demo/images/usercard.png"&gt;
    &lt;/template&gt;
    &lt;template v-slot:title&gt;
        Advanced Card
    &lt;/template&gt;
	&lt;template v-slot:subtitle&gt;
        Card subtitle
    &lt;/template&gt;
    &lt;template v-slot:content&gt;
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
    &lt;/template&gt;
    &lt;template v-slot:footer&gt;
        &lt;Button icon="pi pi-check" label="Save" /&gt;
        &lt;Button icon="pi pi-times" label="Cancel" class="p-button-secondary" style="margin-left: .5em" /&gt;
    &lt;/template&gt;
&lt;/Card&gt;

</code></pre>

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
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/card" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<pre v-code>
<code><template v-pre>
&lt;Card style="width: 25rem; margin-bottom: 2em"&gt;
    &lt;template v-slot:title&gt;
        Simple Card
    &lt;/template&gt;
    &lt;template v-slot:content&gt;
        &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!&lt;/p&gt;
    &lt;/template&gt;
&lt;/Card&gt;

&lt;Card style="width: 25em"&gt;
    &lt;template v-slot:header&gt;
        &lt;img alt="user header" src="demo/images/usercard.png"&gt;
    &lt;/template&gt;
    &lt;template v-slot:title&gt;
        Advanced Card
    &lt;/template&gt;
    &lt;template v-slot:subtitle&gt;
        Card subtitle
    &lt;/template&gt;
    &lt;template v-slot:content&gt;
        &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!&lt;/p&gt;
    &lt;/template&gt;
    &lt;template v-slot:footer&gt;
        &lt;Button icon="pi pi-check" label="Save" /&gt;
        &lt;Button icon="pi pi-times" label="Cancel" class="p-button-secondary" style="margin-left: .5em" /&gt;
    &lt;/template&gt;
&lt;/Card&gt;
</template>
</code></pre>
			</TabPanel>
		</TabView>
	</div>
</template>