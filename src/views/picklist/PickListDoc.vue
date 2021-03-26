<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<CodeHighlight lang="javascript">
import PickList from 'primevue/picklist';
</CodeHighlight>

				<h5>Getting Started</h5>
                <p>PickList requires a multidimensional array as its value bound with the v-model directive and a template for its content
                    that gets the <i>item</i> instance and the <i>index</i> via slotProps.</p>
<CodeHighlight>
<template v-pre>
&lt;PickList v-model="cars" dataKey="vin"&gt;
    &lt;template #item="slotProps"&gt;
        &lt;div class="p-caritem"&gt;
            &lt;img :src="'demo/images/car/' + slotProps.item.brand + '.png'"&gt;
            &lt;div&gt;
                &lt;span class="p-caritem-vin"&gt;{{slotProps.item.vin}}&lt;/span&gt;
                &lt;span&gt;{{slotProps.item.year}} - {{slotProps.item.color}}&lt;/span&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/PickList&gt;
</template>
</CodeHighlight>

                <h5>Templates</h5>
                <p>In addition to the mandatory "item" template, picklist provides "sourceHeader" and "targetHeader" slots as optional templates.</p>
<CodeHighlight>
<template v-pre>
&lt;PickList v-model="cars" dataKey="vin"&gt;
    &lt;template #sourceHeader&gt;
        Available
    &lt;/template&gt;
    &lt;template #targetHeader&gt;
        Selected
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
&lt;/PickList&gt;
</template>
</CodeHighlight>

                <h5>Selection</h5>
                <p>In case you need to access the selected items in the list, define a binding to the <i>selection</i> property with the sync operator so that
                it gets updated when the user makes a selection. Since it is two-way binding enabled, your changes to the selection will be reflected as well.  Note that
                this is optional and only necessary when you need to access the selection.</p>

<CodeHighlight>
<template v-pre>
&lt;PickList v-model="cars" dataKey="vin" :selection.sync="selection"&gt;
    &lt;template #item="slotProps"&gt;
        &lt;div class="p-caritem"&gt;
            &lt;img :src="'demo/images/car/' + slotProps.item.brand + '.png'"&gt;
            &lt;div&gt;
                &lt;span class="p-caritem-vin"&gt;{{slotProps.item.vin}}&lt;/span&gt;
                &lt;span&gt;{{slotProps.item.year}} - {{slotProps.item.color}}&lt;/span&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/PickList&gt;
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
                                <td>Value of the component as a multidimensional array.</td>
                            </tr>
                            <tr>
                                <td>selection</td>
                                <td>array</td>
                                <td>null</td>
                                <td>Selected items in the list as a multidimensional array.</td>
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
                                    event.direction: Direction of the change; "up", "down", "bottom", "top" <br />
                                    event.listIndex: Index of the list that is ordered, 0 represents the source and 1 represents the target list.
                                </td>
                                <td>Callback to invoke when the list is reordered.</td>
                            </tr>
                            <tr>
                                <td>move-to-target</td>
                                <td>event.originalEvent: browser event <br />
                                    event.items: Moved items
                                </td>
                                <td>Callback to invoke when one or more items are moved to the target list.</td>
                            </tr>
                            <tr>
                                <td>move-all-to-target</td>
                                <td>event.originalEvent: browser event <br />
                                    event.items: Moved items
                                </td>
                                <td>Callback to invoke when all items are moved to the target list.</td>
                            </tr>
                            <tr>
                                <td>move-to-source</td>
                                <td>event.originalEvent: browser event <br />
                                    event.items: Moved items
                                </td>
                                <td>Callback to invoke when one or more items are moved to the source list.</td>
                            </tr>
                            <tr>
                                <td>move-all-to-source</td>
                                <td>event.originalEvent: browser event <br />
                                    event.items: Moved items
                                </td>
                                <td>Callback to invoke when all items are moved to the source list.</td>
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
                                <td>sourceHeader</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>item</td>
                                <td>item: Item of the component<br />
                                    index: Index of the item</td>
                            </tr>
                            <tr>
                                <td>targetHeader</td>
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
                                <td>p-picklist</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-picklist-source-controls</td>
                                <td>Container of source list buttons.</td>
                            </tr>
                            <tr>
                                <td>p-picklist-target-controls</td>
                                <td>Container of target list buttons.</td>
                            </tr>
                            <tr>
                                <td>p-picklist-buttons</td>
                                <td>Container of buttons.</td>
                            </tr>
                            <tr>
                                <td>p-picklist-listwrapper</td>
                                <td>Parent of a list element.</td>
                            </tr>
                            <tr>
                                <td>p-picklist-list</td>
                                <td>List element.</td>
                            </tr>
                            <tr>
                                <td>p-picklist-item</td>
                                <td>An item in the list.</td>
                            </tr>
                        </tbody>
					</table>
				</div>

				<h5>Dependencies</h5>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/2.x/src/views/picklist" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;PickList v-model="products" listStyle="height:342px" dataKey="id"&gt;
    &lt;template #sourceHeader&gt;
        Available
    &lt;/template&gt;
    &lt;template #targetHeader&gt;
        Selected
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
&lt;/PickList&gt;
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
        this.productService.getProductsSmall().then(data => this.products = [data, []]);
    }
}
</CodeHighlight>

<CodeHighlight lang="css">
product-item {
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