<template>
	<AppDoc name="CardDemo" :sources="sources">
        <h5>Import</h5>
<pre v-code.script><code>
import Card from 'primevue/card';

</code></pre>

		<h5>Getting Started</h5>
        <p>Card provides <i>header</i>, <i>title</i>, <i>subtitle</i>, <i>content</i> and <i>footer</i> as the named templates to place content.</p>
<pre v-code><code>
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

</code></pre>

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
    </AppDoc>
</template>

<script>
export default {
	data() {
		return {
			sources: {
				'options-api': {
                    tabName: 'Source',
					content: `
<template>
    <Card style="width: 25rem; margin-bottom: 2em">
        <template #title>
            Simple Card
        </template>
        <template #content>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
        </template>
    </Card>

    <Card style="width: 25em">
        <template #header>
            <img src="https://www.primefaces.org/wp-content/uploads/2020/02/primefacesorg-primevue-2020.png" style="height: 10rem" />
        </template>
        <template #title>
            Advanced Card
        </template>
        <template #subtitle>
            Card subtitle
        </template>
        <template #content>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
        </template>
        <template #footer>
            <Button icon="pi pi-check" label="Save" />
            <Button icon="pi pi-times" label="Cancel" class="p-button-secondary" style="margin-left: .5em" />
        </template>
    </Card>
</template>

<script>
export default {
}
<\\/script>

<style lang="scss" scoped>
p {
    line-height: 1.5;
    margin: 0;
}
</style>`
				},
                'composition-api': {
                    tabName: 'Composition API',
					content: `
<template>
    <Card style="width: 25rem; margin-bottom: 2em">
        <template #title>
            Simple Card
        </template>
        <template #content>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
        </template>
    </Card>

    <Card style="width: 25em">
        <template #header>
            <img src="https://www.primefaces.org/wp-content/uploads/2020/02/primefacesorg-primevue-2020.png" style="height: 10rem" />
        </template>
        <template #title>
            Advanced Card
        </template>
        <template #subtitle>
            Card subtitle
        </template>
        <template #content>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
        </template>
        <template #footer>
            <Button icon="pi pi-check" label="Save" />
            <Button icon="pi pi-times" label="Cancel" class="p-button-secondary" style="margin-left: .5em" />
        </template>
    </Card>
</template>

<script>
export default {
}
<\\/script>

<style lang="scss" scoped>
p {
    line-height: 1.5;
    margin: 0;
}
</style>`
				}
			}
		}
	}
}
</script>