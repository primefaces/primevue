<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import AutoComplete from 'primevue/autocomplete';
</CodeHighlight>

				<h3>Getting Started</h3>
				<p>AutoComplete uses v-model for two-way binding, requires a list of suggestions and a complete method to query for the results. The complete method
					gets the query text as event.query property and should update the suggestions with the search results.</p>
<CodeHighlight>
&lt;AutoComplete v-model=&quot;selectedCountry&quot; :suggestions=&quot;filteredCountriesBasic&quot; @complete=&quot;searchCountryBasic($event)&quot; field=&quot;name&quot; /&gt;
</CodeHighlight>
<CodeHighlight lang="js">
export default {
	data() {
		return {
			selectedCountry: null,
			filteredCountriesBasic: null
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
		searchCountry(query) {
			return this.countries.filter((country) => {
				return country.name.toLowerCase().startsWith(query.toLowerCase());
			});
		},
		searchCountryBasic(event) {
			setTimeout(() => {
				this.filteredCountriesBasic = this.searchCountry(event.query);
			}, 250);
		}
	}
}
</CodeHighlight>

				<h3>Dropdown</h3>
				<p>Enabling <i>dropdown</i> property displays a button next to the input field where click behavior of the button is defined using
					dropdownMode property that takes "blank" or "current" as possible values.
					"blank" is the default mode to send a query with an empty string whereas
					"current" setting sends a query with the current value of the input.</p>
<CodeHighlight>
&lt;AutoComplete v-model=&quot;brand&quot; :dropdown=&quot;true&quot; :suggestions=&quot;filteredBrands&quot; @complete=&quot;searchBrand($event)&quot; placeholder=&quot;Hint: type 'v' or 'f'&quot; /&gt;
</CodeHighlight>

				<h3>Multiple Mode</h3>
				<p>Multiple mode is enabled using <i>multiple</i> property used to select more than one value from the autocomplete. In this case, value reference should be an array.</p>
<CodeHighlight>
&lt;AutoComplete :multiple=&quot;true&quot; v-model=&quot;selectedCountries&quot; :suggestions=&quot;filteredCountriesMultiple&quot; @complete=&quot;searchCountryMultiple($event)&quot; field=&quot;name&quot; /&gt;
</CodeHighlight>

				<h3>Objects</h3>
				<p>AutoComplete can also work with objects using the  <i>field</i> property that defines the label to display
					as a suggestion. The value passed to the model would still be the object instance of a suggestion.
					Here is an example with a Country object that has name and code fields such as &#123;name:"United States",code:"USA"&#125;.</p>
<CodeHighlight>
&lt;AutoComplete field=&quot;label&quot; v-model=&quot;selectedCountry&quot; :suggestions=&quot;filteredCountriesBasic&quot; @complete=&quot;searchCountryBasic($event)&quot; /&gt;
</CodeHighlight>

				<h3>Templating</h3>
				<p>Item template allows displaying custom content inside the suggestions panel. The local template variable passed to the template is an object in the suggestions array.</p>
<CodeHighlight>
<template v-pre>
&lt;AutoComplete v-model=&quot;brand&quot; :suggestions=&quot;filteredBrands&quot; @complete=&quot;searchBrand($event)&quot; placeholder=&quot;Hint: type 'v' or 'f'&quot; :dropdown=&quot;true&quot;&gt;
	&lt;template #item=&quot;slotProps&quot;&gt;
		&lt;div class=&quot;p-clearfix p-autocomplete-brand-item&quot;&gt;
			&lt;img :alt=&quot;slotProps.item&quot; :src=&quot;'/demo/images/car/' + slotProps.item + '.png'&quot; /&gt;
			&lt;div&gt;{{slotProps.item}}&lt;/div&gt;
		&lt;/div&gt;
	&lt;/template&gt;
&lt;/AutoComplete&gt;
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
							<td>suggestions</td>
							<td>array</td>
							<td>null</td>
							<td>An array of suggestions to display.</td>
						</tr>
						<tr>
							<td>field</td>
							<td>any</td>
							<td>null</td>
							<td>Field of a suggested object to resolve and display.</td>
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
							<td>disabled</td>
							<td>boolean</td>
							<td>false</td>
							<td>When present, it specifies that the component should be disabled.</td>
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
							<td>complete</td>
							<td>
								event.originalEvent: browser event <br />
								event.query: Value to search with
							</td>
							<td>Callback to invoke to search for suggestions.</td>
						</tr>
						<tr>
							<td>input</td>
							<td>value: Value of the component</td>
							<td>Callback to invoke on input event of input field.</td>
						</tr>
						<tr>
							<td>focus</td>
							<td>event: Browser event</td>
							<td>Callback to invoke when autocomplete gets focus.</td>
						</tr>
						<tr>
							<td>blur</td>
							<td>event: Browser event</td>
							<td>Callback to invoke when autocomplete loses focus.</td>
						</tr>
						<tr>
							<td>select</td>
							<td>event.originalEvent: Browser event <br />
								event.value: Value of the component</td>
							<td>Callback to invoke when a suggestion is selected.</td>
						</tr>
						<tr>
							<td>unselect</td>
							<td>event.originalEvent: Browser event <br />
								event.value: Value of the component</td>
							<td>Callback to invoke when a selected value is removed.</td>
						</tr>
						<tr>
							<td>click-dropdown</td>
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

				<h3>Styling</h3>
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

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/autocomplete" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;template&gt;
	&lt;div&gt;
		&lt;div class=&quot;content-section introduction&quot;&gt;
			&lt;div class=&quot;feature-intro&quot;&gt;
				&lt;h1&gt;AutoComplete&lt;/h1&gt;
				&lt;p&gt;AutoComplete is an input component that provides real-time suggestions when being typed.&lt;/p&gt;
			&lt;/div&gt;
		&lt;/div&gt;

		&lt;div class=&quot;content-section implementation&quot;&gt;
			&lt;h3 class=&quot;first&quot;&gt;Basic&lt;/h3&gt;
			&lt;AutoComplete v-model=&quot;selectedCountry&quot; :suggestions=&quot;filteredCountriesBasic&quot; @complete=&quot;searchCountryBasic($event)&quot; field=&quot;name&quot; /&gt;
			&lt;span style=&quot;marginLeft: .5em&quot;&gt;Country: {{selectedCountry || 'none'}}&lt;/span&gt;

			&lt;h3&gt;Dropdown and Templating&lt;/h3&gt;
			&lt;AutoComplete v-model=&quot;brand&quot; :suggestions=&quot;filteredBrands&quot; @complete=&quot;searchBrand($event)&quot; placeholder=&quot;Hint: type 'v' or 'f'&quot; :dropdown=&quot;true&quot;&gt;
				&lt;template #item=&quot;slotProps&quot;&gt;
					&lt;div class=&quot;p-clearfix p-autocomplete-brand-item&quot;&gt;
						&lt;img :alt=&quot;slotProps.item&quot; :src=&quot;'/demo/images/car/' + slotProps.item + '.png'&quot; /&gt;
						&lt;div&gt;{{slotProps.item}}&lt;/div&gt;
					&lt;/div&gt;
				&lt;/template&gt;
			&lt;/AutoComplete&gt;
			&lt;span style=&quot;marginLeft: .5em&quot;&gt;Brand: {{brand || 'none'}}&lt;/span&gt;

			&lt;h3&gt;Multiple&lt;/h3&gt;
			&lt;span class=&quot;p-fluid&quot;&gt;
			&lt;AutoComplete :multiple=&quot;true&quot; v-model=&quot;selectedCountries&quot; :suggestions=&quot;filteredCountriesMultiple&quot; @complete=&quot;searchCountryMultiple($event)&quot; field=&quot;name&quot; /&gt;
		&lt;/span&gt;
			&lt;ul&gt;
				&lt;li v-for=&quot;(c,i) of selectedCountries&quot; :key=&quot;i&quot;&gt;{{c}}&lt;/li&gt;
			&lt;/ul&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/template&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import CountryService from '../../service/CountryService';

export default {
	data() {
		return {
			countries: null,
			selectedCountry: null,
			filteredCountriesBasic: null,
			selectedCountries: [],
			filteredCountriesMultiple: null,
			brands: null,
			brand: null,
			filteredBrands: null
		}
	},
	countryService: null,
	created() {
		this.countryService = new CountryService();
	},
	mounted() {
		this.countryService.getCountries().then(data => this.countries = data);
		this.brands = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo'];
	},
	methods: {
		searchCountry(query) {
			return this.countries.filter((country) => {
				return country.name.toLowerCase().startsWith(query.toLowerCase());
			});
		},
		searchCountryBasic(event) {
			setTimeout(() => {
				this.filteredCountriesBasic = this.searchCountry(event.query);
			}, 250);
		},
		searchCountryMultiple(event) {
			setTimeout(() => {
				this.filteredCountriesMultiple = this.searchCountry(event.query);
			}, 250);
		},
		searchBrand(event) {
			setTimeout(() => {
				let results;

				if (event.query.length === 0) {
					results = [...this.brands];
				}
				else {
					results = this.brands.filter((brand) => {
						return brand.toLowerCase().startsWith(event.query.toLowerCase());
					});
				}

				this.filteredBrands = results;
			}, 250);
		}
	}
}
</CodeHighlight>

<CodeHighlight lang="css">
.p-autocomplete-brand-item {
	img {
		width: 32px;
		display: inline-block;
		margin: 5px 0 2px 5px;
	}

	div {
		font-size: 16px;
		float: right;
		margin: 10px 10px 0 0;
	}
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>