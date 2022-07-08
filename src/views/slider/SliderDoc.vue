<template>
	<AppDoc name="SliderDemo" :sources="sources" github="slider/SliderDemo.vue" >
        <h5>Import via Module</h5>
<pre v-code.script><code>
import Slider from 'primevue/slider';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/slider/slider.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>Two-way binding is defined using the standard v-model directive.</p>
<pre v-code><code>
&lt;Slider v-model="value" /&gt;

</code></pre>

		<h5>Range</h5>
		<p>Range slider provides two handles to define two values. Enable <i>range</i> property and bind an array to implement a range slider.</p>

<pre v-code><code>
&lt;Slider v-model="value" :range="true" /&gt;

</code></pre>

<pre v-code.script><code>
export default {
	data() {
		return {
			value: [20,80]
		}
	}
}

</code></pre>

		<h5>Orientation</h5>
		<p>Default layout of slider is horizontal, use <i>orientation</i> property for the alternative vertical mode.</p>
<pre v-code><code>
&lt;Slider v-model="value" orientation="vertical" /&gt;

</code></pre>

		<h5>Step</h5>
		<p>Step factor is 1 by default and can be customized with <i>step</i> option.</p>
<pre v-code><code>
&lt;Slider v-model="value" :step="20" /&gt;

</code></pre>

		<h5>Min-Max</h5>
		<p>Boundaries are specified with min and max attributes.</p>
<pre v-code><code>
&lt;Slider v-model="value" :step="20" :min="50" :max="200" /&gt;

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
                        <td>number</td>
                        <td>0</td>
                        <td>Value of the component.</td>
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
                        <td>orientation</td>
                        <td>string</td>
                        <td>horizontal</td>
                        <td>Orientation of the slider, valid values are horizontal and vertical.</td>
                    </tr>
                    <tr>
                        <td>step</td>
                        <td>number</td>
                        <td>1</td>
                        <td>Step factor to increment/decrement the value.</td>
                    </tr>
                    <tr>
                        <td>range</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When speficed, allows two boundary values to be picked.</td>
                    </tr>
                    <tr>
                        <td>disabled</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When present, it specifies that the component should be disabled.</td>
                    </tr>
                    <tr>
                        <td>tabindex</td>
                        <td>number</td>
                        <td>null</td>
                        <td>Index of the element in tabbing order.</td>
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
                        <td>value: Selected option value </td>
                        <td>Callback to invoke on value change.</td>
                    </tr>
                    <tr>
                        <td>slideend</td>
                        <td>event.originalEvent: Original event <br />
                            event.value: New value.
                        </td>
                        <td>Callback to invoke when slide ends.</td>
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
                        <td>p-slider</td>
                        <td>Container element</td>
                    </tr>
                    <tr>
                        <td>p-slider-handle</td>
                        <td>Handle element.</td>
                    </tr>
				</tbody>
			</table>
		</div>

        <h5>Accessibility</h5>
        <DevelopmentSection>
            <h6>Screen Reader</h6>
            <p>Slider element component uses <i>slider</i> role on the handle in addition to the <i>aria-orientation</i>, <i>aria-valuemin</i>, <i>aria-valuemax</i> and <i>aria-valuenow</i> attributes. Value to describe the component can be defined using
            <i>aria-labelledby</i> and <i>aria-label</i> props.</p>

<pre v-code><code>
&lt;span id="label_number"&gt;Number&lt;/span&gt;
&lt;Slider aria-labelledby="label_number" /&gt;

&lt;Slider aria-label="Number" /&gt;

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
                            <td>Moves focus to the slider.</td>
                        </tr>
                        <tr>
                            <td>
                                <span class="inline-flex flex-column">
                                    <i class="mb-1">left arrow</i>
                                    <i>up arrow</i>
                                </span>
                            </td>
                            <td>Decrements the value.</td>
                        </tr>
                        <tr>
                            <td>
                                <span class="inline-flex flex-column">
                                    <i class="mb-1">right arrow</i>
                                    <i>down arrow</i>
                                </span>
                            </td>
                            <td>Increments the value.</td>
                        </tr>
                        <tr>
                            <td><i>home</i></td>
                            <td>Set the minimum value.</td>
                        </tr>
                        <tr>
                            <td><i>end</i></td>
                            <td>Set the maximum value.</td>
                        </tr>
                        <tr>
                            <td><i>page up</i></td>
                            <td>Increments the value by 10 steps.</td>
                        </tr>
                        <tr>
                            <td><i>page down</i></td>
                            <td>Decrements the value by 10 steps.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </DevelopmentSection>

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
        <h5>Basic: {{value1}}</h5>
        <Slider v-model="value1" />

        <h5>Input: {{value2}}</h5>
        <InputText v-model.number="value2" />
        <Slider v-model="value2" />

        <h5>Step: {{value3}}</h5>
        <Slider v-model="value3" :step="20" />

        <h5>Decimal Step: {{value4}}</h5>
        <Slider v-model="value4" :step="0.5" />

        <h5>Range: {{value5}}</h5>
        <Slider v-model="value5" :range="true" />

        <h5>Vertical: {{value6}}</h5>
        <Slider v-model="value6" orientation="vertical" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: null,
            value2: 50,
            value3: 20,
            value4: 30.5,
            value5: [20,80],
            value6: 50
        }
    }
}
<\\/script>

<style scoped>
.p-slider-horizontal, .p-inputtext {
    width: 14rem;
}
.p-slider-vertical {
     height: 14rem;
}
</style>`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <h5>Basic: {{value1}}</h5>
        <Slider v-model="value1" />

        <h5>Input: {{value2}}</h5>
        <InputText v-model.number="value2" />
        <Slider v-model="value2" />

        <h5>Step: {{value3}}</h5>
        <Slider v-model="value3" :step="20" />

        <h5>Decimal Step: {{value4}}</h5>
        <Slider v-model="value4" :step="0.5" />

        <h5>Range: {{value5}}</h5>
        <Slider v-model="value5" :range="true" />

        <h5>Vertical: {{value6}}</h5>
        <Slider v-model="value6" orientation="vertical" />
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const value1 = ref(null);
        const value2 = ref(50);
        const value3 = ref(20);
        const value4 = ref(30.5);
        const value5 = ref([20,80]);
        const value6 = ref(50);

        return { value1, value2, value3, value4, value5, value6 }
    }
}
<\\/script>

<style scoped>
.p-slider-horizontal, .p-inputtext {
    width: 14rem;
}
.p-slider-vertical {
     height: 14rem;
}
</style>`
                },
                'browser-source': {
                    imports: `<script src="https://unpkg.com/primevue@^3/slider/slider.min.js"><\\/script>`,
                    tabName: 'Browser Source',
                    content: `<div id="app">
            <h5>Basic: {{value1}}</h5>
            <p-slider v-model="value1"></p-slider>

            <h5>Input: {{value2}}</h5>
            <p-inputtext v-model.number="value2"></p-inputtext>
            <p-slider v-model="value2"></p-slider>

            <h5>Step: {{value3}}</h5>
            <p-slider v-model="value3" :step="20"></p-slider>

            <h5>Decimal Step: {{value4}}</h5>
            <p-slider v-model="value4" :step="0.5"></p-slider>

            <h5>Range: {{value5}}</h5>
            <p-slider v-model="value5" :range="true"></p-slider>

            <h5>Vertical: {{value6}}</h5>
            <p-slider v-model="value6" orientation="vertical"></p-slider>
        </div>

        <script type="module">
        const { createApp, ref } = Vue;

        const App = {
            setup() {
                const value1 = ref(null);
                const value2 = ref(50);
                const value3 = ref(20);
                const value4 = ref(30.5);
                const value5 = ref([20,80]);
                const value6 = ref(50);

                return { value1, value2, value3, value4, value5, value6 }
            },
            components: {
                "p-slider": primevue.slider,
                "p-inputtext": primevue.inputtext
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>

        <style scoped>
        .p-slider-horizontal, .p-inputtext {
            width: 14rem;
        }
        .p-slider-vertical {
            height: 14rem;
        }
        </style>`
                }
            }
        }
    }
}
</script>