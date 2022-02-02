<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
				<CodeHighlight lang="javascript">
import DataView from 'primevue/dataview';
				</CodeHighlight>

                <h5>PrimeFlex</h5>
                <p>DataView utilizes PrimeFlex library so it needs to be installed before getting started. Refer to <a href="https://www.primefaces.org/primeflex/gridsystem">PrimeFlex</a> documentation for details.</p>

				<h5>Getting Started</h5>
				<p>DataView requires a collection of items as its value and one or more templates depending on the layout mode e.g. list and grid. Throughout the samples, a car interface having vin, brand, year and color properties are used to define an object to be displayed by the dataview. Cars are loaded by a CarService that connects to a server to fetch the cars.</p>
<CodeHighlight lang="js">
<template v-pre>
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
</CodeHighlight>

				<h5>Layouts</h5>
				<p>DataView has two layout modes; <i>list</i> and <i>grid</i> where a separate template is used to render an item in each mode. In list mode name of the template is "list" whereas
					in grid mode it is "grid".</p>
				<p>Note that there is no restriction to use both layouts at the same time, you may configure only one layout using the layout property with the corresponding template.</p>
<CodeHighlight>
<template v-pre>
&lt;template #list="slotProps"&gt;
	&lt;div class="col-12"&gt;
        &lt;div class="car-details"&gt;
            &lt;div&gt;
                &lt;img :src="'demo/images/car/' + slotProps.data.brand + '.png'" :alt="slotProps.data.brand"/&gt;
                &lt;div class="grid"&gt;
                    &lt;div class="col-12"&gt;Vin: &lt;b&gt;&#123;&#123;slotProps.data.vin&#125;&#125;&lt;/b&gt;&lt;/div&gt;
                    &lt;div class="col-12"&gt;Year: &lt;b&gt;&#123;&#123;slotProps.data.year&#125;&#125;&lt;/b&gt;&lt;/div&gt;
                    &lt;div class="col-12"&gt;Brand: &lt;b&gt;&#123;&#123;slotProps.data.brand&#125;&#125;&lt;/b&gt;&lt;/div&gt;
                    &lt;div class="col-12"&gt;Color: &lt;b&gt;&#123;&#123;slotProps.data.color&#125;&#125;&lt;/b&gt;&lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;Button icon="pi pi-search"&gt;&lt;/Button&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;
&lt;template #grid="slotProps"&gt;
	&lt;div style="padding: .5em" class="col-12 md:col-3"&gt;
		&lt;Panel :header="slotProps.data.vin" style="text-align: center"&gt;
			&lt;img :src="'demo/images/car/' + slotProps.data.brand + '.png'" :alt="slotProps.data.brand"/&gt;
			&lt;div class="car-detail"&gt;{{slotProps.data.year}} - {{slotProps.data.color}}&lt;/div&gt;
			&lt;Button icon="pi pi-search"&gt;&lt;/Button&gt;
		&lt;/Panel&gt;
	&lt;/div&gt;
&lt;/template&gt;
</template>
</CodeHighlight>

				<h5>Sections</h5>
				<p>Header and Footer are the two templates that are capable of displaying custom content.</p>
<CodeHighlight>
&lt;template #header&gt;Header Content&lt;/template&gt;
&lt;template #footer&gt;Footer Content&lt;/template&gt;
</CodeHighlight>

                <h5>Empty Message</h5>
                <p>Where there is no data to display, the optional <i>empty</i> template can be used to display information.</p>
<CodeHighlight>
&lt;template #empty&gt;No records found.&lt;/template&gt;
</CodeHighlight>

				<h5>DataViewLayoutOptions</h5>
				<p>When both layout modes are enabled in DataView, a UI element would be necessary to let the user toggle between the view. DataViewLayoutOptions is a helper component
					to display a buttonset to choose the layout mode in DataView. Location of the DataViewLayoutOptions should be inside the DataView component. If you prefer a different UI element
					you can create your own that updates the layout property of the DataView.
				</p>

<CodeHighlight>
<template v-pre>
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
</CodeHighlight>

				<h5>Paginator</h5>
				<p>Pagination is enabled by setting paginator property to true, rows attribute defines the number of rows per page and pageLinks specify the the number
					of page links to display. To customize the left and right side of the paginators, use <i>paginatorstart</i> and <i>paginatorend</i> templates.</p>
<CodeHighlight>
<template v-pre>
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
</CodeHighlight>

				<h5>Sorting</h5>
				<p><i>sortField</i> and <i>sortOrder</i> properties are available for the sorting functionality, for flexibility there is no built-in UI available so that a custom UI can be used for the sorting element.
					Here is an example that uses a dropdown where simply updating the sortField-sortOrder bindings of the DataView initiates sorting.</p>
<CodeHighlight>
<template v-pre>
&lt;DataView :value="cars" :layout="layout" :sortOrder="sortOrder" :sortField="sortField"&gt;
    &lt;template #header&gt;
        &lt;div class="grid grid-nogutter"&gt;
            &lt;div class="col-6" style="text-align: left"&gt;
                &lt;Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By" @change="onSortChange($event)"/&gt;
            &lt;/div&gt;
            &lt;div class="col-6" style="text-align: right"&gt;
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
</CodeHighlight>

<CodeHighlight lang="js">
<template v-pre>
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
</CodeHighlight>

                <h5>Lazy Loading</h5>
                <p>Lazy loading is useful to deal with huge datasets, in order to implement lazy loading use the pagination and utilize the <i>page</i> callback to load your data from the backend.
                Pagination in this case needs to display the logical number of records bound to the <i>totalRecords</i> property so that paginator can display itself according to the total records although you'd only
                need to load the data of the current page.</p>
<CodeHighlight>
<template v-pre>
&lt;DataView :value="cars" :layout="layout" :paginator="true" :rows="20" :lazy="true" @page="onPage($event)"&gt;
	&lt;template #list="slotProps" &gt;
		&lt;div&gt;Vin: &lt;b&gt;{{slotProps.data.vin}}&lt;/b&gt;&lt;/div&gt;
	&lt;/template&gt;
	&lt;template #grid="slotProps"&gt;
		&lt;div&gt;Vin: &lt;b&gt;{{slotProps.data.vin}}&lt;/b&gt;&lt;/div&gt;
	&lt;/template&gt;
&lt;/DataView&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="js">
<template v-pre>
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
</CodeHighlight>

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
                                <td>Template of the paginator.</td>
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

					<h5>Dependencies</h5>
					<p>None.</p>
				</div>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/2.x/src/showcase/dataview" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;DataView :value="products" :layout="layout" :paginator="true" :rows="9" :sortOrder="sortOrder" :sortField="sortField"&gt;
    &lt;template #header&gt;
        &lt;div class="grid grid-nogutter"&gt;
            &lt;div class="col-6" style="text-align: left"&gt;
                &lt;Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By Price" @change="onSortChange($event)"/&gt;
            &lt;/div&gt;
            &lt;div class="col-6" style="text-align: right"&gt;
                &lt;DataViewLayoutOptions v-model="layout" /&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/template&gt;

    &lt;template #list="slotProps"&gt;
        &lt;div class="col-12"&gt;
            &lt;div class="product-list-item"&gt;
                &lt;img :src="'demo/images/product/' + slotProps.data.image" :alt="slotProps.data.name"/&gt;
                &lt;div class="product-list-detail"&gt;
                    &lt;div class="product-name"&gt;{{slotProps.data.name}}&lt;/div&gt;
                    &lt;div class="product-description"&gt;{{slotProps.data.description}}&lt;/div&gt;
                    &lt;Rating :value="slotProps.data.rating" :readonly="true" :cancel="false"&gt;&lt;/Rating&gt;
                    &lt;i class="pi pi-tag product-category-icon"&gt;&lt;/i&gt;&lt;span class="product-category"&gt;{{slotProps.data.category}}&lt;/span&gt;
                &lt;/div&gt;
                &lt;div class="product-list-action"&gt;
                    &lt;span class="product-price"&gt;${{slotProps.data.price}}&lt;/span&gt;
                    &lt;Button icon="pi pi-shopping-cart" label="Add to Cart" :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"&gt;&lt;/Button&gt;
                    &lt;span :class="'product-badge status-'+slotProps.data.inventoryStatus.toLowerCase()"&gt;{{slotProps.data.inventoryStatus}}&lt;/span&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/template&gt;

    &lt;template #grid="slotProps"&gt;
        &lt;div class="col-12 md:col-4"&gt;
            &lt;div class="product-grid-item card"&gt;
                &lt;div class="product-grid-item-top"&gt;
                    &lt;div&gt;
                        &lt;i class="pi pi-tag product-category-icon"&gt;&lt;/i&gt;
                        &lt;span class="product-category"&gt;{{slotProps.data.category}}&lt;/span&gt;
                    &lt;/div&gt;
                    &lt;span :class="'product-badge status-'+slotProps.data.inventoryStatus.toLowerCase()"&gt;{{slotProps.data.inventoryStatus}}&lt;/span&gt;
                &lt;/div&gt;
                &lt;div class="product-grid-item-content"&gt;
                    &lt;img :src="'demo/images/product/' + slotProps.data.image" :alt="slotProps.data.name"/&gt;
                    &lt;div class="product-name"&gt;{{slotProps.data.name}}&lt;/div&gt;
                    &lt;div class="product-description"&gt;{{slotProps.data.description}}&lt;/div&gt;
                    &lt;Rating :value="slotProps.data.rating" :readonly="true" :cancel="false"&gt;&lt;/Rating&gt;
                &lt;/div&gt;
                &lt;div class="product-grid-item-bottom"&gt;
                    &lt;span class="product-price"&gt;${{slotProps.data.price}}&lt;/span&gt;
                    &lt;Button icon="pi pi-shopping-cart" :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"&gt;&lt;/Button&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/DataView&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import ProductService from '../../service/ProductService';

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
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>
