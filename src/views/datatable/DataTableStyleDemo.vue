<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>Style</span></h1>
				<p>Certain rows or cells can easily be styled based on conditions.</p>
			</div>
		</div>

		<div class="content-section implementation">
            <div class="card">
                <DataTable :value="products" :rowClass="rowClass" responsiveLayout="scroll">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity">
                        <template #body="slotProps">
                            <div :class="stockClass(slotProps.data)">
                                {{slotProps.data.quantity}}
                            </div>
                        </template>
                    </Column>
                </DataTable>
            </div>
		</div>

        <AppDoc name="DataTableStyleDemo" :sources="sources" :service="['ProductService']" :data="['products-small']" />
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
        <DataTable :value="products" :rowClass="rowClass" responsiveLayout="scroll">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity">
                <template #body="slotProps">
                    <div :class="stockClass(slotProps.data)">
                        {{slotProps.data.quantity}}
                    </div>
                </template>
            </Column>
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
        rowClass(data) {
            return data.category === 'Accessories' ? 'row-accessories': null;
        },
        stockClass(data) {
            return [
                {
                    'outofstock': data.quantity === 0,
                    'lowstock': data.quantity > 0 && data.quantity<10,
                    'instock': data.quantity > 10
                 }
            ];
        }
    }
}
<\\/script>

<style scoped lang="scss">
.outofstock {
    font-weight: 700;
    color: #FF5252;
    text-decoration: line-through;
}

.lowstock {
    font-weight: 700;
    color: #FFA726;
}

.instock {
    font-weight: 700;
    color: #66BB6A;
}

::v-deep(.row-accessories) {
    background-color: rgba(0,0,0,.15) !important;
}
</style>                    
`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
	<div>
        <DataTable :value="products" :rowClass="rowClass" responsiveLayout="scroll">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity">
                <template #body="slotProps">
                    <div :class="stockClass(slotProps.data)">
                        {{slotProps.data.quantity}}
                    </div>
                </template>
            </Column>
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

        const rowClass = (data) => {
            return data.category === 'Accessories' ? 'row-accessories': null;
        };
        const stockClass = (data) => {
            return [
                {
                    'outofstock': data.quantity === 0,
                    'lowstock': data.quantity > 0 && data.quantity<10,
                    'instock': data.quantity > 10
                 }
            ];
        };

        return { products, rowClass, stockClass }
    }
}
<\\/script>

<style scoped lang="scss">
.outofstock {
    font-weight: 700;
    color: #FF5252;
    text-decoration: line-through;
}

.lowstock {
    font-weight: 700;
    color: #FFA726;
}

.instock {
    font-weight: 700;
    color: #66BB6A;
}

::v-deep(.row-accessories) {
    background-color: rgba(0,0,0,.15) !important;
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
        rowClass(data) {
            return data.category === 'Accessories' ? 'row-accessories': null;
        },
        stockClass(data) {
            return [
                {
                    'outofstock': data.quantity === 0,
                    'lowstock': data.quantity > 0 && data.quantity<10,
                    'instock': data.quantity > 10
                 }
            ];
        }
    }
}
</script>

<style scoped lang="scss">
.outofstock {
    font-weight: 700;
    color: #FF5252;
    text-decoration: line-through;
}

.lowstock {
    font-weight: 700;
    color: #FFA726;
}

.instock {
    font-weight: 700;
    color: #66BB6A;
}

::v-deep(.row-accessories) {
    background-color: rgba(0,0,0,.15) !important;
}
</style>