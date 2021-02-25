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
                    <Column field="inventoryStatus" header="Status"></Column>
                    <Column field="rating" header="Rating"></Column>
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
                    <Column field="inventoryStatus" header="Status"></Column>
                    <Column field="rating" header="Rating"></Column>
                </DataTable>
            </div>
		</div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
                    <div class="p-d-flex p-jc-end">
                        <LiveEditor name="DataTableDemo" :sources="sources" service="ProductService" data="products-small" :components="['Column']" />
                    </div>
<pre v-code><code><template v-pre>
&lt;div class="card"&gt;
    &lt;DataTable :value="products" responsiveLayout="scroll"&gt;
        &lt;template #header&gt;
            Scroll
        &lt;/template&gt;
        &lt;Column field="code" header="Code"&gt;&lt;/Column&gt;
        &lt;Column field="name" header="Name"&gt;&lt;/Column&gt;
        &lt;Column field="category" header="Category"&gt;&lt;/Column&gt;
        &lt;Column field="quantity" header="Quantity"&gt;&lt;/Column&gt;
        &lt;Column field="inventoryStatus" header="Status"&gt;&lt;/Column&gt;
        &lt;Column field="rating" header="Rating"&gt;&lt;/Column&gt;
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
        &lt;Column field="inventoryStatus" header="Status"&gt;&lt;/Column&gt;
        &lt;Column field="rating" header="Rating"&gt;&lt;/Column&gt;
    &lt;/DataTable&gt;
&lt;/div&gt;
</template>
</code></pre>

<pre v-code.script><code>
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
            <DataTable :value="products" responsiveLayout="scroll">
                <template #header>
                    Scroll
                </template>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
                <Column field="inventoryStatus" header="Status"></Column>
                <Column field="rating" header="Rating"></Column>
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
                <Column field="inventoryStatus" header="Status"></Column>
                <Column field="rating" header="Rating"></Column>
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
    components: {
        LiveEditor
    }
}
</script>