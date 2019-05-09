<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
				<CodeHighlight lang="javascript">
import DataView from 'primevue/dataview';
				</CodeHighlight>

				<h3>Getting Started</h3>
				<p>DataView requires a collection of items as its value and one or more templates depending on the layout mode e.g. list and grid. Throughout the samples, a car interface having vin, brand, year and color properties are used to define an object to be displayed by the dataview. Cars are loaded by a CarService that connects to a server to fetch the cars.</p>
<CodeHighlight lang="js">
<template v-pre>
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
</template>
</CodeHighlight>

				<h3>Layouts</h3>
				<p>DataView has two layout modes; "list" and "grid" where a separate template is used to render an item in each mode. In list mode name of the template is "listItem" whereas
					in grid mode it is "gridItem".</p>
				<p>Note that there is no restriction to use both layouts at the same time, you may configure only one layout using the layout property with the corresponding template.</p>
<CodeHighlight>
<template v-pre>
&lt;template #listItem=&quot;slotProps&quot; &gt;
	&lt;div class=&quot;p-col-12 car-details&quot; style=&quot;padding: 2em; border-bottom: 1px solid #d9d9d9&quot;&gt;
		&lt;div class=&quot;p-grid&quot;&gt;
			&lt;div class=&quot;p-col-12 p-md-3&quot;&gt;
				&lt;img :src=&quot;'/demo/images/car/' + slotProps.data.brand + '.png'&quot; :alt=&quot;slotProps.data.brand&quot;/&gt;
			&lt;/div&gt;
			&lt;div class=&quot;p-col-12 p-md-8 car-data&quot;&gt;
				&lt;div&gt;Vin: &lt;b&gt;{{slotProps.data.vin}}&lt;/b&gt;&lt;/div&gt;
				&lt;div&gt;Year: &lt;b&gt;{{slotProps.data.year}}&lt;/b&gt;&lt;/div&gt;
				&lt;div&gt;Brand: &lt;b&gt;{{slotProps.data.brand}}&lt;/b&gt;&lt;/div&gt;
				&lt;div&gt;Color: &lt;b&gt;{{slotProps.data.color}}&lt;/b&gt;&lt;/div&gt;
			&lt;/div&gt;

			&lt;div class=&quot;p-col-12 p-md-1 search-icon&quot; style=&quot;margin-top: 40px&quot;&gt;
				&lt;Button icon=&quot;pi pi-search&quot;&gt;&lt;/Button&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/template&gt;
&lt;template #gridItem=&quot;slotProps&quot;&gt;
	&lt;div style=&quot;padding: .5em&quot; class=&quot;p-col-12 p-md-3&quot;&gt;
		&lt;Panel :header=&quot;slotProps.data.vin&quot; style=&quot;text-align: center&quot;&gt;
			&lt;img :src=&quot;'/demo/images/car/' + slotProps.data.brand + '.png'&quot; :alt=&quot;slotProps.data.brand&quot;/&gt;
			&lt;div class=&quot;car-detail&quot;&gt;{{slotProps.data.year}} - {{slotProps.data.color}}&lt;/div&gt;
			&lt;hr class=&quot;ui-widget-content&quot; style=&quot;border-top: 0&quot; /&gt;
			&lt;Button icon=&quot;pi pi-search&quot;&gt;&lt;/Button&gt;
		&lt;/Panel&gt;
	&lt;/div&gt;
&lt;/template&gt;
</template>
</CodeHighlight>

				<h3>Sections</h3>
				<p>Header and Footer are the two sections that are capable of displaying custom content.</p>
<CodeHighlight>
&lt;template #header&gt;List of Cars&lt;/template&gt;
</CodeHighlight>

				<h3>DataViewLayoutOptions</h3>
				<p>When both layout modes are enabled in DataView, a UI element would be necessary to let the user toggle between the view. DataViewLayoutOptions is a helper component
					to display a buttonset to choose the layout mode in DataView. Location of the DataViewLayoutOptions should be inside the DataView component. If you prefer a different UI element
					you can create your own that updates the layout property of the DataView.
				</p>
<CodeHighlight>
&lt;template #header&gt;
	&lt;DataViewLayoutOptions :layout=&quot;layout&quot; @change=&quot;changeMode&quot;&gt;&lt;/DataViewLayoutOptions&gt;
&lt;/template&gt;

&lt;template #footer&gt;
	&lt;DataViewLayoutOptions :layout=&quot;layout&quot; @change=&quot;changeMode&quot;&gt;&lt;/DataViewLayoutOptions&gt;
&lt;/template&gt;
</CodeHighlight>

				<h3>Paginator</h3>
				<p>Pagination is enabled by setting paginator property to true, rows attribute defines the number of rows per page and pageLinks specify the the number
					of page links to display. To customize the left and right side of the paginators, use "paginatorLeft" and "paginatorRight" templates.</p>
<CodeHighlight>
<template v-pre>
&lt;DataView :value=&quot;cars&quot; :layout=&quot;layout&quot; paginatorPosition='both' :paginator=&quot;true&quot; :rows=&quot;20&quot;&gt;
	&lt;template #paginatorLeft&gt;
		&lt;Button type=&quot;button&quot; icon=&quot;pi pi-refresh&quot;/&gt;
	&lt;/template&gt;
	&lt;template #paginatorRight&gt;
		&lt;Button type=&quot;button&quot; icon=&quot;pi pi-search&quot; /&gt;
	&lt;/template&gt;
	&lt;template #header&gt;
		List of Cars
	&lt;/template&gt;
	&lt;template #listItem=&quot;slotProps&quot; &gt;
		&lt;div&gt;Vin: &lt;b&gt;{{slotProps.data.vin}}&lt;/b&gt;&lt;/div&gt;
	&lt;/template&gt;
	&lt;template #gridItem=&quot;slotProps&quot;&gt;
		&lt;div&gt;Vin: &lt;b&gt;{{slotProps.data.vin}}&lt;/b&gt;&lt;/div&gt;
	&lt;/template&gt;
&lt;/DataView&gt;
</template>
</CodeHighlight>

				<h3>Sorting</h3>
				<p>sortField and sortOrder properties are available for sorting functionality, for flexibility there is no built-in UI available so that a custom UI can be used for the sorting element.
					Here is an example that uses a dropdown where simply updating the sortField-sortOrder bindings of the DataView initiates sorting.</p>
<CodeHighlight>
<template v-pre>
&lt;DataView :value=&quot;cars&quot; :layout=&quot;layout&quot; :sortOrder=&quot;sortOrder&quot; :sortField=&quot;sortField&quot;&gt;
	&lt;template #paginatorLeft&gt;
		&lt;Button type=&quot;button&quot; icon=&quot;pi pi-refresh&quot;/&gt;
	&lt;/template&gt;
	&lt;template #paginatorRight&gt;
		&lt;Button type=&quot;button&quot; icon=&quot;pi pi-search&quot; /&gt;
	&lt;/template&gt;
	&lt;template #header&gt;
		List of Cars
	&lt;/template&gt;
	&lt;template #listItem=&quot;slotProps&quot; &gt;
		&lt;div&gt;Vin: &lt;b&gt;{{slotProps.data.vin}}&lt;/b&gt;&lt;/div&gt;
	&lt;/template&gt;
	&lt;template #gridItem=&quot;slotProps&quot;&gt;
		&lt;div&gt;Vin: &lt;b&gt;{{slotProps.data.vin}}&lt;/b&gt;&lt;/div&gt;
	&lt;/template&gt;
&lt;/DataView&gt;
</template>
</CodeHighlight>

				<h3>Properties of DataViewLayoutOptions</h3>
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
							<td>layout</td>
							<td>string</td>
							<td>list</td>
							<td>Layout of the items, valid values are "list" and "grid".</td>
						</tr>
						</tbody>
					</table>
				</div>

				<h3>Events of DataViewLayoutOptions</h3>
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
							<td>change</td>
							<td>event.originalEvent:  browser event  <br/>
								event.value = layout mode e.g. "list" or "grid"
							</td>
							<td>Callback to invoke when layout mode is changed.</td>
						</tr>
						</tbody>
					</table>
				</div>

				<h3>Properties</h3>
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
							<td>null</td>
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
							<td>emptyMessage</td>
							<td>string</td>
							<td>No records found.</td>
							<td>Text to display when there is no data.</td>
						</tr>
						<tr>
							<td>sortField</td>
							<td>string</td>
							<td>null</td>
							<td>Name of the field to sort data by default.</td>
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

				<h3>Styling</h3>
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
						</tbody>
					</table>

					<h3>Dependencies</h3>
					<p>None.</p>
				</div>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primereact/tree/master/src/showcase/dataview" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;template&gt;
	&lt;div&gt;
		&lt;div class=&quot;content-section introduction&quot;&gt;
			&lt;div class=&quot;feature-intro&quot;&gt;
				&lt;h1&gt;DataView&lt;/h1&gt;
				&lt;p&gt;DataView displays data in grid or list layout with pagination and sorting features.&lt;/p&gt;
			&lt;/div&gt;
		&lt;/div&gt;

		&lt;div class=&quot;content-section implementation&quot;&gt;
			&lt;h3 class=&quot;first&quot;&gt;Default&lt;/h3&gt;
			&lt;DataView :value=&quot;cars&quot; :layout=&quot;layout&quot; paginatorPosition='both' :paginator=&quot;true&quot; :rows=&quot;20&quot; :sortOrder=&quot;sortOrder&quot; :sortField=&quot;sortField&quot;&gt;
				&lt;template #header&gt;
					&lt;div class=&quot;p-grid&quot;&gt;
						&lt;div class=&quot;p-col-6&quot; style=&quot;text-align: left&quot;&gt;
							&lt;Dropdown v-model=&quot;sortKey&quot; :options=&quot;sortOptions&quot; optionLabel=&quot;label&quot; placeholder=&quot;Sort By&quot; @change=&quot;onSortChange($event)&quot;/&gt;
						&lt;/div&gt;
						&lt;div class=&quot;p-col-6&quot; style=&quot;text-align: right&quot;&gt;
							&lt;DataViewLayoutOptions :layout=&quot;layout&quot; @change=&quot;changeMode&quot;&gt;&lt;/DataViewLayoutOptions&gt;
						&lt;/div&gt;
					&lt;/div&gt;
				&lt;/template&gt;
				&lt;template #listItem=&quot;slotProps&quot; &gt;
					&lt;div class=&quot;p-col-12 car-details&quot; style=&quot;padding: 2em; border-bottom: 1px solid #d9d9d9&quot;&gt;
						&lt;div class=&quot;p-grid&quot;&gt;
							&lt;div class=&quot;p-col-12 p-md-3&quot;&gt;
								&lt;img :src=&quot;'/demo/images/car/' + slotProps.data.brand + '.png'&quot; :alt=&quot;slotProps.data.brand&quot;/&gt;
							&lt;/div&gt;
							&lt;div class=&quot;p-col-12 p-md-8 car-data&quot;&gt;
								&lt;div&gt;Vin: &lt;b&gt;{{slotProps.data.vin}}&lt;/b&gt;&lt;/div&gt;
								&lt;div&gt;Year: &lt;b&gt;{{slotProps.data.year}}&lt;/b&gt;&lt;/div&gt;
								&lt;div&gt;Brand: &lt;b&gt;{{slotProps.data.brand}}&lt;/b&gt;&lt;/div&gt;
								&lt;div&gt;Color: &lt;b&gt;{{slotProps.data.color}}&lt;/b&gt;&lt;/div&gt;
							&lt;/div&gt;

							&lt;div class=&quot;p-col-12 p-md-1 search-icon&quot; style=&quot;margin-top: 40px&quot;&gt;
								&lt;Button icon=&quot;pi pi-search&quot;&gt;&lt;/Button&gt;
							&lt;/div&gt;
						&lt;/div&gt;
					&lt;/div&gt;
				&lt;/template&gt;
				&lt;template #gridItem=&quot;slotProps&quot;&gt;
					&lt;div style=&quot;padding: .5em&quot; class=&quot;p-col-12 p-md-3&quot;&gt;
						&lt;Panel :header=&quot;slotProps.data.vin&quot; style=&quot;text-align: center&quot;&gt;
							&lt;img :src=&quot;'/demo/images/car/' + slotProps.data.brand + '.png'&quot; :alt=&quot;slotProps.data.brand&quot;/&gt;
							&lt;div class=&quot;car-detail&quot;&gt;{{slotProps.data.year}} - {{slotProps.data.color}}&lt;/div&gt;
							&lt;hr class=&quot;ui-widget-content&quot; style=&quot;border-top: 0&quot; /&gt;
							&lt;Button icon=&quot;pi pi-search&quot;&gt;&lt;/Button&gt;
						&lt;/Panel&gt;
					&lt;/div&gt;
				&lt;/template&gt;
			&lt;/DataView&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/template&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import CarService from '../../service/CarService';

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
		changeMode(event) {
			this.layout = event.value;
		},
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

<CodeHighlight lang="css">
.p-dropdown {
	width: 12em;
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>