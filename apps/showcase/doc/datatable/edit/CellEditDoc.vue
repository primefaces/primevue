<template>
    <DocSectionText v-bind="$attrs">
        <p>Cell editing is enabled by setting <i>editMode</i> as <i>cell</i>, defining input elements with <i>editor</i> templating of a Column and implementing <i>cell-edit-complete</i> to update the state.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card p-fluid">
            <DataTable
                :value="products"
                editMode="cell"
                @cell-edit-complete="onCellEditComplete"
                :pt="{
                    table: { style: 'min-width: 50rem' },
                    column: {
                        bodycell: ({ state }) => ({
                            class: [{ 'pt-0 pb-0': state['d_editing'] }]
                        })
                    }
                }"
            >
                <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header" style="width: 25%">
                    <template #body="{ data, field }">
                        {{ field === 'price' ? formatCurrency(data[field]) : data[field] }}
                    </template>
                    <template #editor="{ data, field }">
                        <template v-if="field !== 'price'">
                            <InputText v-model="data[field]" autofocus />
                        </template>
                        <template v-else>
                            <InputNumber v-model="data[field]" mode="currency" currency="USD" locale="en-US" autofocus />
                        </template>
                    </template>
                </Column>
            </DataTable>
        </div>
    </DeferredDemo>
    <DocSectionCode :code="code" :service="['ProductService']" :dependencies="{ sass: '1.45.0', 'sass-loader': '8.0.2' }" />
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            columns: [
                { field: 'code', header: 'Code' },
                { field: 'name', header: 'Name' },
                { field: 'quantity', header: 'Quantity' },
                { field: 'price', header: 'Price' }
            ],
            code: {
                basic: `
<DataTable :value="products" editMode="cell" @cell-edit-complete="onCellEditComplete"
    :pt="{
        table: { style: 'min-width: 50rem' },
        column: {
            bodycell: ({ state }) => ({
                class: [{ 'pt-0 pb-0': state['d_editing'] }]
            })
        }
    }"
>
    <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header" style="width: 25%">
        <template #body="{ data, field }">
            {{ field === 'price' ? formatCurrency(data[field]) : data[field] }}
        </template>
        <template #editor="{ data, field }">
            <template v-if="field !== 'price'">
                <InputText v-model="data[field]" autofocus />
            </template>
            <template v-else>
                <InputNumber v-model="data[field]" mode="currency" currency="USD" locale="en-US" autofocus />
            </template>
        </template>
    </Column>
</DataTable>
`,
                options: `
<template>
    <div class="card p-fluid">
        <DataTable :value="products" editMode="cell" @cell-edit-complete="onCellEditComplete"
            :pt="{
                table: { style: 'min-width: 50rem' },
                column: {
                    bodycell: ({ state }) => ({
                        class: [{ 'pt-0 pb-0': state['d_editing'] }]
                    })
                }
            }"
        >
            <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header" style="width: 25%">
                <template #body="{ data, field }">
                    {{ field === 'price' ? formatCurrency(data[field]) : data[field] }}
                </template>
                <template #editor="{ data, field }">
                    <template v-if="field !== 'price'">
                        <InputText v-model="data[field]" autofocus />
                    </template>
                    <template v-else>
                        <InputNumber v-model="data[field]" mode="currency" currency="USD" locale="en-US" autofocus />
                    </template>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            columns: [
                { field: 'code', header: 'Code' },
                { field: 'name', header: 'Name' },
                { field: 'quantity', header: 'Quantity' },
                { field: 'price', header: 'Price' }
            ]
        };
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
        },
        formatCurrency(value) {
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card p-fluid">
        <DataTable :value="products" editMode="cell" @cell-edit-complete="onCellEditComplete"
            :pt="{
                table: { style: 'min-width: 50rem' },
                column: {
                    bodycell: ({ state }) => ({
                        class: [{ 'pt-0 pb-0': state['d_editing'] }]
                    })
                }
            }"
        >
            <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header" style="width: 25%">
                <template #body="{ data, field }">
                    {{ field === 'price' ? formatCurrency(data[field]) : data[field] }}
                </template>
                <template #editor="{ data, field }">
                    <template v-if="field !== 'price'">
                        <InputText v-model="data[field]" autofocus />
                    </template>
                    <template v-else>
                        <InputNumber v-model="data[field]" mode="currency" currency="USD" locale="en-US" autofocus />
                    </template>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

const products = ref();
const columns = ref([
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'quantity', header: 'Quantity' },
    { field: 'price', header: 'Price' }
]);

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const onCellEditComplete = (event) => {
    let { data, newValue, field } = event;

    switch (field) {
        case 'quantity':
        case 'price':
            if (isPositiveInteger(newValue)) data[field] = newValue;
            else event.preventDefault();
            break;

        default:
            if (newValue.trim().length > 0) data[field] = newValue;
            else event.preventDefault();
            break;
    }
};
const isPositiveInteger = (val) => {
    let str = String(val);

    str = str.trim();

    if (!str) {
        return false;
    }

    str = str.replace(/^0+/, '') || '0';
    var n = Math.floor(Number(str));

    return n !== Infinity && String(n) === str && n >= 0;
};
const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
}

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
...
        `
            }
        };
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
        },
        formatCurrency(value) {
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
        }
    }
};
</script>
