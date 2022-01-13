<template>
	<div>
        <div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>Paginator</span></h1>
				<p>Pagination is enabled by setting paginator property to true and defining the rows attribute as the number of rows per page.</p>
			</div>
            <AppDemoActions />
		</div>

		<div class="content-section implementation">
            <div class="card">
                <DataTable :value="customers" :paginator="true" :rows="10"
                    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                    :rowsPerPageOptions="[10,20,50]" responsiveLayout="scroll"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}">
                    <Column field="name" header="Name"></Column>
                    <Column field="country.name" header="Country"></Column>
                    <Column field="company" header="Company"></Column>
                    <Column field="representative.name" header="Representative"></Column>
                    <template #paginatorstart>
                        <Button type="button" icon="pi pi-refresh" class="p-button-text" />
                    </template>
                    <template #paginatorend>
                        <Button type="button" icon="pi pi-cloud" class="p-button-text" />
                    </template>
                </DataTable>
            </div>
		</div>

        <AppDoc name="DataTablePaginatorDemo" :sources="sources" :service="['CustomerService']" :data="['customers-large']" github="datatable/DataTablePaginatorDemo.vue" />

	</div>
</template>

<script>
import CustomerService from '../../service/CustomerService';

export default {
    data() {
        return {
            customers: null,
            sources: {
                'options-api': {
                    tabName: 'Options API Source',
                    content: `
<template>
	<div>
        <DataTable :value="customers" :paginator="true" :rows="10"
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            :rowsPerPageOptions="[10,20,50]" responsiveLayout="scroll"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}">
            <Column field="name" header="Name"></Column>
            <Column field="country.name" header="Country"></Column>
            <Column field="company" header="Company"></Column>
            <Column field="representative.name" header="Representative"></Column>
            <template #paginatorstart>
                <Button type="button" icon="pi pi-refresh" class="p-button-text" />
            </template>
            <template #paginatorend>
                <Button type="button" icon="pi pi-cloud" class="p-button-text" />
            </template>
        </DataTable>    
	</div>
</template>

<script>
import CustomerService from './service/CustomerService';

export default {
    data() {
        return {
            customers: null
        }
    },
    customerService: null,
    created() {
        this.customerService = new CustomerService();
    },
    mounted() {
        this.customerService.getCustomersLarge().then(data => this.customers = data);
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
        <DataTable :value="customers" :paginator="true" :rows="10"
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            :rowsPerPageOptions="[10,20,50]" responsiveLayout="scroll"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}">
            <Column field="name" header="Name"></Column>
            <Column field="country.name" header="Country"></Column>
            <Column field="company" header="Company"></Column>
            <Column field="representative.name" header="Representative"></Column>
            <template #paginatorstart>
                <Button type="button" icon="pi pi-refresh" class="p-button-text" />
            </template>
            <template #paginatorend>
                <Button type="button" icon="pi pi-cloud" class="p-button-text" />
            </template>
        </DataTable>    
	</div>
</template>

<script>
import { ref, onMounted } from 'vue';
import CustomerService from './service/CustomerService';

export default {
    setup() {
        onMounted(() => {
            customerService.value.getCustomersLarge().then(data => customers.value = data);
        })

        const customers = ref();
        const customerService = ref(new CustomerService());

        return { customers }
    }
}
<\\/script>                  
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/datatable/datatable.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>
        <script src="./CustomerService.js"><\\/script>`,
                    content: `<div id="app">
            <p-datatable :value="customers" :paginator="true" :rows="10"
                paginator-template="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                :rows-per-page-options="[10,20,50]" responsive-layout="scroll"
                current-page-report-template="Showing {first} to {last} of {totalRecords}">
                <p-column field="name" header="Name"></p-column>
                <p-column field="country.name" header="Country"></p-column>
                <p-column field="company" header="Company"></p-column>
                <p-column field="representative.name" header="Representative"></p-column>
                <template #paginatorstart>
                    <p-button type="button" icon="pi pi-refresh" class="p-button-text"></p-button>
                </template>
                <template #paginatorend>
                    <p-button type="button" icon="pi pi-cloud" class="p-button-text"></p-button>
                </template>
            </p-datatable>
        </div>

        <script type="module">
        const { createApp, ref, onMounted } = Vue;

        const App = {
            setup() {
                onMounted(() => {
                    customerService.value.getCustomersLarge().then(data => customers.value = data);
                })

                const customers = ref();
                const customerService = ref(new CustomerService());

                return { customers }
            },
            components: {
                "p-datatable": primevue.datatable,
                "p-column": primevue.column,
                "p-button": primevue.button
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
    },
    mounted() {
        this.customerService.getCustomersLarge().then(data => this.customers = data);
    }
}
</script>