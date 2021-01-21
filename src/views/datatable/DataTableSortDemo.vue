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
                <DataTable :value="products">
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
                <DataTable :value="products" sortMode="multiple">
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
                <DataTable :value="products" sortField="category" :sortOrder="-1">
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
                <DataTable :value="products" removableSort>
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

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
                    <div class="p-d-flex p-jc-end">
                        <LiveEditor name="DataTableDemo" :sources="sources" service="ProductService" data="products-small" :components="['Column']" />
                    </div>
<pre v-code>
<code><template v-pre>
&lt;div class="card"&gt;
    &lt;h5&gt;Single Column&lt;/h5&gt;
    &lt;DataTable :value="products"&gt;
        &lt;Column field="code" header="Code" sortable="true"&gt;&lt;/Column&gt;
        &lt;Column field="name" header="Name" sortable="true"&gt;&lt;/Column&gt;
        &lt;Column field="category" header="Category" sortable="true"&gt;&lt;/Column&gt;
        &lt;Column field="quantity" header="Quantity" sortable="true"&gt;&lt;/Column&gt;
        &lt;Column field="price" header="Price" sortable="true"&gt;
            &lt;template #body="slotProps"&gt;
                {{formatCurrency(slotProps.data.price)}}
            &lt;/template&gt;
        &lt;/Column&gt;
    &lt;/DataTable&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
    &lt;h5&gt;Multiple Columns&lt;/h5&gt;
    &lt;p&gt;Use metakey to add a column to the sort selection.&lt;/p&gt;
    &lt;DataTable :value="products" sortMode="multiple"&gt;
        &lt;Column field="code" header="Code" sortable="true"&gt;&lt;/Column&gt;
        &lt;Column field="name" header="Name" sortable="true"&gt;&lt;/Column&gt;
        &lt;Column field="category" header="Category" sortable="true"&gt;&lt;/Column&gt;
        &lt;Column field="quantity" header="Quantity" sortable="true"&gt;&lt;/Column&gt;
        &lt;Column field="price" header="Price" sortable="true"&gt;
            &lt;template #body="slotProps"&gt;
                {{formatCurrency(slotProps.data.price)}}
            &lt;/template&gt;
        &lt;/Column&gt;
    &lt;/DataTable&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
    &lt;h5&gt;Presort&lt;/h5&gt;
    &lt;DataTable :value="products" sortField="category" :sortOrder="-1"&gt;
        &lt;Column field="code" header="Code" sortable="true"&gt;&lt;/Column&gt;
        &lt;Column field="name" header="Name" sortable="true"&gt;&lt;/Column&gt;
        &lt;Column field="category" header="Category" sortable="true"&gt;&lt;/Column&gt;
        &lt;Column field="quantity" header="Quantity" sortable="true"&gt;&lt;/Column&gt;
        &lt;Column field="price" header="Price" sortable="true"&gt;
            &lt;template #body="slotProps"&gt;
                {{formatCurrency(slotProps.data.price)}}
            &lt;/template&gt;
        &lt;/Column&gt;
    &lt;/DataTable&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
    &lt;h5&gt;Removable Sort&lt;/h5&gt;
    &lt;DataTable :value="products" removableSort&gt;
        &lt;Column field="code" header="Code" sortable="true"&gt;&lt;/Column&gt;
        &lt;Column field="name" header="Name" sortable="true"&gt;&lt;/Column&gt;
        &lt;Column field="category" header="Category" sortable="true"&gt;&lt;/Column&gt;
        &lt;Column field="quantity" header="Quantity" sortable="true"&gt;&lt;/Column&gt;
        &lt;Column field="price" header="Price" sortable="true"&gt;
            &lt;template #body="slotProps"&gt;
                {{formatCurrency(slotProps.data.price)}}
            &lt;/template&gt;
        &lt;/Column&gt;
    &lt;/DataTable&gt;
&lt;/div&gt;
</template>
</code></pre>

<pre v-code.script>
<code>
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

</code></pre>
                </TabPanel>
            </TabView>
        </div>
	</div>
</template>

<script>
import ProductService from '../../service/ProductService';
import LiveEditor from '../liveeditor/LiveEditor';

export default {
    data() {
        return {
            products: null,
            sources: {
                'template': {
                    content: `<template>
    <div class="layout-content">
        <div class="content-section implementation">
            <div class="card">
                <h5>Single Column</h5>
                <DataTable :value="products">
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
                <DataTable :value="products" sortMode="multiple">
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
                <DataTable :value="products" sortField="category" :sortOrder="-1">
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
                <DataTable :value="products" removableSort>
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
    </div>                    
</template>

<script>
import ProductService from '../service/ProductService';

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
}`
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
    },
    components: {
        LiveEditor
    }
}
</script>