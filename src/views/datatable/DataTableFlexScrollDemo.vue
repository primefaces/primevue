<template>
	<div>
        <div class="content-section implementation">
            <div class="card" style="height: calc(100vh - 143px)">
                <DataTable :value="customers" :scrollable="true" scrollHeight="flex">
                    <Column field="name" header="Name"></Column>
                    <Column field="country.name" header="Country"></Column>
                    <Column field="representative.name" header="Representative"></Column>
                    <Column field="status" header="Status"></Column>
                </DataTable>
            </div>
        </div>

        <AppDoc name="DataTableFlexScrollDemo" :sources="sources" :service="['CustomerService']" :data="['customers-large']" />    
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
        <DataTable :value="customers" :scrollable="true" scrollHeight="flex">
            <Column field="name" header="Name"></Column>
            <Column field="country.name" header="Country"></Column>
            <Column field="representative.name" header="Representative"></Column>
            <Column field="status" header="Status"></Column>
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
        <DataTable :value="customers" :scrollable="true" scrollHeight="flex">
            <Column field="name" header="Name"></Column>
            <Column field="country.name" header="Country"></Column>
            <Column field="representative.name" header="Representative"></Column>
            <Column field="status" header="Status"></Column>
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

        const customers = ref(null);
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