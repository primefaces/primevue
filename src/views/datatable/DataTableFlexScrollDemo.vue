<template>
	<div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>DataTable <span>Flex Scroll</span></h1>
            </div>
            <AppDemoActions />
		</div>
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

        <AppDoc name="DataTableFlexScrollDemo" :sources="sources" :service="['CustomerService']" :data="['customers-large']" github="datatable/DataTableFlexScrollDemo.vue" />    
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
    <div class="card" style="height: calc(100vh - 143px)">
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
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div class="card" style="height: calc(100vh - 143px)">
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
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/datatable/datatable.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>
        <script src="./CustomerService.js"><\\/script>`,
                    content: `<div id="app">
            <div class="card" style="height: calc(100vh - 143px)">
                <p-datatable :value="customers" :scrollable="true" scroll-height="flex">
                    <p-column field="name" header="Name"></p-column>
                    <p-column field="country.name" header="Country"></p-column>
                    <p-column field="representative.name" header="Representative"></p-column>
                    <p-column field="status" header="Status"></p-column>
                </p-datatable>
            </div>
        </div>

        <script type="module">
        const { createApp, ref, onMounted } = Vue;

        const App = {
            setup() {
                onMounted(() => {
                    customerService.value.getCustomersLarge().then(data => customers.value = data);
                })

                const customers = ref(null);
                const customerService = ref(new CustomerService());

                return { customers }
            },
            components: {
                "p-datatable": primevue.datatable,
                "p-column": primevue.column
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