<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>Filter</span></h1>
				<p>Filtering feature provides advanced and flexible options to query the data.</p>
			</div>
		</div>

		<div class="content-section implementation">
            <div class="card">
                <h5>Filter Menu</h5>
                <p>Filters are displayed in an overlay.</p>
                <DataTable :value="customers1" :paginator="true" class="p-datatable-customers p-datatable-gridlines" :rows="10"
                    dataKey="id" v-model:filters="filters1" filterDisplay="menu" :loading="loading1"
                    :globalFilterFields="['name','country.name','representative.name','balance','status']">
                    <template #header>
                        <div class="p-d-flex p-jc-between">
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
                    <Column field="name" header="Name">
                        <template #body="{data}">
                            <span class="p-column-title">Name</span>
                            {{data.name}}
                        </template>
                        <template #filter="{filterModel}">
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by name"/>
                        </template>
                    </Column>
                    <Column header="Country" filterField="country.name">
                        <template #body="{data}">
                            <span class="p-column-title">Country</span>
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
                            <div class="p-px-3 p-pt-0 p-pb-3 p-text-center p-text-bold">Customized Buttons</div>
                        </template>
                    </Column>
                    <Column header="Agent" filterField="representative" :showFilterMatchModes="false" filterMenuStyle="width:14rem">
                        <template #body="{data}">
                            <span class="p-column-title">Agent</span>
                            <img :alt="data.representative.name" :src="'demo/images/avatar/' + data.representative.image" width="32" style="vertical-align: middle" />
                            <span class="image-text">{{data.representative.name}}</span>
                        </template>
                        <template #filter="{filterModel}">
                            <div class="p-mb-3 p-text-bold">Agent Picker</div>
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
                    <Column header="Date" filterField="date" dataType="date">
                        <template #body="{data}">
                            <span class="p-column-title">Date</span>
                            {{data.date}}
                        </template>
                        <template #filter="{filterModel}">
                            <Calendar v-model="filterModel.value" dateFormat="mm/dd/yy" />
                        </template>
                    </Column>
                    <Column header="Balance" filterField="balance" dataType="numeric">
                        <template #body="{data}">
                            <span class="p-column-title">Balance</span>
                            {{formatCurrency(data.balance)}}
                        </template>
                        <template #filter="{filterModel}">
                            <InputNumber v-model="filterModel.value" mode="currency" currency="USD" locale="en-US" />
                        </template>
                    </Column>
                    <Column field="status" header="Status" filterMenuStyle="min-width:14rem">
                        <template #body="{data}">
                            <span class="p-column-title">Status</span>
                            <span :class="'customer-badge status-' + data.status">{{data.status}}</span>
                        </template>
                        <template #filter="{filterModel}">
                            <Dropdown v-model="filterModel.value" :options="statuses" placeholder="Any" class="p-column-filter" :showClear="true">
                                <template #value="slotProps">
                                    <span :class="'customer-badge status-' + slotProps.value">{{slotProps.value}}</span>
                                </template>
                                <template #option="slotProps">
                                    <span :class="'customer-badge status-' + slotProps.option">{{slotProps.option}}</span>
                                </template>
                            </Dropdown>
                        </template>
                    </Column>
                    <Column field="activity" header="Activity" :showFilterMatchModes="false">
                        <template #body="{data}">
                            <span class="p-column-title">Status</span>
                            <ProgressBar :value="data.activity" :showValue="false"></ProgressBar>
                        </template>
                        <template #filter={filterModel}>
                            <Slider v-model="filterModel.value" range class="p-m-3"></Slider>
                            <div class="p-d-flex p-ai-center p-jc-between p-px-2">
                                <span>{{filterModel.value ? filterModel.value[0] : 0}}</span>
                                <span>{{filterModel.value ? filterModel.value[1] : 100}}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="verified" header="Verified" dataType="boolean" headerStyle="width: 8rem" bodyClass="p-text-center">
                        <template #body="{data}">
                            <span class="p-column-title">Verified</span>
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
                    dataKey="id" v-model:filters="filters2" filterDisplay="row" :loading="loading2"
                    :globalFilterFields="['name','country.name','representative.name','status']">
                    <template #header>
                        <div class="p-d-flex p-jc-end">
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
                    <Column field="name" header="Name">
                        <template #body="{data}">
                            <span class="p-column-title">Name</span>
                            {{data.name}}
                        </template>
                        <template #filter="{filterModel,filterCallback}">
                            <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search by name"/>
                        </template>
                    </Column>
                    <Column header="Country" filterField="country.name">
                        <template #body="{data}">
                            <span class="p-column-title">Country</span>
                            <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + data.country.code" width="30" />
                            <span class="image-text">{{data.country.name}}</span>
                        </template>
                        <template #filter="{filterModel,filterCallback}">
                            <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search by country"/>
                        </template>
                    </Column>
                    <Column header="Agent" filterField="representative" :showFilterMenu="false">
                        <template #body="{data}">
                            <span class="p-column-title">Agent</span>
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
                    <Column field="status" header="Status" :showFilterMenu="false">
                        <template #body="{data}">
                            <span class="p-column-title">Status</span>
                            <span :class="'customer-badge status-' + data.status">{{data.status}}</span>
                        </template>
                        <template #filter="{filterModel,filterCallback}">
                            <Dropdown v-model="filterModel.value" @change="filterCallback()" :options="statuses" placeholder="Any" class="p-column-filter" :showClear="true">
                                <template #option="slotProps">
                                    <span :class="'customer-badge status-' + slotProps.option">{{slotProps.option}}</span>
                                </template>
                            </Dropdown>
                        </template>
                    </Column>
                    <Column field="verified" header="Verified" dataType="boolean" headerStyle="width: 6rem">
                        <template #body="{data}">
                            <span class="p-column-title">Verified</span>
                            <i class="pi" :class="{'true-icon pi-check-circle': data.verified, 'false-icon pi-times-circle': !data.verified}"></i>
                        </template>
                        <template #filter="{filterModel,filterCallback}">
                            <TriStateCheckbox v-model="filterModel.value" @change="filterCallback()"/>
                        </template>
                    </Column>
                </DataTable>
            </div>
		</div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<pre v-code><code><template v-pre>

</template>
</code></pre>

<pre v-code.script><code>

</code></pre>
                </TabPanel>
            </TabView>
        </div>
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
            loading2: true
        }
    },
    created() {
        this.customerService = new CustomerService();
        this.initFilters1();
    },
    mounted() {
        this.customerService.getCustomersLarge().then(data => {this.customers1 = data; this.loading1 = false;});
        this.customerService.getCustomersLarge().then(data => {this.customers2 = data; this.loading2 = false;});
    },
    methods: {
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
                'date': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.IS}]},
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

/* Responsive */
.p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {
    display: none;
}

@media screen and (max-width: 960px) {
    ::v-deep(.p-datatable) {
        &.p-datatable-customers {
            .p-datatable-thead > tr > th,
            .p-datatable-tfoot > tr > td {
                display: none !important;
            }

            .p-datatable-tbody > tr {
                border-bottom: 1px solid var(--layer-2);

                > td {
                    text-align: left;
                    display: block;
                    border: 0 none !important;
                    width: 100% !important;
                    float: left;
                    clear: left;
                    border: 0 none;

                    .p-column-title {
                        padding: .4rem;
                        min-width: 30%;
                        display: inline-block;
                        margin: -.4rem 1rem -.4rem -.4rem;
                        font-weight: bold;
                    }

                    .p-progressbar {
                        margin-top: .5rem;
                    }
                }
            }
        }
    }
}
</style>