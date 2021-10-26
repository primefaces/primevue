<template>
	<AppDoc name="TriStateCheckboxDemo" :sources="sources" github="tristatecheckbox/TriStateCheckboxDemo.vue">
		<h5>Import via Module</h5>
<pre v-code.script><code>
import TriStateCheckbox from 'primevue/tristatecheckbox';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/tristatecheckbox/tristatecheckbox.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>A model can be bound using the standard v-model directive.</p>
<pre v-code><code>
&lt;TriStateCheckbox v-model="value" /&gt;

</code></pre>

		<h5>Properties</h5>
        <p>Any property such as name and autofocus are passed to the underlying input element. Following is the additional property to configure the component.</p>
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
                        <td>boolean</td>
                        <td>null</td>
                        <td>Value of the component.</td>
                    </tr>
                    <tr>
                        <td>style</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Style class of the component.</td>
                    </tr>
                    <tr>
                        <td>class</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Inline style of the component.</td>
                    </tr>
				</tbody>
			</table>
		</div>

		<h5>Events</h5>
        <p>Any valid event such as focus and blur.</p>

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
                        <td>p-chkbox</td>
                        <td>Container element</td>
                    </tr>
                    <tr>
                        <td>p-tristatechkbox</td>
                        <td>Container element</td>
                    </tr>
                    <tr>
                        <td>p-chkbox-box</td>
                        <td>Container of icon.</td>
                    </tr>
                    <tr>
                        <td>p-chkbox-icon</td>
                        <td>Icon element.</td>
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
        <div class="p-field-checkbox p-m-0">
            <TriStateCheckbox v-model="value" />
            <label>{{value == null ? 'null' : value}}</label>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null
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
        <div class="p-field-checkbox p-m-0">
            <TriStateCheckbox v-model="value" />
            <label>{{value == null ? 'null' : value}}</label>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const value = ref(null);

		return { value }
    }
}
<\\/script>
`
				},
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/tristatecheckbox/tristatecheckbox.min.js"><\\/script>`,
					content: `<div id="app">
            <div class="p-field-checkbox p-m-0">
                <p-tristatecheckbox v-model="value"></p-tristatecheckbox>
                <label>{{value == null ? 'null' : value}}</label>
            </div>
        </div>

        <script type="module">
        const { createApp, ref } = Vue;

        const App = {
            setup() {
                const value = ref(null);

                return { value }
            },
            components: {
                "p-tristatecheckbox": primevue.tristatecheckbox
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