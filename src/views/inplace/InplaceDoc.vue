<template>
	<AppDoc name="InplaceDemo" :sources="sources" :service="['ProductService']" :data="['products-small']" github="inplace/InplaceDemo.vue" >
        <h5>Import via Module</h5>
<pre v-code.script><code>
import Inplace from 'primevue/inplace';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/inplace/inplace.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>Inplace requires <i>display</i> and <i>content</i> templates to define the content of each state.</p>

<pre v-code><code><template v-pre>
&lt;Inplace&gt;
    &lt;template #display&gt;
        &lt;span class="pi pi-search" style="vertical-align: middle"&gt;&lt;/span&gt;
        &lt;span style="margin-left:.5rem; vertical-align: middle"&gt;View Picture&lt;/span&gt;
    &lt;/template&gt;
    &lt;template #content&gt;
        &lt;img src="demo/images/nature/nature1.jpg" /&gt;
    &lt;/template&gt;
&lt;/Inplace&gt;
</template>
</code></pre>

        <h5>Closable</h5>
        <p><i>closable</i> property is handy within forms as it enables to switch back to output mode after editing is completed using a button displayed next to the form field.</p>
<pre v-code><code><template v-pre>
&lt;Inplace :closable="true"&gt;
    &lt;template #display&gt;
        &#123;&#123;text || 'Click to Edit'&#125;&#125;
    &lt;/template&gt;
    &lt;template #content&gt;
        &lt;InputText v-model="text" autoFocus /&gt;
    &lt;/template&gt;
&lt;/Inplace&gt;
</template>
</code></pre>

		<h5>Lazy Data</h5>
		<p>Inplace allows lazy loading content so that the content gets initialized after getting opened instead of on load. Here is an example that loads, data of a table if the user decides to open the inplace.</p>
<pre v-code><code><template v-pre>
&lt;Inplace @open="loadData"&gt;
    &lt;template #display&gt;
        View Data
    &lt;/template&gt;
    &lt;template #content&gt;
        &lt;DataTable :value="cars"&gt;
            &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
            &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
            &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
            &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
        &lt;/DataTable&gt;
    &lt;/template&gt;
&lt;/Inplace&gt;
</template>
</code></pre>

<pre v-code.script><code>
import CarService from '../../service/CarService';

export default {
    data() {
        return {
            cars: null
        }
    },
    carService: null,
    created() {
        this.carService = new CarService();
    },
    methods: {
        loadData() {
            this.carService.getCarsSmall().then(data => this.cars = data);
        }
    }
}

</code></pre>

		<h5>Properties</h5>
        <p>Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.</p>
		<div class="doc-tablewrapper">
			<table class="doc-table">
				<thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
				</thead>
				<tbody>
                    <tr>
                        <td>active</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Whether the content is displayed or not.</td>
                    </tr>
                    <tr>
                        <td>closable</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Displays a button to switch back to display mode.</td>
                    </tr>
                    <tr>
                        <td>disabled</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When present, it specifies that the element should be disabled.</td>
                    </tr>
				</tbody>
			</table>
		</div>

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
                        <td>open</td>
                        <td>event: browser event </td>
                        <td>Callback to invoke when inplace is opened.</td>
                    </tr>
                    <tr>
                        <td>close</td>
                        <td>event: browser event </td>
                        <td>Callback to invoke when inplace is closed.</td>
                    </tr>
				</tbody>
			</table>
		</div>

        <h5>Slots</h5>
		<div class="doc-tablewrapper">
            <table class="doc-table">
				<thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                    </tr>
				</thead>
				<tbody>
                    <tr>
                        <td>display</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>content</td>
                        <td>-</td>
                    </tr>
				</tbody>
			</table>
        </div>

		<h5>Styling</h5>
		<p>Following is the list of structural style classes, for theming classes visit <router-link to="/theming">theming</router-link> page.</p>
		<div class="doc-tablewrapper">
			<table class="doc-table">
				<thead>
                    <tr>
                        <th>Name</th>
                        <th>Element</th>
                    </tr>
				</thead>
				<tbody>
                    <tr>
                        <td>p-inplace</td>
                        <td>Container element</td>
                    </tr>
                    <tr>
                        <td>p-inplace-display</td>
                        <td>Display container</td>
                    </tr>
                    <tr>
                        <td>p-inplace-content</td>
                        <td>Content container</td>
                    </tr>
				</tbody>
			</table>
		</div>

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
        <h5>Input</h5>
        <Inplace :closable="true">
            <template #display>
                {{text || 'Click to Edit'}}
            </template>
            <template #content>
                <InputText v-model="text" autoFocus />
            </template>
        </Inplace>

        <h5>Image</h5>
        <Inplace>
            <template #display>
                <span class="pi pi-search" style="vertical-align: middle"></span>
                <span style="margin-left:.5rem; vertical-align: middle">View Picture</span>
            </template>
            <template #content>
                <img src="https://www.primefaces.org/wp-content/uploads/2020/12/primevue-min.png" width="200" />
            </template>
        </Inplace>

        <h5>Lazy Data</h5>
        <Inplace @open="loadData">
            <template #display>
                View Data
            </template>
            <template #content>
                <DataTable :value="products" responsiveLayout="scroll" >
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </template>
        </Inplace>
    </div>
</template>

<script>
import ProductService from './service/ProductService';

export default {
    data() {
        return {
            text: null,
            products: null
        }
    },
    productService: null,
    created() {
        this.productService = new ProductService();
    },
    methods: {
        loadData() {
            this.productService.getProductsSmall().then(data => this.products = data);
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
        <h5>Input</h5>
        <Inplace :closable="true">
            <template #display>
                {{text || 'Click to Edit'}}
            </template>
            <template #content>
                <InputText v-model="text" autoFocus />
            </template>
        </Inplace>

        <h5>Image</h5>
        <Inplace>
            <template #display>
                <span class="pi pi-search" style="vertical-align: middle"></span>
                <span style="margin-left:.5rem; vertical-align: middle">View Picture</span>
            </template>
            <template #content>
                <img src="https://www.primefaces.org/wp-content/uploads/2020/12/primevue-min.png" width="200" />
            </template>
        </Inplace>

        <h5>Lazy Data</h5>
        <Inplace @open="loadData">
            <template #display>
                View Data
            </template>
            <template #content>
                <DataTable :value="products" responsiveLayout="scroll" >
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </template>
        </Inplace>
    </div>
</template>

<script>
import { ref } from 'vue';
import ProductService from './service/ProductService';

export default {
    setup() {
        const productService = ref(new ProductService());
        const text = ref(null);
        const products = ref(null);
        const loadData = () => {
            productService.value.getProductsSmall().then(data => products.value = data);
        }

        return { productService, text, products, loadData }
    }
}
<\\/script>`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/inplace/inplace.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/datatable/datatable.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>
        <script src="./ProductService.js"><\\/script>`,
                    content: `<div id="app">
            <h5>Input</h5>
            <p-inplace :closable="true">
                <template #display>
                    {{text || 'Click to Edit'}}
                </template>
                <template #content>
                    <p-inputtext v-model="text" autoFocus></p-inputtext>
                </template>
            </p-inplace>

            <h5>Image</h5>
            <p-inplace>
                <template #display>
                    <span class="pi pi-search" style="vertical-align: middle"></span>
                    <span style="margin-left:.5rem; vertical-align: middle">View Picture</span>
                </template>
                <template #content>
                    <img src="https://www.primefaces.org/wp-content/uploads/2020/12/primevue-min.png" width="200" />
                </template>
            </p-inplace>

            <h5>Lazy Data</h5>
            <p-inplace @open="loadData">
                <template #display>
                    View Data
                </template>
                <template #content>
                    <p-datatable :value="products" responsive-layout="scroll" >
                        <p-column field="code" header="Code"></p-column>
                        <p-column field="name" header="Name"></p-column>
                        <p-column field="category" header="Category"></p-column>
                        <p-column field="quantity" header="Quantity"></p-column>
                    </p-datatable>
                </template>
            </p-inplace>
        </div>

        <script type="module">
        const { createApp, ref } = Vue;

        const App = {
            setup() {
                const productService = ref(new ProductService());
                const text = ref(null);
                const products = ref(null);
                const loadData = () => {
                    productService.value.getProductsSmall().then(data => products.value = data);
                }

                return { productService, text, products, loadData }
            },
            components: {
                "p-inplace": primevue.inplace,
                "p-datatable": primevue.datatable,
                "p-column": primevue.column,
                "p-inputtext": primevue.inputtext
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>`
                }
            }
        }
    }
}
</script>