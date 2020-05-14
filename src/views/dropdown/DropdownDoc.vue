<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import Dropdown from 'primevue/dropdown';
</CodeHighlight>

				<h3>Getting Started</h3>
				<p>Dropdown requires a value to bind and a collection of arbitrary objects along with the <i>optionLabel</i> property to specify the label property of the option.</p>
<CodeHighlight>
&lt;Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" /&gt;
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
&lt;Dropdown v-model="selectedCar" :options="cars" optionLabel="brand" placeholder="Select a Car" :filter="true" filterPlaceholder="Find Car"/&gt;
</CodeHighlight>

				<h3>Custom Content</h3>
				<p>Label of an option is used as the display text of an item by default, for custom content support define an <i>option</i> template that gets the option instance as a parameter.</p>
                <p>In addition the <i>value</i> template can be used to customize the selected value.</p>
<CodeHighlight>
<template v-pre>
&lt;Dropdown v-model="selectedCar" :options="cars" optionLabel="brand" :filter="true" placeholder="Select a Car" :showClear="true"&gt;
	&lt;template #value="slotProps"&gt;
        &lt;div class="p-dropdown-car-value" v-if="slotProps.value"&gt;
            &lt;img :alt="slotProps.value.brand" :src="'demo/images/car/' + slotProps.value.brand + '.png'" /&gt;
            &lt;span&gt;{{slotProps.value.brand}}&lt;/span&gt;
        &lt;/div&gt;
        &lt;span v-else&gt;
            {{slotProps.placeholder}}
        &lt;/span&gt;
    &lt;/template&gt;
    &lt;template #option="slotProps"&gt;
		&lt;div class="p-dropdown-car-option"&gt;
			&lt;img :alt="slotProps.option.brand" :src="'demo/images/car/' + slotProps.option.brand + '.png'" /&gt;
			&lt;span&gt;{{slotProps.option.brand}}&lt;/span&gt;
		&lt;/div&gt;
	&lt;/template&gt;
&lt;/Dropdown&gt;
</template>
</CodeHighlight>

				<h3>Properties</h3>
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
                                <td>filterLocale</td>
                                <td>string</td>
                                <td>undefined</td>
                                <td>Locale to use in filtering. The default locale is the host environment's current locale.</td>
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
                            <tr>
                                <td>inputId</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Identifier of the underlying input element.</td>
                            </tr>
                            <tr>
                                <td>ariaLabelledBy</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Establishes relationships between the component and label(s) where its value should be one or more element IDs.</td>
                            </tr>
                            <tr>
                                <td>appendTo</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Id of the element or "body" for document where the overlay should be appended to.</td>
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
                            <tr>
                                <td>before-show</td>
                                <td>-</td>
                                <td>Callback to invoke before the overlay is shown.</td>
                            </tr>
                            <tr>
                                <td>before-hide</td>
                                <td>-</td>
                                <td>Callback to invoke before the overlay is hidden.</td>
                            </tr>
                            <tr>
                                <td>show</td>
                                <td>-</td>
                                <td>Callback to invoke when the overlay is shown.</td>
                            </tr>
                            <tr>
                                <td>hide</td>
                                <td>-</td>
                                <td>Callback to invoke when the overlay is hidden.</td>
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
&lt;h3&gt;Basic&lt;/h3&gt;
&lt;Dropdown v-model="selectedCity1" :options="cities" optionLabel="name" placeholder="Select a City" /&gt;

&lt;h3&gt;Editable&lt;/h3&gt;
&lt;Dropdown v-model="selectedCity2" :options="cities" optionLabel="name" :editable="true"/&gt;

&lt;h3&gt;Advanced with Templating, Filtering and Clear Icon&lt;/h3&gt;
&lt;Dropdown v-model="selectedCar" :options="cars" optionLabel="brand" :filter="true" placeholder="Select a Car" :showClear="true"&gt;
    &lt;div class="p-dropdown-car-value" v-if="slotProps.value"&gt;
        &lt;img :alt="slotProps.value.brand" :src="'demo/images/car/' + slotProps.value.brand + '.png'" /&gt;
        &lt;span&gt;{{slotProps.value.brand}}&lt;/span&gt;
    &lt;/div&gt;
    &lt;span v-else&gt;
        {{slotProps.placeholder}}
    &lt;/span&gt;
    &lt;template #option="slotProps"&gt;
        &lt;div class="p-dropdown-car-option"&gt;
            &lt;img :alt="slotProps.option.brand" :src="'demo/images/car/' + slotProps.option.brand + '.png'" /&gt;
            &lt;span&gt;{{slotProps.option.brand}}&lt;/span&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/Dropdown&gt;
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
				{brand: 'BMW', value: 'BMW'},
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
    width: 12rem;
}

.p-dropdown-car-option,
.p-dropdown-car-value {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        margin-right: .5rem;
        width: 24px;
    }

    span {
        line-height: 1;
    }
}

.p-dropdown-car-value {
    justify-content: flex-start;

    img {
        width: 17px;
    }
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>