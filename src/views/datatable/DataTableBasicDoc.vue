<template>
    <AppDoc name="DataTableBasicDemo" :sources="sources" :service="['ProductService']" :data="['products-small']" github="datatable/DataTableBasicDemo.vue" />
</template>

<script>
export default {
    data() {
        return {
            sources: {
                'options-api': {
                    tabName: 'Options API Source',
                    content: `
<template>
    <div>
        <DataTable :value="products" responsiveLayout="scroll">
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
        <DataTable :value="products" responsiveLayout="scroll">
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
                <p-datatable :value="products" responsive-layout="scroll">
                    <p-column field="code" header="Code"></p-column>
                    <p-column field="name" header="Name"></p-column>
                    <p-column field="category" header="Category"></p-column>
                    <p-column field="quantity" header="Quantity"></p-column>
                </p-datatable>
            </div>
        </div>

        <script type="module">
            const { createApp, onMounted, ref } = Vue;

            const App = {
                setup() {
                    onMounted(() => {
                        productService.value.getProductsSmall().then(data => products.value = data);
                    })

                    const products = ref();
                    const productService = ref(new ProductService());

                    return { products }
                },
                components: {
                    "p-datatable": primevue.datatable,
                    "p-column": primevue.column
                }
            };

            const app = createApp(App);
            app.use(primevue.config.default);
            app.mount("#app");
        <\\/script>
        `
                }
            }
        }
    }
}
</script>
