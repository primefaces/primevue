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
                <h5>Cell Editing</h5>
                <p>Validations, dynamic columns and reverting values with the escape key.</p>
                <DataTable :value="products1" editMode="cell" @cell-edit-complete="onCellEditComplete" class="editable-cells-table" responsiveLayout="scroll">
                    <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field" :styles="{width: '25%'}">
                        <template #editor="slotProps">
                            <InputText v-model="slotProps.data[slotProps.column.field]" autofocus />
                        </template>
                    </Column>
                </DataTable>
            </div>

            <div class="card">
                <h5>Row Editing</h5>
                <DataTable :value="products2" editMode="row" dataKey="id" :editingRows.sync="editingRows" @row-edit-save="onRowEditSave" responsiveLayout="scroll">
                    <Column field="code" header="Code" :styles="{width:'20%'}">
                        <template #editor="slotProps">
                            <InputText v-model="slotProps.data[slotProps.column.field]" autofocus />
                        </template>
                    </Column>
                    <Column field="name" header="Name" :styles="{width:'20%'}">
                        <template #editor="slotProps">
                            <InputText v-model="slotProps.data[slotProps.column.field]" />
                        </template>
                    </Column>
                    <Column field="inventoryStatus" header="Status" :styles="{width:'20%'}">
                        <template #editor="{ data, field }">
                            <Dropdown v-model="data[field]" :options="statuses" optionLabel="label" optionValue="value" placeholder="Select a Status">
                                <template #option="slotProps">
                                    <span :class="'product-badge status-' + slotProps.option.value.toLowerCase()">{{slotProps.option.label}}</span>
                                </template>
                            </Dropdown>
                        </template>
                        <template #body="slotProps">
                            {{getStatusLabel(slotProps.data.inventoryStatus)}}
                        </template>
                    </Column>
                    <Column field="price" header="Price" :styles="{width:'20%'}">
                        <template #editor="slotProps">
                            <InputText v-model="slotProps.data[slotProps.column.field]" />
                        </template>
                    </Column>
                    <Column :rowEditor="true" :styles="{width:'10%', 'min-width':'8rem'}" :bodyStyle="{'text-align':'center'}"></Column>
                </DataTable>
            </div>
		</div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;div class="card"&gt;
    &lt;DataTable :value="products1" editMode="cell" @cell-edit-complete="onCellEditComplete" class="editable-cells-table" responsiveLayout="scroll"&gt;
        &lt;Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field" :styles="{width: '25%'}"&gt;
            &lt;template #editor="slotProps"&gt;
                &lt;InputText v-model="slotProps.data[slotProps.column.field]" autofocus /&gt;
            &lt;/template&gt;
        &lt;/Column&gt;
    &lt;/DataTable&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
    &lt;DataTable :value="products2" editMode="row" dataKey="id" :editingRows.sync="editingRows" @row-edit-save="onRowEditSave" responsiveLayout="scroll"&gt;
        &lt;Column field="code" header="Code" :styles="{width:'20%'}"&gt;
            &lt;template #editor="slotProps"&gt;
                &lt;InputText v-model="slotProps.data[slotProps.column.field]" autofocus /&gt;
            &lt;/template&gt;
        &lt;/Column&gt;
        &lt;Column field="name" header="Name" :styles="{width:'20%'}"&gt;
            &lt;template #editor="slotProps"&gt;
                &lt;InputText v-model="slotProps.data[slotProps.column.field]" /&gt;
            &lt;/template&gt;
        &lt;/Column&gt;
        &lt;Column field="inventoryStatus" header="Status" :styles="{width:'20%'}"&gt;
            &lt;template #editor="{ data, field }"&gt;
                &lt;Dropdown v-model="data[field]" :options="statuses" optionLabel="label" optionValue="value" placeholder="Select a Status"&gt;
                    &lt;template #option="slotProps"&gt;
                        &lt;span :class="'product-badge status-' + slotProps.option.value.toLowerCase()"&gt;{{slotProps.option.label}}&lt;/span&gt;
                    &lt;/template&gt;
                &lt;/Dropdown&gt;
            &lt;/template&gt;
            &lt;template #body="slotProps"&gt;
                {{getStatusLabel(slotProps.data.inventoryStatus)}}
            &lt;/template&gt;
        &lt;/Column&gt;
        &lt;Column field="price" header="Price" :styles="{width:'20%'}"&gt;
            &lt;template #editor="slotProps"&gt;
                &lt;InputText v-model="slotProps.data[slotProps.column.field]" /&gt;
            &lt;/template&gt;
        &lt;/Column&gt;
        &lt;Column :rowEditor="true" :styles="{width:'10%', 'min-width':'8rem'}" :bodyStyle="{'text-align':'center'}"&gt;&lt;/Column&gt;
    &lt;/DataTable&gt;
&lt;/div&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import ProductService from '../../service/ProductService';

export default {
    data() {
        return {
            editingRows: [],
            columns: null,
            products1: null,
            products2: null,
            statuses: [
                {label: 'In Stock', value: 'INSTOCK'},
                {label: 'Low Stock', value: 'LOWSTOCK'},
                {label: 'Out of Stock', value: 'OUTOFSTOCK'}
            ]
        }
    },
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
            let { data, newValue, field } = event;

            switch (field) {
                case 'quantity':
                case 'price':
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
            return n !== Infinity && String(n) === str && n >= 0;
        },
        onRowEditSave(event) {
            let { newData, index } = event;

            this.products2[index] = newData;
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
    }
}
</CodeHighlight>
                </TabPanel>
            </TabView>
        </div>
	</div>
</template>

<CodeHighlight lang="css">
.editable-cells-table td.p-cell-editing {
    padding-top: 0;
    padding-bottom: 0;
}
</CodeHighlight>

<script>
import ProductService from '../../service/ProductService';

export default {
    data() {
        return {
            editingRows: [],
            columns: null,
            products1: null,
            products2: null,
            statuses: [
                {label: 'In Stock', value: 'INSTOCK'},
                {label: 'Low Stock', value: 'LOWSTOCK'},
                {label: 'Out of Stock', value: 'OUTOFSTOCK'}
            ]
        }
    },
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
            let { data, newValue, field } = event;

            switch (field) {
                case 'quantity':
                case 'price':
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
            return n !== Infinity && String(n) === str && n >= 0;
        },
        onRowEditSave(event) {
            let { newData, index } = event;

            this.products2[index] = newData;
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
    }
}
</script>

<style lang="scss" scoped>
::v-deep .editable-cells-table td.p-cell-editing {
    padding-top: 0;
    padding-bottom: 0;
}
</style>