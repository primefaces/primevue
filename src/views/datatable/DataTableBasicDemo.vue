<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>Basic</span></h1>
				<p>DataTable requires a collection to display along with column components for the representation of the data.</p>
			</div>
		</div>

		<div class="content-section implementation">
            <div class="card">
                <DataTable :value="products">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>
		</div>

        <DataTableBasicDoc />
	</div>
</template>

<script>
import ProductService from '../../service/ProductService';
import DataTableBasicDoc from './DataTableBasicDoc';

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
    components: {
        DataTableBasicDoc
    }
}
</script>
