<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>Row Group</span></h1>
				<p>Rows can either be grouped by a separate grouping row or using rowspan.</p>
			</div>
            <AppDemoActions />
		</div>

		<div class="content-section implementation">
            <div class="card">
                <h5>Subheader Grouping</h5>
                <p>Group customers by their representative.</p>
                <DataTable :value="customers" rowGroupMode="subheader" groupRowsBy="representative.name"
                    sortMode="single" sortField="representative.name" :sortOrder="1" scrollable scrollHeight="400px">
                    <Column field="representative.name" header="Representative"></Column>
                    <Column field="name" header="Name" style="min-width:200px"></Column>
                    <Column field="country" header="Country" style="min-width:200px">
                        <template #body="slotProps">
                            <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.data.country.code" width="30" />
                            <span class="image-text">{{slotProps.data.country.name}}</span>
                        </template>
                    </Column>
                    <Column field="company" header="Company" style="min-width:200px"></Column>
                    <Column field="status" header="Status" style="min-width:200px">
                        <template #body="slotProps">
                            <span :class="'customer-badge status-' + slotProps.data.status">{{slotProps.data.status}}</span>
                        </template>
                    </Column>
                    <Column field="date" header="Date" style="min-width:200px"></Column>
                    <template #groupheader="slotProps">
                        <img :alt="slotProps.data.representative.name" :src="'demo/images/avatar/' + slotProps.data.representative.image" width="32" style="vertical-align: middle" />
                        <span class="image-text">{{slotProps.data.representative.name}}</span>
                    </template>
                    <template #groupfooter="slotProps">
                        <td style="min-width: 80%">
                            <div style="text-align: right; width: 100%">Total Customers</div>
                        </td>
                        <td style="width: 20%">{{calculateCustomerTotal(slotProps.data.representative.name)}}</td>
                    </template>
                </DataTable>
            </div>

            <div class="card">
                <h5>Expandable Row Groups</h5>
                <p>Group customers by their representative.</p>
                <DataTable :value="customers" rowGroupMode="subheader" groupRowsBy="representative.name"
                    sortMode="single" sortField="representative.name" :sortOrder="1" responsiveLayout="scroll"
                    :expandableRowGroups="true" v-model:expandedRowGroups="expandedRowGroups"
                    @rowgroup-expand="onRowGroupExpand" @rowgroup-collapse="onRowGroupCollapse">
                    <Column field="representative.name" header="Representative"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="country" header="Country">
                        <template #body="slotProps">
                            <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.data.country.code" width="30" />
                            <span class="image-text">{{slotProps.data.country.name}}</span>
                        </template>
                    </Column>
                    <Column field="company" header="Company"></Column>
                    <Column field="status" header="Status">
                        <template #body="slotProps">
                            <span :class="'customer-badge status-' + slotProps.data.status">{{slotProps.data.status}}</span>
                        </template>
                    </Column>
                    <Column field="date" header="Date"></Column>
                    <template #groupheader="slotProps">
                        <img :alt="slotProps.data.representative.name" :src="'demo/images/avatar/' + slotProps.data.representative.image" width="32" style="vertical-align: middle" />
                        <span class="image-text">{{slotProps.data.representative.name}}</span>
                    </template>
                    <template #groupfooter="slotProps">
                        <td colspan="4" style="text-align: right">Total Customers</td>
                        <td>{{calculateCustomerTotal(slotProps.data.representative.name)}}</td>
                    </template>
                </DataTable>
            </div>

            <div class="card">
                <h5>RowSpan Grouping</h5>
                <DataTable :value="customers" rowGroupMode="rowspan"  groupRowsBy="representative.name"
                    sortMode="single" sortField="representative.name" :sortOrder="1" responsiveLayout="scroll">
                    <Column header="#" headerStyle="width:3em">
                        <template #body="slotProps">
                            {{slotProps.index}}
                        </template>
                    </Column>
                    <Column field="representative.name" header="Representative">
                        <template #body="slotProps">
                            <img :alt="slotProps.data.representative.name" :src="'demo/images/avatar/' + slotProps.data.representative.image" width="32" style="vertical-align: middle" />
                            <span class="image-text">{{slotProps.data.representative.name}}</span>
                        </template>
                    </Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="country" header="Country">
                        <template #body="slotProps">
                            <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.data.country.code" width="30" />
                            <span class="image-text">{{slotProps.data.country.name}}</span>
                        </template>
                    </Column>
                    <Column field="company" header="Company"></Column>
                    <Column field="status" header="Status">
                        <template #body="slotProps">
                            <span :class="'customer-badge status-' + slotProps.data.status">{{slotProps.data.status}}</span>
                        </template>
                    </Column>
                    <Column field="date" header="Date"></Column>
                </DataTable>
            </div>
		</div>

        <AppDoc name="DataTableRowGroupDemo" :sources="sources" :service="['CustomerService']" :data="['customers-medium']" github="datatable/DataTableRowGroupDemo.vue" />

	</div>
</template>

<script>
import CustomerService from '../../service/CustomerService';

export default {
    data() {
        return {
            customers: null,
            expandedRowGroups: null,
            sources: {
                'options-api': {
                    tabName: 'Options API Source',
                    content: `
<template>
	<div>
        <Toast />

        <div class="card">
            <h5>Subheader Grouping</h5>
            <DataTable :value="customers" rowGroupMode="subheader" groupRowsBy="representative.name"
                sortMode="single" sortField="representative.name" :sortOrder="1" scrollable scrollHeight="400px">
                <Column field="representative.name" header="Representative"></Column>
                <Column field="name" header="Name" style="min-width:200px"></Column>
                <Column field="country" header="Country" style="min-width:200px">
                    <template #body="slotProps">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :class="'flag flag-' + slotProps.data.country.code" width="30" />
                        <span class="image-text">{{slotProps.data.country.name}}</span>
                    </template>
                </Column>
                <Column field="company" header="Company" style="min-width:200px"></Column>
                <Column field="status" header="Status" style="min-width:200px">
                    <template #body="slotProps">
                        <span :class="'customer-badge status-' + slotProps.data.status">{{slotProps.data.status}}</span>
                    </template>
                </Column>
                <Column field="date" header="Date" style="min-width:200px"></Column>
                <template #groupheader="slotProps">
                    <img :alt="slotProps.data.representative.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="32" style="vertical-align: middle" />
                    <span class="image-text">{{slotProps.data.representative.name}}</span>
                </template>
               <template #groupfooter="slotProps">
                    <td style="min-width: 80%">
                        <div style="text-align: right; width: 100%">Total Customers</div>
                    </td>
                    <td style="width: 20%">{{calculateCustomerTotal(slotProps.data.representative.name)}}</td>
                </template>
            </DataTable>
        </div>

        <div class="card">
            <h5>Expandable Row Groups</h5>
            <DataTable :value="customers" rowGroupMode="subheader" groupRowsBy="representative.name"
                sortMode="single" sortField="representative.name" :sortOrder="1" responsiveLayout="scroll"
                :expandableRowGroups="true" v-model:expandedRowGroups="expandedRowGroups"
                @rowgroupExpand="onRowGroupExpand" @rowgroupCollapse="onRowGroupCollapse">
                <Column field="representative.name" header="Representative"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="country" header="Country">
                    <template #body="slotProps">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="30" />
                        <span class="image-text">{{slotProps.data.country.name}}</span>
                    </template>
                </Column>
                <Column field="company" header="Company"></Column>
                <Column field="status" header="Status">
                    <template #body="slotProps">
                        <span :class="'customer-badge status-' + slotProps.data.status">{{slotProps.data.status}}</span>
                    </template>
                </Column>
                <Column field="date" header="Date"></Column>
                <template #groupheader="slotProps">
                    <img :alt="slotProps.data.representative.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="32" style="vertical-align: middle" />
                    <span class="image-text">{{slotProps.data.representative.name}}</span>
                </template>
                <template #groupfooter="slotProps">
                    <td colspan="4" style="text-align: right">Total Customers</td>
                    <td>{{calculateCustomerTotal(slotProps.data.representative.name)}}</td>
                </template>
            </DataTable>
        </div>

        <div class="card">
            <h5>RowSpan Grouping</h5>
            <DataTable :value="customers" rowGroupMode="rowspan" groupRowsBy="representative.name"
                sortMode="single" sortField="representative.name" :sortOrder="1" responsiveLayout="scroll">
                <Column header="#" headerStyle="width:3em">
                    <template #body="slotProps">
                        {{slotProps.index}}
                    </template>
                </Column>
                <Column field="representative.name" header="Representative">
                    <template #body="slotProps">
                        <img :alt="slotProps.data.representative.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="32" style="vertical-align: middle" />
                        <span class="image-text">{{slotProps.data.representative.name}}</span>
                    </template>
                </Column>
                <Column field="name" header="Name"></Column>
                <Column field="country" header="Country">
                    <template #body="slotProps">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="30" />
                        <span class="image-text">{{slotProps.data.country.name}}</span>
                    </template>
                </Column>
                <Column field="company" header="Company"></Column>
                <Column field="status" header="Status">
                    <template #body="slotProps">
                        <span :class="'customer-badge status-' + slotProps.data.status">{{slotProps.data.status}}</span>
                    </template>
                </Column>
                <Column field="date" header="Date"></Column>
            </DataTable>
        </div>

	</div>
</template>

<script>
import CustomerService from './service/CustomerService';

export default {
    data() {
        return {
            customers: null,
            expandedRowGroups: null
        }
    },
    customerService: null,
    created() {
        this.customerService = new CustomerService();
    },
    mounted() {
        this.customerService.getCustomersMedium().then(data => this.customers = data);
    },
    methods: {
        onRowGroupExpand(event) {
            this.$toast.add({severity: 'info', summary: 'Row Group Expanded', detail: 'Value: ' + event.data, life: 3000});
        },
        onRowGroupCollapse(event) {
            this.$toast.add({severity: 'success', summary: 'Row Group Collapsed', detail: 'Value: ' + event.data, life: 3000});
        },
        calculateCustomerTotal(name) {
            let total = 0;

            if (this.customers) {
                for (let customer of this.customers) {
                    if (customer.representative.name === name) {
                        total++;
                    }
                }
            }

            return total;
        }
    }
}
<\\/script>

<style lang="scss" scoped>
.p-rowgroup-footer td {
    font-weight: 700;
}

::v-deep(.p-rowgroup-header) {
    span {
        font-weight: 700;
    }

    .p-row-toggler {
        vertical-align: middle;
        margin-right: .25rem;
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
        <Toast />

        <div class="card">
            <h5>Subheader Grouping</h5>
            <DataTable :value="customers" rowGroupMode="subheader" groupRowsBy="representative.name"
                sortMode="single" sortField="representative.name" :sortOrder="1" scrollable scrollHeight="400px">
                <Column field="representative.name" header="Representative"></Column>
                <Column field="name" header="Name" style="min-width:200px"></Column>
                <Column field="country" header="Country" style="min-width:200px">
                    <template #body="slotProps">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :class="'flag flag-' + slotProps.data.country.code" width="30" />
                        <span class="image-text">{{slotProps.data.country.name}}</span>
                    </template>
                </Column>
                <Column field="company" header="Company" style="min-width:200px"></Column>
                <Column field="status" header="Status" style="min-width:200px">
                    <template #body="slotProps">
                        <span :class="'customer-badge status-' + slotProps.data.status">{{slotProps.data.status}}</span>
                    </template>
                </Column>
                <Column field="date" header="Date" style="min-width:200px"></Column>
                <template #groupheader="slotProps">
                    <img :alt="slotProps.data.representative.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="32" style="vertical-align: middle" />
                    <span class="image-text">{{slotProps.data.representative.name}}</span>
                </template>
               <template #groupfooter="slotProps">
                    <td style="min-width: 80%">
                        <div style="text-align: right; width: 100%">Total Customers</div>
                    </td>
                    <td style="width: 20%">{{calculateCustomerTotal(slotProps.data.representative.name)}}</td>
                </template>
            </DataTable>
        </div>

        <div class="card">
            <h5>Expandable Row Groups</h5>
            <DataTable :value="customers" rowGroupMode="subheader" groupRowsBy="representative.name"
                sortMode="single" sortField="representative.name" :sortOrder="1" responsiveLayout="scroll"
                :expandableRowGroups="true" v-model:expandedRowGroups="expandedRowGroups"
                @rowgroupExpand="onRowGroupExpand" @rowgroupCollapse="onRowGroupCollapse">
                <Column field="representative.name" header="Representative"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="country" header="Country">
                    <template #body="slotProps">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="30" />
                        <span class="image-text">{{slotProps.data.country.name}}</span>
                    </template>
                </Column>
                <Column field="company" header="Company"></Column>
                <Column field="status" header="Status">
                    <template #body="slotProps">
                        <span :class="'customer-badge status-' + slotProps.data.status">{{slotProps.data.status}}</span>
                    </template>
                </Column>
                <Column field="date" header="Date"></Column>
                <template #groupheader="slotProps">
                    <img :alt="slotProps.data.representative.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="32" style="vertical-align: middle" />
                    <span class="image-text">{{slotProps.data.representative.name}}</span>
                </template>
                <template #groupfooter="slotProps">
                    <td colspan="4" style="text-align: right">Total Customers</td>
                    <td>{{calculateCustomerTotal(slotProps.data.representative.name)}}</td>
                </template>
            </DataTable>
        </div>

        <div class="card">
            <h5>RowSpan Grouping</h5>
            <DataTable :value="customers" rowGroupMode="rowspan"  groupRowsBy="representative.name"
                sortMode="single" sortField="representative.name" :sortOrder="1" responsiveLayout="scroll">
                <Column header="#" headerStyle="width:3em">
                    <template #body="slotProps">
                        {{slotProps.index}}
                    </template>
                </Column>
                <Column field="representative.name" header="Representative">
                    <template #body="slotProps">
                        <img :alt="slotProps.data.representative.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="32" style="vertical-align: middle" />
                        <span class="image-text">{{slotProps.data.representative.name}}</span>
                    </template>
                </Column>
                <Column field="name" header="Name"></Column>
                <Column field="country" header="Country">
                    <template #body="slotProps">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="30" />
                        <span class="image-text">{{slotProps.data.country.name}}</span>
                    </template>
                </Column>
                <Column field="company" header="Company"></Column>
                <Column field="status" header="Status">
                    <template #body="slotProps">
                        <span :class="'customer-badge status-' + slotProps.data.status">{{slotProps.data.status}}</span>
                    </template>
                </Column>
                <Column field="date" header="Date"></Column>
            </DataTable>
        </div>

	</div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import CustomerService from './service/CustomerService';

export default {
    setup() {
        onMounted(() => {
            customerService.value.getCustomersMedium().then(data => customers.value = data);
        })

        const toast = useToast();
        const customers = ref();
        const customerService = ref(new CustomerService());
        const expandedRowGroups = ref();

        const onRowGroupExpand = (event) => {
            toast.add({severity: 'info', summary: 'Row Group Expanded', detail: 'Value: ' + event.data, life: 3000});
        };
        const onRowGroupCollapse = (event) => {
            toast.add({severity: 'success', summary: 'Row Group Collapsed', detail: 'Value: ' + event.data, life: 3000});
        };
        const calculateCustomerTotal = (name) => {
            let total = 0;

            if (customers.value) {
                for (let customer of customers.value) {
                    if (customer.representative.name === name) {
                        total++;
                    }
                }
            }

            return total;
        };

        return { customers, expandedRowGroups, onRowGroupExpand, onRowGroupCollapse, calculateCustomerTotal }
    }
}
<\\/script>

<style lang="scss" scoped>
.p-rowgroup-footer td {
    font-weight: 700;
}

::v-deep(.p-rowgroup-header) {
    span {
        font-weight: 700;
    }

    .p-row-toggler {
        vertical-align: middle;
        margin-right: .25rem;
    }
}
</style>                    
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
        this.customerService.getCustomersMedium().then(data => this.customers = data);
    },
    methods: {
        onRowGroupExpand(event) {
            this.$toast.add({severity: 'info', summary: 'Row Group Expanded', detail: 'Value: ' + event.data, life: 3000});
        },
        onRowGroupCollapse(event) {
            this.$toast.add({severity: 'success', summary: 'Row Group Collapsed', detail: 'Value: ' + event.data, life: 3000});
        },
        calculateCustomerTotal(name) {
            let total = 0;

            if (this.customers) {
                for (let customer of this.customers) {
                    if (customer.representative.name === name) {
                        total++;
                    }
                }
            }

            return total;
        }
    }
}
</script>

<style lang="scss" scoped>
.p-rowgroup-footer td {
    font-weight: 700;
}

::v-deep(.p-rowgroup-header) {
    span {
        font-weight: 700;
    }

    .p-row-toggler {
        vertical-align: middle;
        margin-right: .25rem;
    }
}
</style>