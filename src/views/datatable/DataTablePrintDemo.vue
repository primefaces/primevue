<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>Print</span></h1>
				<p>DataTable can be printed.</p>
			</div>
            <AppDemoActions />
		</div>

		<div class="content-section implementation">
            <div class="card">
                <h5>Default parameters</h5>
                <DataTable :value="products" ref="dt" responsiveLayout="scroll">
                    <template #header>
                        <div style="text-align: left">
                            <Button icon="pi pi-print" label="Print" @click="printTable()" />
                        </div>
                    </template>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>

            <div class="card">
                <h5>Custom parameters</h5>
                <p>Using <b>pageTitle</b> and <i>Bootstrap</i> as CSS library.</p>
                <DataTable :value="products" ref="dt" responsiveLayout="scroll">
                    <template #header>
                        <div style="text-align: left">
                            <Button icon="pi pi-print" label="Print" @click="printTable2()" />
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
        <div class="card">
            <h5>Default parameters</h5>
            <DataTable :value="products" ref="dt" responsiveLayout="scroll">
                <template #header>
                    <div style="text-align: left">
                        <Button icon="pi pi-print" label="Print" @click="printTable()" />
                    </div>
                </template>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>

        <div class="card">
            <h5>Custom parameters</h5>
            <p>Using <b>pageTitle</b> and <i>Bootstrap</i> as CSS library.</p>
            <DataTable :value="products" ref="dt" responsiveLayout="scroll">
                <template #header>
                    <div style="text-align: left">
                        <Button icon="pi pi-print" label="Print" @click="printTable2()" />
                    </div>
                </template>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
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
        printTable() {
            this.$refs.dt.printTable();
        },
        printTable2() {
            this.$refs.dt.printTable({
                pageTitle: 'Primevue - Printing Page',
                tableClass: 'table table-striped text-center mt-4',
                pageTitleClass: 'h2 text-center',
                linkCSSLib: 'https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css'
            });
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
        <div class="card">
            <h5>Default parameters</h5>
            <DataTable :value="products" ref="dt" responsiveLayout="scroll">
                <template #header>
                    <div style="text-align: left">
                        <Button icon="pi pi-print" label="Print" @click="printTable()" />
                    </div>
                </template>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>

        <div class="card">
            <h5>Custom parameters</h5>
            <p>Using <b>pageTitle</b> and <i>Bootstrap</i> as CSS library.</p>
            <DataTable :value="products" ref="dt" responsiveLayout="scroll">
                <template #header>
                    <div style="text-align: left">
                        <Button icon="pi pi-print" label="Print" @click="printTable2()" />
                    </div>
                </template>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
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
        const printTable = () => {
            dt.value.printTable();
        };

        const printTable2 = () => {
            dt.value.printTable({
                pageTitle: 'Primevue - Printing Page',
                tableClass: 'table table-striped text-center mt-4',
                pageTitleClass: 'h2 text-center',
                linkCSSLib: 'https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css'
            });
        };

        return { dt, products, printTable, printTable2 }
    }
}
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
        printTable() {
            this.$refs.dt.printTable();
        },
        printTable2() {
            this.$refs.dt.printTable({
                pageTitle: 'Primevue - Printing Page',
                tableClass: 'table table-striped text-center mt-4',
                pageTitleClass: 'h2 text-center',
                linkCSSLib: 'https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css'
            });
        }
    }
}
</script>
