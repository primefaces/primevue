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
                <h5>Cell Editing</h5>
                <p>Validations, dynamic columns and reverting values with the escape key.</p>
                <DataTable :value="products1" editMode="cell" @cell-edit-complete="onCellEditComplete" class="editable-cells-table" responsiveLayout="scroll">
                    <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field" style="width:25%">
                        <template #editor="{ data, field }">
                            <InputText v-model="data[field]" autofocus />
                        </template>
                    </Column>
                </DataTable>
            </div>

            <div class="card">
                <h5>Row Editing</h5>
                <DataTable :value="products2" editMode="row" dataKey="id" v-model:editingRows="editingRows" @row-edit-save="onRowEditSave" responsiveLayout="scroll">
                    <Column field="code" header="Code" style="width:20%">
                        <template #editor="{ data, field }">
                            <InputText v-model="data[field]" autofocus />
                        </template>
                    </Column>
                    <Column field="name" header="Name" style="width:20%">
                        <template #editor="{ data, field }">
                            <InputText v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="inventoryStatus" header="Status" style="width:20%">
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
                    <Column field="price" header="Price" style="width:20%">
                        <template #editor="{ data, field }">
                            <InputText v-model="data[field]" />
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
            editingRows: [],
            columns: null,
            products1: null,
            products2: null,
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
            <h5>Cell Editing</h5>
            <p>Validations, dynamic columns and reverting values with the escape key.</p>
            <DataTable :value="products1" editMode="cell" @cell-edit-complete="onCellEditComplete" class="editable-cells-table" responsiveLayout="scroll">
                <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field" style="width:25%">
                    <template #editor="{ data, field }">
                        <InputText v-model="data[field]" autofocus />
                    </template>
                </Column>
            </DataTable>
        </div>

        <div class="card">
            <h5>Row Editing</h5>
            <DataTable :value="products2" editMode="row" dataKey="id" v-model:editingRows="editingRows" @row-edit-save="onRowEditSave" responsiveLayout="scroll">
                <Column field="code" header="Code" style="width:20%">
                    <template #editor="{ data, field }">
                        <InputText v-model="data[field]" autofocus />
                    </template>
                </Column>
                <Column field="name" header="Name" style="width:20%">
                    <template #editor="{ data, field }">
                        <InputText v-model="data[field]" />
                    </template>
                </Column>
                <Column field="inventoryStatus" header="Status" style="width:20%">
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
                <Column field="price" header="Price" style="width:20%">
                    <template #editor="{ data, field }">
                        <InputText v-model="data[field]" />
                    </template>
                </Column>
                <Column :rowEditor="true" style="width:10%; min-width:8rem" bodyStyle="text-align:center"></Column>
            </DataTable>
        </div>
    </div>
</template>

<script>
import ProductService from './service/ProductService';

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
            <h5>Cell Editing</h5>
            <p>Validations, dynamic columns and reverting values with the escape key.</p>
            <DataTable :value="products1" editMode="cell" @cell-edit-complete="onCellEditComplete" class="editable-cells-table" responsiveLayout="scroll">
                <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field" style="width:25%">
                    <template #editor="{ data, field }">
                        <InputText v-model="data[field]" autofocus />
                    </template>
                </Column>
            </DataTable>
        </div>

        <div class="card">
            <h5>Row Editing</h5>
            <DataTable :value="products2" editMode="row" dataKey="id" v-model:editingRows="editingRows" @row-edit-save="onRowEditSave" responsiveLayout="scroll">
                <Column field="code" header="Code" style="width:20%">
                    <template #editor="{ data, field }">
                        <InputText v-model="data[field]" autofocus />
                    </template>
                </Column>
                <Column field="name" header="Name" style="width:20%">
                    <template #editor="{ data, field }">
                        <InputText v-model="data[field]" />
                    </template>
                </Column>
                <Column field="inventoryStatus" header="Status" style="width:20%">
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
                <Column field="price" header="Price" style="width:20%">
                    <template #editor="{ data, field }">
                        <InputText v-model="data[field]" />
                    </template>
                </Column>
                <Column :rowEditor="true" style="width:10%; min-width:8rem" bodyStyle="text-align:center"></Column>
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
        });

        const productService = ref(new ProductService());
        const editingRows = ref([]);
        const columns = ref([
            {field: 'code', header: 'Code'},
            {field: 'name', header: 'Name'},
            {field: 'quantity', header: 'Quantity'},
            {field: 'price', header: 'Price'}
        ]);
        const products1 = ref(null);
        const products2 = ref(null);
        const statuses = ref([
            {label: 'In Stock', value: 'INSTOCK'},
            {label: 'Low Stock', value: 'LOWSTOCK'},
            {label: 'Out of Stock', value: 'OUTOFSTOCK'}
        ]);

        const onCellEditComplete = (event) => {
            let { data, newValue, field } = event;

            switch (field) {
                case 'quantity':
                case 'price':
                    if (isPositiveInteger(newValue))
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
        const onRowEditSave = (event) => {
            let { newData, index } = event;

            products2[index] = newData;
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

        return { productService, editingRows, columns, products1, products2, statuses, onCellEditComplete,
            isPositiveInteger, onRowEditSave, getStatusLabel }
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
    productService: null,
    created() {
        this.productService = new ProductService();

        this.columns = [
            {field: 'code', header: 'Code'},
            {field: 'name', header: 'Name'},
            {field: 'quantity', header: 'Quantity'},
            {field: 'price', header: 'Price'}
        ];
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
::v-deep(.editable-cells-table td.p-cell-editing) {
    padding-top: 0;
    padding-bottom: 0;
}
</style>
