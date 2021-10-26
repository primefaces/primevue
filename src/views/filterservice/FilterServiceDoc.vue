<template>
	<AppDoc name="FilterServiceDemo" :sources="sources" :service="['CustomerService']" :data="['customers-large']" github="filterservice/FilterServiceDemo.vue">
		<h5>Import via Module</h5>
<pre v-code.script><code>
import &#123;FilterService&#125; from 'primevue/api';

</code></pre>

		<h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>Filters are accessed with <i>FilterService.filters</i>.</p>
<pre v-code.script><code>
const value = 'PrimeVue';

FilterService.filters.equals(value, 'Vue');                            //false
FilterService.filters.equals(value, 8);                               //false
FilterService.filters.equals(value, new Date());                      //false
FilterService.filters.contains(value, 'Vue');                          //true
FilterService.filters.startsWith(value, 'Vue');                        //false
FilterService.filters.endsWith(value, 'Vue');                          //true
FilterService.filters.lt(10, 20);                                     //true
FilterService.filters.gt(50, 20);                                     //true
FilterService.filters.in(value, ['PrimeFaces', 'PrimeVue']);           //true   

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
	</AppDoc>
</template>

<script>
export default {
	data() {
		return {
			sources: {
				'options-api': {
					tabName: 'Options API Source',
					content: `
<template>
    <div>
        <div class="card">
            <DataTable :value="customers" :paginator="true" :rows="10" responsiveLayout="scroll"
                dataKey="id" v-model:filters="filters" filterDisplay="row" :loading="loading">
                <template #empty>
                    No customers found.
                </template>
                <template #loading>
                    Loading customers data. Please wait.
                </template>
                <Column field="name" header="Name" :filterMatchModeOptions="matchModeOptions">
                    <template #body="{data}">
                        {{data.name}}
                    </template>
                    <template #filter="{filterModel,filterCallback}">
                        <InputText type="text" v-model="filterModel.value" @input="filterCallback()" class="p-column-filter" :placeholder="\`Search by name - \${filterModel.matchMode}\`"/>
                    </template>
                </Column>
                <Column header="Country" filterField="country.name" :filterMatchModeOptions="matchModeOptions">
                    <template #body="{data}">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="30" />
                        <span class="image-text">{{data.country.name}}</span>
                    </template>
                    <template #filter="{filterModel,filterCallback}">
                        <InputText type="text" v-model="filterModel.value" @input="filterCallback()" class="p-column-filter" :placeholder="\`Search by country - \${filterModel.matchMode}\`" />
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
</template>

<script>
import {FilterMatchMode,FilterService} from 'primevue/api';
import CustomerService from './service/CustomerService';

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
<\\/script>
`
				},
				'composition-api': {
					tabName: 'Composition API Source',
					content: `
<template>
    <div>
        <div class="card">
            <DataTable :value="customers" :paginator="true" :rows="10" responsiveLayout="scroll"
                dataKey="id" v-model:filters="filters" filterDisplay="row" :loading="loading">
                <template #empty>
                    No customers found.
                </template>
                <template #loading>
                    Loading customers data. Please wait.
                </template>
                <Column field="name" header="Name" :filterMatchModeOptions="matchModeOptions">
                    <template #body="{data}">
                        {{data.name}}
                    </template>
                    <template #filter="{filterModel,filterCallback}">
                        <InputText type="text" v-model="filterModel.value" @input="filterCallback()" class="p-column-filter" :placeholder="\`Search by name - \${filterModel.matchMode}\`"/>
                    </template>
                </Column>
                <Column header="Country" filterField="country.name" :filterMatchModeOptions="matchModeOptions">
                    <template #body="{data}">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="30" />
                        <span class="image-text">{{data.country.name}}</span>
                    </template>
                    <template #filter="{filterModel,filterCallback}">
                        <InputText type="text" v-model="filterModel.value" @input="filterCallback()" class="p-column-filter" :placeholder="\`Search by country - \${filterModel.matchMode}\`" />
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import {FilterMatchMode,FilterService} from 'primevue/api';
import CustomerService from './service/CustomerService';

export default {
    setup() {
		onMounted(() => {
			customerService.value.getCustomersLarge().then(data => {
        	    customers.value = data; 
        	    loading.value = false;
        	});

			FilterService.register(YOUR_FILTER.value, (value, filter) => {
        	    if (filter === undefined || filter === null || filter.trim() === '') {
        	        return true;
        	    }
	
        	    if (value === undefined || value === null) {
        	        return false;
        	    }
	
        	    return value.toString() === filter.toString();
        	});
		})

		const YOUR_FILTER = ref('YOUR FILTER');
        const customers = ref();
		const customerService = ref(new CustomerService());
        const filters = ref({
            'name': {value: null, matchMode: YOUR_FILTER.value},
            'country.name': {value: null, matchMode: FilterMatchMode.STARTS_WITH}
        });
        const matchModeOptions = ref([
            {label: 'Your Equals', value: YOUR_FILTER.value},
            {label: 'Starts With', value: FilterMatchMode.STARTS_WITH}
        ]);
        const loading = ref(true);

		return { customers, customerService, filters, matchModeOptions, loading }
    }
}
<\\/script>
`
				},
				'browser-source': {
					tabName: 'Browser Source',
					imports: `<script src="https://unpkg.com/primevue@^3/datatable/datatable.min.js"><\\/script>
			<script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>
			<script src="./CustomerService.js"><\\/script>`,
					content: `<div id="app">
				<div class="card">
					<p-datatable :value="customers" :paginator="true" :rows="10" responsive-layout="scroll"
						data-key="id" v-model:filters="filters" filter-display="row" :loading="loading">
						<template #empty>
							No customers found.
						</template>
						<template #loading>
							Loading customers data. Please wait.
						</template>
						<p-column field="name" header="Name" :filter-match-mode-options="matchModeOptions">
							<template #body="{data}">
								{{data.name}}
							</template>
							<template #filter="{filterModel,filterCallback}">
								<p-inputtext type="text" v-model="filterModel.value" @input="filterCallback()" class="p-column-filter" :placeholder="\`Search by name - \${filterModel.matchMode}\`"></p-inputtext>
							</template>
						</p-column>
						<p-column header="Country" filter-field="country.name" :filter-match-mode-options="matchModeOptions">
							<template #body="{data}">
								<img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="30" />
								<span class="image-text">{{data.country.name}}</span>
							</template>
							<template #filter="{filterModel,filterCallback}">
								<p-inputtext type="text" v-model="filterModel.value" @input="filterCallback()" class="p-column-filter" :placeholder="\`Search by country - \${filterModel.matchMode}\`"></p-inputtext>
							</template>
						</p-column>
					</p-datatable>
				</div>
			</div>

			<script type="module">
			const { createApp, ref, onMounted } = Vue;
			const { FilterMatchMode, FilterService } = primevue.api;

			const App = {
				setup() {
					onMounted(() => {
						customerService.value.getCustomersLarge().then(data => {
							customers.value = data; 
							loading.value = false;
						});

						FilterService.register(YOUR_FILTER.value, (value, filter) => {
							if (filter === undefined || filter === null || filter.trim() === '') {
								return true;
							}
				
							if (value === undefined || value === null) {
								return false;
							}
				
							return value.toString() === filter.toString();
						});
					})

					const YOUR_FILTER = ref('YOUR FILTER');
					const customers = ref();
					const customerService = ref(new CustomerService());
					const filters = ref({
						'name': {value: null, matchMode: YOUR_FILTER.value},
						'country.name': {value: null, matchMode: FilterMatchMode.STARTS_WITH}
					});
					const matchModeOptions = ref([
						{label: 'Your Equals', value: YOUR_FILTER.value},
						{label: 'Starts With', value: FilterMatchMode.STARTS_WITH}
					]);
					const loading = ref(true);

					return { customers, customerService, filters, matchModeOptions, loading }
				},
				components: {
					"p-datatable": primevue.datatable,
					"p-column": primevue.column,
					"p-inputtext": primevue.inputtext
				}
			};

			createApp(App)
            .use(primevue.config.default)
            .mount("#app");
			<\\/script>
`
				}
			}
		}
	}
}
</script>