<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>Lazy</span></h1>
				<p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking corresponding callbacks everytime paging, sorting and filtering happens.
                    Sample belows imitates lazy paging by using an in memory list. It is also important to assign the logical number of rows to totalRecords by doing a projection query for paginator configuration
                    so that paginator displays the UI assuming there are actually records of totalRecords size although in reality they aren't as in lazy mode, only the records that are displayed on the current page exist.
                </p>
			</div>
		</div>

		<div class="content-section implementation">
            <div class="card">
                <DataTable :value="customers" :lazy="true" :paginator="true" :rows="10" :filters="filters" ref="dt"
                    :totalRecords="totalRecords" :loading="loading" @page="onPage($event)" @sort="onSort($event)">
                    <Column field="name" header="Name" filterMatchMode="startsWith" ref="name" :sortable="true">  
                        <template #filter>
                            <InputText type="text" v-model="filters['name']['value']" @keydown.enter="onFilter($event)" class="p-column-filter" placeholder="Search by name"/>
                        </template>                    
                    </Column>
                    <Column field="country.name" header="Country" filterField="country.name" filterMatchMode="contains" ref="country.name" :sortable="true">
                        <template #filter>
                            <InputText type="text" v-model="filters['country.name']['value']" @keydown.enter="onFilter($event)" class="p-column-filter" placeholder="Search by country"/>
                        </template>
                    </Column>
                    <Column field="company" header="Company" filterMatchMode="contains" ref="company" :sortable="true">
                        <template #filter>
                            <InputText type="text" v-model="filters['company']['value']" @keydown.enter="onFilter($event)" class="p-column-filter" placeholder="Search by company"/>
                        </template>
                    </Column>
                    <Column field="representative.name" header="Representative" filterField="representative.name" ref="representative.name" :sortable="true">
                        <template #filter>
                            <InputText type="text" v-model="filters['representative.name']['value']" @keydown.enter="onFilter($event)" class="p-column-filter" placeholder="Search by representative"/>
                        </template>
                    </Column>
                </DataTable>
            </div>
		</div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
                    <div class="p-d-flex p-jc-end">
                        <LiveEditor name="DataTableDemo" :sources="sources" service="CustomerService" :components="['Column', 'InputText']" />
                    </div>
<pre v-code>
<code><template v-pre>
&lt;DataTable :value="customers" :lazy="true" :paginator="true" :rows="10" :filters="filters" ref="dt"
&lt;DataTable :value="customers" :lazy="true" :paginator="true" :rows="10" :filters="filters" ref="dt"
    :totalRecords="totalRecords" :loading="loading" @page="onPage($event)" @sort="onSort($event)"&gt;
    &lt;Column field="name" header="Name" filterMatchMode="startsWith" ref="name" :sortable="true"&gt;  
        &lt;template #filter&gt;
            &lt;InputText type="text" v-model="filters['name']['value']" @keydown.enter="onFilter($event)" class="p-column-filter" placeholder="Search by name"/&gt;
        &lt;/template&gt;                    
    &lt;/Column&gt;
    &lt;Column field="country.name" header="Country" filterField="country.name" filterMatchMode="contains" ref="country.name" :sortable="true"&gt;
        &lt;template #filter&gt;
            &lt;InputText type="text" v-model="filters['country.name']['value']" @keydown.enter="onFilter($event)" class="p-column-filter" placeholder="Search by country"/&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="company" header="Company" filterMatchMode="contains" ref="company" :sortable="true"&gt;
        &lt;template #filter&gt;
            &lt;InputText type="text" v-model="filters['company']['value']" @keydown.enter="onFilter($event)" class="p-column-filter" placeholder="Search by company"/&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="representative.name" header="Representative" filterField="representative.name" ref="representative.name" :sortable="true"&gt;
        &lt;template #filter&gt;
            &lt;InputText type="text" v-model="filters['representative.name']['value']" @keydown.enter="onFilter($event)" class="p-column-filter" placeholder="Search by representative"/&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

<pre v-code.script>
<code>
import CustomerService from '../../service/CustomerService';

export default {
    data() {
        return {
            loading: false,
            totalRecords: 0,
            customers: null,
            filters: {
                'name': {value: '', matchMode: 'contains'},
                'country.name': {value: '', matchMode: 'contains'},
                'company': {value: '', matchMode: 'contains'},
                'representative.name': {value: '', matchMode: 'contains'},
            },
            lazyParams: {},
            columns: [
                {field: 'name', header: 'Name'},
                {field: 'country.name', header: 'Country'},
                {field: 'company', header: 'Company'},
                {field: 'representative.name', header: 'Representative'}
            ]
        }
    },
    customerService: null,
    created() {
        this.customerService = new CustomerService();
    },
    mounted() {
        this.loading = true;
        
        this.lazyParams = {
            first: 0,
            rows: this.$refs.dt.rows,
            sortField: null,
            sortOrder: null,
            filters: this.filters
        };

        this.loadLazyData();
    },
    methods: {
        loadLazyData() {
            this.loading = true;

            this.customerService.getCustomers({lazyEvent: JSON.stringify( this.lazyParams )}).then(data => {
                this.customers = data.customers;
                this.totalRecords = data.totalRecords;
                this.loading = false;
            });
        },
        onPage(event) {
            this.lazyParams = event;
            this.loadLazyData();
        },
        onSort(event) {
            this.lazyParams = event;
            this.loadLazyData();
        },
        onFilter(event) {
            if (event.keyCode === 13) {
                this.loading = true;
                this.lazyParams.filters = this.filters;
                this.loadLazyData();
            }
        }
    }
}

</code></pre>
                </TabPanel>
            </TabView>
        </div>
	</div>
</template>

<script>
import CustomerService from '../../service/CustomerService';
import LiveEditor from '../liveeditor/LiveEditor';

export default {
    data() {
        return {
            loading: false,
            totalRecords: 0,
            customers: null,
            filters: {
                'name': {value: '', matchMode: 'contains'},
                'country.name': {value: '', matchMode: 'contains'},
                'company': {value: '', matchMode: 'contains'},
                'representative.name': {value: '', matchMode: 'contains'},
            },
            lazyParams: {},
            columns: [
                {field: 'name', header: 'Name'},
                {field: 'country.name', header: 'Country'},
                {field: 'company', header: 'Company'},
                {field: 'representative.name', header: 'Representative'}
            ],
            sources: {
                'template': {
                    content: `<template>
    <div class="layout-content">
        <div class="content-section implementation">
            <div class="card">
                <DataTable :value="customers" :lazy="true" :paginator="true" :rows="10" :filters="filters" ref="dt"
                    :totalRecords="totalRecords" :loading="loading" @page="onPage($event)" @sort="onSort($event)">
                    <Column field="name" header="Name" filterMatchMode="startsWith" ref="name" :sortable="true">  
                        <template #filter>
                            <InputText type="text" v-model="filters['name']['value']" @keydown.enter="onFilter($event)" class="p-column-filter" placeholder="Search by name"/>
                        </template>                    
                    </Column>
                    <Column field="country.name" header="Country" filterField="country.name" filterMatchMode="contains" ref="country.name" :sortable="true">
                        <template #filter>
                            <InputText type="text" v-model="filters['country.name']['value']" @keydown.enter="onFilter($event)" class="p-column-filter" placeholder="Search by country"/>
                        </template>
                    </Column>
                    <Column field="company" header="Company" filterMatchMode="contains" ref="company" :sortable="true">
                        <template #filter>
                            <InputText type="text" v-model="filters['company']['value']" @keydown.enter="onFilter($event)" class="p-column-filter" placeholder="Search by company"/>
                        </template>
                    </Column>
                    <Column field="representative.name" header="Representative" filterField="representative.name" ref="representative.name" :sortable="true">
                        <template #filter>
                            <InputText type="text" v-model="filters['representative.name']['value']" @keydown.enter="onFilter($event)" class="p-column-filter" placeholder="Search by representative"/>
                        </template>
                    </Column>
                </DataTable>
            </div>
		</div>
    </div>
</template>

<script>
import CustomerService from '../service/CustomerService';

export default {
    data() {
        return {
            loading: false,
            totalRecords: 0,
            customers: null,
            filters: {
                'name': {value: '', matchMode: 'contains'},
                'country.name': {value: '', matchMode: 'contains'},
                'company': {value: '', matchMode: 'contains'},
                'representative.name': {value: '', matchMode: 'contains'},
            },
            lazyParams: {},
            columns: [
                {field: 'name', header: 'Name'},
                {field: 'country.name', header: 'Country'},
                {field: 'company', header: 'Company'},
                {field: 'representative.name', header: 'Representative'}
            ]
        }
    },
    customerService: null,
    created() {
        this.customerService = new CustomerService();
    },
    mounted() {
        this.loading = true;
        
        this.lazyParams = {
            first: 0,
            rows: this.$refs.dt.rows,
            sortField: null,
            sortOrder: null,
            filters: this.filters
        };

        this.loadLazyData();
    },
    methods: {
        loadLazyData() {
            this.loading = true;

            this.customerService.getCustomers({lazyEvent: JSON.stringify( this.lazyParams )}).then(data => {
                this.customers = data.customers;
                this.totalRecords = data.totalRecords;
                this.loading = false;
            });
        },
        onPage(event) {
            this.lazyParams = event;
            this.loadLazyData();
        },
        onSort(event) {
            this.lazyParams = event;
            this.loadLazyData();
        },
        onFilter() {
            this.loading = true;
            this.lazyParams.filters = this.filters;
            this.loadLazyData();
        }
    }
}`
                }
            }
        }
    },
    customerService: null,
    created() {
        this.customerService = new CustomerService();
    },
    mounted() {
        this.loading = true;
        
        this.lazyParams = {
            first: 0,
            rows: this.$refs.dt.rows,
            sortField: null,
            sortOrder: null,
            filters: this.filters
        };

        this.loadLazyData();
    },
    methods: {
        loadLazyData() {
            this.loading = true;

            this.customerService.getCustomers({lazyEvent: JSON.stringify( this.lazyParams )}).then(data => {
                this.customers = data.customers;
                this.totalRecords = data.totalRecords;
                this.loading = false;
            });
        },
        onPage(event) {
            this.lazyParams = event;
            this.loadLazyData();
        },
        onSort(event) {
            this.lazyParams = event;
            this.loadLazyData();
        },
        onFilter() {
            this.loading = true;
            this.lazyParams.filters = this.filters;
            this.loadLazyData();
        }
    },
    components: {
        LiveEditor
    }
}
</script>