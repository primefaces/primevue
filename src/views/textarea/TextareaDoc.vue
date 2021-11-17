<template>
	<AppDoc name="TextareaDemo" :sources="sources" github="textarea/TextareaDemo.vue">
		<h5>Import via Module</h5>
<pre v-code.script><code>
import Textarea from 'primevue/textarea';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/textarea/textarea.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>A model can be bound using the standard v-model directive.</p>
<pre v-code><code>
&lt;Textarea v-model="value" rows="5" cols="30" /&gt;

</code></pre>

		<h5>AutoResize</h5>
		<p>In auto resize mode, textarea grows instead of displaying a scrollbar.</p>
<pre v-code><code>
&lt;Textarea v-model="value" :autoResize="true" rows="5" cols="30" /&gt;

</code></pre>

		<h5>Properties</h5>
		<p>Textarea passes any attribute to the underlying textarea element, additional attributes are the following.</p>
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
                        <td>autoResize</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When present, height of textarea changes as being typed.</td>
                    </tr>
				</tbody>
			</table>
		</div>

        <h5>Events</h5>
        <p>Any valid event such as focus, blur and input are passed to the underlying input element.</p>

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
                        <td>p-inputtextarea</td>
                        <td>Textarea element</td>
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
        <Textarea v-model="value1" rows="5" cols="30" />

        <h5>Auto Resize</h5>
        <Textarea v-model="value2" :autoResize="true" rows="5" cols="30" />

        <h5>Disabled</h5>
        <Textarea v-model="value3" disabled rows="5" cols="30" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: '',
            value2: '',
            value3: ''
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
        <Textarea v-model="value1" rows="5" cols="30" />

        <h5>Auto Resize</h5>
        <Textarea v-model="value2" :autoResize="true" rows="5" cols="30" />

        <h5>Disabled</h5>
        <Textarea v-model="value3" disabled rows="5" cols="30" />
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const value1 = ref('');
        const value2 = ref('');
        const value3 = ref('');

		return { value1, value2, value3 }
    }
}
<\\/script>
`
				},
                'browser-source': {
					tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/textarea/textarea.min.js"><\\/script>`,
					content: `<div id="app">
            <h5>Basic</h5>
            <p-textarea v-model="value1" rows="5" cols="30"></p-textarea>

            <h5>Auto Resize</h5>
            <p-textarea v-model="value2" :auto-resize="true" rows="5" cols="30"></p-textarea>

            <h5>Disabled</h5>
            <p-textarea v-model="value3" disabled rows="5" cols="30"></p-textarea>
        </div>

        <script type="module">
        const { createApp, ref } = Vue;

        const App = {
            setup() {
                const value1 = ref('');
                const value2 = ref('');
                const value3 = ref('');

                return { value1, value2, value3 }
            },
            components: {
                "p-textarea": primevue.textarea
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