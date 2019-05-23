<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import MultiSelect from 'primevue/multiselect';
</CodeHighlight>

				<h3>Getting Started</h3>
				<p>MultiSelect requires a value to bind and a collection of arbitrary objects along with the <i>optionLabel</i> property to specify the label property of the option.</p>
<CodeHighlight>
&lt;MultiSelect v-model="selectedCars" :options="cars" optionLabel="brand" placeholder="Select Brands" /&gt;
</CodeHighlight>

<CodeHighlight lang="js">
data() {
	return {
		selectedCars: null,
		cars: [
			{brand: 'Audi', value: 'Audi'},
			{brand: 'Bmw', value: 'Bmw'},
			{brand: 'Fiat', value: 'Fiat'},
			{brand: 'Honda', value: 'Honda'},
			{brand: 'Jaguar', value: 'Jaguar'},
			{brand: 'Mercedes', value: 'Mercedes'},
			{brand: 'Renault', value: 'Renault'},
			{brand: 'Volkswagen', value: 'Volkswagen'},
			{brand: 'Volvo', value: 'Volvo'}
		]
	}
}
</CodeHighlight>

				<h3>Custom Content</h3>
				<p>Label of an option is used as the display text of an item by default, for custom content support define an <i>option</i> template that gets the option instance as a parameter.</p>
				<p>In addition the <i>value</i> template can be used to customize the selected values display instead of the default comma separated list.</p>
<CodeHighlight>
<template v-pre>
&lt;MultiSelect v-model="selectedCars2" :options="cars" optionLabel="brand" placeholder="Select a Car"&gt;
	&lt;template #value="slotProps"&gt;
		&lt;div class="p-multiselect-car-token" v-for="option of slotProps.value" :key="option.brand"&gt;
			&lt;img :alt="option.brand" :src="'demo/images/car/' + option.brand + '.png'" /&gt;
			&lt;span&gt;{{option.brand}}&lt;/span&gt;
		&lt;/div&gt;
		&lt;div class="p-multiselect-empty-car-token" v-if="!slotProps.value || slotProps.value.length === 0"&gt;
			Select Brands
		&lt;/div&gt;
	&lt;/template&gt;
	&lt;template #option="slotProps"&gt;
		&lt;div class="p-multiselect-car-option"&gt;
			&lt;img :alt="slotProps.option.brand" :src="'demo/images/car/' + slotProps.option.brand + '.png'" /&gt;
			&lt;span&gt;{{slotProps.option.brand}}&lt;/span&gt;
		&lt;/div&gt;
	&lt;/template&gt;
&lt;/MultiSelect&gt;
</template>
</CodeHighlight>

				<h3>Filter</h3>
				<p>Filtering allows searching items in the list using an input field at the header. In order to use filtering, enable the <i>filter</i> property.</p>
<CodeHighlight>
&lt;MultiSelect v-model="selectedCars" :options="cars" :filter="true" optionLabel="brand" placeholder="Select Brands"/&gt;
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
                                <td>scrollHeight</td>
                                <td>string</td>
                                <td>200px</td>
                                <td>Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.</td>
                            </tr>
                            <tr>
                                <td>placeholder</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Label to display when there are no selections.</td>
                            </tr>
                            <tr>
                                <td>disabled</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When present, it specifies that the component should be disabled.</td>
                            </tr>
                            <tr>
                                <td>filter</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>When specified, displays an input field to filter the items on keyup.</td>
                            </tr>
                            <tr>
                                <td>tabindex</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Index of the element in tabbing order.</td>
                            </tr>
                            <tr>
                                <td>dataKey</td>
                                <td>string</td>
                                <td>null</td>
                                <td>A property to uniquely match the value in options for better performance.</td>
                            </tr>
                            <tr>
                                <td>filterPlaceholder</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Placeholder text to show when filter input is empty.</td>
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
                                <td>change</td>
                                <td>event.originalEvent: Original event <br />
                                    event.value: Selected option value </td>
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

				<h3>Styling</h3>
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
                                <td>p-multiselect</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-multiselect-label-container</td>
                                <td>Container of the label to display selected items.</td>
                            </tr>
                            <tr>
                                <td>p-multiselect-label-container</td>
                                <td>Label to display selected items.</td>
                            </tr>
                            <tr>
                                <td>p-multiselect-trigger</td>
                                <td>Dropdown button.</td>
                            </tr>
                            <tr>
                                <td>p-multiselect-filter-container</td>
                                <td>Container of filter input.</td>
                            </tr>
                            <tr>
                                <td>p-multiselect-panel</td>
                                <td>Overlay panel for items.</td>
                            </tr>
                            <tr>
                                <td>p-multiselect-items</td>
                                <td>List container of items.</td>
                            </tr>
                            <tr>
                                <td>p-multiselect-item</td>
                                <td>An item in the list.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/multiselect" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;template&gt;
	&lt;div&gt;
		&lt;div class="content-section introduction"&gt;
			&lt;div class="feature-intro"&gt;
				&lt;h1&gt;MultiSelect&lt;/h1&gt;
				&lt;p&gt;MultiSelect is used to multiple values from a list of options.&lt;/p&gt;
			&lt;/div&gt;
		&lt;/div&gt;

		&lt;div class="content-section implementation"&gt;
			&lt;h3 class="first"&gt;Basic&lt;/h3&gt;
			&lt;MultiSelect v-model="selectedCars1" :options="cars" optionLabel="brand" placeholder="Select Brands" /&gt;

			&lt;h3&gt;Advanced with Templating and Filtering&lt;/h3&gt;
			&lt;MultiSelect v-model="selectedCars2" :options="cars" optionLabel="brand" placeholder="Select a Car" :filter="true"&gt;
				&lt;template #value="slotProps"&gt;
					&lt;div class="p-multiselect-car-token" v-for="option of slotProps.value" :key="option.brand"&gt;
						&lt;img :alt="option.brand" :src="'demo/images/car/' + option.brand + '.png'" /&gt;
						&lt;span&gt;{{option.brand}}&lt;/span&gt;
					&lt;/div&gt;
					&lt;div class="p-multiselect-empty-car-token" v-if="!slotProps.value || slotProps.value.length === 0"&gt;
						Select Brands
					&lt;/div&gt;
				&lt;/template&gt;
				&lt;template #option="slotProps"&gt;
					&lt;div class="p-multiselect-car-option"&gt;
						&lt;img :alt="slotProps.option.brand" :src="'demo/images/car/' + slotProps.option.brand + '.png'" /&gt;
						&lt;span&gt;{{slotProps.option.brand}}&lt;/span&gt;
					&lt;/div&gt;
				&lt;/template&gt;
			&lt;/MultiSelect&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/template&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
	data() {
		return {
			selectedCars1: null,
			selectedCars2: null,
			cars: [
				{brand: 'Audi', value: 'Audi'},
				{brand: 'Bmw', value: 'Bmw'},
				{brand: 'Fiat', value: 'Fiat'},
				{brand: 'Honda', value: 'Honda'},
				{brand: 'Jaguar', value: 'Jaguar'},
				{brand: 'Mercedes', value: 'Mercedes'},
				{brand: 'Renault', value: 'Renault'},
				{brand: 'Volkswagen', value: 'Volkswagen'},
				{brand: 'Volvo', value: 'Volvo'}
			]
		}
	}
}
</CodeHighlight>

<CodeHighlight lang="css">
.p-multiselect {
	min-width: 15em;
}

.p-multiselect-car-option {
	display: inline-block;
	vertical-align: middle;

	img {
		vertical-align: middle;
		margin-right: .5em;
		width: 24px;
	}

	span {
		margin-top: .125em;
	}
}

.p-multiselect-car-token,
.p-multiselect-empty-car-token {
	padding: 2px 4px;
	margin: 0 0.286em 0 0;
	display: inline-block;
	vertical-align: middle;
	height: 1.857em;
	border-radius: 3px;
}

.p-multiselect-car-token img {
	width: 20px;
	vertical-align: middle;
	margin-right: .5em
}

.p-multiselect-car-token {
	background: #007ad9;
	color: #ffffff;
}

.p-multiselect-empty-car-token {
	background: #d95f00;
	color: #ffffff;
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>