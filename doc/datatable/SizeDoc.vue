<template>
    <DocSectionText v-bind="$attrs">
        <p>In addition to a regular table, alternatives with alternative sizes are available.</p>
    </DocSectionText>
    <div class="card">
        <div class="flex justify-content-center mb-4">
            <SelectButton v-model="size" :options="sizeOptions" optionLabel="label" dataKey="label" />
        </div>
        <DataTable :value="products" :class="`p-datatable-${size.class}`" tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
    <DocSectionCode :code="code" :service="['ProductService']" />
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            size: { label: 'Normal', value: 'normal' },
            sizeOptions: [
                { label: 'Small', value: 'small', class: 'sm' },
                { label: 'Normal', value: 'normal' },
                { label: 'Large', value: 'large', class: 'lg' }
            ],
            code: {
                basic: `
<SelectButton v-model="size" :options="sizeOptions" optionLabel="label" dataKey="label" />
<DataTable :value="products" :class="\`p-datatable-\${size.class}\`" tableStyle="min-width: 50rem">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>`,
                options: `
<template>
    <div class="card">
        <div class="flex justify-content-center mb-4">
            <SelectButton v-model="size" :options="sizeOptions" optionLabel="label" dataKey="label" />
        </div>
        <DataTable :value="products" :class="\`p-datatable-\${size.class}\`" tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            size: { label: 'Normal', value: 'normal' },
            sizeOptions: [
                { label: 'Small', value: 'small', class: 'sm' },
                { label: 'Normal', value: 'normal' },
                { label: 'Large', value: 'large', class: 'lg' }
            ]
        };
    },
    mounted() {
        ProductService.getProductsMini().then((data) => (this.products = data));
    }
};
<\/script>`,
                composition: `
<template>
    <div class="card">
        <div class="flex justify-content-center mb-4">
            <SelectButton v-model="size" :options="sizeOptions" optionLabel="label" dataKey="label" />
        </div>
        <DataTable :value="products" :class="\`p-datatable-\${size.class}\`" tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
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
const size = ref({ label: 'Normal', value: 'normal' });
const sizeOptions = ref([
    { label: 'Small', value: 'small', class: 'sm' },
    { label: 'Normal', value: 'normal' },
    { label: 'Large', value: 'large', class: 'lg' }
]);

<\/script>`,
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
    mounted() {
        ProductService.getProductsMini().then((data) => (this.products = data));
    }
};
</script>
