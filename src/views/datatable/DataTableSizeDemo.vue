<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>Size</span></h1>
				<p>In addition to a regular table, alternatives with alternative sizes are available.</p>
			</div>
            <AppDemoActions />
		</div>

		<div class="content-section implementation">
            <div class="card">
                <DataTable :value="products" class="p-datatable-sm" responsiveLayout="scroll">
                    <template #header>
                        Small Table
                    </template>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>

            <div class="card">
                <DataTable :value="products" responsiveLayout="scroll">
                    <template #header>
                        Normal Table
                    </template>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>

            <div class="card">
                <DataTable :value="products" class="p-datatable-lg" responsiveLayout="scroll">
                    <template #header>
                        Large Table
                    </template>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>
		</div>

        <AppDoc name="DataTableSizeDemo" :sources="sources" :service="['ProductService']" :data="['products-small']" github="datatable/DataTableSizeDemo.vue" />
    
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
            <DataTable :value="products" class="p-datatable-sm" responsiveLayout="scroll">
                <template #header>
                    Small Table
                </template>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>

        <div class="card">
            <DataTable :value="products" responsiveLayout="scroll">
                <template #header>
                    Normal Table
                </template>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>

        <div class="card">
            <DataTable :value="products" class="p-datatable-lg" responsiveLayout="scroll">
                <template #header>
                    Large Table
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
            <DataTable :value="products" class="p-datatable-sm" responsiveLayout="scroll">
                <template #header>
                    Small Table
                </template>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>

        <div class="card">
            <DataTable :value="products" responsiveLayout="scroll">
                <template #header>
                    Normal Table
                </template>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>

        <div class="card">
            <DataTable :value="products" class="p-datatable-lg" responsiveLayout="scroll">
                <template #header>
                    Large Table
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

        const products = ref();
        const productService = ref(new ProductService());

        return { products }
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
                <p-datatable :value="products" class="p-datatable-sm" responsive-layout="scroll">
                    <template #header>
                        Small Table
                    </template>
                    <p-column field="code" header="Code"></p-column>
                    <p-column field="name" header="Name"></p-column>
                    <p-column field="category" header="Category"></p-column>
                    <p-column field="quantity" header="Quantity"></p-column>
                </p-datatable>
            </div>

            <div class="card">
                <p-datatable :value="products" responsive-layout="scroll">
                    <template #header>
                        Normal Table
                    </template>
                    <p-column field="code" header="Code"></p-column>
                    <p-column field="name" header="Name"></p-column>
                    <p-column field="category" header="Category"></p-column>
                    <p-column field="quantity" header="Quantity"></p-column>
                </p-datatable>
            </div>

            <div class="card">
                <p-datatable :value="products" class="p-datatable-lg" responsive-layout="scroll">
                    <template #header>
                        Large Table
                    </template>
                    <p-column field="code" header="Code"></p-column>
                    <p-column field="name" header="Name"></p-column>
                    <p-column field="category" header="Category"></p-column>
                    <p-column field="quantity" header="Quantity"></Column>
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

                return { products }
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