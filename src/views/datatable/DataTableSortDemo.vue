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
                    <Column field="code" header="Code" sortable></Column>
                    <Column field="name" header="Name" sortable></Column>
                    <Column field="category" header="Category" sortable></Column>
                    <Column field="quantity" header="Quantity" sortable></Column>
                    <Column field="price" header="Price" sortable>
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
                    <Column field="code" header="Code" sortable></Column>
                    <Column field="name" header="Name" sortable></Column>
                    <Column field="category" header="Category" sortable></Column>
                    <Column field="quantity" header="Quantity" sortable></Column>
                    <Column field="price" header="Price" sortable>
                        <template #body="slotProps">
                            {{formatCurrency(slotProps.data.price)}}
                        </template>
                    </Column>
                </DataTable>
            </div>

            <div class="card">
                <h5>Presort</h5>
                <DataTable :value="products" sortField="category" :sortOrder="-1" responsiveLayout="scroll">
                    <Column field="code" header="Code" sortable></Column>
                    <Column field="name" header="Name" sortable></Column>
                    <Column field="category" header="Category" sortable></Column>
                    <Column field="quantity" header="Quantity" sortable></Column>
                    <Column field="price" header="Price" sortable>
                        <template #body="slotProps">
                            {{formatCurrency(slotProps.data.price)}}
                        </template>
                    </Column>
                </DataTable>
            </div>

            <div class="card">
                <h5>Removable Sort</h5>
                <DataTable :value="products" removableSort responsiveLayout="scroll">
                    <Column field="code" header="Code" sortable></Column>
                    <Column field="name" header="Name" sortable></Column>
                    <Column field="category" header="Category" sortable></Column>
                    <Column field="quantity" header="Quantity" sortable></Column>
                    <Column field="price" header="Price" sortable>
                        <template #body="slotProps">
                            {{formatCurrency(slotProps.data.price)}}
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
    &lt;h5&gt;Single Column&lt;/h5&gt;
    &lt;DataTable :value="products responsiveLayout="scroll""&gt;
        &lt;Column field="code" header="Code" sortable&gt;&lt;/Column&gt;
        &lt;Column field="name" header="Name" sortable&gt;&lt;/Column&gt;
        &lt;Column field="category" header="Category" sortable&gt;&lt;/Column&gt;
        &lt;Column field="quantity" header="Quantity" sortable&gt;&lt;/Column&gt;
        &lt;Column field="price" header="Price" sortable&gt;
            &lt;template #body="slotProps"&gt;
                {{formatCurrency(slotProps.data.price)}}
            &lt;/template&gt;
        &lt;/Column&gt;
    &lt;/DataTable&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
    &lt;h5&gt;Multiple Columns&lt;/h5&gt;
    &lt;p&gt;Use metakey to add a column to the sort selection.&lt;/p&gt;
    &lt;DataTable :value="products" sortMode="multiple responsiveLayout="scroll""&gt;
        &lt;Column field="code" header="Code" sortable&gt;&lt;/Column&gt;
        &lt;Column field="name" header="Name" sortable&gt;&lt;/Column&gt;
        &lt;Column field="category" header="Category" sortable&gt;&lt;/Column&gt;
        &lt;Column field="quantity" header="Quantity" sortable&gt;&lt;/Column&gt;
        &lt;Column field="price" header="Price" sortable&gt;
            &lt;template #body="slotProps"&gt;
                {{formatCurrency(slotProps.data.price)}}
            &lt;/template&gt;
        &lt;/Column&gt;
    &lt;/DataTable&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
    &lt;h5&gt;Presort&lt;/h5&gt;
    &lt;DataTable :value="products" sortField="category" :sortOrder="-1" responsiveLayout="scroll"&gt;
        &lt;Column field="code" header="Code" sortable&gt;&lt;/Column&gt;
        &lt;Column field="name" header="Name" sortable&gt;&lt;/Column&gt;
        &lt;Column field="category" header="Category" sortable&gt;&lt;/Column&gt;
        &lt;Column field="quantity" header="Quantity" sortable&gt;&lt;/Column&gt;
        &lt;Column field="price" header="Price" sortable&gt;
            &lt;template #body="slotProps"&gt;
                {{formatCurrency(slotProps.data.price)}}
            &lt;/template&gt;
        &lt;/Column&gt;
    &lt;/DataTable&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
    &lt;h5&gt;Removable Sort&lt;/h5&gt;
    &lt;DataTable :value="products" removableSort responsiveLayout="scroll"&gt;
        &lt;Column field="code" header="Code" sortable&gt;&lt;/Column&gt;
        &lt;Column field="name" header="Name" sortable&gt;&lt;/Column&gt;
        &lt;Column field="category" header="Category" sortable&gt;&lt;/Column&gt;
        &lt;Column field="quantity" header="Quantity" sortable&gt;&lt;/Column&gt;
        &lt;Column field="price" header="Price" sortable&gt;
            &lt;template #body="slotProps"&gt;
                {{formatCurrency(slotProps.data.price)}}
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
    },
    methods: {
        formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        }
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
    },
    methods: {
        formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        }
    }
}
</script>