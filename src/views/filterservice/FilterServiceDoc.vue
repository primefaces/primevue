<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<pre v-code.script><code>
import &#123;FilterService&#125; from 'primevue/api';

</code></pre>

				<h5>Getting Started</h5>
				<p>Filters are accessed with <i>FilterService.filters</i>.</p>
<pre v-code.script><code>
const value = 'PrimeNG';

FilterService.filters.equals(value, 'NG');                            //false
FilterService.filters.equals(value, 8);                               //false
FilterService.filters.equals(value, new Date());                      //false
FilterService.filters.contains(value, 'NG');                          //true
FilterService.filters.startsWith(value, 'NG');                        //false
FilterService.filters.endsWith(value, 'NG');                          //true
FilterService.filters.lt(10, 20);                                     //true
FilterService.filters.gt(50, 20);                                     //true
FilterService.filters.in(value, ['PrimeFaces', 'PrimeNG']);           //true   

</code></pre>

				<h5>Custom Constraint</h5>
				<p>FilterService can be extended by adding new constraints using the <span>register</span> function.</p>
<pre v-code.script><code>
FilterService.register('isPrimeNumber', (value, filter): boolean => &#123;
    if (filter === undefined || filter === null || filter.trim() === '') &#123;
        return true;
    &#125;

    if (value === undefined || value === null) &#123;
        return false;
    &#125;
    
    return value.toString() === filter.toString();
&#125;);

FilterService.filters['isPrimeNumber'](3);                      //true
FilterService.filters['isPrimeNumber'](5);                      //true
FilterService.filters['isPrimeNumber'](568985673);              //false

</code></pre>

				<h5>Built-in Constraints</h5>
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
								<td>startsWith</td>
								<td>value: Value to filter<br />
									filter: Filter value<br />
									filterLocale: Locale to use in filtering</td>
								<td>Whether the value starts with the filter value</td>
							</tr>
							<tr>
								<td>contains</td>
								<td>value: Value to filter<br />
									filter: Filter value<br />
									filterLocale: Locale to use in filtering</td>
								<td>Whether the value contains the filter value</td>
							</tr>
							<tr>
								<td>endsWith</td>
								<td>value: Value to filter<br />
									filter: Filter value<br />
									filterLocale: Locale to use in filtering</td>
								<td>Whether the value ends with the filter value</td>
							</tr>
							<tr>
								<td>equals</td>
								<td>value: Value to filter<br />
									filter: Filter value<br />
									filterLocale: Locale to use in filtering</td>
								<td>Whether the value equals the filter value</td>
							</tr>
							<tr>
								<td>notEquals</td>
								<td>value: Value to filter<br />
									filter: Filter value<br />
									filterLocale: Locale to use in filtering</td>
								<td>Whether the value does not equal the filter value</td>
							</tr>
							<tr>
								<td>in</td>
								<td>value: Value to filter<br />
									filter[]: An array of filter values<br />
									filterLocale: Locale to use in filtering</td>
								<td>Whether the value contains the filter value</td>
							</tr>
							<tr>
								<td>lt</td>
								<td>value: Value to filter<br />
									filter: Filter value<br />
									filterLocale: Locale to use in filtering</td>
								<td>Whether the value is less than the filter value</td>
							</tr>
							<tr>
								<td>lte</td>
								<td>value: Value to filter<br />
									filter: Filter value<br />
									filterLocale: Locale to use in filtering</td>
								<td>Whether the value is less than or equals to the filter value</td>
							</tr>
							<tr>
								<td>gt</td>
								<td>value: Value to filter<br />
									filter: Filter value<br />
									filterLocale: Locale to use in filtering</td>
								<td>Whether the value is greater than the filter value</td>
							</tr>
							<tr>
								<td>gte</td>
								<td>value: Value to filter<br />
									filter: Filter value<br />
									filterLocale: Locale to use in filtering</td>
								<td>Whether the value is greater than or equals to the filter value</td>
							</tr>
							<tr>
								<td>is</td>
								<td>value: Value to filter<br />
									filter: Filter value<br />
									filterLocale: Locale to use in filtering</td>
								<td>Whether the value equals the filter value, alias to equals</td>
							</tr>
							<tr>
								<td>isNot</td>
								<td>value: Value to filter<br />
									filter: Filter value<br />
									filterLocale: Locale to use in filtering</td>
								<td>Whether the value does not equal the filter value, alias to notEquals.</td>
							</tr>
							<tr>
								<td>before</td>
								<td>value: Value to filter<br />
									filter: Filter value<br />
									filterLocale: Locale to use in filtering</td>
								<td>Whether the date value is before the filter date.</td>
							</tr>
							<tr>
								<td>after</td>
								<td>value: Value to filter<br />
									filter: Filter value<br />
									filterLocale: Locale to use in filtering</td>
								<td>Whether the date value is after the filter date.</td>
							</tr>
						</tbody>
					</table>

					<h5>FilterService API</h5>
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
									<td>filter</td>
									<td>value[]: An array of values to filter<br />
										fields[]: An array of properties in the value object<br />
										filterValue: Filter value<br />
										filterMatchMode: Constraint<br />
										filterLocale: Locale to use in filtering</td>
									<td>Whether the property values of the given value collection matches the filter.</td>
								</tr>
								<tr>
									<td>filters</td>
									<td>-</td>
									<td>Property to access constraints collection.</td>
								</tr>
								<tr>
									<td>register</td>
									<td>name: string <br />
										fn: Filter callback</td>
									<td>Registers a new constraint in filters.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<h5>Dependencies</h5>
				<p>None.</p>

			</TabPanel>

			<TabPanel header="Source">
				<div class="p-d-flex p-jc-between">
					<a href="https://github.com/primefaces/primevue/tree/master/src/views/filterservice" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
						<span>View on GitHub</span>
					</a>
				</div>
<pre v-code><code><template v-pre>
&lt;DataTable :value="customers" :paginator="true" :rows="10" responsiveLayout="scroll"
	dataKey="id" v-model:filters="filters" filterDisplay="row" :loading="loading"&gt;
	&lt;template #empty&gt;
		No customers found.
	&lt;/template&gt;
	&lt;template #loading&gt;
		Loading customers data. Please wait.
	&lt;/template&gt;
	&lt;Column field="name" header="Name" :filterMatchModeOptions="matchModeOptions"&gt;
		&lt;template #body="{data}"&gt;
			{{data.name}}
		&lt;/template&gt;
		&lt;template #filter="{filterModel,filterCallback}"&gt;
			&lt;InputText type="text" v-model="filterModel.value" @input="filterCallback()" class="p-column-filter" :placeholder="`Search by name - ${filterModel.matchMode}`"/&gt;
		&lt;/template&gt;
	&lt;/Column&gt;
	&lt;Column header="Country" filterField="country.name" :filterMatchModeOptions="matchModeOptions"&gt;
		&lt;template #body="{data}"&gt;
			&lt;img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + data.country.code" width="30" /&gt;
			&lt;span class="image-text"&gt;{{data.country.name}}&lt;/span&gt;
		&lt;/template&gt;
		&lt;template #filter="{filterModel,filterCallback}"&gt;
			&lt;InputText type="text" v-model="filterModel.value" @input="filterCallback()" class="p-column-filter" :placeholder="`Search by country - ${filterModel.matchMode}`" /&gt;
		&lt;/template&gt;
	&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

<pre v-code.script><code>
import {FilterMatchMode,FilterService} from 'primevue/api';
import CustomerService from '../../service/CustomerService';

const YOUR_FILTER = 'YOUR FILTER';

export default {
    data() {
        return {
            customers: null,
            filters: {
                'name': {value: null, matchMode: YOUR_FILTER},
                'country.name': {value: null, matchMode: FilterMatchMode.STARTS_WITH}
            },
            matchModeOptions: [
                {label: 'Your Equals', value: YOUR_FILTER},
                {label: 'Starts With', value: FilterMatchMode.STARTS_WITH}
            ],
            loading: true
        }
    },
    created() {
        this.customerService = new CustomerService();
    },
    mounted() {
        this.customerService.getCustomersLarge().then(data => {
            this.customers = data; 
            this.loading = false;
        });

        FilterService.register(YOUR_FILTER, (value, filter) => {
            if (filter === undefined || filter === null || filter.trim() === '') {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }
            
            return value.toString() === filter.toString();
        });
    }
}

</code></pre>
			</TabPanel>
		</TabView>
	</div>
</template>

<script>
export default {}
</script>