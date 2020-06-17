<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable</h1>
				<p>DataTable displays data in tabular format.</p>
			</div>
		</div>

		<div class="content-section implementation">
            <div class="card">
                <DataTable :value="customers" :paginator="true" class="p-datatable-customers" :rows="10"
                    dataKey="id" :rowHover="true" :selection.sync="selectedCustomers" :filters="filters" :loading="loading"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[10,25,50]"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries">
                    <template #header>
                        <div class="table-header">
                            List of Customers
                            <span class="p-input-icon-left">
                                <i class="pi pi-search" />
                                <InputText v-model="filters['global']" placeholder="Global Search" />
                            </span>
                        </div>
                    </template>
                    <template #empty>
                        No customers found.
                    </template>
                    <template #loading>
                        Loading customers data. Please wait.
                    </template>
                    <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
                    <Column field="name" header="Name" :sortable="true">
                        <template #body="slotProps">
                            <span class="p-column-title">Name</span>
                            {{slotProps.data.name}}
                        </template>
                        <template #filter>
                            <InputText type="text" v-model="filters['name']" class="p-column-filter" placeholder="Search by name"/>
                        </template>
                    </Column>
                    <Column header="Country" :sortable="true" sortField="country.name" filterField="country.name" filterMatchMode="contains">
                        <template #body="slotProps">
                            <span class="p-column-title">Country</span>
                            <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.data.country.code" width="30" />
                            <span style="vertical-align: middle; margin-left: .5em">{{slotProps.data.country.name}}</span>
                        </template>
                        <template #filter>
                            <InputText type="text" v-model="filters['country.name']" class="p-column-filter" placeholder="Search by country"/>
                        </template>
                    </Column>
                    <Column header="Representative" :sortable="true" sortField="representative.name" filterField="representative.name" filterMatchMode="in">
                        <template #body="slotProps">
                            <span class="p-column-title">Representative</span>
                            <img :alt="slotProps.data.representative.name" :src="'demo/images/avatar/' + slotProps.data.representative.image" width="32" style="vertical-align: middle" />
                            <span style="vertical-align: middle; margin-left: .5em">{{slotProps.data.representative.name}}</span>
                        </template>
                            <template #filter>
                            <MultiSelect v-model="filters['representative.name']" :options="representatives" optionLabel="name" optionValue="name" placeholder="All" class="p-column-filter">
                                <template #option="slotProps">
                                    <div class="p-multiselect-representative-option">
                                        <img :alt="slotProps.option.name" :src="'demo/images/avatar/' + slotProps.option.image" width="32" style="vertical-align: middle" />
                                        <span style="vertical-align: middle; margin-left: .5em">{{slotProps.option.name}}</span>
                                    </div>
                                </template>
                            </MultiSelect>
                        </template>
                    </Column>
                    <Column field="date" header="Date" :sortable="true" filterMatchMode="custom" :filterFunction="filterDate">
                        <template #body="slotProps">
                            <span class="p-column-title">Date</span>
                            <span style="vertical-align: middle; margin-left: .5em">{{slotProps.data.date}}</span>
                        </template>
                        <template #filter>
                            <Calendar v-model="filters['date']" dateFormat="yy-mm-dd" class="p-column-filter" placeholder="Registration Date"/>
                        </template>
                    </Column>
                    <Column field="status" header="Status" :sortable="true" filterMatchMode="equals">
                        <template #body="slotProps">
                            <span class="p-column-title">Status</span>
                            <span :class="'customer-badge status-' + slotProps.data.status">{{slotProps.data.status}}</span>
                        </template>
                        <template #filter>
                            <Dropdown v-model="filters['status']" :options="statuses" placeholder="Select a Status" class="p-column-filter" :showClear="true">
                                <template #option="slotProps">
                                    <span :class="'customer-badge status-' + slotProps.option">{{slotProps.option}}</span>
                                </template>
                            </Dropdown>
                        </template>
                    </Column>
                    <Column field="activity" header="Activity" :sortable="true" filterMatchMode="gte">
                        <template #body="slotProps">
                            <span class="p-column-title">Activity</span>
                            <ProgressBar :value="slotProps.data.activity" :showValue="false" />
                        </template>
                        <template #filter>
                            <InputText type="text" v-model="filters['activity']" class="p-column-filter" placeholder="Minimum"/>
                        </template>
                    </Column>
                    <Column headerStyle="width: 8rem; text-align: center" bodyStyle="text-align: center; overflow: visible">
                        <template #body>
                            <Button type="button" icon="pi pi-cog" class="p-button-secondary"></Button>
                        </template>
                    </Column>
                </DataTable>
            </div>
		</div>

        <DataTableDoc />
	</div>
</template>

<script>
import CustomerService from '../../service/CustomerService';
import DataTableDoc from './DataTableDoc';
import '../../assets/styles/flags.css';

export default {
    data() {
        return {
            customers: null,
            selectedCustomers: null,
            filters: {},
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
    created() {
        this.customerService = new CustomerService();
    },
    mounted() {
        this.customerService.getCustomersLarge().then(data => this.customers = data);
        this.loading = false;
    },
    methods: {
        filterDate(value, filter) {
            if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                return true;
            }

            if (value === undefined || value === null) {
                return false;
            }

            return value === this.formatDate(filter);
        },
        formatDate(date) {
            let month = date.getMonth() + 1;
            let day = date.getDate();

            if (month < 10) {
                month = '0' + month;
            }

            if (day < 10) {
                day = '0' + day;
            }

            return date.getFullYear() + '-' + month + '-' + day;
        }
    },
    components: {
        'DataTableDoc': DataTableDoc
    }
}
</script>

<style lang="scss" scoped>
.customer-badge {
    border-radius: 2px;
    padding: .25em .5rem;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: .3px;

    &.status-qualified {
        background-color: #C8E6C9;
        color: #256029;
    }

    &.status-unqualified {
        background-color: #FFCDD2;
        color: #C63737;
    }

    &.status-negotiation {
        background-color: #FEEDAF;
        color: #8A5340;
    }

    &.status-new {
        background-color: #B3E5FC;
        color: #23547B;
    }

    &.status-renewal {
        background-color: #ECCFFF;
        color: #694382;
    }

    &.status-proposal {
        background-color: #FFD8B2;
        color: #805B36;
    }
}

.p-multiselect-representative-option {
    display: inline-block;
    vertical-align: middle;

    img {
        vertical-align: middle;
        width: 24px;
    }

    span {
        margin-top: .125rem;
    }
}

/deep/ .p-paginator {
    .p-paginator-current {
        margin-left: auto;
    }
}

/deep/ .p-progressbar {
    height: .5rem;
    background-color: #D8DADC;

    .p-progressbar-value {
        background-color: #607D8B;
    }
}

/deep/ .p-column-filter {
    width: 100%;
}

.table-header {
    display: flex;
    justify-content: space-between;
}

/deep/ .p-datepicker {
    min-width: 25rem;

    td {
        font-weight: 400;
    }
}

/deep/ .p-datatable.p-datatable-customers {
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
    /deep/ .p-datatable {
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