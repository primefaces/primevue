<template>
	<AppDoc name="OverlayPanelDemo" :sources="sources" :service="['ProductService']" :data="['products-small']" github="overlaypanel/OverlayPanelDemo.vue" >
        <h5>Import via Module</h5>
<pre v-code.script><code>
import OverlayPanel from 'primevue/overlaypanel';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/overlaypanel/overlaypanel.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>OverlayPanel is accessed via its reference where visibility is controlled using toggle, show and hide methods.</p>
<pre v-code><code>
&lt;Button type="button" label="Toggle" @click="toggle" /&gt;

&lt;OverlayPanel ref="op"&gt;
	&lt;img src="demo/images/nature/nature1.jpg" alt="Nature Image"&gt;
&lt;/OverlayPanel&gt;

</code></pre>

<pre v-code.script><code>
toggle(event) {
    this.$refs.op.toggle(event);
}

</code></pre>

		<h5>Dismissable and CloseIcon</h5>
		<p>Clicking outside the overlay hides the panel, setting <i>dismissable</i> to false disables this behavior.
			Additionally enabling <i>showCloseIcon</i> property displays a close icon at the top right corner to close the panel.</p>
<pre v-code><code>
&lt;OverlayPanel ref="op" :showCloseIcon="true" :dismissable="true"&gt;
	&lt;img src="demo/images/nature/nature1.jpg" alt="Nature Image"&gt;
&lt;/OverlayPanel&gt;

</code></pre>

        <h5>Responsive</h5>
        <p>OverlayPanel width can be adjusted per screen size with the <i>breakpoints</i> option. In example below, default width is set to 450px and below 961px, width would be 75vw and finally below 641px width becomes
        100%. The value of <i>breakpoints</i> should be an object literal whose keys are the maximum screen sizes and values are the widths per screen.</p>

<pre v-code><code>
&lt;OverlayPanel ref="op" :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '450px'}"&gt;
	Content
&lt;/OverlayPanel&gt;

</code></pre>

		<h5>Properties</h5>
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
                        <td>dismissable</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Enables to hide the overlay when outside is clicked.</td>
                    </tr>
                    <tr>
                        <td>showCloseIcon</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When enabled, displays a close icon at top right corner.</td>
                    </tr>
                    <tr>
                        <td>appendTo</td>
                        <td>string</td>
                        <td>body</td>
                        <td>A valid query selector or an HTMLElement to specify where the overlay gets attached.</td>
                    </tr>
                    <tr>
                        <td>baseZIndex</td>
                        <td>number</td>
                        <td>0</td>
                        <td>Base zIndex value to use in layering.</td>
                    </tr>
                    <tr>
                        <td>autoZIndex</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Whether to automatically manage layering.</td>
                    </tr>
                    <tr>
                        <td>ariaCloseLabel</td>
                        <td>string</td>
                        <td>close</td>
                        <td>Aria label of the close icon.</td>
                    </tr>
                    <tr>
                        <td>breakpoints</td>
                        <td>object</td>
                        <td>null</td>
                        <td>Object literal to define widths per screen size.</td>
                    </tr>
				</tbody>
			</table>
		</div>

		<h5>Methods</h5>
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
                        <td>toggle</td>
                        <td>event: Browser event <br />
                            target: Optional target if event.currentTarget should not be used</td>
                        <td>Toggles the visibility of the overlay.</td>
                    </tr>
                    <tr>
                        <td>show</td>
                        <td>event: Browser event <br />
                            target: Optional target if event.currentTarget should not be used</td>
                        <td>Shows the overlay.</td>
                    </tr>
                    <tr>
                        <td>hide</td>
                        <td>-</td>
                        <td>Hides the overlay.</td>
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
                        <td>show</td>
                        <td>-</td>
                        <td>Callback to invoke when the overlay is shown.</td>
                    </tr>
                    <tr>
                        <td>hide</td>
                        <td>-</td>
                        <td>Callback to invoke when the overlay is hidden.</td>
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
					<td>p-overlaypanel</td>
					<td>Container element.</td>
				</tr>
				<tr>
					<td>p-overlaypanel-content</td>
					<td>Content of the panel.</td>
				</tr>
				<tr>
					<td>p-overlaypanel-close</td>
					<td>Close icon.</td>
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
        <Toast />

        <Button type="button" icon="pi pi-search" :label="selectedProduct ? selectedProduct.name : 'Select a Product'" @click="toggle" aria-haspopup="true" aria-controls="overlay_panel" />

        <OverlayPanel ref="op" appendTo="body" :showCloseIcon="true" id="overlay_panel" style="width: 450px" :breakpoints="{'960px': '75vw'}">
            <DataTable :value="products" v-model:selection="selectedProduct" selectionMode="single" :paginator="true" :rows="5" @rowSelect="onProductSelect" responsiveLayout="scroll" >
                <Column field="name" header="Name" sortable style="width: 50%"></Column>
                <Column header="Image" style="width: 20%">
                    <template #body="slotProps">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.image" class="product-image" />
                    </template>
                </Column>
                <Column field="price" header="Price" sortable style="width: 30%">
                    <template #body="slotProps">
                        {{formatCurrency(slotProps.data.price)}}
                    </template>
                </Column>
            </DataTable>
        </OverlayPanel>
    </div>
</template>

<script>
import ProductService from './service/ProductService';

export default {
    data() {
        return {
            products: null,
            selectedProduct: null
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
        toggle(event) {
            this.$refs.op.toggle(event);
        },
        formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        },
        onProductSelect(event) {
            this.$refs.op.hide();
            this.$toast.add({severity:'info', summary: 'Product Selected', detail: event.data.name, life: 3000});
        }
    }
}
<\\/script>

<style lang="scss" scoped>
button {
    min-width: 15rem;
}

.product-image {
    width: 50px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
}
</style>`
				},
                'composition-api': {
                    tabName: 'Composition API Source',
					content: `
<template>
    <div>
        <Toast />

        <Button type="button" icon="pi pi-search" :label="selectedProduct ? selectedProduct.name : 'Select a Product'" @click="toggle" aria-haspopup="true" aria-controls="overlay_panel" />

        <OverlayPanel ref="op" appendTo="body" :showCloseIcon="true" id="overlay_panel" style="width: 450px" :breakpoints="{'960px': '75vw'}">
            <DataTable :value="products" v-model:selection="selectedProduct" selectionMode="single" :paginator="true" :rows="5" @rowSelect="onProductSelect" responsiveLayout="scroll" >
                <Column field="name" header="Name" sortable style="width: 50%"></Column>
                <Column header="Image" style="width: 20%">
                    <template #body="slotProps">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.image" class="product-image" />
                    </template>
                </Column>
                <Column field="price" header="Price" sortable style="width: 30%">
                    <template #body="slotProps">
                        {{formatCurrency(slotProps.data.price)}}
                    </template>
                </Column>
            </DataTable>
        </OverlayPanel>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import ProductService from './service/ProductService';

export default {
    setup() {
        onMounted(() => {
            productService.value.getProductsSmall().then(data => products.value = data);
        })

        const toast = useToast();
        const op = ref();
        const productService = ref(new ProductService());
        const products = ref();
        const selectedProduct = ref();
        const toggle = (event) => {
            op.value.toggle(event);
        };
        const formatCurrency = (value) => {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        };
        const onProductSelect = (event) => {
            op.value.hide();
            toast.add({severity:'info', summary: 'Product Selected', detail: event.data.name, life: 3000});
        };

        return { op, productService, products, selectedProduct, toggle, formatCurrency, onProductSelect}
    }
}
<\\/script>

<style lang="scss" scoped>
button {
    min-width: 15rem;
}

.product-image {
    width: 50px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
}
</style>`
				},
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/overlaypanel/overlaypanel.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/datatable/datatable.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/toast/toast.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/toastservice/toastservice.min.js"><\\/script>
        <script src="./ProductService.js"><\\/script>`,
					content: `<div id="app">
            <p-toast></p-toast>

            <p-button type="button" icon="pi pi-search" :label="selectedProduct ? selectedProduct.name : 'Select a Product'" @click="toggle" aria-haspopup="true" aria-controls="overlay_panel"></p-button>

            <p-overlaypanel ref="op" append-to="body" :show-close-icon="true" id="overlay_panel" style="width: 450px" :breakpoints="{'960px': '75vw'}">
                <p-datatable :value="products" v-model:selection="selectedProduct" selection-mode="single" :paginator="true" :rows="5" @row-select="onProductSelect" responsive-layout="scroll" >
                    <p-column field="name" header="Name" sortable style="width: 50%"></p-column>
                    <p-column header="Image" style="width: 20%">
                        <template #body="slotProps">
                            <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.image" class="product-image" />
                        </template>
                    </p-column>
                    <p-column field="price" header="Price" sortable style="width: 30%">
                        <template #body="slotProps">
                            {{formatCurrency(slotProps.data.price)}}
                        </template>
                    </p-column>
                </p-datatable>
            </p-overlaypanel>
        </div>

        <script type="module">
        const { createApp, ref, onMounted } = Vue;
        const { useToast } = primevue.usetoast;

        const App = {
            setup() {
                onMounted(() => {
                    productService.value.getProductsSmall().then(data => products.value = data);
                })

                const toast = useToast();
                const op = ref();
                const productService = ref(new ProductService());
                const products = ref();
                const selectedProduct = ref();
                const toggle = (event) => {
                    op.value.toggle(event);
                };
                const formatCurrency = (value) => {
                    return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
                };
                const onProductSelect = (event) => {
                    op.value.hide();
                    toast.add({severity:'info', summary: 'Product Selected', detail: event.data.name, life: 3000});
                };

                return { op, productService, products, selectedProduct, toggle, formatCurrency, onProductSelect}
            },
            components: {
                "p-overlaypanel": primevue.overlaypanel,
                "p-datatable": primevue.datatable,
                "p-column": primevue.column,
                "p-button": primevue.button,
                "p-toast": primevue.toast
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .use(primevue.toastservice)
            .mount("#app");
        <\\/script>

        <style>
        .p-button {
            min-width: 15rem;
        }

        .product-image {
            width: 50px;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
        }
        </style>`
				}
			}
		}
	}
}
</script>