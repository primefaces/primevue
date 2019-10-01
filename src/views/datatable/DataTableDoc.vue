<template>
    <div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
				<CodeHighlight lang="javascript">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
				</CodeHighlight>

                <h3>Getting Started</h3>
                <p>DataTable requires a value as an array of objects and columns defined with Column component. Throughout the samples, a car interface having vin, brand, year and color properties is used to define an object to be displayed by the datatable.
                    Cars are loaded by a CarService that connects to a server to fetch the cars with a axios. Note that this is only for demo purposes, DataTable does not have any restrictions on how the data is provided.</p>

                <CodeHighlight lang="javascript">
import axios from 'axios'

export default class CarService {

	getCarsSmall() {
		return axios.get('demo/data/cars-small.json').then(res => res.data.data);
	}

	getCarsMedium() {
		return axios.get('demo/data/cars-medium.json').then(res => res.data.data);
	}

	getCarsLarge() {
		return axios.get('demo/data/cars-large.json').then(res => res.data.data);
	}
}
				</CodeHighlight>

                <p>Example response;</p>
                <CodeHighlight lang="javascript">
{
    "data": [
        {"brand": "Volkswagen", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
        {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
        {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
        {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
        {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
        {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
        {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
        {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34"},
        {"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5"},
        {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"}
    ]
}
                </CodeHighlight>

                <p>Following sample datatable has 4 columns and retrieves the data from a service on mount.</p>
<CodeHighlight>
<template v-pre>
&lt;DataTable :value="cars"&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
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
    mounted() {
        this.carService.getCarsSmall().then(data => this.cars = data);
    }
}
</CodeHighlight>

                <h3>Dynamic Columns</h3>
                <p>Column components can be dynamically generated using a v-for as well.</p>
<CodeHighlight>
<template v-pre>
&lt;DataTable :value="cars"&gt;
    &lt;Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import CarService from '../../service/CarService';

export default {
    data() {
        return {
            columns: null,
            cars: null
        }
    },
    carService: null,
    created() {
        this.carService = new CarService();

        this.columns = [
            {field: 'vin', header: 'Vin'},
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'}
        ];
    },
    mounted() {
        this.carService.getCarsSmall().then(data => this.cars = data);
    }
}
</CodeHighlight>

                <h3>Column Component Properties utilized by the DataTable</h3>
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
                                <td>columnKey</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Identifier of a column if field property is not defined.</td>
                            </tr>
                            <tr>
                                <td>field</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Property of a row data.</td>
                            </tr>
                            <tr>
                                <td>sortField</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Property of a row data used for sorting, defaults to field.</td>
                            </tr>
                            <tr>
                                <td>sortable</td>
                                <td>any</td>
                                <td>false</td>
                                <td>Defines if a column is sortable.</td>
                            </tr>
                            <tr>
                                <td>header</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Header content of the column.</td>
                            </tr>
                            <tr>
                                <td>footer</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Footer content of the column.</td>
                            </tr>
                        <tr>
                                <td>headerStyle</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the column.</td>
                            </tr>
                            <tr>
                                <td>headerClass</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the column.</td>
                            </tr>
                            <tr>
                                <td>bodyStyle</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the column.</td>
                            </tr>
                            <tr>
                                <td>bodyClass</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the column.</td>
                            </tr>
                            <tr>
                                <td>footerStyle</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the column.</td>
                            </tr>
                            <tr>
                                <td>footerClass</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the column.</td>
                            </tr>
                            <tr>
                                <td>filterMatchMode</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Defines filterMatchMode; "startsWith", "contains", "endsWidth", "equals", "notEquals", "in" and "custom".</td>
                            </tr>
                            <tr>
                                <td>excludeGlobalFilter</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether to exclude from global filtering or not.</td>
                            </tr>
                            <tr>
                                <td>selectionMode</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Defines column based selection mode, options are "single" and "multiple".</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>Auto Layout</h3>
                <p>Default table-layout is fixed meaning the cell widths do not depend on their content. If you require cells to scale based on their contents set <i>autoLayout</i> property to true. Note that Scrollable and/or Resizable tables do not support auto layout due to technical limitations.</p>

                <h3>Templating</h3>
                <p>Field data of a corresponding row is displayed as the cell content by default, this can be customized using a <i>body</i> template where current row data and column properties are passed via the slot props.
                    On the other hand, <i>header</i> and <i>footer</i> sections of a column can either be defined with the properties or the templates. Similarly DataTable itself also provides header and footer properties along with the templates for the main header and footer of the table.</p>

                <CodeHighlight>
<template v-pre>
&lt;DataTable :value="cars"&gt;
    &lt;template #header&gt;
        &lt;div&gt;
            &lt;Button icon="pi pi-refresh" style="float: left"/&gt;
            List of Cars
        &lt;/div&gt;
    &lt;/template&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;
        &lt;template #body="slotProps"&gt;
            &lt;img :src="'demo/images/car/' + slotProps.data.brand + '.png'" :alt="slotProps.data.brand"  width="48px"/&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
    &lt;Column headerStyle="width: 8em" bodyStyle="text-align: center"&gt;
        &lt;template #header&gt;
            &lt;Button type="button" icon="pi pi-cog"&gt;&lt;/Button&gt;
        &lt;/template&gt;
        &lt;template #body="slotProps"&gt;
            &lt;Button type="button" icon="pi pi-search" class="p-button-success" style="margin-right: .5em"&gt;&lt;/Button&gt;
            &lt;Button type="button" icon="pi pi-pencil" class="p-button-warning"&gt;&lt;/Button&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;template #footer&gt;
        In total there are &#123;&#123;cars ? cars.length : 0 &#125;&#125; cars.
    &lt;/template&gt;
&lt;/DataTable&gt;
</template>
</CodeHighlight>

                <h3>Pagination</h3>
                <p>Pagination is enabled by setting <i>paginator</i> property to true and defining the <i>rows</i> property defines the number of rows per page.
                    See the <router-link to="/paginator">Paginator</router-link> for the available customization options such as paginator templates, page links,
                    rows per page options and more which can be passed through the DataTable.</p>

<CodeHighlight>
<template v-pre>
&lt;DataTable :value="cars" :paginator="true" :rows="10"&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</CodeHighlight>

                <p>paginatorLeft and paginatorLeft templates are available to specify custom content at the left and right side.</p>
<CodeHighlight>
<template v-pre>
&lt;DataTable :value="cars" :paginator="true" :rows="10"&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
    &lt;template #paginatorLeft&gt;
        &lt;Button type="button" icon="pi pi-refresh" /&gt;
    &lt;/template&gt;
    &lt;template #paginatorRight&gt;
        &lt;Button type="button" icon="pi pi-cloud" /&gt;
    &lt;/template&gt;
&lt;/DataTable&gt;
</template>
</CodeHighlight>

                <p>Paginator can also be programmed programmatically using a binding to the <i>first</i> property that defines the index of the
                first element to display. For example setting first to zero will reset the paginator to the very first page. This property
                also supports "sync" keyword in case you'd like your binding to be updated whenever the user changes the page.</p>
<CodeHighlight>
<template v-pre>
&lt;DataTable :value="cars" :paginator="true" :rows="10" :first="firstRecordIndex"&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</CodeHighlight>

                <h3>Lazy Loading</h3>
                <p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking corresponding callbacks everytime paging, sorting and filtering happens. Sample belows imitates lazy paging by using an in memory list.
                    It is also important to assign the logical number of rows to totalRecords by doing a projection query for paginator configuration so that paginator displays the UI
                    assuming there are actually records of totalRecords size although in reality they aren't as in lazy mode, only the records that are displayed on the current page exist.</p>

                <p>Lazy loading is implemented by handling pagination and sorting using <i>page</i> and <i>sort</i> events by making a remote query using the information
                passed to the events such as first offset, number of rows and sort field for ordering. Filtering is handled differently as filter elements are defined using templates, use
                the event you prefer on your form elements such as input, change, blur to make a remote call by passing the filters property to update the displayed data. Note that,
                in lazy filtering, totalRecords should also be updated to align the data with the paginator.</p>

                <p>Here is a sample paging implementation with in memory data, a more enhanced example with a backend is being worked on and will be available at a github repository.</p>
<CodeHighlight>
<template v-pre>
&lt;DataTable :value="cars" :lazy="true" :paginator="true" :rows="10"
    :totalRecords="totalRecords" :loading="loading" @page="onPage($event)"&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import CarService from '../../service/CarService';

export default {
    data() {
        return {
            loading: false,
            totalRecords: 0,
            cars: null
        }
    },
    datasource: null,
    carService: null,
    created() {
        this.carService = new CarService();
    },
    mounted() {
        this.loading = true;

        setTimeout(() => {
            this.carService.getCarsLarge().then(data => {
                this.datasource = data;
                this.totalRecords = data.length,
                this.cars = this.datasource.slice(0, 10);
                this.loading = false;
            });
        }, 1000);
    },
    methods: {
        onPage(event) {
            this.loading = true;

            setTimeout(() => {
                this.cars = this.datasource.slice(event.first, event.first + event.rows);
                this.loading = false;
            }, 1000);
        }
    }
}
</CodeHighlight>

                <h3>Sorting</h3>
                <p>Enabling <i>sortable</i> property at column component would be enough to make a column sortable.
                The property to use when sorting is the <i>field</i> by default and can be customized using the <i>sortField</i>.</p>

<CodeHighlight>
<template v-pre>
&lt;DataTable :value="cars"&gt;
    &lt;Column field="vin" header="Vin" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color" :sortable="true"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</CodeHighlight>

                <p>By default sorting is executed on the clicked column only. To enable multiple field sorting, set <i>sortMode</i> property to "multiple" and use metakey when clicking on another column.</p>
<CodeHighlight>
<template v-pre>
&lt;DataTable :value="cars" sortMode="multiple"&gt;
    &lt;Column field="vin" header="Vin" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color" :sortable="true"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</CodeHighlight>

                <p>In case you'd like to display the table as sorted per a single column by default on mount or programmatically apply sort, use <i>sortField</i> and <i>sortOrder</i> properties. These
                two properties also support the "sync" keyword to get updated when the user applies sort a column.</p>
<CodeHighlight>
<template v-pre>
&lt;DataTable :value="cars" sortField="year" :sortOrder="1"&gt;
    &lt;Column field="vin" header="Vin" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color" :sortable="true"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;

&lt;DataTable :value="cars" sortField="dynamicSortField" :sortOrder="dynamicSortOrder"&gt;
    &lt;Column field="vin" header="Vin" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color" :sortable="true"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</CodeHighlight>

                <p>In multiple mode, use the <i>multiSortMeta</i> property and bind an array of SortMeta objects instead.</p>
<CodeHighlight>
<template v-pre>
&lt;DataTable :value="cars" sortMode="multiple" :multiSortMeta="multiSortMeta"&gt;
    &lt;Column field="vin" header="Vin" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color" :sortable="true"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
data() {
    return {
        multiSortMeta: [
            {field: 'year', order: 1},
            {field: 'brand', order: -1}
        ]
    }
}
</CodeHighlight>
                <h3>Filtering</h3>
                <p>Filtering is enabled by defining a filter template per column to populate the <i>filters</i> property of the DataTable. The <i>filters</i>
                property should be an key-value object where keys are the field name and the value is the filter value. The filter template receives the column properties
                via the slotProps and accepts any form element as the filter element. Default match mode is "startsWith" and this can be configured per column using the <i>filterMatchMode</i> property that also accepts
                "contains", "endsWith", "equals", "notEquals" and "in" as available modes.</p>
                <p>Optionally a global filter is available to search against all the fields, in this case the special <i>global</i> keyword should be the property to be populated.</p>
<CodeHighlight>
<template v-pre>
&lt;DataTable :value="cars" :filters="filters" :paginator="true" :rows="10"&gt;
    &lt;template #header&gt;
        &lt;div style="text-align: right"&gt;
            &lt;i class="pi pi-search" style="margin: 4px 4px 0px 0px;"&gt;&lt;/i&gt;
            &lt;InputText v-model="filters['global']" placeholder="Global Search" size="50" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
    &lt;Column field="vin" header="Vin" filterMatchMode="startsWith"&gt;
        &lt;template #filter&gt;
            &lt;InputText type="text" v-model="filters['vin']" class="p-column-filter" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="year" header="Year" filterMatchMode="contains"&gt;
        &lt;template #filter&gt;
            &lt;InputText type="text" v-model="filters['year']" class="p-column-filter" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="brand" header="Brand" filterMatchMode="equals"&gt;
        &lt;template #filter&gt;
            &lt;Dropdown v-model="filters['brand']" :options="brands" optionLabel="brand" optionValue="value" placeholder="Select a Brand" class="p-column-filter"&gt;
                &lt;template #option="slotProps"&gt;
                    &lt;div class="p-clearfix p-dropdown-car-option"&gt;
                        &lt;img :alt="slotProps.option.brand" :src="'demo/images/car/' + slotProps.option.brand + '.png'" /&gt;
                        &lt;span&gt;&#123;&#123;slotProps.option.brand&#125;&#125;&lt;/span&gt;
                    &lt;/div&gt;
                &lt;/template&gt;
            &lt;/Dropdown&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="color" header="Color" filterMatchMode="in"&gt;
        &lt;template #filter&gt;
            &lt;MultiSelect v-model="filters['color']" :options="colors" optionLabel="name" optionValue="value" placeholder="Select a Color" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</CodeHighlight>

                <h3>Selection</h3>
                <p>DataTable provides single and multiple selection modes on click of a row. Selected rows are bound to the <i>selection</i> property and updated using the sync keyword.
                    Alternatively column based selection can be done using radio buttons or checkboxes using <i>selectionMode</i> of a particular column. In addition row-select and row-unselect
                     events are provided as optional callbacks.</p>

                <p>The <i>dataKey</i> property identifies a unique value of a row in the dataset, it is not mandatory however being able to define it increases the performance of the table signifantly.</p>

                <p>In single mode, selection binding is an object reference.</p>

<CodeHighlight>
<template v-pre>
&lt;DataTable :value="cars" :selection.sync="selectedCar" selectionMode="single" dataKey="vin"&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</CodeHighlight>

                <p>In multiple mode, selection binding should be an array and multiple items can either be selected using metaKey or toggled individually depending on the value of <i>metaKeySelection</i> property value which is true by default. On touch enabled devices metaKeySelection is turned off automatically. Additionally ShiftKey is supported for range selection.</p>
<CodeHighlight>
<template v-pre>
&lt;DataTable :value="cars" :selection.sync="selectedCars" selectionMode="multiple" dataKey="vin"&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</CodeHighlight>

                <p>If you prefer a radioButton or a checkbox instead of a row click, use the <i>selectionMode</i> of a column instead. Following datatable displays a checkbox at the first column of each row and automatically adds a header checkbox to toggle selection of all rows.</p>
<CodeHighlight>
<template v-pre>
&lt;DataTable :value="cars" :selection.sync="selectedCars" selectionMode="multiple" dataKey="vin"&gt;
    &lt;Column selectionMode="multiple"&gt;&lt;/Column&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</CodeHighlight>

                <h3>Column Resize</h3>
                <p>Columns can be resized using drag drop by setting the <i>resizableColumns</i> to true. There are two resize modes; "fit" and "expand". Fit is the default one and the overall table width does not change when a column is resized.
                    In "expand" mode, table width also changes along with the column width. <i>column-resize-end</i> is a callback that passes the resized column header and delta change as a parameter.</p>
<CodeHighlight>
<template v-pre>
&lt;DataTable :value="cars" :resizableColumns="true" columnResizeMode="fit | expand"&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</CodeHighlight>

            <p>It is important to note that when you need to change column widths, since table width is 100%, giving fixed pixel widths does not work well as browsers scale them, instead give percentage widths.</p>
<CodeHighlight>
<template v-pre>
&lt;DataTable :value="cars" :resizableColumns="true" columnResizeMode="fit | expand"&gt;
    &lt;Column field="vin" header="Vin" headerStyle="width: 20%"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year" headerStyle="width: 40%"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand" headerStyle="width: 20%"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color" headerStyle="width: 20%"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</CodeHighlight>

                <h3>Data Export</h3>
                <p>DataTable can export its data in CSV format using <i>exportCSV()</i> method.</p>
<CodeHighlight>
<template v-pre>
&lt;DataTable :value="cars" ref="dt"&gt;
    &lt;template #header&gt;
        &lt;div style="text-align: left"&gt;
            &lt;Button icon="pi pi-external-link" label="Export" @click="exportCSV($event)" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
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
    mounted() {
        this.carService.getCarsSmall().then(data => this.cars = data);
    },
    methods: {
        exportCSV() {
            this.$refs.dt.exportCSV();
        }
    }
}
</CodeHighlight>

                <h3>Empty Message</h3>
                <p>When there is no data, you may use the <i>empty</i> template to display a message.</p>
<CodeHighlight>
<template v-pre>
&lt;DataTable :value="cars"&gt;
    &lt;template #empty&gt;
        No records found
    &lt;/template&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</CodeHighlight>

                <h3>Loading</h3>
                <p>A loading status indicator can be displayed when the <i>loading</i> property is enabled. The icon is customized through <i>loadingIcon</i> property.</p>
<CodeHighlight>
<template v-pre>
&lt;DataTable :value="cars" :loading="loading"&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import CarService from '../../service/CarService';

export default {
    data() {
        return {
            loading: false,
            cars: null
        }
    },
    datasource: null,
    carService: null,
    created() {
        this.carService = new CarService();
    },
    mounted() {
        this.loading = true;

        this.carService.getCarsLarge().then(data => {
            this.cars = data
            this.loading = false;
        });
    }
}
</CodeHighlight>

                <h3>Responsive</h3>
                <p>DataTable display can be optimized according to screen sizes, this example demonstrates a demo where columns are stacked on small screens.</p>
<CodeHighlight>
<template v-pre>
&lt;DataTable :value="cars" class="p-datatable-responsive"&gt;
    &lt;template #header&gt;
        Responsive
    &lt;/template&gt;
    &lt;Column field="vin" header="Vin"&gt;
        &lt;template #body="slotProps"&gt;
            &lt;span class="p-column-title"&gt;Vin&lt;/span&gt;
            {{slotProps.data.vin}}
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;
        &lt;template #body="slotProps"&gt;
            &lt;span class="p-column-title"&gt;Year&lt;/span&gt;
            {{slotProps.data.year}}
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;
        &lt;template #body="slotProps"&gt;
            &lt;span class="p-column-title"&gt;Brand&lt;/span&gt;
            {{slotProps.data.brand}}
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;
        &lt;template #body="slotProps"&gt;
            &lt;span class="p-column-title"&gt;Color&lt;/span&gt;
            {{slotProps.data.color}}
        &lt;/template&gt;
    &lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
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
    mounted() {
        this.carService.getCarsSmall().then(data => this.cars = data);
    }
}
</CodeHighlight>

<CodeHighlight lang="css">
.p-datatable-responsive .p-datatable-tbody > tr > td .p-column-title {
    display: none;
}

@media screen and (max-width: 40em) {
    .p-datatable-responsive .p-datatable-thead > tr > th,
    .p-datatable-responsive .p-datatable-tfoot > tr > td {
        display: none !important;
    }

    .p-datatable-responsive .p-datatable-tbody > tr > td {
        text-align: left;
        display: block;
        border: 0 none;
        width: 100% !important;
		float: left;
		clear: left;
    }

    .p-datatable-responsive .p-datatable-tbody > tr > td .p-column-title {
        padding: .4em;
        min-width: 30%;
        display: inline-block;
        margin: -.4em 1em -.4em -.4em;
        font-weight: bold;
    }
}
</CodeHighlight>


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
                                <td>dataKey</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Name of the field that uniquely identifies the a record in the data.</td>
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
                                <td>Index of the first row to be displayed.</td>
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
                                <td>FirstPageLink PrevPageLink PageLinks <br /> NextPageLink LastPageLink RowsPerPageDropdown</td>
                                <td>Template of the paginator.</td>
                            </tr>
                            <tr>
                                <td>paginatorLeft</td>
                                <td>Element</td>
                                <td>null</td>
                                <td>Content for the left side of the paginator.</td>
                            </tr>
                            <tr>
                                <td>paginatorRight</td>
                                <td>Element</td>
                                <td>null</td>
                                <td>Content for the right side of the paginator.</td>
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
                                <td>(&#123;currentPage&#125; of &#123;totalPages&#125;)</td>
                                <td>Template of the current page report element.</td>
                            </tr>
                            <tr>
                                <td>lazy</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Defines if data is loaded and interacted with in lazy manner.</td>
                            </tr>
                            <tr>
                                <td>loading</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Displays a loader to indicate data load is in progress.</td>
                            </tr>
                            <tr>
                                <td>loadingIcon</td>
                                <td>string</td>
                                <td>pi pi-spinner</td>
                                <td>The icon to show while indicating data load is in progress.</td>
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
                                <td>defaultSortOrder</td>
                                <td>number</td>
                                <td>1</td>
                                <td>Default sort order of an unsorted column.</td>
                            </tr>
                            <tr>
                                <td>multiSortMeta</td>
                                <td>array</td>
                                <td>null</td>
                                <td>An array of SortMeta objects to sort the data by default in multiple sort mode.</td>
                            </tr>
                            <tr>
                                <td>sortMode</td>
                                <td>string</td>
                                <td>single</td>
                                <td>Defines whether sorting works on single column or on multiple columns.</td>
                            </tr>
                            <tr>
                                <td>filters</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Filters object with key-value pairs to define the filters.</td>
                            </tr>
                            <tr>
                                <td>selection</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Selected row in single mode or an array of values in multiple mode.</td>
                            </tr>
                            <tr>
                                <td>selectionMode</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Specifies the selection mode, valid values are "single" and "multiple".</td>
                            </tr>
                            <tr>
                                <td>compareSelectionBy</td>
                                <td>string</td>
                                <td>deepEquals</td>
                                <td>Algorithm to define if a row is selected, valid values are "equals" that compares by reference and <br/> "deepEquals" that compares all fields.</td>
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
                                <td>rowHover</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When enabled, background of the rows change on hover.</td>
                            </tr>
                            <tr>
                                <td>csvSeparator</td>
                                <td>string</td>
                                <td>,</td>
                                <td>Character to use as the csv separator.</td>
                            </tr>
                            <tr>
                                <td>exportFilename</td>
                                <td>string</td>
                                <td>download</td>
                                <td>Name of the exported file.</td>
                            </tr>
                            <tr>
                                <td>autoLayout</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether the cell widths scale according to their content or not.</td>
                            </tr>
                            <tr>
                                <td>resizableColumns</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When enabled, columns can be resized using drag and drop.</td>
                            </tr>
                            <tr>
                                <td>columnResizeMode</td>
                                <td>string</td>
                                <td>fit</td>
                                <td>Defines whether the overall table width should change on column resize, <br/> valid values are "fit" and "expand".</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>Events</h3>
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
                                <td>Callback to invoke on pagination.</td>
                            </tr>
                            <tr>
                                <td>sort</td>
                                <td>event.originalEvent: Browser event. <br />
                                    event.sortField: Field to sort against. <br />
                                    event.sortOrder: Sort order as integer. <br />
                                    event.multiSortMeta: MultiSort metadata.</td>
                                <td>Callback to invoke on sort.</td>
                            </tr>
                            <tr>
                                <td>filter</td>
                                <td>event.filters: Collection of active filters. <br />
                                    event.filteredValue: Filtered collection.</td>
                                <td>Callback to invoke on filtering.</td>
                            </tr>
                            <tr>
                                <td>row-select</td>
                                <td>event.originalEvent: Browser event. <br />
                                    event.data: Selected row data. <br />
                                    event.type: Type of the selection, valid values are "row", "radio" or "checkbox".</td>
                                <td>Callback to invoke when a row is selected.</td>
                            </tr>
                            <tr>
                                <td>row-unselect</td>
                                <td>event.originalEvent: Browser event. <br />
                                    event.data: Unselected row data. <br />
                                    event.type: Type of the selection, valid values are "row", "radio" or "checkbox".</td>
                                <td>Callback to invoke when a row is unselected.</td>
                            </tr>
                            <tr>
                                <td>column-resize-end</td>
                                <td>event.element: DOM element of the resized column.<br />
                                    event.delta: Change in column width</td>
                                <td>Callback to invoke when a column is resized.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>Methods</h3>
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
                                <td>exportCSV</td>
                                <td>-</td>
                                <td>Exports the data to CSV format.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>Styling</h3>
                <p>Any attribute such as style and class are passed to the main container element. Following are the additional properties to configure the component.</p>

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
                                <td>p-datatable</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-datatable-header</td>
                                <td>Header section.</td>
                            </tr>
                            <tr>
                                <td>p-datatable-footer</td>
                                <td>Footer section.</td>
                            </tr>
                            <tr>
                                <td>p-column-title</td>
                                <td>Title of a column.</td>
                            </tr>
                            <tr>
                                <td>p-sortable-column</td>
                                <td>Sortable column header.</td>
                            </tr>
                            <tr>
                                <td>p-column-filter</td>
                                <td>Filter element in header.</td>
                            </tr>
                            <tr>
                                <td>p-datatable-scrollable-header</td>
                                <td>Container of header in a scrollable table.</td>
                            </tr>
                            <tr>
                                <td>p-datatable-scrollable-body</td>
                                <td>Container of body in a scrollable table.</td>
                            </tr>
                            <tr>
                                <td>p-datatable-scrollable-footer</td>
                                <td>Container of footer in a scrollable table.</td>
                            </tr>
                            <tr>
                                <td>p-datatable-responsive</td>
                                <td>Container element of a responsive datatable.</td>
                            </tr>
                            <tr>
                                <td>p-datatable-emptymessage</td>
                                <td>Cell containing the empty message.</td>
                            </tr>
                            <tr>
                                <td>p-rowgroup-header</td>
                                <td>Header of a rowgroup.</td>
                            </tr>
                            <tr>
                                <td>p-rowgroup-footer</td>
                                <td>Footer of a rowgroup.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>Dependencies</h3>
                <p>None.</p>

            </TabPanel>

            <TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/datatabledemo" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;h3 class="first"&gt;Basic&lt;/h3&gt;
&lt;DataTable :value="cars"&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;

&lt;h3&gt;Dynamic Columns&lt;/h3&gt;
&lt;DataTable :value="cars"&gt;
    &lt;Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import CarService from '../../service/CarService';

export default {
    data() {
        return {
            columns: null,
            cars: null
        }
    },
    carService: null,
    created() {
        this.carService = new CarService();

        this.columns = [
            {field: 'vin', header: 'Vin'},
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'}
        ];
    },
    mounted() {
        this.carService.getCarsSmall().then(data => this.cars = data);
    }
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>