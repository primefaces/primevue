<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<pre v-code.script>
<code>
import DeferredContent from 'primevue/deferredcontent';

</code></pre>

				<h5>Getting Started</h5>
				<p>DeferredContent is used as a wrapper element of its content..</p>
<pre v-code>
<code><template v-pre>
&lt;DeferredContent&gt;
    &lt;DataTable :value="cars"&gt;
        &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
        &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
        &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
        &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
    &lt;/DataTable&gt;
&lt;/DeferredContent&gt;
</template>
</code></pre>

                <h5>Load Event</h5>
                <p>onLoad callback is useful to initialize the content when it becomes visible on scroll such as loading data.</p>
<pre v-code>
<code><template v-pre>
&lt;DeferredContent @load="onDataLoad"&gt;
    &lt;DataTable :value="cars"&gt;
        &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
        &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
        &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
        &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
    &lt;/DataTable&gt;
&lt;/DeferredContent&gt;
</template>
</code></pre>

				<h5>Properties</h5>
				<p>Component has no properties.</p>

				<h5>Events</h5>
				<div class="doc-tablewrapper">
					<table class="doc-table">
						<thead>
						<tr>
							<th>Name</th>
							<th>Parameters</th>
							<th>Description</th>
						</tr>
						</thead>
						<tbody>
                            <tr>
                                <td>load</td>
                                <td>event: Event object</td>
                                <td>Callback to invoke when deferred content is loaded..</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h5>Styling</h5>
				<p>Component does not apply any styling.</p>

				<h5>Dependencies</h5>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
                <div class="p-d-flex p-jc-between">
                    <a href="https://github.com/primefaces/primevue/tree/master/src/views/deferredcontent" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
                        <span>View on GitHub</span>
                    </a>
                    <LiveEditor name="DeferredContentDemo" :sources="sources" service="ProductService" data="products-small" :components="['DataTable', 'Column']" />
                </div>
<pre v-code>
<code><template v-pre>
&lt;div style="height: 800px"&gt;
    Scroll down to lazy load an image and the DataTable which initiates a query that is not executed on initial page load to speed up load performance.
&lt;/div&gt;

&lt;DeferredContent @load="onImageLoad"&gt;
    &lt;img src="demo/images/nature/nature4.jpg" alt="Nature"/&gt;
&lt;/DeferredContent&gt;

&lt;div style="height: 500px"&gt;
&lt;/div&gt;

&lt;DeferredContent @load="onDataLoad"&gt;
    &lt;DataTable :value="products"&gt;
        &lt;Column field="code" header="Code"&gt;&lt;/Column&gt;
        &lt;Column field="name" header="Name"&gt;&lt;/Column&gt;
        &lt;Column field="category" header="Category"&gt;&lt;/Column&gt;
        &lt;Column field="quantity" header="Quantity"&gt;&lt;/Column&gt;
    &lt;/DataTable&gt;
&lt;/DeferredContent&gt;
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
    methods: {
        onImageLoad() {
            this.$toast.add({severity: 'success', summary: 'Image Initialized', detail: 'Scroll down to load the datatable'});
        },
        onDataLoad() {
            this.productService.getProductsSmall().then(data => this.products = data);
            this.$toast.add({severity: 'success', summary: 'Data Initialized', detail: 'Render Completed'});
        }
    }
}

</code></pre>
			</TabPanel>
		</TabView>
	</div>
</template>

<script>
import LiveEditor from '../liveeditor/LiveEditor';
export default {
    data() {
        return {
            sources: {
                'template': {
                    content: `<template>
    <div class="layout-content">
        <Toast />
        <div class="content-section implementation">
            <div class="card">
                <div style="height: 800px">
                    Scroll down to lazy load an image and the DataTable which initiates a query that is not executed on initial page load to speed up load performance.
                </div>

                <DeferredContent @load="onImageLoad">
                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Nature"/>
                </DeferredContent>

                <div style="height: 500px">
                </div>

                <DeferredContent @load="onDataLoad">
                    <DataTable :value="products">
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>
                </DeferredContent>
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
    methods: {
        onImageLoad() {
            this.$toast.add({severity: 'success', summary: 'Image Initialized', detail: 'Scroll down to load the datatable'});
        },
        onDataLoad() {
            this.productService.getProductsSmall().then(data => this.products = data);
            this.$toast.add({severity: 'success', summary: 'Data Initialized', detail: 'Render Completed'});
        }
    }
}`
                }
            }
        }
    },
    components: {
        LiveEditor
    }
}
</script>