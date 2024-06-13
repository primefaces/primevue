<template>
    <DocSectionText v-bind="$attrs">
        <p>Column visibility based on a condition can be implemented with dynamic columns, in this sample a MultiSelect is used to manage the visible columns.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <DataTable :value="products" tableStyle="min-width: 50rem">
                <template #header>
                    <div style="text-align: left">
                        <MultiSelect :modelValue="selectedColumns" :options="columns" optionLabel="header" @update:modelValue="onToggle" display="chip" placeholder="Select Columns" />
                    </div>
                </template>
                <Column field="code" header="Code" />
                <Column v-for="(col, index) of selectedColumns" :key="col.field + '_' + index" :field="col.field" :header="col.header"></Column>
            </DataTable>
        </div>
    </DeferredDemo>
    <DocSectionCode :code="code" :service="['ProductService']" />
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            selectedColumns: null,
            columns: null,
            products: null,
            code: {
                basic: `
<DataTable :value="products" tableStyle="min-width: 50rem">
    <template #header>
        <div style="text-align:left">
            <MultiSelect :modelValue="selectedColumns" :options="columns" optionLabel="header" @update:modelValue="onToggle"
                display="chip" placeholder="Select Columns" />
        </div>
    </template>
    <Column field="code" header="Code" />
    <Column v-for="(col, index) of selectedColumns" :field="col.field" :header="col.header" :key="col.field + '_' + index"></Column>
</DataTable>
`,
                options: `
<template>
    <div>
        <DataTable :value="products" tableStyle="min-width: 50rem">
            <template #header>
                <div style="text-align:left">
                    <MultiSelect :modelValue="selectedColumns" :options="columns" optionLabel="header" @update:modelValue="onToggle"
                        display="chip" placeholder="Select Columns" />
                </div>
            </template>
            <Column field="code" header="Code" />
            <Column v-for="(col, index) of selectedColumns" :field="col.field" :header="col.header" :key="col.field + '_' + index"></Column>
        </DataTable>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            selectedColumns: null,
            columns: null,
            products: null
        }
    },
    created() {
        this.columns = [
            {field: 'name', header: 'Name'},
            {field: 'category', header: 'Category'},
            {field: 'quantity', header: 'Quantity'}
        ];
        this.selectedColumns = this.columns;
    },
    mounted() {
        ProductService.getProductsMini().then((data) => (this.products = data));
    },
    methods: {
        onToggle(value) {
            this.selectedColumns = this.columns.filter(col => value.includes(col));
        }
    }
}
<\/script>

`,
                composition: `
<template>
    <div>
        <DataTable :value="products" tableStyle="min-width: 50rem">
            <template #header>
                <div style="text-align:left">
                    <MultiSelect :modelValue="selectedColumns" :options="columns" optionLabel="header" @update:modelValue="onToggle"
                        display="chip" placeholder="Select Columns" />
                </div>
            </template>
            <Column field="code" header="Code" />
            <Column v-for="(col, index) of selectedColumns" :field="col.field" :header="col.header" :key="col.field + '_' + index"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const columns = ref([
    {field: 'name', header: 'Name'},
    {field: 'category', header: 'Category'},
    {field: 'quantity', header: 'Quantity'}
]);
const selectedColumns = ref(columns.value);
const products = ref();
const onToggle = (val) => {
    selectedColumns.value = columns.value.filter(col => val.includes(col));
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
            { field: 'name', header: 'Name' },
            { field: 'category', header: 'Category' },
            { field: 'quantity', header: 'Quantity' }
        ];
        this.selectedColumns = this.columns;
    },
    methods: {
        loadDemoData() {
            ProductService.getProductsMini().then((data) => (this.products = data));
        },
        onToggle(value) {
            this.selectedColumns = this.columns.filter((col) => value.includes(col));
        }
    }
};
</script>
