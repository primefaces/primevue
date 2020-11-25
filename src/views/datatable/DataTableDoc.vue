<template>
    <div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
				<pre v-code.script>
<code>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';     //optional for column grouping
				
</code></pre>

                <h5>Getting Started</h5>
                <p>DataTable requires a value as an array of objects and columns defined with Column component. Throughout the samples, a car interface having vin, brand, year and color properties is used to define an object to be displayed by the datatable.
                    Cars are loaded by a CarService that connects to a server to fetch the cars with a axios. Note that this is only for demo purposes, DataTable does not have any restrictions on how the data is provided.</p>

                <pre v-code.script>
<code>
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
				
</code></pre>

                <p>Example response;</p>
                <pre v-code.script>
<code>
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
                
</code></pre>

                <p>Following sample datatable has 4 columns and retrieves the data from a service on mount.</p>
<pre v-code>
<code><template v-pre>
&lt;DataTable :value="cars"&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

<pre v-code.script>
<code>
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

</code></pre>

                <h5>Dynamic Columns</h5>
                <p>Column components can be dynamically generated using a v-for as well.</p>
<pre v-code>
<code><template v-pre>
&lt;DataTable :value="cars"&gt;
    &lt;Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

<pre v-code.script>
<code>
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

</code></pre>

                <h5>Column Component Properties utilized by the DataTable</h5>
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
                                <td>Property represented by the column.</td>
                            </tr>
                            <tr>
                                <td>sortField</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Property name to use in sorting, defaults to field.</td>
                            </tr>
                            <tr>
                                <td>filterField</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Property name to use in filtering, defaults to field.</td>
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
                                <td>filterHeaderStyle</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the column filter header.</td>
                            </tr>
                            <tr>
                                <td>filterHeaderClass</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the column filter header.</td>
                            </tr>
                            <tr>
                                <td>filterMatchMode</td>
                                <td>string</td>
                                <td>startsWith</td>
                                <td>Defines filterMatchMode; "startsWith", "contains", "endsWidth", "equals", "notEquals", "in", "lt", "lte", "gt", "gte" and "custom".</td>
                            </tr>
                            <tr>
                                <td>filterFunction</td>
                                <td>function</td>
                                <td>null</td>
                                <td>A function that takes a value and a filter to compare against by returning either true or false. filterMatchMode must be set
                                    to "custom" for this function to be triggered.
                                </td>
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
                            <tr>
                                <td>expander</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Displays an icon to toggle row expansion.</td>
                            </tr>
                            <tr>
                                <td>colspan</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Number of columns to span for grouping.</td>
                            </tr>
                            <tr>
                                <td>rowspan</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Number of rows to span for grouping.</td>
                            </tr>
                            <tr>
                                <td>rowReorder</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether this column displays an icon to reorder the rows.</td>
                            </tr>
                            <tr>
                                <td>rowReorderIcon</td>
                                <td>string</td>
                                <td>pi pi-bars</td>
                                <td>Icon of the drag handle to reorder rows.</td>
                            </tr>
                            <tr>
                                <td>reorderableColumn</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Defines if the column itself can be reordered with dragging.</td>
                            </tr>
                            <tr>
                                <td>rowEditor</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When enabled, column displays row editor controls.</td>
                            </tr>
                            <tr>
                                <td>rowEditor</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When enabled, column displays row editor controls.</td>
                            </tr>
                            <tr>
                                <td>frozen</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether the column is fixed in horizontal scrolling.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h5>Auto Layout</h5>
                <p>Default table-layout is fixed meaning the cell widths do not depend on their content. If you require cells to scale based on their contents set <i>autoLayout</i> property to true. Note that Scrollable and/or Resizable tables do not support auto layout due to technical limitations.</p>

                <h5>Templating</h5>
                <p>Field data of a corresponding row is displayed as the cell content by default, this can be customized using a <i>body</i> template where current row data and column properties are passed via the slot props.
                    On the other hand, <i>header</i> and <i>footer</i> sections of a column can either be defined with the properties or the templates. Similarly DataTable itself also provides header and footer properties along with the templates for the main header and footer of the table.</p>

                <pre v-code>
<code><template v-pre>
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
</code></pre>

                <h5>Sizes</h5>
                <p>In addition to the regular table, a smal and a large version are available with different paddings. For a table
                with smaller paddings use <i>p-datatable-sm</i> class and for a larger one use <i>p-datatable-lg</i>.</p>

<pre v-code>
<code><template v-pre>
&lt;DataTable :value="cars" class="p-datatable-sm"&gt;
    &lt;template #header&gt;
        Small Table
    &lt;/template&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;

&lt;DataTable :value="cars"&gt;
    &lt;template #header&gt;
        Normal Table
    &lt;/template&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;

&lt;DataTable :value="cars" class="p-datatable-lg"&gt;
    &lt;template #header&gt;
        Large Table
    &lt;/template&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

                <h5>Column Grouping</h5>
                <p>Columns can be grouped at header and footer sections by defining a ColumnGroup with nested rows and columns.</p>
<pre v-code>
<code><template v-pre>
&lt;DataTable :value="sales"&gt;
    &lt;ColumnGroup type="header"&gt;
        &lt;Row&gt;
            &lt;Column header="Brand" :rowspan="3" /&gt;
            &lt;Column header="Sale Rate" :colspan="4" /&gt;
        &lt;/Row&gt;
        &lt;Row&gt;
            &lt;Column header="Sales" :colspan="2" /&gt;
            &lt;Column header="Profits" :colspan="2" /&gt;
        &lt;/Row&gt;
        &lt;Row&gt;
            &lt;Column header="Last Year" /&gt;
            &lt;Column header="This Year" /&gt;
            &lt;Column header="Last Year" /&gt;
            &lt;Column header="This Year" /&gt;
        &lt;/Row&gt;
    &lt;/ColumnGroup&gt;
    &lt;Column field="brand" /&gt;
    &lt;Column field="lastYearSale" /&gt;
    &lt;Column field="thisYearSale" /&gt;
    &lt;Column field="lastYearProfit" /&gt;
    &lt;Column field="thisYearProfit" /&gt;
    &lt;ColumnGroup type="footer"&gt;
        &lt;Row&gt;
            &lt;Column footer="Totals:" :colspan="3" /&gt;
            &lt;Column footer="$506,202" /&gt;
            &lt;Column footer="$531,020" /&gt;
        &lt;/Row&gt;
    &lt;/ColumnGroup&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

                <h5>Pagination</h5>
                <p>Pagination is enabled by setting <i>paginator</i> property to true and defining the <i>rows</i> property defines the number of rows per page.
                    See the <router-link to="/paginator">Paginator</router-link> for the available customization options such as paginator templates, page links,
                    rows per page options and more which can be passed through the DataTable.</p>

<pre v-code>
<code><template v-pre>
&lt;DataTable :value="cars" :paginator="true" :rows="10"&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

                <p>paginatorLeft and paginatorLeft templates are available to specify custom content at the left and right side.</p>
<pre v-code>
<code><template v-pre>
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
</code></pre>

                <p>Paginator can also be programmed programmatically using a binding to the <i>first</i> property that defines the index of the
                first element to display. For example setting first to zero will reset the paginator to the very first page. This property
                also supports v-model in case you'd like your binding to be updated whenever the user changes the page.</p>
<pre v-code>
<code><template v-pre>
&lt;DataTable :value="cars" :paginator="true" :rows="10" :first="firstRecordIndex"&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

                <h5>Sorting</h5>
                <p>Enabling <i>sortable</i> property at column component would be enough to make a column sortable.
                The property to use when sorting is the <i>field</i> by default and can be customized using the <i>sortField</i>.</p>

<pre v-code>
<code><template v-pre>
&lt;DataTable :value="cars"&gt;
    &lt;Column field="vin" header="Vin" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color" :sortable="true"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

                <p>By default sorting is executed on the clicked column only. To enable multiple field sorting, set <i>sortMode</i> property to "multiple" and use metakey when clicking on another column.</p>
<pre v-code>
<code><template v-pre>
&lt;DataTable :value="cars" sortMode="multiple"&gt;
    &lt;Column field="vin" header="Vin" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color" :sortable="true"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

                <p>In case you'd like to display the table as sorted per a single column by default on mount or programmatically apply sort, use <i>sortField</i> and <i>sortOrder</i> properties. These
                two properties also support the v-model directive to get updated when the user applies sort a column.</p>
<pre v-code>
<code><template v-pre>
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
</code></pre>

                <p>In multiple mode, use the <i>multiSortMeta</i> property and bind an array of SortMeta objects instead.</p>
<pre v-code>
<code><template v-pre>
&lt;DataTable :value="cars" sortMode="multiple" :multiSortMeta="multiSortMeta"&gt;
    &lt;Column field="vin" header="Vin" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color" :sortable="true"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

<pre v-code.script>
<code>
data() {
    return {
        multiSortMeta: [
            {field: 'year', order: 1},
            {field: 'brand', order: -1}
        ]
    }
}

</code></pre>

                <h5>Filtering</h5>
                <p>Filtering is enabled by defining a filter template per column to populate the <i>filters</i> property of the DataTable. The <i>filters</i>
                property should be an key-value object where keys are the field name and the value is the filter value. The filter template receives the column properties
                via the slotProps and accepts any form element as the filter element. Default match mode is "startsWith" and this can be configured per column using the <i>filterMatchMode</i> property that also accepts
                "contains", "endsWith", "equals", "notEquals", "in", "lt", "lte", "gt", "gte" and "custom" as available modes.</p>
                <p>Optionally a global filter is available to search against all the fields, in this case the special <i>global</i> keyword should be the property to be populated.</p>
<pre v-code>
<code><template v-pre>
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
                    &lt;div class="p-dropdown-car-option"&gt;
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
</code></pre>

                <p>Custom filtering is implemented by setting the filterMatchMode to "custom" and defining a filter function.</p>
<pre v-code>
<code><template v-pre>
&lt;Column field="vin" header="Vin" filterMatchMode="myOwnEquals"&gt;
        &lt;template #filter&gt;
            &lt;InputText type="text" v-model="filters['vin']" class="p-column-filter" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
</template>
</code></pre>

<pre v-code.script>
<code>
methods: {
    myOwnEquals(value, filter) {
        if (filter === undefined || filter === null || (typeof filter === 'string' &amp;&amp; filter.trim() === '')) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        return value.toString().toLowerCase() === filter.toString().toLowerCase();
    }
}

</code></pre>

                <h5>Selection</h5>
                <p>DataTable provides single and multiple selection modes on click of a row. Selected rows are bound to the <i>selection</i> property and updated using the v-model directive.
                    Alternatively column based selection can be done using radio buttons or checkboxes using <i>selectionMode</i> of a particular column. In addition row-select and row-unselect
                     events are provided as optional callbacks.</p>

                <p>The <i>dataKey</i> property identifies a unique value of a row in the dataset, it is not mandatory however being able to define it increases the performance of the table signifantly.</p>

                <p>In single mode, selection binding is an object reference.</p>

<pre v-code>
<code><template v-pre>
&lt;DataTable :value="cars" v-model:selection="selectedCar" selectionMode="single" dataKey="vin"&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

                <p>In multiple mode, selection binding should be an array and multiple items can either be selected using metaKey or toggled individually depending on the value of <i>metaKeySelection</i> property value which is true by default. On touch enabled devices metaKeySelection is turned off automatically. Additionally ShiftKey is supported for range selection.</p>
<pre v-code>
<code><template v-pre>
&lt;DataTable :value="cars" v-model:selection="selectedCars" selectionMode="multiple" dataKey="vin"&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

                <p>If you prefer a radioButton or a checkbox instead of a row click, use the <i>selectionMode</i> of a column instead. Following datatable displays a checkbox at the first column of each row and automatically adds a header checkbox to toggle selection of all rows.</p>
<pre v-code>
<code><template v-pre>
&lt;DataTable :value="cars" v-model:selection="selectedCars" selectionMode="multiple" dataKey="vin"&gt;
    &lt;Column selectionMode="multiple"&gt;&lt;/Column&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

                <h5>Scrolling</h5>
                <p>DataTable supports both horizontal and vertical scrolling as well as frozen columns and rows. Scrollable DataTable is enabled using <i>scrollable</i> property and <i>scrollHeight</i> to define the viewport height.</p>
<pre v-code>
<code><template v-pre>
&lt;DataTable :value="cars" :scrollable="true" scrollHeight="200px"&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

                <h5>Flex Scroll</h5>
                <p>In cases where viewport should adjust itself according to the table parent's height instead of a fixed viewport height, set scrollHeight option as flex. In example below, table is inside a Dialog where viewport size dynamically responds to the dialog size changes such as maximizing.</p>
<pre v-code>
<code><template v-pre>
&lt;Button label="Show" icon="pi pi-external-link" @click="openDialog" /&gt;
&lt;Dialog header="Flex Scroll" v-model:visible="dialogVisible" :style="{width: '50vw'}" :maximizable="true" :modal="true" :contentStyle="{height: '300px'}"&gt;
    &lt;DataTable :value="cars" :scrollable="true" scrollHeight="flex"&gt;
        &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
        &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
        &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
        &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
    &lt;/DataTable&gt;
    &lt;template #footer&gt;
        &lt;Button label="Yes" icon="pi pi-check" @click="closeDialog" /&gt;
        &lt;Button label="No" icon="pi pi-times" @click="closeDialog" class="p-button-secondary"/&gt;
    &lt;/template&gt;
&lt;/Dialog&gt;
</template>
</code></pre>

                <h5>Full Page Scroll</h5>
                <p>FlexScroll can also be used for cases where scrollable viewport should be responsive with respect to the window size. See the Full Page demo for an example.</p>
<pre v-code>
<code><template v-pre>
&lt;div style="height: calc(100vh - 143px)"&gt;
    &lt;DataTable :value="cars" :scrollable="true" scrollHeight="flex"&gt;
        &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
        &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
        &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
        &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
    &lt;/DataTable&gt;
&lt;/div&gt;
</template>
</code></pre>

                <h5>Horizontal Scrolling</h5>
                <p>In horizontal scrolling, it is required to give fixed widths to columns. In general when customizing the column widths of scrollable tables, use colgroup as below to avoid misalignment issues as it will apply both the header, body and footer sections which are different separate elements internally.</p>
<pre v-code>
<code><template v-pre>
&lt;DataTable :value="cars" :scrollable="true" scrollHeight="200px" style="width: 600px"&gt;
    &lt;Column field="vin" header="Vin" headerStyle="width: 250px" columnKey="vin_1"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year" headerStyle="width: 250px" columnKey="year_1"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand" headerStyle="width: 250px" columnKey="brand_1"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color" headerStyle="width: 250px" columnKey="color_1"&gt;&lt;/Column&gt;
    &lt;Column field="vin" header="Vin" headerStyle="width: 250px" columnKey="vin_2"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year" headerStyle="width: 250px" columnKey="year_2"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand" headerStyle="width: 250px" columnKey="brand_2"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color" headerStyle="width: 250px" columnKey="color_2"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

                <h5>Frozen Rows and Columns</h5>
                <p>Certain columns can be frozen by using the <i>frozen</i> property of the column component. Widths of the frozen section is specified by the <i>frozenWidth</i> property.</p>
<pre v-code>
<code><template v-pre>
&lt;DataTable :value="cars" :scrollable="true" scrollHeight="200px" frozenWidth="300px" :loading="loading"&gt;
    &lt;Column field="vin" header="Vin" headerStyle="width: 300px" columnKey="vin_1" :frozen="true"&gt;
        &lt;template #body="slotProps"&gt;
            &lt;span style="font-weight: bold"&gt;&#123;&#123;slotProps.data.vin&#125;&#125;&lt;/span&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="year" header="Year" headerStyle="width: 300px" columnKey="year_1"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand" headerStyle="width: 300px" columnKey="brand_1"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color" headerStyle="width: 300px" columnKey="color_1"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year" headerStyle="width: 300px" columnKey="year_2"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand" headerStyle="width: 300px" columnKey="brand_2"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color" headerStyle="width: 300px" columnKey="color_2"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year" headerStyle="width: 300px" columnKey="year_3"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand" headerStyle="width: 300px" columnKey="brand_3"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color" headerStyle="width: 300px" columnKey="color_3"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

            <p>Note that frozen columns are enabled, frozen and scrollable cells may have content with varying height which leads to misalignment. Provide fixed height to cells to avoid alignment issues.</p>
<pre v-code>
<code><template v-pre>
&lt;DataTable :value="cars" :scrollable="true" scrollHeight="200px" frozenWidth="300px" :loading="loading"&gt;
    &lt;Column field="vin" header="Vin" headerStyle="width: 300px" bodyStyle="height: 25px" columnKey="vin" :frozen="true"&gt;
        &lt;template #body="slotProps"&gt;
            &lt;span style="font-weight: bold"&gt;&#123;&#123;slotProps.data.vin&#125;&#125;&lt;/span&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="year" header="Year" headerStyle="width: 300px" bodyStyle="height: 25px" columnKey="year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand" headerStyle="width: 300px" bodyStyle="height: 25px" columnKey="brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color" headerStyle="width: 300px" bodyStyle="height: 25px" columnKey="color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

            <p>One or more rows can be displayed as fixed using the <i>frozenValue</i> property.</p>
<pre v-code>
<code><template v-pre>
&lt;DataTable :value="cars" :frozenValue="frozenCars" :scrollable="true" scrollHeight="200px" :loading="loading"&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

            <p>When using frozen columns with column grouping, use <i>frozenheadergroup</i> and <i>frozenfootergroup</i> types to define grouping for the frozen section.</p>

            <h5>Virtual Scrolling</h5>
            <p>Virtual scrolling is enabled using <i>virtualScroll</i> and <i>onVirtualScroll</i> properties combined with lazy loading so that data is loaded on the fly during scrolling.
            For smooth scrolling twice the amount of rows property is loaded on a lazy load event. In addition, to avoid performance problems row height is not calculated automatically and
            should be provided using <i>virtualRowHeight</i> property which defaults to 28px. View the <router-link to="/datatable/scroll">scrolling demo</router-link> for a sample in-memory implementation.</p>

<pre v-code>
<code><template v-pre>
&lt;DataTable :value="lazyCars" :scrollable="true" scrollHeight="200px" :lazy="true" :rows="20"
    :virtualScroll="true" :virtualRowHeight="30" @virtual-scroll="onVirtualScroll" :totalRecords="lazyTotalRecords"&gt;
    &lt;Column field="vin" header="Vin"&gt;
        &lt;template #loading&gt;
            &lt;span class="loading-text"&gt;&lt;/span&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;
        &lt;template #loading&gt;
            &lt;span class="loading-text"&gt;&lt;/span&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;
        &lt;template #loading&gt;
            &lt;span class="loading-text"&gt;&lt;/span&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;
        &lt;template #loading&gt;
            &lt;span class="loading-text"&gt;&lt;/span&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

<pre v-code.script>
<code>
import CarService from '../../service/CarService';

export default {
    data() {
        return {
            lazyCars: null,
            lazyTotalRecords: 0
        }
    },
    carService: null,
    mounted() {
        this.lazyCars = this.loadChunk(0, 40);
        this.lazyTotalRecords = //retrieve logical number of rows from a datasource;
    },
    methods: {
          loadChunk(index, length) {
            //return data from a datasource between [index, index + length];
        },
        onVirtualScroll(event) {
            //last chunk
            if (event.first === (this.lazyTotalRecords - 20))
                this.lazyCars = this.loadChunk(event.first, 20)
            else
                this.lazyCars = this.loadChunk(event.first, event.rows)
        }
    }
}

</code></pre>

                <h5>Lazy Loading</h5>
                <p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking corresponding callbacks such as paging and sorting. Sample belows imitates lazy paging by using an in memory list.
                    It is also important to assign the logical number of rows to totalRecords by doing a projection query for paginator configuration so that paginator displays the UI
                    assuming there are actually records of totalRecords size although in reality they aren't as in lazy mode, only the records that are displayed on the current page exist.</p>

                <p>Lazy loading is implemented by handling pagination and sorting using <i>page</i> and <i>sort</i> events by making a remote query using the information
                passed to the events such as first offset, number of rows and sort field for ordering. Filtering is handled differently as filter elements are defined using templates. <i>filter</i> event is not triggered in
                lazy mode instead use the event you prefer on your form elements such as input, change, blur to make a remote call by passing the filters property to update the displayed data. Note that,
                in lazy filtering, totalRecords should also be updated to align the data with the paginator.</p>

                <p>Here is a sample paging implementation with in memory data, a more enhanced example with a backend is being worked on and will be available at a github repository.</p>
<pre v-code>
<code><template v-pre>
&lt;DataTable :value="cars" :lazy="true" :paginator="true" :rows="10"
    :totalRecords="totalRecords" :loading="loading" @page="onPage($event)"&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

<pre v-code.script>
<code>
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

</code></pre>

                <h5>Row Expansion</h5>
                <p>Rows can be expanded to display additional content using the <i>expandedRows</i> property with the v-model directive accompanied by a template named "expansion". <i>row-expand</i> and <i>row-collapse</i> are optional callbacks that are invoked when a row is expanded or toggled.</p>

                <p>The <i>dataKey</i> property identifies a unique value of a row in the dataset, it is not mandatory in row expansion functionality however being able to define it increases the performance of the table signifantly.</p>
<pre v-code>
<code><template v-pre>
&lt;DataTable :value="cars" v-model:expandedRows="expandedRows" dataKey="vin"
    @row-expand="onRowExpand" @row-collapse="onRowCollapse"&gt;
    &lt;template #header&gt;
        &lt;div class="table-header-container"&gt;
            &lt;Button icon="pi pi-plus" label="Expand All" @click="expandAll" /&gt;
            &lt;Button icon="pi pi-minus" label="Collapse All" @click="collapseAll" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
    &lt;Column :expander="true" headerStyle="width: 3em" /&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
    &lt;template #expansion="slotProps"&gt;
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
    &lt;/template&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

<pre v-code.script>
<code>
import CarService from '../../service/CarService';

export default {
    data() {
        return {
            cars: null,
            expandedRows: []
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
        onRowExpand(event) {
            this.$toast.add({severity: 'info', summary: 'Row Expanded', detail: 'Vin: ' + event.data.vin, life: 3000});
        },
        onRowCollapse(event) {
            this.$toast.add({severity: 'success', summary: 'Row Collapsed', detail: 'Vin: ' + event.data.vin, life: 3000});
        },
        expandAll() {
            this.expandedRows = this.cars.filter(car => car.vin);
            this.$toast.add({severity: 'success', summary: 'All Rows Expanded', life: 3000});
        },
        collapseAll() {
            this.expandedRows = null;
            this.$toast.add({severity: 'success', summary: 'All Rows Collapsed', life: 3000});
        }
    }
}

</code></pre>

                <h5>InCell Editing</h5>
                <p>In cell editing provides a rapid and user friendly way to manipulate the data. The datatable provides a flexible API
                    so that the editing behavior is implemented by the page author whether it utilizes v-model or vuex.
                </p>

                <p>Individuals cell editing is configured by setting the <i>editMode</i> to "cell" and defining editors with the "editor" template. The content of the
                editor defines how the editing is implemented, below example demonstrates two cases. In the first example, simple v-model editors are utilized. This is pretty straightforward in most cases.
                On the other hand, second example is more advanced to consider validations and ability to revert values with the escape key.</p>
<pre v-code>
<code><template v-pre>
&lt;h3&gt;Basic Cell Editing&lt;/h3&gt;
&lt;p&gt;Simple editors with v-model.&lt;/p&gt;
&lt;DataTable :value="cars1" editMode="cell"&gt;
    &lt;Column field="vin" header="Vin"&gt;
        &lt;template #editor="slotProps"&gt;
            &lt;InputText v-model="slotProps.data[slotProps.column.field]" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;
        &lt;template #editor="slotProps"&gt;
            &lt;InputText v-model="slotProps.data[slotProps.column.field]" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;
        &lt;template #editor="slotProps"&gt;
            &lt;Dropdown v-model="slotProps.data['brand']" :options="brands" optionLabel="brand" optionValue="value" placeholder="Select a Brand"&gt;
                &lt;template #option="optionProps"&gt;
                    &lt;div class="p-dropdown-car-option"&gt;
                        &lt;img :alt="optionProps.option.brand" :src="'demo/images/car/' + optionProps.option.brand + '.png'" /&gt;
                        &lt;span&gt;{{optionProps.option.brand}}&lt;/span&gt;
                    &lt;/div&gt;
                &lt;/template&gt;
            &lt;/Dropdown&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;
        &lt;template #editor="slotProps"&gt;
            &lt;InputText v-model="slotProps.data[slotProps.column.field]" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
&lt;/DataTable&gt;

&lt;h3&gt;Advanced Cell Editing&lt;/h3&gt;
&lt;p&gt;Custom implementation with validations, dynamic columns and reverting values with the escape key.&lt;/p&gt;
&lt;DataTable :value="cars2" editMode="cell" @cell-edit-complete="onCellEditComplete"&gt;
    &lt;Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"&gt;
        &lt;template #editor="slotProps"&gt;
            &lt;InputText :value="slotProps.data[slotProps.column.field]" @input="onCellEdit($event, slotProps)" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

<pre v-code.script>
<code>
import CarService from '../../service/CarService';
import Vue from 'vue';

export default {
    data() {
        return {
            cars1: null,
            cars2: null,
            cars3: null,
            editingCellRows: {},
            columns: null,
            brands: [
                {brand: 'Audi', value: 'Audi'},
                {brand: 'BMW', value: 'BMW'},
                {brand: 'Fiat', value: 'Fiat'},
                {brand: 'Honda', value: 'Honda'},
                {brand: 'Jaguar', value: 'Jaguar'},
                {brand: 'Mercedes', value: 'Mercedes'},
                {brand: 'Renault', value: 'Renault'},
                {brand: 'Volkswagen', value: 'Volkswagen'},
                {brand: 'Volvo', value: 'Volvo'}
            ]
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
    methods: {
        onCellEditComplete(event) {
            if (!this.editingCellRows[event.index]) {
                return;
            }

            const editingCellValue = this.editingCellRows[event.index][event.field];

            switch (event.field) {
                case 'year':
                    if (this.isPositiveInteger(editingCellValue))
                        Vue.set(this.cars2, event.index, this.editingCellRows[event.index]);
                    else
                        event.preventDefault();
                break;

                default:
                    if (editingCellValue.trim().length > 0)
                        Vue.set(this.cars2, event.index, this.editingCellRows[event.index]);
                    else
                        event.preventDefault();
                break;
            }
        },
        onCellEdit(newValue, props) {
            if (!this.editingCellRows[props.index]) {
                this.editingCellRows[props.index] = {...props.data};
            }

            this.editingCellRows[props.index][props.column.field] = newValue;
        },
        isPositiveInteger(val) {
            let str = String(val);
            str = str.trim();
            if (!str) {
                return false;
            }
            str = str.replace(/^0+/, "") || "0";
            var n = Math.floor(Number(str));
            return n !== Infinity &amp;&amp; String(n) === str &amp;&amp; n >= 0;
        }
    },
    mounted() {
        this.carService.getCarsSmall().then(data => this.cars1 = data);
        this.carService.getCarsSmall().then(data => this.cars2 = data);
    }
}

</code></pre>

                <p>Row Editing is defined by setting <i>cellEdit</i> as "row", defining <i>editingRows</i> with the v-model directive to hold the reference to the editing rows and adding a row editor column to provide the editing controls. Note that
                since <i>editingRows</i> is two-way binding enabled, you may use it to initially display one or more rows in editing more or programmatically toggle row editing.</p>
<pre v-code>
<code><template v-pre>
&lt;h3&gt;Row Editing&lt;/h3&gt;
&lt;DataTable :value="cars" editMode="row" dataKey="vin" v-model:editingRows="editingRows"
    @row-edit-init="onRowEditInit" @row-edit-cancel="onRowEditCancel"&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;
        &lt;template #editor="slotProps"&gt;
            &lt;InputText v-model="slotProps.data[slotProps.column.field]" autofocus/&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;
        &lt;template #editor="slotProps"&gt;
            &lt;InputText v-model="slotProps.data[slotProps.column.field]" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;
        &lt;template #editor="slotProps"&gt;
            &lt;InputText v-model="slotProps.data[slotProps.column.field]" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column :rowEditor="true" headerStyle="width:7rem" bodyStyle="text-align:center"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

<pre v-code.script>
<code>
import CarService from '../../service/CarService';
import Vue from 'vue';

export default {
    data() {
        return {
            cars: null,
            editingRows: []
        }
    },
    carService: null,
    originalRows: null,
    created() {
        this.carService = new CarService();

        this.originalRows = {};
    },
    methods: {
        onRowEditInit(event) {
            this.originalRows[event.index] = {...this.cars3[event.index]};
        },
        onRowEditCancel(event) {
            Vue.set(this.cars3, event.index, this.originalRows[event.index]);
        }
    },
    mounted() {
        this.carService.getCarsSmall().then(data => this.cars = data);
    }
}

</code></pre>

                <h5>Column Resize</h5>
                <p>Columns can be resized using drag drop by setting the <i>resizableColumns</i> to true. There are two resize modes; "fit" and "expand". Fit is the default one and the overall table width does not change when a column is resized.
                    In "expand" mode, table width also changes along with the column width. <i>column-resize-end</i> is a callback that passes the resized column header and delta change as a parameter.</p>
<pre v-code>
<code><template v-pre>
&lt;DataTable :value="cars" :resizableColumns="true" columnResizeMode="fit | expand"&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

            <p>It is important to note that when you need to change column widths, since table width is 100%, giving fixed pixel widths does not work well as browsers scale them, instead give percentage widths.</p>
<pre v-code>
<code><template v-pre>
&lt;DataTable :value="cars" :resizableColumns="true" columnResizeMode="fit | expand"&gt;
    &lt;Column field="vin" header="Vin" headerStyle="width: 20%"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year" headerStyle="width: 40%"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand" headerStyle="width: 20%"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color" headerStyle="width: 20%"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

                <h5>Column Reorder</h5>
                <p>Columns can be reordered using drag drop by setting the <i>reorderableColumns</i> to true. <i>column-reorder</i> is a callback that is invoked when a column is reordered. DataTable keeps the column order state internally using keys that identifies a column using the field property. If the column has no field, use columnKey instead as
                it is mandatory for columns to have unique keys when reordering is enabled.</p>
<pre v-code>
<code><template v-pre>
&lt;DataTable :value="cars" :reorderableColumns="true"&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

                <h5>Row Reorder</h5>
                <p>Data can be reordered using drag drop by adding a reorder column that will display an icon as a drag handle along with the <i>row-order</i> event which is <b>mandatory</b> to update the new order. Note that the reorder icon can be customized using <i>rowReorderIcon</i> of the column component.</p>
<pre v-code>
<code><template v-pre>
&lt;DataTable :value="cars" @row-reorder="onRowReorder"&gt;
    &lt;Column :rowReorder="true" headerStyle="width: 3em" /&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

<pre v-code.script>
<code>
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
        onRowReorder(event) {
            //update new order
            this.cars = event.value;
        }
    }
}

</code></pre>

                <h5>Row Group</h5>
                <p>Row Grouping comes in two modes, in "subheader" mode rows are grouped by a header row along with an optional group footer. In addition, the groups can be made
                    toggleable by enabling <i>expandableRowGroups</i> as true. On the other hand, the "rowspan" mode uses rowspans instead of a header to group rows. <i>groupRowsBy</i>
                    property defines the field to use in row grouping. Multiple row grouping is available in "rowspan" mode by specifying the <i>groupRowsBy</i> as an array of fields.</p>

                <p>Example below demonstrates the all grouping alternatives. Note that data needs to be sorted for grouping which can also be done by the table itself by speficying the sort properties.</p>

<pre v-code>
<code><template v-pre>
&lt;h3&gt;Subheader Grouping&lt;/h3&gt;
&lt;DataTable :value="cars" rowGroupMode="subheader" groupRowsBy="brand"
    sortMode="single" sortField="brand" :sortOrder="1"&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
    &lt;Column field="price" header="Price"&gt;&lt;/Column&gt;
    &lt;template #groupheader="slotProps"&gt;
        &lt;span&gt;&#123;&#123;slotProps.data.brand&#125;&#125;&lt;/span&gt;
    &lt;/template&gt;
    &lt;template #groupfooter="slotProps"&gt;
        &lt;td colspan="3" style="text-align: right"&gt;Total Price&lt;/td&gt;
        &lt;td&gt;&#123;&#123;calculateGroupTotal(slotProps.data.brand)&#125;&#125;&lt;/td&gt;
    &lt;/template&gt;
&lt;/DataTable&gt;

&lt;h3&gt;Expandable Row Groups&lt;/h3&gt;
&lt;DataTable :value="cars" rowGroupMode="subheader" groupRowsBy="brand"
    sortMode="single" sortField="brand" :sortOrder="1"
    :expandableRowGroups="true" v-model:expandedRowGroups="expandedRowGroups"
    @rowgroup-expand="onRowExpand" @rowgroup-collapse="onRowCollapse"&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
    &lt;Column field="price" header="Price"&gt;&lt;/Column&gt;
    &lt;template #groupheader="slotProps"&gt;
        &lt;span&gt;&#123;&#123;slotProps.data.brand&#125;&#125;&lt;/span&gt;
    &lt;/template&gt;
    &lt;template #groupfooter="slotProps"&gt;
        &lt;td colspan="3" style="text-align: right"&gt;Total Price&lt;/td&gt;
        &lt;td&gt;&#123;&#123;calculateGroupTotal(slotProps.data.brand)&#125;&#125;&lt;/td&gt;
    &lt;/template&gt;
&lt;/DataTable&gt;

&lt;h3&gt;RowSpan Grouping&lt;/h3&gt;
&lt;DataTable :value="cars" rowGroupMode="rowspan" groupRowsBy="brand"
    sortMode="single" sortField="brand" :sortOrder="1"&gt;
    &lt;Column header="#" headerStyle="width:3em"&gt;
        &lt;template #body="slotProps"&gt;
            &#123;&#123;slotProps.index&#125;&#125;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
    &lt;Column field="price" header="Price"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

<pre v-code.script>
<code>
import CarService from '../../service/CarService';

export default {
    data() {
        return {
            cars: null,
            expandedRowGroups: null
        }
    },
    carService: null,
    created() {
        this.carService = new CarService();
    },
    mounted() {
        this.carService.getCarsMedium().then(data => this.cars = data);
    },
    methods: {
        onRowGroupExpand(event) {
            this.$toast.add({severity: 'info', summary: 'Row Group Expanded', detail: 'Value: ' + event.data, life: 3000});
        },
        onRowGroupCollapse(event) {
            this.$toast.add({severity: 'success', summary: 'Row Group Collapsed', detail: 'Value: ' + event.data, life: 3000});
        },
        calculateGroupTotal(brand) {
            let total = 0;

            if (this.cars) {
                for (let car of this.cars) {
                    if (car.brand === brand) {
                        total += car.price;
                    }
                }
            }

            return total;
        }
    }
}

</code></pre>

                <h5>Data Export</h5>
                <p>DataTable can export its data in CSV format using <i>exportCSV()</i> method.</p>
<pre v-code>
<code><template v-pre>
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
</code></pre>

<pre v-code.script>
<code>
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

</code></pre>

                <h5>TableState</h5>
                <p>Stateful table allows keeping the state such as page, sort and filtering either at local storage or session storage so that when the page is visited again, table would render the data using its last settings.
                    Enabling state is easy as defining a unique <i>stateKey</i>, the storage to keep the state is defined with the <i>stateStorage</i> property that accepts session for sessionStorage and local for localStorage.
                    Currently following features are supported by TableState; paging, sorting, filtering, column resizing, column reordering, row expansion, row group expansion and row selection.
                </p>
<pre v-code>
<code><template v-pre>
&lt;DataTable :value="cars" :paginator="true" :rows="10" v-model:filters="filters"
    stateStorage="session" stateKey="dt-state-demo-session"
    v-model:selection="selectedCar" selectionMode="single" dataKey="vin"&gt;
    &lt;template #header&gt;
        &lt;div style="text-align: right"&gt;
            &lt;i class="pi pi-search" style="margin: 4px 4px 0px 0px;"&gt;&lt;/i&gt;
            &lt;InputText v-model="filters['global']" placeholder="Global Search" size="50" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
    &lt;Column field="vin" header="Vin" filterMatchMode="startsWith" :sortable="true"&gt;
        &lt;template #filter&gt;
            &lt;InputText type="text" v-model="filters['vin']" class="p-column-filter" placeholder="Starts with" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="year" header="Year" filterMatchMode="contains" :sortable="true"&gt;
        &lt;template #filter&gt;
            &lt;InputText type="text" v-model="filters['year']" class="p-column-filter" placeholder="Contains" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="brand" header="Brand" filterMatchMode="equals" :sortable="true"&gt;
        &lt;template #filter&gt;
            &lt;Dropdown v-model="filters['brand']" :options="brands" optionLabel="brand" optionValue="value" placeholder="Select a Brand" class="p-column-filter" :showClear="true"&gt;
                &lt;template #option="slotProps"&gt;
                    &lt;div class="p-dropdown-car-option"&gt;
                        &lt;img :alt="slotProps.option.brand" :src="'demo/images/car/' + slotProps.option.brand + '.png'" /&gt;
                        &lt;span&gt;&#123;&#123;slotProps.option.brand&#125;&#125;&lt;/span&gt;
                    &lt;/div&gt;
                &lt;/template&gt;
            &lt;/Dropdown&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="color" header="Color" filterMatchMode="in" :sortable="true"&gt;
        &lt;template #filter&gt;
            &lt;MultiSelect v-model="filters['color']" :options="colors" optionLabel="name" optionValue="value" placeholder="Select a Color" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;template #empty&gt;
        No records found.
    &lt;/template&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

<pre v-code.script>
<code>
import CarService from '../../service/CarService';

export default {
    data() {
        return {
            filters: {},
            brands: [
                {brand: 'Audi', value: 'Audi'},
                {brand: 'BMW', value: 'BMW'},
                {brand: 'Fiat', value: 'Fiat'},
                {brand: 'Honda', value: 'Honda'},
                {brand: 'Jaguar', value: 'Jaguar'},
                {brand: 'Mercedes', value: 'Mercedes'},
                {brand: 'Renault', value: 'Renault'},
                {brand: 'Volkswagen', value: 'Volkswagen'},
                {brand: 'Volvo', value: 'Volvo'}
            ],
            colors: [
                {name: 'White', value: 'White'},
                {name: 'Green', value: 'Green'},
                {name: 'Silver', value: 'Silver'},
                {name: 'Black', value: 'Black'},
                {name: 'Red', value: 'Red'},
                {name: 'Maroon', value: 'Maroon'},
                {name: 'Brown', value: 'Brown'},
                {name: 'Orange', value: 'Orange'},
                {name: 'Blue', value: 'Blue'}
            ],
            selectedCar: null,
            cars: null
        }
    },
    carService: null,
    created() {
        this.carService = new CarService();
    },
    mounted() {
        this.carService.getCarsMedium().then(data => this.cars = data);
    }
}

</code></pre>

                <h5>ContextMenu</h5>
                <p>DataTable provides exclusive integration with the ContextMenu component using, <i>contextMenu</i>, <i>contextMenuSelection</i> property along with the <i>row-contextmenu</i> event.</p>
<pre v-code>
<code><template v-pre>
&lt;DataTable :value="cars" contextMenu v-model:contextMenuSelection="selectedCar" @row-contextmenu="onRowContextMenu"&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;

&lt;ContextMenu :model="menuModel" ref="cm" /&gt;
</template>
</code></pre>

<pre v-code.script>
<code>
import CarService from '../../service/CarService';

export default {
    data() {
        return {
            cars: null,
            selectedCar: null,
            menuModel: [
                {label: 'View', icon: 'pi pi-fw pi-search', command: () => this.viewCar(this.selectedCar)},
                {label: 'Delete', icon: 'pi pi-fw pi-times', command: () => this.deleteCar(this.selectedCar)}
            ]
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
        onRowContextMenu(event) {
            this.$refs.cm.show(event.originalEvent);
        },
        viewCar(car) {
            this.$toast.add({severity: 'info', summary: 'Car Selected', detail: car.vin + ' - ' + car.brand});
        },
        deleteCar(car) {
            this.cars = this.cars.filter((c) => c.vin !== car.vin);
            this.$toast.add({severity: 'info', summary: 'Car Deleted', detail: car.vin + ' - ' + car.brand});
            this.selectedCar = null;
        }
    }
}

</code></pre>

                <h5>Empty Message</h5>
                <p>When there is no data, you may use the <i>empty</i> template to display a message.</p>
<pre v-code>
<code><template v-pre>
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
</code></pre>

                <h5>Loading</h5>
                <p>A loading status indicator can be displayed when the <i>loading</i> property is enabled. The icon is customized through <i>loadingIcon</i> property. Additionally
                an option loading template is available to render as the body until the data is loaded.</p>
<pre v-code>
<code><template v-pre>
&lt;DataTable :value="cars" :loading="loading"&gt;
     &lt;template #loading&gt;
        Loading records, please wait...
    &lt;/template&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

<pre v-code.script>
<code>
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

</code></pre>

                <h5>Responsive</h5>
                <p>DataTable display can be optimized according to screen sizes, this example demonstrates a sample demo where columns are stacked on small screens.</p>
<pre v-code>
<code><template v-pre>
&lt;DataTable :value="cars" class="p-datatable-responsive-demo"&gt;
    &lt;template #header&gt;
        Responsive
    &lt;/template&gt;
    &lt;Column field="vin" header="Vin"&gt;
        &lt;template #body="slotProps"&gt;
            &lt;span class="p-column-title"&gt;Vin&lt;/span&gt;
            &#123;&#123;slotProps.data.vin&#125;&#125;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;
        &lt;template #body="slotProps"&gt;
            &lt;span class="p-column-title"&gt;Year&lt;/span&gt;
            &#123;&#123;slotProps.data.year&#125;&#125;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;
        &lt;template #body="slotProps"&gt;
            &lt;span class="p-column-title"&gt;Brand&lt;/span&gt;
            &#123;&#123;slotProps.data.brand&#125;&#125;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;
        &lt;template #body="slotProps"&gt;
            &lt;span class="p-column-title"&gt;Color&lt;/span&gt;
            &#123;&#123;slotProps.data.color&#125;&#125;
        &lt;/template&gt;
    &lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

<pre v-code.script>
<code>
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

</code></pre>

<pre v-code.css>
<code>
.p-datatable-responsive-demo .p-datatable-tbody > tr > td .p-column-title {
    display: none;
}

@media screen and (max-width: 40em) {
    ::v-deep(.p-datatable) {
        &.p-datatable-responsive-demo {
            .p-datatable-thead > tr > th,
            .p-datatable-tfoot > tr > td {
                display: none !important;
            }

            .p-datatable-tbody > tr > td {
                text-align: left;
                display: block;
                border: 0 none !important;
                width: 100% !important;
                float: left;
                clear: left;

                .p-column-title {
                    padding: .4rem;
                    min-width: 30%;
                    display: inline-block;
                    margin: -.4em 1em -.4em -.4rem;
                    font-weight: bold;
                }
            }
        }
    }
}

</code></pre>

                <h5>Row and Cell Styling</h5>
                <p>Certain rows or cells can easily be styled based on conditions. Cell styling is implemented with templating whereas row styling utilizes the <i>rowClass</i> property which takes the
                row data as a parameter and returns the style class as a string.</p>
<pre v-code>
<code><template v-pre>
&lt;DataTable :value="cars" :rowClass="rowClass"&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year" bodyStyle="padding: 0"&gt;
            &lt;template #body="slotProps"&gt;
            &lt;div :class="['year-cell', {'old-car': slotProps.data.year &lt; 2010}]"&gt;
                &#123;&#123;slotProps.data.year&#125;&#125;
            &lt;/div&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

<pre v-code.script>
<code>
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
    },
    mounted() {
        this.carService.getCarsSmall().then(data => this.cars = data);
    },
    methods: {
        rowClass(data) {
            return data.color === 'Orange' ? 'orange-car': null;
        }
    }
}

</code></pre>

<pre v-code.css>
<code>
.year-cell {
    padding: 0.429em 0.857rem;

    &amp;.old-car {
        background-color: #41b783;
        font-weight: 700;
        color: #ffffff;
    }
}

.orange-car {
    background-color: #344b5f !important;
    color: #ffffff !important;
}

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
                                <td>Property name or a getter function of a row data used for sorting by default</td>
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
                                <td>removableSort</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When enabled, columns can have an un-sorted state.</td>
                            </tr>
                            <tr>
                                <td>filters</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Filters object with key-value pairs to define the filters.</td>
                            </tr>
                            <tr>
                                <td>filterLocale</td>
                                <td>string</td>
                                <td>undefined</td>
                                <td>Locale to use in filtering. The default locale is the host environment's current locale.</td>
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
                                <td>contextMenu</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Enables context menu integration.</td>
                            </tr>
                            <tr>
                                <td>contextMenuSelection</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Selected row instance with the ContextMenu.</td>
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
                            <tr>
                                <td>reorderableColumns</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When enabled, columns can be reordered using drag and drop.</td>
                            </tr>
                            <tr>
                                <td>expandedRows</td>
                                <td>array</td>
                                <td>null</td>
                                <td>A collection of row data display as expanded.</td>
                            </tr>
                            <tr>
                                <td>expandedRowIcon</td>
                                <td>string</td>
                                <td>pi-chevron-down</td>
                                <td>Icon of the row toggler to display the row as expanded.</td>
                            </tr>
                            <tr>
                                <td>collapsedRowIcon</td>
                                <td>string</td>
                                <td>pi-chevron-right</td>
                                <td>Icon of the row toggler to display the row as collapsed.</td>
                            </tr>
                            <tr>
                                <td>rowGroupMode</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Defines the row group mode, valid options are "subheader" and "rowspan".</td>
                            </tr>
                            <tr>
                                <td>groupRowsBy</td>
                                <td>string|array</td>
                                <td>null</td>
                                <td>One or more field names to use in row grouping.</td>
                            </tr>
                            <tr>
                                <td>expandableRowGroups</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether the row groups can be expandable.</td>
                            </tr>
                            <tr>
                                <td>expandedRowGroups</td>
                                <td>array</td>
                                <td>null</td>
                                <td>An array of group field values whose groups would be rendered as expanded.</td>
                            </tr>
                            <tr>
                                <td>stateStorage</td>
                                <td>string</td>
                                <td>session</td>
                                <td>Defines where a stateful table keeps its state, valid values are "session" for sessionStorage and "local" for localStorage.</td>
                            </tr>
                            <tr>
                                <td>stateKey</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Unique identifier of a stateful table to use in state storage.</td>
                            </tr>
                            <tr>
                                <td>editMode</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Defines the incell editing mode, valid options are "cell" and "row".</td>
                            </tr>
                            <tr>
                                <td>editingRows</td>
                                <td>array</td>
                                <td>null</td>
                                <td>A collection of rows to represent the current editing data in row edit mode.</td>
                            </tr>
                            <tr>
                                <td>rowClass</td>
                                <td>function</td>
                                <td>null</td>
                                <td>A function that takes the row data and returns a string to apply a particular class for the row.</td>
                            </tr>
                            <tr>
                                <td>scrollable</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When specified, enables horizontal and/or vertical scrolling.</td>
                            </tr>
                            <tr>
                                <td>scrollHeight</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Height of the scroll viewport in fixed pixels or the "flex" keyword for a dynamic size.</td>
                            </tr>
                            <tr>
                                <td>virtualScroll</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether the data should be loaded on demand during scroll.</td>
                            </tr>
                            <tr>
                                <td>virtualScrollDelay</td>
                                <td>number</td>
                                <td>150</td>
                                <td>Delay in virtual scroll before doing a call to lazy load.</td>
                            </tr>
                            <tr>
                                <td>virtualRowHeight</td>
                                <td>number</td>
                                <td>28</td>
                                <td>Height of a row to use in calculations of virtual scrolling.</td>
                            </tr>
                            <tr>
                                <td>frozenWidth</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Width of the frozen part in scrollable DataTable.</td>
                            </tr>
                            <tr>
                                <td>frozenValue</td>
                                <td>array</td>
                                <td>null</td>
                                <td>Items of the frozen part in scrollable DataTable.</td>
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
                                <td>event.originalEvent: Browser event <br >
                                    event.page: New page number <br/>
                                    event.pageCount: Total page count <br/>
                                    event.first: Index of first record <br/>
                                    event.rows: Number of rows to display in new page <br/>
                                    event.sortField: Field to sort against <br />
                                    event.sortOrder: Sort order as integer <br />
                                    event.multiSortMeta: MultiSort metadata <br />
                                    event.filters: Collection of active filters <br />
                                    event.filterMatchModes: Match modes per field
                                </td>
                                <td>Callback to invoke on pagination. Sort and Filter information is also available for lazy loading implementation.</td>
                            </tr>
                            <tr>
                                <td>sort</td>
                                <td>event.originalEvent: Browser event <br >
                                    event.first: Index of first record <br/>
                                    event.rows: Number of rows to display in new page <br/>
                                    event.sortField: Field to sort against <br />
                                    event.sortOrder: Sort order as integer <br />
                                    event.multiSortMeta: MultiSort metadata <br />
                                    event.filters: Collection of active filters <br />
                                    event.filterMatchModes: Match modes per field
                                </td>
                                <td>Callback to invoke on sort. Page and Filter information is also available for lazy loading implementation.</td>
                            </tr>
                            <tr>
                                <td>filter</td>
                                <td>event.originalEvent: Browser event <br >
                                    event.first: Index of first record <br/>
                                    event.rows: Number of rows to display in new page <br/>
                                    event.sortField: Field to sort against <br />
                                    event.sortOrder: Sort order as integer <br />
                                    event.multiSortMeta: MultiSort metadata <br />
                                    event.filters: Collection of active filters <br />
                                    event.filteredValue: Filtered collection <br />
                                    event.filterMatchModes: Match modes per field
                                </td>
                                <td>Event to emit after filtering, not triggered in lazy mode.</td>
                            </tr>
                            <tr>
                                <td>row-click</td>
                                <td>event.originalEvent: Browser event. <br />
                                    event.data: Selected row data. <br />
                                    event.index: Row index.</td>
                                <td>Callback to invoke when a row is clicked.</td>
                            </tr>
                            <tr>
                                <td>row-contextmenu</td>
                                <td>event.originalEvent: Browser event. <br />
                                    event.data: Selected row data. <br />
                                    event.index: Row index.</td>
                                <td>Callback to invoke when a row is selected with a ContextMenu.</td>
                            </tr>
                            <tr>
                                <td>row-select</td>
                                <td>event.originalEvent: Browser event. <br />
                                    event.data: Selected row data. <br />
                                    event.index: Row index. <br />
                                    event.type: Type of the selection, valid values are "row", "radio" or "checkbox".</td>
                                <td>Callback to invoke when a row is selected.</td>
                            </tr>
                            <tr>
                                <td>row-unselect</td>
                                <td>event.originalEvent: Browser event. <br />
                                    event.data: Unselected row data. <br />
                                    event.index: Row index. <br />
                                    event.type: Type of the selection, valid values are "row", "radio" or "checkbox".</td>
                                <td>Callback to invoke when a row is unselected.</td>
                            </tr>
                            <tr>
                                <td>column-resize-end</td>
                                <td>event.element: DOM element of the resized column.<br />
                                    event.delta: Change in column width</td>
                                <td>Callback to invoke when a column is resized.</td>
                            </tr>
                            <tr>
                                <td>column-resize-end</td>
                                <td>event.element: DOM element of the resized column.<br />
                                    event.delta: Change in column width</td>
                                <td>Callback to invoke when a column is resized.</td>
                            </tr>
                            <tr>
                                <td>column-reorder</td>
                                <td>event.originalEvent: Browser event<br />
                                    event.dragIndex: Index of the dragged column<br />
                                    event.dropIndex: Index of the dropped column</td>
                                <td>Callback to invoke when a column is reordered.</td>
                            </tr>
                            <tr>
                                <td>row-reorder</td>
                                <td>event.originalEvent: Browser event<br />
                                    event.originalEvent: Browser event.<br />
                                    event.dragIndex: Index of the dragged row<br />
                                    value: Reordered value</td>
                                <td>Callback to invoke when a row is reordered.</td>
                            </tr>
                            <tr>
                                <td>row-expand</td>
                                <td>event.originalEvent: Browser event<br />
                                    event.data: Expanded row data.</td>
                                <td>Callback to invoke when a row is expanded.</td>
                            </tr>
                            <tr>
                                <td>row-collapse</td>
                                <td>event.originalEvent: Browser event<br />
                                    event.data: Collapsed row data.</td>
                                <td>Callback to invoke when a row is collapsed.</td>
                            </tr>
                            <tr>
                                <td>rowgroup-expand</td>
                                <td>event.originalEvent: Browser event<br />
                                    event.data: Expanded group value.</td>
                                <td>Callback to invoke when a row group is expanded.</td>
                            </tr>
                            <tr>
                                <td>rowgroup-collapse</td>
                                <td>event.originalEvent: Browser event<br />
                                    event.data: Collapsed group value.</td>
                                <td>Callback to invoke when a row group is collapsed.</td>
                            </tr>
                            <tr>
                                <td>cell-edit-init</td>
                                <td>event.originalEvent: Browser event<br />
                                    event.data: Row data to edit. <br />
                                    event.field: Field name of the row data. <br />
                                    event.index: Index of the row data to edit. <br /></td>
                                <td>Callback to invoke when cell edit is initiated.</td>
                            </tr>
                            <tr>
                                <td>cell-edit-complete</td>
                                <td>event.originalEvent: Browser event<br />
                                    event.data: Row data to edit. <br />
                                    event.field: Field name of the row data. <br />
                                    event.index: Index of the row data to edit. <br />
                                    event.type: Type of completion such as "enter", "outside" or "tab". <br /></td>
                                <td>Callback to invoke when cell edit is completed.</td>
                            </tr>
                            <tr>
                                <td>cell-edit-cancel</td>
                                <td>event.originalEvent: Browser event<br />
                                    event.data: Row data to edit. <br />
                                    event.field: Field name of the row data. <br />
                                    event.index: Index of the row data to edit. <br /></td>
                                <td>Callback to invoke when cell edit is cancelled with escape key.</td>
                            </tr>
                            <tr>
                                <td>row-edit-init</td>
                                <td>event.originalEvent: Browser event<br />
                                    event.data: Row data to edit. <br />
                                    event.field: Field name of the row data. <br />
                                    event.index: Index of the row data to edit. <br /></td>
                                <td>Callback to invoke when row edit is initiated.</td>
                            </tr>
                            <tr>
                                <td>row-edit-save</td>
                                <td>event.originalEvent: Browser event<br />
                                    event.data: Row data to edit. <br />
                                    event.field: Field name of the row data. <br />
                                    event.index: Index of the row data to edit. <br /></td>
                                <td>Callback to invoke when row edit is saved.</td>
                            </tr>
                            <tr>
                                <td>row-edit-cancel</td>
                                <td>event.originalEvent: Browser event<br />
                                    event.data: Row data to edit. <br />
                                    event.field: Field name of the row data. <br />
                                    event.index: Index of the row data to edit. <br /></td>
                                <td>Callback to invoke when row edit is cancelled.</td>
                            </tr>
                            <tr>
                                <td>virtual-scroll</td>
                                <td>event.first: Index of the first row. <br />
                                    event.rows: Rows per page.</td>
                                <td>Callback to invoke during virtual scrolling.</td>
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
                                <td>exportCSV</td>
                                <td>-</td>
                                <td>Exports the data to CSV format.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h5>Styling</h5>
                <p>Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.</p>

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

                <h5>Dependencies</h5>
                <p>None.</p>

            </TabPanel>

            <TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/datatabledemo" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<pre v-code.script>
<code>
&#123;
    "data": [
        &#123;
            "id": 1000,
            "name": "James Butt",
            "country": {
                "name": "Montserrat",
                "code": "ms"
            &#125;,
            "company": "Benton, John B Jr",
            "date": "2018-08-13",
            "status": "negotiation",
            "activity": 96,
            "representative": &#123;
                "name": "Ioni Bowcher",
                "image": "ionibowcher.png"
            &#125;
        &#125;,
        /...

</code></pre>

<pre v-code>
<code><template v-pre>
&lt;DataTable :value="customers" :paginator="true" class="p-datatable-customers" :rows="10"
    dataKey="id" :rowHover="true" v-model:selection="selectedCustomers" :filters="filters" :loading="loading"
    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[10,25,50]"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"&gt;
    &lt;template #header&gt;
        &lt;div class="table-header"&gt;
            List of Customers
            &lt;span class="p-input-icon-left"&gt;
                &lt;i class="pi pi-search" /&gt;
                &lt;InputText v-model="filters['global']" placeholder="Global Search" /&gt;
            &lt;/span&gt;
        &lt;/div&gt;
    &lt;/template&gt;
    &lt;template #empty&gt;
        No customers found.
    &lt;/template&gt;
    &lt;template #loading&gt;
        Loading customers data. Please wait.
    &lt;/template&gt;
    &lt;Column selectionMode="multiple" headerStyle="width: 3em"&gt;&lt;/Column&gt;
    &lt;Column field="name" header="Name" :sortable="true"&gt;
        &lt;template #body="slotProps"&gt;
            &lt;span class="p-column-title"&gt;Name&lt;/span&gt;
            {{slotProps.data.name}}
        &lt;/template&gt;
        &lt;template #filter&gt;
            &lt;InputText type="text" v-model="filters['name']" class="p-column-filter" placeholder="Search by name"/&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column header="Country" :sortable="true" sortField="country.name" filterField="country.name" filterMatchMode="contains"&gt;
        &lt;template #body="slotProps"&gt;
            &lt;span class="p-column-title"&gt;Country&lt;/span&gt;
            &lt;img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.data.country.code" width="30" /&gt;
            &lt;span class="image-text"&gt;{{slotProps.data.country.name}}&lt;/span&gt;
        &lt;/template&gt;
        &lt;template #filter&gt;
            &lt;InputText type="text" v-model="filters['country.name']" class="p-column-filter" placeholder="Search by country"/&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column header="Representative" :sortable="true" sortField="representative.name" filterField="representative.name" filterMatchMode="in"&gt;
        &lt;template #body="slotProps"&gt;
            &lt;span class="p-column-title"&gt;Representative&lt;/span&gt;
            &lt;img :alt="slotProps.data.representative.name" :src="'demo/images/avatar/' + slotProps.data.representative.image" width="32" style="vertical-align: middle" /&gt;
            &lt;span class="image-text"&gt;{{slotProps.data.representative.name}}&lt;/span&gt;
        &lt;/template&gt;
            &lt;template #filter&gt;
            &lt;MultiSelect v-model="filters['representative.name']" :options="representatives" optionLabel="name" optionValue="name" placeholder="All" class="p-column-filter"&gt;
                &lt;template #option="slotProps"&gt;
                    &lt;div class="p-multiselect-representative-option"&gt;
                        &lt;img :alt="slotProps.option.name" :src="'demo/images/avatar/' + slotProps.option.image" width="32" style="vertical-align: middle" /&gt;
                        &lt;span class="image-text"&gt;{{slotProps.option.name}}&lt;/span&gt;
                    &lt;/div&gt;
                &lt;/template&gt;
            &lt;/MultiSelect&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="date" header="Date" :sortable="true" filterMatchMode="custom" :filterFunction="filterDate"&gt;
        &lt;template #body="slotProps"&gt;
            &lt;span class="p-column-title"&gt;Date&lt;/span&gt;
            &lt;span&gt;{{slotProps.data.date}}&lt;/span&gt;
        &lt;/template&gt;
        &lt;template #filter&gt;
            &lt;Calendar v-model="filters['date']" dateFormat="yy-mm-dd" class="p-column-filter" placeholder="Registration Date"/&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="status" header="Status" :sortable="true" filterMatchMode="equals"&gt;
        &lt;template #body="slotProps"&gt;
            &lt;span class="p-column-title"&gt;Status&lt;/span&gt;
            &lt;span :class="'customer-badge status-' + slotProps.data.status"&gt;{{slotProps.data.status}}&lt;/span&gt;
        &lt;/template&gt;
        &lt;template #filter&gt;
            &lt;Dropdown v-model="filters['status']" :options="statuses" placeholder="Select a Status" class="p-column-filter" :showClear="true"&gt;
                &lt;template #option="slotProps"&gt;
                    &lt;span :class="'customer-badge status-' + slotProps.option"&gt;{{slotProps.option}}&lt;/span&gt;
                &lt;/template&gt;
            &lt;/Dropdown&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="activity" header="Activity" :sortable="true" filterMatchMode="gte"&gt;
        &lt;template #body="slotProps"&gt;
            &lt;span class="p-column-title"&gt;Activity&lt;/span&gt;
            &lt;ProgressBar :value="slotProps.data.activity" :showValue="false" /&gt;
        &lt;/template&gt;
        &lt;template #filter&gt;
            &lt;InputText type="text" v-model="filters['activity']" class="p-column-filter" placeholder="Minimum"/&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column headerStyle="width: 8rem; text-align: center" bodyStyle="text-align: center; overflow: visible"&gt;
        &lt;template #body&gt;
            &lt;Button type="button" icon="pi pi-cog" class="p-button-secondary"&gt;&lt;/Button&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

<pre v-code.script>
<code>
import CustomerService from '../../service/CustomerService';

export default {
    data() {
        return {
            customers: null,
            selectedCustomers: null,
            filters: {},
            loading: true,
            representatives: [
                {name: "Amy Elsner", image: 'amyelsner.png'},
                {name: "Anna Fali", image: 'annafali.png'},
                {name: "Asiya Javayant", image: 'asiyajavayant.png'},
                {name: "Bernardo Dominic", image: 'bernardodominic.png'},
                {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
                {name: "Ioni Bowcher", image: 'ionibowcher.png'},
                {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
                {name: "Onyama Limba", image: 'onyamalimba.png'},
                {name: "Stephen Shaw", image: 'stephenshaw.png'},
                {name: "XuXue Feng", image: 'xuxuefeng.png'}
            ],
            statuses: [
                'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
            ]
        }
    },
    created() {
        this.customerService = new CustomerService();
    },
    mounted() {
        this.customerService.getCustomersLarge().then(data => {
            this.customers = data;
            this.loading = false;
        });
    },
    methods: {
        filterDate(value, filter) {
            if (filter === undefined || filter === null || (typeof filter === 'string' &amp;&amp; filter.trim() === '')) {
                return true;
            }

            if (value === undefined || value === null) {
                return false;
            }

            return value === this.formatDate(filter);
        },
        formatDate(date) {
            let month = date.getMonth() + 1;
            let day = date.getDate();

            if (month &lt; 10) {
                month = '0' + month;
            }

            if (day &lt; 10) {
                day = '0' + day;
            }

            return date.getFullYear() + '-' + month + '-' + day;
        }
    }
}

</code></pre>

<pre v-code.css>
<code>
::v-deep(.p-paginator) {
    .p-paginator-current {
        margin-left: auto;
    }
}

::v-deep(.p-progressbar) {
    height: .5rem;
    background-color: #D8DADC;

    .p-progressbar-value {
        background-color: #607D8B;
    }
}

.table-header {
    display: flex;
    justify-content: space-between;
}

::v-deep(.p-datepicker) {
    min-width: 25rem;

    td {
        font-weight: 400;
    }
}

::v-deep(.p-datatable.p-datatable-customers) {
    .p-datatable-header {
        padding: 1rem;
        text-align: left;
        font-size: 1.5rem;
    }

    .p-paginator {
        padding: 1rem;
    }

    .p-datatable-thead > tr > th {
        text-align: left;
    }

    .p-datatable-tbody > tr > td {
        cursor: auto;
    }

    .p-dropdown-label:not(.p-placeholder) {
        text-transform: uppercase;
    }
}

/* Responsive */
.p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {
    display: none;
}

@media screen and (max-width: 960px) {
    ::v-deep(.p-datatable) {
        &.p-datatable-customers {
            .p-datatable-thead > tr > th,
            .p-datatable-tfoot > tr > td {
                display: none !important;
            }

            .p-datatable-tbody > tr {
                border-bottom: 1px solid var(--layer-2);

                > td {
                    text-align: left;
                    display: block;
                    border: 0 none !important;
                    width: 100% !important;
                    float: left;
                    clear: left;
                    border: 0 none;

                    .p-column-title {
                        padding: .4rem;
                        min-width: 30%;
                        display: inline-block;
                        margin: -.4rem 1rem -.4rem -.4rem;
                        font-weight: bold;
                    }

                    .p-progressbar {
                        margin-top: .5rem;
                    }
                }
            }
        }
    }
}

</code></pre>
			</TabPanel>
		</TabView>
	</div>
</template>