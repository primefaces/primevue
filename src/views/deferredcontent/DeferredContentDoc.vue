<template>
	<AppDoc name="DeferredContentDemo" :sources="sources" :service="['ProductService']" :data="['products-small']" github="deferredcontent/DeferredContentDemo.vue">
        <h5>Import via Module</h5>
<pre v-code.script><code>
import DeferredContent from 'primevue/deferredcontent';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/deferredcontent/deferredcontent.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>DeferredContent is used as a wrapper element of its content..</p>
<pre v-code><code><template v-pre>
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
<pre v-code><code><template v-pre>
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
    </AppDoc>
</template>

<script>
export default {
    data() {
        return {
            sources: {
                'options-api': {
                    tabName: 'Options API Source',
                    content: `
<template>
    <div>
        <Toast />

        <div style="height: 800px">
            Scroll down to lazy load an image and the DataTable which initiates a query that is not executed on initial page load to speed up load performance.
        </div>

        <DeferredContent @load="onImageLoad">
            <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Nature"/>
        </DeferredContent>

        <div style="height: 500px">
        </div>

        <DeferredContent @load="onDataLoad">
            <DataTable :value="products" responsiveLayout="scroll">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </DeferredContent>
    </div>
</template>

<script>
import ProductService from './service/ProductService';

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
<\\/script>
`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <Toast />
        
        <div style="height: 800px">
            Scroll down to lazy load an image and the DataTable which initiates a query that is not executed on initial page load to speed up load performance.
        </div>

        <DeferredContent @load="onImageLoad">
            <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Nature"/>
        </DeferredContent>

        <div style="height: 500px">
        </div>

        <DeferredContent @load="onDataLoad">
            <DataTable :value="products" responsiveLayout="scroll">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </DeferredContent>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useToast } from "primevue/usetoast";
import ProductService from './service/ProductService';

export default {
    setup() {
        const toast = useToast();

        const products = ref();
        const productService = ref(new ProductService());
        const onImageLoad = () => {
            toast.add({severity: 'success', summary: 'Image Initialized', detail: 'Scroll down to load the datatable'});
        };
        const onDataLoad = () => {
            productService.value.getProductsSmall().then(data => products.value = data);
            toast.add({severity: 'success', summary: 'Data Initialized', detail: 'Render Completed'});
        };

        return { products, productService, onImageLoad, onDataLoad }
    }
}
<\\/script>
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/deferredcontent/deferredcontent.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/toast/toast.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/toastservice/toastservice.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/datatable/datatable.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>
        <script src="./ProductService.js"><\\/script>`,
                    content: `<div id="app">
            <p-toast></p-toast>
            
            <div style="height: 800px">
                Scroll down to lazy load an image and the DataTable which initiates a query that is not executed on initial page load to speed up load performance.
            </div>

            <p-deferredcontent @load="onImageLoad">
                <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Nature"/>
            </p-deferredcontent>

            <div style="height: 500px">
            </div>

            <p-deferredcontent @load="onDataLoad">
                <p-datatable :value="products" responsive-layout="scroll">
                    <p-column field="code" header="Code"></p-column>
                    <p-column field="name" header="Name"></p-column>
                    <p-column field="category" header="Category"></p-column>
                    <p-column field="quantity" header="Quantity"></p-column>
                </p-datatable>
            </p-deferredcontent>
        </div>

        <script type="module">
        const { createApp, ref } = Vue;
        const { useToast } = primevue.usetoast;

        const App = {
            setup() {
                const toast = useToast();

                const products = ref();
                const productService = ref(new ProductService());
                const onImageLoad = () => {
                    toast.add({severity: 'success', summary: 'Image Initialized', detail: 'Scroll down to load the datatable'});
                };
                const onDataLoad = () => {
                    productService.value.getProductsSmall().then(data => products.value = data);
                    toast.add({severity: 'success', summary: 'Data Initialized', detail: 'Render Completed'});
                };

                return { products, productService, onImageLoad, onDataLoad }
            },
            components: {
                "p-deferredcontent": primevue.deferredcontent,
                "p-toast": primevue.toast,
                "p-datatable": primevue.datatable,
                "p-column": primevue.column
            } 
        };

        createApp(App)
            .use(primevue.config.default)
            .use(primevue.toastservice)
            .mount("#app");
        <\\/script>
`
                }
            }
        }
    }
}
</script>