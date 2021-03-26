<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<CodeHighlight lang="javascript">
import MultiSelect from 'primevue/multiselect';
</CodeHighlight>

				<h5>Getting Started</h5>
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
</CodeHighlight>

                <h5>Chips Display</h5>
                <p>A comma separated list is used by default to display selected items whereas alternative chip mode is provided using the <i>display</i> property to visualize the items as tokens.</p>
<CodeHighlight>
&lt;MultiSelect v-model="selectedCars" :options="cars" optionLabel="brand" placeholder="Select Brands" display="chip"/&gt;
</CodeHighlight>

				<h5>Custom Content</h5>
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
		&lt;template v-if="!slotProps.value || slotProps.value.length === 0"&gt;
            Select Brands
        &lt;template&gt;
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

				<h5>Filter</h5>
				<p>Filtering allows searching items in the list using an input field at the header. In order to use filtering, enable the <i>filter</i> property.</p>
<CodeHighlight>
&lt;MultiSelect v-model="selectedCars" :options="cars" :filter="true" optionLabel="brand" placeholder="Select Brands"/&gt;
</CodeHighlight>

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
                                <td>Property name or getter function to use as the label of an option.</td>
                            </tr>
                            <tr>
                                <td>optionValue</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Property name or getter function to use as the value of an option, defaults to the option itself when not defined.</td>
                            </tr>
                            <tr>
                                <td>optionDisabled</td>
                                <td>boolean</td>
                                <td>null</td>
                                <td>Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.</td>
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
                                <td>false</td>
                                <td>When specified, displays an input field to filter the items on keyup.</td>
                            </tr>
                            <tr>
                                <td>tabindex</td>
                                <td>string</td>
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
                                <td>dataKey</td>
                                <td>string</td>
                                <td>null</td>
                                <td>A property to uniquely identify an option.</td>
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
                            <tr>
                                <td>emptyFilterMessage</td>
                                <td>string</td>
                                <td>No results found</td>
                                <td>Text to display when filtering does not return any results.</td>
                            </tr>
                            <tr>
                                <td>display</td>
                                <td>string</td>
                                <td>comma</td>
                                <td>Defines how the selected items are displayed, valid values are "comma" and "chip".</td>
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
                            <tr>
                                <td>filter</td>
                                <td>event.originalEvent: Original event <br />
                                    event.value: Filter value </td>
                                <td>Callback to invoke on filter input.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h5>Methods</h5>
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
                                <td>show</td>
                                <td>-</td>
                                <td>Shows the overlay.</td>
                            </tr>
                            <tr>
                                <td>Hide</td>
                                <td>-</td>
                                <td>Hides the overlay.</td>
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
                                <td>value</td>
                                <td>value: Value of the component <br />
                                    placeholder: Placeholder prop value</td>
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

				<h5>Dependencies</h5>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/2.x/src/views/multiselect" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;h5&gt;Basic&lt;/h5&gt;
&lt;MultiSelect v-model="selectedCities1" :options="cities" optionLabel="name" placeholder="Select a City" /&gt;

&lt;h5&gt;Chips&lt;/h5&gt;
&lt;MultiSelect v-model="selectedCities2" :options="cities" optionLabel="name" placeholder="Select a City" display="chip"/&gt;

&lt;h5&gt;Advanced with Templating and Filtering&lt;/h5&gt;
&lt;MultiSelect v-model="selectedCountries" :options="countries" optionLabel="name" placeholder="Select Countries" :filter="true" class="multiselect-custom"&gt;
    &lt;template #value="slotProps"&gt;
        &lt;div class="country-item country-item-value" v-for="option of slotProps.value" :key="option.code"&gt;
            &lt;img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + option.code.toLowerCase()" /&gt;
            &lt;div&gt;{{option.name}}&lt;/div&gt;
        &lt;/div&gt;
        &lt;template v-if="!slotProps.value || slotProps.value.length === 0"&gt;
            Select Countries
        &lt;/template&gt;
    &lt;/template&gt;
    &lt;template #option="slotProps"&gt;
        &lt;div class="country-item"&gt;
            &lt;img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.option.code.toLowerCase()" /&gt;
            &lt;div&gt;{{slotProps.option.name}}&lt;/div&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/MultiSelect&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
    data() {
        return {
            selectedCities: null,
            selectedCountries: null,
            cities: [
                {name: 'New York', code: 'NY'},
                {name: 'Rome', code: 'RM'},
                {name: 'London', code: 'LDN'},
                {name: 'Istanbul', code: 'IST'},
                {name: 'Paris', code: 'PRS'}
            ],
            countries: [
                {name: 'Australia', code: 'AU'},
                {name: 'Brazil', code: 'BR'},
                {name: 'China', code: 'CN'},
                {name: 'Egypt', code: 'EG'},
                {name: 'France', code: 'FR'},
                {name: 'Germany', code: 'DE'},
                {name: 'India', code: 'IN'},
                {name: 'Japan', code: 'JP'},
                {name: 'Spain', code: 'ES'},
                {name: 'United States', code: 'US'}
            ]
        }
    }
}
</CodeHighlight>

<CodeHighlight lang="css">
.p-multiselect {
    min-width: 15rem;
}

/deep/ .multiselect-custom {
    .p-multiselect-label:not(.p-placeholder) {
        padding-top: .25rem;
        padding-bottom: .25rem;
    }

    .country-item-value {
        padding: .25rem .5rem;
        border-radius: 3px;
        display: inline-flex;
        margin-right: .5rem;
        background-color: var(--primary-color);
        color: var(--primary-color-text);

        img.flag {
            width: 17px;
        }
    }
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>