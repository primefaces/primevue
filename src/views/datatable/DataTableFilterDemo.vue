<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>Filter</span></h1>
				<p>Filtering feature provides advanced and flexible options to query the data.</p>
			</div>
            <AppDemoActions />
		</div>

		<div class="content-section implementation">
            <div class="card">
                <h5>Filter Menu</h5>
                <p>Filters are displayed in an overlay.</p>
                <DataTable :value="customers1" :paginator="true" class="p-datatable-customers" showGridlines :rows="10"
                    dataKey="id" v-model:filters="filters1" filterDisplay="menu" :loading="loading1" responsiveLayout="scroll"
                    :globalFilterFields="['name','country.name','representative.name','balance','status']">
                    <template #header>
                        <div class="flex justify-content-between">
                            <Button type="button" icon="pi pi-filter-slash" label="Clear" class="p-button-outlined" @click="clearFilter1()"/>
                            <span class="p-input-icon-left">
                                <i class="pi pi-search" />
                                <InputText v-model="filters1['global'].value" placeholder="Keyword Search" />
                            </span>
                        </div>
                    </template>
                    <template #empty>
                        No customers found.
                    </template>
                    <template #loading>
                        Loading customers data. Please wait.
                    </template>
                    <Column field="name" header="Name" style="min-width:12rem">
                        <template #body="{data}">
                            {{data.name}}
                        </template>
                        <template #filter="{filterModel}">
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by name"/>
                        </template>
                    </Column>
                    <Column header="Country" filterField="country.name" style="min-width:12rem">
                        <template #body="{data}">
                            <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + data.country.code" width="30" />
                            <span class="image-text">{{data.country.name}}</span>
                        </template>
                        <template #filter="{filterModel}">
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by country"/>
                        </template>
                        <template #filterclear="{filterCallback}">
                            <Button type="button" icon="pi pi-times" @click="filterCallback()" class="p-button-secondary"></Button>
                        </template>
                        <template #filterapply="{filterCallback}">
                            <Button type="button" icon="pi pi-check" @click="filterCallback()" class="p-button-success"></Button>
                        </template>
                        <template #filterfooter>
                            <div class="px-3 pt-0 pb-3 text-center font-bold">Customized Buttons</div>
                        </template>
                    </Column>
                    <Column header="Agent" filterField="representative" :showFilterMatchModes="false" :filterMenuStyle="{'width':'14rem'}" style="min-width:14rem">
                        <template #body="{data}">
                            <img :alt="data.representative.name" :src="'demo/images/avatar/' + data.representative.image" width="32" style="vertical-align: middle" />
                            <span class="image-text">{{data.representative.name}}</span>
                        </template>
                        <template #filter="{filterModel}">
                            <div class="mb-3 font-bold">Agent Picker</div>
                            <MultiSelect v-model="filterModel.value" :options="representatives" optionLabel="name" placeholder="Any" class="p-column-filter">
                                <template #option="slotProps">
                                    <div class="p-multiselect-representative-option">
                                        <img :alt="slotProps.option.name" :src="'demo/images/avatar/' + slotProps.option.image" width="32" style="vertical-align: middle" />
                                        <span class="image-text">{{slotProps.option.name}}</span>
                                    </div>
                                </template>
                            </MultiSelect>
                        </template>
                    </Column>
                    <Column header="Date" filterField="date" dataType="date" style="min-width:10rem">
                        <template #body="{data}">
                            {{formatDate(data.date)}}
                        </template>
                        <template #filter="{filterModel}">
                            <Calendar v-model="filterModel.value" dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" />
                        </template>
                    </Column>
                    <Column header="Balance" filterField="balance" dataType="numeric" style="min-width:10rem">
                        <template #body="{data}">
                            {{formatCurrency(data.balance)}}
                        </template>
                        <template #filter="{filterModel}">
                            <InputNumber v-model="filterModel.value" mode="currency" currency="USD" locale="en-US" />
                        </template>
                    </Column>
                    <Column field="status" header="Status" :filterMenuStyle="{'width':'14rem'}" style="min-width:12rem">
                        <template #body="{data}">
                            <span :class="'customer-badge status-' + data.status">{{data.status}}</span>
                        </template>
                        <template #filter="{filterModel}">
                            <Dropdown v-model="filterModel.value" :options="statuses" placeholder="Any" class="p-column-filter" :showClear="true">
                                <template #value="slotProps">
                                    <span :class="'customer-badge status-' + slotProps.value" v-if="slotProps.value">{{slotProps.value}}</span>
                                    <span v-else>{{slotProps.placeholder}}</span>
                                </template>
                                <template #option="slotProps">
                                    <span :class="'customer-badge status-' + slotProps.option">{{slotProps.option}}</span>
                                </template>
                            </Dropdown>
                        </template>
                    </Column>
                    <Column field="activity" header="Activity" :showFilterMatchModes="false" style="min-width:12rem">
                        <template #body="{data}">
                            <ProgressBar :value="data.activity" :showValue="false"></ProgressBar>
                        </template>
                        <template #filter={filterModel}>
                            <Slider v-model="filterModel.value" range class="m-3"></Slider>
                            <div class="flex align-items-center justify-content-center px-2">
                                <span>{{filterModel.value ? filterModel.value[0] : 0}}</span>
                                <span>{{filterModel.value ? filterModel.value[1] : 100}}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="verified" header="Verified" dataType="boolean" bodyClass="text-center" style="min-width:8rem">
                        <template #body="{data}">
                            <i class="pi" :class="{'true-icon pi-check-circle': data.verified, 'false-icon pi-times-circle': !data.verified}"></i>
                        </template>
                        <template #filter={filterModel}>
                            <TriStateCheckbox v-model="filterModel.value" />
                        </template>
                    </Column>
                </DataTable>
            </div>

            <div class="card">
                <h5>Filter Row</h5>
                <p>Filters are displayed inline within a separate row.</p>
                <DataTable :value="customers2" :paginator="true" class="p-datatable-customers" :rows="10"
                    dataKey="id" v-model:filters="filters2" filterDisplay="row" :loading="loading2" responsiveLayout="scroll"
                    :globalFilterFields="['name','country.name','representative.name','status']">
                    <template #header>
                        <div class="flex justify-content-end">
                            <span class="p-input-icon-left ">
                                <i class="pi pi-search" />
                                <InputText v-model="filters2['global'].value" placeholder="Keyword Search" />
                            </span>
                        </div>
                    </template>
                    <template #empty>
                        No customers found.
                    </template>
                    <template #loading>
                        Loading customers data. Please wait.
                    </template>
                    <Column field="name" header="Name" style="min-width:12rem">
                        <template #body="{data}">
                            {{data.name}}
                        </template>
                        <template #filter="{filterModel,filterCallback}">
                            <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" :placeholder="`Search by name - ${filterModel.matchMode}`" v-tooltip.top.focus="'Hit enter key to filter'"/>
                        </template>
                    </Column>
                    <Column header="Country" filterField="country.name" style="min-width:12rem">
                        <template #body="{data}">
                            <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + data.country.code" width="30" />
                            <span class="image-text">{{data.country.name}}</span>
                        </template>
                        <template #filter="{filterModel,filterCallback}">
                            <InputText type="text" v-model="filterModel.value" @input="filterCallback()" class="p-column-filter" placeholder="Search by country" v-tooltip.top.focus="'Filter as you type'"/>
                        </template>
                    </Column>
                    <Column header="Agent" filterField="representative" :showFilterMenu="false" style="min-width:14rem">
                        <template #body="{data}">
                            <img :alt="data.representative.name" :src="'demo/images/avatar/' + data.representative.image" width="32" style="vertical-align: middle" />
                            <span class="image-text">{{data.representative.name}}</span>
                        </template>
                        <template #filter="{filterModel,filterCallback}">
                            <MultiSelect v-model="filterModel.value" @change="filterCallback()" :options="representatives" optionLabel="name" placeholder="Any" class="p-column-filter">
                                <template #option="slotProps">
                                    <div class="p-multiselect-representative-option">
                                        <img :alt="slotProps.option.name" :src="'demo/images/avatar/' + slotProps.option.image" width="32" style="vertical-align: middle" />
                                        <span class="image-text">{{slotProps.option.name}}</span>
                                    </div>
                                </template>
                            </MultiSelect>
                        </template>
                    </Column>
                    <Column field="status" header="Status" :showFilterMenu="false" style="min-width:12rem">
                        <template #body="{data}">
                            <span :class="'customer-badge status-' + data.status">{{data.status}}</span>
                        </template>
                        <template #filter="{filterModel,filterCallback}">
                            <Dropdown v-model="filterModel.value" @change="filterCallback()" :options="statuses" placeholder="Any" class="p-column-filter" :showClear="true">
                                <template #value="slotProps">
                                    <span :class="'customer-badge status-' + slotProps.value" v-if="slotProps.value">{{slotProps.value}}</span>
                                    <span v-else>{{slotProps.placeholder}}</span>
                                </template>
                                <template #option="slotProps">
                                    <span :class="'customer-badge status-' + slotProps.option">{{slotProps.option}}</span>
                                </template>
                            </Dropdown>
                        </template>
                    </Column>
                    <Column field="verified" header="Verified" dataType="boolean" style="min-width:6rem">
                        <template #body="{data}">
                            <i class="pi" :class="{'true-icon pi-check-circle': data.verified, 'false-icon pi-times-circle': !data.verified}"></i>
                        </template>
                        <template #filter="{filterModel,filterCallback}">
                            <TriStateCheckbox v-model="filterModel.value" @change="filterCallback()"/>
                        </template>
                    </Column>
                </DataTable>
            </div>
		</div>

        <AppDoc name="DataTableFilterDemo" :sources="sources" :service="['CustomerService']" :data="['customers-large']" github="datatable/DataTableFilterDemo.vue" />
	</div>
</template>

<script>
import CustomerService from '../../service/CustomerService';
import {FilterMatchMode,FilterOperator} from 'primevue/api';

export default {
    data() {
        return {
            customers1: null,
            customers2: null,
            filters1: null,
            filters2: {
                'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
                'name': {value: null, matchMode: FilterMatchMode.STARTS_WITH},
                'country.name': {value: null, matchMode: FilterMatchMode.STARTS_WITH},
                'representative': {value: null, matchMode: FilterMatchMode.IN},
                'status': {value: null, matchMode: FilterMatchMode.EQUALS},
                'verified': {value: null, matchMode: FilterMatchMode.EQUALS}
            },
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
            loading1: true,
            loading2: true,
            sources: {
                'options-api': {
                    tabName: 'Options API Source',
                    content: `
<template>
    <div>
        <div class="card">
            <h5>Filter Menu</h5>
            <p>Filters are displayed in an overlay.</p>
            <DataTable :value="customers1" :paginator="true" class="p-datatable-customers" showGridlines :rows="10"
                dataKey="id" v-model:filters="filters1" filterDisplay="menu" :loading="loading1" responsiveLayout="scroll"
                :globalFilterFields="['name','country.name','representative.name','balance','status']">
                <template #header>
                    <div class="flex justify-content-between">
                        <Button type="button" icon="pi pi-filter-slash" label="Clear" class="p-button-outlined" @click="clearFilter1()"/>
                        <span class="p-input-icon-left">
                            <i class="pi pi-search" />
                            <InputText v-model="filters1['global'].value" placeholder="Keyword Search" />
                        </span>
                    </div>
                </template>
                <template #empty>
                    No customers found.
                </template>
                <template #loading>
                    Loading customers data. Please wait.
                </template>
                <Column field="name" header="Name" style="min-width:12rem">
                    <template #body="{data}">
                        {{data.name}}
                    </template>
                    <template #filter="{filterModel}">
                        <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by name"/>
                    </template>
                </Column>
                <Column header="Country" filterField="country.name" style="min-width:12rem">
                    <template #body="{data}">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :class="'flag flag-' + data.country.code" width="30" />
                        <span class="image-text">{{data.country.name}}</span>
                    </template>
                    <template #filter="{filterModel}">
                        <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by country"/>
                    </template>
                    <template #filterclear="{filterCallback}">
                        <Button type="button" icon="pi pi-times" @click="filterCallback()" class="p-button-secondary"></Button>
                    </template>
                    <template #filterapply="{filterCallback}">
                        <Button type="button" icon="pi pi-check" @click="filterCallback()" class="p-button-success"></Button>
                    </template>
                    <template #filterfooter>
                        <div class="px-3 pt-0 pb-3 text-center font-bold">Customized Buttons</div>
                    </template>
                </Column>
                <Column header="Agent" filterField="representative" :showFilterMatchModes="false" :filterMenuStyle="{'width':'14rem'}" style="min-width:14rem">
                    <template #body="{data}">
                        <img :alt="data.representative.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="32" style="vertical-align: middle" />
                        <span class="image-text">{{data.representative.name}}</span>
                    </template>
                    <template #filter="{filterModel}">
                        <div class="mb-3 font-bold">Agent Picker</div>
                        <MultiSelect v-model="filterModel.value" :options="representatives" optionLabel="name" placeholder="Any" class="p-column-filter">
                            <template #option="slotProps">
                                <div class="p-multiselect-representative-option">
                                    <img :alt="slotProps.option.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="32" style="vertical-align: middle" />
                                    <span class="image-text">{{slotProps.option.name}}</span>
                                </div>
                            </template>
                        </MultiSelect>
                    </template>
                </Column>
                <Column header="Date" filterField="date" dataType="date" style="min-width:10rem">
                    <template #body="{data}">
                        {{formatDate(data.date)}}
                    </template>
                    <template #filter="{filterModel}">
                        <Calendar v-model="filterModel.value" dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" />
                    </template>
                </Column>
                <Column header="Balance" filterField="balance" dataType="numeric" style="min-width:10rem">
                    <template #body="{data}">
                        {{formatCurrency(data.balance)}}
                    </template>
                    <template #filter="{filterModel}">
                        <InputNumber v-model="filterModel.value" mode="currency" currency="USD" locale="en-US" />
                    </template>
                </Column>
                <Column field="status" header="Status" :filterMenuStyle="{'width':'14rem'}" style="min-width:12rem">
                    <template #body="{data}">
                        <span :class="'customer-badge status-' + data.status">{{data.status}}</span>
                    </template>
                    <template #filter="{filterModel}">
                        <Dropdown v-model="filterModel.value" :options="statuses" placeholder="Any" class="p-column-filter" :showClear="true">
                            <template #value="slotProps">
                                <span :class="'customer-badge status-' + slotProps.value" v-if="slotProps.value">{{slotProps.value}}</span>
                                <span v-else>{{slotProps.placeholder}}</span>
                            </template>
                            <template #option="slotProps">
                                <span :class="'customer-badge status-' + slotProps.option">{{slotProps.option}}</span>
                            </template>
                        </Dropdown>
                    </template>
                </Column>
                <Column field="activity" header="Activity" :showFilterMatchModes="false" style="min-width:12rem">
                    <template #body="{data}">
                        <ProgressBar :value="data.activity" :showValue="false"></ProgressBar>
                    </template>
                    <template #filter={filterModel}>
                        <Slider v-model="filterModel.value" range class="m-3"></Slider>
                        <div class="flex align-items-center justify-content-center px-2">
                            <span>{{filterModel.value ? filterModel.value[0] : 0}}</span>
                            <span>{{filterModel.value ? filterModel.value[1] : 100}}</span>
                        </div>
                    </template>
                </Column>
                <Column field="verified" header="Verified" dataType="boolean" bodyClass="text-center" style="min-width:8rem">
                    <template #body="{data}">
                        <i class="pi" :class="{'true-icon pi-check-circle': data.verified, 'false-icon pi-times-circle': !data.verified}"></i>
                    </template>
                    <template #filter={filterModel}>
                        <TriStateCheckbox v-model="filterModel.value" />
                    </template>
                </Column>
            </DataTable>
        </div>

        <div class="card">
            <h5>Filter Row</h5>
            <p>Filters are displayed inline within a separate row.</p>
            <DataTable :value="customers2" :paginator="true" class="p-datatable-customers" :rows="10"
                dataKey="id" v-model:filters="filters2" filterDisplay="row" :loading="loading2" responsiveLayout="scroll"
                :globalFilterFields="['name','country.name','representative.name','status']">
                <template #header>
                    <div class="flex justify-content-end">
                        <span class="p-input-icon-left ">
                            <i class="pi pi-search" />
                            <InputText v-model="filters2['global'].value" placeholder="Keyword Search" />
                        </span>
                    </div>
                </template>
                <template #empty>
                    No customers found.
                </template>
                <template #loading>
                    Loading customers data. Please wait.
                </template>
                <Column field="name" header="Name" style="min-width:12rem">
                    <template #body="{data}">
                        {{data.name}}
                    </template>
                    <template #filter="{filterModel,filterCallback}">
                        <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" :placeholder="\`Search by name - \`" v-tooltip.top.focus="'Hit enter key to filter'"/>
                    </template>
                </Column>
                <Column header="Country" filterField="country.name" style="min-width:12rem">
                    <template #body="{data}">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="30" />
                        <span class="image-text">{{data.country.name}}</span>
                    </template>
                    <template #filter="{filterModel,filterCallback}">
                        <InputText type="text" v-model="filterModel.value" @input="filterCallback()" class="p-column-filter" placeholder="Search by country" v-tooltip.top.focus="'Filter as you type'"/>
                    </template>
                </Column>
                <Column header="Agent" filterField="representative" :showFilterMenu="false" style="min-width:14rem">
                    <template #body="{data}">
                        <img :alt="data.representative.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="32" style="vertical-align: middle" />
                        <span class="image-text">{{data.representative.name}}</span>
                    </template>
                    <template #filter="{filterModel,filterCallback}">
                        <MultiSelect v-model="filterModel.value" @change="filterCallback()" :options="representatives" optionLabel="name" placeholder="Any" class="p-column-filter">
                            <template #option="slotProps">
                                <div class="p-multiselect-representative-option">
                                    <img :alt="slotProps.option.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="32" style="vertical-align: middle" />
                                    <span class="image-text">{{slotProps.option.name}}</span>
                                </div>
                            </template>
                        </MultiSelect>
                    </template>
                </Column>
                <Column field="status" header="Status" :showFilterMenu="false" style="min-width:12rem">
                    <template #body="{data}">
                        <span :class="'customer-badge status-' + data.status">{{data.status}}</span>
                    </template>
                    <template #filter="{filterModel,filterCallback}">
                        <Dropdown v-model="filterModel.value" @change="filterCallback()" :options="statuses" placeholder="Any" class="p-column-filter" :showClear="true">
                            <template #value="slotProps">
                                <span :class="'customer-badge status-' + slotProps.value" v-if="slotProps.value">{{slotProps.value}}</span>
                                <span v-else>{{slotProps.placeholder}}</span>
                            </template>
                            <template #option="slotProps">
                                <span :class="'customer-badge status-' + slotProps.option">{{slotProps.option}}</span>
                            </template>
                        </Dropdown>
                    </template>
                </Column>
                <Column field="verified" header="Verified" dataType="boolean" style="min-width:6rem">
                    <template #body="{data}">
                        <i class="pi" :class="{'true-icon pi-check-circle': data.verified, 'false-icon pi-times-circle': !data.verified}"></i>
                    </template>
                    <template #filter="{filterModel,filterCallback}">
                        <TriStateCheckbox v-model="filterModel.value" @change="filterCallback()"/>
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
</template>

<script>
import CustomerService from './service/CustomerService';
import {FilterMatchMode,FilterOperator} from 'primevue/api';

export default {
    data() {
        return {
            customers1: null,
            customers2: null,
            filters1: null,
            filters2: {
                'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
                'name': {value: null, matchMode: FilterMatchMode.STARTS_WITH},
                'country.name': {value: null, matchMode: FilterMatchMode.STARTS_WITH},
                'representative': {value: null, matchMode: FilterMatchMode.IN},
                'status': {value: null, matchMode: FilterMatchMode.EQUALS},
                'verified': {value: null, matchMode: FilterMatchMode.EQUALS}
            },
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
            loading1: true,
            loading2: true
        }
    },
    created() {
        this.customerService = new CustomerService();
        this.initFilters1();
    },
    mounted() {
        this.customerService.getCustomersLarge().then(data => {
            this.customers1 = data; 
            this.loading1 = false;
            this.customers1.forEach(customer => customer.date = new Date(customer.date));
        });
        
        this.customerService.getCustomersLarge().then(data => {
            this.customers2 = data; 
            this.loading2 = false;
            this.customers2.forEach(customer => customer.date = new Date(customer.date));
        });
    },
    methods: {
        formatDate(value) {
            return value.toLocaleDateString('en-US', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            });
        },
        formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        },
        clearFilter1() {
            this.initFilters1();
        },
        initFilters1() {
            this.filters1 = {
                'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
                'name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
                'country.name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
                'representative': {value: null, matchMode: FilterMatchMode.IN},
                'date': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.DATE_IS}]},
                'balance': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
                'status': {operator: FilterOperator.OR, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
                'activity': {value: null, matchMode: FilterMatchMode.BETWEEN},
                'verified': {value: null, matchMode: FilterMatchMode.EQUALS}
            }
        }
    }
}
<\\/script>

<style lang="scss" scoped>
::v-deep(.p-paginator) {
    .p-paginator-current {
        margin-left: auto;
    }
}

::v-deep(.p-progressbar) {
    height: .5rem;
    background-color: #D8DADC;

    .p-progressbar-value {
        background-color: #607D8B;
    }
}

::v-deep(.p-datepicker) {
    min-width: 25rem;

    td {
        font-weight: 400;
    }
}

::v-deep(.p-datatable.p-datatable-customers) {
    .p-datatable-header {
        padding: 1rem;
        text-align: left;
        font-size: 1.5rem;
    }

    .p-paginator {
        padding: 1rem;
    }

    .p-datatable-thead > tr > th {
        text-align: left;
    }

    .p-datatable-tbody > tr > td {
        cursor: auto;
    }

    .p-dropdown-label:not(.p-placeholder) {
        text-transform: uppercase;
    }
}
</style>
`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <div class="card">
            <h5>Filter Menu</h5>
            <p>Filters are displayed in an overlay.</p>
            <DataTable :value="customers1" :paginator="true" class="p-datatable-customers" showGridlines :rows="10"
                dataKey="id" v-model:filters="filters1" filterDisplay="menu" :loading="loading1" responsiveLayout="scroll"
                :globalFilterFields="['name','country.name','representative.name','balance','status']">
                <template #header>
                    <div class="flex justify-content-between">
                        <Button type="button" icon="pi pi-filter-slash" label="Clear" class="p-button-outlined" @click="clearFilter1()"/>
                        <span class="p-input-icon-left">
                            <i class="pi pi-search" />
                            <InputText v-model="filters1['global'].value" placeholder="Keyword Search" />
                        </span>
                    </div>
                </template>
                <template #empty>
                    No customers found.
                </template>
                <template #loading>
                    Loading customers data. Please wait.
                </template>
                <Column field="name" header="Name" style="min-width:12rem">
                    <template #body="{data}">
                        {{data.name}}
                    </template>
                    <template #filter="{filterModel}">
                        <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by name"/>
                    </template>
                </Column>
                <Column header="Country" filterField="country.name" style="min-width:12rem">
                    <template #body="{data}">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :class="'flag flag-' + data.country.code" width="30" />
                        <span class="image-text">{{data.country.name}}</span>
                    </template>
                    <template #filter="{filterModel}">
                        <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by country"/>
                    </template>
                    <template #filterclear="{filterCallback}">
                        <Button type="button" icon="pi pi-times" @click="filterCallback()" class="p-button-secondary"></Button>
                    </template>
                    <template #filterapply="{filterCallback}">
                        <Button type="button" icon="pi pi-check" @click="filterCallback()" class="p-button-success"></Button>
                    </template>
                    <template #filterfooter>
                        <div class="px-3 pt-0 pb-3 text-center font-bold">Customized Buttons</div>
                    </template>
                </Column>
                <Column header="Agent" filterField="representative" :showFilterMatchModes="false" :filterMenuStyle="{'width':'14rem'}" style="min-width:14rem">
                    <template #body="{data}">
                        <img :alt="data.representative.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="32" style="vertical-align: middle" />
                        <span class="image-text">{{data.representative.name}}</span>
                    </template>
                    <template #filter="{filterModel}">
                        <div class="mb-3 font-bold">Agent Picker</div>
                        <MultiSelect v-model="filterModel.value" :options="representatives" optionLabel="name" placeholder="Any" class="p-column-filter">
                            <template #option="slotProps">
                                <div class="p-multiselect-representative-option">
                                    <img :alt="slotProps.option.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="32" style="vertical-align: middle" />
                                    <span class="image-text">{{slotProps.option.name}}</span>
                                </div>
                            </template>
                        </MultiSelect>
                    </template>
                </Column>
                <Column header="Date" filterField="date" dataType="date" style="min-width:10rem">
                    <template #body="{data}">
                        {{formatDate(data.date)}}
                    </template>
                    <template #filter="{filterModel}">
                        <Calendar v-model="filterModel.value" dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" />
                    </template>
                </Column>
                <Column header="Balance" filterField="balance" dataType="numeric" style="min-width:10rem">
                    <template #body="{data}">
                        {{formatCurrency(data.balance)}}
                    </template>
                    <template #filter="{filterModel}">
                        <InputNumber v-model="filterModel.value" mode="currency" currency="USD" locale="en-US" />
                    </template>
                </Column>
                <Column field="status" header="Status" :filterMenuStyle="{'width':'14rem'}" style="min-width:12rem">
                    <template #body="{data}">
                        <span :class="'customer-badge status-' + data.status">{{data.status}}</span>
                    </template>
                    <template #filter="{filterModel}">
                        <Dropdown v-model="filterModel.value" :options="statuses" placeholder="Any" class="p-column-filter" :showClear="true">
                            <template #value="slotProps">
                                <span :class="'customer-badge status-' + slotProps.value" v-if="slotProps.value">{{slotProps.value}}</span>
                                <span v-else>{{slotProps.placeholder}}</span>
                            </template>
                            <template #option="slotProps">
                                <span :class="'customer-badge status-' + slotProps.option">{{slotProps.option}}</span>
                            </template>
                        </Dropdown>
                    </template>
                </Column>
                <Column field="activity" header="Activity" :showFilterMatchModes="false" style="min-width:12rem">
                    <template #body="{data}">
                        <ProgressBar :value="data.activity" :showValue="false"></ProgressBar>
                    </template>
                    <template #filter={filterModel}>
                        <Slider v-model="filterModel.value" range class="m-3"></Slider>
                        <div class="flex align-items-center justify-content-center px-2">
                            <span>{{filterModel.value ? filterModel.value[0] : 0}}</span>
                            <span>{{filterModel.value ? filterModel.value[1] : 100}}</span>
                        </div>
                    </template>
                </Column>
                <Column field="verified" header="Verified" dataType="boolean" bodyClass="text-center" style="min-width:8rem">
                    <template #body="{data}">
                        <i class="pi" :class="{'true-icon pi-check-circle': data.verified, 'false-icon pi-times-circle': !data.verified}"></i>
                    </template>
                    <template #filter={filterModel}>
                        <TriStateCheckbox v-model="filterModel.value" />
                    </template>
                </Column>
            </DataTable>
        </div>

        <div class="card">
            <h5>Filter Row</h5>
            <p>Filters are displayed inline within a separate row.</p>
            <DataTable :value="customers2" :paginator="true" class="p-datatable-customers" :rows="10"
                dataKey="id" v-model:filters="filters2" filterDisplay="row" :loading="loading2" responsiveLayout="scroll"
                :globalFilterFields="['name','country.name','representative.name','status']">
                <template #header>
                    <div class="flex justify-content-end">
                        <span class="p-input-icon-left ">
                            <i class="pi pi-search" />
                            <InputText v-model="filters2['global'].value" placeholder="Keyword Search" />
                        </span>
                    </div>
                </template>
                <template #empty>
                    No customers found.
                </template>
                <template #loading>
                    Loading customers data. Please wait.
                </template>
                <Column field="name" header="Name" style="min-width:12rem">
                    <template #body="{data}">
                        {{data.name}}
                    </template>
                    <template #filter="{filterModel,filterCallback}">
                        <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" :placeholder="\`Search by name - \`" v-tooltip.top.focus="'Hit enter key to filter'"/>
                    </template>
                </Column>
                <Column header="Country" filterField="country.name" style="min-width:12rem">
                    <template #body="{data}">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="30" />
                        <span class="image-text">{{data.country.name}}</span>
                    </template>
                    <template #filter="{filterModel,filterCallback}">
                        <InputText type="text" v-model="filterModel.value" @input="filterCallback()" class="p-column-filter" placeholder="Search by country" v-tooltip.top.focus="'Filter as you type'"/>
                    </template>
                </Column>
                <Column header="Agent" filterField="representative" :showFilterMenu="false" style="min-width:14rem">
                    <template #body="{data}">
                        <img :alt="data.representative.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="32" style="vertical-align: middle" />
                        <span class="image-text">{{data.representative.name}}</span>
                    </template>
                    <template #filter="{filterModel,filterCallback}">
                        <MultiSelect v-model="filterModel.value" @change="filterCallback()" :options="representatives" optionLabel="name" placeholder="Any" class="p-column-filter">
                            <template #option="slotProps">
                                <div class="p-multiselect-representative-option">
                                    <img :alt="slotProps.option.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="32" style="vertical-align: middle" />
                                    <span class="image-text">{{slotProps.option.name}}</span>
                                </div>
                            </template>
                        </MultiSelect>
                    </template>
                </Column>
                <Column field="status" header="Status" :showFilterMenu="false" style="min-width:12rem">
                    <template #body="{data}">
                        <span :class="'customer-badge status-' + data.status">{{data.status}}</span>
                    </template>
                    <template #filter="{filterModel,filterCallback}">
                        <Dropdown v-model="filterModel.value" @change="filterCallback()" :options="statuses" placeholder="Any" class="p-column-filter" :showClear="true">
                            <template #value="slotProps">
                                <span :class="'customer-badge status-' + slotProps.value" v-if="slotProps.value">{{slotProps.value}}</span>
                                <span v-else>{{slotProps.placeholder}}</span>
                            </template>
                            <template #option="slotProps">
                                <span :class="'customer-badge status-' + slotProps.option">{{slotProps.option}}</span>
                            </template>
                        </Dropdown>
                    </template>
                </Column>
                <Column field="verified" header="Verified" dataType="boolean" style="min-width:6rem">
                    <template #body="{data}">
                        <i class="pi" :class="{'true-icon pi-check-circle': data.verified, 'false-icon pi-times-circle': !data.verified}"></i>
                    </template>
                    <template #filter="{filterModel,filterCallback}">
                        <TriStateCheckbox v-model="filterModel.value" @change="filterCallback()"/>
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
</template>

<script>
import { ref ,onMounted } from 'vue';
import CustomerService from './service/CustomerService';
import {FilterMatchMode,FilterOperator} from 'primevue/api';

export default {
    setup() {
        onMounted(() => {
            customerService.value.getCustomersLarge().then(data => {
                customers1.value = data; 
                loading1.value = false;
                customers1.value.forEach(customer => customer.date = new Date(customer.date));
            });
        
            customerService.value.getCustomersLarge().then(data => {
                customers2.value = data; 
                loading2.value = false;
                customers2.value.forEach(customer => customer.date = new Date(customer.date));
            });
        })

        const customers1 = ref(null);
        const customers2 = ref(null);
        const customerService = ref(new CustomerService());
        const filters1 = ref({
            'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
            'name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
            'country.name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
            'representative': {value: null, matchMode: FilterMatchMode.IN},
            'date': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.DATE_IS}]},
            'balance': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
            'status': {operator: FilterOperator.OR, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
            'activity': {value: null, matchMode: FilterMatchMode.BETWEEN},
            'verified': {value: null, matchMode: FilterMatchMode.EQUALS}
        });
        const filters2 = ref({
            'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
            'name': {value: null, matchMode: FilterMatchMode.STARTS_WITH},
            'country.name': {value: null, matchMode: FilterMatchMode.STARTS_WITH},
            'representative': {value: null, matchMode: FilterMatchMode.IN},
            'status': {value: null, matchMode: FilterMatchMode.EQUALS},
            'verified': {value: null, matchMode: FilterMatchMode.EQUALS}
        });
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
        const loading1 = ref(true);
        const loading2 = ref(true);

        const formatDate = (value) => {
            return value.toLocaleDateString('en-US', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            });
        };
        const formatCurrency = (value) => {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        };
        const clearFilter1 = () => {
            initFilters1();
        };
        const initFilters1 = () => {
            filters1.value = {
                'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
                'name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
                'country.name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
                'representative': {value: null, matchMode: FilterMatchMode.IN},
                'date': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.DATE_IS}]},
                'balance': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
                'status': {operator: FilterOperator.OR, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
                'activity': {value: null, matchMode: FilterMatchMode.BETWEEN},
                'verified': {value: null, matchMode: FilterMatchMode.EQUALS}
            }
        };

        return { customers1, customers2, filters1, filters2, representatives, statuses, loading1, loading2, formatDate, formatCurrency, clearFilter1, initFilters1}
    }
}
<\\/script>

<style lang="scss" scoped>
::v-deep(.p-paginator) {
    .p-paginator-current {
        margin-left: auto;
    }
}

::v-deep(.p-progressbar) {
    height: .5rem;
    background-color: #D8DADC;

    .p-progressbar-value {
        background-color: #607D8B;
    }
}

::v-deep(.p-datepicker) {
    min-width: 25rem;

    td {
        font-weight: 400;
    }
}

::v-deep(.p-datatable.p-datatable-customers) {
    .p-datatable-header {
        padding: 1rem;
        text-align: left;
        font-size: 1.5rem;
    }

    .p-paginator {
        padding: 1rem;
    }

    .p-datatable-thead > tr > th {
        text-align: left;
    }

    .p-datatable-tbody > tr > td {
        cursor: auto;
    }

    .p-dropdown-label:not(.p-placeholder) {
        text-transform: uppercase;
    }
}
</style>
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/datatable/datatable.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/multiselect/multiselect.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/calendar/calendar.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/progressbar/progressbar.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/tristatecheckbox/tristatecheckbox.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/slider/slider.min.js"><\\/script>
        <script src="./CustomerService.js"><\\/script>`,
                    content: `<div id="app">
            <div class="card">
                <h5>Filter Menu</h5>
                <p>Filters are displayed in an overlay.</p>
                <p-datatable :value="customers1" :paginator="true" class="p-datatable-customers" show-gridlines :rows="10"
                    data-key="id" v-model:filters="filters1" filter-display="menu" :loading="loading1" responsive-layout="scroll"
                    :global-filter-fields="['name','country.name','representative.name','balance','status']">
                    <template #header>
                        <div class="flex justify-content-between">
                            <p-button type="button" icon="pi pi-filter-slash" label="Clear" class="p-button-outlined" @click="clearFilter1()"></p-button>
                            <span class="p-input-icon-left">
                                <i class="pi pi-search"></i>
                                <p-inputtext v-model="filters1['global'].value" placeholder="Keyword Search"></p-inputtext>
                            </span>
                        </div>
                    </template>
                    <template #empty>
                        No customers found.
                    </template>
                    <template #loading>
                        Loading customers data. Please wait.
                    </template>
                    <p-column field="name" header="Name" style="min-width:12rem">
                        <template #body="{data}">
                            {{data.name}}
                        </template>
                        <template #filter="{filterModel}">
                            <p-inputtext type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by name"></p-inputtext>
                        </template>
                    </p-column>
                    <p-column header="Country" filter-field="country.name" style="min-width:12rem">
                        <template #body="{data}">
                            <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :class="'flag flag-' + data.country.code" width="30" />
                            <span class="image-text">{{data.country.name}}</span>
                        </template>
                        <template #filter="{filterModel}">
                            <p-inputtext type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by country"></p-inputtext>
                        </template>
                        <template #filterclear="{filterCallback}">
                            <p-button type="button" icon="pi pi-times" @click="filterCallback()" class="p-button-secondary"></p-button>
                        </template>
                        <template #filterapply="{filterCallback}">
                            <p-button type="button" icon="pi pi-check" @click="filterCallback()" class="p-button-success"></p-button>
                        </template>
                        <template #filterfooter>
                            <div class="px-3 pt-0 pb-3 text-center font-bold">Customized Buttons</div>
                        </template>
                    </p-column>
                    <p-column header="Agent" filter-field="representative" :show-filter-match-modes="false" :filter-menu-style="{'width':'14rem'}" style="min-width:14rem">
                        <template #body="{data}">
                            <img :alt="data.representative.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="32" style="vertical-align: middle" />
                            <span class="image-text">{{data.representative.name}}</span>
                        </template>
                        <template #filter="{filterModel}">
                            <div class="mb-3 font-bold">Agent Picker</div>
                            <p-multiselect v-model="filterModel.value" :options="representatives" option-label="name" placeholder="Any" class="p-column-filter">
                                <template #option="slotProps">
                                    <div class="p-multiselect-representative-option">
                                        <img :alt="slotProps.option.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="32" style="vertical-align: middle" />
                                        <span class="image-text">{{slotProps.option.name}}</span>
                                    </div>
                                </template>
                            </p-multiselect>
                        </template>
                    </p-column>
                    <p-column header="Date" filter-field="date" data-type="date" style="min-width:10rem">
                        <template #body="{data}">
                            {{formatDate(data.date)}}
                        </template>
                        <template #filter="{filterModel}">
                            <p-calendar v-model="filterModel.value" date-format="mm/dd/yy" placeholder="mm/dd/yyyy"></p-calendar>
                        </template>
                    </p-column>
                    <p-column header="Balance" filter-field="balance" data-type="numeric" style="min-width:10rem">
                        <template #body="{data}">
                            {{formatCurrency(data.balance)}}
                        </template>
                        <template #filter="{filterModel}">
                            <p-inputnumber v-model="filterModel.value" mode="currency" currency="USD" locale="en-US"></p-inputnumber>
                        </template>
                    </p-column>
                    <p-column field="status" header="Status" :filter-menu-style="{'width':'14rem'}" style="min-width:12rem">
                        <template #body="{data}">
                            <span :class="'customer-badge status-' + data.status">{{data.status}}</span>
                        </template>
                        <template #filter="{filterModel}">
                            <p-dropdown v-model="filterModel.value" :options="statuses" placeholder="Any" class="p-column-filter" :show-clear="true">
                                <template #value="slotProps">
                                    <span :class="'customer-badge status-' + slotProps.value" v-if="slotProps.value">{{slotProps.value}}</span>
                                    <span v-else>{{slotProps.placeholder}}</span>
                                </template>
                                <template #option="slotProps">
                                    <span :class="'customer-badge status-' + slotProps.option">{{slotProps.option}}</span>
                                </template>
                            </p-dropdown>
                        </template>
                    </p-column>
                    <p-column field="activity" header="Activity" :show-filter-match-modes="false" style="min-width:12rem">
                        <template #body="{data}">
                            <p-progressbar :value="data.activity" :show-value="false"></p-progressbar>
                        </template>
                        <template #filter={filterModel}>
                            <p-slider v-model="filterModel.value" range class="m-3"></p-slider>
                            <div class="flex align-items-center justify-content-center px-2">
                                <span>{{filterModel.value ? filterModel.value[0] : 0}}</span>
                                <span>{{filterModel.value ? filterModel.value[1] : 100}}</span>
                            </div>
                        </template>
                    </p-column>
                    <p-column field="verified" header="Verified" data-type="boolean" body-class="text-center" style="min-width:8rem">
                        <template #body="{data}">
                            <i class="pi" :class="{'true-icon pi-check-circle': data.verified, 'false-icon pi-times-circle': !data.verified}"></i>
                        </template>
                        <template #filter={filterModel}>
                            <p-tristatecheckbox v-model="filterModel.value"></p-tristatecheckbox>
                        </template>
                    </p-column>
                </p-datatable>
            </div>

            <div class="card">
                <h5>Filter Row</h5>
                <p>Filters are displayed inline within a separate row.</p>
                <p-datatable :value="customers2" :paginator="true" class="p-datatable-customers" :rows="10"
                    data-key="id" v-model:filters="filters2" filter-display="row" :loading="loading2" responsive-layout="scroll"
                    :global-filter-fields="['name','country.name','representative.name','status']">
                    <template #header>
                        <div class="flex justify-content-end">
                            <span class="p-input-icon-left ">
                                <i class="pi pi-search"></i>
                                <p-inputtext v-model="filters2['global'].value" placeholder="Keyword Search"></p-inputtext>
                            </span>
                        </div>
                    </template>
                    <template #empty>
                        No customers found.
                    </template>
                    <template #loading>
                        Loading customers data. Please wait.
                    </template>
                    <p-column field="name" header="Name" style="min-width:12rem">
                        <template #body="{data}">
                            {{data.name}}
                        </template>
                        <template #filter="{filterModel,filterCallback}">
                            <p-inputtext type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" :placeholder="\`Search by name - \`" v-tooltip.top.focus="'Hit enter key to filter'"></p-inputtext>
                        </template>
                    </p-column>
                    <p-column header="Country" filter-field="country.name" style="min-width:12rem">
                        <template #body="{data}">
                            <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="30" />
                            <span class="image-text">{{data.country.name}}</span>
                        </template>
                        <template #filter="{filterModel,filterCallback}">
                            <p-inputtext type="text" v-model="filterModel.value" @input="filterCallback()" class="p-column-filter" placeholder="Search by country" v-tooltip.top.focus="'Filter as you type'"></p-inputtext>
                        </template>
                    </p-column>
                    <p-column header="Agent" filter-field="representative" :show-filter-menu="false" style="min-width:14rem">
                        <template #body="{data}">
                            <img :alt="data.representative.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="32" style="vertical-align: middle" />
                            <span class="image-text">{{data.representative.name}}</span>
                        </template>
                        <template #filter="{filterModel,filterCallback}">
                            <p-multiselect v-model="filterModel.value" @change="filterCallback()" :options="representatives" option-label="name" placeholder="Any" class="p-column-filter">
                                <template #option="slotProps">
                                    <div class="p-multiselect-representative-option">
                                        <img :alt="slotProps.option.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="32" style="vertical-align: middle" />
                                        <span class="image-text">{{slotProps.option.name}}</span>
                                    </div>
                                </template>
                            </p-multiselect>
                        </template>
                    </p-column>
                    <p-column field="status" header="Status" :show-filter-menu="false" style="min-width:12rem">
                        <template #body="{data}">
                            <span :class="'customer-badge status-' + data.status">{{data.status}}</span>
                        </template>
                        <template #filter="{filterModel,filterCallback}">
                            <p-dropdown v-model="filterModel.value" @change="filterCallback()" :options="statuses" placeholder="Any" class="p-column-filter" :show-clear="true">
                                <template #value="slotProps">
                                    <span :class="'customer-badge status-' + slotProps.value" v-if="slotProps.value">{{slotProps.value}}</span>
                                    <span v-else>{{slotProps.placeholder}}</span>
                                </template>
                                <template #option="slotProps">
                                    <span :class="'customer-badge status-' + slotProps.option">{{slotProps.option}}</span>
                                </template>
                            </p-dropdown>
                        </template>
                    </p-column>
                    <p-column field="verified" header="Verified" data-type="boolean" style="min-width:6rem">
                        <template #body="{data}">
                            <i class="pi" :class="{'true-icon pi-check-circle': data.verified, 'false-icon pi-times-circle': !data.verified}"></i>
                        </template>
                        <template #filter="{filterModel,filterCallback}">
                            <p-tristatecheckbox v-model="filterModel.value" @change="filterCallback()"></p-tristatecheckbox>
                        </template>
                    </p-column>
                </p-datatable>
            </div>
        </div>

        <script type="module">
        const { createApp, ref ,onMounted } = Vue;
        const { FilterMatchMode, FilterOperator } = primevue.api;
        const Tooltip = primevue.tooltip;

        const App = {
            setup() {
                onMounted(() => {
                    customerService.value.getCustomersLarge().then(data => {
                        customers1.value = data; 
                        loading1.value = false;
                        customers1.value.forEach(customer => customer.date = new Date(customer.date));
                    });
                
                    customerService.value.getCustomersLarge().then(data => {
                        customers2.value = data; 
                        loading2.value = false;
                        customers2.value.forEach(customer => customer.date = new Date(customer.date));
                    });
                })

                const customers1 = ref(null);
                const customers2 = ref(null);
                const customerService = ref(new CustomerService());
                const filters1 = ref({
                    'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
                    'name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
                    'country.name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
                    'representative': {value: null, matchMode: FilterMatchMode.IN},
                    'date': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.DATE_IS}]},
                    'balance': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
                    'status': {operator: FilterOperator.OR, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
                    'activity': {value: null, matchMode: FilterMatchMode.BETWEEN},
                    'verified': {value: null, matchMode: FilterMatchMode.EQUALS}
                });
                const filters2 = ref({
                    'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
                    'name': {value: null, matchMode: FilterMatchMode.STARTS_WITH},
                    'country.name': {value: null, matchMode: FilterMatchMode.STARTS_WITH},
                    'representative': {value: null, matchMode: FilterMatchMode.IN},
                    'status': {value: null, matchMode: FilterMatchMode.EQUALS},
                    'verified': {value: null, matchMode: FilterMatchMode.EQUALS}
                });
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
                const loading1 = ref(true);
                const loading2 = ref(true);

                const formatDate = (value) => {
                    return value.toLocaleDateString('en-US', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                    });
                };
                const formatCurrency = (value) => {
                    return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
                };
                const clearFilter1 = () => {
                    initFilters1();
                };
                const initFilters1 = () => {
                    filters1.value = {
                        'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
                        'name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
                        'country.name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
                        'representative': {value: null, matchMode: FilterMatchMode.IN},
                        'date': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.DATE_IS}]},
                        'balance': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
                        'status': {operator: FilterOperator.OR, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
                        'activity': {value: null, matchMode: FilterMatchMode.BETWEEN},
                        'verified': {value: null, matchMode: FilterMatchMode.EQUALS}
                    }
                };

                return { customers1, customers2, filters1, filters2, representatives, statuses, loading1, loading2, formatDate, formatCurrency, clearFilter1, initFilters1}
            },
            components: {
                "p-datatable": primevue.datatable,
                "p-column": primevue.column,
                "p-inputtext": primevue.inputtext,
                "p-button": primevue.button,
                "p-multiselect": primevue.multiselect,
                "p-calendar": primevue.calendar,
                "p-inputnumber": primevue.inputnumber,
                "p-dropdown": primevue.dropdown,
                "p-progressbar": primevue.progressbar,
                "p-slider": primevue.slider,
                "p-tristatecheckbox": primevue.tristatecheckbox
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .directive('tooltip', Tooltip)
            .mount("#app");
        <\\/script>

        <style>
        .p-paginator .p-paginator-current {
            margin-left: auto;
        }

        .p-progressbar {
            height: .5rem;
            background-color: #D8DADC;
        }
        .p-progressbar .p-progressbar-value {
            background-color: #607D8B;
        }

        .p-datepicker {
            min-width: 25rem;
        }

        .p-datepicker td {
            font-weight: 400;
        }

        .p-datatable.p-datatable-customers .p-datatable-header {
            padding: 1rem;
            text-align: left;
            font-size: 1.5rem;
        }

        .p-datatable.p-datatable-customers .p-paginator {
            padding: 1rem;
        }

        .p-datatable.p-datatable-customers .p-datatable-thead > tr > th {
            text-align: left;
        }

        .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td {
            cursor: auto;
        }

        .p-datatable.p-datatable-customers .p-dropdown-label:not(.p-placeholder) {
            text-transform: uppercase;
        }
        </style>
`
                }
            }
        }
    },
    created() {
        this.customerService = new CustomerService();
        this.initFilters1();
    },
    mounted() {
        this.customerService.getCustomersLarge().then(data => {
            this.customers1 = data; 
            this.loading1 = false;
            this.customers1.forEach(customer => customer.date = new Date(customer.date));
        });
        
        this.customerService.getCustomersLarge().then(data => {
            this.customers2 = data; 
            this.loading2 = false;
            this.customers2.forEach(customer => customer.date = new Date(customer.date));
        });
    },
    methods: {
        formatDate(value) {
            return value.toLocaleDateString('en-US', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            });
        },
        formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        },
        clearFilter1() {
            this.initFilters1();
        },
        initFilters1() {
            this.filters1 = {
                'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
                'name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
                'country.name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
                'representative': {value: null, matchMode: FilterMatchMode.IN},
                'date': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.DATE_IS}]},
                'balance': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
                'status': {operator: FilterOperator.OR, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
                'activity': {value: null, matchMode: FilterMatchMode.BETWEEN},
                'verified': {value: null, matchMode: FilterMatchMode.EQUALS}
            }
        }
    }
}
</script>

<style lang="scss" scoped>
::v-deep(.p-paginator) {
    .p-paginator-current {
        margin-left: auto;
    }
}

::v-deep(.p-progressbar) {
    height: .5rem;
    background-color: #D8DADC;

    .p-progressbar-value {
        background-color: #607D8B;
    }
}

::v-deep(.p-datepicker) {
    min-width: 25rem;

    td {
        font-weight: 400;
    }
}

::v-deep(.p-datatable.p-datatable-customers) {
    .p-datatable-header {
        padding: 1rem;
        text-align: left;
        font-size: 1.5rem;
    }

    .p-paginator {
        padding: 1rem;
    }

    .p-datatable-thead > tr > th {
        text-align: left;
    }

    .p-datatable-tbody > tr > td {
        cursor: auto;
    }

    .p-dropdown-label:not(.p-placeholder) {
        text-transform: uppercase;
    }
}
</style>