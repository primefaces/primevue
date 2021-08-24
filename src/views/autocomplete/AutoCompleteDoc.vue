<template>
    <AppDoc name="AutoCompleteDemo" :sources="sources" :service="['CountryService']" :data="['countries']" github="autocomplete/AutoCompleteDemo.vue">
        <h5>Import</h5>
<pre v-code.script><code>
import AutoComplete from 'primevue/autocomplete';

</code></pre>

		<h5>Getting Started</h5>
		<p>AutoComplete uses v-model for two-way binding, requires a list of suggestions and a complete method to query for the results. The complete method
			gets the query text as event.query property and should update the suggestions with the search results. Example below connects to a remote datasource to fetch the results;</p>
<pre v-code><code>
&lt;AutoComplete v-model="selectedCountry" :suggestions="filteredCountriesBasic" @complete="searchCountry($event)" field="name" /&gt;

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
&lt;AutoComplete :multiple="true" v-model="selectedCountries" :suggestions="filteredCountriesMultiple" @complete="searchCountryMultiple($event)" field="name" /&gt;

</code></pre>

		<h5>Objects</h5>
		<p>AutoComplete can also work with objects using the  <i>field</i> property that defines the label to display
			as a suggestion. The value passed to the model would still be the object instance of a suggestion.
			Here is an example with a Country object that has name and code fields such as &#123;name:"United States",code:"USA"&#125;.</p>
<pre v-code><code>
&lt;AutoComplete field="label" v-model="selectedCountry" :suggestions="filteredCountriesBasic" @complete="searchCountryBasic($event)" /&gt;

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
    field="label" optionGroupLabel="label" optionGroupChildren="items"&gt;&lt;/AutoComplete&gt;
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
                        <td>Property name or getter function of a suggested object to resolve and display.</td>
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
                        <td>completeOnFocus</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Whether to run a query when input receives focus.</td>
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
                        <td>style</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Style class of the component input field.</td>
                    </tr>
                    <tr>
                        <td>class</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Inline style of the component.</td>
                    </tr>
                    <tr>
                        <td>panelClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Style class of the overlay panel.</td>
                    </tr>
                    <tr>
                        <td>virtualScrollerOptions</td>
                        <td>object</td>
                        <td>null</td>
                        <td>Whether to use the virtualScroller feature. The properties of <router-link to="/virtualscroller">VirtualScroller</router-link> component can be used like an object in it.</td>
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
                        <td>-</td>
                        <td>Callback to invoke when input is cleared by the user.</td>
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
                        <td>item</td>
                        <td>item: Option instance <br />
                            index: Index of the option</td>
                    </tr>
                    <tr>
                        <td>optiongroup</td>
                        <td>item: OptionGroup instance <br />
                            index: Index of the option group</td>
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
                        <td>chip</td>
                        <td>value: A value in the selection</td>
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
            <AutoComplete v-model="selectedCountry1" :suggestions="filteredCountries" @complete="searchCountry($event)" field="name" />

            <h5>Grouped</h5>
            <AutoComplete v-model="selectedCity" :suggestions="filteredCities" @complete="searchCity($event)" field="label" optionGroupLabel="label" optionGroupChildren="items">
                <template #optiongroup="slotProps">
                    <div class="p-d-flex p-ai-center country-item">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="18" />
                        <div class="p-ml-2">{{slotProps.item.label}}</div>
                    </div>
                </template>
            </AutoComplete>

            <h5>Dropdown, Templating and Force Selection</h5>
            <AutoComplete v-model="selectedCountry2" :suggestions="filteredCountries" @complete="searchCountry($event)" :dropdown="true" field="name" forceSelection>
                <template #item="slotProps">
                    <div class="country-item">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="18" />
                        <div class="p-ml-2">{{slotProps.item.name}}</div>
                    </div>
                </template>
            </AutoComplete>

            <h5>Virtual Scroll (1000 Items)</h5>
            <AutoComplete v-model="selectedItem" :suggestions="filteredItems" @complete="searchItems" :virtualScrollerOptions="{ itemSize: 31 }" field="label" dropdown />

            <h5>Multiple</h5>
            <span class="p-fluid">
                <AutoComplete :multiple="true" v-model="selectedCountries" :suggestions="filteredCountries" @complete="searchCountry($event)" field="name" />
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
            <AutoComplete v-model="selectedCountry1" :suggestions="filteredCountries" @complete="searchCountry($event)" field="name" />

            <h5>Grouped</h5>
            <AutoComplete v-model="selectedCity" :suggestions="filteredCities" @complete="searchCity($event)" field="label" optionGroupLabel="label" optionGroupChildren="items">
                <template #optiongroup="slotProps">
                    <div class="p-d-flex p-ai-center country-item">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="18" />
                        <div class="p-ml-2">{{slotProps.item.label}}</div>
                    </div>
                </template>
            </AutoComplete>

            <h5>Dropdown, Templating and Force Selection</h5>
            <AutoComplete v-model="selectedCountry2" :suggestions="filteredCountries" @complete="searchCountry($event)" :dropdown="true" field="name" forceSelection>
                <template #item="slotProps">
                    <div class="country-item">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="18" />
                        <div class="p-ml-2">{{slotProps.item.name}}</div>
                    </div>
                </template>
            </AutoComplete>

            <h5>Virtual Scroll (1000 Items)</h5>
            <AutoComplete v-model="selectedItem" :suggestions="filteredItems" @complete="searchItems" :virtualScrollerOptions="{ itemSize: 31 }" field="label" dropdown />

            <h5>Multiple</h5>
            <span class="p-fluid">
                <AutoComplete :multiple="true" v-model="selectedCountries" :suggestions="filteredCountries" @complete="searchCountry($event)" field="name" />
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
                }
            }
        }
    }
}
</script>
