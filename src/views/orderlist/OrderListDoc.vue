<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<CodeHighlight lang="javascript">
import OrderList from 'primevue/orderlist';
</CodeHighlight>

				<h5>Getting Started</h5>
                <p>OrderList requires an array as its value bound with the v-model directive and a template for its content.</p>
                <p>Header of the component is defined with the "header" template and to define the content of an item in the list a named template called "item" needs to be defined which gets the
                    <i>item</i> and the <i>index</i> via slotProps.
                </p>
<CodeHighlight>
<template v-pre>
&lt;OrderList v-model="cars" listStyle="height:auto" dataKey="vin"&gt;
    &lt;template #header&gt;
        List of Cars
    &lt;/template&gt;
    &lt;template #item="slotProps"&gt;
        &lt;div class="p-caritem"&gt;
            &lt;img :src="'demo/images/car/' + slotProps.item.brand + '.png'"&gt;
            &lt;div&gt;
                &lt;span class="p-caritem-vin"&gt;{{slotProps.item.vin}}&lt;/span&gt;
                &lt;span&gt;{{slotProps.item.year}} - {{slotProps.item.color}}&lt;/span&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/OrderList&gt;
</template>
</CodeHighlight>

                <h5>Selection</h5>
                <p>In case you'd need to access the selected items in the list, define a binding to the <i>selection</i> property with the sync operator so that
                it gets updated when the user makes a selection. Since it is two-way binding enabled, your changes to the selection will be reflected as well.  Note that
                this is optional and only necessary when you need to access the selection.</p>

                <p>Use the sync operator to enable two-way binding.</p>

<CodeHighlight>
<template v-pre>
&lt;OrderList v-model="cars" dataKey="vin" :selection.sync="selection"&gt;
    &lt;template #header&gt;
        List of Cars
    &lt;/template&gt;
    &lt;template #item="slotProps"&gt;
        &lt;div class="p-caritem"&gt;
            &lt;img :src="'demo/images/car/' + slotProps.item.brand + '.png'"&gt;
            &lt;div&gt;
                &lt;span class="p-caritem-vin"&gt;{{slotProps.item.vin}}&lt;/span&gt;
                &lt;span&gt;{{slotProps.item.year}} - {{slotProps.item.color}}&lt;/span&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/OrderList&gt;
</template>
</CodeHighlight>

                <h5>DataKey</h5>
                <p>It is recommended to provide the name of the field that uniquely identifies the a record in the data via the <i>dataKey</i> property for better performance.</p>

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
                                <td>value</td>
                                <td>array</td>
                                <td>null</td>
                                <td>Value of the component.</td>
                            </tr>
                            <tr>
                                <td>selection</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Selected items in the list.</td>
                            </tr>
                            <tr>
                                <td>metaKeySelection</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Defines whether metaKey is requred or not for the selection. <br/>
                                    When true metaKey needs to be pressed to select or unselect an item and <br/>
                                    when set to false selection of each item
                                    can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.</td>
                            </tr>
                            <tr>
                                <td>dataKey</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Name of the field that uniquely identifies the a record in the data.</td>
                            </tr>
                            <tr>
                                <td>listStyle</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the the list element.</td>
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
                                <td>reorder</td>
                                <td>event.originalEvent: browser event <br />
                                    event.value: Ordered list <br />
                                    event.direction: Direction of the change; "up", "down", "bottom", "top"
                                </td>
                                <td>Callback to invoke when the list is reordered.</td>
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
                                <td>p-orderlist</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-orderlist-list</td>
                                <td>List container.</td>
                            </tr>
                            <tr>
                                <td>p-orderlist-item</td>
                                <td>An item in the list</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h5>Dependencies</h5>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/orderlist" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;OrderList v-model="products" listStyle="height:auto" dataKey="id"&gt;
    &lt;template #header&gt;
        List of Products
    &lt;/template&gt;
    &lt;template #item="slotProps"&gt;
        &lt;div class="product-item"&gt;
            &lt;div class="image-container"&gt;
                &lt;img :src="'demo/images/product/' + slotProps.item.image" :alt="slotProps.item.name" /&gt;
            &lt;/div&gt;
            &lt;div class="product-list-detail"&gt;
                &lt;h5 class="p-mb-2"&gt;{{slotProps.item.name}}&lt;/h5&gt;
                &lt;i class="pi pi-tag product-category-icon"&gt;&lt;/i&gt;
                &lt;span class="product-category"&gt;{{slotProps.item.category}}&lt;/span&gt;
            &lt;/div&gt;
            &lt;div class="product-list-action"&gt;
                &lt;h6 class="p-mb-2"&gt;${{slotProps.item.price}}&lt;/h6&gt;
                &lt;span :class="'product-badge status-'+slotProps.item.inventoryStatus.toLowerCase()"&gt;{{slotProps.item.inventoryStatus}}&lt;/span&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/OrderList&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="js">
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

<CodeHighlight lang="css">
.product-item {
	display: flex;
	align-items: center;
	padding: .5rem;
	width: 100%;

	img {
		width: 75px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        margin-right: 1rem;
	}

	.product-list-detail {
		flex: 1 1 0;
	}

	.product-list-action {
		display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    
    .product-category-icon {
        vertical-align: middle;
        margin-right: .5rem;
    }

    .product-category {
        vertical-align: middle;
        line-height: 1;
    }
}

@media screen and (max-width: 576px) {
    .product-item {
        flex-wrap: wrap;

        .image-container {
            width: 100%;
            text-align: center;
        }

        img {
            margin: 0 0 1rem 0;
            width: 100px;
        }
    }
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>