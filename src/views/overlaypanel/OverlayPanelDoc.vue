<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<pre v-code.script>
<code>
import OverlayPanel from 'primevue/overlaypanel';

</code></pre>

				<h5>Getting Started</h5>
				<p>OverlayPanel is accessed via its reference where visibility is controlled using toggle, show and hide methods.</p>
<pre v-code>
<code>
&lt;Button type="button" label="Toggle" @click="toggle" /&gt;

&lt;OverlayPanel ref="op"&gt;
	&lt;img src="demo/images/nature/nature1.jpg" alt="Nature Image"&gt;
&lt;/OverlayPanel&gt;

</code></pre>

<pre v-code.script>
<code>
toggle(event) {
    this.$refs.op.toggle(event);
}

</code></pre>

				<h5>Dismissable and CloseIcon</h5>
				<p>Clicking outside the overlay hides the panel, setting <i>dismissable</i> to false disables this behavior.
					Additionally enabling <i>showCloseIcon</i> property displays a close icon at the top right corner to close the panel.</p>
<pre v-code>
<code>
&lt;OverlayPanel ref="op" :showCloseIcon="true" :dismissable="true"&gt;
	&lt;img src="demo/images/nature/nature1.jpg" alt="Nature Image"&gt;
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
                                <td>null</td>
                                <td>Id of the element or "body" for document where the overlay should be appended to.</td>
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
							<td>event: Browser event</td>
							<td>Toggles the visibility of the overlay.</td>
						</tr>
						<tr>
							<td>show</td>
							<td>event: Browser event <br />
								target: Optional target if event.target should not be used</td>
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
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/overlaypanel" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<pre v-code>
<code><template v-pre>
&lt;Button type="button" icon="pi pi-search" :label="selectedProduct ? selectedProduct.name : 'Select a Product'" @click="toggle" aria:haspopup="true" aria-controls="overlay_panel" /&gt;

&lt;OverlayPanel ref="op" appendTo="body" :showCloseIcon="true" id="overlay_panel" style="width: 450px"&gt;
    &lt;DataTable :value="products" :selection.sync="selectedProduct" selectionMode="single" :paginator="true" :rows="5" @row-select="onProductSelect"&gt;
        &lt;Column field="name" header="Name" sortable&gt;&lt;/Column&gt;
        &lt;Column header="Image"&gt;
            &lt;template #body="slotProps"&gt;
                &lt;img :src="'demo/images/product/' + slotProps.data.image" :alt="slotProps.data.image" class="product-image" /&gt;
            &lt;/template&gt;
        &lt;/Column&gt;
        &lt;Column field="price" header="Price" sortable&gt;
            &lt;template #body="slotProps"&gt;
                {{formatCurrency(slotProps.data.price)}}
            &lt;/template&gt;
        &lt;/Column&gt;
    &lt;/DataTable&gt;
&lt;/OverlayPanel&gt;
</template>
</code></pre>

<pre v-code.script>
<code>
import ProductService from '../../service/ProductService';

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

</code></pre>
			</TabPanel>
		</TabView>
	</div>
</template>