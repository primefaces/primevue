<template>
	<AppDoc name="OrderListDemo" :sources="sources" :service="['ProductService']" :data="['products-small']" github="orderlist/OrderListDemo.vue" >
        <h5>Import via Module</h5>
<pre v-code.script><code>
import OrderList from 'primevue/orderlist';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/orderlist/orderlist.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
        <p>OrderList requires an array as its value bound with the v-model directive and a template for its content.</p>
        <p>Header of the component is defined with the "header" template and to define the content of an item in the list a named template called "item" needs to be defined which gets the
            <i>item</i> and the <i>index</i> via slotProps.
        </p>
<pre v-code><code><template v-pre>
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
</code></pre>

        <h5>Selection</h5>
        <p>In case you'd need to access the selected items in the list, define a binding to the <i>selection</i> property with the v-model directive so that
        it gets updated when the user makes a selection. Since it is two-way binding enabled, your changes to the selection will be reflected as well.  Note that
        this is optional and only necessary when you need to access the selection.</p>

        <p>Use the v-model directive to enable two-way binding.</p>

<pre v-code><code><template v-pre>
&lt;OrderList v-model="cars" dataKey="vin" v-model:selection="selection"&gt;
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
</code></pre>

        <h5>DataKey</h5>
        <p>It is recommended to provide the name of the field that uniquely identifies the a record in the data via the <i>dataKey</i> property for better performance.</p>

        <h5>Templating</h5>
        <p>In addition to the <i>item</i> template, <i>header</i> is provided to place custom content at the list header. Controls section
        can also be customized to place content before and after the buttons with <i>controlsstart</i> and <i>controlsend</i> slots respectively.</p>

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
                        <td>modelValue</td>
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
                    <tr>
                        <td>responsive</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Whether the list optimizes layout based on screen size.</td>
                    </tr>
                    <tr>
                        <td>breakpoint</td>
                        <td>string</td>
                        <td>960px</td>
                        <td>The breakpoint to define the maximum width boundary when responsiveness is enabled.</td>
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
                    <tr>
                        <td>selection-change</td>
                        <td>event.originalEvent: browser event <br />
                            event.value: Ordered list
                        </td>
                        <td>Callback to invoke when selection changes.</td>
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
                        <td>header</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>item</td>
                        <td>item: Item of the component<br />
                            index: Index of the item</td>
                    </tr>
                    <tr>
                        <td>controlsstart</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>controlsend</td>
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
    <div class="card">
        <OrderList v-model="products" listStyle="height:auto" dataKey="id">
            <template #header>
                List of Products
            </template>
            <template #item="slotProps">
                <div class="product-item">
                    <div class="image-container">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.item.name" />
                    </div>
                    <div class="product-list-detail">
                        <h6 class="p-mb-2">{{slotProps.item.name}}</h6>
                        <i class="pi pi-tag product-category-icon"></i>
                        <span class="product-category">{{slotProps.item.category}}</span>
                    </div>
                    <div class="product-list-action">
                        <h6 class="p-mb-2">\${{slotProps.item.price}}</h6>
                        <span :class="'product-badge status-'+slotProps.item.inventoryStatus.toLowerCase()">{{slotProps.item.inventoryStatus}}</span>
                    </div>
                </div>
            </template>
        </OrderList>
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
    mounted() {
        this.productService.getProductsSmall().then(data => this.products = data);
    }
}
<\\/script>

<style lang="scss" scoped>
.card {
    background: #ffffff;
    padding: 2rem;
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
    border-radius: 4px;
    margin-bottom: 2rem;
}
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
        font-size: .875rem;
    }

    .product-category {
        vertical-align: middle;
        line-height: 1;
        font-size: .875rem;
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
</style>`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div class="card">
        <OrderList v-model="products" listStyle="height:auto" dataKey="id">
            <template #header>
                List of Products
            </template>
            <template #item="slotProps">
                <div class="product-item">
                    <div class="image-container">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.item.name" />
                    </div>
                    <div class="product-list-detail">
                        <h6 class="p-mb-2">{{slotProps.item.name}}</h6>
                        <i class="pi pi-tag product-category-icon"></i>
                        <span class="product-category">{{slotProps.item.category}}</span>
                    </div>
                    <div class="product-list-action">
                        <h6 class="p-mb-2">\${{slotProps.item.price}}</h6>
                        <span :class="'product-badge status-'+slotProps.item.inventoryStatus.toLowerCase()">{{slotProps.item.inventoryStatus}}</span>
                    </div>
                </div>
            </template>
        </OrderList>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import ProductService from './service/ProductService';

export default {
    setup() {
        onMounted(() => {
            productService.value.getProductsSmall().then(data => products.value = data);
        })

        const products = ref(null);
        const productService = ref(new ProductService());

        return { products, productService }
    }
}
<\\/script>

<style lang="scss" scoped>
.card {
    background: #ffffff;
    padding: 2rem;
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
    border-radius: 4px;
    margin-bottom: 2rem;
}
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
        font-size: .875rem;
    }

    .product-category {
        vertical-align: middle;
        line-height: 1;
        font-size: .875rem;
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
</style>`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/orderlist/orderlist.min.js"><\\/script>
        <script src="./ProductService.js"><\\/script>`,
                    content: `<div id="app">
            <div class="card">
                <p-orderlist v-model="products" list-style="height:auto" data-key="id">
                    <template #header>
                        List of Products
                    </template>
                    <template #item="slotProps">
                        <div class="product-item">
                            <div class="image-container">
                                <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.item.name" />
                            </div>
                            <div class="product-list-detail">
                                <h6 class="p-mb-2">{{slotProps.item.name}}</h6>
                                <i class="pi pi-tag product-category-icon"></i>
                                <span class="product-category">{{slotProps.item.category}}</span>
                            </div>
                            <div class="product-list-action">
                                <h6 class="p-mb-2">\${{slotProps.item.price}}</h6>
                                <span :class="'product-badge status-'+slotProps.item.inventoryStatus.toLowerCase()">{{slotProps.item.inventoryStatus}}</span>
                            </div>
                        </div>
                    </template>
                </p-orderlist>
            </div>
        </div>

        <script type="module">
        const { createApp, ref, onMounted } = Vue;

        const App = {
            setup() {
                onMounted(() => {
                    productService.value.getProductsSmall().then(data => products.value = data);
                })

                const products = ref(null);
                const productService = ref(new ProductService());

                return { products, productService }
            },
            components: {
                "p-orderlist": primevue.orderlist
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>

        <style>
        .card {
            background: #ffffff;
            padding: 2rem;
            box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
            border-radius: 4px;
            margin-bottom: 2rem;
        }
        .product-item {
            display: flex;
            align-items: center;
            padding: .5rem;
            width: 100%;
        }

        .product-item img {
            width: 75px;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
            margin-right: 1rem;
        }

        .product-item .product-list-detail {
            flex: 1 1 0;
        }

        .product-item .product-list-action {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }

        .product-item .product-category-icon {
            vertical-align: middle;
            margin-right: .5rem;
            font-size: .875rem;
        }

        .product-item .product-category {
            vertical-align: middle;
            line-height: 1;
            font-size: .875rem;
        }

        @media screen and (max-width: 576px) {
            .product-item {
                flex-wrap: wrap;
            }

            .product-item .image-container {
                width: 100%;
                text-align: center;
            }

            .product-item img {
                margin: 0 0 1rem 0;
                width: 100px;
            }
        }
        </style>`
                }
            }
        }
    }
}
</script>