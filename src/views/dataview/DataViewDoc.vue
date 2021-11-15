<template>
	<AppDoc name="DataViewDemo" :sources="sources" :service="['ProductService']" :data="['products']" github="dataview/DataViewDemo.vue">
        <h5>Import via Module</h5>

<pre v-code.script><code>
import DataView from 'primevue/dataview';
				
</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/dataview/dataview.min.js"&gt;&lt;/script&gt;

</code></pre>

        <h5>PrimeFlex</h5>
        <p>DataView utilizes PrimeFlex library so it needs to be installed before getting started. Refer to <router-link to="/grid">FlexGrid</router-link> documentation for details.</p>

		<h5>Getting Started</h5>
		<p>DataView requires a collection of items as its value and one or more templates depending on the layout mode e.g. list and grid. Throughout the samples, a car interface having vin, brand, year and color properties are used to define an object to be displayed by the dataview. Cars are loaded by a CarService that connects to a server to fetch the cars.</p>
<pre v-code.script><code><template v-pre>
export default {
    data() {
        return {
            cars: null,
        }
    },
    carService: null,
    created() {
        this.carService = new CarService();
    },
    mounted() {
        this.carService.getCarsLarge().then(data => this.cars = data);
    }
}
</template>
</code></pre>

		<h5>Layouts</h5>
		<p>DataView has two layout modes; <i>list</i> and <i>grid</i> where a separate template is used to render an item in each mode. In list mode name of the template is "list" whereas
			in grid mode it is "grid".</p>
		<p>Note that there is no restriction to use both layouts at the same time, you may configure only one layout using the layout property with the corresponding template.</p>
<pre v-code><code><template v-pre>
&lt;template #list="slotProps"&gt;
	&lt;div class="p-col-12"&gt;
        &lt;div class="car-details"&gt;
            &lt;div&gt;
                &lt;img :src="'demo/images/car/' + slotProps.data.brand + '.png'" :alt="slotProps.data.brand"/&gt;
                &lt;div class="p-grid"&gt;
                    &lt;div class="p-col-12"&gt;Vin: &lt;b&gt;&#123;&#123;slotProps.data.vin&#125;&#125;&lt;/b&gt;&lt;/div&gt;
                    &lt;div class="p-col-12"&gt;Year: &lt;b&gt;&#123;&#123;slotProps.data.year&#125;&#125;&lt;/b&gt;&lt;/div&gt;
                    &lt;div class="p-col-12"&gt;Brand: &lt;b&gt;&#123;&#123;slotProps.data.brand&#125;&#125;&lt;/b&gt;&lt;/div&gt;
                    &lt;div class="p-col-12"&gt;Color: &lt;b&gt;&#123;&#123;slotProps.data.color&#125;&#125;&lt;/b&gt;&lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;Button icon="pi pi-search"&gt;&lt;/Button&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;
&lt;template #grid="slotProps"&gt;
	&lt;div style="padding: .5em" class="p-col-12 p-md-3"&gt;
		&lt;Panel :header="slotProps.data.vin" style="text-align: center"&gt;
			&lt;img :src="'demo/images/car/' + slotProps.data.brand + '.png'" :alt="slotProps.data.brand"/&gt;
			&lt;div class="car-detail"&gt;{{slotProps.data.year}} - {{slotProps.data.color}}&lt;/div&gt;
			&lt;Button icon="pi pi-search"&gt;&lt;/Button&gt;
		&lt;/Panel&gt;
	&lt;/div&gt;
&lt;/template&gt;
</template>
</code></pre>

		<h5>Sections</h5>
		<p>Header and Footer are the two templates that are capable of displaying custom content.</p>
<pre v-code><code>
&lt;template #header&gt;Header Content&lt;/template&gt;
&lt;template #footer&gt;Footer Content&lt;/template&gt;

</code></pre>

        <h5>Empty Message</h5>
        <p>Where there is no data to display, the optional <i>empty</i> template can be used to display information.</p>
<pre v-code><code>
&lt;template #empty&gt;No records found.&lt;/template&gt;

</code></pre>

		<h5>DataViewLayoutOptions</h5>
		<p>When both layout modes are enabled in DataView, a UI element would be necessary to let the user toggle between the view. DataViewLayoutOptions is a helper component
			to display a buttonset to choose the layout mode in DataView. Location of the DataViewLayoutOptions should be inside the DataView component. If you prefer a different UI element
			you can create your own that updates the layout property of the DataView.
		</p>

<pre v-code><code><template v-pre>
&lt;DataView :value="cars" :layout="layout"&gt;
	&lt;template #header&gt;
		&lt;DataViewLayoutOptions v-model="layout"&gt;&lt;/DataViewLayoutOptions&gt;
	&lt;/template&gt;
	&lt;template #list="slotProps" &gt;
		&lt;div&gt;Vin: &lt;b&gt;{{slotProps.data.vin}}&lt;/b&gt;&lt;/div&gt;
	&lt;/template&gt;
	&lt;template #grid="slotProps"&gt;
		&lt;div&gt;Vin: &lt;b&gt;{{slotProps.data.vin}}&lt;/b&gt;&lt;/div&gt;
	&lt;/template&gt;
&lt;/DataView&gt;
</template>
</code></pre>

		<h5>Paginator</h5>
		<p>Pagination is enabled by setting paginator property to true, rows attribute defines the number of rows per page and pageLinks specify the the number
			of page links to display. To customize the left and right side of the paginators, use <i>paginatorstart</i> and <i>paginatorend</i> templates.</p>
<pre v-code><code><template v-pre>
&lt;DataView :value="cars" :layout="layout" paginatorPosition="both" :paginator="true" :rows="20"&gt;
	&lt;template #paginatorstart&gt;
		&lt;Button type="button" icon="pi pi-refresh"/&gt;
	&lt;/template&gt;
	&lt;template #paginatorend&gt;
		&lt;Button type="button" icon="pi pi-search" /&gt;
	&lt;/template&gt;
	&lt;template #list="slotProps" &gt;
		&lt;div&gt;Vin: &lt;b&gt;{{slotProps.data.vin}}&lt;/b&gt;&lt;/div&gt;
	&lt;/template&gt;
	&lt;template #grid="slotProps"&gt;
		&lt;div&gt;Vin: &lt;b&gt;{{slotProps.data.vin}}&lt;/b&gt;&lt;/div&gt;
	&lt;/template&gt;
&lt;/DataView&gt;
</template>
</code></pre>

		<h5>Sorting</h5>
		<p><i>sortField</i> and <i>sortOrder</i> properties are available for the sorting functionality, for flexibility there is no built-in UI available so that a custom UI can be used for the sorting element.
			Here is an example that uses a dropdown where simply updating the sortField-sortOrder bindings of the DataView initiates sorting.</p>
<pre v-code><code><template v-pre>
&lt;DataView :value="cars" :layout="layout" :sortOrder="sortOrder" :sortField="sortField"&gt;
    &lt;template #header&gt;
        &lt;div class="p-grid p-nogutter"&gt;
            &lt;div class="p-col-6" style="text-align: left"&gt;
                &lt;Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By" @change="onSortChange($event)"/&gt;
            &lt;/div&gt;
            &lt;div class="p-col-6" style="text-align: right"&gt;
                &lt;DataViewLayoutOptions v-model="layout" /&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/template&gt;
	&lt;template #list="slotProps" &gt;
		&lt;div&gt;Vin: &lt;b&gt;{{slotProps.data.vin}}&lt;/b&gt;&lt;/div&gt;
	&lt;/template&gt;
	&lt;template #grid="slotProps"&gt;
		&lt;div&gt;Vin: &lt;b&gt;{{slotProps.data.vin}}&lt;/b&gt;&lt;/div&gt;
	&lt;/template&gt;
&lt;/DataView&gt;
</template>
</code></pre>

<pre v-code.script><code><template v-pre>
export default {
    data() {
        return {
            cars: null,
            layout: 'list',
            sortKey: null,
            sortOrder: null,
            sortField: null,
            sortOptions: [
                {label: 'Newest First', value: '!year'},
                {label: 'Oldest First', value: 'year'},
                {label: 'Brand', value: 'brand'}
            ]
        }
    },
    carService: null,
    created() {
        this.carService = new CarService();
    },
    mounted() {
        this.carService.getCarsLarge().then(data => this.cars = data);
    },
    methods: {
        onSortChange(event){
            const value = event.value.value;
            const sortValue = event.value;

            if (value.indexOf('!') === 0) {
                this.sortOrder = -1;
                this.sortField = value.substring(1, value.length);
                this.sortKey = sortValue;
            }
            else {
                this.sortOrder = 1;
                this.sortField = value;
                this.sortKey = sortValue;
            }
        }
    }
}
</template>
</code></pre>

        <h5>Lazy Loading</h5>
        <p>Lazy loading is useful to deal with huge datasets, in order to implement lazy loading use the pagination and utilize the <i>page</i> callback to load your data from the backend.
        Pagination in this case needs to display the logical number of records bound to the <i>totalRecords</i> property so that paginator can display itself according to the total records although you'd only
        need to load the data of the current page.</p>
<pre v-code><code><template v-pre>
&lt;DataView :value="cars" :layout="layout" :paginator="true" :rows="20" :lazy="true" @page="onPage($event)"&gt;
	&lt;template #list="slotProps" &gt;
		&lt;div&gt;Vin: &lt;b&gt;{{slotProps.data.vin}}&lt;/b&gt;&lt;/div&gt;
	&lt;/template&gt;
	&lt;template #grid="slotProps"&gt;
		&lt;div&gt;Vin: &lt;b&gt;{{slotProps.data.vin}}&lt;/b&gt;&lt;/div&gt;
	&lt;/template&gt;
&lt;/DataView&gt;
</template>
</code></pre>

<pre v-code.script><code><template v-pre>
export default {
    data() {
        return {
            cars: null,
            layout: 'list'
        }
    },
    carService: null,
    mounted() {
        this.cars = //initialize the first chunk of data between 0 and 20
    },
    methods: {
        onPage(event){
            this.cars = //load the data between (event.first) and (event.first + event.rows) from a remote datasource
        }
    }
}
</template>
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
                        <td>value</td>
                        <td>array</td>
                        <td>null</td>
                        <td>An array of objects to display.</td>
                    </tr>
                    <tr>
                        <td>layout</td>
                        <td>string</td>
                        <td>list</td>
                        <td>Layout of the items, valid values are "list" and "grid".</td>
                    </tr>
                    <tr>
                        <td>rows</td>
                        <td>number</td>
                        <td>0</td>
                        <td>Number of rows to display per page.</td>
                    </tr>
                    <tr>
                        <td>first</td>
                        <td>number</td>
                        <td>0</td>
                        <td>Index of the first record to render.</td>
                    </tr>
                    <tr>
                        <td>totalRecords</td>
                        <td>number</td>
                        <td>null</td>
                        <td>Number of total records, defaults to length of value when not defined.</td>
                    </tr>
                    <tr>
                        <td>paginator</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When specified as true, enables the pagination.</td>
                    </tr>
                    <tr>
                        <td>paginatorPosition</td>
                        <td>string</td>
                        <td>bottom</td>
                        <td>Position of the paginator, options are "top","bottom" or "both".</td>
                    </tr>
                    <tr>
                        <td>alwaysShowPaginator</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Whether to show it even there is only one page.</td>
                    </tr>
                    <tr>
                        <td>paginatorTemplate</td>
                        <td>string</td>
                        <td>FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown</td>
                        <td>Template of the paginator. See the <router-link to="/paginator">Paginator</router-link> for all available options.</td>
                    </tr>
                    <tr>
                        <td>pageLinkSize</td>
                        <td>number</td>
                        <td>5</td>
                        <td>Number of page links to display.</td>
                    </tr>
                    <tr>
                        <td>rowsPerPageOptions</td>
                        <td>array</td>
                        <td>null</td>
                        <td>Array of integer values to display inside rows per page dropdown.</td>
                    </tr>
                    <tr>
                        <td>currentPageReportTemplate</td>
                        <td>string</td>
                        <td>({currentPage} of {totalPages})</td>
                        <td>Template of the current page report element.</td>
                    </tr>
                    <tr>
                        <td>sortField</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Property name or a getter function of data to use in sorting by default.</td>
                    </tr>
                    <tr>
                        <td>sortOrder</td>
                        <td>number</td>
                        <td>null</td>
                        <td>Order to sort the data by default.</td>
                    </tr>
                    <tr>
                        <td>lazy</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Defines if data is loaded and interacted with in lazy manner.</td>
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
                        <td>page</td>
                        <td>event.page: New page number <br/>
                            event.first: Index of first record <br/>
                            event.rows: Number of rows to display in new page <br/>
                            event.pageCount: Total number of pages
                        </td>
                        <td>Callback to invoke when page changes, the event object contains information about the new state.</td>
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
                        <td>paginatorstart</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>paginatorend</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>list</td>
                        <td>data: Value of the component <br />
                            index: Index of the list</td>
                    </tr>
                    <tr>
                        <td>grid</td>
                        <td>data: Value of the component <br />
                            index: Index of the grid</td>
                    </tr>
                    <tr>
                        <td>empty</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>footer</td>
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
                        <td>p-dataview</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-dataview-list</td>
                        <td>Container element in list layout.</td>
                    </tr>
                    <tr>
                        <td>p-dataview-grid</td>
                        <td>Container element in grid layout.</td>
                    </tr>
                    <tr>
                        <td>p-dataview-header</td>
                        <td>Header section.</td>
                    </tr>
                    <tr>
                        <td>p-dataview-footer</td>
                        <td>Footer section.</td>
                    </tr>
                    <tr>
                        <td>p-dataview-content</td>
                        <td>Container of items.</td>
                    </tr>
                     <tr>
                        <td>p-dataview-emptymessage</td>
                        <td>Empty message element.</td>
                    </tr>
				</tbody>
			</table>
        </div>

		<h5>Dependencies</h5>
        <p>PrimeFlex 2.0.0.</p>
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
        <DataView :value="products" :layout="layout" :paginator="true" :rows="9" :sortOrder="sortOrder" :sortField="sortField">
			<template #header>
                <div class="p-grid p-nogutter">
                    <div class="p-col-6" style="text-align: left">
                        <Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By Price" @change="onSortChange($event)"/>
                    </div>
                    <div class="p-col-6" style="text-align: right">
                        <DataViewLayoutOptions v-model="layout" />
                    </div>
                </div>
			</template>

			<template #list="slotProps">
				<div class="p-col-12">
					<div class="product-list-item">
						<img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.name"/>
						<div class="product-list-detail">
							<div class="product-name">{{slotProps.data.name}}</div>
							<div class="product-description">{{slotProps.data.description}}</div>
							<Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false"></Rating>
							<i class="pi pi-tag product-category-icon"></i><span class="product-category">{{slotProps.data.category}}</span>
						</div>
						<div class="product-list-action">
							<span class="product-price">\${{slotProps.data.price}}</span>
							<Button icon="pi pi-shopping-cart" label="Add to Cart" :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
							<span :class="'product-badge status-'+slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>
						</div>
					</div>
				</div>
			</template>

			<template #grid="slotProps">
				<div class="p-col-12 p-md-4">
					<div class="product-grid-item card">
						<div class="product-grid-item-top">
							<div>
								<i class="pi pi-tag product-category-icon"></i>
								<span class="product-category">{{slotProps.data.category}}</span>
							</div>
							<span :class="'product-badge status-'+slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>
						</div>
						<div class="product-grid-item-content">
							<img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.name"/>
							<div class="product-name">{{slotProps.data.name}}</div>
							<div class="product-description">{{slotProps.data.description}}</div>
							<Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false"></Rating>
						</div>
						<div class="product-grid-item-bottom">
							<span class="product-price">\${{slotProps.data.price}}</span>
							<Button icon="pi pi-shopping-cart" :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
						</div>
					</div>
				</div>
			</template>
		</DataView>
	</div>
</template>

<script>
import ProductService from './service/ProductService';

export default {
    data() {
        return {
            products: null,
            layout: 'grid',
            sortKey: null,
            sortOrder: null,
            sortField: null,
            sortOptions: [
                {label: 'Price High to Low', value: '!price'},
                {label: 'Price Low to High', value: 'price'},
            ]
        }
    },
    productService: null,
    created() {
        this.productService = new ProductService();
    },
    mounted() {
        this.productService.getProducts().then(data => this.products = data);
    },
    methods: {
        onSortChange(event){
            const value = event.value.value;
            const sortValue = event.value;

            if (value.indexOf('!') === 0) {
                this.sortOrder = -1;
                this.sortField = value.substring(1, value.length);
                this.sortKey = sortValue;
            }
            else {
                this.sortOrder = 1;
                this.sortField = value;
                this.sortKey = sortValue;
            }
        }
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
.p-dropdown {
    width: 14rem;
    font-weight: normal;
}

.product-name {
	font-size: 1.5rem;
	font-weight: 700;
}

.product-description {
	margin: 0 0 1rem 0;
}

.product-category-icon {
	vertical-align: middle;
	margin-right: .5rem;
}

.product-category {
	font-weight: 600;
	vertical-align: middle;
}

::v-deep(.product-list-item) {
	display: flex;
	align-items: center;
	padding: 1rem;
	width: 100%;

	img {
		width: 50px;
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
		margin-right: 2rem;
	}

	.product-list-detail {
		flex: 1 1 0;
	}

	.p-rating {
		margin: 0 0 .5rem 0;
	}

	.product-price {
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: .5rem;
		align-self: flex-end;
	}

	.product-list-action {
		display: flex;
		flex-direction: column;
	}

	.p-button {
		margin-bottom: .5rem;
	}
}

::v-deep(.product-grid-item) {
	margin: .5rem;
	border: 1px solid var(--surface-border);

	.product-grid-item-top,
	.product-grid-item-bottom {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	img {
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
		margin: 2rem 0;
	}

	.product-grid-item-content {
		text-align: center;
	}

	.product-price {
		font-size: 1.5rem;
		font-weight: 600;
	}
}

@media screen and (max-width: 576px) {
	.product-list-item {
		flex-direction: column;
		align-items: center;

		img {
			margin: 2rem 0;
		}

		.product-list-detail {
			text-align: center;
		}

		.product-price {
			align-self: center;
		}

		.product-list-action {
			display: flex;
			flex-direction: column;
		}

		.product-list-action {
			margin-top: 2rem;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			width: 100%;
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
        <DataView :value="products" :layout="layout" :paginator="true" :rows="9" :sortOrder="sortOrder" :sortField="sortField">
			<template #header>
                <div class="p-grid p-nogutter">
                    <div class="p-col-6" style="text-align: left">
                        <Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By Price" @change="onSortChange($event)"/>
                    </div>
                    <div class="p-col-6" style="text-align: right">
                        <DataViewLayoutOptions v-model="layout" />
                    </div>
                </div>
			</template>

			<template #list="slotProps">
				<div class="p-col-12">
					<div class="product-list-item">
						<img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.name"/>
						<div class="product-list-detail">
							<div class="product-name">{{slotProps.data.name}}</div>
							<div class="product-description">{{slotProps.data.description}}</div>
							<Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false"></Rating>
							<i class="pi pi-tag product-category-icon"></i><span class="product-category">{{slotProps.data.category}}</span>
						</div>
						<div class="product-list-action">
							<span class="product-price">\${{slotProps.data.price}}</span>
							<Button icon="pi pi-shopping-cart" label="Add to Cart" :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
							<span :class="'product-badge status-'+slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>
						</div>
					</div>
				</div>
			</template>

			<template #grid="slotProps">
				<div class="p-col-12 p-md-4">
					<div class="product-grid-item card">
						<div class="product-grid-item-top">
							<div>
								<i class="pi pi-tag product-category-icon"></i>
								<span class="product-category">{{slotProps.data.category}}</span>
							</div>
							<span :class="'product-badge status-'+slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>
						</div>
						<div class="product-grid-item-content">
							<img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.name"/>
							<div class="product-name">{{slotProps.data.name}}</div>
							<div class="product-description">{{slotProps.data.description}}</div>
							<Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false"></Rating>
						</div>
						<div class="product-grid-item-bottom">
							<span class="product-price">\${{slotProps.data.price}}</span>
							<Button icon="pi pi-shopping-cart" :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
						</div>
					</div>
				</div>
			</template>
		</DataView>
	</div>
</template>

<script>
import { ref, onMounted } from "vue";
import ProductService from './service/ProductService';

export default {
    setup() {
        onMounted(() => {
            productService.value.getProducts().then(data => products.value = data);
        })

        const products = ref();
        const productService = ref(new ProductService());
        const layout = ref('grid');
        const sortKey = ref();
        const sortOrder = ref();
        const sortField = ref();
        const sortOptions = ref([
            {label: 'Price High to Low', value: '!price'},
            {label: 'Price Low to High', value: 'price'},
        ]);
        const onSortChange = (event) => {
            const value = event.value.value;
            const sortValue = event.value;

            if (value.indexOf('!') === 0) {
                sortOrder.value = -1;
                sortField.value = value.substring(1, value.length);
                sortKey.value = sortValue;
            }
            else {
                sortOrder.value = 1;
                sortField.value = value;
                sortKey.value = sortValue;
            }
        };
        return {
            products, layout, sortKey, sortOrder, sortField, sortOptions, onSortChange
        }
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
.p-dropdown {
    width: 14rem;
    font-weight: normal;
}

.product-name {
	font-size: 1.5rem;
	font-weight: 700;
}

.product-description {
	margin: 0 0 1rem 0;
}

.product-category-icon {
	vertical-align: middle;
	margin-right: .5rem;
}

.product-category {
	font-weight: 600;
	vertical-align: middle;
}

::v-deep(.product-list-item) {
	display: flex;
	align-items: center;
	padding: 1rem;
	width: 100%;

	img {
		width: 50px;
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
		margin-right: 2rem;
	}

	.product-list-detail {
		flex: 1 1 0;
	}

	.p-rating {
		margin: 0 0 .5rem 0;
	}

	.product-price {
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: .5rem;
		align-self: flex-end;
	}

	.product-list-action {
		display: flex;
		flex-direction: column;
	}

	.p-button {
		margin-bottom: .5rem;
	}
}

::v-deep(.product-grid-item) {
	margin: .5rem;
	border: 1px solid var(--surface-border);

	.product-grid-item-top,
	.product-grid-item-bottom {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	img {
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
		margin: 2rem 0;
	}

	.product-grid-item-content {
		text-align: center;
	}

	.product-price {
		font-size: 1.5rem;
		font-weight: 600;
	}
}

@media screen and (max-width: 576px) {
	.product-list-item {
		flex-direction: column;
		align-items: center;

		img {
			margin: 2rem 0;
		}

		.product-list-detail {
			text-align: center;
		}

		.product-price {
			align-self: center;
		}

		.product-list-action {
			display: flex;
			flex-direction: column;
		}

		.product-list-action {
			margin-top: 2rem;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			width: 100%;
		}
	}
}
</style>`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/dataview/dataview.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/dataviewlayoutoptions/dataviewlayoutoptions.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/dropdown/dropdown.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/rating/rating.min.js"><\\/script>
        <script src="./ProductService.js"><\\/script>`,
                    content: `<div id="app">
            <div class="card">
                <p-dataview :value="products" :layout="layout" :paginator="true" :rows="9" :sort-order="sortOrder" :sort-field="sortField">
                    <template #header>
                        <div class="p-grid p-nogutter">
                            <div class="p-col-6" style="text-align: left">
                                <p-dropdown v-model="sortKey" :options="sortOptions" option-label="label" placeholder="Sort By Price" @change="onSortChange($event)"></p-dropdown>
                            </div>
                            <div class="p-col-6" style="text-align: right">
                                <p-dataviewlayoutoptions v-model="layout"></p-dataviewlayoutoptions>
                            </div>
                        </div>
                    </template>

                    <template #list="slotProps">
                        <div class="p-col-12">
                            <div class="product-list-item">
                                <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.name"/>
                                <div class="product-list-detail">
                                    <div class="product-name">{{slotProps.data.name}}</div>
                                    <div class="product-description">{{slotProps.data.description}}</div>
                                    <p-rating :model-value="slotProps.data.rating" :readonly="true" :cancel="false"></p-rating>
                                    <i class="pi pi-tag product-category-icon"></i><span class="product-category">{{slotProps.data.category}}</span>
                                </div>
                                <div class="product-list-action">
                                    <span class="product-price">\${{slotProps.data.price}}</span>
                                    <p-button icon="pi pi-shopping-cart" label="Add to Cart" :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></p-button>
                                    <span :class="'product-badge status-'+slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>
                                </div>
                            </div>
                        </div>
                    </template>

                    <template #grid="slotProps">
                        <div class="p-col-12 p-md-4">
                            <div class="product-grid-item card">
                                <div class="product-grid-item-top">
                                    <div>
                                        <i class="pi pi-tag product-category-icon"></i>
                                        <span class="product-category">{{slotProps.data.category}}</span>
                                    </div>
                                    <span :class="'product-badge status-'+slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>
                                </div>
                                <div class="product-grid-item-content">
                                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.name"/>
                                    <div class="product-name">{{slotProps.data.name}}</div>
                                    <div class="product-description">{{slotProps.data.description}}</div>
                                    <p-rating :model-value="slotProps.data.rating" :readonly="true" :cancel="false"></p-rating>
                                </div>
                                <div class="product-grid-item-bottom">
                                    <span class="product-price">\${{slotProps.data.price}}</span>
                                    <p-button icon="pi pi-shopping-cart" :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></p-button>
                                </div>
                            </div>
                        </div>
                    </template>
                </p-dataview>
            </div>
        </div>

        <script type="module">
        const { createApp, ref, onMounted } = Vue;

        const App = {
            setup() {
                onMounted(() => {
                    productService.value.getProducts().then(data => products.value = data);
                })

                const products = ref();
                const productService = ref(new ProductService());
                const layout = ref('grid');
                const sortKey = ref();
                const sortOrder = ref();
                const sortField = ref();
                const sortOptions = ref([
                    {label: 'Price High to Low', value: '!price'},
                    {label: 'Price Low to High', value: 'price'},
                ]);
                const onSortChange = (event) => {
                    const value = event.value.value;
                    const sortValue = event.value;

                    if (value.indexOf('!') === 0) {
                        sortOrder.value = -1;
                        sortField.value = value.substring(1, value.length);
                        sortKey.value = sortValue;
                    }
                    else {
                        sortOrder.value = 1;
                        sortField.value = value;
                        sortKey.value = sortValue;
                    }
                };
                return {
                    products, layout, sortKey, sortOrder, sortField, sortOptions, onSortChange
                }
            },
            components: {
                "p-dataview": primevue.dataview,
                "p-dataviewlayoutoptions": primevue.dataviewlayoutoptions,
                "p-dropdown": primevue.dropdown,
                "p-rating": primevue.rating,
                "p-button": primevue.button
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
        .p-dropdown {
            width: 14rem;
            font-weight: normal;
        }

        .product-name {
            font-size: 1.5rem;
            font-weight: 700;
        }

        .product-description {
            margin: 0 0 1rem 0;
        }

        .product-category-icon {
            vertical-align: middle;
            margin-right: .5rem;
        }

        .product-category {
            font-weight: 600;
            vertical-align: middle;
        }

        .product-list-item {
            display: flex;
            align-items: center;
            padding: 1rem;
            width: 100%;
        }

        .product-list-item img {
            width: 50px;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
            margin-right: 2rem;
        }

        .product-list-item .product-list-detail {
            flex: 1 1 0;
        }

        .product-list-item .p-rating {
            margin: 0 0 .5rem 0;
        }

        .product-list-item .product-price {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: .5rem;
            align-self: flex-end;
        }

        .product-list-item .product-list-action {
            display: flex;
            flex-direction: column;
        }

        .product-list-item .p-button {
            margin-bottom: .5rem;
        }

        .product-grid-item {
            margin: .5rem;
            border: 1px solid var(--surface-border);
        }

        .product-grid-item .product-grid-item-top,
        .product-grid-item .product-grid-item-bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .product-grid-item img {
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
            margin: 2rem 0;
        }

        .product-grid-item .product-grid-item-content {
            text-align: center;
        }

        .product-grid-item .product-price {
            font-size: 1.5rem;
            font-weight: 600;
        }

        @media screen and (max-width: 576px) {
            .product-list-item {
                flex-direction: column;
                align-items: center;
            }

            .product-list-item .product-list-item img {
                margin: 2rem 0;
            }

            .product-list-item .product-list-detail {
                text-align: center;
            }

            .product-list-item .product-price {
                align-self: center;
            }

            .product-list-item .product-list-action {
                display: flex;
                flex-direction: column;
            }

            .product-list-item .product-list-action {
                margin-top: 2rem;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                width: 100%;
            }
        }
        </style>
`
                }
            }
        }
    }
}
</script>