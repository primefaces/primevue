<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>Dynamic Columns</span></h1>
				<p>Columns can be defined dynamically using the v-for directive.</p>
			</div>
		</div>

		<div class="content-section implementation">
            <div class="card">
                <DataTable :value="products" responsiveLayout="scroll">
                    <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"></Column>
                </DataTable>
            </div>
		</div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;DataTable :value="products" responsiveLayout="scroll"&gt;
    &lt;Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import ProductService from '../../service/ProductService';

export default {
    data() {
        return {
            columns: null,
            products: null
        }
    },
    productService: null,
    created() {
        this.productService = new ProductService();

        this.columns = [
            {field: 'code', header: 'Code'},
            {field: 'name', header: 'Name'},
            {field: 'category', header: 'Category'},
            {field: 'quantity', header: 'Quantity'}
        ];
    },
    mounted() {
        this.productService.getProductsSmall().then(data => this.products = data);
    }
}
</CodeHighlight>
                </TabPanel>
            </TabView>
        </div>
	</div>
</template>

<script>
import ProductService from '../../service/ProductService';

export default {
    data() {
        return {
            columns: null,
            products: null
        }
    },
    productService: null,
    created() {
        this.productService = new ProductService();

        this.columns = [
            {field: 'code', header: 'Code'},
            {field: 'name', header: 'Name'},
            {field: 'category', header: 'Category'},
            {field: 'quantity', header: 'Quantity'}
        ];
    },
    mounted() {
        this.productService.getProductsSmall().then(data => this.products = data);
    }
}
</script>