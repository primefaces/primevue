<template>
	<AppDoc name="InputSwitchDemo" :sources="sources" github="inputswitch/InputSwitchDemo.vue">
		<h5>Import</h5>
<pre v-code.script><code>
import InputSwitch from 'primevue/inputswitch';

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
        <p>Any property such as name and placeholder are passed to the underlying input element. Following are the additional properties to configure the component.</p>
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
                        <td>style</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Style class of the component input field.</td>
                    </tr>
                    <tr>
                        <td>class</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Inline style of the component.</td>
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
				}
			}
		}
	}
}
</script>