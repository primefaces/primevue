<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking corresponding callbacks everytime <i>paging</i>, <i>sorting</i> and <i>filtering</i> occurs. Sample below
            imitates lazy loading data from a remote datasource using an in-memory list and timeouts to mimic network connection.
        </p>
        <p>
            Enabling the <i>lazy</i> property and assigning the logical number of rows to <i>totalRecords</i> by doing a projection query are the key elements of the implementation so that paginator displays the UI assuming there are actually records
            of totalRecords size although in reality they are not present on page, only the records that are displayed on the current page exist.
        </p>
        <p>Note that, the implementation of <i>checkbox selection</i> in lazy mode needs to be handled manually as in this example since the DataTable cannot know about the whole dataset.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card p-fluid">
            <DataTable
                ref="dt"
                v-model:filters="filters"
                v-model:selection="selectedCustomers"
                :value="customers"
                lazy
                paginator
                :first="first"
                :rows="10"
                dataKey="id"
                :totalRecords="totalRecords"
                :loading="loading"
                @page="onPage($event)"
                @sort="onSort($event)"
                @filter="onFilter($event)"
                filterDisplay="row"
                :globalFilterFields="['name', 'country.name', 'company', 'representative.name']"
                :selectAll="selectAll"
                @select-all-change="onSelectAllChange"
                @row-select="onRowSelect"
                @row-unselect="onRowUnselect"
                tableStyle="min-width: 75rem"
            >
                <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
                <Column field="name" header="Name" filterMatchMode="startsWith" sortable>
                    <template #filter="{ filterModel, filterCallback }">
                        <InputText v-model="filterModel.value" type="text" @keydown.enter="filterCallback()" placeholder="Search" />
                    </template>
                </Column>
                <Column field="country.name" header="Country" filterField="country.name" filterMatchMode="contains" sortable>
                    <template #body="{ data }">
                        <div class="flex items-center gap-2">
                            <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`flag flag-${data.country.code}`" style="width: 24px" />
                            <span>{{ data.country.name }}</span>
                        </div>
                    </template>
                    <template #filter="{ filterModel, filterCallback }">
                        <InputText v-model="filterModel.value" type="text" @keydown.enter="filterCallback()" placeholder="Search" />
                    </template>
                </Column>
                <Column field="company" header="Company" filterMatchMode="contains" sortable>
                    <template #filter="{ filterModel, filterCallback }">
                        <InputText v-model="filterModel.value" type="text" @keydown.enter="filterCallback()" placeholder="Search" />
                    </template>
                </Column>
                <Column field="representative.name" header="Representative" filterField="representative.name" sortable>
                    <template #body="{ data }">
                        <div class="flex items-center gap-2">
                            <img :alt="data.representative.name" :src="`https://primefaces.org/cdn/primevue/images/avatar/${data.representative.image}`" style="width: 32px" />
                            <span>{{ data.representative.name }}</span>
                        </div>
                    </template>
                    <template #filter="{ filterModel, filterCallback }">
                        <InputText v-model="filterModel.value" type="text" @keydown.enter="filterCallback()" placeholder="Search" />
                    </template>
                </Column>
            </DataTable>
        </div>
    </DeferredDemo>
    <DocSectionCode :code="code" :service="['CustomerService']" />
</template>

<script>
import { CustomerService } from '@/service/CustomerService';

export default {
    data() {
        return {
            loading: false,
            totalRecords: 0,
            customers: null,
            selectedCustomers: null,
            selectAll: false,
            first: 0,
            filters: {
                name: { value: '', matchMode: 'contains' },
                'country.name': { value: '', matchMode: 'contains' },
                company: { value: '', matchMode: 'contains' },
                'representative.name': { value: '', matchMode: 'contains' }
            },
            lazyParams: {},
            columns: [
                { field: 'name', header: 'Name' },
                { field: 'country.name', header: 'Country' },
                { field: 'company', header: 'Company' },
                { field: 'representative.name', header: 'Representative' }
            ],
            code: {
                basic: `
<DataTable :value="customers" lazy paginator :first="first" :rows="10" v-model:filters="filters" ref="dt" dataKey="id"
        :totalRecords="totalRecords" :loading="loading" @page="onPage($event)" @sort="onSort($event)" @filter="onFilter($event)" filterDisplay="row"
        :globalFilterFields="['name','country.name', 'company', 'representative.name']"
        v-model:selection="selectedCustomers" :selectAll="selectAll" @select-all-change="onSelectAllChange" @row-select="onRowSelect" @row-unselect="onRowUnselect" tableStyle="min-width: 75rem">
    <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
    <Column field="name" header="Name" filterMatchMode="startsWith" sortable>
        <template #filter="{filterModel,filterCallback}">
            <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" placeholder="Search"/>
        </template>
    </Column>
    <Column field="country.name" header="Country" filterField="country.name" filterMatchMode="contains" sortable>
        <template #body="{ data }">
            <div class="flex items-center gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${data.country.code}\`" style="width: 24px" />
                <span>{{ data.country.name }}</span>
            </div>
        </template>
        <template #filter="{filterModel,filterCallback}">
            <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" placeholder="Search"/>
        </template>
    </Column>
    <Column field="company" header="Company" filterMatchMode="contains" sortable>
        <template #filter="{filterModel,filterCallback}">
            <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" placeholder="Search"/>
        </template>
    </Column>
    <Column field="representative.name" header="Representative" filterField="representative.name" sortable>
        <template #body="{ data }">
            <div class="flex items-center gap-2">
                <img :alt="data.representative.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${data.representative.image}\`" style="width: 32px" />
                <span>{{ data.representative.name }}</span>
            </div>
        </template>
        <template #filter="{filterModel,filterCallback}">
            <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" placeholder="Search"/>
        </template>
    </Column>
</DataTable>
`,
                options: `
<template>
	<div class="card p-fluid">
        <DataTable :value="customers" lazy paginator :first="first" :rows="10" v-model:filters="filters" ref="dt" dataKey="id"
            :totalRecords="totalRecords" :loading="loading" @page="onPage($event)" @sort="onSort($event)" @filter="onFilter($event)" filterDisplay="row"
            :globalFilterFields="['name','country.name', 'company', 'representative.name']"
            v-model:selection="selectedCustomers" :selectAll="selectAll" @select-all-change="onSelectAllChange" @row-select="onRowSelect" @row-unselect="onRowUnselect" tableStyle="min-width: 75rem">
            <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
            <Column field="name" header="Name" filterMatchMode="startsWith" sortable>
                <template #filter="{filterModel,filterCallback}">
                    <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" placeholder="Search"/>
                </template>
            </Column>
            <Column field="country.name" header="Country" filterField="country.name" filterMatchMode="contains" sortable>
                <template #body="{ data }">
                    <div class="flex items-center gap-2">
                        <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${data.country.code}\`" style="width: 24px" />
                        <span>{{ data.country.name }}</span>
                    </div>
                </template>
                <template #filter="{filterModel,filterCallback}">
                    <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" placeholder="Search"/>
                </template>
            </Column>
            <Column field="company" header="Company" filterMatchMode="contains" sortable>
                <template #filter="{filterModel,filterCallback}">
                    <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" placeholder="Search"/>
                </template>
            </Column>
            <Column field="representative.name" header="Representative" filterField="representative.name" sortable>
                <template #body="{ data }">
                    <div class="flex items-center gap-2">
                        <img :alt="data.representative.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${data.representative.image}\`" style="width: 32px" />
                        <span>{{ data.representative.name }}</span>
                    </div>
                </template>
                <template #filter="{filterModel,filterCallback}">
                    <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" placeholder="Search"/>
                </template>
            </Column>
        </DataTable>
	</div>
</template>

<script>
import { CustomerService } from '@/service/CustomerService';

export default {
    data() {
        return {
            loading: false,
            totalRecords: 0,
            customers: null,
            selectedCustomers: null,
            selectAll: false,
            first: 0,
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
    mounted() {
        this.loading = true;

        this.lazyParams = {
            first: 0,
            rows: 10,
            sortField: null,
            sortOrder: null,
            filters: this.filters
        };

        this.loadLazyData();
    },
    methods: {
        loadLazyData() {
            this.loading = true;
            this.lazyParams = { ...this.lazyParams, first: event?.first || this.first };

            setTimeout(() => {
                CustomerService.getCustomers({ lazyEvent: JSON.stringify(this.lazyParams) }).then((data) => {
                    this.customers = data.customers;
                    this.totalRecords = data.totalRecords;
                    this.loading = false;
                });
            }, Math.random() * 1000 + 250);
        },
        onPage(event) {
            this.lazyParams = event;
            this.loadLazyData(event);
        },
        onSort(event) {
            this.lazyParams = event;
            this.loadLazyData(event);
        },
        onFilter(event) {
            this.lazyParams.filters = this.filters;
            this.loadLazyData(event);
        },
        onSelectAllChange(event) {
            const selectAll = event.checked;

            if (selectAll) {
                CustomerService.getCustomers().then(data => {
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
<\/script>

`,
                composition: `
<template>
	<div class="card p-fluid">
        <DataTable :value="customers" lazy paginator :first="first" :rows="10" v-model:filters="filters" ref="dt" dataKey="id"
            :totalRecords="totalRecords" :loading="loading" @page="onPage($event)" @sort="onSort($event)" @filter="onFilter($event)" filterDisplay="row"
            :globalFilterFields="['name','country.name', 'company', 'representative.name']"
            v-model:selection="selectedCustomers" :selectAll="selectAll" @select-all-change="onSelectAllChange" @row-select="onRowSelect" @row-unselect="onRowUnselect" tableStyle="min-width: 75rem">
            <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
            <Column field="name" header="Name" filterMatchMode="startsWith" sortable>
                <template #filter="{filterModel,filterCallback}">
                    <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" placeholder="Search"/>
                </template>
            </Column>
            <Column field="country.name" header="Country" filterField="country.name" filterMatchMode="contains" sortable>
                <template #body="{ data }">
                    <div class="flex items-center gap-2">
                        <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${data.country.code}\`" style="width: 24px" />
                        <span>{{ data.country.name }}</span>
                    </div>
                </template>
                <template #filter="{filterModel,filterCallback}">
                    <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" placeholder="Search"/>
                </template>
            </Column>
            <Column field="company" header="Company" filterMatchMode="contains" sortable>
                <template #filter="{filterModel,filterCallback}">
                    <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" placeholder="Search"/>
                </template>
            </Column>
            <Column field="representative.name" header="Representative" filterField="representative.name" sortable>
                <template #body="{ data }">
                    <div class="flex items-center gap-2">
                        <img :alt="data.representative.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${data.representative.image}\`" style="width: 32px" />
                        <span>{{ data.representative.name }}</span>
                    </div>
                </template>
                <template #filter="{filterModel,filterCallback}">
                    <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" placeholder="Search"/>
                </template>
            </Column>
        </DataTable>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { CustomerService } from '@/service/CustomerService';

onMounted(() => {
    loading.value = true;

    lazyParams.value = {
        first: 0,
        rows: 10,
        sortField: null,
        sortOrder: null,
        filters: filters.value
    };

    loadLazyData();
});

const dt = ref();
const loading = ref(false);
const totalRecords = ref(0);
const customers = ref();
const selectedCustomers = ref();
const selectAll = ref(false);
const first = ref(0);
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

const loadLazyData = (event) => {
    loading.value = true;
    lazyParams.value = { ...lazyParams.value, first: event?.first || first.value };

    setTimeout(() => {
        CustomerService.getCustomers({ lazyEvent: JSON.stringify(lazyParams.value) }).then((data) => {
            customers.value = data.customers;
            totalRecords.value = data.totalRecords;
            loading.value = false;
        });
    }, Math.random() * 1000 + 250);
};
const onPage = (event) => {
    lazyParams.value = event;
    loadLazyData(event);
};
const onSort = (event) => {
    lazyParams.value = event;
    loadLazyData(event);
};
const onFilter = (event) => {
    lazyParams.value.filters = filters.value ;
    loadLazyData(event);
};
const onSelectAllChange = (event) => {
    selectAll.value = event.checked;

    if (selectAll) {
        CustomerService.getCustomers().then(data => {
            selectAll.value = true;
            selectedCustomers.value = data.customers;
        });
    }
    else {
        selectAll.value = false;
        selectedCustomers.value = [];
    }
};
const onRowSelect = () => {
    selectAll.value = selectedCustomers.value.length === totalRecords.value;
};
const onRowUnselect = () => {
    selectAll.value = false;
};

<\/script>
`,
                data: `
{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...`
            }
        };
    },
    methods: {
        loadDemoData() {
            this.loading = true;

            this.lazyParams = {
                first: 0,
                rows: 10,
                sortField: null,
                sortOrder: null,
                filters: this.filters
            };

            this.loadLazyData();
        },
        loadLazyData(event) {
            this.loading = true;
            this.lazyParams = { ...this.lazyParams, first: event?.first || this.first };

            setTimeout(
                () => {
                    CustomerService.getCustomers({ lazyEvent: JSON.stringify(this.lazyParams) }).then((data) => {
                        this.customers = data.customers;
                        this.totalRecords = data.totalRecords;
                        this.loading = false;
                    });
                },
                Math.random() * 1000 + 250
            );
        },
        onPage(event) {
            this.lazyParams = event;
            this.loadLazyData(event);
        },
        onSort(event) {
            this.lazyParams = event;
            this.loadLazyData(event);
        },
        onFilter(event) {
            this.lazyParams.filters = this.filters;
            this.loadLazyData(event);
        },
        onSelectAllChange(event) {
            const selectAll = event.checked;

            if (selectAll) {
                CustomerService.getCustomers().then((data) => {
                    this.selectAll = true;
                    this.selectedCustomers = data.customers;
                });
            } else {
                this.selectAll = false;
                this.selectedCustomers = [];
            }
        },
        onRowSelect() {
            this.selectAll = this.selectedCustomers.length === this.totalRecords;
        },
        onRowUnselect() {
            this.selectAll = false;
        }
    }
};
</script>
