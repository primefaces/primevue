<template>
    <AppDoc name="ToggleButtonDemo" :sources="sources" github="togglebutton/ToggleButtonDemo.vue" >
        <h5>Import via Module</h5>
<pre v-code.script><code>
import ToggleButton from 'primevue/togglebutton';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/togglebutton/togglebutton.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>Two-way binding to a boolean property is defined using the standard v-model directive.</p>
<pre v-code><code>
&lt;ToggleButton v-model="checked" /&gt;

</code></pre>

		<p>As model is two-way binding enabled, setting the bound value as true displays the state as checked.</p>
<pre v-code.script><code>
export default {
	data() {
		return {
			checked: true
		}
	}
}

</code></pre>

		<h5>Labels and Icons</h5>
		<p>Icons and Labels can be customized using <i>onLabel</i>, <i>offLabel</i>, <i>onIcon</i> and <i>offIcon</i> properties.</p>
<pre v-code><code>
&lt;ToggleButton v-model="checked" onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" /&gt;

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
                        <td>modelValue</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Value of the component.</td>
                    </tr>
                    <tr>
                        <td>onIcon</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Icon for the on state.</td>
                    </tr>
                    <tr>
                        <td>offIcon</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Icon for the off state.</td>
                    </tr>
                    <tr>
                        <td>onLabel</td>
                        <td>string</td>
                        <td>yes</td>
                        <td>Label for the on state.</td>
                    </tr>
                    <tr>
                        <td>offLabel</td>
                        <td>string</td>
                        <td>no</td>
                        <td>Label for the off state.</td>
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

		<h5>Events</h5>
		<div class="doc-tablewrapper">
			<table class="doc-table">
				<thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                        <th>Description</th>
                    </tr>
				</thead>
				<tbody>
                    <tr>
                        <td>change</td>
                        <td>event: Browser event</td>
                        <td>Callback to invoke on value change.</td>
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
                        <td>p-togglebutton</td>
                        <td>Container element</td>
                    </tr>
                    <tr>
                        <td>p-button-icon</td>
                        <td>Icon element.</td>
                    </tr>
                    <tr>
                        <td>p-button-text</td>
                        <td>Label element.</td>
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
        <ToggleButton v-model="checked1" onIcon="pi pi-check" offIcon="pi pi-times" />

        <h5>Customized</h5>
        <ToggleButton v-model="checked2" onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" style="width: 10em" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked1: false,
            checked2: true
        }
    }
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
        <ToggleButton v-model="checked1" onIcon="pi pi-check" offIcon="pi pi-times" />

        <h5>Customized</h5>
        <ToggleButton v-model="checked2" onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" style="width: 10em" />
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const checked1 = ref(false);
        const checked2 = ref(true);

        return { checked1, checked2 }
    }
}
<\\/script>
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/togglebutton/togglebutton.min.js"><\\/script>`,
                    content: `<div id="app">
            <h5>Basic</h5>
            <p-togglebutton v-model="checked1" on-icon="pi pi-check" off-icon="pi pi-times"></p-togglebutton>

            <h5>Customized</h5>
            <p-togglebutton v-model="checked2" on-label="I confirm" off-label="I reject" on-icon="pi pi-check" off-icon="pi pi-times" style="width: 10em"></p-togglebutton>
        </div>

        <script type="module">
        const { createApp, ref } = Vue;

        const App = {
            setup() {
                const checked1 = ref(false);
                const checked2 = ref(true);

                return { checked1, checked2 }
            },
            components: {
                "p-togglebutton": primevue.togglebutton
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>
`
                }
            }
        }
    }
}
</script>