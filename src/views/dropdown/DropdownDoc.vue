<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import Dropdown from 'primevue/dropdown';
</CodeHighlight>

				<h3>Getting Started</h3>
				<p>Dropdown requires a value to bind and a collection of arbitrary objects along with the <i>optionLabel</i> property to specify the field name of the option.</p>
<CodeHighlight>
&lt;Dropdown v-model=&quot;selectedCity&quot; :options=&quot;cities&quot; optionLabel=&quot;name&quot; placeholder=&quot;Select a City&quot; /&gt;
</CodeHighlight>

<CodeHighlight lang="js">
data() {
	return {
		selectedCity: null,
		cities: [
			{name: 'New York', code: 'NY'},
			{name: 'Rome', code: 'RM'},
			{name: 'London', code: 'LDN'},
			{name: 'Istanbul', code: 'IST'},
			{name: 'Paris', code: 'PRS'}
		]
	}
}
</CodeHighlight>

				<h3>Placeholder</h3>
				<p>Common pattern is providing an empty option as the placeholder when using native selects, however Dropdown has built-in support using the placeholder option so it is suggested to use it instead of creating an empty option.</p>

				<h3>Filtering</h3>
				<p>Options can be filtered using an input field in the overlay by enabling the <i>filter</i> property.</p>

<CodeHighlight>
&lt;Dropdown v-model=&quot;selectedCar&quot; :options=&quot;cars&quot; optionLabel=&quot;brand&quot; placeholder=&quot;Select a Car&quot; :filter=&quot;true&quot; filterPlaceholder=&quot;Find Car&quot;/&gt;
</CodeHighlight>

				<h3>Custom Content</h3>
				<p>Label of an option is used as the display text of an item by default, for custom content support define an <i>option</i> template that gets the option instance as a parameter.</p>
<CodeHighlight>
<template v-pre>
&lt;Dropdown v-model=&quot;selectedCar&quot; :options=&quot;cars&quot; optionLabel=&quot;brand&quot; placeholder=&quot;Select a Car&quot; :filter=&quot;true&quot; :showClear=&quot;true&quot;&gt;
	&lt;template #option=&quot;slotProps&quot;&gt;
		&lt;div class=&quot;p-clearfix p-dropdown-car-option&quot;&gt;
			&lt;img :alt=&quot;slotProps.option.brand&quot; :src=&quot;'/demo/images/car/' + slotProps.option.brand + '.png'&quot; /&gt;
			&lt;span&gt;{{slotProps.option.brand}}&lt;/span&gt;
		&lt;/div&gt;
	&lt;/template&gt;
&lt;/Dropdown&gt;
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
                                <td>scrollHeight</td>
                                <td>string</td>
                                <td>200px</td>
                                <td>Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.</td>
                            </tr>
                            <tr>
                                <td>filter</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When specified, displays an input field to filter the items on keyup.</td>
                            </tr>
                            <tr>
                                <td>filterPlaceholder</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Placeholder text to show when filter input is empty.</td>
                            </tr>
                            <tr>
                                <td>editable</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When present, custom value instead of predefined options can be entered using the editable input field.</td>
                            </tr>
                            <tr>
                                <td>placeholder</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Default text to display when no option is selected.</td>
                            </tr>
                            <tr>
                                <td>disabled</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When present, it specifies that the component should be disabled.</td>
                            </tr>
                            <tr>
                                <td>dataKey</td>
                                <td>string</td>
                                <td>null</td>
                                <td>A property to uniquely match the value in options for better performance.</td>
                            </tr>
                            <tr>
                                <td>showClear</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When enabled, a clear icon is displayed to clear the value.</td>
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
                                <td>p-dropdown</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-dropdown-label</td>
                                <td>Element to display label of selected option.</td>
                            </tr>
                            <tr>
                                <td>p-dropdown-trigger</td>
                                <td>Icon element.</td>
                            </tr>
                            <tr>
                                <td>p-dropdown-panel</td>
                                <td>Icon element.</td>
                            </tr>
                            <tr>
                                <td>p-dropdown-items-wrapper</td>
                                <td>Wrapper element of items list.</td>
                            </tr>
                            <tr>
                                <td>p-dropdown-items</td>
                                <td>List element of items.</td>
                            </tr>
                            <tr>
                                <td>p-dropdown-item</td>
                                <td>An item in the list.</td>
                            </tr>
                            <tr>
                                <td>p-dropdown-filter-container</td>
                                <td>Container of filter input.</td>
                            </tr>
                            <tr>
                                <td>p-dropdown-filter</td>
                                <td>Filter element.</td>
                            </tr>
                            <tr>
                                <td>p-dropdown-open</td>
                                <td>Container element when overlay is visible.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/dropdown" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;template&gt;
	&lt;div&gt;
		&lt;div class=&quot;content-section introduction&quot;&gt;
			&lt;div class=&quot;feature-intro&quot;&gt;
				&lt;h1&gt;Dropdown&lt;/h1&gt;
				&lt;p&gt;Dropdown is used to select an item from a list of options.&lt;/p&gt;
			&lt;/div&gt;
		&lt;/div&gt;

		&lt;div class=&quot;content-section implementation&quot;&gt;
			&lt;h3 class=&quot;first&quot;&gt;Basic&lt;/h3&gt;
			&lt;Dropdown v-model=&quot;selectedCity1&quot; :options=&quot;cities&quot; optionLabel=&quot;name&quot; placeholder=&quot;Select a City&quot; /&gt;

			&lt;h3&gt;Editable&lt;/h3&gt;
			&lt;Dropdown v-model=&quot;selectedCity2&quot; :options=&quot;cities&quot; optionLabel=&quot;name&quot; :editable=&quot;true&quot;/&gt;

			&lt;h3&gt;Advanced with Templating, Filtering and Clear Icon&lt;/h3&gt;
			&lt;Dropdown v-model=&quot;selectedCar&quot; :options=&quot;cars&quot; optionLabel=&quot;brand&quot; placeholder=&quot;Select a Car&quot; :filter=&quot;true&quot; :showClear=&quot;true&quot;&gt;
				&lt;template #option=&quot;slotProps&quot;&gt;
					&lt;div class=&quot;p-clearfix p-dropdown-car-option&quot;&gt;
						&lt;img :alt=&quot;slotProps.option.brand&quot; :src=&quot;'/demo/images/car/' + slotProps.option.brand + '.png'&quot; /&gt;
						&lt;span&gt;{{slotProps.option.brand}}&lt;/span&gt;
					&lt;/div&gt;
				&lt;/template&gt;
			&lt;/Dropdown&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/template&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
	data() {
		return {
			selectedCity1: null,
			selectedCity2: null,
			selectedCar: null,
			cities: [
				{name: 'New York', code: 'NY'},
				{name: 'Rome', code: 'RM'},
				{name: 'London', code: 'LDN'},
				{name: 'Istanbul', code: 'IST'},
				{name: 'Paris', code: 'PRS'}
			],
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
.p-dropdown {
	width: 12em;
}

.p-dropdown-car-option {
	img {
		vertical-align: middle;
		margin-right: .5em;
		width: 24px;
	}

	span {
		float: right;
		margin-top: .125em;
	}
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>