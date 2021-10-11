<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>State</span></h1>
				<p>Stateful table allows keeping the state such as page, sort and filtering either at local storage or session storage so that when the page is visited again, table would render the data using its last settings.</p>
			</div>
            <AppDemoActions />
		</div>

		<div class="content-section implementation">
            <div class="card">
                <h5>Session Storage</h5>
                <DataTable :value="customers" :paginator="true" :rows="10" v-model:filters="filters1"
                    v-model:selection="selectedCustomer1" selectionMode="single" dataKey="id"
                    stateStorage="session" stateKey="dt-state-demo-session" responsiveLayout="scroll">
                    <template #header>
                       <span class="p-input-icon-left">
                            <i class="pi pi-search" />
                            <InputText v-model="filters1['global'].value" placeholder="Global Search" />
                        </span>
                    </template>
                    <Column field="name" header="Name" :sortable="true" style="width:25%">
                        <template #filter>
                            <InputText type="text" v-model="filters1['name']" class="p-column-filter" placeholder="Search by name"/>
                        </template>
                    </Column>
                    <Column header="Country" :sortable="true" sortField="country.name" filterField="country.name" filterMatchMode="contains" style="width:25%">
                        <template #body="slotProps">
                            <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.data.country.code" width="30" />
                            <span class="image-text">{{slotProps.data.country.name}}</span>
                        </template>
                        <template #filter>
                            <InputText type="text" v-model="filters1['country.name']" class="p-column-filter" placeholder="Search by country"/>
                        </template>
                    </Column>
                    <Column header="Representative" :sortable="true" sortField="representative.name" filterField="representative.name" filterMatchMode="in" style="width:25%">
                        <template #body="slotProps">
                            <img :alt="slotProps.data.representative.name" :src="'demo/images/avatar/' + slotProps.data.representative.image" width="32" style="vertical-align: middle" />
                            <span class="image-text">{{slotProps.data.representative.name}}</span>
                        </template>
                            <template #filter>
                            <MultiSelect v-model="filters1['representative.name']" :options="representatives" optionLabel="name" optionValue="name" placeholder="All" class="p-column-filter">
                                <template #option="slotProps">
                                    <div class="p-multiselect-representative-option">
                                        <img :alt="slotProps.option.name" :src="'demo/images/avatar/' + slotProps.option.image" width="32" style="vertical-align: middle" />
                                        <span class="image-text">{{slotProps.option.name}}</span>
                                    </div>
                                </template>
                            </MultiSelect>
                        </template>
                    </Column>
                    <Column field="status" header="Status" :sortable="true" filterMatchMode="equals" style="width:25%">
                        <template #body="slotProps">
                            <span :class="'customer-badge status-' + slotProps.data.status">{{slotProps.data.status}}</span>
                        </template>
                        <template #filter>
                            <Dropdown v-model="filters1['status']" :options="statuses" placeholder="Select a Status" class="p-column-filter" :showClear="true">
                                <template #option="slotProps">
                                    <span :class="'customer-badge status-' + slotProps.option">{{slotProps.option}}</span>
                                </template>
                            </Dropdown>
                        </template>
                    </Column>
                    <template #empty>
                        No customers found.
                    </template>
                </DataTable>
            </div>

            <div class="card">
                <h5>Local Storage</h5>
                <DataTable :value="customers" :paginator="true" :rows="10" v-model:filters="filters2"
                    v-model:selection="selectedCustomer2" selectionMode="single" dataKey="id"
                    stateStorage="local" stateKey="dt-state-demo-local" responsiveLayout="scroll">
                    <template #header>
                       <span class="p-input-icon-left">
                            <i class="pi pi-search" />
                            <InputText v-model="filters2['global'].value" placeholder="Global Search" />
                        </span>
                    </template>
                    <Column field="name" header="Name" :sortable="true" style="width:25%">
                        <template #filter>
                            <InputText type="text" v-model="filters2['name']" class="p-column-filter" placeholder="Search by name"/>
                        </template>
                    </Column>
                    <Column header="Country" :sortable="true" sortField="country.name" filterField="country.name" filterMatchMode="contains" style="width:25%">
                        <template #body="slotProps">
                            <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.data.country.code" width="30" />
                            <span class="image-text">{{slotProps.data.country.name}}</span>
                        </template>
                        <template #filter>
                            <InputText type="text" v-model="filters2['country.name']" class="p-column-filter" placeholder="Search by country"/>
                        </template>
                    </Column>
                    <Column header="Representative" :sortable="true" sortField="representative.name" filterField="representative.name" filterMatchMode="in" style="width:25%">
                        <template #body="slotProps">
                            <img :alt="slotProps.data.representative.name" :src="'demo/images/avatar/' + slotProps.data.representative.image" width="32" style="vertical-align: middle" />
                            <span class="image-text">{{slotProps.data.representative.name}}</span>
                        </template>
                            <template #filter>
                            <MultiSelect v-model="filters2['representative.name']" :options="representatives" optionLabel="name" optionValue="name" placeholder="All" class="p-column-filter">
                                <template #option="slotProps">
                                    <div class="p-multiselect-representative-option">
                                        <img :alt="slotProps.option.name" :src="'demo/images/avatar/' + slotProps.option.image" width="32" style="vertical-align: middle" />
                                        <span class="image-text">{{slotProps.option.name}}</span>
                                    </div>
                                </template>
                            </MultiSelect>
                        </template>
                    </Column>
                    <Column field="status" header="Status" :sortable="true" filterMatchMode="equals" style="width:25%">
                        <template #body="slotProps">
                            <span :class="'customer-badge status-' + slotProps.data.status">{{slotProps.data.status}}</span>
                        </template>
                        <template #filter>
                            <Dropdown v-model="filters2['status']" :options="statuses" placeholder="Select a Status" class="p-column-filter" :showClear="true">
                                <template #option="slotProps">
                                    <span :class="'customer-badge status-' + slotProps.option">{{slotProps.option}}</span>
                                </template>
                            </Dropdown>
                        </template>
                    </Column>
                    <template #empty>
                        No customers found.
                    </template>
                </DataTable>
            </div>
		</div>
              
        <AppDoc name="DataTableStateDemo" :sources="sources" :service="['CustomerService']" :data="['customers-medium']" github="datatable/DataTableStateDemo.vue" />

	</div>
</template>

<script>
import { FilterMatchMode } from 'primevue/api';
import CustomerService from '../../service/CustomerService';

export default {
    data() {
        return {
            customers: null,
            selectedCustomer1: null,
            selectedCustomer2: null,
            filters1: {},
            filters2: {},
            loading: true,
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
            statuses: [
                'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
            ],
            sources: {
                'options-api': {
                    tabName: 'Options API Source',
                    content: `
<template>
	<div>
        <div class="card">
            <h5>Session Storage</h5>
            <DataTable :value="customers" :paginator="true" :rows="10" v-model:filters="filters1"
                v-model:selection="selectedCustomer1" selectionMode="single" dataKey="id"
                stateStorage="session" stateKey="dt-state-demo-session" responsiveLayout="scroll">
                <template #header>
                   <span class="p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText v-model="filters1['global'].value" placeholder="Global Search" />
                    </span>
                </template>
                <Column field="name" header="Name" :sortable="true" style="width:25%">
                    <template #filter>
                        <InputText type="text" v-model="filters1['name']" class="p-column-filter" placeholder="Search by name"/>
                    </template>
                </Column>
                <Column header="Country" :sortable="true" sortField="country.name" filterField="country.name" filterMatchMode="contains" style="width:25%">
                    <template #body="slotProps">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="20" />
                        <span class="image-text">{{slotProps.data.country.name}}</span>
                    </template>
                    <template #filter>
                        <InputText type="text" v-model="filters1['country.name']" class="p-column-filter" placeholder="Search by country"/>
                    </template>
                </Column>
                <Column header="Representative" :sortable="true" sortField="representative.name" filterField="representative.name" filterMatchMode="in" style="width:25%">
                    <template #body="slotProps">
                        <img :alt="slotProps.data.representative.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="20" style="vertical-align: middle" />
                        <span class="image-text">{{slotProps.data.representative.name}}</span>
                    </template>
                        <template #filter>
                        <MultiSelect v-model="filters1['representative.name']" :options="representatives" optionLabel="name" optionValue="name" placeholder="All" class="p-column-filter">
                            <template #option="slotProps">
                                <div class="p-multiselect-representative-option">
                                    <img :alt="slotProps.option.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="20" style="vertical-align: middle" />
                                    <span class="image-text">{{slotProps.option.name}}</span>
                                </div>
                            </template>
                        </MultiSelect>
                    </template>
                </Column>
                <Column field="status" header="Status" :sortable="true" filterMatchMode="equals" style="width:25%">
                    <template #body="slotProps">
                        <span :class="'customer-badge status-' + slotProps.data.status">{{slotProps.data.status}}</span>
                    </template>
                    <template #filter>
                        <Dropdown v-model="filters1['status']" :options="statuses" placeholder="Select a Status" class="p-column-filter" :showClear="true">
                            <template #option="slotProps">
                                <span :class="'customer-badge status-' + slotProps.option">{{slotProps.option}}</span>
                            </template>
                        </Dropdown>
                    </template>
                </Column>
                <template #empty>
                    No customers found.
                </template>
            </DataTable>
        </div>

        <div class="card">
            <h5>Local Storage</h5>
            <DataTable :value="customers" :paginator="true" :rows="10" v-model:filters="filters2"
                v-model:selection="selectedCustomer2" selectionMode="single" dataKey="id"
                stateStorage="local" stateKey="dt-state-demo-local" responsiveLayout="scroll">
                <template #header>
                   <span class="p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText v-model="filters2['global'].value" placeholder="Global Search" />
                    </span>
                </template>
                <Column field="name" header="Name" :sortable="true" style="width:25%">
                    <template #filter>
                        <InputText type="text" v-model="filters2['name']" class="p-column-filter" placeholder="Search by name"/>
                    </template>
                </Column>
                <Column header="Country" :sortable="true" sortField="country.name" filterField="country.name" filterMatchMode="contains" style="width:25%">
                    <template #body="slotProps">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="20" />
                        <span class="image-text">{{slotProps.data.country.name}}</span>
                    </template>
                    <template #filter>
                        <InputText type="text" v-model="filters2['country.name']" class="p-column-filter" placeholder="Search by country"/>
                    </template>
                </Column>
                <Column header="Representative" :sortable="true" sortField="representative.name" filterField="representative.name" filterMatchMode="in" style="width:25%">
                    <template #body="slotProps">
                        <img :alt="slotProps.data.representative.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="20" style="vertical-align: middle" />
                        <span class="image-text">{{slotProps.data.representative.name}}</span>
                    </template>
                        <template #filter>
                        <MultiSelect v-model="filters2['representative.name']" :options="representatives" optionLabel="name" optionValue="name" placeholder="All" class="p-column-filter">
                            <template #option="slotProps">
                                <div class="p-multiselect-representative-option">
                                    <img :alt="slotProps.option.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="20" style="vertical-align: middle" />
                                    <span class="image-text">{{slotProps.option.name}}</span>
                                </div>
                            </template>
                        </MultiSelect>
                    </template>
                </Column>
                <Column field="status" header="Status" :sortable="true" filterMatchMode="equals" style="width:25%">
                    <template #body="slotProps">
                        <span :class="'customer-badge status-' + slotProps.data.status">{{slotProps.data.status}}</span>
                    </template>
                    <template #filter>
                        <Dropdown v-model="filters2['status']" :options="statuses" placeholder="Select a Status" class="p-column-filter" :showClear="true">
                            <template #option="slotProps">
                                <span :class="'customer-badge status-' + slotProps.option">{{slotProps.option}}</span>
                            </template>
                        </Dropdown>
                    </template>
                </Column>
                <template #empty>
                    No customers found.
                </template>
            </DataTable>
        </div>
	</div>
</template>

<script>
import { FilterMatchMode } from 'primevue/api';
import CustomerService from './service/CustomerService';

export default {
    data() {
        return {
            customers: null,
            selectedCustomer1: null,
            selectedCustomer2: null,
            filters1: {},
            filters2: {},
            loading: true,
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
            statuses: [
                'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
            ]
        }
    },
    customerService: null,
    created() {
        this.customerService = new CustomerService();
        this.initFilters1();
        this.initFilters2();
    },
    mounted() {
        this.customerService.getCustomersMedium().then(data => this.customers = data);
    },
    methods: {
        initFilters1() {
            this.filters1 = {
                'global': {value: null, matchMode: FilterMatchMode.CONTAINS}
            }
        },
        initFilters2() {
            this.filters2 = {
                'global': {value: null, matchMode: FilterMatchMode.CONTAINS}
            }
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
        <div class="card">
            <h5>Session Storage</h5>
            <DataTable :value="customers" :paginator="true" :rows="10" v-model:filters="filters1"
                v-model:selection="selectedCustomer1" selectionMode="single" dataKey="id"
                stateStorage="session" stateKey="dt-state-demo-session" responsiveLayout="scroll">
                <template #header>
                   <span class="p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText v-model="filters1['global'].value" placeholder="Global Search" />
                    </span>
                </template>
                <Column field="name" header="Name" :sortable="true" style="width:25%">
                    <template #filter>
                        <InputText type="text" v-model="filters1['name']" class="p-column-filter" placeholder="Search by name"/>
                    </template>
                </Column>
                <Column header="Country" :sortable="true" sortField="country.name" filterField="country.name" filterMatchMode="contains" style="width:25%">
                    <template #body="slotProps">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="20" />
                        <span class="image-text">{{slotProps.data.country.name}}</span>
                    </template>
                    <template #filter>
                        <InputText type="text" v-model="filters1['country.name']" class="p-column-filter" placeholder="Search by country"/>
                    </template>
                </Column>
                <Column header="Representative" :sortable="true" sortField="representative.name" filterField="representative.name" filterMatchMode="in" style="width:25%">
                    <template #body="slotProps">
                        <img :alt="slotProps.data.representative.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="20" style="vertical-align: middle" />
                        <span class="image-text">{{slotProps.data.representative.name}}</span>
                    </template>
                        <template #filter>
                        <MultiSelect v-model="filters1['representative.name']" :options="representatives" optionLabel="name" optionValue="name" placeholder="All" class="p-column-filter">
                            <template #option="slotProps">
                                <div class="p-multiselect-representative-option">
                                    <img :alt="slotProps.option.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="20" style="vertical-align: middle" />
                                    <span class="image-text">{{slotProps.option.name}}</span>
                                </div>
                            </template>
                        </MultiSelect>
                    </template>
                </Column>
                <Column field="status" header="Status" :sortable="true" filterMatchMode="equals" style="width:25%">
                    <template #body="slotProps">
                        <span :class="'customer-badge status-' + slotProps.data.status">{{slotProps.data.status}}</span>
                    </template>
                    <template #filter>
                        <Dropdown v-model="filters1['status']" :options="statuses" placeholder="Select a Status" class="p-column-filter" :showClear="true">
                            <template #option="slotProps">
                                <span :class="'customer-badge status-' + slotProps.option">{{slotProps.option}}</span>
                            </template>
                        </Dropdown>
                    </template>
                </Column>
                <template #empty>
                    No customers found.
                </template>
            </DataTable>
        </div>

        <div class="card">
            <h5>Local Storage</h5>
            <DataTable :value="customers" :paginator="true" :rows="10" v-model:filters="filters2"
                v-model:selection="selectedCustomer2" selectionMode="single" dataKey="id"
                stateStorage="local" stateKey="dt-state-demo-local" responsiveLayout="scroll">
                <template #header>
                   <span class="p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText v-model="filters2['global'].value" placeholder="Global Search" />
                    </span>
                </template>
                <Column field="name" header="Name" :sortable="true" style="width:25%">
                    <template #filter>
                        <InputText type="text" v-model="filters2['name']" class="p-column-filter" placeholder="Search by name"/>
                    </template>
                </Column>
                <Column header="Country" :sortable="true" sortField="country.name" filterField="country.name" filterMatchMode="contains" style="width:25%">
                    <template #body="slotProps">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="20" />
                        <span class="image-text">{{slotProps.data.country.name}}</span>
                    </template>
                    <template #filter>
                        <InputText type="text" v-model="filters2['country.name']" class="p-column-filter" placeholder="Search by country"/>
                    </template>
                </Column>
                <Column header="Representative" :sortable="true" sortField="representative.name" filterField="representative.name" filterMatchMode="in" style="width:25%">
                    <template #body="slotProps">
                        <img :alt="slotProps.data.representative.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="20" style="vertical-align: middle" />
                        <span class="image-text">{{slotProps.data.representative.name}}</span>
                    </template>
                        <template #filter>
                        <MultiSelect v-model="filters2['representative.name']" :options="representatives" optionLabel="name" optionValue="name" placeholder="All" class="p-column-filter">
                            <template #option="slotProps">
                                <div class="p-multiselect-representative-option">
                                    <img :alt="slotProps.option.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="20" style="vertical-align: middle" />
                                    <span class="image-text">{{slotProps.option.name}}</span>
                                </div>
                            </template>
                        </MultiSelect>
                    </template>
                </Column>
                <Column field="status" header="Status" :sortable="true" filterMatchMode="equals" style="width:25%">
                    <template #body="slotProps">
                        <span :class="'customer-badge status-' + slotProps.data.status">{{slotProps.data.status}}</span>
                    </template>
                    <template #filter>
                        <Dropdown v-model="filters2['status']" :options="statuses" placeholder="Select a Status" class="p-column-filter" :showClear="true">
                            <template #option="slotProps">
                                <span :class="'customer-badge status-' + slotProps.option">{{slotProps.option}}</span>
                            </template>
                        </Dropdown>
                    </template>
                </Column>
                <template #empty>
                    No customers found.
                </template>
            </DataTable>
        </div>
	</div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { FilterMatchMode } from 'primevue/api';
import CustomerService from './service/CustomerService';

export default {
    setup() {
        onMounted(() => {
            customerService.value.getCustomersMedium().then(data => customers.value = data);
        })

        const customers = ref();
        const customerService = ref(new CustomerService());
        const selectedCustomer1 = ref();
        const selectedCustomer2 = ref();
        const filters1 = ref({'global': {value: null, matchMode: FilterMatchMode.CONTAINS}});
        const filters2 = ref({'global': {value: null, matchMode: FilterMatchMode.CONTAINS}});
        const loading = ref(true);
        const representatives = ref([
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
        ]);
        const statuses = ref([
            'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
        ]);

        return { customers, customerService, selectedCustomer1, selectedCustomer2, filters1, filters2, loading, representatives, statuses }
    }
}
<\\/script>                  
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/datatable/datatable.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/multiselect/multiselect.min.js"><\\/script>
        <script src="./CustomerService.js"><\\/script>`,
                    content: `<div id="app">
            <div class="card">
                <h5>Session Storage</h5>
                <p-datatable :value="customers" :paginator="true" :rows="10" v-model:filters="filters1"
                    v-model:selection="selectedCustomer1" selection-mode="single" data-key="id"
                    state-storage="session" state-key="dt-state-demo-session" responsive-layout="scroll">
                    <template #header>
                    <span class="p-input-icon-left">
                            <i class="pi pi-search"></i>
                            <p-inputtext v-model="filters1['global'].value" placeholder="Global Search"></p-inputtext>
                        </span>
                    </template>
                    <p-column field="name" header="Name" :sortable="true" style="width:25%">
                        <template #filter>
                            <p-inputtext type="text" v-model="filters1['name']" class="p-column-filter" placeholder="Search by name"></p-inputtext>
                        </template>
                    </p-column>
                    <p-column header="Country" :sortable="true" sort-field="country.name" filter-field="country.name" filter-match-mode="contains" style="width:25%">
                        <template #body="slotProps">
                            <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="20" />
                            <span class="image-text">{{slotProps.data.country.name}}</span>
                        </template>
                        <template #filter>
                            <p-inputtext type="text" v-model="filters1['country.name']" class="p-column-filter" placeholder="Search by country"></p-inputtext>
                        </template>
                    </p-column>
                    <p-column header="Representative" :sortable="true" sort-field="representative.name" filter-field="representative.name" filter-match-mode="in" style="width:25%">
                        <template #body="slotProps">
                            <img :alt="slotProps.data.representative.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="20" style="vertical-align: middle" />
                            <span class="image-text">{{slotProps.data.representative.name}}</span>
                        </template>
                            <template #filter>
                            <p-multiselect v-model="filters1['representative.name']" :options="representatives" option-label="name" option-value="name" placeholder="All" class="p-column-filter">
                                <template #option="slotProps">
                                    <div class="p-multiselect-representative-option">
                                        <img :alt="slotProps.option.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="20" style="vertical-align: middle" />
                                        <span class="image-text">{{slotProps.option.name}}</span>
                                    </div>
                                </template>
                            </p-multiselect>
                        </template>
                    </p-column>
                    <p-column field="status" header="Status" :sortable="true" filter-match-mode="equals" style="width:25%">
                        <template #body="slotProps">
                            <span :class="'customer-badge status-' + slotProps.data.status">{{slotProps.data.status}}</span>
                        </template>
                        <template #filter>
                            <p-dropdown v-model="filters1['status']" :options="statuses" placeholder="Select a Status" class="p-column-filter" :show-clear="true">
                                <template #option="slotProps">
                                    <span :class="'customer-badge status-' + slotProps.option">{{slotProps.option}}</span>
                                </template>
                            </p-dropdown>
                        </template>
                    </p-column>
                    <template #empty>
                        No customers found.
                    </template>
                </p-datatable>
            </div>

            <div class="card">
                <h5>Local Storage</h5>
                <p-datatable :value="customers" :paginator="true" :rows="10" v-model:filters="filters2"
                    v-model:selection="selectedCustomer2" selection-mode="single" data-key="id"
                    state-storage="local" state-key="dt-state-demo-local" responsive-layout="scroll">
                    <template #header>
                    <span class="p-input-icon-left">
                            <i class="pi pi-search"></i>
                            <p-inputtext v-model="filters2['global'].value" placeholder="Global Search"></p-inputtext>
                        </span>
                    </template>
                    <p-column field="name" header="Name" :sortable="true" style="width:25%">
                        <template #filter>
                            <p-inputtext type="text" v-model="filters2['name']" class="p-column-filter" placeholder="Search by name"></p-inputtext>
                        </template>
                    </p-column>
                    <p-column header="Country" :sortable="true" sortField="country.name" filterField="country.name" filterMatchMode="contains" style="width:25%">
                        <template #body="slotProps">
                            <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="20" />
                            <span class="image-text">{{slotProps.data.country.name}}</span>
                        </template>
                        <template #filter>
                            <p-inputtext type="text" v-model="filters2['country.name']" class="p-column-filter" placeholder="Search by country"></p-inputtext>
                        </template>
                    </p-column>
                    <p-column header="Representative" :sortable="true" sortField="representative.name" filterField="representative.name" filterMatchMode="in" style="width:25%">
                        <template #body="slotProps">
                            <img :alt="slotProps.data.representative.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="20" style="vertical-align: middle" />
                            <span class="image-text">{{slotProps.data.representative.name}}</span>
                        </template>
                            <template #filter>
                            <p-multiselect v-model="filters2['representative.name']" :options="representatives" optionLabel="name" optionValue="name" placeholder="All" class="p-column-filter">
                                <template #option="slotProps">
                                    <div class="p-multiselect-representative-option">
                                        <img :alt="slotProps.option.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="20" style="vertical-align: middle" />
                                        <span class="image-text">{{slotProps.option.name}}</span>
                                    </div>
                                </template>
                            </p-multiselect>
                        </template>
                    </p-column>
                    <p-column field="status" header="Status" :sortable="true" filterMatchMode="equals" style="width:25%">
                        <template #body="slotProps">
                            <span :class="'customer-badge status-' + slotProps.data.status">{{slotProps.data.status}}</span>
                        </template>
                        <template #filter>
                            <p-dropdown v-model="filters2['status']" :options="statuses" placeholder="Select a Status" class="p-column-filter" :showClear="true">
                                <template #option="slotProps">
                                    <span :class="'customer-badge status-' + slotProps.option">{{slotProps.option}}</span>
                                </template>
                            </p-dropdown>
                        </template>
                    </p-column>
                    <template #empty>
                        No customers found.
                    </template>
                </p-datatable>
            </div>
        </div>

        <script type="module">
        const { createApp, ref, onMounted } = Vue;
        const { FilterMatchMode } = primevue.api;

        const App = {
            setup() {
                onMounted(() => {
                    customerService.value.getCustomersMedium().then(data => customers.value = data);
                })

                const customers = ref();
                const customerService = ref(new CustomerService());
                const selectedCustomer1 = ref();
                const selectedCustomer2 = ref();
                const filters1 = ref({'global': {value: null, matchMode: FilterMatchMode.CONTAINS}});
                const filters2 = ref({'global': {value: null, matchMode: FilterMatchMode.CONTAINS}});
                const loading = ref(true);
                const representatives = ref([
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
                ]);
                const statuses = ref([
                    'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
                ]);

                return { customers, customerService, selectedCustomer1, selectedCustomer2, filters1, filters2, loading, representatives, statuses }
            },
            components: {
                "p-datatable": primevue.datatable,
                "p-column": primevue.column,
                "p-inputtext": primevue.inputtext,
                "p-multiselect": primevue.multiselect,
                "p-dropdown": primevue.dropdown
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
        this.initFilters1();
        this.initFilters2();
    },
    mounted() {
        this.customerService.getCustomersMedium().then(data => this.customers = data);
    },
    methods: {
        initFilters1() {
            this.filters1 = {
                'global': {value: null, matchMode: FilterMatchMode.CONTAINS}
            }
        },
        initFilters2() {
            this.filters2 = {
                'global': {value: null, matchMode: FilterMatchMode.CONTAINS}
            }
        }
    }
}
</script>