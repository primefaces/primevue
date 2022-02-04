<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>Lazy</span></h1>
				<p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking corresponding callbacks everytime paging, sorting and filtering happens.
                    Sample belows imitates lazy paging by using an in memory list. It is also important to assign the logical number of rows to totalRecords by doing a projection query for paginator configuration
                    so that paginator displays the UI assuming there are actually records of totalRecords size although in reality they aren't as in lazy mode, only the records that are displayed on the current page exist.
                    Also, the implementation of <b>checkbox selection</b> in lazy tables is left entirely to the user. Since the DataTable does not know what will happen to the data on the next page or whether there are
                    instant data changes, the selection array can be implemented in several ways. One of them is as in the example below.
                </p>
			</div>
		</div>

		<div class="content-section implementation">
            <div class="card">
                <DataTable :value="customers" :lazy="true" :paginator="true" :rows="10" :filters.sync="filters" ref="dt" dataKey="id"
                    :totalRecords="totalRecords" :loading="loading" @page="onPage($event)" @sort="onSort($event)" @filter="onFilter($event)" filterDisplay="row"
                    :globalFilterFields="['name','country.name', 'company', 'representative.name']" responsiveLayout="scroll"
                    :selection.sync="selectedCustomers" :selectAll="selectAll" @select-all-change="onSelectAllChange" @row-select="onRowSelect" @row-unselect="onRowUnselect">
                    <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
                    <Column field="name" header="Name" filterMatchMode="startsWith" ref="name" :sortable="true">
                        <template #filter="{filterModel,filterCallback}">
                            <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search by name"/>
                        </template>
                    </Column>
                    <Column field="country.name" header="Country" filterField="country.name" filterMatchMode="contains" ref="country.name" :sortable="true">
                        <template #filter="{filterModel,filterCallback}">
                            <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search by country"/>
                        </template>
                    </Column>
                    <Column field="company" header="Company" filterMatchMode="contains" ref="company" :sortable="true">
                        <template #filter="{filterModel,filterCallback}">
                            <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search by company"/>
                        </template>
                    </Column>
                    <Column field="representative.name" header="Representative" filterField="representative.name" ref="representative.name" :sortable="true">
                        <template #filter="{filterModel,filterCallback}">
                            <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search by representative"/>
                        </template>
                    </Column>
                </DataTable>
            </div>
		</div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;DataTable :value="customers" :lazy="true" :paginator="true" :rows="10" :filters.sync="filters" ref="dt" dataKey="id"
    :totalRecords="totalRecords" :loading="loading" @page="onPage($event)" @sort="onSort($event)" @filter="onFilter($event)" filterDisplay="row"
    :globalFilterFields="['name','country.name', 'company', 'representative.name']" responsiveLayout="scroll"
    :selection.sync="selectedCustomers" :selectAll="selectAll" @select-all-change="onSelectAllChange" @row-select="onRowSelect" @row-unselect="onRowUnselect" &gt;
    &lt;Column selectionMode="multiple" headerStyle="width: 3em"&gt;&lt;/Column&gt;
    &lt;Column field="name" header="Name" filterMatchMode="startsWith" ref="name" :sortable="true"&gt;
        &lt;template #filter="{filterModel,filterCallback}"&gt;
            &lt;InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search by name"/&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="country.name" header="Country" filterField="country.name" filterMatchMode="contains" ref="country.name" :sortable="true"&gt;
        &lt;template #filter="{filterModel,filterCallback}"&gt;
            &lt;InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search by country"/&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="company" header="Company" filterMatchMode="contains" ref="company" :sortable="true"&gt;
        &lt;template #filter="{filterModel,filterCallback}"&gt;
            &lt;InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search by company"/&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="representative.name" header="Representative" filterField="representative.name" ref="representative.name" :sortable="true"&gt;
        &lt;template #filter="{filterModel,filterCallback}"&gt;
            &lt;InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search by representative"/&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import CustomerService from '../../service/CustomerService';

export default {
    data() {
        return {
            loading: false,
            totalRecords: 0,
            customers: null,
            selectedCustomers: null,
            selectAll: false,
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

            setTimeout(() => {
                this.customerService.getCustomers(
                    {lazyEvent: JSON.stringify( this.lazyParams )})
                        .then(data => {
                            this.customers = data.customers;
                            this.totalRecords = data.totalRecords;
                            this.loading = false;
                    }
                );
            }, Math.random() * 1000 + 250);
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
            this.lazyParams.filters = this.filters;
            this.loadLazyData();
        },
        onSelectAllChange(event) {
            const selectAll = event.checked;

            if (selectAll) {
                this.customerService.getCustomers().then(data => {
                    this.selectAll = true;
                    this.selectedCustomers = data.customers;
                });
            }
            else {
                this.selectAll = false;
                this.selectedCustomers = [];
            }
        },
        onRowSelect() {
            this.selectAll = this.selectedCustomers.length === this.totalRecords
        },
        onRowUnselect() {
            this.selectAll = false;
        }
    }
}
</CodeHighlight>
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
            selectedCustomers: null,
            selectAll: false,
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

            setTimeout(() => {
                this.customerService.getCustomers(
                    {lazyEvent: JSON.stringify( this.lazyParams )})
                        .then(data => {
                            this.customers = data.customers;
                            this.totalRecords = data.totalRecords;
                            this.loading = false;
                    }
                );
            }, Math.random() * 1000 + 250);
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
            this.lazyParams.filters = this.filters;
            this.loadLazyData();
        },
        onSelectAllChange(event) {
            const selectAll = event.checked;

            if (selectAll) {
                this.customerService.getCustomers().then(data => {
                    this.selectAll = true;
                    this.selectedCustomers = data.customers;
                });
            }
            else {
                this.selectAll = false;
                this.selectedCustomers = [];
            }
        },
        onRowSelect() {
            this.selectAll = this.selectedCustomers.length === this.totalRecords
        },
        onRowUnselect() {
            this.selectAll = false;
        }
    }
}
</script>