<template>
    <DocSectionText v-bind="$attrs">
        <p>In addition to the default mask loading state, a intermediate ProgressBar can be used.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <div class="flex justify-center mb-6">
                <SelectButton v-model="loadingMode" :options="LoadingModeOptions" optionLabel="label" dataKey="label" />
            </div>
            <DataTable :value="products" :loading="true" :loading-mode="loadingMode.value" tableStyle="min-width: 50rem">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
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
            loadingMode: { label: 'Mask', value: 'mask' },
            LoadingModeOptions: [
                { label: 'Mask', value: 'mask' },
                { label: 'ProgressBar', value: 'progressbar' }
            ],
            code: {
                basic: `
<SelectButton v-model="loadingMode" :options="LoadingModeOptions" optionLabel="label" dataKey="label" />
<DataTable :value="products" :loading-mode="loadingMode.value" tableStyle="min-width: 50rem">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
`,
                options: `
<template>
    <div class="card">
        <div class="flex justify-center mb-6">
            <SelectButton v-model="loadingMode" :options="LoadingModeOptions" optionLabel="label" dataKey="label" />
        </div>
        <DataTable :value="products" :loading-mode="loadingMode.value" tableStyle="min-width: 50rem">
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
            loadingMode: { label: 'Mask', value: 'mask' },
            LoadingModeOptions: [
                { label: 'Mask', value: 'mask' },
                { label: 'ProgressBar', value: 'progressbar' }
            ],
        };
    },
    mounted() {
        ProductService.getProductsMini().then((data) => (this.products = data));
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <div class="flex justify-center mb-6">
            <SelectButton v-model="loadingMode" :options="LoadingModeOptions" optionLabel="label" dataKey="label" />
        </div>
        <DataTable :value="products" :loading-mode="loadingMode.value" tableStyle="min-width: 50rem">
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
const loadingMode = ref({ label: 'Mask', value: 'mask' });
const loadingModeOptions = ref([
    { label: 'Mask', value: 'mask' },
    { label: 'ProgressBar', value: 'progressbar' }
]);

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
        }
    }
};
</script>
