<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>State</span></h1>
				<p>Stateful table allows keeping the state such as page, sort and filtering either at local storage or session storage so that when the page is visited again, table would render the data using its last settings.</p>
			</div>
		</div>

		<div class="content-section implementation">
            <div class="card">
                <h5>Session Storage</h5>
                <DataTable :value="customers" :paginator="true" :rows="10" :filters.sync="filters1"
                    :selection.sync="selectedCustomer1" selectionMode="single" dataKey="id"
                    stateStorage="session" stateKey="dt-state-demo-session" responsiveLayout="scroll">
                    <template #header>
                        <span class="p-input-icon-left">
                            <i class="pi pi-search" />
                            <InputText v-model="filters1['global'].value" placeholder="Global Search" />
                        </span>
                    </template>
                    <Column field="name" header="Name" :sortable="true" :styles="{width:'25%'}">
                        <template #filter>
                            <InputText type="text" v-model="filters1['name']" class="p-column-filter" placeholder="Search by name"/>
                        </template>
                    </Column>
                    <Column header="Country" :sortable="true" sortField="country.name" filterField="country.name" filterMatchMode="contains" :styles="{width:'25%'}">
                        <template #body="slotProps">
                            <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.data.country.code" width="30" />
                            <span class="image-text">{{slotProps.data.country.name}}</span>
                        </template>
                        <template #filter>
                            <InputText type="text" v-model="filters1['country.name']" class="p-column-filter" placeholder="Search by country"/>
                        </template>
                    </Column>
                    <Column header="Representative" :sortable="true" sortField="representative.name" filterField="representative.name" filterMatchMode="in" :styles="{width:'25%'}">
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
                    <Column field="status" header="Status" :sortable="true" filterMatchMode="equals" :styles="{width:'25%'}">
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
                <DataTable :value="customers" :paginator="true" :rows="10" :filters.sync="filters2"
                    :selection.sync="selectedCustomer2" selectionMode="single" dataKey="id"
                    stateStorage="local" stateKey="dt-state-demo-local" responsiveLayout="scroll">
                    <template #header>
                        <span class="p-input-icon-left">
                            <i class="pi pi-search" />
                            <InputText v-model="filters2['global'].value" placeholder="Global Search" />
                        </span>
                    </template>
                    <Column field="name" header="Name" :sortable="true" :styles="{width:'25%'}">
                        <template #filter>
                            <InputText type="text" v-model="filters2['name']" class="p-column-filter" placeholder="Search by name"/>
                        </template>
                    </Column>
                    <Column header="Country" :sortable="true" sortField="country.name" filterField="country.name" filterMatchMode="contains" :styles="{width:'25%'}">
                        <template #body="slotProps">
                            <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.data.country.code" width="30" />
                            <span class="image-text">{{slotProps.data.country.name}}</span>
                        </template>
                        <template #filter>
                            <InputText type="text" v-model="filters2['country.name']" class="p-column-filter" placeholder="Search by country"/>
                        </template>
                    </Column>
                    <Column header="Representative" :sortable="true" sortField="representative.name" filterField="representative.name" filterMatchMode="in" :styles="{width:'25%'}">
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
                    <Column field="status" header="Status" :sortable="true" filterMatchMode="equals" :styles="{width:'25%'}">
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

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;div class="card"&gt;
    &lt;h5&gt;Session Storage&lt;/h5&gt;
    &lt;DataTable :value="customers" :paginator="true" :rows="10" :filters.sync="filters1"
        :selection.sync="selectedCustomer1" selectionMode="single" dataKey="id"
        stateStorage="session" stateKey="dt-state-demo-session" responsiveLayout="scroll"&gt;
        &lt;template #header&gt;
            &lt;span class="p-input-icon-left"&gt;
                &lt;i class="pi pi-search" /&gt;
                &lt;InputText v-model="filters1['global'].value" placeholder="Global Search" /&gt;
            &lt;/span&gt;
        &lt;/template&gt;
        &lt;Column field="name" header="Name" :sortable="true" :styles="{width:'25%'}"&gt;
            &lt;template #filter&gt;
                &lt;InputText type="text" v-model="filters1['name']" class="p-column-filter" placeholder="Search by name"/&gt;
            &lt;/template&gt;
        &lt;/Column&gt;
        &lt;Column header="Country" :sortable="true" sortField="country.name" filterField="country.name" filterMatchMode="contains" :styles="{width:'25%'}"&gt;
            &lt;template #body="slotProps"&gt;
                &lt;img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.data.country.code" width="30" /&gt;
                &lt;span class="image-text"&gt;{{slotProps.data.country.name}}&lt;/span&gt;
            &lt;/template&gt;
            &lt;template #filter&gt;
                &lt;InputText type="text" v-model="filters1['country.name']" class="p-column-filter" placeholder="Search by country"/&gt;
            &lt;/template&gt;
        &lt;/Column&gt;
        &lt;Column header="Representative" :sortable="true" sortField="representative.name" filterField="representative.name" filterMatchMode="in" :styles="{width:'25%'}"&gt;
            &lt;template #body="slotProps"&gt;
                &lt;img :alt="slotProps.data.representative.name" :src="'demo/images/avatar/' + slotProps.data.representative.image" width="32" style="vertical-align: middle" /&gt;
                &lt;span class="image-text"&gt;{{slotProps.data.representative.name}}&lt;/span&gt;
            &lt;/template&gt;
                &lt;template #filter&gt;
                &lt;MultiSelect v-model="filters1['representative.name']" :options="representatives" optionLabel="name" optionValue="name" placeholder="All" class="p-column-filter"&gt;
                    &lt;template #option="slotProps"&gt;
                        &lt;div class="p-multiselect-representative-option"&gt;
                            &lt;img :alt="slotProps.option.name" :src="'demo/images/avatar/' + slotProps.option.image" width="32" style="vertical-align: middle" /&gt;
                            &lt;span class="image-text"&gt;{{slotProps.option.name}}&lt;/span&gt;
                        &lt;/div&gt;
                    &lt;/template&gt;
                &lt;/MultiSelect&gt;
            &lt;/template&gt;
        &lt;/Column&gt;
        &lt;Column field="status" header="Status" :sortable="true" filterMatchMode="equals" :styles="{width:'25%'}"&gt;
            &lt;template #body="slotProps"&gt;
                &lt;span :class="'customer-badge status-' + slotProps.data.status"&gt;{{slotProps.data.status}}&lt;/span&gt;
            &lt;/template&gt;
            &lt;template #filter&gt;
                &lt;Dropdown v-model="filters1['status']" :options="statuses" placeholder="Select a Status" class="p-column-filter" :showClear="true"&gt;
                    &lt;template #option="slotProps"&gt;
                        &lt;span :class="'customer-badge status-' + slotProps.option"&gt;{{slotProps.option}}&lt;/span&gt;
                    &lt;/template&gt;
                &lt;/Dropdown&gt;
            &lt;/template&gt;
        &lt;/Column&gt;
        &lt;template #empty&gt;
            No customers found.
        &lt;/template&gt;
    &lt;/DataTable&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
    &lt;h5&gt;Local Storage&lt;/h5&gt;
    &lt;DataTable :value="customers" :paginator="true" :rows="10" :filters.sync="filters2"
        :selection.sync="selectedCustomer2" selectionMode="single" dataKey="id"
        stateStorage="local" stateKey="dt-state-demo-local" responsiveLayout="scroll"&gt;
        &lt;template #header&gt;
            &lt;span class="p-input-icon-left"&gt;
                &lt;i class="pi pi-search" /&gt;
                &lt;InputText v-model="filters2['global'].value" placeholder="Global Search" /&gt;
            &lt;/span&gt;
        &lt;/template&gt;
        &lt;Column field="name" header="Name" :sortable="true" :styles="{width:'25%'}"&gt;
            &lt;template #filter&gt;
                &lt;InputText type="text" v-model="filters2['name']" class="p-column-filter" placeholder="Search by name"/&gt;
            &lt;/template&gt;
        &lt;/Column&gt;
        &lt;Column header="Country" :sortable="true" sortField="country.name" filterField="country.name" filterMatchMode="contains" :styles="{width:'25%'}"&gt;
            &lt;template #body="slotProps"&gt;
                &lt;img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.data.country.code" width="30" /&gt;
                &lt;span class="image-text"&gt;{{slotProps.data.country.name}}&lt;/span&gt;
            &lt;/template&gt;
            &lt;template #filter&gt;
                &lt;InputText type="text" v-model="filters2['country.name']" class="p-column-filter" placeholder="Search by country"/&gt;
            &lt;/template&gt;
        &lt;/Column&gt;
        &lt;Column header="Representative" :sortable="true" sortField="representative.name" filterField="representative.name" filterMatchMode="in" :styles="{width:'25%'}"&gt;
            &lt;template #body="slotProps"&gt;
                &lt;img :alt="slotProps.data.representative.name" :src="'demo/images/avatar/' + slotProps.data.representative.image" width="32" style="vertical-align: middle" /&gt;
                &lt;span class="image-text"&gt;{{slotProps.data.representative.name}}&lt;/span&gt;
            &lt;/template&gt;
                &lt;template #filter&gt;
                &lt;MultiSelect v-model="filters2['representative.name']" :options="representatives" optionLabel="name" optionValue="name" placeholder="All" class="p-column-filter"&gt;
                    &lt;template #option="slotProps"&gt;
                        &lt;div class="p-multiselect-representative-option"&gt;
                            &lt;img :alt="slotProps.option.name" :src="'demo/images/avatar/' + slotProps.option.image" width="32" style="vertical-align: middle" /&gt;
                            &lt;span class="image-text"&gt;{{slotProps.option.name}}&lt;/span&gt;
                        &lt;/div&gt;
                    &lt;/template&gt;
                &lt;/MultiSelect&gt;
            &lt;/template&gt;
        &lt;/Column&gt;
        &lt;Column field="status" header="Status" :sortable="true" filterMatchMode="equals" :styles="{width:'25%'}"&gt;
            &lt;template #body="slotProps"&gt;
                &lt;span :class="'customer-badge status-' + slotProps.data.status"&gt;{{slotProps.data.status}}&lt;/span&gt;
            &lt;/template&gt;
            &lt;template #filter&gt;
                &lt;Dropdown v-model="filters2['status']" :options="statuses" placeholder="Select a Status" class="p-column-filter" :showClear="true"&gt;
                    &lt;template #option="slotProps"&gt;
                        &lt;span :class="'customer-badge status-' + slotProps.option"&gt;{{slotProps.option}}&lt;/span&gt;
                    &lt;/template&gt;
                &lt;/Dropdown&gt;
            &lt;/template&gt;
        &lt;/Column&gt;
        &lt;template #empty&gt;
            No customers found.
        &lt;/template&gt;
    &lt;/DataTable&gt;
&lt;/div&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import {FilterMatchMode} from 'primevue/api';
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
</CodeHighlight>
                </TabPanel>
            </TabView>
        </div>
	</div>
</template>

<script>
import FilterMatchMode from '../../../src/components/api/FilterMatchMode';
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
</script>