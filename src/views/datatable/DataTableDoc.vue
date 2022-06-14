<template>
    <div class="content-section documentation">
        <AppDoc name="DataTableDemo" :sources="sources" :service="['CustomerService']" :data="['customers-large']" github="datatable/DataTableDemo.vue">
            <h5>Import via Module</h5>
			<pre v-code.script><code>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';     //optional for column grouping
import Row from 'primevue/row';                     //optional for row

</code></pre>

            <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/datatable/datatable.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/column/column.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/columngroup/columngroup.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/row/row.min.js"&gt;&lt;/script&gt;

</code></pre>

            <h5>Getting Started</h5>
            <p>DataTable requires a value as an array of objects and columns defined with Column component. Throughout the samples, a car interface having vin, brand, year and color properties is used to define an object to be displayed by the datatable.
                Cars are loaded by a CarService that connects to a server to fetch the cars with a fetch API. Note that this is only for demo purposes, DataTable does not have any restrictions on how the data is provided.</p>

            <pre v-code.script><code>
export default class CarService {

	getCarsSmall() {
		return fetch.get('demo/data/cars-small.json').then(res => res.json()).then(d => d.data);
	}

	getCarsMedium() {
		return fetch.get('demo/data/cars-medium.json').then(res => res.json()).then(d => d.data);
	}

	getCarsLarge() {
		return fetch.get('demo/data/cars-large.json').then(res => res.json()).then(d => d.data);
	}
}

</code></pre>

            <p>Example response;</p>
            <pre v-code.script><code>
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
<pre v-code><code><template v-pre>
&lt;DataTable :value="cars"&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

<pre v-code.script><code>
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
<pre v-code><code><template v-pre>
&lt;DataTable :value="cars"&gt;
    &lt;Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

<pre v-code.script><code>
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
                            <td>style</td>
                            <td>object</td>
                            <td>null</td>
                            <td>Inline style of header, body and footer cells.</td>
                        </tr>
                        <tr>
                            <td>class</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of header, body and footer cells.</td>
                        </tr>
                        <tr>
                            <td>headerStyle</td>
                            <td>object</td>
                            <td>null</td>
                            <td>Inline style of the column header.</td>
                        </tr>
                        <tr>
                            <td>headerClass</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the column header.</td>
                        </tr>
                        <tr>
                            <td>bodyStyle</td>
                            <td>object</td>
                            <td>null</td>
                            <td>Inline style of the column body.</td>
                        </tr>
                        <tr>
                            <td>bodyClass</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the column body.</td>
                        </tr>
                        <tr>
                            <td>footerStyle</td>
                            <td>object</td>
                            <td>null</td>
                            <td>Inline style of the column footer.</td>
                        </tr>
                        <tr>
                            <td>footerClass</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the column footer.</td>
                        </tr>
                        <tr>
                            <td>showFilterMenu</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Whether to display the filter overlay.</td>
                        </tr>
                        <tr>
                            <td>showFilterOperator</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>When enabled, match all and match any operator selector is displayed.</td>
                        </tr>
                        <tr>
                            <td>showClearButton</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Displays a button to clear the column filtering.</td>
                        </tr>
                        <tr>
                            <td>showApplyButton</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Displays a button to apply the column filtering.</td>
                        </tr>
                        <tr>
                            <td>showFilterMatchModes</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Whether to show the match modes selector.</td>
                        </tr>
                        <tr>
                            <td>showAddButton</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>When enabled, a button is displayed to add more rules.</td>
                        </tr>
                        <tr>
                            <td>filterMatchModeOptions</td>
                            <td>array</td>
                            <td>null</td>
                            <td>An array of label-value pairs to override the global match mode options.</td>
                        </tr>
                        <tr>
                            <td>maxConstraints</td>
                            <td>number</td>
                            <td>2</td>
                            <td>Maximum number of constraints for a column filter.</td>
                        </tr>
                        <tr>
                            <td>excludeGlobalFilter</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Whether to exclude from global filtering or not.</td>
                        </tr>
                        <tr>
                            <td>filterHeaderStyle</td>
                            <td>object</td>
                            <td>null</td>
                            <td>Inline style of the column filter header in row filter display.</td>
                        </tr>
                        <tr>
                            <td>filterHeaderClass</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the column filter header in row filter display.</td>
                        </tr>
                        <tr>
                            <td>filterMenuStyle</td>
                            <td>object</td>
                            <td>null</td>
                            <td>Inline style of the column filter overlay.</td>
                        </tr>
                        <tr>
                            <td>filterMenuClass</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the column filter overlay.</td>
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
                            <td>frozen</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Whether the column is fixed in horizontal scrolling.</td>
                        </tr>
                        <tr>
                            <td>alignFrozen</td>
                            <td>string</td>
                            <td>left</td>
                            <td>Position of a frozen column, valid values are left and right.</td>
                        </tr>
                        <tr>
                            <td>exportable</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Whether the column is included in data export.</td>
                        </tr>
                        <tr>
                            <td>exportHeader</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Custom export header of the column to be exported as CSV.</td>
                        </tr>
                        <tr>
                            <td>filterMatchMode</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Defines the filtering algorithm to use when searching the options.</td>
                        </tr>
                        <tr>
                            <td>hidden</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Whether the column is rendered.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h5>Column Slots</h5>
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
                            <td>column: Column node</td>
                        </tr>
                        <tr>
                            <td>body</td>
                            <td>data: Row data <br />
                                column: Column node <br />
                                field: Column field <br />
                                index: Row index <br />
                                frozenRow: Is row frozen<br />
                                editorInitCallback: Callback function</td>
                        </tr>
                        <tr>
                            <td>footer</td>
                            <td>column: Column node</td>
                        </tr>
                        <tr>
                            <td>editor</td>
                            <td>data: Row data <br />
                                column: Column node <br />
                                field: Column field <br />
                                index: Row index <br />
                                frozenRow: Is row frozen <br />
                                editorSaveCallback: Callback function <br />
                                editorCancelCallback: Callback function</td>
                        </tr>
                        <tr>
                            <td>filter</td>
                            <td>field: Column field <br />
                                filterModel: {value,matchMode} Filter metadata <br />
                                filterCallback: Callback function</td>
                        </tr>
                        <tr>
                            <td>filterheader</td>
                            <td>field: Column field <br />
                                filterModel: {value,matchMode} Filter metadata <br />
                                filterCallback: Callback function</td>
                        </tr>
                        <tr>
                            <td>filterfooter</td>
                            <td>field: Column field <br />
                                filterModel: {value,matchMode} Filter metadata <br />
                                filterCallback: Callback function</td>
                        </tr>
                        <tr>
                            <td>filterclear</td>
                            <td>field: Column field <br />
                                filterModel: {value,matchMode} Filter metadata <br />
                                filterCallback: Callback function</td>
                        </tr>
                        <tr>
                            <td>filterapply</td>
                            <td>field: Column field <br />
                                filterModel: {value,matchMode} Filter metadata <br />
                                filterCallback: Callback function</td>
                        </tr>
                        <tr>
                            <td>loading</td>
                            <td>data: Row data <br />
                                column: Column node <br />
                                field: Column field <br />
                                index: Row index <br />
                                frozenRow: Is row frozen <br />
                                loadingOptions: Loading options.</td>
                        </tr>
					</tbody>
				</table>
            </div>

            <h5>Auto Layout</h5>
            <p>Default table-layout is fixed meaning the cell widths do not depend on their content. If you require cells to scale based on their contents set <i>autoLayout</i> property to true. Note that Scrollable and/or Resizable tables do not support auto layout due to technical limitations.</p>

            <h5>Templating</h5>
            <p>Field data of a corresponding row is displayed as the cell content by default, this can be customized using a <i>body</i> template where current row data and column properties are passed via the slot props.
                On the other hand, <i>header</i> and <i>footer</i> sections of a column can either be defined with the properties or the templates. Similarly DataTable itself also provides header and footer properties along with the templates for the main header and footer of the table.</p>

                <pre v-code><code><template v-pre>
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

<pre v-code><code><template v-pre>
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
<pre v-code><code><template v-pre>
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

<pre v-code><code><template v-pre>
&lt;DataTable :value="cars" :paginator="true" :rows="10"&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

            <p><i>paginatorstart</i> and <i>paginatorend</i> templates are available to specify custom content at the left and right side.</p>
<pre v-code><code><template v-pre>
&lt;DataTable :value="cars" :paginator="true" :rows="10"&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
    &lt;template #paginatorstart&gt;
        &lt;Button type="button" icon="pi pi-refresh" /&gt;
    &lt;/template&gt;
    &lt;template #paginatorend&gt;
        &lt;Button type="button" icon="pi pi-cloud" /&gt;
    &lt;/template&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

            <p>Paginator can also be programmed programmatically using a binding to the <i>first</i> property that defines the index of the
            first element to display. For example setting first to zero will reset the paginator to the very first page. This property
            also supports v-model in case you'd like your binding to be updated whenever the user changes the page.</p>
<pre v-code><code><template v-pre>
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

<pre v-code><code><template v-pre>
&lt;DataTable :value="cars"&gt;
    &lt;Column field="vin" header="Vin" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color" :sortable="true"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

            <p>By default sorting is executed on the clicked column only. To enable multiple field sorting, set <i>sortMode</i> property to "multiple" and use metakey when clicking on another column.</p>
<pre v-code><code><template v-pre>
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
<pre v-code><code><template v-pre>
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
<pre v-code><code><template v-pre>
&lt;DataTable :value="cars" sortMode="multiple" :multiSortMeta="multiSortMeta"&gt;
    &lt;Column field="vin" header="Vin" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand" :sortable="true"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color" :sortable="true"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

<pre v-code.script><code>
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
            <p>DataTable has advanced filtering capabilities that does the heavy lifting while providing flexible customization. Filtering has two layout alternatives defined with the <i>filterDisplay</i>.
            In <b>row</b> setting, filter elements are displayed in a separate row at the header section whereas
            in <i>menu</i> mode filter elements are displayed inside an overlay. Filter metadata is specified using the <i>filters</i> as a v-model and UI elements for the filtering
            are placed inside the filter template. The template filter gets a <i>filterModel</i> and <i>filterCallback</i>,
            use filterModel.value to populate the filter with your own form components and call the filterCallback with the event of your choice like @input, @change, @click.</p>

<pre v-code.script><code>
import CustomerService from '../../service/CustomerService';
import {FilterMatchMode} from 'primevue/api';

export default {
    data() {
        return {
            customers: null,
            filters: {
                'name': {value: null, matchMode: FilterMatchMode.STARTS_WITH}
            }
        }
    },
    created() {
        this.customerService = new CustomerService();
    },
    mounted() {
        this.customerService.getCustomersLarge().then(data => this.customers = data);
    }
}
</code></pre>

            <h6>Filter Row</h6>
            <p>Input field is displayed in a separate header row.</p>

<pre v-code><code><template v-pre>
&lt;DataTable :value="customers1"
                    dataKey="id" v-model:filters="filters" filterDisplay="row" :loading="loading"&gt;
    &lt;Column field="name" header="Name"&gt;
        &lt;template #filter="{filterModel,filterCallback}"&gt;
            &lt;InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" :placeholder="`Search by name - ${filterModel.matchMode}`"/&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

            <h6>Filter Menu</h6>
            <p>Input field is displayed in an overlay.</p>

<pre v-code><code><template v-pre>
&lt;DataTable :value="customers1"
                    dataKey="id" v-model:filters="filters" filterDisplay="menu" :loading="loading"&gt;
    &lt;Column field="name" header="Name"&gt;
        &lt;template #filter="{filterModel,filterCallback}"&gt;
            &lt;InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" :placeholder="`Search by name - ${filterModel.matchMode}`"/&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

            <h6>Multiple Constraints</h6>
            <p>In "menu" display, it is possible to add more constraints to a same filter. In this case, metadata could be an array of constraints. The operator
            defines whether all or any of the constraints should match.</p>

<pre v-code.script><code>
data() {
    return {
        customers: null,
        filters: {
            'name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
        }
    }
}
</code></pre>

            <h6>Populate Filters</h6>
            <p>Providing a filters with predefined values would be enough to display the table as filtered by default. This approach can also be used to clear filters progammatically.</p>
<pre v-code.script><code>
data() {
    return {
        customers: null,
        filters: {
            'name': {operator: FilterOperator.AND, constraints: [
                {value: 'Prime', matchMode: FilterMatchMode.STARTS_WITH},
                {value: 'Vue', matchMode: FilterMatchMode.CONTAINS}
            ]}
        }
    }
}
</code></pre>

            <h6>Match Modes</h6>
            <p>Depending on the <i>dataType</i> of the column, suitable match modes are displayed. Default configuration is available at <i>PrimeVue.filterMatchModeOptions</i> which can be used to customize the modes globally for all tables.</p>

                <pre v-code.script><code>
import {createApp} from 'vue';
import PrimeVue from 'primevue/config';
import FilterMatchMode from 'primevue/api',
const app = createApp(App);

app.use(PrimeVue, {
    filterMatchModeOptions: {
        text: [
            FilterMatchMode.STARTS_WITH,
            FilterMatchMode.CONTAINS,
            FilterMatchMode.NOT_CONTAINS,
            FilterMatchMode.ENDS_WITH,
            FilterMatchMode.EQUALS,
            FilterMatchMode.NOT_EQUALS
        ],
        numeric: [
            FilterMatchMode.EQUALS,
            FilterMatchMode.NOT_EQUALS,
            FilterMatchMode.LESS_THAN,
            FilterMatchMode.LESS_THAN_OR_EQUAL_TO,
            FilterMatchMode.GREATER_THAN,
            FilterMatchMode.GREATER_THAN_OR_EQUAL_TO
        ],
        date: [
            FilterMatchMode.DATE_IS,
            FilterMatchMode.DATE_IS_NOT,
            FilterMatchMode.DATE_BEFORE,
            FilterMatchMode.DATE_AFTER
        ]
    }
});
</code></pre>

            <p>If you need to override the match modes for a particular column use the <i>filterMatchModeOptions</i> property and provide an array with label-value pairs.</p>
<pre v-code><code><template v-pre>
&lt;Column field="name" header="Name" :filterMatchModeOptions="matchModes"&gt;
    &lt;template #filter="{filterModel,filterCallback}"&gt;
        &lt;InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" :placeholder="`Search by name - ${filterModel.matchMode}`"/&gt;
    &lt;/template&gt;
&lt;/Column&gt;
</template>
</code></pre>

                <pre v-code.script><code>
matchModes: [
    {label: 'Starts With', value: FilterMatchMode.STARTS_WITH},
    {label: 'Contains', value: FilterMatchMode.CONTAINS},
]
</code></pre>

            <h6>Custom Filter</h6>
            <p>Custom filtering is implemented using the <i>FilterService</i>, first register your filter and add it to your <i>filterMatchModeOptions</i>.</p>
<pre v-code.script><code>
import {FilterService} from 'primevue/api';

FilterService.register('myfilter', (a,b) => a === b);
</code></pre>

<pre v-code.script><code>
matchModes: [
    {label: 'My Filter', "myfilter"},
    {label: 'Starts With', value: FilterMatchMode.STARTS_WITH},
    {label: 'Contains', value: FilterMatchMode.CONTAINS},
]
</code></pre>

            <h6>Filter Slots</h6>
            <p>Filter menu overlay can be customized even further with various templates including <i>filterheader</i>, <i>filterfooter</i>, <i>filterclear</i>, <i>filterapply</i>. Example here changes the buttons and adds a footer.</p>

<pre v-code><code><template v-pre>
&lt;Column header="Country" filterField="country.name"&gt;
    &lt;template #filter="{filterModel}"&gt;
        &lt;InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by country"/&gt;
    &lt;/template&gt;
    &lt;template #filterclear="{filterCallback}"&gt;
        &lt;Button type="button" icon="pi pi-times" @click="filterCallback()" class="p-button-secondary"&gt;&lt;/Button&gt;
    &lt;/template&gt;
    &lt;template #filterapply="{filterCallback}"&gt;
        &lt;Button type="button" icon="pi pi-check" @click="filterCallback()" class="p-button-success"&gt;&lt;/Button&gt;
    &lt;/template&gt;
    &lt;template #filterfooter&gt;
        &lt;div class="px-3 pt-0 pb-3 text-center font-bold"&gt;Customized Buttons&lt;/div&gt;
    &lt;/template&gt;
&lt;/Column&gt;
</template>
</code></pre>


            <h5>Selection</h5>
            <p>DataTable provides single and multiple selection modes on click of a row. Selected rows are bound to the <i>selection</i> property and updated using the v-model directive.
                Alternatively column based selection can be done using radio buttons or checkboxes using <i>selectionMode</i> of a particular column. In addition row-select and row-unselect
                events are provided as optional callbacks.</p>

            <p>The <i>dataKey</i> property identifies a unique value of a row in the dataset, it is not mandatory however being able to define it increases the performance of the table signifantly.</p>

            <p>In single mode, selection binding is an object reference.</p>

<pre v-code><code><template v-pre>
&lt;DataTable :value="cars" v-model:selection="selectedCar" selectionMode="single" dataKey="vin"&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

            <p>In multiple mode, selection binding should be an array and multiple items can either be selected using metaKey or toggled individually depending on the value of <i>metaKeySelection</i> property value which is true by default. On touch enabled devices metaKeySelection is turned off automatically. Additionally ShiftKey is supported for range selection.</p>
<pre v-code><code><template v-pre>
&lt;DataTable :value="cars" v-model:selection="selectedCars" selectionMode="multiple" dataKey="vin"&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

            <p>If you prefer a radioButton or a checkbox instead of a row click, use the <i>selectionMode</i> of a column instead. Following datatable displays a checkbox at the first column of each row and automatically adds a header checkbox to toggle selection of all rows.</p>
<pre v-code><code><template v-pre>
&lt;DataTable :value="cars" v-model:selection="selectedCars" dataKey="vin"&gt;
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
<pre v-code><code><template v-pre>
&lt;DataTable :value="cars" :scrollable="true" scrollHeight="400px"&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

            <h5>Column Widths of a Scrollable Table</h5>
            <p>Scrollable table uses flex layout so there are a couple of rules to consider when adjusting the widths of columns.</p>
            <ul>
                <li>Use <i>min-width</i> in vertical scrolling only so that when there is enough space columns may grow and for smaller screens a horizontal scrollbar is displayed to provide responsive design.</li>
                <li>When horizontal scrolling is enabled, prefer <i>width</i> instead of <i>min-width</i>.</li>
                <li>In vertical scrolling only, use <i>flex</i> to disable grow and shrink while defining a initial width. When horizontal scrolling is enabled, this is not required as columns do not grow or shrink in horizontal scrolling.</li>
            </ul>

<pre v-code><code><template v-pre>
&lt;Column field="vin" header="Vin" style="flex: 0 0 4rem"&gt;&lt;/Column&gt;
</template>
</code></pre>

            <h6>Flex Scroll</h6>
            <p>In cases where viewport should adjust itself according to the table parent's height instead of a fixed viewport height, set scrollHeight option as flex. In example below, table is inside a Dialog where viewport size dynamically responds to the dialog size changes such as maximizing.</p>
<pre v-code><code><template v-pre>
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

            <h6>Full Page Scroll</h6>
            <p>FlexScroll can also be used for cases where scrollable viewport should be responsive with respect to the window size. See the <router-link to="/datatable/flexscroll">full page</router-link> demo for an example.</p>
<pre v-code><code><template v-pre>
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

            <h6>Horizontal Scrolling</h6>
            <p>For horizontal scrolling, it is required to set <i>scrollDirection</i> to "horizontal" and give fixed widths to columns.</p>
<pre v-code><code><template v-pre>
&lt;DataTable :value="customers" :scrollable="true"  scrollDirection="horizontal"&gt;
    &lt;Column field="id" header="Id" footer="Id" :style="{width:'200px'}"&gt;&lt;/Column&gt;
    &lt;Column field="name" header="Name" footer="Name" :style="{width:'200px'}"&gt;&lt;/Column&gt;
    &lt;Column field="country.name" header="Country" footer="Country" :style="{width:'200px'}"&gt;&lt;/Column&gt;
    &lt;Column field="date" header="Date" footer="Date" :style="{width:'200px'}"&gt;&lt;/Column&gt;
    &lt;Column field="balance" header="Balance" footer="Balance" :style="{width:'200px'}"&gt;&lt;/Column&gt;
    &lt;Column field="company" header="Company" footer="Company" :style="{width:'200px'}"&gt;&lt;/Column&gt;
    &lt;Column field="status" header="Status" footer="Status" :style="{width:'200px'}"&gt;&lt;/Column&gt;
    &lt;Column field="activity" header="Activity" footer="Activity" :style="{width:'200px'}"&gt;&lt;/Column&gt;
    &lt;Column field="representative.name" header="Representative" footer="Representative" :style="{width:'200px'}"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

            <h6>Horizontal and Vertical Scrolling</h6>
            <p>Set <i>scrollDirection</i> to "both" and give fixed widths to columns to scroll both ways.</p>
<pre v-code><code><template v-pre>
&lt;DataTable :value="customers" :scrollable="true" scrollHeight="400px" scrollDirection="both"&gt;
    &lt;Column field="id" header="Id" footer="Id" :style="{width:'200px'}"&gt;&lt;/Column&gt;
    &lt;Column field="name" header="Name" footer="Name" :style="{width:'200px'}"&gt;&lt;/Column&gt;
    &lt;Column field="country.name" header="Country" footer="Country" :style="{width:'200px'}"&gt;&lt;/Column&gt;
    &lt;Column field="date" header="Date" footer="Date" :style="{width:'200px'}"&gt;&lt;/Column&gt;
    &lt;Column field="balance" header="Balance" footer="Balance" :style="{width:'200px'}"&gt;&lt;/Column&gt;
    &lt;Column field="company" header="Company" footer="Company" :style="{width:'200px'}"&gt;&lt;/Column&gt;
    &lt;Column field="status" header="Status" footer="Status" :style="{width:'200px'}"&gt;&lt;/Column&gt;
    &lt;Column field="activity" header="Activity" footer="Activity" :style="{width:'200px'}"&gt;&lt;/Column&gt;
    &lt;Column field="representative.name" header="Representative" footer="Representative" :style="{width:'200px'}"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

            <h6>Frozen Rows</h6>
            <p>Frozen rows are used to fix certain rows while scrolling, this data is defined with the <i>frozenValue</i> property.</p>

<pre v-code><code><template v-pre>
&lt;DataTable :value="customers" :frozenValue="lockedCustomers" :scrollable="true" scrollHeight="400px"&gt;
    &lt;Column field="name" header="Name"&gt;&lt;/Column&gt;
    &lt;Column field="country.name" header="Country"&gt;&lt;/Column&gt;
    &lt;Column field="representative.name" header="Representative"&gt;&lt;/Column&gt;
    &lt;Column field="status" header="Status"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

            <h6>Frozen Columns</h6>
            <p>Certain columns can be frozen by using the <i>frozen</i> property of the column component. In addition <i>alignFrozen</i> is available to define whether the column should
            be fixed on the left or right.</p>

<pre v-code><code><template v-pre>
&lt;DataTable :value="customers" :scrollable="true" scrollHeight="400px" scrollDirection="both"&gt;
    &lt;Column field="name" header="Name" :style="{width:'200px'}" frozen&gt;&lt;/Column&gt;
    &lt;Column field="id" header="Id" :style="{width:'100px'}" :frozen="idFrozen"&gt;&lt;/Column&gt;
    &lt;Column field="name" header="Name" :style="{width:'200px'}"&gt;&lt;/Column&gt;
    &lt;Column field="country.name" header="Country" :style="{width:'200px'}"&gt;&lt;/Column&gt;
    &lt;Column field="date" header="Date" :style="{width:'200px'}"&gt;&lt;/Column&gt;
    &lt;Column field="company" header="Company" :style="{width:'200px'}"&gt;&lt;/Column&gt;
    &lt;Column field="status" header="Status" :style="{width:'200px'}"&gt;&lt;/Column&gt;
    &lt;Column field="activity" header="Activity" :style="{width:'200px'}"&gt;&lt;/Column&gt;
    &lt;Column field="representative.name" header="Representative" :style="{width:'200px'}"&gt;&lt;/Column&gt;
    &lt;Column field="balance" header="Balance" :style="{width:'200px'}" frozen alignFrozen="right"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

            <h6>Scrollable RowGroup</h6>
            <p>Row groups with subheaders have exclusive support for filtering, when the table scrolls the subheaders stay fixed as long as their
            data are still displayed. No additional configuration is required to enable this feature. View the <router-link to="/datatable/rowgroup">Row Group</router-link> demo for an example.</p>

            <h5>Lazy Loading</h5>
            <p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking corresponding callbacks such as paging and sorting.
                It is also important to assign the logical number of rows to totalRecords by doing a projection query for paginator configuration so that paginator displays the UI accordingly.</p>

            <p>Lazy loading is implemented by handling <i>page</i>, <i>sort</i>, <i>filter</i> events by making a remote query using the information
            passed to these events such as first offset, number of rows, sort field for ordering and filters. Note that, in lazy filtering totalRecords should also be updated to align the data with the paginator.</p>

            <p>Visit the <router-link to="/datatable/lazy">lazy loading</router-link> demo for an example with a remote datasource.</p>

            <h5>Row Expansion</h5>
            <p>Rows can be expanded to display additional content using the <i>expandedRows</i> property with the v-model directive accompanied by a template named "expansion". <i>row-expand</i> and <i>row-collapse</i> are optional callbacks that are invoked when a row is expanded or toggled.</p>

            <p>The <i>dataKey</i> property identifies a unique value of a row in the dataset, it is not mandatory in row expansion functionality however being able to define it increases the performance of the table significantly.</p>
<pre v-code><code><template v-pre>
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
                &lt;div class="grid"&gt;
                    &lt;div class="col-12"&gt;Vin: &lt;b&gt;&#123;&#123;slotProps.data.vin&#125;&#125;&lt;/b&gt;&lt;/div&gt;
                    &lt;div class="col-12"&gt;Year: &lt;b&gt;&#123;&#123;slotProps.data.year&#125;&#125;&lt;/b&gt;&lt;/div&gt;
                    &lt;div class="col-12"&gt;Brand: &lt;b&gt;&#123;&#123;slotProps.data.brand&#125;&#125;&lt;/b&gt;&lt;/div&gt;
                    &lt;div class="col-12"&gt;Color: &lt;b&gt;&#123;&#123;slotProps.data.color&#125;&#125;&lt;/b&gt;&lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;Button icon="pi pi-search"&gt;&lt;/Button&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

<pre v-code.script><code>
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

            <p>Individual cell editing is configured by setting the <i>editMode</i> to <b>cell</b>, defining editors with the <b>editor</b> template along with the <i>@cell-edit-complete</i> event. The content of the
            editor defines how the editing is implemented. The editor template receives a clone of the row data and using <i>@cell-edit-complete</i> event the new value can be updated to the model or cancelled.
            This also provides flexibility to apply conditional logic such as implementing validations.</p>

<pre v-code><code><template v-pre>
&lt;h5&gt;Cell Editing&lt;/h5&gt;
&lt;DataTable :value="cars" editMode="cell" @cell-edit-complete="onCellEditComplete"&gt;
    &lt;Column field="vin" header="Vin"&gt;
        &lt;template #editor="slotProps"&gt;
            &lt;InputText v-model="slotProps.data[slotProps.field]" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;
        &lt;template #editor="slotProps"&gt;
            &lt;InputText v-model="slotProps.data[slotProps.field]" /&gt;
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
            &lt;InputText v-model="slotProps.data[slotProps.field]" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

<pre v-code.script><code>
import CarService from '../../service/CarService';
import Vue from 'vue';

export default {
    data() {
        return {
            cars: null,
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
    },
    methods: {
        onCellEditComplete(event) {
            let { data, newValue, field } = event;

            switch (event.field) {
                case 'year':
                    if (this.isPositiveInteger(newValue))
                        data[field] = newValue;
                    else
                        event.preventDefault();
                break;

                default:
                    if (newValue.trim().length > 0)
                        data[field] = newValue;
                    else
                        event.preventDefault();
                break;
            }
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
        this.carService.getCarsSmall().then(data => this.cars = data);
    }
}

</code></pre>

            <p>Row Editing is specified by setting <i>cellEdit</i> as <b>row</b>, defining <i>editingRows</i> with the v-model directive to hold the reference of the editing rows,
            adding a row editor column to provide the editing controls and implementing <i>@row-edit-save</i> to update the original row data. Note that
            since <i>editingRows</i> is two-way binding enabled, you may use it to initially display one or more rows in editing more or programmatically toggle row editing.</p>
<pre v-code><code><template v-pre>
&lt;h3&gt;Row Editing&lt;/h3&gt;
&lt;DataTable :value="cars" editMode="row" dataKey="vin" v-model:editingRows="editingRows" @row-edit-save="onRowEditSave"&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;
        &lt;template #editor="slotProps"&gt;
            &lt;InputText v-model="slotProps.data[slotProps.field]" autofocus/&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;
        &lt;template #editor="slotProps"&gt;
            &lt;InputText v-model="slotProps.data[slotProps.field]" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;
        &lt;template #editor="slotProps"&gt;
            &lt;InputText v-model="slotProps.data[slotProps.field]" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column :rowEditor="true" headerStyle="width:7rem" bodyStyle="text-align:center"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

<pre v-code.script><code>
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
    created() {
        this.carService = new CarService();
    },
    methods: {
        onRowEditSave(event) {
            let { newData, index } = event;

            this.cars[index] = newData;
        },
    },
    mounted() {
        this.carService.getCarsSmall().then(data => this.cars = data);
    }
}

</code></pre>

            <h5>Column Resize</h5>
            <p>Columns can be resized using drag drop by setting the <i>resizableColumns</i> to true. There are two resize modes; "fit" and "expand". Fit is the default one and the overall table width does not change when a column is resized.
                In "expand" mode, table width also changes along with the column width. <i>column-resize-end</i> is a callback that passes the resized column header and delta change as a parameter.</p>
<pre v-code><code><template v-pre>
&lt;DataTable :value="cars" :resizableColumns="true" columnResizeMode="fit | expand"&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

            <p>It is important to note that when you need to change column widths, since table width is 100%, giving fixed pixel widths does not work well as browsers scale them, instead give percentage widths.</p>
<pre v-code><code><template v-pre>
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
<pre v-code><code><template v-pre>
&lt;DataTable :value="cars" :reorderableColumns="true"&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

            <h5>Row Reorder</h5>
            <p>Data can be reordered using drag drop by adding a reorder column that will display an icon as a drag handle along with the <i>row-reorder</i> event which is <b>mandatory</b> to update the new order. Note that the reorder icon can be customized using <i>rowReorderIcon</i> of the column component.</p>
<pre v-code><code><template v-pre>
&lt;DataTable :value="cars" @row-reorder="onRowReorder"&gt;
    &lt;Column :rowReorder="true" headerStyle="width: 3em" /&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

<pre v-code.script><code>
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

<pre v-code><code><template v-pre>
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

<pre v-code.script><code>
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
<pre v-code><code><template v-pre>
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

<pre v-code.script><code>
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
<pre v-code><code><template v-pre>
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

<pre v-code.script><code>
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
<pre v-code><code><template v-pre>
&lt;DataTable :value="cars" contextMenu v-model:contextMenuSelection="selectedCar" @row-contextmenu="onRowContextMenu"&gt;
    &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
    &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
    &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
    &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;

&lt;ContextMenu :model="menuModel" ref="cm" /&gt;
</template>
</code></pre>

<pre v-code.script><code>
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
<pre v-code><code><template v-pre>
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
<pre v-code><code><template v-pre>
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

<pre v-code.script><code>
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
           <p>DataTable responsive layout can be achieved in two ways; first approach is displaying a horizontal scrollbar for smaller screens
                and second one is defining a breakpoint to display the cells of a row as stacked. Scrollable tables use the scroll layout approach internally and do not require additional configuration.</p>

            <h6>Scroll Layout</h6>
            <p>Set <i>responsiveLayout</i> to scroll to enabled this layout. Note that, when scroll mode is enabled table-layout automatically switches to auto from fixed
            as a result table widths are likely to differ and resizable columns are not supported. Read more about <a href="https://www.w3schools.com/cssref/pr_tab_table-layout.asp">table-layout</a> for more details.</p>

<pre v-code><code><template v-pre>
&lt;DataTable :value="products" responsiveLayout="scroll"&gt;

&lt;/DataTable&gt;
</template>
</code></pre>

            <h6>Stack Layout</h6>
            <p>In stack layout, columns are displayed as stacked after a certain breakpoint. Default is '960px'.</p>
<pre v-code><code><template v-pre>
&lt;DataTable :value="products" responsiveLayout="stack" breakpoint="640px"&gt;

&lt;/DataTable&gt;
</template>
</code></pre>

            <h5>Row and Cell Styling</h5>
            <p>Certain rows or cells can easily be styled based on conditions. Cell styling is implemented with templating whereas row styling utilizes the <i>rowClass</i> property which takes the
            row data as a parameter and returns the style class as a string.</p>
<pre v-code><code><template v-pre>
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

<pre v-code.script><code>
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

<pre v-code.css><code>
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
                            <td>filterDisplay</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Layout of the filter elements, valid values are "row" and "menu".</td>
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
                            <td>exportFunction</td>
                            <td>function</td>
                            <td>download</td>
                            <td>Custom function to export data.</td>
                        </tr>
                        <tr>
                            <td>autoLayout</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Whether the cell widths scale according to their content or not. Does not apply to scrollable tables.</td>
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
                            <td>A function that takes the row data as a parameter and returns a string to apply a particular class for the row.</td>
                        </tr>
                        <tr>
                            <td>rowStyle</td>
                            <td>object</td>
                            <td>null</td>
                            <td>A function that takes the row data as a parameter and returns the inline style for the corresponding row.</td>
                        </tr>
                        <tr>
                            <td>scrollable</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When specified, enables horizontal and/or vertical scrolling.</td>
                        </tr>
                        <tr>
                            <td>scrollDirection</td>
                            <td>string</td>
                            <td>vertical</td>
                            <td>Orientation of the scrolling, options are "vertical", "horizontal" and "both".</td>
                        </tr>
                        <tr>
                            <td>scrollHeight</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Height of the scroll viewport in fixed pixels or the "flex" keyword for a dynamic size.</td>
                        </tr>
                        <tr>
                            <td>virtualScrollerOptions</td>
                            <td>object</td>
                            <td>null</td>
                            <td>Whether to use the virtualScroller feature. The properties of <router-link to="/virtualscroller">VirtualScroller</router-link> component can be used like an object in it.
                            <br /><b>Note:</b> Currently only vertical orientation mode is supported.</td>
                        </tr>
                        <tr>
                            <td>frozenValue</td>
                            <td>array</td>
                            <td>null</td>
                            <td>Items of the frozen part in scrollable DataTable.</td>
                        </tr>
                        <tr>
                            <td>responsiveLayout</td>
                            <td>string</td>
                            <td>stack</td>
                            <td>Defines the responsive mode, valid options are "stack" and "scroll".</td>
                        </tr>
                        <tr>
                            <td>breakpoint</td>
                            <td>string</td>
                            <td>960px</td>
                            <td>The breakpoint to define the maximum width boundary when using stack responsive layout.</td>
                        </tr>
                        <tr>
                            <td>showGridlines</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Whether to show grid lines between cells.</td>
                        </tr>
                        <tr>
                            <td>stripedRows</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Whether to displays rows with alternating colors.</td>
                        </tr>
                        <tr>
                            <td>tableStyle</td>
                            <td>object</td>
                            <td>null</td>
                            <td>Inline style of the table element.</td>
                        </tr>
                        <tr>
                            <td>tableClass</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the table element.</td>
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
                                event.filteredValue: Filtered collection (non-lazy only)<br />
                            </td>
                            <td>Event to emit after filtering, not triggered in lazy mode.</td>
                        </tr>
                        <tr>
                            <td>value-change</td>
                            <td>value: Value displayed by the table</td>
                            <td>Callback to invoke after filtering, sorting, pagination and cell editing to pass the rendered value.</td>
                        </tr>
                        <tr>
                            <td>row-click</td>
                            <td>event.originalEvent: Browser event. <br />
                                event.data: Selected row data. <br />
                                event.index: Row index.</td>
                            <td>Callback to invoke when a row is clicked.</td>
                        </tr>
                         <tr>
                            <td>row-dblclick</td>
                            <td>event.originalEvent: Browser event. <br />
                                event.data: Selected row data. <br />
                                event.index: Row index.</td>
                            <td>Callback to invoke when a row is double clicked.</td>
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
                            <td>row-select-all</td>
                            <td>event.originalEvent: Browser event. <br />
                                event.data: Selected dataset</td>
                            <td>Fired when header checkbox is checked.</td>
                        </tr>
                        <tr>
                            <td>row-unselect-all</td>
                            <td>event.originalEvent: Browser event.</td>
                            <td>Fired when header checkbox is unchecked.</td>
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
                                event.dragIndex: Index of the dragged row<br />
                                event.dropIndex: Index of the dropped row<br />
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
                                event.newData: New row data after editing. <br />
                                event.value: Field value of row data to edit. <br />
                                event.newValue: Field value of new row data after editing. <br />
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
                                event.newData: New row data after editing. <br />
                                event.field: Field name of the row data. <br />
                                event.index: Index of the row data to edit. <br /></td>
                            <td>Callback to invoke when row edit is initiated.</td>
                        </tr>
                        <tr>
                            <td>row-edit-save</td>
                            <td>event.originalEvent: Browser event<br />
                                event.data: Row data to edit. <br />
                                event.newData: New row data after editing. <br />
                                event.field: Field name of the row data. <br />
                                event.index: Index of the row data to edit. <br /></td>
                            <td>Callback to invoke when row edit is saved.</td>
                        </tr>
                        <tr>
                            <td>row-edit-cancel</td>
                            <td>event.originalEvent: Browser event<br />
                                event.data: Row data to edit. <br />
                                event.newData: New row data after editing. <br />
                                event.field: Field name of the row data. <br />
                                event.index: Index of the row data to edit. <br /></td>
                            <td>Callback to invoke when row edit is cancelled.</td>
                        </tr>
                        <tr>
                            <td>state-save</td>
                            <td>event.first: Index of first record <br/>
                                event.rows: Number of rows to display in new page <br/>
                                event.sortField: Field to sort against <br />
                                event.sortOrder: Sort order as integer <br />
                                event.multiSortMeta: MultiSort metadata <br />
                                event.filters: Collection of active filters <br />
                                event.columWidths: Comma separated list of column widths <br />
                                event.columnOrder: Order of the columns <br />
                                event.expandedRows: Instances of rows in expanded state <br />
                                event.expandedRowKeys: Keys of rows in expanded state <br />
                                event.expandedRowGroups: Instances of row groups in expanded state <br />
                                event.selection: Selected rows <br />
                                event.selectionKeys: Keys of selected rows <br />
                            </td>
                            <td>Invoked when a stateful table saves the state.</td>
                        </tr>
                        <tr>
                            <td>state-restore</td>
                            <td>event.first: Index of first record <br/>
                                event.rows: Number of rows to display in new page <br/>
                                event.sortField: Field to sort against <br />
                                event.sortOrder: Sort order as integer <br />
                                event.multiSortMeta: MultiSort metadata <br />
                                event.filters: Collection of active filters <br />
                                event.columWidths: Comma separated list of column widths <br />
                                event.columnOrder: Order of the columns <br />
                                event.expandedRows: Instances of rows in expanded state <br />
                                event.expandedRowKeys: Keys of rows in expanded state <br />
                                event.expandedRowGroups: Instances of row groups in expanded state <br />
                                event.selection: Selected rows <br />
                                event.selectionKeys: Keys of selected rows <br />
                            </td>
                            <td>Invoked when a stateful table restores the state.</td>
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
                            <td>column: Column node</td>
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
                            <td>footer</td>
                            <td>column: Column node</td>
                        </tr>
                        <tr>
                            <td>groupheader</td>
                            <td>data: Row data <br />
                            index: Row index</td>
                        </tr>
                        <tr>
                            <td>groupfooter</td>
                            <td>data: Row data <br />
                            index: Row index</td>
                        </tr>
                        <tr>
                            <td>expansion</td>
                            <td>data: Row data <br />
                            index: Row index</td>
                        </tr>
                        <tr>
                            <td>empty</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>loading</td>
                            <td>-</td>
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
                            <td>p-datatable-scrollable</td>
                            <td>Container element when table is scrollable.</td>
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
                            <td>p-datatable-wrapper</td>
                            <td>Wrapper of table element.</td>
                        </tr>
                        <tr>
                            <td>p-datatable-table</td>
                            <td>Table element.</td>
                        </tr>
                         <tr>
                            <td>p-datatable-thead</td>
                            <td>Table thead element.</td>
                        </tr>
                         <tr>
                            <td>p-datatable-tbody</td>
                            <td>Table tbody element.</td>
                        </tr>
                         <tr>
                            <td>p-datatable-tfoot</td>
                            <td>Table tfoot element.</td>
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
                            <td>p-frozen-column</td>
                            <td>Frozen column header.</td>
                        </tr>
                        <tr>
                            <td>p-rowgroup-header</td>
                            <td>Header of a rowgroup.</td>
                        </tr>
                        <tr>
                            <td>p-rowgroup-footer</td>
                            <td>Footer of a rowgroup.</td>
                        </tr>
                        <tr>
                            <td>p-datatable-row-expansion</td>
                            <td>Expanded row content.</td>
                        </tr>
                        <tr>
                            <td>p-row-toggler</td>
                            <td>Toggle element for row expansion.</td>
                        </tr>
                        <tr>
                            <td>p-datatable-emptymessage</td>
                            <td>Cell containing the empty message.</td>
                        </tr>
                        <tr>
                            <td>p-row-editor-init</td>
                            <td>Pencil button of row editor.</td>
                        </tr>
                        <tr>
                            <td>p-row-editor-init</td>
                            <td>Save button of row editor.</td>
                        </tr>
                        <tr>
                            <td>p-row-editor-init</td>
                            <td>Cancel button of row editor.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h5>Dependencies</h5>
            <p>None.</p>
        </AppDoc>
	</div>
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
        <DataTable :value="customers" :paginator="true" class="p-datatable-customers" :rows="10"
            dataKey="id" :rowHover="true" v-model:selection="selectedCustomers" v-model:filters="filters" filterDisplay="menu" :loading="loading"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[10,25,50]"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
            :globalFilterFields="['name','country.name','representative.name','status']" responsiveLayout="scroll">
            <template #header>
                 <div class="flex justify-content-center align-items-center">
                    <h5 class="m-0">Customers</h5>
                    <span class="p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
                    </span>
                 </div>
            </template>
            <template #empty>
                No customers found.
            </template>
            <template #loading>
                Loading customers data. Please wait.
            </template>
            <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
            <Column field="name" header="Name" sortable style="min-width: 14rem">
                <template #body="{data}">
                    {{data.name}}
                </template>
                <template #filter="{filterModel}">
                    <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by name"/>
                </template>
            </Column>
            <Column field="country.name" header="Country" sortable filterMatchMode="contains" style="min-width: 14rem">
                <template #body="{data}">
                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :class="'flag flag-' + data.country.code" width="30" />
                    <span class="image-text">{{data.country.name}}</span>
                </template>
                <template #filter="{filterModel}">
                    <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by country"/>
                </template>
            </Column>
            <Column header="Agent" sortable filterField="representative" sortField="representative.name" :showFilterMatchModes="false" :filterMenuStyle="{'width':'14rem'}" style="min-width: 14rem">
                 <template #body="{data}">
                    <img :alt="data.representative.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="32" style="vertical-align: middle" />
                    <span class="image-text">{{data.representative.name}}</span>
                </template>
                <template #filter="{filterModel}">
                    <div class="mb-3 font-bold">Agent Picker</div>
                    <MultiSelect v-model="filterModel.value" :options="representatives" optionLabel="name" placeholder="Any" class="p-column-filter">
                        <template #option="slotProps">
                            <div class="p-multiselect-representative-option">
                                <img :alt="slotProps.option.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="32" style="vertical-align: middle" />
                                <span class="image-text">{{slotProps.option.name}}</span>
                            </div>
                        </template>
                    </MultiSelect>
                </template>
            </Column>
            <Column field="date" header="Date" sortable dataType="date" style="min-width: 8rem">
                <template #body="{data}">
                    {{formatDate(data.date)}}
                </template>
                <template #filter="{filterModel}">
                    <Calendar v-model="filterModel.value" dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" />
                </template>
            </Column>
            <Column field="balance" header="Balance" sortable dataType="numeric" style="min-width: 8rem">
                <template #body="{data}">
                    {{formatCurrency(data.balance)}}
                </template>
                <template #filter="{filterModel}">
                    <InputNumber v-model="filterModel.value" mode="currency" currency="USD" locale="en-US" />
                </template>
            </Column>
            <Column field="status" header="Status" sortable :filterMenuStyle="{'width':'14rem'}" style="min-width: 10rem">
                <template #body="{data}">
                    <span :class="'customer-badge status-' + data.status">{{data.status}}</span>
                </template>
                <template #filter="{filterModel}">
                    <Dropdown v-model="filterModel.value" :options="statuses" placeholder="Any" class="p-column-filter" :showClear="true">
                        <template #value="slotProps">
                            <span :class="'customer-badge status-' + slotProps.value">{{slotProps.value}}</span>
                        </template>
                        <template #option="slotProps">
                            <span :class="'customer-badge status-' + slotProps.option">{{slotProps.option}}</span>
                        </template>
                    </Dropdown>
                </template>
            </Column>
            <Column field="activity" header="Activity" sortable :showFilterMatchModes="false" style="min-width: 10rem">
                <template #body="{data}">
                    <ProgressBar :value="data.activity" :showValue="false" />
                </template>
                <template #filter="{filterModel}">
                    <Slider v-model="filterModel.value" range class="m-3"></Slider>
                    <div class="flex align-items-center justify-content-between px-2">
                        <span>{{filterModel.value ? filterModel.value[0] : 0}}</span>
                        <span>{{filterModel.value ? filterModel.value[1] : 100}}</span>
                    </div>
                </template>
            </Column>
            <Column headerStyle="width: 4rem; text-align: center" bodyStyle="text-align: center; overflow: visible">
                <template #body>
                    <Button type="button" icon="pi pi-cog"></Button>
                </template>
            </Column>
        </DataTable>
	</div>
</template>

<script>
import CustomerService from './service/CustomerService';
import {FilterMatchMode,FilterOperator} from 'primevue/api';

export default {
    data() {
        return {
            customers: null,
            selectedCustomers: null,
            filters: {
                'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
                'name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
                'country.name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
                'representative': {value: null, matchMode: FilterMatchMode.IN},
                'date': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.DATE_IS}]},
                'balance': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
                'status': {operator: FilterOperator.OR, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
                'activity': {value: null, matchMode: FilterMatchMode.BETWEEN},
                'verified': {value: null, matchMode: FilterMatchMode.EQUALS}
            },
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
            this.customers.forEach(customer => customer.date = new Date(customer.date));
            this.loading = false;
        });
    },
    methods: {
        formatDate(value) {
            return value.toLocaleDateString('en-US', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            });
        },
        formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        }
    }
}
<\\/script>

<style lang="scss" scoped>
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
</style>`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <DataTable :value="customers" :paginator="true" class="p-datatable-customers" :rows="10"
            dataKey="id" :rowHover="true" v-model:selection="selectedCustomers" v-model:filters="filters" filterDisplay="menu" :loading="loading"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[10,25,50]"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
            :globalFilterFields="['name','country.name','representative.name','status']" responsiveLayout="scroll">
            <template #header>
                 <div class="flex justify-content-center align-items-center">
                    <h5 class="m-0">Customers</h5>
                    <span class="p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
                    </span>
                 </div>
            </template>
            <template #empty>
                No customers found.
            </template>
            <template #loading>
                Loading customers data. Please wait.
            </template>
            <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
            <Column field="name" header="Name" sortable style="min-width: 14rem">
                <template #body="{data}">
                    {{data.name}}
                </template>
                <template #filter="{filterModel}">
                    <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by name"/>
                </template>
            </Column>
            <Column field="country.name" header="Country" sortable filterMatchMode="contains" style="min-width: 14rem">
                <template #body="{data}">
                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="30" style="vertical-align: middle" />
                    <span class="image-text">{{data.country.name}}</span>
                </template>
                <template #filter="{filterModel}">
                    <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by country"/>
                </template>
            </Column>
            <Column header="Agent" sortable filterField="representative" sortField="representative.name" :showFilterMatchModes="false" :filterMenuStyle="{'width':'14rem'}" style="min-width: 14rem">
                 <template #body="{data}">
                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="30" style="vertical-align: middle" />
                    <span class="image-text">{{data.representative.name}}</span>
                </template>
                <template #filter="{filterModel}">
                    <div class="mb-3 font-bold">Agent Picker</div>
                    <MultiSelect v-model="filterModel.value" :options="representatives" optionLabel="name" placeholder="Any" class="p-column-filter">
                        <template #option="slotProps">
                            <div class="p-multiselect-representative-option">
                                <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="30" style="vertical-align: middle" />
                                <span class="image-text">{{slotProps.option.name}}</span>
                            </div>
                        </template>
                    </MultiSelect>
                </template>
            </Column>
            <Column field="date" header="Date" sortable dataType="date" style="min-width: 8rem">
                <template #body="{data}">
                    {{formatDate(data.date)}}
                </template>
                <template #filter="{filterModel}">
                    <Calendar v-model="filterModel.value" dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" />
                </template>
            </Column>
            <Column field="balance" header="Balance" sortable dataType="numeric" style="min-width: 8rem">
                <template #body="{data}">
                    {{formatCurrency(data.balance)}}
                </template>
                <template #filter="{filterModel}">
                    <InputNumber v-model="filterModel.value" mode="currency" currency="USD" locale="en-US" />
                </template>
            </Column>
            <Column field="status" header="Status" sortable :filterMenuStyle="{'width':'14rem'}" style="min-width: 10rem">
                <template #body="{data}">
                    <span :class="'customer-badge status-' + data.status">{{data.status}}</span>
                </template>
                <template #filter="{filterModel}">
                    <Dropdown v-model="filterModel.value" :options="statuses" placeholder="Any" class="p-column-filter" :showClear="true">
                        <template #value="slotProps">
                            <span :class="'customer-badge status-' + slotProps.value">{{slotProps.value}}</span>
                        </template>
                        <template #option="slotProps">
                            <span :class="'customer-badge status-' + slotProps.option">{{slotProps.option}}</span>
                        </template>
                    </Dropdown>
                </template>
            </Column>
            <Column field="activity" header="Activity" sortable :showFilterMatchModes="false" style="min-width: 10rem">
                <template #body="{data}">
                    <ProgressBar :value="data.activity" :showValue="false" />
                </template>
                <template #filter="{filterModel}">
                    <Slider v-model="filterModel.value" range class="m-3"></Slider>
                    <div class="flex align-items-center justify-content-between px-2">
                        <span>{{filterModel.value ? filterModel.value[0] : 0}}</span>
                        <span>{{filterModel.value ? filterModel.value[1] : 100}}</span>
                    </div>
                </template>
            </Column>
            <Column headerStyle="width: 4rem; text-align: center" bodyStyle="text-align: center; overflow: visible">
                <template #body>
                    <Button type="button" icon="pi pi-cog"></Button>
                </template>
            </Column>
        </DataTable>
	</div>
</template>

<script>
import { ref, onMounted } from "vue";
import CustomerService from "./service/CustomerService";
import { FilterMatchMode, FilterOperator } from "primevue/api";

export default {
    setup() {
        onMounted(() => {
            customerService.value.getCustomersLarge().then((data) => {
                customers.value = data;
                customers.value.forEach(
                    (customer) => (customer.date = new Date(customer.date))
                );
                loading.value = false;
            });
        });
        const customers = ref();
        const selectedCustomers = ref();
        const filters = ref({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            name: {
                operator: FilterOperator.AND,
                constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
            },
            "country.name": {
                operator: FilterOperator.AND,
                constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
            },
            representative: { value: null, matchMode: FilterMatchMode.IN },
            date: {
                operator: FilterOperator.AND,
                constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
            },
            balance: {
                operator: FilterOperator.AND,
                constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
            },
            status: {
                operator: FilterOperator.OR,
                constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
            },
            activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
            verified: { value: null, matchMode: FilterMatchMode.EQUALS },
        });
        const customerService = ref(new CustomerService());
        const loading = ref(true);
        const representatives = [
            { name: "Amy Elsner", image: "amyelsner.png" },
            { name: "Anna Fali", image: "annafali.png" },
            { name: "Asiya Javayant", image: "asiyajavayant.png" },
            { name: "Bernardo Dominic", image: "bernardodominic.png" },
            { name: "Elwin Sharvill", image: "elwinsharvill.png" },
            { name: "Ioni Bowcher", image: "ionibowcher.png" },
            { name: "Ivan Magalhaes", image: "ivanmagalhaes.png" },
            { name: "Onyama Limba", image: "onyamalimba.png" },
            { name: "Stephen Shaw", image: "stephenshaw.png" },
            { name: "XuXue Feng", image: "xuxuefeng.png" },
        ];
        const statuses = ref([
            "unqualified",
            "qualified",
            "new",
            "negotiation",
            "renewal",
            "proposal",
        ]);
        const formatDate = (value) => {
            return value.toLocaleDateString("en-US", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
            });
        };
        const formatCurrency = (value) => {
            return value.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
            });
        };
        return {
            customers,
            filters,
            loading,
            representatives,
            formatCurrency,
            selectedCustomers,
            formatDate,
            statuses,
        };
    }
};
<\\/script>

<style lang="scss" scoped>
img {
    vertical-align: middle;
}
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
</style>`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/datatable/datatable.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/dropdown/dropdown.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/multiselect/multiselect.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/calendar/calendar.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/slider/slider.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/progressbar/progressbar.min.js"><\\/script>
        <script src="./CustomerService.js"><\\/script>`,
                    content: `<div id="app">
            <p-datatable :value="customers" :paginator="true" class="p-datatable-customers" :rows="10"
                data-key="id" :row-hover="true" v-model:selection="selectedCustomers" v-model:filters="filters" filter-display="menu" :loading="loading"
                paginator-template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rows-per-page-options="[10,25,50]"
                current-page-report-template="Showing {first} to {last} of {totalRecords} entries"
                :global-filter-fields="['name','country.name','representative.name','status']" responsive-layout="scroll">
                <template #header>
                    <div class="flex justify-content-center align-items-center">
                        <h5 class="m-0">Customers</h5>
                        <span class="p-input-icon-left">
                            <i class="pi pi-search"></i>
                            <p-inputtext v-model="filters['global'].value" placeholder="Keyword Search"></p-inputtext>
                        </span>
                    </div>
                </template>
                <template #empty>
                    No customers found.
                </template>
                <template #loading>
                    Loading customers data. Please wait.
                </template>
                <p-column selection-mode="multiple" header-style="width: 3rem"></p-column>
                <p-column field="name" header="Name" sortable style="min-width: 14rem">
                    <template #body="{data}">
                        {{data.name}}
                    </template>
                    <template #filter="{filterModel}">
                        <p-inputtext type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by name"></p-inputtext>
                    </template>
                </p-column>
                <p-column field="country.name" header="Country" sortable filter-match-mode="contains" style="min-width: 14rem">
                    <template #body="{data}">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="30" style="vertical-align: middle" />
                        <span class="image-text">{{data.country.name}}</span>
                    </template>
                    <template #filter="{filterModel}">
                        <p-inputtext type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by country"></p-inputtext>
                    </template>
                </p-column>
                <p-column header="Agent" sortable filter-field="representative" sort-field="representative.name" :show-filter-match-modes="false" :filter-menu-style="{'width':'14rem'}" style="min-width: 14rem">
                    <template #body="{data}">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="30" style="vertical-align: middle" />
                        <span class="image-text">{{data.representative.name}}</span>
                    </template>
                    <template #filter="{filterModel}">
                        <div class="mb-3 font-bold">Agent Picker</div>
                        <p-multiselect v-model="filterModel.value" :options="representatives" option-label="name" placeholder="Any" class="p-column-filter">
                            <template #option="slotProps">
                                <div class="p-multiselect-representative-option">
                                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="30" />
                                    <span class="image-text">{{slotProps.option.name}}</span>
                                </div>
                            </template>
                        </p-multiselect>
                    </template>
                </p-column>
                <p-column field="date" header="Date" sortable data-type="date" style="min-width: 8rem">
                    <template #body="{data}">
                        {{formatDate(data.date)}}
                    </template>
                    <template #filter="{filterModel}">
                        <p-calendar v-model="filterModel.value" date-format="mm/dd/yy" placeholder="mm/dd/yyyy"></p-calendar>
                    </template>
                </p-column>
                <p-column field="balance" header="Balance" sortable data-type="numeric" style="min-width: 8rem">
                    <template #body="{data}">
                        {{formatCurrency(data.balance)}}
                    </template>
                    <template #filter="{filterModel}">
                        <p-inputnumber v-model="filterModel.value" mode="currency" currency="USD" locale="en-US"></p-inputnumber>
                    </template>
                </p-column>
                <p-column field="status" header="Status" sortable :filter-menu-style="{'width':'14rem'}" style="min-width: 10rem">
                    <template #body="{data}">
                        <span :class="'customer-badge status-' + data.status">{{data.status}}</span>
                    </template>
                    <template #filter="{filterModel}">
                        <p-dropdown v-model="filterModel.value" :options="statuses" placeholder="Any" class="p-column-filter" :show-clear="true">
                            <template #value="slotProps">
                                <span :class="'customer-badge status-' + slotProps.value">{{slotProps.value}}</span>
                            </template>
                            <template #option="slotProps">
                                <span :class="'customer-badge status-' + slotProps.option">{{slotProps.option}}</span>
                            </template>
                        </p-dropdown>
                    </template>
                </p-column>
                <p-column field="activity" header="Activity" sortable :show-filter-match-modes="false" style="min-width: 10rem">
                    <template #body="{data}">
                        <p-progressbar :value="data.activity" :show-value="false"></p-progressbar>
                    </template>
                    <template #filter="{filterModel}">
                        <p-slider v-model="filterModel.value" range class="m-3"></p-slider>
                        <div class="flex align-items-center justify-content-between px-2">
                            <span>{{filterModel.value ? filterModel.value[0] : 0}}</span>
                            <span>{{filterModel.value ? filterModel.value[1] : 100}}</span>
                        </div>
                    </template>
                </p-column>
                <p-column header-style="width: 4rem; text-align: center" body-style="text-align: center; overflow: visible">
                    <template #body>
                        <p-button type="button" icon="pi pi-cog"></p-button>
                    </template>
                </p-column>
            </p-datatable>
        </div>
    </template>

    <script type="module">
    const { createApp, ref, onMounted } = Vue;
    const { FilterMatchMode, FilterOperator } = primevue.api;

    const App = {
        setup() {
            onMounted(() => {
                customerService.value.getCustomersLarge().then((data) => {
                    customers.value = data;
                    customers.value.forEach(
                        (customer) => (customer.date = new Date(customer.date))
                    );
                    loading.value = false;
                });
            });
            const customers = ref();
            const selectedCustomers = ref();
            const filters = ref({
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
                name: {
                    operator: FilterOperator.AND,
                    constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
                },
                "country.name": {
                    operator: FilterOperator.AND,
                    constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
                },
                representative: { value: null, matchMode: FilterMatchMode.IN },
                date: {
                    operator: FilterOperator.AND,
                    constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
                },
                balance: {
                    operator: FilterOperator.AND,
                    constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
                },
                status: {
                    operator: FilterOperator.OR,
                    constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
                },
                activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
                verified: { value: null, matchMode: FilterMatchMode.EQUALS },
            });
            const customerService = ref(new CustomerService());
            const loading = ref(true);
            const representatives = [
                { name: "Amy Elsner", image: "amyelsner.png" },
                { name: "Anna Fali", image: "annafali.png" },
                { name: "Asiya Javayant", image: "asiyajavayant.png" },
                { name: "Bernardo Dominic", image: "bernardodominic.png" },
                { name: "Elwin Sharvill", image: "elwinsharvill.png" },
                { name: "Ioni Bowcher", image: "ionibowcher.png" },
                { name: "Ivan Magalhaes", image: "ivanmagalhaes.png" },
                { name: "Onyama Limba", image: "onyamalimba.png" },
                { name: "Stephen Shaw", image: "stephenshaw.png" },
                { name: "XuXue Feng", image: "xuxuefeng.png" },
            ];
            const statuses = ref([
                "unqualified",
                "qualified",
                "new",
                "negotiation",
                "renewal",
                "proposal",
            ]);
            const formatDate = (value) => {
                return value.toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                });
            };
            const formatCurrency = (value) => {
                return value.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                });
            };
            return {
                customers,
                filters,
                loading,
                representatives,
                formatCurrency,
                selectedCustomers,
                formatDate,
                statuses,
            };
        },
        components: {
            "p-datatable": primevue.datatable,
            "p-column": primevue.column,
            "p-inputtext": primevue.inputtext,
            "p-multiselect": primevue.multiselect,
            "p-calendar": primevue.calendar,
            "p-inputnumber": primevue.inputnumber,
            "p-dropdown": primevue.dropdown,
            "p-progressbar": primevue.progressbar,
            "p-slider": primevue.slider,
            "p-button": primevue.button
        }
    };

    const app = createApp(App);
    app.use(primevue.config.default);
    app.mount("#app");
    <\\/script>

    <style lang="scss" scoped>
    img {
        vertical-align: middle;
    }
    .p-paginator .p-paginator-current {
        margin-left: auto;
    }

    .p-progressbar {
        height: .5rem;
        background-color: #D8DADC;
    }
    .p-progressbar .p-progressbar-value {
        background-color: #607D8B;
    }

    .p-datepicker {
        min-width: 25rem;
    }

    .p-datepicker td {
        font-weight: 400;
    }

    .p-datatable.p-datatable-customers .p-datatable-header {
        padding: 1rem;
        text-align: left;
        font-size: 1.5rem;
    }

    .p-datatable.p-datatable-customers .p-paginator {
        padding: 1rem;
    }

    .p-datatable.p-datatable-customers .p-datatable-thead > tr > th {
        text-align: left;
    }

    .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td {
        cursor: auto;
    }

    .p-datatable.p-datatable-customers .p-dropdown-label:not(.p-placeholder) {
        text-transform: uppercase;
    }
    </style>`
                }
            }
        }
    }
}
</script>
