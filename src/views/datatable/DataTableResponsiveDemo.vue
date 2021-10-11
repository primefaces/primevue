<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>Responsive</span></h1>
				<p>DataTable responsive layout can be achieved in two ways; first approach is displaying a horizontal scrollbar for smaller screens 
                    and second one is defining a breakpoint to display the cells of a row as stacked.</p>
			</div>
            <AppDemoActions />
		</div>

		<div class="content-section implementation">
            <div class="card">
                <DataTable :value="products" responsiveLayout="scroll">
                    <template #header>
                        Scroll
                    </template>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                    <Column field="inventoryStatus" header="Status">
                        <template #body="slotProps">
                            <span :class="'product-badge status-' + (slotProps.data.inventoryStatus ? slotProps.data.inventoryStatus.toLowerCase() : '')">{{slotProps.data.inventoryStatus}}</span>
                        </template>
                    </Column>
                    <Column field="rating" header="Rating">
                        <template #body="slotProps">
                           <Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false" />
                        </template>
                    </Column>
                </DataTable>
            </div>

            <div class="card">
                <DataTable :value="products" responsiveLayout="stack" breakpoint="960px">
                    <template #header>
                        Stack
                    </template>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                    <Column field="inventoryStatus" header="Status">
                        <template #body="slotProps">
                            <span :class="'product-badge status-' + (slotProps.data.inventoryStatus ? slotProps.data.inventoryStatus.toLowerCase() : '')">{{slotProps.data.inventoryStatus}}</span>
                        </template>
                    </Column>
                    <Column field="rating" header="Rating">
                        <template #body="slotProps">
                           <Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false" />
                        </template>
                    </Column>
                </DataTable>
            </div>
		</div>

        <AppDoc name="DataTableResponsiveDemo" :sources="sources" :service="['ProductService']" :data="['products-small']" github="datatable/DataTableResponsiveDemo.vue" />

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
            <DataTable :value="products" responsiveLayout="scroll">
                <template #header>
                    Scroll
                </template>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
                <Column field="inventoryStatus" header="Status">
                    <template #body="slotProps">
                        <span :class="'product-badge status-' + (slotProps.data.inventoryStatus ? slotProps.data.inventoryStatus.toLowerCase() : '')">{{slotProps.data.inventoryStatus}}</span>
                    </template>
                </Column>
                <Column field="rating" header="Rating">
                    <template #body="slotProps">
                       <Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false" />
                    </template>
                </Column>
            </DataTable>
        </div>

        <div class="card">
            <DataTable :value="products" responsiveLayout="stack" breakpoint="960px">
                <template #header>
                    Stack
                </template>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
                <Column field="inventoryStatus" header="Status">
                    <template #body="slotProps">
                        <span :class="'product-badge status-' + (slotProps.data.inventoryStatus ? slotProps.data.inventoryStatus.toLowerCase() : '')">{{slotProps.data.inventoryStatus}}</span>
                    </template>
                </Column>
                <Column field="rating" header="Rating">
                    <template #body="slotProps">
                       <Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false" />
                    </template>
                </Column>
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
            <DataTable :value="products" responsiveLayout="scroll">
                <template #header>
                    Scroll
                </template>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
                <Column field="inventoryStatus" header="Status">
                    <template #body="slotProps">
                        <span :class="'product-badge status-' + (slotProps.data.inventoryStatus ? slotProps.data.inventoryStatus.toLowerCase() : '')">{{slotProps.data.inventoryStatus}}</span>
                    </template>
                </Column>
                <Column field="rating" header="Rating">
                    <template #body="slotProps">
                       <Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false" />
                    </template>
                </Column>
            </DataTable>
        </div>

        <div class="card">
            <DataTable :value="products" responsiveLayout="stack" breakpoint="960px">
                <template #header>
                    Stack
                </template>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
                <Column field="inventoryStatus" header="Status">
                    <template #body="slotProps">
                        <span :class="'product-badge status-' + (slotProps.data.inventoryStatus ? slotProps.data.inventoryStatus.toLowerCase() : '')">{{slotProps.data.inventoryStatus}}</span>
                    </template>
                </Column>
                <Column field="rating" header="Rating">
                    <template #body="slotProps">
                       <Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false" />
                    </template>
                </Column>
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
        <script src="https://unpkg.com/primevue@^3/rating/rating.min.js"><\\/script>
        <script src="./ProductService.js"><\\/script>`,
                    content: `<div id="app">
            <div class="card">
                <p-datatable :value="products" responsive-layout="scroll">
                    <template #header>
                        Scroll
                    </template>
                    <p-column field="code" header="Code"></p-column>
                    <p-column field="name" header="Name"></p-column>
                    <p-column field="category" header="Category"></p-column>
                    <p-column field="quantity" header="Quantity"></p-column>
                    <p-column field="inventoryStatus" header="Status">
                        <template #body="slotProps">
                            <span :class="'product-badge status-' + (slotProps.data.inventoryStatus ? slotProps.data.inventoryStatus.toLowerCase() : '')">{{slotProps.data.inventoryStatus}}</span>
                        </template>
                    </p-column>
                    <p-column field="rating" header="Rating">
                        <template #body="slotProps">
                        <p-rating :model-value="slotProps.data.rating" :readonly="true" :cancel="false"></p-rating>
                        </template>
                    </p-column>
                </p-datatable>
            </div>

            <div class="card">
                <p-datatable :value="products" responsive-layout="stack" breakpoint="960px">
                    <template #header>
                        Stack
                    </template>
                    <p-column field="code" header="Code"></p-column>
                    <p-column field="name" header="Name"></p-column>
                    <p-column field="category" header="Category"></p-column>
                    <p-column field="quantity" header="Quantity"></p-column>
                    <p-column field="inventoryStatus" header="Status">
                        <template #body="slotProps">
                            <span :class="'product-badge status-' + (slotProps.data.inventoryStatus ? slotProps.data.inventoryStatus.toLowerCase() : '')">{{slotProps.data.inventoryStatus}}</span>
                        </template>
                    </p-column>
                    <p-column field="rating" header="Rating">
                        <template #body="slotProps">
                        <p-rating :model-value="slotProps.data.rating" :readonly="true" :cancel="false"></p-rating>
                        </template>
                    </p-column>
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
                "p-column": primevue.column,
                "p-rating": primevue.rating
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