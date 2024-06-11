<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Defining a default <i>sortField</i> and <i>sortOrder</i> displays data as sorted initially in single column sorting. In <i>multiple</i> sort mode, <i>multiSortMeta</i> should be used instead by providing an array of
            <i>DataTableSortMeta</i> objects.
        </p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <DataTable :value="products" sortField="price" :sortOrder="-1" tableStyle="min-width: 50rem">
                <Column field="code" header="Code" sortable style="width: 20%"></Column>
                <Column field="name" header="Name" sortable style="width: 20%"></Column>
                <Column field="price" header="Price" :sortable="true">
                    <template #body="slotProps">
                        {{ formatCurrency(slotProps.data.price) }}
                    </template>
                </Column>
                <Column field="category" header="Category" sortable style="width: 20%"></Column>
                <Column field="quantity" header="Quantity" sortable style="width: 20%"></Column>
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
            products: null,
            code: {
                basic: `
<DataTable :value="products" sortField="price" :sortOrder="-1" tableStyle="min-width: 50rem">
    <Column field="code" header="Code" sortable style="width: 20%"></Column>
    <Column field="name" header="Name" sortable style="width: 20%"></Column>
    <Column field="price" header="Price" :sortable="true">
        <template #body="slotProps">
            {{ formatCurrency(slotProps.data.price) }}
        </template>
    </Column>
    <Column field="category" header="Category" sortable style="width: 20%"></Column>
    <Column field="quantity" header="Quantity" sortable style="width: 20%"></Column>
</DataTable>
`,
                options: `
<template>
    <div class="card">
        <DataTable :value="products" sortField="price" :sortOrder="-1" tableStyle="min-width: 50rem">
            <Column field="code" header="Code" sortable style="width: 20%"></Column>
            <Column field="name" header="Name" sortable style="width: 20%"></Column>
            <Column field="price" header="Price" :sortable="true">
                <template #body="slotProps">
                    {{ formatCurrency(slotProps.data.price) }}
                </template>
            </Column>
            <Column field="category" header="Category" sortable style="width: 20%"></Column>
            <Column field="quantity" header="Quantity" sortable style="width: 20%"></Column>
        </DataTable>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null
        };
    },
    mounted() {
        ProductService.getProductsMini().then((data) => (this.products = data));
    },
    methods: {
        formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <DataTable :value="products" sortField="price" :sortOrder="-1" tableStyle="min-width: 50rem">
            <Column field="code" header="Code" sortable style="width: 20%"></Column>
            <Column field="name" header="Name" sortable style="width: 20%"></Column>
            <Column field="price" header="Price" :sortable="true">
                <template #body="slotProps">
                    {{ formatCurrency(slotProps.data.price) }}
                </template>
            </Column>
            <Column field="category" header="Category" sortable style="width: 20%"></Column>
            <Column field="quantity" header="Quantity" sortable style="width: 20%"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();
const formatCurrency = (value) => {
    return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
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
        formatCurrency(value) {
            return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        }
    }
};
</script>
