<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>Size</span></h1>
				<p>In addition to a regular table, alternatives with alternative sizes are available.</p>
			</div>
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

        <AppDoc name="DataTableSizeDemo" :sources="sources" :service="['ProductService']" :data="['products-small']" />
    
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
                    tabName: 'Source',
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
                    tabName: 'Composition API',
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