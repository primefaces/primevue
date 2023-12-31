<template>
    <DocSectionText v-bind="$attrs">
        <p>Cell Editing with Sorting and Filter</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card p-fluid">
            <DataTable
                v-model:filters="filters"
                :value="products"
                editMode="cell"
                @cell-edit-complete="onCellEditComplete"
                filterDisplay="row"
                :pt="{
                    table: { style: 'min-width: 50rem' },
                    column: {
                        bodycell: ({ state }) => ({
                            class: [{ 'pt-0 pb-0': state['d_editing'] }]
                        })
                    }
                }"
            >
                <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header" style="width: 25%" sortable filter>
                    <template #filter="{ filterModel, filterCallback }">
                        <InputText v-model="filterModel.value" v-tooltip.top.focus="'Hit enter key to filter'" type="text" @keydown.enter="filterCallback()" class="p-column-filter" />
                    </template>
                    <template #editor="{ data, field }">
                        <InputText v-model="data[field]" autofocus />
                    </template>
                </Column>
            </DataTable>
        </div>
    </DeferredDemo>
    <DocSectionCode :code="code" :service="['ProductService']" :dependencies="{ sass: '1.45.0', 'sass-loader': '8.0.2' }" />
</template>

<script>
import { ProductService } from '@/service/ProductService';
import { FilterMatchMode } from 'primevue/api';

export default {
    data() {
        return {
            products: null,
            columns: null,
            filters: {
                code: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
                name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
                quantity: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
                price: { value: null, matchMode: FilterMatchMode.STARTS_WITH }
            },
            code: {
                basic: `
<DataTable  v-model:filters="filters" :value="products" editMode="cell" @cell-edit-complete="onCellEditComplete"  filterDisplay="row"
    :pt="{
        table: { style: 'min-width: 50rem' },
        column: {
            bodycell: ({ state }) => ({
                class: [{ 'pt-0 pb-0': state['d_editing'] }]
            })
        }
    }"
>
    <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header" style="width: 25%" sortable filter>
        <template #filter="{ filterModel, filterCallback }">
            <InputText v-model="filterModel.value" v-tooltip.top.focus="'Hit enter key to filter'" type="text" @keydown.enter="filterCallback()" class="p-column-filter" />
        </template>
        <template #editor="{ data, field }">
            <InputText v-model="data[field]" autofocus />
        </template>
    </Column>
</DataTable>
`,
                options: `
<template>
    <div class="card p-fluid">
        <DataTable v-model:filters="filters" :value="products" editMode="cell" @cell-edit-complete="onCellEditComplete" filterDisplay="row"
            :pt="{
                table: { style: 'min-width: 50rem' },
                column: {
                    bodycell: ({ state }) => ({
                        class: [{ 'pt-0 pb-0': state['d_editing'] }]
                    })
                }
            }"
        >
            <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header" style="width: 25%" sortable filter>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" v-tooltip.top.focus="'Hit enter key to filter'" type="text" @keydown.enter="filterCallback()" class="p-column-filter" />
                </template>
                <template #editor="{ data, field }">
                    <InputText v-model="data[field]" autofocus />
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script>
import { FilterMatchMode } from 'primevue/api';
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            columns: null,
            filters: {
                code: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
                name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
                quantity: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
                price: { value: null, matchMode: FilterMatchMode.STARTS_WITH }
            }
        };
    },
    created() {
        this.columns = [
            {field: 'code', header: 'Code'},
            {field: 'name', header: 'Name'},
            {field: 'quantity', header: 'Quantity'},
            {field: 'price', header: 'Price'}
        ];
    },
    mounted() {
        ProductService.getProductsMini().then((data) => (this.products = data));
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

            str = str.replace(/^0+/, '') || '0';
            var n = Math.floor(Number(str));

            return n !== Infinity && String(n) === str && n >= 0;
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card p-fluid">
        <DataTable v-model:filters="filters" :value="products" editMode="cell" @cell-edit-complete="onCellEditComplete" filterDisplay="row"
            :pt="{
                table: { style: 'min-width: 50rem' },
                column: {
                    bodycell: ({ state }) => ({
                        class: [{ 'pt-0 pb-0': state['d_editing'] }]
                    })
                }
            }"
        >
            <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header" style="width: 25%" sortable filter>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" v-tooltip.top.focus="'Hit enter key to filter'" type="text" @keydown.enter="filterCallback()" class="p-column-filter" />
                </template>
                <template #editor="{ data, field }">
                    <InputText v-model="data[field]" autofocus />
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { FilterMatchMode } from 'primevue/api';
import { ProductService } from '@/service/ProductService';

const products = ref();
const columns = ref([
    {field: 'code', header: 'Code'},
    {field: 'name', header: 'Name'},
    {field: 'quantity', header: 'Quantity'},
    {field: 'price', header: 'Price'}
]);
const filters = ref({
    'code': {value: null, matchMode: FilterMatchMode.STARTS_WITH},
    'name': {value: null, matchMode: FilterMatchMode.STARTS_WITH},
    'quantity': {value: null, matchMode: FilterMatchMode.STARTS_WITH},
    'price': {value: null, matchMode: FilterMatchMode.STARTS_WITH}
});

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

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

const  isPositiveInteger = (val) => {
    let str = String(val);

    str = str.trim();

    if (!str) {
        return false;
    }

    str = str.replace(/^0+/, '') || '0';
    var n = Math.floor(Number(str));

    return n !== Infinity && String(n) === str && n >= 0;
};

<\/script>
`,
                data: `
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...`
            }
        };
    },
    created() {
        this.columns = [
            { field: 'code', header: 'Code' },
            { field: 'name', header: 'Name' },
            { field: 'quantity', header: 'Quantity' },
            { field: 'price', header: 'Price' }
        ];
    },
    methods: {
        loadDemoData() {
            ProductService.getProductsMini().then((data) => (this.products = data));
        },
        onCellEditComplete(event) {
            let { data, newValue, field } = event;

            switch (field) {
                case 'quantity':
                case 'price':
                    if (this.isPositiveInteger(newValue)) data[field] = newValue;
                    else event.preventDefault();
                    break;

                default:
                    if (newValue.trim().length > 0) data[field] = newValue;
                    else event.preventDefault();
                    break;
            }
        },
        isPositiveInteger(val) {
            let str = String(val);

            str = str.trim();

            if (!str) {
                return false;
            }

            str = str.replace(/^0+/, '') || '0';
            var n = Math.floor(Number(str));

            return n !== Infinity && String(n) === str && n >= 0;
        }
    }
};
</script>
