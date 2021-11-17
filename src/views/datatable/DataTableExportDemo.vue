<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>Export</span></h1>
				<p>DataTable can export its data to CSV format.</p>
			</div>
            <AppDemoActions />
		</div>

		<div class="content-section implementation">
            <div class="card">
                <DataTable :value="products" ref="dt" responsiveLayout="scroll">
                    <template #header>
                        <div style="text-align: left">
                            <Button icon="pi pi-external-link" label="Export" @click="exportCSV($event)" />
                        </div>
                    </template>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>
		</div>
        
        <AppDoc name="DataTableExportDemo" :sources="sources" :service="['ProductService']" :data="['products-small']" github="datatable/DataTableExportDemo.vue" />
	</div>
</template>

<script>
import ProductService from '../../service/ProductService';

export default {
    data() {
        return {
            products: null,
            sources: {
                'options-api': {
                    tabName: 'Options API Source',
                    content: `
<template>
    <div>
        <DataTable :value="products" ref="dt" responsiveLayout="scroll">
            <template #header>
                <div style="text-align: left">
                    <Button icon="pi pi-external-link" label="Export" @click="exportCSV($event)" />
                </div>
            </template>
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script>
import ProductService from './service/ProductService';

export default {
    data() {
        return {
            products: null
        }
    },
    productService: null,
    created() {
        this.productService = new ProductService();
    },
    mounted() {
        this.productService.getProductsSmall().then(data => this.products = data);
    },
    methods: {
        exportCSV() {
            this.$refs.dt.exportCSV();
        }
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
        <DataTable :value="products" ref="dt" responsiveLayout="scroll">
            <template #header>
                <div style="text-align: left">
                    <Button icon="pi pi-external-link" label="Export" @click="exportCSV($event)" />
                </div>
            </template>
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import ProductService from './service/ProductService';

export default {
    setup() {
        onMounted(() => {
            productService.value.getProductsSmall().then(data => products.value = data);
        })

        const dt = ref();
        const products = ref();
        const productService = ref(new ProductService());
        const exportCSV = () => {
            dt.value.exportCSV();
        };

        return { dt, products, exportCSV }
    }
}
<\\/script>
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/datatable/datatable.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>
        <script src="./ProductService.js"><\\/script>`,
                    content: `<div id="app">
            <p-datatable :value="products" ref="dt" responsive-layout="scroll">
                <template #header>
                    <div style="text-align: left">
                        <p-button icon="pi pi-external-link" label="Export" @click="exportCSV($event)"></p-button>
                    </div>
                </template>
                <p-column field="code" header="Code"></p-column>
                <p-column field="name" header="Name"></p-column>
                <p-column field="category" header="Category"></p-column>
                <p-column field="quantity" header="Quantity"></p-column>
            </p-datatable>
        </div>

        <script type="module">
        const { createApp, ref, onMounted } = Vue;

        const App =  {
            setup() {
                onMounted(() => {
                    productService.value.getProductsSmall().then(data => products.value = data);
                })

                const dt = ref();
                const products = ref();
                const productService = ref(new ProductService());
                const exportCSV = () => {
                    dt.value.exportCSV();
                };

                return { dt, products, exportCSV }
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
    productService: null,
    created() {
        this.productService = new ProductService();
    },
    mounted() {
        this.productService.getProductsSmall().then(data => this.products = data);
    },
    methods: {
        exportCSV() {
            this.$refs.dt.exportCSV();
        }
    }
}
</script>