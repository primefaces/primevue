<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<pre v-code.script>
<code>
import Dropdown from 'primevue/dropdown';

</code></pre>

				<h5>Getting Started</h5>
				<p>Dropdown requires a value to bind and a collection of arbitrary objects along with the <i>optionLabel</i> property to specify the label property of the option.</p>
<pre v-code>
<code>
&lt;Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" /&gt;

</code></pre>

<pre v-code.script>
<code>
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

</code></pre>

				<h5>Placeholder</h5>
				<p>Common pattern is providing an empty option as the placeholder when using native selects, however Dropdown has built-in support using the placeholder option so it is suggested to use it instead of creating an empty option.</p>

				<h5>Filtering</h5>
				<p>Options can be filtered using an input field in the overlay by enabling the <i>filter</i> property.</p>

<pre v-code>
<code>
&lt;Dropdown v-model="selectedCar" :options="cars" optionLabel="brand" placeholder="Select a Car" :filter="true" filterPlaceholder="Find Car"/&gt;

</code></pre>

				<h5>Custom Content</h5>
				<p>Label of an option is used as the display text of an item by default, for custom content support define an <i>option</i> template that gets the option instance as a parameter.</p>
                <p>In addition the <i>value</i> template can be used to customize the selected value.</p>
<pre v-code>
<code><template v-pre>
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
                                <td>A property to uniquely identify an option.</td>
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
                            <tr>
                                <td>emptyFilterMessage</td>
                                <td>string</td>
                                <td>No results found</td>
                                <td>Text to display when filtering does not return any results.</td>
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

				<h5>Dependencies</h5>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
                <div class="p-d-flex p-jc-between">
                    <a href="https://github.com/primefaces/primevue/tree/master/src/views/dropdown" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
                        <span>View on GitHub</span>
                    </a>
                    <LiveEditor name="DropdownDemo" :sources="sources"/>
                </div>
<pre v-code>
<code><template v-pre>
&lt;h5&gt;Basic&lt;/h5&gt;
&lt;Dropdown v-model="selectedCity1" :options="cities" optionLabel="name" placeholder="Select a City" /&gt;

&lt;h5&gt;Editable&lt;/h5&gt;
&lt;Dropdown v-model="selectedCity2" :options="cities" optionLabel="name" :editable="true"/&gt;

&lt;h5&gt;Advanced with Templating, Filtering and Clear Icon&lt;/h5&gt;
&lt;Dropdown v-model="selectedCountry" :options="countries" optionLabel="name" :filter="true" placeholder="Select a Country" :showClear="true"&gt;
    &lt;template #value="slotProps"&gt;
        &lt;div class="country-item country-item-value" v-if="slotProps.value"&gt;
            &lt;img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.value.code.toLowerCase()" /&gt;
            &lt;div&gt;{{slotProps.value.name}}&lt;/div&gt;
        &lt;/div&gt;
        &lt;span v-else&gt;
            {{slotProps.placeholder}}
        &lt;/span&gt;
    &lt;/template&gt;
    &lt;template #option="slotProps"&gt;
        &lt;div class="country-item"&gt;
            &lt;img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.option.code.toLowerCase()" /&gt;
            &lt;div&gt;{{slotProps.option.name}}&lt;/div&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/Dropdown&gt;
</template>
</code></pre>

<pre v-code.script>
<code>
export default {
    data() {
        return {
            selectedCity1: null,
            selectedCity2: null,
            selectedCountry: null,
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
    },
}

</code></pre>
			</TabPanel>
		</TabView>
	</div>
</template>

<script>
import LiveEditor from '../liveeditor/LiveEditor';
export default {
    data() {
        return {
            sources: {
                'template': {
                    content: `<template>
    <div class="layout-content">
        <div class="content-section implementation">
            <div class="card">
                <h5>Basic</h5>
                <Dropdown v-model="selectedCity1" :options="cities" optionLabel="name" optionValue="code" placeholder="Select a City" />

                <h5>Editable</h5>
                <Dropdown v-model="selectedCity2" :options="cities" optionLabel="name" :editable="true"/>

                <h5>Advanced with Templating, Filtering and Clear Icon</h5>
                <Dropdown v-model="selectedCountry" :options="countries" optionLabel="name" :filter="true" placeholder="Select a Country" :showClear="true">
                    <template #value="slotProps">
                        <div class="country-item country-item-value" v-if="slotProps.value">
                            <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" />
                            <div>{{ slotProps.value.name }}</div>
                        </div>
                    </template>
                    <template #option="slotProps">
                      <div class="country-item">
                        <div class="country-item">
                            <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" />
                            <div>{{ slotProps.option.name }}</div>
                        </div>
                      </div>
                    </template>
                </Dropdown>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCity1: null,
            selectedCity2: null,
            selectedCountry: null,
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
`,
                    style: `<style lang="scss" scoped>
.p-dropdown {
    width: 14rem;
}

.country-item,
.country-item-value {
    img {
        width: 17px;
        margin-right: 0.5rem;
    }
}
</style>`
                }
            }
        }
    },
    components: {
        LiveEditor
    }
}
</script>