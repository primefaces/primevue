<template>
	<AppDoc name="InputSwitchDemo" :sources="sources" github="inputswitch/InputSwitchDemo.vue">
		<h5>Import via Module</h5>
<pre v-code.script><code>
import InputSwitch from 'primevue/inputswitch';

</code></pre>

		<h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/inputswitch/inputswitch.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>Two-way binding to a boolean property is defined using the standard v-model directive.</p>
<pre v-code><code>
&lt;InputSwitch v-model="checked" /&gt;

</code></pre>

<pre v-code.script><code>
export default {
	data() {
		return {
			checked: false
		}
	}
}

</code></pre>

		<p>As model is two-way binding enabled, setting the bound value as true displays the state as checked by default.</p>

<pre v-code.script><code>
export default {
	data() {
		return {
			checked: true
		}
	}
}

</code></pre>

		<h5>Properties</h5>
        <p>Any valid attribute is passed to the root element implicitly, extended properties are as follows;</p>
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
                        <td>Specifies whether a inputswitch should be checked or not.</td>
                    </tr>
					<tr>
                        <td>trueValue</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Value in checked state.</td>
                    </tr>
                    <tr>
                        <td>falseValue</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Value in unchecked state.</td>
                    </tr>
					<tr>
                        <td>inputId</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of the component input field.</td>
                    </tr>
                    <tr>
                        <td>inputClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of the input field.</td>
                    </tr>
                    <tr>
                        <td>inputStyle</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Inline style of the input field.</td>
                    </tr>
					<tr>
                        <td>inputProps</td>
                        <td>object</td>
                        <td>null</td>
                        <td>Uses to pass all properties of the HTMLInputElement to the focusable input element inside the component.</td>
                    </tr>
				</tbody>
			</table>
		</div>

		<h5>Events</h5>
		<p>In addition to the following events, any other valid events such as focus and blur are passed implicitly.</p>
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
						<td>click</td>
						<td>event: Browser event</td>
						<td>Callback to invoke on click.</td>
					</tr>
					<tr>
						<td>change</td>
						<td>event: Browser event</td>
						<td>Callback to invoke on value change.</td>
					</tr>
					<tr>
						<td>input</td>
						<td>value: New value</td>
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
                        <td>p-inputswitch</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-inputswitch-checked</td>
                        <td>Container element in active state.</td>
                    </tr>
                    <tr>
                        <td>p-inputswitch-slider</td>
                        <td>Slider element behind the handle.</td>
                    </tr>
				</tbody>
			</table>
		</div>

		<h5>Accessibility</h5>
		<h6>Screen Reader</h6>
		<p>InputSwitch component uses a hidden native checkbox element with <i>switch</i> role internally that is only visible to screen readers. Value to describe the component can either be provided via <i>label</i> tag combined with <i>id</i> prop or using <i>aria-labelledby</i>, <i>aria-label</i> props.</p>

<pre v-code><code>
&lt;label for="switch1"&gt;Remember Me&lt;/label&gt;
&lt;InputSwitch inputId="switch1" /&gt;

&lt;span id="switch2"&gt;Remember Me&lt;/span&gt;
&lt;InputSwitch aria-labelledby="switch2" /&gt;

&lt;InputSwitch aria-label="Remember Me" /&gt;

</code></pre>

		<h6>Keyboard Support</h6>
		<div class="doc-tablewrapper">
			<table class="doc-table">
				<thead>
					<tr>
						<th>Key</th>
						<th>Function</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><i>tab</i></td>
						<td>Moves focus to the switch.</td>
					</tr>
					<tr>
						<td><i>space</i></td>
						<td>Toggles the checked state.</td>
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
        <InputSwitch v-model="checked1" />

        <h5>Preselection</h5>
        <InputSwitch v-model="checked2" />
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
        <InputSwitch v-model="checked1" />

        <h5>Preselection</h5>
        <InputSwitch v-model="checked2" />
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
					imports: `<script src="https://unpkg.com/primevue@^3/inputswitch/inputswitch.min.js"><\\/script>`,
					content: `<div id="app">
			<h5>Basic</h5>
			<p-inputswitch v-model="checked1"></p-inputswitch>

			<h5>Preselection</h5>
			<p-inputswitch v-model="checked2"></p-inputswitch>
		</div>

		<script>
		const { createApp, ref } = Vue;

		const App = {
			setup() {
				const checked1 = ref(false);
				const checked2 = ref(true);

				return { checked1, checked2 }
			},
			components: {
				"p-inputswitch": primevue.inputswitch
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