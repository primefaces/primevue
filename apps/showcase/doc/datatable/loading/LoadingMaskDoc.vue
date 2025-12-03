<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>loading</i> property displays a mask layer to indicate busy state. Use the paginator to display the mask.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <DataTable :value="products" paginator :rows="10" :loading="loading" @page="onPage($event)" tableStyle="min-width: 50rem">
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
            loading: false,
            code: {
                basic: `
<DataTable :value="products" paginator :rows="10" :loading="loading" @page="onPage($event)" tableStyle="min-width: 50rem">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
`,
                options: `
<template>
    <div class="card">
        <DataTable :value="products" paginator :rows="10" :loading="loading" @page="onPage($event)" tableStyle="min-width: 50rem">
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
            loading: false
        };
    },
    mounted() {
        ProductService.getProducts().then((data) => (this.products = data));
    },
    methods: {
        onPage() {
            this.loading = true;

            setTimeout(() => {
                this.loading = false;
            }, 500);
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <DataTable :value="products" paginator :rows="10" :loading="loading" @page="onPage($event)" tableStyle="min-width: 50rem">
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
    ProductService.getProducts().then((data) => (products.value = data));
});

const products = ref();
const loading = ref(false);

const onPage = () => {
    loading.value = true;

    setTimeout(() => {
        loading.value = false;
    }, 500);
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
...
`
            }
        };
    },
    methods: {
        onPage() {
            this.loading = true;

            setTimeout(() => {
                this.loading = false;
            }, 500);
        },
        loadDemoData() {
            ProductService.getProducts().then((data) => (this.products = data));
        }
    }
};
</script>
