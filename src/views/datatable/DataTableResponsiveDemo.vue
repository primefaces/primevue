<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>Responsive</span></h1>
				<p>DataTable responsive layout can be achieved in two ways; first approach is displaying a horizontal scrollbar for smaller screens
                    and second one is defining a breakpoint to display the cells of a row as stacked.</p>
			</div>
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
                            <Rating :value="slotProps.data.rating" :readonly="true" :cancel="false" />
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
                            <Rating :value="slotProps.data.rating" :readonly="true" :cancel="false" />
                        </template>
                    </Column>
                </DataTable>
            </div>
		</div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;div class="card"&gt;
    &lt;DataTable :value="products" responsiveLayout="scroll"&gt;
        &lt;template #header&gt;
            Scroll
        &lt;/template&gt;
        &lt;Column field="code" header="Code"&gt;&lt;/Column&gt;
        &lt;Column field="name" header="Name"&gt;&lt;/Column&gt;
        &lt;Column field="category" header="Category"&gt;&lt;/Column&gt;
        &lt;Column field="quantity" header="Quantity"&gt;&lt;/Column&gt;
        &lt;Column field="inventoryStatus" header="Status"&gt;
            &lt;template #body="slotProps"&gt;
                &lt;span :class="'product-badge status-' + (slotProps.data.inventoryStatus ? slotProps.data.inventoryStatus.toLowerCase() : '')"&gt;{{slotProps.data.inventoryStatus}}&lt;/span&gt;
            &lt;/template&gt;
        &lt;/Column&gt;
        &lt;Column field="rating" header="Rating"&gt;
            &lt;template #body="slotProps"&gt;
                &lt;Rating :value="slotProps.data.rating" :readonly="true" :cancel="false" /&gt;
            &lt;/template&gt;
        &lt;/Column&gt;
    &lt;/DataTable&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
    &lt;DataTable :value="products" responsiveLayout="stack" breakpoint="960px"&gt;
        &lt;template #header&gt;
            Stack
        &lt;/template&gt;
        &lt;Column field="code" header="Code"&gt;&lt;/Column&gt;
        &lt;Column field="name" header="Name"&gt;&lt;/Column&gt;
        &lt;Column field="category" header="Category"&gt;&lt;/Column&gt;
        &lt;Column field="quantity" header="Quantity"&gt;&lt;/Column&gt;
        &lt;Column field="inventoryStatus" header="Status"&gt;
            &lt;template #body="slotProps"&gt;
                &lt;span :class="'product-badge status-' + (slotProps.data.inventoryStatus ? slotProps.data.inventoryStatus.toLowerCase() : '')"&gt;{{slotProps.data.inventoryStatus}}&lt;/span&gt;
            &lt;/template&gt;
        &lt;/Column&gt;
        &lt;Column field="rating" header="Rating"&gt;
            &lt;template #body="slotProps"&gt;
                &lt;Rating :value="slotProps.data.rating" :readonly="true" :cancel="false" /&gt;
            &lt;/template&gt;
        &lt;/Column&gt;
    &lt;/DataTable&gt;
&lt;/div&gt;
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