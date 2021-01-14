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
                    :totalRecords="totalRecords" :loading="loading" @page="onPage($event)" @sort="onSort">
                    <Column field="name" header="Name" filterMatchMode="startsWith" ref="name" :sortable="true">  
                        <template #filter>
                            <InputText type="text" v-model="filters['name']" @keydown="onFilter($event)" class="p-column-filter" placeholder="Search by name"/>
                        </template>                    
                    </Column>
                    <Column field="country.name" header="Country" filterField="country.name" filterMatchMode="contains" ref="country.name" :sortable="true">
                        <template #filter>
                            <InputText type="text" v-model="filters['country.name']" @keydown="onFilter($event)" class="p-column-filter" placeholder="Search by country"/>
                        </template>
                    </Column>
                    <Column field="company" header="Company" filterMatchMode="contains" ref="company" :sortable="true">
                        <template #filter>
                            <InputText type="text" v-model="filters['company']" @keydown="onFilter($event)" class="p-column-filter" placeholder="Search by company"/>
                        </template>
                    </Column>
                    <Column field="representative.name" header="Representative" filterField="representative.name" filterMatchMode="contains" ref="representative.name" :sortable="true">
                        <template #filter>
                            <MultiSelect v-model="filters['representative.name']" :options="representatives" optionLabel="name" optionValue="name" @change="onFilter($event)" placeholder="All" class="p-column-filter">
                                <template #option="slotProps">
                                    <div class="p-multiselect-representative-option">
                                        <img :alt="slotProps.option.name" :src="'demo/images/avatar/' + slotProps.option.image" width="32" style="vertical-align: middle" />
                                        <span class="image-text">{{slotProps.option.name}}</span>
                                    </div>
                                </template>
                            </MultiSelect>
                        </template>
                    </Column>
                </DataTable>
            </div>
		</div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<pre v-code>
<code><template v-pre>
&lt;DataTable :value="customers" :lazy="true" :paginator="true" :rows="10" :filters="filters" ref="dt"
    :totalRecords="totalRecords" :loading="loading" @page="onPage($event)" @sort="onSort"&gt;
    &lt;Column field="name" header="Name" filterMatchMode="startsWith" ref="name" :sortable="true"&gt;
        &lt;template #filter&gt;
            &lt;InputText type="text" v-model="filters['name']" @keydown="onFilter($event)" class="p-column-filter" placeholder="Search by name"/&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="country.name" header="Country" filterField="country.name" filterMatchMode="contains" ref="country.name" :sortable="true"&gt;
        &lt;template #filter&gt;
            &lt;InputText type="text" v-model="filters['country.name']" @keydown="onFilter($event)" class="p-column-filter" placeholder="Search by country"/&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="company" header="Company" filterMatchMode="contains" ref="company" :sortable="true"&gt;
        &lt;template #filter&gt;
            &lt;InputText type="text" v-model="filters['company']" @keydown="onFilter($event)" class="p-column-filter" placeholder="Search by company"/&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="representative.name" header="Representative" filterField="representative.name" filterMatchMode="contains" ref="representative.name" :sortable="true"&gt;
        &lt;template #filter&gt;
            &lt;MultiSelect v-model="filters['representative.name']" :options="representatives" optionLabel="name" optionValue="name" @change="onFilter($event)" placeholder="All" class="p-column-filter"&gt;
                &lt;template #option="slotProps"&gt;
                    &lt;div class="p-multiselect-representative-option"&gt;
                        &lt;img :alt="slotProps.option.name" :src="'demo/images/avatar/' + slotProps.option.image" width="32" style="vertical-align: middle" /&gt;
                        &lt;span class="image-text"&gt;{{slotProps.option.name}}&lt;/span&gt;
                    &lt;/div&gt;
                &lt;/template&gt;
            &lt;/MultiSelect&gt;
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
            filters: {},
            representatives: [
                {name: "Amy Elsner", image: 'amyelsner.png'},
                {name: "Anna Fali", image: 'annafali.png'},
                {name: "Asiya Javayant", image: 'asiyajavayant.png'},
                {name: "Bernardo Dominic", image: 'bernardodominic.png'},
                {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
                {name: "Ioni Bowcher", image: 'ionibowcher.png'},
                {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
                {name: "Onyama Limba", image: 'onyamalimba.png'},
                {name: "Stephen Shaw", image: 'stephenshaw.png'},
                {name: "XuXue Feng", image: 'xuxuefeng.png'}
            ],
            columns: [
                {field: 'name', header: 'Name', placeholder: 'name', ref: 'name'},
                {field: 'country.name', header: 'Country', placeholder: 'country', ref: 'country.name'},
                {field: 'company', header: 'Company', placeholder: 'company', ref: 'company'},
                {field: 'representative.name', header: 'Representative', placeholder: 'representative', ref: 'representative'}
            ]
        }
    },
    customerService: null,
    created() {
        this.customerService = new CustomerService();
    },
    mounted() {
        this.loading = true;

        this.customerService.getCustomers({lazyEvent: JSON.stringify({first: 0, rows: this.$refs.dt.rows})}).then(data => {
            this.customers = data.customers;
            this.totalRecords = data.totalRecords;
            this.loading = false;
        });
    },
    methods: {
        onLazyEvent(event) {
            const filters = {};
            const x = JSON.parse(JSON.stringify(this.filters));
            const y = Object.keys(x);

            for(let i=0; i &lt;this.columns.length; i++) {
                let obj = {};
                obj.matchMode = this.$refs[this.columns[i].field].filterMatchMode || "startsWith";
                for(let j=0; j &lt; y.length; j++) {
                    if(this.columns[i].field === y[j]) {
                        obj.value = this.filters[this.columns[i].field];
                    }
                    else obj.value = null;
                }
                filters[this.columns[i].field] = obj;
            }
          
            this.loading = true;
            let params = {
                first: event.first,
                rows: event.rows,
                sortField: event.sortField,
                sortOrder: event.sortOrder,
                filters: filters
            };

            setTimeout(() => {
                this.customerService.getCustomers({lazyEvent: JSON.stringify( params )}).then(data => {
                    this.customers = data.customers;
                    this.totalRecords = data.totalRecords;
                    this.loading = false;
                });
            }, 1000);
        },
        onPage(event) {
            this.onLazyEvent(event);
        },
        onSort(event) {
            this.onLazyEvent(event);
        },
        onFilter(event) {
            if(event.keyCode === 13 || event.value) {
                const filters = {}; 
                const x = JSON.parse(JSON.stringify(this.filters));
                const y = Object.keys(x);

                for(let i=0; i &lt; this.columns.length; i++) {
                    let obj = {};
                    obj.matchMode = this.$refs[this.columns[i].field].filterMatchMode || "startsWith";
                    for(let j=0; j &lt; y.length; j++) {
                        if(this.columns[i].field === y[j]) {
                            obj["value"] = this.filters[this.columns[i].field];
                        }
                        else obj["value"] = null;
                    }
                    filters[this.columns[i].field] = obj;
                }

                this.loading = true;
                let params = {
                    first: 0,
                    rows: this.$refs.dt.rows,
                    sortField: null,
                    sortOrder: null,
                    filters: filters
                };

                setTimeout(() => {
                    this.customerService.getCustomers({lazyEvent: JSON.stringify( params )}).then(data => {
                        this.customers = data.customers;
                        this.totalRecords = data.totalRecords;
                        this.loading = false;
                    });
                }, 1000);
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

export default {
    data() {
        return {
            loading: false,
            totalRecords: 0,
            customers: null,
            filters: {},
            representatives: [
                {name: "Amy Elsner", image: 'amyelsner.png'},
                {name: "Anna Fali", image: 'annafali.png'},
                {name: "Asiya Javayant", image: 'asiyajavayant.png'},
                {name: "Bernardo Dominic", image: 'bernardodominic.png'},
                {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
                {name: "Ioni Bowcher", image: 'ionibowcher.png'},
                {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
                {name: "Onyama Limba", image: 'onyamalimba.png'},
                {name: "Stephen Shaw", image: 'stephenshaw.png'},
                {name: "XuXue Feng", image: 'xuxuefeng.png'}
            ],
            columns: [
                {field: 'name', header: 'Name', placeholder: 'name', ref: 'name'},
                {field: 'country.name', header: 'Country', placeholder: 'country', ref: 'country.name'},
                {field: 'company', header: 'Company', placeholder: 'company', ref: 'company'},
                {field: 'representative.name', header: 'Representative', placeholder: 'representative', ref: 'representative'}
            ]
        }
    },
    customerService: null,
    created() {
        this.customerService = new CustomerService();
    },
    mounted() {
        this.loading = true;

        this.customerService.getCustomers({lazyEvent: JSON.stringify({first: 0, rows: this.$refs.dt.rows})}).then(data => {
            this.customers = data.customers;
            this.totalRecords = data.totalRecords;
            this.loading = false;
        });
    },
    methods: {
        onLazyEvent(event) {
            const filters = {};
            // proxy to object
            const x = JSON.parse(JSON.stringify(this.filters));
            const y = Object.keys(x);

            for(let i=0; i<this.columns.length; i++) {
                let obj = {};
                obj.matchMode = this.$refs[this.columns[i].field].filterMatchMode || "startsWith";
                for(let j=0; j<y.length; j++) {
                    if(this.columns[i].field === y[j]) {
                        obj.value = this.filters[this.columns[i].field];
                    }
                    else obj.value = null;
                }
                filters[this.columns[i].field] = obj;
            }
          
            this.loading = true;
            let params = {
                first: event.first,
                rows: event.rows,
                sortField: event.sortField,
                sortOrder: event.sortOrder,
                filters: filters
            };

            setTimeout(() => {
                this.customerService.getCustomers({lazyEvent: JSON.stringify( params )}).then(data => {
                    this.customers = data.customers;
                    this.totalRecords = data.totalRecords;
                    this.loading = false;
                });
            }, 1000);
        },
        onPage(event) {
            this.onLazyEvent(event);
        },
        onSort(event) {
            this.onLazyEvent(event);
        },
        onFilter(event) {
            if(event.keyCode === 13 || event.value) {
                const filters = {}; 
                // proxy to object
                const x = JSON.parse(JSON.stringify(this.filters));
                const y = Object.keys(x);

                for(let i=0; i<this.columns.length; i++) {
                    let obj = {};
                    obj.matchMode = this.$refs[this.columns[i].field].filterMatchMode || "startsWith";
                    for(let j=0; j<y.length; j++) {
                        if(this.columns[i].field === y[j]) {
                            obj["value"] = this.filters[this.columns[i].field];
                        }
                        else obj["value"] = null;
                    }
                    filters[this.columns[i].field] = obj;
                }

                this.loading = true;
                let params = {
                    first: 0,
                    rows: this.$refs.dt.rows,
                    sortField: null,
                    sortOrder: null,
                    filters: filters
                };

                setTimeout(() => {
                    this.customerService.getCustomers({lazyEvent: JSON.stringify( params )}).then(data => {
                        this.customers = data.customers;
                        this.totalRecords = data.totalRecords;
                        this.loading = false;
                    });
                }, 1000);
            }
        }
    }
}
</script>