<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>Templating</span></h1>
				<p>Custom content at header, body and footer sections are supported via templating.</p>
			</div>
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
                    <Column field="category" header="Category"></Column>
                    <Column field="rating" header="Reviews">
                        <template #body="slotProps">
                            <Rating :value="slotProps.data.rating" :readonly="true" :cancel="false" />
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

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;DataTable :value="products responsiveLayout="scroll""&gt;
    &lt;template #header&gt;
        &lt;div class="table-header"&gt;
            Products
            &lt;Button icon="pi pi-refresh" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
    &lt;Column field="name" header="Name"&gt;&lt;/Column&gt;
    &lt;Column header="Image"&gt;
            &lt;template #body="slotProps"&gt;
            &lt;img :src="'demo/images/product/' + slotProps.data.image" :alt="slotProps.data.image" class="product-image" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="price" header="Price"&gt;
        &lt;template #body="slotProps"&gt;
            {{formatCurrency(slotProps.data.price)}}
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="category" header="Category"&gt;&lt;/Column&gt;
    &lt;Column field="rating" header="Reviews"&gt;
        &lt;template #body="slotProps"&gt;
            &lt;Rating :value="slotProps.data.rating" :readonly="true" :cancel="false" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column header="Status"&gt;
        &lt;template #body="slotProps"&gt;
            &lt;span :class="'product-badge status-' + slotProps.data.inventoryStatus.toLowerCase()"&gt;{{slotProps.data.inventoryStatus}}&lt;/span&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;template #footer&gt;
        In total there are &#123;&#123;products ? products.length : 0 &#125;&#125; products.
    &lt;/template&gt;
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
    },
    methods: {
        formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        }
    }
}
</CodeHighlight>

<CodeHighlight lang="css">
.table-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.product-image {
    width: 100px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
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