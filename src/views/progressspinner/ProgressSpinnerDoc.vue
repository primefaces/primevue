<template>
	<AppDoc name="ProgressSpinnerDemo" :sources="sources" github="progressspinner/ProgressSpinnerDemo.vue">
        <h5>Import via Module</h5>
<pre v-code.script><code>
import ProgressSpinner from 'primevue/progressspinner';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/progressspinner/progressspinner.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>ProgressSpinner is defined using ProgressSpinner element.</p>
<pre v-code><code><template v-pre>
&lt;ProgressSpinner /&gt;
</template>
</code></pre>

        <h5>Colors</h5>
        <p>Colors of the spinner can be changed by overriding the keyframes animation.</p>
<pre v-code.css><code>
@keyframes p-progress-spinner-color {
    100%,
    0% {
        stroke: #d62d20;
    }
    40% {
        stroke: #0057e7;
    }
    66% {
        stroke: #008744;
    }
    80%,
    90% {
        stroke: #ffa700;
    }
}

</code></pre>

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
                        <td>strokeWidth</td>
                        <td>string</td>
                        <td>2</td>
                        <td>Width of the circle stroke.</td>
                    </tr>
                    <tr>
                        <td>fill</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Color for the background of the circle.</td>
                    </tr>
                    <tr>
                        <td>animationDuration</td>
                        <td>string</td>
                        <td>2s</td>
                        <td>Duration of the rotate animation.</td>
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
                        <td>p-progress-spinner</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-progress-circle</td>
                        <td>SVG element.</td>
                    </tr>
                    <tr>
                        <td>p-progress-path</td>
                        <td>Circle element.</td>
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
        <h5>Basic</h5>
        <ProgressSpinner />

        <h5>Custom</h5>
        <ProgressSpinner style="width:50px;height:50px" strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s"/>
    </div>
</template>

<script>
export default {
}
<\\/script>
`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <h5>Basic</h5>
        <ProgressSpinner />

        <h5>Custom</h5>
        <ProgressSpinner style="width:50px;height:50px" strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s"/>
    </div>
</template>

<script>
export default {
}
<\\/script>`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/progressspinner/progressspinner.min.js"><\\/script>`,
                    content: `<div id="app">
            <h5>Basic</h5>
            <p-progressspinner></p-progressspinner>

            <h5>Custom</h5>
            <p-progressspinner style="width:50px;height:50px" stroke-width="8" fill="var(--surface-ground)" animation-duration=".5s"></p-progressspinner>
        </div>

        <script type="module">
        const { createApp } = Vue;

        const App = {
            components: {
                "p-progressspinner": primevue.progressspinner
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