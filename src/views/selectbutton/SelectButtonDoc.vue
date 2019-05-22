<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import SelectButton from 'primevue/selectbutton';
</CodeHighlight>

				<h3>Getting Started</h3>
				<p>SelectButton requires a value to bind and a collection of arbitrary objects along with the <i>optionLabel</i> property to specify the label property of the option.</p>
<CodeHighlight>
&lt;SelectButton v-model=&quot;selectedCity&quot; :options=&quot;cities&quot; optionLabel=&quot;name&quot; /&gt;
</CodeHighlight>

<CodeHighlight lang="js">
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
</CodeHighlight>

				<h3>Multiple</h3>
				<p>SelectButton allows selecting only one item by default and setting <i>multiple</i> option enables choosing more than one item. In multiple case, model property should be an array.</p>
<CodeHighlight>
&lt;SelectButton v-model=&quot;selectedCity&quot; :options=&quot;cities&quot; optionLabel=&quot;brand&quot; :multiple=&quot;true&quot; /&gt;
</CodeHighlight>

				<h3>Templating</h3>
				<p>Label of an option is used as the display text of an item by default, for custom content support define an <i>option</i> template that gets the option instance as a parameter.</p>
<CodeHighlight>
<template v-pre>
&lt;SelectButton v-model=&quot;selectedCar&quot; :options=&quot;cars&quot; optionLabel=&quot;brand&quot;&gt;
	&lt;template #option=&quot;slotProps&quot;&gt;
		&lt;div style=&quot;text-align: center; padding: 1em; width: 125px&quot;&gt;
			&lt;img :alt=&quot;slotProps.option.brand&quot; :src=&quot;'/demo/images/car/' + slotProps.option.brand + '.png'&quot; style=&quot;width:48px&quot; /&gt;
			&lt;div style=&quot;margin-top: 1em&quot;&gt;{{slotProps.option.brand}}&lt;/div&gt;
		&lt;/div&gt;
	&lt;/template&gt;
&lt;/SelectButton&gt;
</template>
</CodeHighlight>

				<h3>Properties</h3>
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
                                <td>value</td>
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
                                <td>string</td>
                                <td>null</td>
                                <td>Property name to use as the label of an option.</td>
                            </tr>
                            <tr>
                                <td>optionValue</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Property name to use as the value of an option, defaults to the option itself when not defined.</td>
                            </tr>
                            <tr>
                                <td>optionDisabled</td>
                                <td>boolean</td>
                                <td>null</td>
                                <td>Property name to use as the disabled flag of an option, defaults to false when not defined.</td>
                            </tr>
                            <tr>
                                <td>multiple</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When specified, allows selecting multiple values.</td>
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
                                <td>A property to uniquely match the value in options for better performance.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h3>Events</h3>
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
                                <td>input</td>
                                <td>event: Single value or an array of values that are selected.</td>
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

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/selectbutton" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;template&gt;
	&lt;div&gt;
		&lt;div class=&quot;content-section introduction&quot;&gt;
			&lt;div class=&quot;feature-intro&quot;&gt;
				&lt;h1&gt;SelectButton&lt;/h1&gt;
				&lt;p&gt;SelectButton is a form component to choose a value from a list of options using button elements.&lt;/p&gt;
			&lt;/div&gt;
		&lt;/div&gt;

		&lt;div class=&quot;content-section implementation&quot;&gt;
			&lt;h3 class=&quot;first&quot;&gt;Single&lt;/h3&gt;
			&lt;SelectButton v-model=&quot;selectedCity&quot; :options=&quot;cities&quot; optionLabel=&quot;name&quot; /&gt;
			&lt;p&gt;Selected City: &lt;span style=&quot;font-weight: bold&quot;&gt;{{selectedCity}}&lt;/span&gt;&lt;/p&gt;

			&lt;h3&gt;Multiple&lt;/h3&gt;
			&lt;SelectButton v-model=&quot;selectedCars&quot; :options=&quot;cars&quot; optionLabel=&quot;brand&quot; :multiple=&quot;true&quot; /&gt;
			&lt;p&gt;Selected Cars: &lt;span style=&quot;font-weight: bold&quot;&gt;{{selectedCars}}&lt;/span&gt;&lt;/p&gt;

			&lt;h3&gt;Custom Content&lt;/h3&gt;
			&lt;SelectButton v-model=&quot;selectedCar&quot; :options=&quot;cars&quot; optionLabel=&quot;brand&quot;&gt;
				&lt;template #option=&quot;slotProps&quot;&gt;
					&lt;div style=&quot;text-align: center; padding: 1em; width: 125px&quot;&gt;
						&lt;img :alt=&quot;slotProps.option.brand&quot; :src=&quot;'/demo/images/car/' + slotProps.option.brand + '.png'&quot; style=&quot;width:48px&quot; /&gt;
						&lt;div style=&quot;margin-top: 1em&quot;&gt;{{slotProps.option.brand}}&lt;/div&gt;
					&lt;/div&gt;
				&lt;/template&gt;
			&lt;/SelectButton&gt;
			&lt;p&gt;Selected Car: &lt;span style=&quot;font-weight: bold&quot;&gt;{{selectedCar}}&lt;/span&gt;&lt;/p&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/template&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
	data() {
		return {
			selectedCity: null,
			selectedCar: null,
			selectedCars: null,
			cities: [
				{name: 'London', code: 'LND'},
				{name: 'Paris', code: 'PRS'},
				{name: 'Rome', code: 'RM'}
			],
			cars: [
				{brand: 'Audi', key: 'A'},
				{brand: 'Bmw', key: 'B'},
				{brand: 'Mercedes', key: 'M'}
			]
		}
	},
	created() {
		this.selectedCar = this.cars[1];
	}
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>