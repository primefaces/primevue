<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<CodeHighlight lang="javascript">
import AutoComplete from 'primevue/autocomplete';
</CodeHighlight>

				<h5>Getting Started</h5>
				<p>AutoComplete uses v-model for two-way binding, requires a list of suggestions and a complete method to query for the results. The complete method
					gets the query text as event.query property and should update the suggestions with the search results. Example below connects to a remote datasource to fetch the results;</p>
<CodeHighlight>
&lt;AutoComplete v-model="selectedCountry" :suggestions="filteredCountriesBasic" @complete="searchCountry($event)" field="name" /&gt;
</CodeHighlight>
<CodeHighlight lang="js">
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
</CodeHighlight>

				<h5>Dropdown</h5>
				<p>Enabling <i>dropdown</i> property displays a button next to the input field where click behavior of the button is defined using
					dropdownMode property that takes "blank" or "current" as possible values.
					"blank" is the default mode to send a query with an empty string whereas
					"current" setting sends a query with the current value of the input.</p>
<CodeHighlight>
&lt;AutoComplete v-model="brand" :dropdown="true" :suggestions="filteredBrands" @complete="searchBrand($event)" placeholder="Hint: type 'v' or 'f'" /&gt;
</CodeHighlight>

				<h5>Multiple Mode</h5>
				<p>Multiple mode is enabled using <i>multiple</i> property to select more than one value from the autocomplete. In this case, value reference should be an array.</p>
<CodeHighlight>
&lt;AutoComplete :multiple="true" v-model="selectedCountries" :suggestions="filteredCountriesMultiple" @complete="searchCountryMultiple($event)" field="name" /&gt;
</CodeHighlight>

				<h5>Objects</h5>
				<p>AutoComplete can also work with objects using the  <i>field</i> property that defines the label to display
					as a suggestion. The value passed to the model would still be the object instance of a suggestion.
					Here is an example with a Country object that has name and code fields such as &#123;name:"United States",code:"USA"&#125;.</p>
<CodeHighlight>
&lt;AutoComplete field="label" v-model="selectedCountry" :suggestions="filteredCountriesBasic" @complete="searchCountryBasic($event)" /&gt;
</CodeHighlight>

				<h5>Templating</h5>
				<p>Item template allows displaying custom content inside the suggestions panel. The slotProps variable passed to the template provides an item property to represent an item in the suggestions collection.</p>
<CodeHighlight>
<template v-pre>
&lt;AutoComplete v-model="brand" :suggestions="filteredBrands" @complete="searchBrand($event)" placeholder="Hint: type 'v' or 'f'" :dropdown="true"&gt;
	&lt;template #item="slotProps"&gt;
		&lt;img :alt="slotProps.item" :src="'demo/images/car/' + slotProps.item + '.png'" /&gt;
        &lt;div&gt;{{slotProps.item}}&lt;/div&gt;
	&lt;/template&gt;
&lt;/AutoComplete&gt;
</template>
</CodeHighlight>

				<h5>Properties</h5>
                <p>Any property such as name and placeholder are passed to the underlying input element. Following are the additional properties to configure the component.</p>
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
                                <td>suggestions</td>
                                <td>array</td>
                                <td>null</td>
                                <td>An array of suggestions to display.</td>
                            </tr>
                            <tr>
                                <td>field</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Property name or getter function of a suggested object to resolve and display.</td>
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
                                <td>multiple</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Specifies if multiple values can be selected.</td>
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

				<h5>Events</h5>
                <p>Any valid event such as focus, blur and input are passed to the underlying input element. Following are the additional events to configure the component.</p>
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
                                <td>complete</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    event.query: Value to search with
                                </td>
                                <td>Callback to invoke to search for suggestions.</td>
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
                                <td>event: Browser event</td>
                                <td>Callback to invoke when input is cleared by the user.</td>
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
						</tbody>
					</table>
				</div>

				<h5>Dependencies</h5>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/2.x/src/views/autocomplete" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;h5&gt;Basic&lt;/h5&gt;
&lt;AutoComplete v-model="selectedCountry1" :suggestions="filteredCountries" @complete="searchCountry($event)" field="name" /&gt;

&lt;h5&gt;Dropdown and Templating&lt;/h5&gt;
&lt;AutoComplete v-model="selectedCountry2" :suggestions="filteredCountries" @complete="searchCountry($event)" :dropdown="true" field="name"&gt;
    &lt;template #item="slotProps"&gt;
        &lt;div class="country-item"&gt;
            &lt;img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.item.code.toLowerCase()" /&gt;
            &lt;div&gt;{{slotProps.item.name}}&lt;/div&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/AutoComplete&gt;

&lt;h5&gt;Multiple&lt;/h5&gt;
&lt;span class="p-fluid"&gt;
    &lt;AutoComplete :multiple="true" v-model="selectedCountries" :suggestions="filteredCountries" @complete="searchCountry($event)" field="name" /&gt;
&lt;/span&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import CountryService from '../../service/CountryService';

export default {
    data() {
        return {
            countries: null,
            selectedCountry1: null,
            selectedCountry2: null,
            filteredCountries: null,
            selectedCountries: []
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
        }
    }
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>