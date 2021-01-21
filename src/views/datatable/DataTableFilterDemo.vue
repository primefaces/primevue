<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable - Filter</h1>
				<p>Filtering is enabled by defining a filter template per column to populate the filters property of the DataTable.</p>
			</div>
		</div>

		<div class="content-section implementation">
            <div class="card">
                <DataTable :value="customers" :paginator="true" class="p-datatable-customers" :rows="10"
                    dataKey="id" :filters="filters" :loading="loading">
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
                    <Column field="name" header="Name">
                        <template #body="slotProps">
                            <span class="p-column-title">Name</span>
                            {{slotProps.data.name}}
                        </template>
                        <template #filter>
                            <InputText type="text" v-model="filters['name']" class="p-column-filter" placeholder="Search by name"/>
                        </template>
                    </Column>
                    <Column header="Country" filterField="country.name" filterMatchMode="contains">
                        <template #body="slotProps">
                            <span class="p-column-title">Country</span>
                            <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.data.country.code" width="30" />
                            <span class="image-text">{{slotProps.data.country.name}}</span>
                        </template>
                        <template #filter>
                            <InputText type="text" v-model="filters['country.name']" class="p-column-filter" placeholder="Search by country"/>
                        </template>
                    </Column>
                    <Column header="Representative" filterField="representative.name" filterMatchMode="in">
                        <template #body="slotProps">
                            <span class="p-column-title">Representative</span>
                            <img :alt="slotProps.data.representative.name" :src="'demo/images/avatar/' + slotProps.data.representative.image" width="32" style="vertical-align: middle" />
                            <span class="image-text">{{slotProps.data.representative.name}}</span>
                        </template>
                        <template #filter>
                            <MultiSelect v-model="filters['representative.name']" :options="representatives" optionLabel="name" optionValue="name" placeholder="All" class="p-column-filter">
                                <template #option="slotProps">
                                    <div class="p-multiselect-representative-option">
                                        <img :alt="slotProps.option.name" :src="'demo/images/avatar/' + slotProps.option.image" width="32" style="vertical-align: middle" />
                                        <span class="image-text">{{slotProps.option.name}}</span>
                                    </div>
                                </template>
                            </MultiSelect>
                        </template>
                    </Column>
                    <Column field="date" header="Date" filterMatchMode="custom" :filterFunction="filterDate">
                        <template #body="slotProps">
                            <span class="p-column-title">Date</span>
                            <span>{{slotProps.data.date}}</span>
                        </template>
                        <template #filter>
                            <Calendar v-model="filters['date']" dateFormat="yy-mm-dd" class="p-column-filter" placeholder="Registration Date"/>
                        </template>
                    </Column>
                    <Column field="status" header="Status" filterMatchMode="equals">
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
                    <Column field="activity" header="Activity" filterMatchMode="gte">
                        <template #body="slotProps">
                            <span class="p-column-title">Activity</span>
                            <ProgressBar :value="slotProps.data.activity" :showValue="false" />
                        </template>
                        <template #filter>
                            <InputText type="text" v-model="filters['activity']" class="p-column-filter" placeholder="Minimum"/>
                        </template>
                    </Column>
                </DataTable>
            </div>
		</div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
                    <div class="p-d-flex p-jc-end">
                        <LiveEditor name="DataTableDemo" :sources="sources" service="CustomerService" data="customers-large" :components="['Column', 'InputText', 'MultiSelect', 'Calendar', 'Dropdown', 'ProgressBar', 'Button']" />
                    </div>
<pre v-code>
<code><template v-pre>
&lt;DataTable :value="customers" :paginator="true" class="p-datatable-customers" :rows="10"
    dataKey="id" :filters="filters" :loading="loading"&gt;
    &lt;template #header&gt;
        &lt;div class="table-header"&gt;
            List of Customers
            &lt;span class="p-input-icon-left"&gt;
                &lt;i class="pi pi-search" /&gt;
                &lt;InputText v-model="filters['global']" placeholder="Global Search" /&gt;
            &lt;/span&gt;
        &lt;/div&gt;
    &lt;/template&gt;
    &lt;template #empty&gt;
        No customers found.
    &lt;/template&gt;
    &lt;template #loading&gt;
        Loading customers data. Please wait.
    &lt;/template&gt;
    &lt;Column field="name" header="Name"&gt;
        &lt;template #body="slotProps"&gt;
            &lt;span class="p-column-title"&gt;Name&lt;/span&gt;
            {{slotProps.data.name}}
        &lt;/template&gt;
        &lt;template #filter&gt;
            &lt;InputText type="text" v-model="filters['name']" class="p-column-filter" placeholder="Search by name"/&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column header="Country" filterField="country.name" filterMatchMode="contains"&gt;
        &lt;template #body="slotProps"&gt;
            &lt;span class="p-column-title"&gt;Country&lt;/span&gt;
            &lt;img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.data.country.code" width="30" /&gt;
            &lt;span class="image-text"&gt;{{slotProps.data.country.name}}&lt;/span&gt;
        &lt;/template&gt;
        &lt;template #filter&gt;
            &lt;InputText type="text" v-model="filters['country.name']" class="p-column-filter" placeholder="Search by country"/&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column header="Representative" filterField="representative.name" filterMatchMode="in"&gt;
        &lt;template #body="slotProps"&gt;
            &lt;span class="p-column-title"&gt;Representative&lt;/span&gt;
            &lt;img :alt="slotProps.data.representative.name" :src="'demo/images/avatar/' + slotProps.data.representative.image" width="32" style="vertical-align: middle" /&gt;
            &lt;span class="image-text"&gt;{{slotProps.data.representative.name}}&lt;/span&gt;
        &lt;/template&gt;
            &lt;template #filter&gt;
            &lt;MultiSelect v-model="filters['representative.name']" :options="representatives" optionLabel="name" optionValue="name" placeholder="All" class="p-column-filter"&gt;
                &lt;template #option="slotProps"&gt;
                    &lt;div class="p-multiselect-representative-option"&gt;
                        &lt;img :alt="slotProps.option.name" :src="'demo/images/avatar/' + slotProps.option.image" width="32" style="vertical-align: middle" /&gt;
                        &lt;span class="image-text"&gt;{{slotProps.option.name}}&lt;/span&gt;
                    &lt;/div&gt;
                &lt;/template&gt;
            &lt;/MultiSelect&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="date" header="Date" filterMatchMode="custom" :filterFunction="filterDate"&gt;
        &lt;template #body="slotProps"&gt;
            &lt;span class="p-column-title"&gt;Date&lt;/span&gt;
            &lt;span&gt;{{slotProps.data.date}}&lt;/span&gt;
        &lt;/template&gt;
        &lt;template #filter&gt;
            &lt;Calendar v-model="filters['date']" dateFormat="yy-mm-dd" class="p-column-filter" placeholder="Registration Date"/&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="status" header="Status" filterMatchMode="equals"&gt;
        &lt;template #body="slotProps"&gt;
            &lt;span class="p-column-title"&gt;Status&lt;/span&gt;
            &lt;span :class="'customer-badge status-' + slotProps.data.status"&gt;{{slotProps.data.status}}&lt;/span&gt;
        &lt;/template&gt;
        &lt;template #filter&gt;
            &lt;Dropdown v-model="filters['status']" :options="statuses" placeholder="Select a Status" class="p-column-filter" :showClear="true"&gt;
                &lt;template #option="slotProps"&gt;
                    &lt;span :class="'customer-badge status-' + slotProps.option"&gt;{{slotProps.option}}&lt;/span&gt;
                &lt;/template&gt;
            &lt;/Dropdown&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="activity" header="Activity" filterMatchMode="gte"&gt;
        &lt;template #body="slotProps"&gt;
            &lt;span class="p-column-title"&gt;Activity&lt;/span&gt;
            &lt;ProgressBar :value="slotProps.data.activity" :showValue="false" /&gt;
        &lt;/template&gt;
        &lt;template #filter&gt;
            &lt;InputText type="text" v-model="filters['activity']" class="p-column-filter" placeholder="Minimum"/&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

<pre v-code.script>
<code>
import CustomerService from '../../service/CustomerService';

export default {
    data() {
        return {
            customers: null,
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

            if (month &lt; 10) {
                month = '0' + month;
            }

            if (day &lt; 10) {
                day = '0' + day;
            }

            return date.getFullYear() + '-' + month + '-' + day;
        }
    }
}

</code></pre>
                </TabPanel>
            </TabView>
        </div>
	</div>
</template>

<script>
import CustomerService from '../../service/CustomerService';
import LiveEditor from '../liveeditor/LiveEditor';

export default {
    data() {
        return {
            customers: null,
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
            ],
            sources: {
                'template': {
                    content: `<template>
    <div class="layout-content">
        <div class="content-section implementation">
            <div class="card">
                <DataTable :value="customers" :paginator="true" class="p-datatable-customers" :rows="10"
                    dataKey="id" :filters="filters" :loading="loading">
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
                    <Column field="name" header="Name">
                        <template #body="slotProps">
                            <span class="p-column-title">Name</span>
                            {{slotProps.data.name}}
                        </template>
                        <template #filter>
                            <InputText type="text" v-model="filters['name']" class="p-column-filter" placeholder="Search by name"/>
                        </template>
                    </Column>
                    <Column header="Country" filterField="country.name" filterMatchMode="contains">
                        <template #body="slotProps">
                            <span class="p-column-title">Country</span>
                            <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :class="'flag flag-' + slotProps.data.country.code" width="30" />
                            <span class="image-text">{{slotProps.data.country.name}}</span>
                        </template>
                        <template #filter>
                            <InputText type="text" v-model="filters['country.name']" class="p-column-filter" placeholder="Search by country"/>
                        </template>
                    </Column>
                    <Column header="Representative" filterField="representative.name" filterMatchMode="in">
                        <template #body="slotProps">
                            <span class="p-column-title">Representative</span>
                            <img :alt="slotProps.data.representative.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="32" style="vertical-align: middle" />
                            <span class="image-text">{{slotProps.data.representative.name}}</span>
                        </template>
                        <template #filter>
                            <MultiSelect v-model="filters['representative.name']" :options="representatives" optionLabel="name" optionValue="name" placeholder="All" class="p-column-filter">
                                <template #option="slotProps">
                                    <div class="p-multiselect-representative-option">
                                        <img :alt="slotProps.option.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="32" style="vertical-align: middle" />
                                        <span class="image-text">{{slotProps.option.name}}</span>
                                    </div>
                                </template>
                            </MultiSelect>
                        </template>
                    </Column>
                    <Column field="date" header="Date" filterMatchMode="custom" :filterFunction="filterDate">
                        <template #body="slotProps">
                            <span class="p-column-title">Date</span>
                            <span>{{slotProps.data.date}}</span>
                        </template>
                        <template #filter>
                            <Calendar v-model="filters['date']" dateFormat="yy-mm-dd" class="p-column-filter" placeholder="Registration Date"/>
                        </template>
                    </Column>
                    <Column field="status" header="Status" filterMatchMode="equals">
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
                    <Column field="activity" header="Activity" filterMatchMode="gte">
                        <template #body="slotProps">
                            <span class="p-column-title">Activity</span>
                            <ProgressBar :value="slotProps.data.activity" :showValue="false" />
                        </template>
                        <template #filter>
                            <InputText type="text" v-model="filters['activity']" class="p-column-filter" placeholder="Minimum"/>
                        </template>
                    </Column>
                </DataTable>
            </div>
		</div>
    </div>
</template>
<script>
import CustomerService from '../service/CustomerService';
export default {
    data() {
        return {    
            customers: null,
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
    }
}
`,
                    style: `<style lang="scss" scoped>
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
</style>`
                }
            }
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
        LiveEditor
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