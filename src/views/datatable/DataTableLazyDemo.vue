<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>Lazy</span></h1>
				<p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking corresponding callbacks everytime paging, sorting and filtering happens.
                    Sample belows imitates lazy paging by using an in memory list. It is also important to assign the logical number of rows to totalRecords by doing a projection query for paginator configuration
                    so that paginator displays the UI assuming there are actually records of totalRecords size although in reality they aren't as in lazy mode, only the records that are displayed on the current page exist.
                    In addition, the implementation of <b>checkbox selection</b> in lazy tables is left entirely to the user since the DataTable does not have access to the whole dataset in order to define the checked state.
                </p>
			</div>
            <AppDemoActions />
		</div>

		<div class="content-section implementation">
            <div class="card">
                <DataTable :value="customers" :lazy="true" :paginator="true" :rows="10" v-model:filters="filters" ref="dt" dataKey="id"
                    :totalRecords="totalRecords" :loading="loading" @page="onPage($event)" @sort="onSort($event)" @filter="onFilter($event)" filterDisplay="row"
                    :globalFilterFields="['name','country.name', 'company', 'representative.name']" responsiveLayout="scroll"
                    v-model:selection="selectedCustomers" :selectAll="selectAll" @select-all-change="onSelectAllChange" @row-select="onRowSelect" @row-unselect="onRowUnselect">
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

        <AppDoc name="DataTableLazyDemo" :sources="sources" :service="['CustomerService']" github="datatable/DataTableLazyDemo.vue" />
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
            ],
            sources: {
                'options-api': {
                    tabName: 'Options API Source',
                    content: `
<template>
	<div>
        <DataTable :value="customers" :lazy="true" :paginator="true" :rows="10" v-model:filters="filters" ref="dt" dataKey="id"
            :totalRecords="totalRecords" :loading="loading" @page="onPage($event)" @sort="onSort($event)" @filter="onFilter($event)" filterDisplay="row"
            :globalFilterFields="['name','country.name', 'company', 'representative.name']" responsiveLayout="scroll"
            v-model:selection="selectedCustomers" :selectAll="selectAll" @select-all-change="onSelectAllChange" @row-select="onRowSelect" @row-unselect="onRowUnselect">
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
</template>

<script>
import CustomerService from './service/CustomerService';

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
<\\/script>
`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
	<div>
        <DataTable :value="customers" :lazy="true" :paginator="true" :rows="10" v-model:filters="filters" ref="dt" dataKey="id"
            :totalRecords="totalRecords" :loading="loading" @page="onPage($event)" @sort="onSort($event)" @filter="onFilter($event)" filterDisplay="row"
            :globalFilterFields="['name','country.name', 'company', 'representative.name']" responsiveLayout="scroll"
            v-model:selection="selectedCustomers" :selectAll="selectAll" @select-all-change="onSelectAllChange" @row-select="onRowSelect" @row-unselect="onRowUnselect">
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
</template>

<script>
import { ref, onMounted } from 'vue';
import CustomerService from './service/CustomerService';

export default {
    setup() {
        onMounted(() => {
            loading.value = true;

            lazyParams.value = {
                first: 0,
                rows: dt.value.rows,
                sortField: null,
                sortOrder: null,
                filters: filters.value
            };

            loadLazyData();
        })

        const dt = ref();
        const loading = ref(false);
        const totalRecords = ref(0);
        const customers = ref();
        const selectedCustomers = ref();
        const selectAll = ref(false);
        const customerService = ref(new CustomerService());
        const filters = ref({
            'name': {value: '', matchMode: 'contains'},
            'country.name': {value: '', matchMode: 'contains'},
            'company': {value: '', matchMode: 'contains'},
            'representative.name': {value: '', matchMode: 'contains'},
        });
        const lazyParams = ref({});
        const columns = ref([
            {field: 'name', header: 'Name'},
            {field: 'country.name', header: 'Country'},
            {field: 'company', header: 'Company'},
            {field: 'representative.name', header: 'Representative'}
        ]);

        const loadLazyData = () => {
            loading.value = true;

            setTimeout(() => {
                customerService.value.getCustomers(
                    {lazyEvent: JSON.stringify( lazyParams.value )})
                        .then(data => {
                            customers.value = data.customers;
                            totalRecords.value  = data.totalRecords;
                            loading.value = false;
                    }
                );
            }, Math.random() * 1000 + 250);
        };
        const onPage = (event) => {
            lazyParams.value = event;
            loadLazyData();
        };
        const onSort = (event) => {
            lazyParams.value = event;
            loadLazyData();
        };
        const onFilter = () => {
            lazyParams.value.filters = filters.value ;
            loadLazyData();
        }
        const onSelectAllChange = (event) => {
            const selectAll = event.checked;

            if (selectAll) {
                customerService.value.getCustomers().then(data => {
                    selectAll.value = true;
                    selectedCustomers.value = data.customers;
                });
            }
            else {
                selectAll.value = false;
                selectedCustomers.value = [];
            }
        }
        const onRowSelect = () => {
            selectAll.value = selectedCustomers.value.length === totalRecords.value;
        }
        const onRowUnselect = () => {
            selectAll.value = false;
        }

        return { dt, loading, totalRecords, customers, filters, lazyParams, columns, loadLazyData, onPage, onSort, onFilter, onSelectAllChange, onRowSelect, onRowUnselect }
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
            <p-datatable :value="customers" :lazy="true" :paginator="true" :rows="10" v-model:filters="filters" ref="dt" dataKey="id"
                :totalRecords="totalRecords" :loading="loading" @page="onPage($event)" @sort="onSort($event)" @filter="onFilter($event)" filterDisplay="row"
                :globalFilterFields="['name','country.name', 'company', 'representative.name']" responsiveLayout="scroll"
                v-model:selection="selectedCustomers" :selectAll="selectAll" @select-all-change="onSelectAllChange" @row-select="onRowSelect" @row-unselect="onRowUnselect">
                <p-column selectionMode="multiple" headerStyle="width: 3em"></Column>
                <p-column field="name" header="Name" filter-match-mode="startsWith" ref="name" :sortable="true">
                    <template #filter="{filterModel,filterCallback}">
                        <p-inputtext type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search by name"></p-inputtext>
                    </template>
                </p-column>
                <p-column field="country.name" header="Country" filter-field="country.name" filter-match-mode="contains" ref="country.name" :sortable="true">
                    <template #filter="{filterModel,filterCallback}">
                        <p-inputtext type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search by country"></p-inputtext>
                    </template>
                </p-column>
                <p-column field="company" header="Company" filter-match-mode="contains" ref="company" :sortable="true">
                    <template #filter="{filterModel,filterCallback}">
                        <p-inputtext type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search by company"></p-inputtext>
                    </template>
                </p-column>
                <p-column field="representative.name" header="Representative" filter-field="representative.name" ref="representative.name" :sortable="true">
                    <template #filter="{filterModel,filterCallback}">
                        <p-inputtext type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search by representative"></p-inputtext>
                    </template>
                </p-column>
            </p-datatable>
        </div>

        <script type="module">
        const { createApp, ref, onMounted } = Vue;

        const App = {
            setup() {
                onMounted(() => {
                    loading.value = true;

                    lazyParams.value = {
                        first: 0,
                        rows: dt.value.rows,
                        sortField: null,
                        sortOrder: null,
                        filters: filters.value
                    };

                    loadLazyData();
                })

                const dt = ref();
                const loading = ref(false);
                const totalRecords = ref(0);
                const customers = ref();
                const selectedCustomers = ref();
                const selectAll = ref(false);
                const customerService = ref(new CustomerService());
                const filters = ref({
                    'name': {value: '', matchMode: 'contains'},
                    'country.name': {value: '', matchMode: 'contains'},
                    'company': {value: '', matchMode: 'contains'},
                    'representative.name': {value: '', matchMode: 'contains'},
                });
                const lazyParams = ref({});
                const columns = ref([
                    {field: 'name', header: 'Name'},
                    {field: 'country.name', header: 'Country'},
                    {field: 'company', header: 'Company'},
                    {field: 'representative.name', header: 'Representative'}
                ]);

                const loadLazyData = () => {
                    loading.value = true;

                    setTimeout(() => {
                        customerService.value.getCustomers(
                            {lazyEvent: JSON.stringify( lazyParams.value )})
                                .then(data => {
                                    customers.value = data.customers;
                                    totalRecords.value  = data.totalRecords;
                                    loading.value = false;
                            }
                        );
                    }, Math.random() * 1000 + 250);
                };
                const onPage = (event) => {
                    lazyParams.value = event;
                    loadLazyData();
                };
                const onSort = (event) => {
                    lazyParams.value = event;
                    loadLazyData();
                };
                const onFilter = () => {
                    lazyParams.value.filters = filters.value ;
                    loadLazyData();
                }

                const onSelectAllChange = (event) => {
                    const selectAll = event.checked;

                    if (selectAll) {
                        customerService.value.getCustomers().then(data => {
                            selectAll.value = true;
                            selectedCustomers.value = data.customers;
                        });
                    }
                    else {
                        selectAll.value = false;
                        selectedCustomers.value = [];
                    }
                }
                const onRowSelect = () => {
                    selectAll.value = selectedCustomers.value.length === totalRecords.value;
                }
                const onRowUnselect = () => {
                    selectAll.value = false;
                }

                return { dt, loading, totalRecords, customers, filters, lazyParams, columns, loadLazyData, onPage, onSort, onFilter, onSelectAllChange, onRowSelect, onRowUnselect }
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
                this.customerService.getCustomers({lazyEvent: JSON.stringify( this.lazyParams )}).then(data => {
                    this.customers = data.customers;
                    this.totalRecords = data.totalRecords;
                    this.loading = false;
                });
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
