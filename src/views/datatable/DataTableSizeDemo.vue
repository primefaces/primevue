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
                <DataTable :value="products" class="p-datatable-sm">
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
                <DataTable :value="products">
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
                <DataTable :value="products" class="p-datatable-lg">
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

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;DataTable :value="products" class="p-datatable-sm"&gt;
    &lt;template #header&gt;
        Small Table
    &lt;/template&gt;
    &lt;Column field="code" header="Code"&gt;&lt;/Column&gt;
    &lt;Column field="name" header="Name"&gt;&lt;/Column&gt;
    &lt;Column field="category" header="Category"&gt;&lt;/Column&gt;
    &lt;Column field="quantity" header="Quantity"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;

&lt;DataTable :value="products"&gt;
    &lt;template #header&gt;
        Normal Table
    &lt;/template&gt;
    &lt;Column field="code" header="Code"&gt;&lt;/Column&gt;
    &lt;Column field="name" header="Name"&gt;&lt;/Column&gt;
    &lt;Column field="category" header="Category"&gt;&lt;/Column&gt;
    &lt;Column field="quantity" header="Quantity"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;

&lt;DataTable :value="products" class="p-datatable-lg"&gt;
    &lt;template #header&gt;
        Large Table
    &lt;/template&gt;
    &lt;Column field="code" header="Code"&gt;&lt;/Column&gt;
    &lt;Column field="name" header="Name"&gt;&lt;/Column&gt;
    &lt;Column field="category" header="Category"&gt;&lt;/Column&gt;
    &lt;Column field="quantity" header="Quantity"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import ProductService from '../../service/ProductService';

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
</script>