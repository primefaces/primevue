<template>
	<AppDoc name="KnobDemo" :sources="sources" github="knob/KnobDemo.vue">
        <h5>Import via Module</h5>
<pre v-code.script><code>
import Knob from 'primevue/knob';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/knob/knob.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>Knob is an input component and used with the standard <i>v-model</i> directive.</p>
<pre v-code><code>
&lt;Knob v-model="value" /&gt;

</code></pre>
<pre v-code.script><code>
data() {
	return {
		value: 0
	}
}

</code></pre>

		<h5>Minimum and Maximum</h5>
		<p>Boundaries are configured with the <i>min</i> and <i>max</i> values whose defaults are 0 and 100 respectively.</p>
<pre v-code><code>
&lt;Knob v-model="value" :min="-50" :max="10" /&gt;

</code></pre>

		<h5>Step</h5>
		<p>Step factor is 1 by default and can be customized with <i>step</i> option.</p>
<pre v-code><code>
&lt;Knob v-model="value" :step="10" /&gt;

</code></pre>

		<h5>Styling</h5>
		<p><i>valueColor</i> defines the value color, <i>rangeColor</i> defines the range background and similarly <i>textColor</i> configures the color of the value text. 
		In addition, <i>strokeWidth</i> is used to determine the width of the stroke of range and value sections.</p>
<pre v-code><code>
&lt;Knob v-model="value" valueColor="SlateGray" rangeColor="MediumTurquoise"  /&gt;

</code></pre>

		<h5>Size</h5>
		<p>Default size of the Knob is 100 pixels for width and height, use the <i>size</i> property to customize it per your requirements.</p>
<pre v-code><code>
&lt;Knob v-model="value" :size="200" /&gt;

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
                        <td>number</td>
                        <td>null</td>
                        <td>Value of the component.</td>
                    </tr>
                    <tr>
                        <td>size</td>
                        <td>number</td>
                        <td>100</td>
                        <td>Size of the component in pixels.</td>
                    </tr>
					<tr>
                        <td>disabled</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When present, it specifies that the component should be disabled.</td>
                    </tr>
					<tr>
                        <td>readonly</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When present, it specifies that the component value cannot be edited.</td>
                    </tr>
					<tr>
                        <td>step</td>
                        <td>number</td>
                        <td>null</td>
                        <td>Step factor to increment/decrement the value.</td>
                    </tr>
					<tr>
                        <td>min</td>
                        <td>number</td>
                        <td>0</td>
                        <td>Mininum boundary value.</td>
                    </tr>
					<tr>
                        <td>max</td>
                        <td>number</td>
                        <td>100</td>
                        <td>Maximum boundary value.</td>
                    </tr>
					<tr>
                        <td>valueColor</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Background of the value.</td>
                    </tr>
					<tr>
                        <td>rangeColor</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Background color of the range.</td>
                    </tr>
					<tr>
                        <td>textColor</td>
                        <td>number</td>
                        <td>null</td>
                        <td>Color of the value text.</td>
                    </tr>
					<tr>
                        <td>strokeWidth</td>
                        <td>number</td>
                        <td>14</td>
                        <td>Width of the knob stroke.</td>
                    </tr>
					<tr>
                        <td>showValue</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Whether the show the value inside the knob.</td>
                    </tr>
					<tr>
                        <td>valueTemplate</td>
                        <td>string</td>
                        <td>{value}</td>
                        <td>Template string of the value.</td>
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
                        <td>value: New value </td>
                        <td>Callback to invoke when the value changes.</td>
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
                        <td>p-knob</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-knob-text</td>
                        <td>Text element.</td>
                    </tr>
                    <tr>
                        <td>p-knob-value</td>
                        <td>Value element.</td>
                    </tr>
                    <tr>
                        <td>p-knob-text</td>
                        <td>Text element.</td>
                    </tr>
				</tbody>
			</table>
		</div>

		<h5>Dependencies</h5>
		<p>None.</p>

        <h5>Knob Vue</h5>
        <p>PrimeVue Knob has no dependency however implementation is derived and inspired from <a href="https://github.com/kramer99/vue-knob-control">vue-knob-control</a> 
            component authored by <a href="https://github.com/kramer99">kramer99</a>.</p>
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
        <div class="grid formgrid text-center">
            <div class="field col-12 md:col-4">
                <h5>Basic</h5>
                <Knob v-model="value1" />
            </div>
            <div class="field col-12 md:col-4">
                <h5>Readonly</h5>
                <Knob v-model="value2" readonly />
            </div>
            <div class="field col-12 md:col-4">
                <h5>Disabled</h5>
                <Knob v-model="value3" disabled />
            </div>
            <div class="field col-12 md:col-4">
                <h5 class="mt-3">Min/Max</h5>
                <Knob v-model="value4" :min="-50" :max="50" />
            </div>
            <div class="field col-12 md:col-4">
                <h5 class="mt-3">Step</h5>
                <Knob v-model="value5" :step="10" />
            </div>
            <div class="field col-12 md:col-4">
                <h5 class="mt-3">Template</h5>
                <Knob v-model="value6" valueTemplate="{value}%" />
            </div>
            <div class="field col-12 md:col-4">
                <h5 class="mt-3">Stroke</h5>
                <Knob v-model="value7" :strokeWidth="5" />
            </div>
            <div class="field col-12 md:col-4">
                <h5 class="mt-3">Size</h5>
                <Knob v-model="value8" :size="200"/>
            </div>
            <div class="field col-12 md:col-4">
                <h5 class="mt-3">Color</h5>
                <Knob v-model="value9" valueColor="SlateGray" rangeColor="MediumTurquoise"  />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: 0,
            value2: 50,
            value3: 75,
            value4: 10,
            value5: 40,
            value6: 60,
            value7: 40,
            value8: 60,
            value9: 50,
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
        <div class="grid formgrid text-center">
            <div class="field col-12 md:col-4">
                <h5>Basic</h5>
                <Knob v-model="value1" />
            </div>
            <div class="field col-12 md:col-4">
                <h5>Readonly</h5>
                <Knob v-model="value2" readonly />
            </div>
            <div class="field col-12 md:col-4">
                <h5>Disabled</h5>
                <Knob v-model="value3" disabled />
            </div>
            <div class="field col-12 md:col-4">
                <h5 class="mt-3">Min/Max</h5>
                <Knob v-model="value4" :min="-50" :max="50" />
            </div>
            <div class="field col-12 md:col-4">
                <h5 class="mt-3">Step</h5>
                <Knob v-model="value5" :step="10" />
            </div>
            <div class="field col-12 md:col-4">
                <h5 class="mt-3">Template</h5>
                <Knob v-model="value6" valueTemplate="{value}%" />
            </div>
            <div class="field col-12 md:col-4">
                <h5 class="mt-3">Stroke</h5>
                <Knob v-model="value7" :strokeWidth="5" />
            </div>
            <div class="field col-12 md:col-4">
                <h5 class="mt-3">Size</h5>
                <Knob v-model="value8" :size="200"/>
            </div>
            <div class="field col-12 md:col-4">
                <h5 class="mt-3">Color</h5>
                <Knob v-model="value9" valueColor="SlateGray" rangeColor="MediumTurquoise"  />
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        const value1 = ref(0);
        const value2 = ref(50);
        const value3 = ref(75);
        const value4 = ref(10);
        const value5 = ref(40);
        const value6 = ref(60);
        const value7 = ref(40);
        const value8 = ref(60);
        const value9 = ref(50);

        return { value1, value2, value3, value4, value5, value6, value7, value8, value9 }
    }
}
<\\/script>
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/knob/knob.min.js"><\\/script>`,
                    content: `<div id="app">
            <div class="grid formgrid text-center">
                <div class="field col-12 md:col-4">
                    <h5>Basic</h5>
                    <p-knob v-model="value1"></p-knob>
                </div>
                <div class="field col-12 md:col-4">
                    <h5>Readonly</h5>
                    <p-knob v-model="value2" readonly></p-knob>
                </div>
                <div class="field col-12 md:col-4">
                    <h5>Disabled</h5>
                    <p-knob v-model="value3" disabled></p-knob>
                </div>
                <div class="field col-12 md:col-4">
                    <h5 class="mt-3">Min/Max</h5>
                    <p-knob v-model="value4" :min="-50" :max="50"></p-knob>
                </div>
                <div class="field col-12 md:col-4">
                    <h5 class="mt-3">Step</h5>
                    <p-knob v-model="value5" :step="10"></p-knob>
                </div>
                <div class="field col-12 md:col-4">
                    <h5 class="mt-3">Template</h5>
                    <p-knob v-model="value6" value-template="{value}%"></p-knob>
                </div>
                <div class="field col-12 md:col-4">
                    <h5 class="mt-3">Stroke</h5>
                    <p-knob v-model="value7" :stroke-width="5"></p-knob>
                </div>
                <div class="field col-12 md:col-4">
                    <h5 class="mt-3">Size</h5>
                    <p-knob v-model="value8" :size="200"></p-knob>
                </div>
                <div class="field col-12 md:col-4">
                    <h5 class="mt-3">Color</h5>
                    <p-knob v-model="value9" value-color="SlateGray" range-color="MediumTurquoise"></p-knob>
                </div>
            </div>
        </div>

        <script type="module">
        const { createApp, ref } = Vue;

        const App = {
            setup() {
                const value1 = ref(0);
                const value2 = ref(50);
                const value3 = ref(75);
                const value4 = ref(10);
                const value5 = ref(40);
                const value6 = ref(60);
                const value7 = ref(40);
                const value8 = ref(60);
                const value9 = ref(50);

                return { value1, value2, value3, value4, value5, value6, value7, value8, value9 }
            },
            components: {
                "p-knob": primevue.knob
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