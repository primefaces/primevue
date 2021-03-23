<template>
	<div>
        <div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>Paginator</span></h1>
				<p>Pagination is enabled by setting paginator property to true and defining the rows attribute as the number of rows per page.</p>
			</div>
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
                    <template #paginatorLeft>
                        <Button type="button" icon="pi pi-refresh" class="p-button-text" />
                    </template>
                    <template #paginatorRight>
                        <Button type="button" icon="pi pi-cloud" class="p-button-text" />
                    </template>
                </DataTable>
            </div>
		</div>

        <AppDoc name="DataTablePaginatorDemo" :sources="sources" :service="['CustomerService']" :data="['customers-large']" />
                  
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
                    tabName: 'Source',
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
            <template #paginatorLeft>
                <Button type="button" icon="pi pi-refresh" class="p-button-text" />
            </template>
            <template #paginatorRight>
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
                    tabName: 'Composition API',
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
            <template #paginatorLeft>
                <Button type="button" icon="pi pi-refresh" class="p-button-text" />
            </template>
            <template #paginatorRight>
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