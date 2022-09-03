<template>
    <AppDoc name="AutoCompleteDemo" :sources="sources" :service="['CountryService']" :data="['countries']" github="autocomplete/AutoCompleteDemo.vue">
        <h5>Import via Module</h5>
<pre v-code.script><code>
import AutoComplete from 'primevue/autocomplete';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/autocomplete/autocomplete.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>AutoComplete uses v-model for two-way binding, requires a list of suggestions and a complete method to query for the results. The complete method
			gets the query text as event.query property and should update the suggestions with the search results. Example below connects to a remote datasource to fetch the results;</p>
<pre v-code><code>
&lt;AutoComplete v-model="selectedCountry" :suggestions="filteredCountriesBasic" @complete="searchCountry($event)" optionLabel="name" /&gt;

</code></pre>
<pre v-code.script><code>
export default {
	data() {
		return {
			selectedCountry: null,
			filteredCountries: null
		}
	},
	countryService: null,
	created() {
		this.countryService = new CountryService();
	},
	methods: {
		searchCountry(event) {
            this.filteredCountriesBasic = this.countryService.search(event.query);
		}
	}
}

</code></pre>

		<h5>Dropdown</h5>
		<p>Enabling <i>dropdown</i> property displays a button next to the input field where click behavior of the button is defined using
			dropdownMode property that takes "blank" or "current" as possible values.
			"blank" is the default mode to send a query with an empty string whereas
			"current" setting sends a query with the current value of the input.</p>
<pre v-code><code>
&lt;AutoComplete v-model="brand" :dropdown="true" :suggestions="filteredBrands" @complete="searchBrand($event)" placeholder="Hint: type 'v' or 'f'" /&gt;

</code></pre>

		<h5>Multiple Mode</h5>
		<p>Multiple mode is enabled using <i>multiple</i> property to select more than one value from the autocomplete. In this case, value reference should be an array.</p>
<pre v-code><code>
&lt;AutoComplete :multiple="true" v-model="selectedCountries" :suggestions="filteredCountriesMultiple" @complete="searchCountryMultiple($event)" optionLabel="name" /&gt;

</code></pre>

		<h5>Objects</h5>
		<p>AutoComplete can also work with objects using the  <i>optionLabel</i> property that defines the label to display
			as a suggestion. The value passed to the model would still be the object instance of a suggestion.
			Here is an example with a Country object that has name and code fields such as &#123;name:"United States",code:"USA"&#125;.</p>
<pre v-code><code>
&lt;AutoComplete optionLabel="label" v-model="selectedCountry" :suggestions="filteredCountriesBasic" @complete="searchCountryBasic($event)" /&gt;

</code></pre>

        <h5>Grouping</h5>
		<p>Options groups are specified with the <i>optionGroupLabel</i> and <i>optionGroupChildren</i> properties.</p>
<pre v-code.script><code>
export default {
    data() {
        return {
            selectedGroupedCity: null,
            groupedCities: [{
                label: 'Germany', code: 'DE',
                items: [
                    {label: 'Berlin', value: 'Berlin'},
                    {label: 'Frankfurt', value: 'Frankfurt'},
                    {label: 'Hamburg', value: 'Hamburg'},
                    {label: 'Munich', value: 'Munich'}
                ]
            },
            {
                label: 'USA', code: 'US',
                items: [
                    {label: 'Chicago', value: 'Chicago'},
                    {label: 'Los Angeles', value: 'Los Angeles'},
                    {label: 'New York', value: 'New York'},
                    {label: 'San Francisco', value: 'San Francisco'}
                ]
            },
            {
                label: 'Japan', code: 'JP',
                items: [
                    {label: 'Kyoto', value: 'Kyoto'},
                    {label: 'Osaka', value: 'Osaka'},
                    {label: 'Tokyo', value: 'Tokyo'},
                    {label: 'Yokohama', value: 'Yokohama'}
                ]
            }]
        }
    }
}
</code></pre>

<pre v-code><code><template v-pre>
&lt;AutoComplete v-model="selectedCity" :suggestions="filteredCities" @complete="searchCity($event)"
    optionLabel="label" optionGroupLabel="label" optionGroupChildren="items"&gt;&lt;/AutoComplete&gt;
</template>
</code></pre>

        <h5>Force Selection</h5>
        <p>ForceSelection mode validates the manual input to check whether it also exists in the suggestions list, if not the input value is cleared
        to make sure the value passed to the model is always one of the suggestions. Simply enable <i>forceSelection</i> to enforce that input is always from the suggestion list.</p>
<pre v-code><code>
&lt;AutoComplete forceSelection v-model="brand" :suggestions="filteredBrands" @complete="searchBrand($event)" /&gt;

</code></pre>

		<h5>Templating</h5>
		<p>Item template allows displaying custom content inside the suggestions panel. The slotProps variable passed to the template provides an item property to represent an item in the suggestions collection.
            In addition <i>optiongroup</i>, <i>chip</i>, <i>header</i> and <i>footer</i> slots are provided for further customization</p>
<pre v-code><code><template v-pre>
&lt;AutoComplete v-model="brand" :suggestions="filteredBrands" @complete="searchBrand($event)" placeholder="Hint: type 'v' or 'f'" :dropdown="true"&gt;
    &lt;template #item="slotProps"&gt;
		&lt;img :alt="slotProps.item" :src="'demo/images/car/' + slotProps.item + '.png'" /&gt;
        &lt;div&gt;{{slotProps.item}}&lt;/div&gt;
	&lt;/template&gt;
&lt;/AutoComplete&gt;
</template>
</code></pre>

		<h5>Properties</h5>
        <p>Any property of HTMLDivElement are passed to the main container element. Following are the additional properties to configure the component.</p>
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
                        <td>suggestions</td>
                        <td>array</td>
                        <td>null</td>
                        <td>An array of suggestions to display.</td>
                    </tr>
                    <tr>
                        <td>field</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Property name or getter function of a suggested object to resolve and display. <small>*Deprecated since v3.16.0. Use 'optionLabel' property instead.</small></td>
                    </tr>
                    <tr>
                        <td>optionLabel</td>
                        <td>string | function</td>
                        <td>null</td>
                        <td>Property name or getter function to use as the label of an option.</td>
                    </tr>
                    <tr>
                        <td>optionDisabled</td>
                        <td>string | function</td>
                        <td>null</td>
                        <td>Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.</td>
                    </tr>
                    <tr>
                        <td>optionGroupLabel</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Property name or getter function to use as the label of an option group.</td>
                    </tr>
                    <tr>
                        <td>optionGroupChildren</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Property name or getter function that refers to the children options of option group.</td>
                    </tr>
                    <tr>
                        <td>scrollHeight</td>
                        <td>string</td>
                        <td>200px</td>
                        <td>Maximum height of the suggestions panel.</td>
                    </tr>
                    <tr>
                        <td>dropdown</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Displays a button next to the input field when enabled.</td>
                    </tr>
                    <tr>
                        <td>dropdownMode</td>
                        <td>string</td>
                        <td>blank</td>
                        <td>Specifies the behavior dropdown button. Default "blank" mode sends an empty string and "current" mode sends the input value.</td>
                    </tr>
                    <tr>
                        <td>autoHighlight</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Highlights automatically the first item of the dropdown to be selected. <small>*Deprecated since v3.16.0.</small></td>
                    </tr>
                    <tr>
                        <td>multiple</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Specifies if multiple values can be selected.</td>
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
                        <td>minLength</td>
                        <td>number</td>
                        <td>1</td>
                        <td>Minimum number of characters to initiate a search.</td>
                    </tr>
                    <tr>
                        <td>delay</td>
                        <td>number</td>
                        <td>300</td>
                        <td>Delay between keystrokes to wait before sending a query.</td>
                    </tr>
                    <tr>
                        <td>appendTo</td>
                        <td>string</td>
                        <td>body</td>
                        <td>A valid query selector or an HTMLElement to specify where the overlay gets attached. Special keywords are "body" for document body
                        and "self" for the element itself.</td>
                    </tr>
                    <tr>
                        <td>forceSelection</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When present, autocomplete clears the manual input if it does not match of the suggestions to force only
                        accepting values from the suggestions.</td>
                    </tr>
                    <tr>
                        <td>completeOnFocus</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Whether to run a query when input receives focus.</td>
                    </tr>
                    <tr>
                        <td>inputId</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Identifier of the underlying input element.</td>
                    </tr>
                    <tr>
                        <td>inputStyle</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Inline style of the input field.</td>
                    </tr>
                    <tr>
                        <td>inputClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of the input field.</td>
                    </tr>
                    <tr>
                        <td>inputProps</td>
                        <td>object</td>
                        <td>null</td>
                        <td>Uses to pass all properties of the HTMLInputElement/HTMLSpanElement to the focusable input element inside the component.</td>
                    </tr>
                    <tr>
                        <td>panelStyle</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Inline style of the overlay panel.</td>
                    </tr>
                    <tr>
                        <td>panelClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of the overlay panel.</td>
                    </tr>
                    <tr>
                        <td>panelProps</td>
                        <td>object</td>
                        <td>null</td>
                        <td>Uses to pass all properties of the HTMLDivElement to the overlay panel.</td>
                    </tr>
                    <tr>
                        <td>loadingIcon</td>
                        <td>string</td>
                        <td>pi pi-spinner</td>
                        <td>Icon class used when loading</td>
                    </tr>
                    <tr>
                        <td>virtualScrollerOptions</td>
                        <td>object</td>
                        <td>null</td>
                        <td>Whether to use the virtualScroller feature. The properties of <router-link to="/virtualscroller">VirtualScroller</router-link> component can be used like an object in it.</td>
                    </tr>
                    <tr>
                        <td>autoOptionFocus</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Whether to focus on the first visible or selected element when the overlay panel is shown.</td>
                    </tr>
                    <tr>
                        <td>selectOnFocus</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When enabled, the focused option is selected.</td>
                    </tr>
                    <tr>
                        <td>searchLocale</td>
                        <td>string</td>
                        <td>undefined</td>
                        <td>Locale to use in searching. The default locale is the host environment's current locale.</td>
                    </tr>
                    <tr>
                        <td>searchMessage</td>
                        <td>string</td>
                        <td>{0} results are available</td>
                        <td>Text to be displayed in hidden accessible field when filtering returns any results. Defaults to value from PrimeVue locale configuration.</td>
                    </tr>
                    <tr>
                        <td>selectionMessage</td>
                        <td>string</td>
                        <td>{0} items selected</td>
                        <td>Text to be displayed in hidden accessible field when options are selected. Defaults to value from PrimeVue locale configuration.</td>
                    </tr>
                    <tr>
                        <td>emptySelectionMessage</td>
                        <td>string</td>
                        <td>No selected item</td>
                        <td>Text to be displayed in hidden accessible field when any option is not selected. Defaults to value from PrimeVue locale configuration.</td>
                    </tr>
                    <tr>
                        <td>emptySearchMessage</td>
                        <td>string</td>
                        <td>No results found</td>
                        <td>Text to be displayed when filtering does not return any results. Defaults to value from PrimeVue locale configuration.</td>
                    </tr>
                    <tr>
                        <td>tabindex</td>
                        <td>number</td>
                        <td>0</td>
                        <td>Index of the element in tabbing order.</td>
                    </tr>
                    <tr>
                        <td>aria-label</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Defines a string value that labels an interactive element.</td>
                    </tr>
                    <tr>
                        <td>aria-labelledby</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Establishes relationships between the component and label(s) where its value should be one or more element IDs.</td>
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
                        <td>focus</td>
                        <td>event</td>
                        <td>Callback to invoke when the component receives focus.</td>
                    </tr>
                    <tr>
                        <td>blur</td>
                        <td>event</td>
                        <td>Callback to invoke when the component loses focus.</td>
                    </tr>
                    <tr>
                        <td>item-select</td>
                        <td>event.originalEvent: Browser event <br />
                            event.value: Selected item</td>
                        <td>Callback to invoke when a suggestion is selected.</td>
                    </tr>
                    <tr>
                        <td>item-unselect</td>
                        <td>event.originalEvent: Browser event <br />
                            event.value: Unselected item</td>
                        <td>Callback to invoke when a selected value is removed.</td>
                    </tr>
                    <tr>
                        <td>dropdown-click</td>
                        <td>
                            event.originalEvent: browser event <br />
                            event.query: Current value of the input field
                        </td>
                        <td>Callback to invoke to when dropdown button is clicked.</td>
                    </tr>
                    <tr>
                        <td>clear</td>
                        <td>-</td>
                        <td>Callback to invoke when input is cleared by the user.</td>
                    </tr>
                    <tr>
                        <td>complete</td>
                        <td>
                            event.originalEvent: Browser event <br />
                            event.query: Value to search with
                        </td>
                        <td>Callback to invoke to search for suggestions.</td>
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
                        <td>chip</td>
                        <td>value: A value in the selection</td>
                    </tr>
                    <tr>
                        <td>header</td>
                        <td>value: Value of the component <br />
                            suggestions: Displayed options</td>
                    </tr>
                    <tr>
                        <td>footer</td>
                        <td>value: Value of the component <br />
                            suggestions: Displayed options</td>
                    </tr>
                    <tr>
                        <td>item <small>*Deprecated since v3.16.0</small></td>
                        <td>item: Option instance <br />
                            index: Index of the option</td>
                    </tr>
                    <tr>
                        <td>option</td>
                        <td>option: Option instance <br />
                            index: Index of the option</td>
                    </tr>
                    <tr>
                        <td>optiongroup</td>
                        <td>item: OptionGroup instance <small>*Deprecated since v3.16.0</small><br />
                            option: OptionGroup instance <br />
                            index: Index of the option group</td>
                    </tr>
                    <tr>
                        <td>content</td>
                        <td>items: An array of objects to display for virtualscroller<br />
                            styleClass: Style class of the component<br />
                            contentRef: Referance of the content<br />
                            getItemOptions: Options of the items</td>
                    </tr>
                    <tr>
                        <td>loader</td>
                        <td>options: Options of the loader items for virtualscroller</td>
                    </tr>
				</tbody>
			</table>
        </div>

		<h5>Styling</h5>
		<p>Following is the list of structural style classes</p>
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
                        <td>p-autocomplete</td>
                        <td>Container element</td>
                    </tr>
                    <tr>
                        <td>p-autocomplete-panel</td>
                        <td>Overlay panel of suggestions.</td>
                    </tr>
                    <tr>
                        <td>p-autocomplete-items</td>
                        <td>List container of suggestions.</td>
                    </tr>
                    <tr>
                        <td>p-autocomplete-item</td>
                        <td>List item of a suggestion.</td>
                    </tr>
                    <tr>
                        <td>p-autocomplete-token</td>
                        <td>Element of a selected item in multiple mode.</td>
                    </tr>
                    <tr>
                        <td>p-autocomplete-token-icon</td>
                        <td>Close icon element of a selected item in multiple mode.</td>
                    </tr>
                    <tr>
                        <td>p-autocomplete-token-label</td>
                        <td>Label of a selected item in multiple mode.</td>
                    </tr>
                    <tr>
                        <td>p-overlay-open</td>
                        <td>Container element when overlay is visible.</td>
                    </tr>
				</tbody>
			</table>
		</div>

        <h5>Accessibility</h5>
        <h6>Screen Reader</h6>
        <p>Value to describe the component can either be provided via <i>label</i> tag combined with <i>inputId</i> prop or using <i>aria-labelledby</i>, <i>aria-label</i> props. The input element has <i>combobox</i> role
        in addition to <i>aria-autocomplete</i>, <i>aria-haspopup</i> and <i>aria-expanded</i> attributes. The relation between the input and the popup is created with <i>aria-controls</i> and <i>aria-activedescendant</i> attribute is used
        to instruct screen reader which option to read during keyboard navigation within the popup list.</p>
        <p>In multiple mode, chip list uses <i>listbox</i> role with <i>aria-orientation</i> set to horizontal whereas each chip has the <i>option</i> role with <i>aria-label</i> set to the label of the chip.</p>
        <p>The popup list has an id that refers to the <i>aria-controls</i> attribute of the input element and uses <i>listbox</i> as the role. Each list item has <i>option</i> role and an id to match the <i>aria-activedescendant</i> of the input element.</p>

<pre v-code><code>
&lt;label for="ac1"&gt;Username&lt;/label&gt;
&lt;AutoComplete inputId="ac1" /&gt;

&lt;span id="ac2"&gt;Email&lt;/span&gt;
&lt;AutoComplete aria-labelledby="ac2" /&gt;

&lt;AutoComplete aria-label="City" /&gt;

</code></pre>

        <h6>Closed State Keyboard Support</h6>
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
                        <td>Moves focus to the autocomplete element.</td>
                    </tr>
                    <tr>
                        <td><i>any printable character</i></td>
                        <td>Opens the popup and moves focus to the first option.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h6>Popup Keyboard Support</h6>
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
                        <td>Moves focus to the next focusable element in the popup. If there is none, the focusable option is selected and the overlay is closed then moves focus to next element in page.</td>
                    </tr>
                    <tr>
                        <td><i>shift</i> + <i>tab</i></td>
                        <td>Moves focus to the previous focusable element in the popup. If there is none, the focusable option is selected and the overlay is closed then moves focus to next element in page.</td>
                    </tr>
                    <tr>
                        <td><i>enter</i></td>
                        <td>Selects the focused option and closes the popup, then moves focus to the autocomplete element.</td>
                    </tr>
                    <tr>
                        <td><i>space</i></td>
                        <td>Selects the focused option and closes the popup, then moves focus to the autocomplete element.</td>
                    </tr>
                    <tr>
                        <td><i>escape</i></td>
                        <td>Closes the popup, then moves focus to the autocomplete element.</td>
                    </tr>
                    <tr>
                        <td><i>down arrow</i></td>
                        <td>Moves focus to the next option, if there is none then visual focus does not change.</td>
                    </tr>
                    <tr>
                        <td><i>up arrow</i></td>
                        <td>Moves focus to the previous option, if there is none then visual focus does not change.</td>
                    </tr>
                    <tr>
                        <td><i>alt</i> + <i>up arrow</i></td>
                        <td>Selects the focused option and closes the popup, then moves focus to the autocomplete element.</td>
                    </tr>
                    <tr>
                        <td><i>left arrow</i></td>
                        <td>Removes the visual focus from the current option and moves input cursor to one character left.</td>
                    </tr>
                    <tr>
                        <td><i>right arrow</i></td>
                        <td>Removes the visual focus from the current option and moves input cursor to one character right.</td>
                    </tr>
                    <tr>
                        <td><i>home</i></td>
                        <td>Moves input cursor at the end, if not then moves focus to the first option.</td>
                    </tr>
                    <tr>
                        <td><i>end</i></td>
                        <td>Moves input cursor at the beginning, if not then moves focus to the last option.</td>
                    </tr>
                    <tr>
                        <td><i>pageUp</i></td>
                        <td>Jumps visual focus to first option.</td>
                    </tr>
                    <tr>
                        <td><i>pageDown</i></td>
                        <td>Jumps visual focus to last option.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h6>Chips Input Keyboard Support</h6>
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
                        <td><i>backspace</i></td>
                        <td>Deletes the previous chip if the input field is empty.</td>
                    </tr>
                    <tr>
                        <td><i>left arrow</i></td>
                        <td>Moves focus to the previous chip if available and input field is empty.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h6>Chip Keyboard Support</h6>
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
                        <td><i>left arrow</i></td>
                        <td>Moves focus to the previous chip if available.</td>
                    </tr>
                    <tr>
                        <td><i>right arrow</i></td>
                        <td>Moves focus to the next chip, if there is none then input field receives the focus.</td>
                    </tr>
                    <tr>
                        <td><i>backspace</i></td>
                        <td>Deletes the chips and adds focus to the input field.</td>
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
            sources:{
                'options-api': {
                    tabName: 'Options API Source',
                    content:`
<template>
    <div>
        <div>
            <h5>Basic</h5>
            <AutoComplete v-model="selectedCountry1" :suggestions="filteredCountries" @complete="searchCountry($event)" optionLabel="name" />

            <h5>Grouped</h5>
            <AutoComplete v-model="selectedCity" :suggestions="filteredCities" @complete="searchCity($event)" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items">
                <template #optiongroup="slotProps">
                    <div class="flex align-items-center country-item">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="18" />
                        <div class="ml-2">{{slotProps.item.label}}</div>
                    </div>
                </template>
            </AutoComplete>

            <h5>Dropdown, Templating and Force Selection</h5>
            <AutoComplete v-model="selectedCountry2" :suggestions="filteredCountries" @complete="searchCountry($event)" :dropdown="true" optionLabel="name" forceSelection>
                <template #item="slotProps">
                    <div class="country-item">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="18" />
                        <div class="ml-2">{{slotProps.item.name}}</div>
                    </div>
                </template>
            </AutoComplete>

            <h5>Virtual Scroll (1000 Items)</h5>
            <AutoComplete v-model="selectedItem" :suggestions="filteredItems" @complete="searchItems" :virtualScrollerOptions="{ itemSize: 38 }" optionLabel="label" dropdown />

            <h5>Multiple</h5>
            <span class="p-fluid">
                <AutoComplete :multiple="true" v-model="selectedCountries" :suggestions="filteredCountries" @complete="searchCountry($event)" optionLabel="name" />
            </span>
        </div>
    </div>
</template>

<script>
import CountryService from './service/CountryService';
import {FilterService,FilterMatchMode} from 'primevue/api';

export default {
    data() {
        return {
            countries: null,
            selectedCountry1: null,
            selectedCountry2: null,
            selectedCity: null,
            filteredCities: null,
            filteredCountries: null,
            selectedCountries: [],
            selectedItem: null,
            filteredItems: null,
            groupedCities: [{
                label: 'Germany', code: 'DE',
                items: [
                    {label: 'Berlin', value: 'Berlin'},
                    {label: 'Frankfurt', value: 'Frankfurt'},
                    {label: 'Hamburg', value: 'Hamburg'},
                    {label: 'Munich', value: 'Munich'}
                ]
            },
            {
                label: 'USA', code: 'US',
                items: [
                    {label: 'Chicago', value: 'Chicago'},
                    {label: 'Los Angeles', value: 'Los Angeles'},
                    {label: 'New York', value: 'New York'},
                    {label: 'San Francisco', value: 'San Francisco'}
                ]
            },
            {
                label: 'Japan', code: 'JP',
                items: [
                    {label: 'Kyoto', value: 'Kyoto'},
                    {label: 'Osaka', value: 'Osaka'},
                    {label: 'Tokyo', value: 'Tokyo'},
                    {label: 'Yokohama', value: 'Yokohama'}
                ]
            }],
            items: Array.from({ length: 1000 }, (_, i) => ({ label: \`Item #\${i}\`, value: i }))
        }
    },
    countryService: null,
    created() {
        this.countryService = new CountryService();
    },
    mounted() {
        this.countryService.getCountries().then(data => this.countries = data);
    },
    methods: {
        searchCountry(event) {
            setTimeout(() => {
                if (!event.query.trim().length) {
                    this.filteredCountries = [...this.countries];
                }
                else {
                    this.filteredCountries = this.countries.filter((country) => {
                        return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                    });
                }
            }, 250);
        },
        searchCity(event) {
            let query = event.query;
            let filteredCities = [];

            for (let country of this.groupedCities) {
                let filteredItems = FilterService.filter(country.items, ['label'], query, FilterMatchMode.CONTAINS);
                if (filteredItems && filteredItems.length) {
                    filteredCities.push({...country, ...{items: filteredItems}});
                }
            }

            this.filteredCities = filteredCities;
        },
        searchItems(event) {
            //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
            let query = event.query;
            let filteredItems = [];

            for(let i = 0; i < this.items.length; i++) {
                let item = this.items[i];
                if (item.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                    filteredItems.push(item);
                }
            }

            this.filteredItems = filteredItems;
        }
    }
}
<\\/script>`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content:`
<template>
    <div>
        <div>
            <h5>Basic</h5>
            <AutoComplete v-model="selectedCountry1" :suggestions="filteredCountries" @complete="searchCountry($event)" optionLabel="name" />

            <h5>Grouped</h5>
            <AutoComplete v-model="selectedCity" :suggestions="filteredCities" @complete="searchCity($event)" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items">
                <template #optiongroup="slotProps">
                    <div class="flex align-items-center country-item">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="18" />
                        <div class="ml-2">{{slotProps.item.label}}</div>
                    </div>
                </template>
            </AutoComplete>

            <h5>Dropdown, Templating and Force Selection</h5>
            <AutoComplete v-model="selectedCountry2" :suggestions="filteredCountries" @complete="searchCountry($event)" :dropdown="true" optionLabel="name" forceSelection>
                <template #item="slotProps">
                    <div class="country-item">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="18" />
                        <div class="ml-2">{{slotProps.item.name}}</div>
                    </div>
                </template>
            </AutoComplete>

            <h5>Virtual Scroll (1000 Items)</h5>
            <AutoComplete v-model="selectedItem" :suggestions="filteredItems" @complete="searchItems" :virtualScrollerOptions="{ itemSize: 38 }" optionLabel="label" dropdown />

            <h5>Multiple</h5>
            <span class="p-fluid">
                <AutoComplete :multiple="true" v-model="selectedCountries" :suggestions="filteredCountries" @complete="searchCountry($event)" optionLabel="name" />
            </span>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import CountryService from './service/CountryService';
import {FilterService,FilterMatchMode} from 'primevue/api';

export default {
    setup() {
        onMounted(() => {
            countryService.value.getCountries().then(data => countries.value = data);
        })

        const countries = ref();
        const countryService = ref(new CountryService());
        const selectedCountry1 = ref();
        const selectedCountry2 = ref();
        const selectedCity = ref();
        const filteredCities = ref();
        const filteredCountries = ref();
        const selectedCountries = ref([]);
        const selectedItem = ref();
        const filteredItems = ref();
        const groupedCities = ref ([{
            label: 'Germany', code: 'DE',
            items: [
                {label: 'Berlin', value: 'Berlin'},
                {label: 'Frankfurt', value: 'Frankfurt'},
                {label: 'Hamburg', value: 'Hamburg'},
                {label: 'Munich', value: 'Munich'}
            ]
        },
        {
            label: 'USA', code: 'US',
            items: [
                {label: 'Chicago', value: 'Chicago'},
                {label: 'Los Angeles', value: 'Los Angeles'},
                {label: 'New York', value: 'New York'},
                {label: 'San Francisco', value: 'San Francisco'}
            ]
        },
        {
            label: 'Japan', code: 'JP',
            items: [
                {label: 'Kyoto', value: 'Kyoto'},
                {label: 'Osaka', value: 'Osaka'},
                {label: 'Tokyo', value: 'Tokyo'},
                {label: 'Yokohama', value: 'Yokohama'}
            ]
        }]);
        const items = Array.from({ length: 1000 }, (_, i) => ({ label: \`Item #\${i}\`, value: i }));

        const searchCountry = (event) => {
            setTimeout(() => {
                if (!event.query.trim().length) {
                    filteredCountries.value = [...countries.value];
                }
                else {
                    filteredCountries.value = countries.value.filter((country) => {
                        return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                    });
                }
            }, 250);
        };
        const searchCity = (event) => {
            let query = event.query;
            let newFilteredCities = [];

            for (let country of groupedCities.value) {
                let filteredItems = FilterService.filter(country.items, ['label'], query, FilterMatchMode.CONTAINS);
                if (filteredItems && filteredItems.length) {
                    newFilteredCities.push({...country, ...{items: filteredItems}});
                }
            }

            filteredCities.value = newFilteredCities;
        }
        const searchItems = (event) => {
            //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
            let query = event.query;
            let _filteredItems = [];

            for(let i = 0; i < this.items.length; i++) {
                let item = this.items[i];
                if (item.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                    _filteredItems.push(item);
                }
            }

            filteredItems.value = _filteredItems;
        }

        return { countries, countryService, selectedCountry1, selectedCountry2, selectedCity, filteredCities, filteredCountries, selectedCountries, groupedCities, searchCountry, searchCity, searchItems, selectedItem, filteredItems, items }
    }
}
<\\/script>`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/autocomplete/autocomplete.min.js"><\\/script>
        <script src="./CountryService.js"><\\/script>`,
                    content:`<div id="app">
            <h5>Basic</h5>
            <p-autocomplete v-model="selectedCountry1" :suggestions="filteredCountries" @complete="searchCountry($event)" optionLabel="name"></p-autocomplete>

            <h5>Grouped</h5>
            <p-autocomplete v-model="selectedCity" :suggestions="filteredCities" @complete="searchCity($event)" optionLabel="label" option-group-label="label" option-group-children="items">
                <template #optiongroup="slotProps">
                    <div class="flex align-items-center country-item">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="18" />
                        <div class="ml-2">{{slotProps.item.label}}</div>
                    </div>
                </template>
            </p-autocomplete>

            <h5>Dropdown, Templating and Force Selection</h5>
            <p-autocomplete v-model="selectedCountry2" :suggestions="filteredCountries" @complete="searchCountry($event)" :dropdown="true" optionLabel="name" force-selection>
                <template #item="slotProps">
                    <div class="country-item">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="18" />
                        <div class="ml-2">{{slotProps.item.name}}</div>
                    </div>
                </template>
            </p-autocomplete>

            <h5>Virtual Scroll (1000 Items)</h5>
            <p-autocomplete v-model="selectedItem" :suggestions="filteredItems" @complete="searchItems" :virtual-scroller-options="{ itemSize: 38 }" optionLabel="label" dropdown></p-autocomplete>

            <h5>Multiple</h5>
            <span class="p-fluid">
                <p-autocomplete :multiple="true" v-model="selectedCountries" :suggestions="filteredCountries" @complete="searchCountry($event)" optionLabel="name"></p-autocomplete>
            </span>
        </div>

        <script type="module">
        const { createApp, ref, onMounted } = Vue;
        const { FilterService,FilterMatchMode } = primevue.api;

        const App = {
            setup() {
                onMounted(() => {
                    countryService.value.getCountries().then(data => countries.value = data);
                })

                const countries = ref();
                const countryService = ref(new CountryService());
                const selectedCountry1 = ref();
                const selectedCountry2 = ref();
                const selectedCity = ref();
                const filteredCities = ref();
                const filteredCountries = ref();
                const selectedCountries = ref([]);
                const selectedItem = ref();
                const filteredItems = ref();
                const groupedCities = ref ([{
                    label: 'Germany', code: 'DE',
                    items: [
                        {label: 'Berlin', value: 'Berlin'},
                        {label: 'Frankfurt', value: 'Frankfurt'},
                        {label: 'Hamburg', value: 'Hamburg'},
                        {label: 'Munich', value: 'Munich'}
                    ]
                },
                {
                    label: 'USA', code: 'US',
                    items: [
                        {label: 'Chicago', value: 'Chicago'},
                        {label: 'Los Angeles', value: 'Los Angeles'},
                        {label: 'New York', value: 'New York'},
                        {label: 'San Francisco', value: 'San Francisco'}
                    ]
                },
                {
                    label: 'Japan', code: 'JP',
                    items: [
                        {label: 'Kyoto', value: 'Kyoto'},
                        {label: 'Osaka', value: 'Osaka'},
                        {label: 'Tokyo', value: 'Tokyo'},
                        {label: 'Yokohama', value: 'Yokohama'}
                    ]
                }]);
                const items = Array.from({ length: 1000 }, (_, i) => ({ label: \`Item #\${i}\`, value: i }));

                const searchCountry = (event) => {
                    setTimeout(() => {
                        if (!event.query.trim().length) {
                            filteredCountries.value = [...countries.value];
                        }
                        else {
                            filteredCountries.value = countries.value.filter((country) => {
                                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                            });
                        }
                    }, 250);
                };
                const searchCity = (event) => {
                    let query = event.query;
                    let newFilteredCities = [];

                    for (let country of groupedCities.value) {
                        let filteredItems = FilterService.filter(country.items, ['label'], query, FilterMatchMode.CONTAINS);
                        if (filteredItems && filteredItems.length) {
                            newFilteredCities.push({...country, ...{items: filteredItems}});
                        }
                    }

                    filteredCities.value = newFilteredCities;
                };
                const searchItems = (event) => {
                    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
                    let query = event.query;
                    let _filteredItems = [];

                    for(let i = 0; i < this.items.length; i++) {
                        let item = this.items[i];
                        if (item.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                            _filteredItems.push(item);
                        }
                    }

                    filteredItems.value = _filteredItems;
                }

                return { countries, countryService, selectedCountry1, selectedCountry2, selectedCity, filteredCities, filteredCountries, selectedCountries, groupedCities, searchCountry, searchCity, searchItems, selectedItem, filteredItems, items }
            },
            components: {
                "p-autocomplete": primevue.autocomplete
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>`
                }
            }
        }
    }
}
</script>
