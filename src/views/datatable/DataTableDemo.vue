<template>
	<div>
        <DataTableSubMenu />

		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable</h1>
				<p>DataTable displays data in tabular format.</p>
			</div>
		</div>

		<div class="content-section implementation">
            <div class="p-card">
                <div class="p-card-body" style="padding:0">
                    <DataTable :value="customers" :paginator="true" class="p-datatable-responsive p-datatable-customers" :rows="10"
                        dataKey="id" :rowHover="true" :selection.sync="selectedCustomers" :filters="filters"
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[10,25,50]">
                        <template #header>
                            List of Customers
                            <div class="p-datatable-globalfilter-container">
                                <InputText v-model="filters['global']" placeholder="Global Search" />
                            </div>
                        </template>
                        <template #empty>
                            No customers found.
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
                                <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.data.country.code"  />
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
                        <Column headerStyle="width: 8em; text-align: center" bodyStyle="text-align: center; overflow: visible">
                            <template #body>
                                <Button type="button" icon="pi pi-cog" class="p-button-secondary"></Button>
                            </template>
                        </Column>
                    </DataTable>
                </div>
            </div>
		</div>

        <DataTableDoc />
	</div>
</template>

<script>
import CustomerService from '../../service/CustomerService';
import DataTableSubMenu from './DataTableSubMenu';
import DataTableDoc from './DataTableDoc';
import '../../assets/styles/flags.css';

export default {
    data() {
        return {
            customers: null,
            selectedCustomers: null,
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
        'DataTableDoc': DataTableDoc,
        'DataTableSubMenu': DataTableSubMenu
    }
}
</script>

<style lang="scss" scoped>
.customer-badge {
    border-radius: 2px;
    padding: .25em .5em;
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
        margin-top: .125em;
    }
}

/deep/ .p-paginator {
    .p-dropdown {
        float: left;
    }

    .p-paginator-current {
        float: right;
    }
}

/deep/ .p-progressbar {
    height: 8px;
    background-color: #D8DADC;

    .p-progressbar-value {
        background-color: #00ACAD;
    }
}

/deep/ .p-column-filter {
    display: block;

    input {
        width: 100%;
    }
}

.p-datatable-globalfilter-container {
    float: right;

    input {
        width: 200px;
    }
}

/deep/ .p-datepicker {
    min-width: 25em;

    td {
        font-weight: 400;
    }
}

/deep/ .p-datatable.p-datatable-customers {
    .p-datatable-header {
        border: 0 none;
        padding: 12px;
        text-align: left;
        font-size: 20px;
    }

    .p-paginator {
        border: 0 none;
        padding: 1em;
    }

    .p-datatable-thead > tr > th {
        border: 0 none;
        text-align: left;

        &.p-filter-column {
            border-top: 1px solid #c8c8c8;
        }
    }

    .p-datatable-tbody > tr > td {
        border: 0 none;
        cursor: auto;
    }
}
</style>