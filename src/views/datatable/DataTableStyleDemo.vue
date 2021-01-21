<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>Style</span></h1>
				<p>Certain rows or cells can easily be styled based on conditions.</p>
			</div>
		</div>

		<div class="content-section implementation">
            <div class="card">
                <DataTable :value="products" :rowClass="rowClass">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity">
                        <template #body="slotProps">
                            <div :class="stockClass(slotProps.data)">
                                {{slotProps.data.quantity}}
                            </div>
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
&lt;DataTable :value="products" :rowClass="rowClass"&gt;
    &lt;Column field="code" header="Code"&gt;&lt;/Column&gt;
    &lt;Column field="name" header="Name"&gt;&lt;/Column&gt;
    &lt;Column field="category" header="Category"&gt;&lt;/Column&gt;
    &lt;Column field="quantity" header="Quantity"&gt;
        &lt;template #body="slotProps"&gt;
            &lt;div :class="stockClass(slotProps.data)"&gt;
                {{slotProps.data.quantity}}
            &lt;/div&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
&lt;/DataTable&gt;
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
        rowClass(data) {
            return data.category === 'Accessories' ? 'row-accessories': null;
        },
        stockClass(data) {
            return [
                {
                    'outofstock': data.quantity === 0,
                    'lowstock': data.quantity > 0 &amp;&amp; data.quantity &lt; 10,
                    'instock': data.quantity > 10
                 }
            ];
        }
    }
}

</code></pre>

<pre v-code.css>
<code>
.outofstock {
    font-weight: 700;
    color: #FF5252;
    text-decoration: line-through;
}

.lowstock {
    font-weight: 700;
    color: #FFA726;
}

.instock {
    font-weight: 700;
    color: #66BB6A;
}

::v-deep(.row-accessories) {
    background-color: rgba(0,0,0,.15) !important;
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
                <DataTable :value="products" :rowClass="rowClass">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity">
                        <template #body="slotProps">
                            <div :class="stockClass(slotProps.data)">
                                {{slotProps.data.quantity}}
                            </div>
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
        rowClass(data) {
            return data.category === 'Accessories' ? 'row-accessories': null;
        },
        stockClass(data) {
            return [
                {
                    'outofstock': data.quantity === 0,
                    'lowstock': data.quantity > 0 && data.quantity<10,
                    'instock': data.quantity > 10
                 }
            ];
        }
    }
}`,
                    style: `<style scoped lang="scss">
.outofstock {
    font-weight: 700;
    color: #FF5252;
    text-decoration: line-through;
}

.lowstock {
    font-weight: 700;
    color: #FFA726;
}

.instock {
    font-weight: 700;
    color: #66BB6A;
}

::v-deep(.row-accessories) {
    background-color: rgba(0,0,0,.15) !important;
}
</style>`
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
        rowClass(data) {
            return data.category === 'Accessories' ? 'row-accessories': null;
        },
        stockClass(data) {
            return [
                {
                    'outofstock': data.quantity === 0,
                    'lowstock': data.quantity > 0 && data.quantity<10,
                    'instock': data.quantity > 10
                 }
            ];
        }
    },
    components: {
        LiveEditor
    }
}
</script>

<style scoped lang="scss">
.outofstock {
    font-weight: 700;
    color: #FF5252;
    text-decoration: line-through;
}

.lowstock {
    font-weight: 700;
    color: #FFA726;
}

.instock {
    font-weight: 700;
    color: #66BB6A;
}

::v-deep(.row-accessories) {
    background-color: rgba(0,0,0,.15) !important;
}
</style>