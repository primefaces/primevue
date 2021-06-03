<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>InCell Edit</span></h1>
				<p>In cell editing provides a rapid and user friendly way to manipulate the data. The datatable provides a flexible API
                    so that the editing behavior is implemented by the page author whether it utilizes v-model or vuex.
                </p>
			</div>
            <AppDemoActions />
		</div>

		<div class="content-section implementation p-fluid">
            <div class="card">
                <h5>Basic Cell Editing</h5>
                <p>Simple editors with v-model.</p>
                <DataTable :value="products1" editMode="cell" class="editable-cells-table" responsiveLayout="scroll">
                    <Column field="code" header="Code" style="width:25%">
                        <template #editor="slotProps">
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" />
                        </template>
                    </Column>
                    <Column field="name" header="Name" style="width:25%">
                        <template #editor="slotProps">
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" />
                        </template>
                    </Column>
                    <Column field="inventoryStatus" header="Status" style="width:25%">
                        <template #editor="slotProps">
                            <Dropdown v-model="slotProps.data['inventoryStatus']" :options="statuses" optionLabel="label" optionValue="value" placeholder="Select a Status">
                                <template #option="slotProps">
                                    <span :class="'product-badge status-' + slotProps.option.value.toLowerCase()">{{slotProps.option.label}}</span>
                                </template>
                            </Dropdown>
                        </template>
                        <template #body="slotProps">
                            {{getStatusLabel(slotProps.data.inventoryStatus)}}
                        </template>
                    </Column>
                    <Column field="price" header="Price" style="width:25%">
                        <template #editor="slotProps">
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" />
                        </template>
                    </Column>
                </DataTable>
            </div>

            <div class="card">
                <h5>Advanced Cell Editing</h5>
                <p>Custom implementation with validations, dynamic columns and reverting values with the escape key.</p>
                <DataTable :value="products2" editMode="cell" @cell-edit-complete="onCellEditComplete" class="editable-cells-table" responsiveLayout="scroll">
                    <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field" style="width:25%">
                        <template #editor="slotProps">
                            <InputText :modelValue="slotProps.data[slotProps.column.props.field]" @update:modelValue="onCellEdit($event, slotProps)" />
                        </template>
                    </Column>
                </DataTable>
            </div>

            <div class="card">
                <h5>Row Editing</h5>
                <DataTable :value="products3" editMode="row" dataKey="id" v-model:editingRows="editingRows"
                    @row-edit-init="onRowEditInit" @row-edit-cancel="onRowEditCancel" responsiveLayout="scroll">
                    <Column field="code" header="Code" style="width:20%">
                        <template #editor="slotProps">
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" autofocus />
                        </template>
                    </Column>
                    <Column field="name" header="Name" style="width:20%">
                        <template #editor="slotProps">
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" />
                        </template>
                    </Column>
                    <Column field="inventoryStatus" header="Status" style="width:20%">
                        <template #editor="slotProps">
                            <Dropdown v-model="slotProps.data['inventoryStatus']" :options="statuses" optionLabel="label" optionValue="value" placeholder="Select a Status">
                                <template #option="slotProps">
                                    <span :class="'product-badge status-' + slotProps.option.value.toLowerCase()">{{slotProps.option.label}}</span>
                                </template>
                            </Dropdown>
                        </template>
                        <template #body="slotProps">
                            {{getStatusLabel(slotProps.data.inventoryStatus)}}
                        </template>
                    </Column>
                    <Column field="price" header="Price" style="width:20%">
                        <template #editor="slotProps">
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" />
                        </template>
                    </Column>
                    <Column :rowEditor="true" style="width:10%; min-width:8rem" bodyStyle="text-align:center"></Column>
                </DataTable>
            </div>
		</div>

        <AppDoc name="DataTableEditDemo" :sources="sources" :service="['ProductService']" :data="['products-small']" github="datatable/DataTableEditDemo.vue" />
	</div>
</template>

<script>
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
            statuses: [
                {label: 'In Stock', value: 'INSTOCK'},
                {label: 'Low Stock', value: 'LOWSTOCK'},
                {label: 'Out of Stock', value: 'OUTOFSTOCK'}
            ],
            sources: {
                'options-api': {
                    tabName: 'Options API Source',
                    content: `
<template>
    <div class="p-fluid">
        <div class="card">
            <h5>Basic Cell Editing</h5>
            <p>Simple editors with v-model.</p>
            <DataTable :value="products1" editMode="cell" class="editable-cells-table" responsiveLayout="scroll">
                <Column field="code" header="Code" style="width:25%">
                    <template #editor="slotProps">
                        <InputText v-model="slotProps.data[slotProps.column.props.field]" />
                    </template>
                </Column>
                <Column field="name" header="Name" style="width:25%">
                    <template #editor="slotProps">
                        <InputText v-model="slotProps.data[slotProps.column.props.field]" />
                    </template>
                </Column>
                <Column field="inventoryStatus" header="Status" style="width:25%">
                    <template #editor="slotProps">
                        <Dropdown v-model="slotProps.data['inventoryStatus']" :options="statuses" optionLabel="label" optionValue="value" placeholder="Select a Status">
                            <template #option="slotProps">
                                <span :class="'product-badge status-' + slotProps.option.value.toLowerCase()">{{slotProps.option.label}}</span>
                            </template>
                        </Dropdown>
                    </template>
                    <template #body="slotProps">
                        {{getStatusLabel(slotProps.data.inventoryStatus)}}
                    </template>
                </Column>
                <Column field="price" header="Price" style="width:25%">
                    <template #editor="slotProps">
                        <InputText v-model="slotProps.data[slotProps.column.props.field]" />
                    </template>
                </Column>
            </DataTable>
        </div>

        <div class="card">
            <h5>Advanced Cell Editing</h5>
            <p>Custom implementation with validations, dynamic columns and reverting values with the escape key.</p>
            <DataTable :value="products2" editMode="cell" @cellEditComplete="onCellEditComplete" class="editable-cells-table" responsiveLayout="scroll">
                <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field" style="width:25%">
                    <template #editor="slotProps">
                        <InputText :modelValue="slotProps.data[slotProps.column.props.field]" @update:modelValue="onCellEdit($event, slotProps)" />
                    </template>
                </Column>
            </DataTable>
        </div>

        <div class="card">
            <h5>Row Editing</h5>
            <DataTable :value="products3" editMode="row" dataKey="id" v-model:editingRows="editingRows"
                @rowEditInit="onRowEditInit" @rowEditCancel="onRowEditCancel" responsiveLayout="scroll">
                <Column field="code" header="Code" style="width:20%">
                    <template #editor="slotProps">
                        <InputText v-model="slotProps.data[slotProps.column.props.field]" autofocus />
                    </template>
                </Column>
                <Column field="name" header="Name" style="width:20%">
                    <template #editor="slotProps">
                        <InputText v-model="slotProps.data[slotProps.column.props.field]" />
                    </template>
                </Column>
                <Column field="inventoryStatus" header="Status" style="width:20%">
                    <template #editor="slotProps">
                        <Dropdown v-model="slotProps.data['inventoryStatus']" :options="statuses" optionLabel="label" optionValue="value" placeholder="Select a Status">
                            <template #option="slotProps">
                                <span :class="'product-badge status-' + slotProps.option.value.toLowerCase()">{{slotProps.option.label}}</span>
                            </template>
                        </Dropdown>
                    </template>
                    <template #body="slotProps">
                        {{getStatusLabel(slotProps.data.inventoryStatus)}}
                    </template>
                </Column>
                <Column field="price" header="Price" style="width:20%">
                    <template #editor="slotProps">
                        <InputText v-model="slotProps.data[slotProps.column.props.field]" />
                    </template>
                </Column>
                <Column :rowEditor="true" style="width: 10%; min-width:8rem" bodyStyle="text-align:center"></Column>
            </DataTable>
        </div>
    </div>                    
</template>

<script>
import ProductService from './service/ProductService';

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
}
<\\/script>

<style lang="scss" scoped>
::v-deep(.editable-cells-table td.p-cell-editing) {
    padding-top: 0;
    padding-bottom: 0;
}
</style>`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div class="p-fluid">
        <div class="card">
            <h5>Basic Cell Editing</h5>
            <p>Simple editors with v-model.</p>
            <DataTable :value="products1" editMode="cell" class="editable-cells-table" responsiveLayout="scroll">
                <Column field="code" header="Code" style="width:25%">
                    <template #editor="slotProps">
                        <InputText v-model="slotProps.data[slotProps.column.props.field]" />
                    </template>
                </Column>
                <Column field="name" header="Name" style="width:25%">
                    <template #editor="slotProps">
                        <InputText v-model="slotProps.data[slotProps.column.props.field]" />
                    </template>
                </Column>
                <Column field="inventoryStatus" header="Status" style="width:25%">
                    <template #editor="slotProps">
                        <Dropdown v-model="slotProps.data['inventoryStatus']" :options="statuses" optionLabel="label" optionValue="value" placeholder="Select a Status">
                            <template #option="slotProps">
                                <span :class="'product-badge status-' + slotProps.option.value.toLowerCase()">{{slotProps.option.label}}</span>
                            </template>
                        </Dropdown>
                    </template>
                    <template #body="slotProps">
                        {{getStatusLabel(slotProps.data.inventoryStatus)}}
                    </template>
                </Column>
                <Column field="price" header="Price" style="width:25%">
                    <template #editor="slotProps">
                        <InputText v-model="slotProps.data[slotProps.column.props.field]" />
                    </template>
                </Column>
            </DataTable>
        </div>

        <div class="card">
            <h5>Advanced Cell Editing</h5>
            <p>Custom implementation with validations, dynamic columns and reverting values with the escape key.</p>
            <DataTable :value="products2" editMode="cell" @cellEditComplete="onCellEditComplete" class="editable-cells-table" responsiveLayout="scroll">
                <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field" style="width:25%">
                    <template #editor="slotProps">
                        <InputText :modelValue="slotProps.data[slotProps.column.props.field]" @update:modelValue="onCellEdit($event, slotProps)" />
                    </template>
                </Column>
            </DataTable>
        </div>

        <div class="card">
            <h5>Row Editing</h5>
            <DataTable :value="products3" editMode="row" dataKey="id" v-model:editingRows="editingRows"
                @rowEditInit="onRowEditInit" @rowEditCancel="onRowEditCancel" responsiveLayout="scroll">
                <Column field="code" header="Code" style="width:20%">
                    <template #editor="slotProps">
                        <InputText v-model="slotProps.data[slotProps.column.props.field]" autofocus />
                    </template>
                </Column>
                <Column field="name" header="Name" style="width:20%">
                    <template #editor="slotProps">
                        <InputText v-model="slotProps.data[slotProps.column.props.field]" />
                    </template>
                </Column>
                <Column field="inventoryStatus" header="Status" style="width:20%">
                    <template #editor="slotProps">
                        <Dropdown v-model="slotProps.data['inventoryStatus']" :options="statuses" optionLabel="label" optionValue="value" placeholder="Select a Status">
                            <template #option="slotProps">
                                <span :class="'product-badge status-' + slotProps.option.value.toLowerCase()">{{slotProps.option.label}}</span>
                            </template>
                        </Dropdown>
                    </template>
                    <template #body="slotProps">
                        {{getStatusLabel(slotProps.data.inventoryStatus)}}
                    </template>
                </Column>
                <Column field="price" header="Price" style="width:20%">
                    <template #editor="slotProps">
                        <InputText v-model="slotProps.data[slotProps.column.props.field]" />
                    </template>
                </Column>
                <Column :rowEditor="true" style="width: 10%; min-width:8rem" bodyStyle="text-align:center"></Column>
            </DataTable>
        </div>
    </div>                    
</template>

<script>
import { ref, onMounted } from 'vue';
import ProductService from './service/ProductService';

export default {
    setup() {
        onMounted(() => {
            productService.value.getProductsSmall().then(data => products1.value = data);
            productService.value.getProductsSmall().then(data => products2.value = data);
            productService.value.getProductsSmall().then(data => products3.value = data);
        })

        const productService = ref(new ProductService());
        const editingCellRows = ref({});
        const editingRows = ref([]);
        const columns = ref([
            {field: 'code', header: 'Code'},
            {field: 'name', header: 'Name'},
            {field: 'quantity', header: 'Quantity'},
            {field: 'price', header: 'Price'}
        ]);
        const products1 = ref(null);
        const products2 = ref(null);
        const products3 = ref(null);
        const originalRows = ref({});
        const statuses = ref([
            {label: 'In Stock', value: 'INSTOCK'},
            {label: 'Low Stock', value: 'LOWSTOCK'},
            {label: 'Out of Stock', value: 'OUTOFSTOCK'}
        ]);

        const onCellEditComplete = (event) => {
            if (!editingCellRows.value[event.index]) {
                return;
            }

            const editingCellValue = editingCellRows.value[event.index][event.field];

            switch (event.field) {
                case 'quantity':
                case 'price':
                    if (isPositiveInteger(editingCellValue))
                        products2.value[event.index] = {...editingCellRows.value[event.index]};
                    else
                        event.preventDefault();
                break;

                default:
                    if (editingCellValue.trim().length > 0)
                        products2.value[event.index] = {...editingCellRows.value[event.index]};
                    else
                        event.preventDefault();
                break;
            }
        };
        const onCellEdit = (newValue, props) => {
            if (!editingCellRows.value[props.index]) {
                editingCellRows.value[props.index] = {...props.data};
            }

            editingCellRows.value[props.index][props.column.props.field] = newValue;
        };
        const isPositiveInteger = (val) => {
            let str = String(val);
            str = str.trim();
            if (!str) {
                return false;
            }
            str = str.replace(/^0+/, "") || "0";
            var n = Math.floor(Number(str));
            return n !== Infinity && String(n) === str && n >= 0;
        };
        const onRowEditInit = (event) => {
            originalRows.value[event.index] = {...products3.value[event.index]};
        };
        const onRowEditCancel = (event) => {
            products3.value[event.index] = originalRows.value[event.index];
        };
        const getStatusLabel = (status) => {
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
        };

        return { productService, editingCellRows, editingRows, columns, products1, products2, products3, originalRows, statuses, onCellEditComplete,
            onCellEdit, isPositiveInteger, onRowEditInit, onRowEditCancel, getStatusLabel }
    }
}
<\\/script>

<style lang="scss" scoped>
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
    }
}
</script>

<style lang="scss" scoped>
::v-deep(.editable-cells-table td.p-cell-editing) {
    padding-top: 0;
    padding-bottom: 0;
}
</style>