<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>Column Resize</span></h1>
				<p>Columns can be resized using drag drop by setting the resizableColumns to true. There are two resize modes; "fit" and "expand". Fit is the default one and the overall table width does not change when a column is resized.
                    In "expand" mode, table width also changes along with the column width.</p>
			</div>
            <AppDemoActions />
		</div>

		<div class="content-section implementation">
            <div class="card">
                <h5>Fit Mode</h5>
                <DataTable :value="products" :resizableColumns="true" columnResizeMode="fit" showGridlines responsiveLayout="scroll">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>

            <div class="card">
                <h5>Expand Mode</h5>
                <DataTable :value="products" :resizableColumns="true" columnResizeMode="expand" showGridlines responsiveLayout="scroll">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>
		</div>

        <AppDoc name="DataTableColResizeDemo" :sources="sources" :service="['ProductService']" :data="['products-small']" github="datatable/DataTableColResizeDemo.vue" />
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
            <h5>Fit Mode</h5>
            <DataTable :value="products" :resizableColumns="true" columnResizeMode="fit" showGridlines responsiveLayout="scroll">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>

        <div class="card">
            <h5>Expand Mode</h5>
            <DataTable :value="products" :resizableColumns="true" columnResizeMode="expand" showGridlines responsiveLayout="scroll">
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
            products: null,
        }
    },
    productService: null,
    created() {
        this.productService = new ProductService();
    },
    mounted() {
        this.productService.getProductsSmall().then(data => this.products = data);
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
            <h5>Fit Mode</h5>
            <DataTable :value="products" :resizableColumns="true" columnResizeMode="fit" showGridlines responsiveLayout="scroll">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>

        <div class="card">
            <h5>Expand Mode</h5>
            <DataTable :value="products" :resizableColumns="true" columnResizeMode="expand" showGridlines responsiveLayout="scroll">
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

        const products = ref();
        const productService = ref(new ProductService());

        return { products, productService }
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
            <div class="card">
                <h5>Fit Mode</h5>
                <p-datatable :value="products" :resizable-columns="true" column-resize-mode="fit" show-gridlines responsive-layout="scroll">
                    <p-column field="code" header="Code"></p-column>
                    <p-column field="name" header="Name"></p-column>
                    <p-column field="category" header="Category"></p-column>
                    <p-column field="quantity" header="Quantity"></p-column>
                </p-datatable>
            </div>

            <div class="card">
                <h5>Expand Mode</h5>
                <p-datatable :value="products" :resizable-columns="true" column-resize-mode="expand" show-gridlines responsive-layout="scroll">
                    <p-column field="code" header="Code"></p-column>
                    <p-column field="name" header="Name"></p-column>
                    <p-column field="category" header="Category"></p-column>
                    <p-column field="quantity" header="Quantity"></p-column>
                </p-datatable>
            </div>
        </div>

        <script type="module">
        const { createApp, ref, onMounted } = Vue;

        const App = {
            setup() {
                onMounted(() => {
                    productService.value.getProductsSmall().then(data => products.value = data);
                })

                const products = ref();
                const productService = ref(new ProductService());

                return { products, productService }
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
    productService: null,
    created() {
        this.productService = new ProductService();
    },
    mounted() {
        this.productService.getProductsSmall().then(data => this.products = data);
    }
}
</script>