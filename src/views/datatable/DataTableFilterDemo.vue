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
                <p>Filters are displayed in an overlay..</p>
                <DataTable :value="customers1" :paginator="true" class="p-datatable-customers p-datatable-gridlines" :rows="10"
                    dataKey="id" :filters="filters1" filterDisplay="menu" :loading="loading1">
                    <template #header>
                        <div class="p-d-flex p-jc-end">
                            <span class="p-input-icon-left ">
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
                        <template #body="slotProps">
                            <span class="p-column-title">Name</span>
                            {{slotProps.data.name}}
                        </template>
                        <template #filter>
                            <InputText type="text" v-model="filters1['name'].value" class="p-column-filter" placeholder="Search by name"/>
                        </template>
                    </Column>
                    <Column header="Country" filterField="country.name">
                        <template #body="slotProps">
                            <span class="p-column-title">Country</span>
                            <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.data.country.code" width="30" />
                            <span class="image-text">{{slotProps.data.country.name}}</span>
                        </template>
                        <template #filter>
                            <InputText type="text" v-model="filters1['country.name'].value" class="p-column-filter" placeholder="Search by country"/>
                        </template>
                    </Column>
                    <Column header="Agent" filterField="representative" :showFilterMatchModes="false" :showFilterOperator="false" :showAddButton="false">
                        <template #body="slotProps">
                            <span class="p-column-title">Agent</span>
                            <img :alt="slotProps.data.representative.name" :src="'demo/images/avatar/' + slotProps.data.representative.image" width="32" style="vertical-align: middle" />
                            <span class="image-text">{{slotProps.data.representative.name}}</span>
                        </template>
                        <template #filter>
                            <div class="p-mb-3 p-text-bold">Agent Picker</div>
                            <MultiSelect v-model="filters1['representative'].value" :options="representatives" optionLabel="name" placeholder="Any" class="p-column-filter">
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
                        <template #body="slotProps">
                            <span class="p-column-title">Date</span>
                            {{slotProps.data.date}}
                        </template>
                        <template #filter>
                            <Calendar v-model="filters1['date'].value" dateFormat="mm/dd/yy" />
                        </template>
                    </Column>
                    <Column header="Balance" filterField="balance" dataType="numeric">
                        <template #body="slotProps">
                            <span class="p-column-title">Balance</span>
                            {{formatCurrency(slotProps.data.balance)}}
                        </template>
                        <template #filter>
                            <InputNumber v-model="filters1['balance'].value" mode="currency" currency="USD" locale="en-US" />
                        </template>
                    </Column>
                    <Column field="status" header="Status">
                        <template #body="slotProps">
                            <span class="p-column-title">Status</span>
                            <span :class="'customer-badge status-' + slotProps.data.status">{{slotProps.data.status}}</span>
                        </template>
                        <template #filter>
                            <Dropdown v-model="filters1['status'].value" :options="statuses" placeholder="Any" class="p-column-filter" :showClear="true">
                                <template #option="slotProps">
                                    <span :class="'customer-badge status-' + slotProps.option">{{slotProps.option}}</span>
                                </template>
                            </Dropdown>
                        </template>
                    </Column>
                    <Column field="activity" header="Activity" :showFilterMatchModes="false" :showFilterOperator="false" :showAddButton="false">
                        <template #body="slotProps">
                            <span class="p-column-title">Status</span>
                            <ProgressBar :value="slotProps.data.activity" :showValue="false"></ProgressBar>
                        </template>
                        <template #filter>
                            <Slider v-model="filters1['activity'][0].value" range class="p-m-3"></Slider>
                            <div class="p-d-flex p-ai-center p-jc-between p-px-2">
                                <span>{{filters1['activity'][0].value[0]}}</span>
                                <span>{{filters1['activity'][0].value[1]}}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="verified" header="Verified" dataType="boolean" headerStyle="width: 8rem" :showFilterMatchModes="false" :showFilterOperator="false" :showAddButton="false">
                        <template #body="slotProps">
                            <span class="p-column-title">Verified</span>
                            <i class="pi" :class="{'true-icon pi-check-circle': slotProps.data.verified, 'false-icon pi-times-circle': !slotProps.data.verified}"></i>
                        </template>
                        <template #filter>
                            <TriStateCheckbox v-model="filters1['verified'].value" />
                        </template>
                    </Column>
                </DataTable>
            </div>

            <div class="card">
                <h5>Filter Row</h5>
                <p>Filters are displayed inline within a separate row.</p>
                <DataTable :value="customers2" :paginator="true" class="p-datatable-customers" :rows="10"
                    dataKey="id" :filters="filters2" filterDisplay="row" :loading="loading2">
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
                        <template #body="slotProps">
                            <span class="p-column-title">Name</span>
                            {{slotProps.data.name}}
                        </template>
                        <template #filter>
                            <InputText type="text" v-model="filters2['name'].value" class="p-column-filter" placeholder="Search by name"/>
                        </template>
                    </Column>
                    <Column header="Country" filterField="country.name">
                        <template #body="slotProps">
                            <span class="p-column-title">Country</span>
                            <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.data.country.code" width="30" />
                            <span class="image-text">{{slotProps.data.country.name}}</span>
                        </template>
                        <template #filter>
                            <InputText type="text" v-model="filters2['country.name'].value" class="p-column-filter" placeholder="Search by country"/>
                        </template>
                    </Column>
                    <Column header="Agent" filterField="representative" :showFilterMenu="false">
                        <template #body="slotProps">
                            <span class="p-column-title">Agent</span>
                            <img :alt="slotProps.data.representative.name" :src="'demo/images/avatar/' + slotProps.data.representative.image" width="32" style="vertical-align: middle" />
                            <span class="image-text">{{slotProps.data.representative.name}}</span>
                        </template>
                        <template #filter>
                            <MultiSelect v-model="filters2['representative'].value" :options="representatives" optionLabel="name" placeholder="Any" class="p-column-filter">
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
                        <template #body="slotProps">
                            <span class="p-column-title">Status</span>
                            <span :class="'customer-badge status-' + slotProps.data.status">{{slotProps.data.status}}</span>
                        </template>
                        <template #filter>
                            <Dropdown v-model="filters2['status'].value" :options="statuses" placeholder="Any" class="p-column-filter" :showClear="true">
                                <template #option="slotProps">
                                    <span :class="'customer-badge status-' + slotProps.option">{{slotProps.option}}</span>
                                </template>
                            </Dropdown>
                        </template>
                    </Column>
                    <Column field="verified" header="Verified" dataType="boolean" headerStyle="width: 6rem">
                        <template #body="slotProps">
                            <span class="p-column-title">Verified</span>
                            <i class="pi" :class="{'true-icon pi-check-circle': slotProps.data.verified, 'false-icon pi-times-circle': !slotProps.data.verified}"></i>
                        </template>
                        <template #filter>
                            <TriStateCheckbox v-model="filters2['verified'].value" />
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
            filters1: {
                'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
                'name': [{value: null, matchMode: FilterMatchMode.STARTS_WITH, operator: FilterOperator.AND}],
                'country.name': [{value: null, matchMode: FilterMatchMode.STARTS_WITH, operator: FilterOperator.AND}],
                'representative': [{value: null, matchMode: FilterMatchMode.IN}],
                'date': [{value: null, matchMode: FilterMatchMode.IS, operator: FilterOperator.AND}],
                'balance': [{value: null, matchMode: FilterMatchMode.EQUALS, operator: FilterOperator.AND}],
                'status': [{value: null, matchMode: FilterMatchMode.EQUALS, operator: FilterOperator.AND}],
                'activity': [{value: [0,100], matchMode: FilterMatchMode.BETWEEN}],
                'verified': [{value: null, matchMode: FilterMatchMode.EQUALS, operator: FilterOperator.AND}]
            },
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
    },
    mounted() {
        this.customerService.getCustomersLarge().then(data => {this.customers1 = data; this.loading1 = false;});
        this.customerService.getCustomersLarge().then(data => {this.customers2 = data; this.loading2 = false;});
    },
    methods: {
        formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
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

.table-header {
    display: flex;
    justify-content: space-between;
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