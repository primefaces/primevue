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
&lt;SelectButton v-model="selectedCity" :options="cities" optionLabel="name" /&gt;
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
&lt;SelectButton v-model="selectedCity" :options="cities" optionLabel="brand" :multiple="true" /&gt;
</CodeHighlight>

				<h3>Templating</h3>
				<p>Label of an option is used as the display text of an item by default, for custom content support define an <i>option</i> template that gets the option instance as a parameter.</p>
<CodeHighlight>
<template v-pre>
&lt;SelectButton v-model="selectedCar" :options="cars" optionLabel="brand"&gt;
	&lt;template #option="slotProps"&gt;
		&lt;div style="text-align: center; padding: 1em; width: 125px"&gt;
			&lt;img :alt="slotProps.option.brand" :src="'demo/images/car/' + slotProps.option.brand + '.png'" style="width:48px" /&gt;
			&lt;div style="margin-top: 1em"&gt;{{slotProps.option.brand}}&lt;/div&gt;
		&lt;/div&gt;
	&lt;/template&gt;
&lt;/SelectButton&gt;
</template>
</CodeHighlight>

				<h3>Properties</h3>
                <p>Any attribute such as style and class are passed to the main container element. Following are the additional properties to configure the component.</p>
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
		&lt;div class="content-section introduction"&gt;
			&lt;div class="feature-intro"&gt;
				&lt;h1&gt;SelectButton&lt;/h1&gt;
				&lt;p&gt;SelectButton is a form component to choose a value from a list of options using button elements.&lt;/p&gt;
			&lt;/div&gt;
		&lt;/div&gt;

		&lt;div class="content-section implementation"&gt;
			&lt;h3 class="first"&gt;Single&lt;/h3&gt;
			&lt;SelectButton v-model="selectedCity" :options="cities" optionLabel="name" /&gt;
			&lt;p&gt;Selected City: &lt;span style="font-weight: bold"&gt;{{selectedCity}}&lt;/span&gt;&lt;/p&gt;

			&lt;h3&gt;Multiple&lt;/h3&gt;
			&lt;SelectButton v-model="selectedCars" :options="cars" optionLabel="brand" :multiple="true" /&gt;
			&lt;p&gt;Selected Cars: &lt;span style="font-weight: bold"&gt;{{selectedCars}}&lt;/span&gt;&lt;/p&gt;

			&lt;h3&gt;Custom Content&lt;/h3&gt;
			&lt;SelectButton v-model="selectedCar" :options="cars" optionLabel="brand"&gt;
				&lt;template #option="slotProps"&gt;
					&lt;div style="text-align: center; padding: 1em; width: 125px"&gt;
						&lt;img :alt="slotProps.option.brand" :src="'demo/images/car/' + slotProps.option.brand + '.png'" style="width:48px" /&gt;
						&lt;div style="margin-top: 1em"&gt;{{slotProps.option.brand}}&lt;/div&gt;
					&lt;/div&gt;
				&lt;/template&gt;
			&lt;/SelectButton&gt;
			&lt;p&gt;Selected Car: &lt;span style="font-weight: bold"&gt;{{selectedCar}}&lt;/span&gt;&lt;/p&gt;
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