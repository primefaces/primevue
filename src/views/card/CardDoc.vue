<template>
	<AppDoc name="CardDemo" :sources="sources" github="card/CardDemo.vue">
        <h5>Import via Module</h5>
<pre v-code.script><code>
import Card from 'primevue/card';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/card/card.min.js"&gt;&lt;/script&gt;

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
                    tabName: 'Options API Source',
					content: `
<template>
    <div>
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
                <img src="https://www.primefaces.org/wp-content/uploads/2020/02/primefacesorg-primevue-2020.png" style="height: 15rem" />
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
    </div>
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
                    tabName: 'Composition API Source',
					content: `
<template>
    <div>
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
                <img src="https://www.primefaces.org/wp-content/uploads/2020/02/primefacesorg-primevue-2020.png" style="height: 15rem" />
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
    </div>
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
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/card/card.min.js"><\\/script>`,
                    content: `<div id="app">
        <p-card style="width: 25rem; margin-bottom: 2em">
            <template #title>
                Simple Card
            </template>
            <template #content>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
            </template>
        </p-card>

        <p-card style="width: 25em">
            <template #header>
                <img alt="user header" src="https://www.primefaces.org/wp-content/uploads/2020/02/primefacesorg-primevue-2020.png" style="height: 15rem">
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
                <p-button icon="pi pi-check" label="Save"></p-button>
                <p-button icon="pi pi-times" label="Cancel" class="p-button-secondary" style="margin-left: .5em"></p-button>
            </template>
        </p-card>
    </div>

    <script type="module">
        const { createApp } = Vue;

        const App = {
            components: {
                "p-card": primevue.card,
                "p-button": primevue.button
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
    <\\/script>`
                }
			}
		}
	}
}
</script>