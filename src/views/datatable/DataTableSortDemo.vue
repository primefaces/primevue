<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>Sort</span></h1>
				<p>Enabling sortable property on a column is enough to make a column sortable. Multiple column sorting is enabled using sortMode property and used with metaKey.</p>
			</div>
		</div>

		<div class="content-section implementation">
            <div class="card">
                <h5>Single Column</h5>
                <DataTable :value="products" responsiveLayout="scroll">
                    <Column field="code" header="Code" :sortable="true"></Column>
                    <Column field="name" header="Name" :sortable="true"></Column>
                    <Column field="category" header="Category" :sortable="true"></Column>
                    <Column field="quantity" header="Quantity" :sortable="true"></Column>
                    <Column field="price" header="Price" :sortable="true">
                        <template #body="slotProps">
                            {{formatCurrency(slotProps.data.price)}}
                        </template>
                    </Column>
                </DataTable>
            </div>

            <div class="card">
                <h5>Multiple Columns</h5>
                <p>Use metakey to add a column to the sort selection.</p>
                <DataTable :value="products" sortMode="multiple" responsiveLayout="scroll">
                    <Column field="code" header="Code" :sortable="true"></Column>
                    <Column field="name" header="Name" :sortable="true"></Column>
                    <Column field="category" header="Category" :sortable="true"></Column>
                    <Column field="quantity" header="Quantity" :sortable="true"></Column>
                    <Column field="price" header="Price" :sortable="true">
                        <template #body="slotProps">
                            {{formatCurrency(slotProps.data.price)}}
                        </template>
                    </Column>
                </DataTable>
            </div>

            <div class="card">
                <h5>Presort</h5>
                <DataTable :value="products" sortField="category" :sortOrder="-1" responsiveLayout="scroll">
                    <Column field="code" header="Code" :sortable="true"></Column>
                    <Column field="name" header="Name" :sortable="true"></Column>
                    <Column field="category" header="Category" :sortable="true"></Column>
                    <Column field="quantity" header="Quantity" :sortable="true"></Column>
                    <Column field="price" header="Price" :sortable="true">
                        <template #body="slotProps">
                            {{formatCurrency(slotProps.data.price)}}
                        </template>
                    </Column>
                </DataTable>
            </div>

            <div class="card">
                <h5>Removable Sort</h5>
                <DataTable :value="products" removableSort responsiveLayout="scroll">
                    <Column field="code" header="Code" :sortable="true"></Column>
                    <Column field="name" header="Name" :sortable="true"></Column>
                    <Column field="category" header="Category" :sortable="true"></Column>
                    <Column field="quantity" header="Quantity" :sortable="true"></Column>
                    <Column field="price" header="Price" :sortable="true">
                        <template #body="slotProps">
                            {{formatCurrency(slotProps.data.price)}}
                        </template>
                    </Column>
                </DataTable>
            </div>
		</div>

        <AppDoc name="DataTableSortDemo" :sources="sources" :service="['ProductService']" :data="['products-small']" />

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
            <h5>Single Column</h5>
            <DataTable :value="products" responsiveLayout="scroll">
                <Column field="code" header="Code" :sortable="true"></Column>
                <Column field="name" header="Name" :sortable="true"></Column>
                <Column field="category" header="Category" :sortable="true"></Column>
                <Column field="quantity" header="Quantity" :sortable="true"></Column>
                <Column field="price" header="Price" :sortable="true">
                    <template #body="slotProps">
                        {{formatCurrency(slotProps.data.price)}}
                    </template>
                </Column>
            </DataTable>
        </div>

        <div class="card">
            <h5>Multiple Columns</h5>
            <DataTable :value="products" sortMode="multiple" responsiveLayout="scroll">
                <Column field="code" header="Code" :sortable="true"></Column>
                <Column field="name" header="Name" :sortable="true"></Column>
                <Column field="category" header="Category" :sortable="true"></Column>
                <Column field="quantity" header="Quantity" :sortable="true"></Column>
                <Column field="price" header="Price" :sortable="true">
                    <template #body="slotProps">
                        {{formatCurrency(slotProps.data.price)}}
                    </template>
                </Column>
            </DataTable>
        </div>

        <div class="card">
            <h5>Presort</h5>
            <DataTable :value="products" sortField="category" :sortOrder="-1" responsiveLayout="scroll">
                <Column field="code" header="Code" :sortable="true"></Column>
                <Column field="name" header="Name" :sortable="true"></Column>
                <Column field="category" header="Category" :sortable="true"></Column>
                <Column field="quantity" header="Quantity" :sortable="true"></Column>
                <Column field="price" header="Price" :sortable="true">
                    <template #body="slotProps">
                        {{formatCurrency(slotProps.data.price)}}
                    </template>
                </Column>
            </DataTable>
        </div>

        <div class="card">
            <h5>Removable Sort</h5>
            <DataTable :value="products" removableSort responsiveLayout="scroll">
                <Column field="code" header="Code" :sortable="true"></Column>
                <Column field="name" header="Name" :sortable="true"></Column>
                <Column field="category" header="Category" :sortable="true"></Column>
                <Column field="quantity" header="Quantity" :sortable="true"></Column>
                <Column field="price" header="Price" :sortable="true">
                    <template #body="slotProps">
                        {{formatCurrency(slotProps.data.price)}}
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
    },
    methods: {
        formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
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
            <h5>Single Column</h5>
            <DataTable :value="products" responsiveLayout="scroll">
                <Column field="code" header="Code" :sortable="true"></Column>
                <Column field="name" header="Name" :sortable="true"></Column>
                <Column field="category" header="Category" :sortable="true"></Column>
                <Column field="quantity" header="Quantity" :sortable="true"></Column>
                <Column field="price" header="Price" :sortable="true">
                    <template #body="slotProps">
                        {{formatCurrency(slotProps.data.price)}}
                    </template>
                </Column>
            </DataTable>
        </div>

        <div class="card">
            <h5>Multiple Columns</h5>
            <DataTable :value="products" sortMode="multiple" responsiveLayout="scroll">
                <Column field="code" header="Code" :sortable="true"></Column>
                <Column field="name" header="Name" :sortable="true"></Column>
                <Column field="category" header="Category" :sortable="true"></Column>
                <Column field="quantity" header="Quantity" :sortable="true"></Column>
                <Column field="price" header="Price" :sortable="true">
                    <template #body="slotProps">
                        {{formatCurrency(slotProps.data.price)}}
                    </template>
                </Column>
            </DataTable>
        </div>

        <div class="card">
            <h5>Presort</h5>
            <DataTable :value="products" sortField="category" :sortOrder="-1" responsiveLayout="scroll">
                <Column field="code" header="Code" :sortable="true"></Column>
                <Column field="name" header="Name" :sortable="true"></Column>
                <Column field="category" header="Category" :sortable="true"></Column>
                <Column field="quantity" header="Quantity" :sortable="true"></Column>
                <Column field="price" header="Price" :sortable="true">
                    <template #body="slotProps">
                        {{formatCurrency(slotProps.data.price)}}
                    </template>
                </Column>
            </DataTable>
        </div>

        <div class="card">
            <h5>Removable Sort</h5>
            <DataTable :value="products" removableSort responsiveLayout="scroll">
                <Column field="code" header="Code" :sortable="true"></Column>
                <Column field="name" header="Name" :sortable="true"></Column>
                <Column field="category" header="Category" :sortable="true"></Column>
                <Column field="quantity" header="Quantity" :sortable="true"></Column>
                <Column field="price" header="Price" :sortable="true">
                    <template #body="slotProps">
                        {{formatCurrency(slotProps.data.price)}}
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
        
        const formatCurrency = (value) => {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        };

        return { products, formatCurrency }
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
        formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        }
    }
}
</script>