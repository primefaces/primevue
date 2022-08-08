<template>
	<AppDoc name="SelectButtonDemo" :sources="sources" github="selectbutton/SelectButtonDemo.vue" >
        <h5>Import via Module</h5>
<pre v-code.script><code>
import SelectButton from 'primevue/selectbutton';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/selectbutton/selectbutton.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>SelectButton requires a value to bind and a collection of arbitrary objects along with the <i>optionLabel</i> property to specify the label property of the option.</p>
<pre v-code><code>
&lt;SelectButton v-model="selectedCity" :options="cities" optionLabel="name" /&gt;

</code></pre>

<pre v-code.script><code>
export default {
	data() {
		return {
			selectedCity: null,
			cities: [
				{name: 'London', code: 'LND'},
				{name: 'Paris', code: 'PRS'},
				{name: 'Rome', code: 'RM'}
			]
		}
	}
}

</code></pre>

		<h5>Multiple</h5>
		<p>SelectButton allows selecting only one item by default and setting <i>multiple</i> option enables choosing more than one item. In multiple case, model property should be an array.</p>
<pre v-code><code>
&lt;SelectButton v-model="selectedCity" :options="cities" optionLabel="brand" :multiple="true" /&gt;

</code></pre>

		<h5>Templating</h5>
		<p>Label of an option is used as the display text of an item by default, for custom content support define an <i>option</i> template that gets the option instance as a parameter.</p>
<pre v-code><code><template v-pre>
&lt;SelectButton v-model="selectedCar" :options="cars" optionLabel="brand"&gt;
	&lt;template #option="slotProps"&gt;
        &lt;div class="car-option"&gt;
            &lt;img :alt="slotProps.option.brand" :src="'demo/images/car/' + slotProps.option.brand + '.png'" /&gt;
            &lt;div&gt;{{slotProps.option.brand}}&lt;/div&gt;
        &lt;/div&gt;
	&lt;/template&gt;
&lt;/SelectButton&gt;
</template>
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
                        <td>any</td>
                        <td>null</td>
                        <td>Value of the component.</td>
                    </tr>
                    <tr>
                        <td>options</td>
                        <td>array</td>
                        <td>null</td>
                        <td>An array of selectitems to display as the available options.</td>
                    </tr>
                    <tr>
                        <td>optionLabel</td>
                        <td>string | function</td>
                        <td>null</td>
                        <td>Property name or getter function to use as the label of an option.</td>
                    </tr>
                    <tr>
                        <td>optionValue</td>
                        <td>string | function</td>
                        <td>null</td>
                        <td>Property name or getter function to use as the value of an option, defaults to the option itself when not defined.</td>
                    </tr>
                    <tr>
                        <td>optionDisabled</td>
                        <td>string | function</td>
                        <td>null</td>
                        <td>Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.</td>
                    </tr>
                    <tr>
                        <td>multiple</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When specified, allows selecting multiple values.</td>
                    </tr>
                    <tr>
                        <td>unselectable</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Whether selection can be cleared.</td>
                    </tr>
                    <tr>
                        <td>disabled</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When present, it specifies that the element should be disabled.</td>
                    </tr>
                    <tr>
                        <td>dataKey</td>
                        <td>string</td>
                        <td>null</td>
                        <td>A property to uniquely identify an option.</td>
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
                        <td>event.originalEvent: browser event <br>
                            event.value: Single value or an array of values that are selected.</td>
                        <td>Callback to invoke on value change.</td>
                    </tr>
                    <tr>
                        <td>focus</td>
                        <td>event: Browser event</td>
                        <td>Callback to invoke on focus.</td>
                    </tr>
                    <tr>
                        <td>blur</td>
                        <td>event: Browser event</td>
                        <td>Callback to invoke on blur.</td>
                    </tr>
				</tbody>
			</table>
		</div>

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
                        <td>option</td>
                        <td>option: Option instance<br />
                            index: Index of the option</td>
                    </tr>
				</tbody>
			</table>
        </div>

        <h5>Accessibility</h5>
        <h6>Screen Reader</h6>
        <p>SelectButton component uses hidden native checkbox role for multiple selection and hidden radio role for single selection that is only visible to screen readers.
        Value to describe the component can be provided via <i>aria-labelledby</i> property.</p>

        <h6>Keyboard Support</h6>
        <p>Keyboard interaction is derived from the native browser handling of checkboxs in a group.</p>
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
                        <td>Moves focus to the first selected option, if there is none then first option receives the focus.</td>
                    </tr>
                    <tr>
                        <td>
                            <span class="inline-flex flex-column">
                                <i class="mb-1">right arrow</i>
                                <i>up arrow</i>
                            </span>
                        </td>
                        <td>Moves focus to the previous option.</td>
                    </tr>
                    <tr>
                        <td>
                            <span class="inline-flex flex-column">
                                <i class="mb-1">left arrow</i>
                                <i>down arrow</i>
                            </span>
                        </td>
                        <td>Moves focus to the next option.</td>
                    </tr>
                    <tr>
                        <td><i>space</i></td>
                        <td>Toggles the checked state of a button.</td>
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
        <h5 id="single">Single Selection</h5>
        <SelectButton v-model="value1" :options="options" aria-labelledby="single" />

        <h5 id="multiple">Multiple Selection</h5>
        <SelectButton v-model="value2" :options="paymentOptions" optionLabel="name" multiple aria-labelledby="multiple" />

        <h5 id="custom">Custom Content</h5>
        <SelectButton v-model="value3" :options="justifyOptions" optionLabel="value" dataKey="value" aria-labelledby="custom">
            <template #option="slotProps">
                <i :class="slotProps.option.icon"></i>
            </template>
        </SelectButton>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: 'Off',
            value2: null,
            value3: null,
            options: ['Off', 'On'],
            paymentOptions: [
                {name: 'Option 1', value: 1},
                {name: 'Option 2', value: 2},
                {name: 'Option 3', value: 3}
            ],
            justifyOptions: [
                {icon: 'pi pi-align-left', value: 'Left'},
                {icon: 'pi pi-align-right', value: 'Right'},
                {icon: 'pi pi-align-center', value: 'Center'},
                {icon: 'pi pi-align-justify', value: 'Justify'}]
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
        <h5 id="single">Single Selection</h5>
        <SelectButton v-model="value1" :options="options" aria-labelledby="single" />

        <h5 id="multiple">Multiple Selection</h5>
        <SelectButton v-model="value2" :options="paymentOptions" optionLabel="name" multiple aria-labelledby="multiple" />

        <h5 id="custom">Custom Content</h5>
        <SelectButton v-model="value3" :options="justifyOptions" optionLabel="value" dataKey="value" aria-labelledby="custom">
            <template #option="slotProps">
                <i :class="slotProps.option.icon"></i>
            </template>
        </SelectButton>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const value1 = ref('Off');
        const value2 = ref();
        const value3 = ref();
        const options = ref(['Off', 'On']);
        const paymentOptions = ref([
            {name: 'Option 1', value: 1},
            {name: 'Option 2', value: 2},
            {name: 'Option 3', value: 3}
        ]);
        const justifyOptions = ref([
            {icon: 'pi pi-align-left', value: 'Left'},
            {icon: 'pi pi-align-right', value: 'Right'},
            {icon: 'pi pi-align-center', value: 'Center'},
            {icon: 'pi pi-align-justify', value: 'Justify'}
        ]);

        return { value1, value2, value3, options, paymentOptions, justifyOptions }
    }
}
<\\/script>
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/selectbutton/selectbutton.min.js"><\\/script>`,
                    content: `<div id="app">
            <h5 id="single">Single Selection</h5>
            <p-selectbutton v-model="value1" :options="options" aria-labelledby="single"></p-selectbutton>

            <h5 id="multiple">Multiple Selection</h5>
            <p-selectbutton v-model="value2" :options="paymentOptions" option-label="name" multiple aria-labelledby="multiple"></p-selectbutton>

            <h5 id="custom">Custom Content</h5>
            <p-selectbutton v-model="value3" :options="justifyOptions" option-label="value" data-key="value" aria-labelledby="custom">
                <template #option="slotProps">
                    <i :class="slotProps.option.icon"></i>
                </template>
            </p-selectbutton>
        </div>

        <script type="module">
        const { createApp, ref } = Vue;

        const App = {
            setup() {
                const value1 = ref('Off');
                const value2 = ref();
                const value3 = ref();
                const options = ref(['Off', 'On']);
                const paymentOptions = ref([
                    {name: 'Option 1', value: 1},
                    {name: 'Option 2', value: 2},
                    {name: 'Option 3', value: 3}
                ]);
                const justifyOptions = ref([
                    {icon: 'pi pi-align-left', value: 'Left'},
                    {icon: 'pi pi-align-right', value: 'Right'},
                    {icon: 'pi pi-align-center', value: 'Center'},
                    {icon: 'pi pi-align-justify', value: 'Justify'}
                ]);

                return { value1, value2, value3, options, paymentOptions, justifyOptions }
            },
            components: {
                "p-selectbutton": primevue.selectbutton
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