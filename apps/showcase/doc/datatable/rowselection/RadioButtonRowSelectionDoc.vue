<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Specifying <i>selectionMode</i> as <i>single</i> on a Column, displays a radio button inside that column for selection. By default, row clicks also trigger selection, set <i>selectionMode</i> of DataTable to <i>radiobutton</i> to only
            trigger selection using the radio buttons.
        </p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <DataTable v-model:selection="selectedProduct" :value="products" dataKey="id" tableStyle="min-width: 50rem">
                <Column selectionMode="single" headerStyle="width: 3rem"></Column>
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
            selectedProduct: null,
            metaKey: true,
            code: {
                basic: `
<DataTable v-model:selection="selectedProduct" :value="products" dataKey="id" tableStyle="min-width: 50rem">
    <Column selectionMode="single" headerStyle="width: 3rem"></Column>
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
`,
                options: `
<template>
    <div class="card">
        <DataTable v-model:selection="selectedProduct" :value="products" dataKey="id" tableStyle="min-width: 50rem">
            <Column selectionMode="single" headerStyle="width: 3rem"></Column>
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
            selectedProduct: null,
            metaKey: true
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
        <DataTable v-model:selection="selectedProduct" :value="products" dataKey="id" tableStyle="min-width: 50rem">
            <Column selectionMode="single" headerStyle="width: 3rem"></Column>
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
const selectedProduct = ref();
const metaKey = ref(true);

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
