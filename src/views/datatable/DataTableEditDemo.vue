<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>InCell Edit</span></h1>
				<p>In cell editing provides a rapid and user friendly way to manipulate the data. The datatable provides a flexible API
                    so that the editing behavior is implemented by the page author whether it utilizes v-model or vuex.
                </p>
			</div>
		</div>

		<div class="content-section implementation p-fluid">
            <div class="card">
                <h5>Basic Cell Editing</h5>
                <p>Simple editors with v-model.</p>
                <DataTable :value="products1" editMode="cell" class="editable-cells-table">
                    <Column field="code" header="Code">
                        <template #editor="slotProps">
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" />
                        </template>
                    </Column>
                    <Column field="name" header="Name">
                        <template #editor="slotProps">
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" />
                        </template>
                    </Column>
                    <Column field="inventoryStatus" header="Status">
                        <template #editor="slotProps">
                            <Dropdown v-model="slotProps.data['inventoryStatus']" :options="statuses" optionLabel="label" optionValue="value" laceholder="Select a Status">
                                <template #option="slotProps">
                                    <span :class="'product-badge status-' + slotProps.option.value.toLowerCase()">{{slotProps.option.label}}</span>
                                </template>
                            </Dropdown>
                        </template>
                        <template #body="slotProps">
                            {{getStatusLabel(slotProps.data.inventoryStatus)}}
                        </template>
                    </Column>
                    <Column field="price" header="Price">
                        <template #editor="slotProps">
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" />
                        </template>
                    </Column>
                </DataTable>
            </div>

            <div class="card">
                <h5>Advanced Cell Editing</h5>
                <p>Custom implementation with validations, dynamic columns and reverting values with the escape key.</p>
                <DataTable :value="products2" editMode="cell" @cell-edit-complete="onCellEditComplete" class="editable-cells-table" >
                    <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field">
                        <template #editor="slotProps">
                            <InputText :modelValue="slotProps.data[slotProps.column.props.field]" @update:modelValue="onCellEdit($event, slotProps)" />
                        </template>
                    </Column>
                </DataTable>
            </div>

            <div class="card">
                <h5>Row Editing</h5>
                <DataTable :value="products3" editMode="row" dataKey="id" v-model:editingRows="editingRows"
                    @row-edit-init="onRowEditInit" @row-edit-cancel="onRowEditCancel">
                    <Column field="code" header="Code">
                        <template #editor="slotProps">
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" autofocus />
                        </template>
                    </Column>
                    <Column field="name" header="Name">
                        <template #editor="slotProps">
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" />
                        </template>
                    </Column>
                    <Column field="inventoryStatus" header="Status">
                        <template #editor="slotProps">
                            <Dropdown v-model="slotProps.data['inventoryStatus']" :options="statuses" optionLabel="label" optionValue="value" laceholder="Select a Status">
                                <template #option="slotProps">
                                    <span :class="'product-badge status-' + slotProps.option.value.toLowerCase()">{{slotProps.option.label}}</span>
                                </template>
                            </Dropdown>
                        </template>
                        <template #body="slotProps">
                            {{getStatusLabel(slotProps.data.inventoryStatus)}}
                        </template>
                    </Column>
                    <Column field="price" header="Price">
                        <template #editor="slotProps">
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" />
                        </template>
                    </Column>
                    <Column :rowEditor="true" headerStyle="width:7rem" bodyStyle="text-align:center"></Column>
                </DataTable>
            </div>
		</div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
                    <div class="p-d-flex p-jc-end">
                        <LiveEditor name="DataTableDemo" :sources="sources" service="ProductService" data="products-small" :components="['Column', 'InputText', 'Dropdown']" />
                    </div>
<pre v-code>
<code><template v-pre>
&lt;h5&gt;Basic Cell Editing&lt;/h5&gt;
&lt;p&gt;Simple editors with v-model.&lt;/p&gt;
&lt;DataTable :value="products1" editMode="cell" class="editable-cells-table"&gt;
    &lt;Column field="code" header="Code"&gt;
        &lt;template #editor="slotProps"&gt;
            &lt;InputText v-model="slotProps.data[slotProps.column.props.field]" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="name" header="Name"&gt;
        &lt;template #editor="slotProps"&gt;
            &lt;InputText v-model="slotProps.data[slotProps.column.props.field]" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="inventoryStatus" header="Status"&gt;
        &lt;template #editor="slotProps"&gt;
            &lt;Dropdown v-model="slotProps.data['inventoryStatus']" :options="statuses" optionLabel="label" optionValue="value" laceholder="Select a Status"&gt;
                &lt;template #option="slotProps"&gt;
                    &lt;span :class="'product-badge status-' + slotProps.option.value.toLowerCase()"&gt;{{slotProps.option.label}}&lt;/span&gt;
                &lt;/template&gt;
            &lt;/Dropdown&gt;
        &lt;/template&gt;
        &lt;template #body="slotProps"&gt;
            {{getStatusLabel(slotProps.data.inventoryStatus)}}
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="price" header="Price"&gt;
        &lt;template #editor="slotProps"&gt;
            &lt;InputText v-model="slotProps.data[slotProps.column.props.field]" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
&lt;/DataTable&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
&lt;h5&gt;Advanced Cell Editing&lt;/h5&gt;
&lt;p&gt;Custom implementation with validations, dynamic columns and reverting values with the escape key.&lt;/p&gt;
&lt;DataTable :value="products2" editMode="cell" @cell-edit-complete="onCellEditComplete" class="editable-cells-table" &gt;
    &lt;Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"&gt;
        &lt;template #editor="slotProps"&gt;
            &lt;InputText :modelValue="slotProps.data[slotProps.column.props.field]" @update:modelValue="onCellEdit($event, slotProps)" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
&lt;/DataTable&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
&lt;h5&gt;Row Editing&lt;/h5&gt;
&lt;DataTable :value="products3" editMode="row" dataKey="id" v-model:editingRows="editingRows"
    @row-edit-init="onRowEditInit" @row-edit-cancel="onRowEditCancel"&gt;
    &lt;Column field="code" header="Code"&gt;
        &lt;template #editor="slotProps"&gt;
            &lt;InputText v-model="slotProps.data[slotProps.column.props.field]" autofocus /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="name" header="Name"&gt;
        &lt;template #editor="slotProps"&gt;
            &lt;InputText v-model="slotProps.data[slotProps.column.props.field]" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="inventoryStatus" header="Status"&gt;
        &lt;template #editor="slotProps"&gt;
            &lt;Dropdown v-model="slotProps.data['inventoryStatus']" :options="statuses" optionLabel="label" optionValue="value" laceholder="Select a Status"&gt;
                &lt;template #option="slotProps"&gt;
                    &lt;span :class="'product-badge status-' + slotProps.option.value.toLowerCase()"&gt;{{slotProps.option.label}}&lt;/span&gt;
                &lt;/template&gt;
            &lt;/Dropdown&gt;
        &lt;/template&gt;
        &lt;template #body="slotProps"&gt;
            {{getStatusLabel(slotProps.data.inventoryStatus)}}
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="price" header="Price"&gt;
        &lt;template #editor="slotProps"&gt;
            &lt;InputText v-model="slotProps.data[slotProps.column.props.field]" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column :rowEditor="true" headerStyle="width:7rem" bodyStyle="text-align:center"&gt;&lt;/Column&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

<pre v-code.script>
<code>
import ProductService from '../../service/ProductService';

export default {
    data() {
        return {
            editingCellRows: {},
            editingRows: [],
            columns: null,
            products1: null,
            products2: null,
            products3: null,
            statuses: [{label: 'In Stock', value: 'INSTOCK'},{label: 'Low Stock', value: 'LOWSTOCK'},{label: 'Out of Stock', value: 'OUTOFSTOCK'}]
        }
    },
    originalRows: null,
    productService: null,
    created() {
        this.productService = new ProductService();

        this.columns = [
            {field: 'code', header: 'Code'},
            {field: 'name', header: 'Name'},
            {field: 'quantity', header: 'Quantity'},
            {field: 'price', header: 'Price'}
        ];

        this.originalRows = {};
    },
    methods: {
        onCellEditComplete(event) {
            if (!this.editingCellRows[event.index]) {
                return;
            }

            const editingCellValue = this.editingCellRows[event.index][event.field];

             switch (event.field) {
                case 'quantity':
                case 'price':
                    if (this.isPositiveInteger(editingCellValue))
                        this.products2[event.index] = {...this.editingCellRows[event.index]};
                    else
                        event.preventDefault();
                break;

                default:
                    if (editingCellValue.trim().length > 0)
                        this.products2[event.index] = {...this.editingCellRows[event.index]};
                    else
                        event.preventDefault();
                break;
            }
        },
        onCellEdit(newValue, props) {
            if (!this.editingCellRows[props.index]) {
                this.editingCellRows[props.index] = {...props.data};
            }

            this.editingCellRows[props.index][props.column.props.field] = newValue;
        },
        isPositiveInteger(val) {
            let str = String(val);
            str = str.trim();
            if (!str) {
                return false;
            }
            str = str.replace(/^0+/, "") || "0";
            var n = Math.floor(Number(str));
            return n !== Infinity && String(n) === str && n >= 0;
        },
        onRowEditInit(event) {
            this.originalRows[event.index] = {...this.products3[event.index]};
        },
        onRowEditCancel(event) {
            this.products3[event.index] = this.originalRows[event.index];
        },
        getStatusLabel(status) {
            switch(status) {
                case 'INSTOCK':
                    return 'In Stock';

                case 'LOWSTOCK':
                    return 'Low Stock';

                case 'OUTOFSTOCK':
                    return 'Out of Stock';

                default:
                    return 'NA';
            }
        }
    },
    mounted() {
        this.productService.getProductsSmall().then(data => this.products1 = data);
        this.productService.getProductsSmall().then(data => this.products2 = data);
        this.productService.getProductsSmall().then(data => this.products3 = data);
    }
}

</code></pre>
                </TabPanel>
            </TabView>
        </div>
	</div>
</template>

<pre v-code.css>
<code>
::v-deep(.editable-cells-table td.p-cell-editing) {
    padding-top: 0;
    padding-bottom: 0;
}

</code></pre>

<script>
import ProductService from '../../service/ProductService';
import LiveEditor from '../liveeditor/LiveEditor';

export default {
    data() {
        return {
            editingCellRows: {},
            editingRows: [],
            columns: null,
            products1: null,
            products2: null,
            products3: null,
            statuses: [
                {label: 'In Stock', value: 'INSTOCK'},
                {label: 'Low Stock', value: 'LOWSTOCK'},
                {label: 'Out of Stock', value: 'OUTOFSTOCK'}
            ],
            sources: {
                'template': {
                    content: `<template>
    <div class="layout-content">
        <div class="content-section implementation p-fluid">
            <div class="card">
                <h5>Basic Cell Editing</h5>
                <p>Simple editors with v-model.</p>
                <DataTable :value="products1" editMode="cell" class="editable-cells-table">
                    <Column field="code" header="Code">
                        <template #editor="slotProps">
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" />
                        </template>
                    </Column>
                    <Column field="name" header="Name">
                        <template #editor="slotProps">
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" />
                        </template>
                    </Column>
                    <Column field="inventoryStatus" header="Status">
                        <template #editor="slotProps">
                            <Dropdown v-model="slotProps.data['inventoryStatus']" :options="statuses" optionLabel="label" optionValue="value" laceholder="Select a Status">
                                <template #option="slotProps">
                                    <span :class="'product-badge status-' + slotProps.option.value.toLowerCase()">{{slotProps.option.label}}</span>
                                </template>
                            </Dropdown>
                        </template>
                        <template #body="slotProps">
                            {{getStatusLabel(slotProps.data.inventoryStatus)}}
                        </template>
                    </Column>
                    <Column field="price" header="Price">
                        <template #editor="slotProps">
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" />
                        </template>
                    </Column>
                </DataTable>
            </div>

            <div class="card">
                <h5>Advanced Cell Editing</h5>
                <p>Custom implementation with validations, dynamic columns and reverting values with the escape key.</p>
                <DataTable :value="products2" editMode="cell" @cell-edit-complete="onCellEditComplete" class="editable-cells-table" >
                    <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field">
                        <template #editor="slotProps">
                            <InputText :modelValue="slotProps.data[slotProps.column.props.field]" @update:modelValue="onCellEdit($event, slotProps)" />
                        </template>
                    </Column>
                </DataTable>
            </div>

            <div class="card">
                <h5>Row Editing</h5>
                <DataTable :value="products3" editMode="row" dataKey="id" v-model:editingRows="editingRows"
                    @row-edit-init="onRowEditInit" @row-edit-cancel="onRowEditCancel">
                    <Column field="code" header="Code">
                        <template #editor="slotProps">
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" autofocus />
                        </template>
                    </Column>
                    <Column field="name" header="Name">
                        <template #editor="slotProps">
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" />
                        </template>
                    </Column>
                    <Column field="inventoryStatus" header="Status">
                        <template #editor="slotProps">
                            <Dropdown v-model="slotProps.data['inventoryStatus']" :options="statuses" optionLabel="label" optionValue="value" laceholder="Select a Status">
                                <template #option="slotProps">
                                    <span :class="'product-badge status-' + slotProps.option.value.toLowerCase()">{{slotProps.option.label}}</span>
                                </template>
                            </Dropdown>
                        </template>
                        <template #body="slotProps">
                            {{getStatusLabel(slotProps.data.inventoryStatus)}}
                        </template>
                    </Column>
                    <Column field="price" header="Price">
                        <template #editor="slotProps">
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" />
                        </template>
                    </Column>
                    <Column :rowEditor="true" headerStyle="width:7rem" bodyStyle="text-align:center"></Column>
                </DataTable>
            </div>
		</div>
    </div>                    
</template>

<script>
import ProductService from '../service/ProductService';

export default {
    data() {
        return {
            editingCellRows: {},
            editingRows: [],
            columns: null,
            products1: null,
            products2: null,
            products3: null,
            statuses: [
                {label: 'In Stock', value: 'INSTOCK'},
                {label: 'Low Stock', value: 'LOWSTOCK'},
                {label: 'Out of Stock', value: 'OUTOFSTOCK'}
            ]
        }
    },
    originalRows: null,
    productService: null,
    created() {
        this.productService = new ProductService();

        this.columns = [
            {field: 'code', header: 'Code'},
            {field: 'name', header: 'Name'},
            {field: 'quantity', header: 'Quantity'},
            {field: 'price', header: 'Price'}
        ];

        this.originalRows = {};
    },
    methods: {
        onCellEditComplete(event) {
            if (!this.editingCellRows[event.index]) {
                return;
            }

            const editingCellValue = this.editingCellRows[event.index][event.field];

            switch (event.field) {
                case 'quantity':
                case 'price':
                    if (this.isPositiveInteger(editingCellValue))
                        this.products2[event.index] = {...this.editingCellRows[event.index]};
                    else
                        event.preventDefault();
                break;

                default:
                    if (editingCellValue.trim().length > 0)
                        this.products2[event.index] = {...this.editingCellRows[event.index]};
                    else
                        event.preventDefault();
                break;
            }
        },
        onCellEdit(newValue, props) {
            if (!this.editingCellRows[props.index]) {
                this.editingCellRows[props.index] = {...props.data};
            }

            this.editingCellRows[props.index][props.column.props.field] = newValue;
        },
        isPositiveInteger(val) {
            let str = String(val);
            str = str.trim();
            if (!str) {
                return false;
            }
            str = str.replace(/^0+/, "") || "0";
            var n = Math.floor(Number(str));
            return n !== Infinity && String(n) === str && n >= 0;
        },
        onRowEditInit(event) {
            this.originalRows[event.index] = {...this.products3[event.index]};
        },
        onRowEditCancel(event) {
            this.products3[event.index] = this.originalRows[event.index];
        },
        getStatusLabel(status) {
            switch(status) {
                case 'INSTOCK':
                    return 'In Stock';

                case 'LOWSTOCK':
                    return 'Low Stock';

                case 'OUTOFSTOCK':
                    return 'Out of Stock';

                default:
                    return 'NA';
            }
        }
    },
    mounted() {
        this.productService.getProductsSmall().then(data => this.products1 = data);
        this.productService.getProductsSmall().then(data => this.products2 = data);
        this.productService.getProductsSmall().then(data => this.products3 = data);
    }
}`,
                    style: `<style lang="scss" scoped>
::v-deep(.editable-cells-table td.p-cell-editing) {
    padding-top: 0;
    padding-bottom: 0;
}
</style>`
                }
            }
        }
    },
    originalRows: null,
    productService: null,
    created() {
        this.productService = new ProductService();

        this.columns = [
            {field: 'code', header: 'Code'},
            {field: 'name', header: 'Name'},
            {field: 'quantity', header: 'Quantity'},
            {field: 'price', header: 'Price'}
        ];

        this.originalRows = {};
    },
    methods: {
        onCellEditComplete(event) {
            if (!this.editingCellRows[event.index]) {
                return;
            }

            const editingCellValue = this.editingCellRows[event.index][event.field];

            switch (event.field) {
                case 'quantity':
                case 'price':
                    if (this.isPositiveInteger(editingCellValue))
                        this.products2[event.index] = {...this.editingCellRows[event.index]};
                    else
                        event.preventDefault();
                break;

                default:
                    if (editingCellValue.trim().length > 0)
                        this.products2[event.index] = {...this.editingCellRows[event.index]};
                    else
                        event.preventDefault();
                break;
            }
        },
        onCellEdit(newValue, props) {
            if (!this.editingCellRows[props.index]) {
                this.editingCellRows[props.index] = {...props.data};
            }

            this.editingCellRows[props.index][props.column.props.field] = newValue;
        },
        isPositiveInteger(val) {
            let str = String(val);
            str = str.trim();
            if (!str) {
                return false;
            }
            str = str.replace(/^0+/, "") || "0";
            var n = Math.floor(Number(str));
            return n !== Infinity && String(n) === str && n >= 0;
        },
        onRowEditInit(event) {
            this.originalRows[event.index] = {...this.products3[event.index]};
        },
        onRowEditCancel(event) {
            this.products3[event.index] = this.originalRows[event.index];
        },
        getStatusLabel(status) {
            switch(status) {
                case 'INSTOCK':
                    return 'In Stock';

                case 'LOWSTOCK':
                    return 'Low Stock';

                case 'OUTOFSTOCK':
                    return 'Out of Stock';

                default:
                    return 'NA';
            }
        }
    },
    mounted() {
        this.productService.getProductsSmall().then(data => this.products1 = data);
        this.productService.getProductsSmall().then(data => this.products2 = data);
        this.productService.getProductsSmall().then(data => this.products3 = data);
    },
    components: {
        LiveEditor
    }
}
</script>

<style lang="scss" scoped>
::v-deep(.editable-cells-table td.p-cell-editing) {
    padding-top: 0;
    padding-bottom: 0;
}
</style>