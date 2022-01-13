<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>Templating</span></h1>
				<p>Custom content at header, body and footer sections are supported via templating.</p>
			</div>
            <AppDemoActions />
		</div>

		<div class="content-section implementation">
            <div class="card">
                <DataTable :value="products" responsiveLayout="scroll">
                    <template #header>
                        <div class="table-header">
                            Products
                            <Button icon="pi pi-refresh" />
                        </div>
                    </template>
                    <Column field="name" header="Name"></Column>
                    <Column header="Image">
                        <template #body="slotProps">
                            <img :src="'demo/images/product/' + slotProps.data.image" :alt="slotProps.data.image" class="product-image" />
                        </template>
                    </Column>
                    <Column field="price" header="Price">
                        <template #body="slotProps">
                            {{formatCurrency(slotProps.data.price)}}
                        </template>
                    </Column>
                    <Column field="rating" header="Reviews">
                        <template #body="slotProps">
                            <Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false" />
                        </template>
                    </Column>
                    <Column header="Status">
                        <template #body="slotProps">
                            <span :class="'product-badge status-' + slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>
                        </template>
                    </Column>
                    <template #footer>
                        In total there are {{products ? products.length : 0 }} products.
                    </template>
                </DataTable>
            </div>
		</div>

        <AppDoc name="DataTableTemplatingDemo" :sources="sources" :service="['ProductService']" :data="['products-small']" github="datatable/DataTableTemplatingDemo.vue" />

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
        <DataTable :value="products" responsiveLayout="scroll">
            <template #header>
                <div class="table-header">
                    Products
                    <Button icon="pi pi-refresh" />
                </div>
            </template>
            <Column field="name" header="Name"></Column>
            <Column header="Image">
                <template #body="slotProps">
                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.image" class="product-image" />
                </template>
            </Column>
            <Column field="price" header="Price">
                <template #body="slotProps">
                    {{formatCurrency(slotProps.data.price)}}
                </template>
            </Column>
            <Column field="rating" header="Reviews">
                <template #body="slotProps">
                    <Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false" />
                </template>
            </Column>
            <Column header="Status">
                <template #body="slotProps">
                    <span :class="'product-badge status-' + slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>
                </template>
            </Column>
            <template #footer>
                In total there are {{products ? products.length : 0 }} products.
            </template>
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
        formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        }
    }
}
<\\/script>

<style lang="scss" scoped>
.table-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.product-image {
    width: 50px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
}
</style>                    
`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
	<div>
        <DataTable :value="products" responsiveLayout="scroll">
            <template #header>
                <div class="table-header">
                    Products
                    <Button icon="pi pi-refresh" />
                </div>
            </template>
            <Column field="name" header="Name"></Column>
            <Column header="Image">
                <template #body="slotProps">
                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.image" class="product-image" />
                </template>
            </Column>
            <Column field="price" header="Price">
                <template #body="slotProps">
                    {{formatCurrency(slotProps.data.price)}}
                </template>
            </Column>
            <Column field="rating" header="Reviews">
                <template #body="slotProps">
                    <Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false" />
                </template>
            </Column>
            <Column header="Status">
                <template #body="slotProps">
                    <span :class="'product-badge status-' + slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>
                </template>
            </Column>
            <template #footer>
                In total there are {{products ? products.length : 0 }} products.
            </template>
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

        const formatCurrency = (value) => {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        };

        return { products, formatCurrency }
    }
}
<\\/script>

<style lang="scss" scoped>
.table-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.product-image {
    width: 50px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
}
</style>                    
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/datatable/datatable.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/rating/rating.min.js"><\\/script>
        <script src="./ProductService.js"><\\/script>`,
                    content: `<div id="app">
            <p-datatable :value="products" responsive-layout="scroll">
                <template #header>
                    <div class="table-header">
                        Products
                        <p-button icon="pi pi-refresh"></p-button>
                    </div>
                </template>
                <p-column field="name" header="Name"></p-column>
                <p-column header="Image">
                    <template #body="slotProps">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.image" class="product-image" />
                    </template>
                </p-column>
                <p-column field="price" header="Price">
                    <template #body="slotProps">
                        {{formatCurrency(slotProps.data.price)}}
                    </template>
                </p-column>
                <p-column field="rating" header="Reviews">
                    <template #body="slotProps">
                    <p-rating :model-value="slotProps.data.rating" :readonly="true" :cancel="false"></p-rating>
                    </template>
                </p-column>
                <p-column header="Status">
                    <template #body="slotProps">
                        <span :class="'product-badge status-' + slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>
                    </template>
                </p-column>
                <template #footer>
                    In total there are {{products ? products.length : 0 }} products.
                </template>
            </p-datatable>
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

            const formatCurrency = (value) => {
                return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
            };

            return { products, formatCurrency }
        },
        components: {
                "p-datatable": primevue.datatable,
                "p-column": primevue.column,
                "p-button": primevue.button,
                "p-rating": primevue.rating
            }
    };

    createApp(App)
            .use(primevue.config.default)
            .mount("#app");
    <\\/script>

    <style>
    .table-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .product-image {
        width: 50px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
    }
    </style>                    
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
        formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        }
    }
}
</script>

<style lang="scss" scoped>
.table-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.product-image {
    width: 100px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
}
</style>