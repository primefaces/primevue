<template>
    <DocSectionText v-bind="$attrs">
        <p>DataTable provides <i>row-select</i> and <i>row-unselect</i> events to listen selection events.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <DataTable v-model:selection="selectedProduct" :value="products" selectionMode="single" dataKey="id" :metaKeySelection="false" @rowSelect="onRowSelect" @rowUnselect="onRowUnselect" tableStyle="min-width: 50rem">
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
<DataTable v-model:selection="selectedProduct" :value="products" selectionMode="single" dataKey="id" :metaKeySelection="false"
        @rowSelect="onRowSelect" @rowUnselect="onRowUnselect" tableStyle="min-width: 50rem">
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
        <DataTable v-model:selection="selectedProduct" :value="products" selectionMode="single" dataKey="id" :metaKeySelection="false"
                @rowSelect="onRowSelect" @rowUnselect="onRowUnselect" tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
        <Toast/>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            selectedProduct: null
        };
    },
    mounted() {
        ProductService.getProductsMini().then((data) => (this.products = data));
    },
    methods: {
        onRowSelect(event) {
            this.$toast.add({ severity: 'info', summary: 'Product Selected', detail: 'Name: ' + event.data.name, life: 3000 });
        },
        onRowUnselect(event) {
            this.$toast.add({ severity: 'warn', summary: 'Product Unselected', detail: 'Name: ' + event.data.name, life: 3000 });
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <DataTable v-model:selection="selectedProduct" :value="products" selectionMode="single" dataKey="id" :metaKeySelection="false"
                @rowSelect="onRowSelect" @rowUnselect="onRowUnselect" tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
        <Toast/>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();
const selectedProduct = ref();
const toast = useToast();
const onRowSelect = (event) => {
    toast.add({ severity: 'info', summary: 'Product Selected', detail: 'Name: ' + event.data.name, life: 3000 });
};
const onRowUnselect = (event) => {
    toast.add({ severity: 'warn', summary: 'Product Unselected', detail: 'Name: ' + event.data.name, life: 3000 });
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
        onRowSelect(event) {
            this.$toast.add({ severity: 'info', summary: 'Product Selected', detail: 'Name: ' + event.data.name, life: 3000 });
        },
        onRowUnselect(event) {
            this.$toast.add({ severity: 'warn', summary: 'Product Unselected', detail: 'Name: ' + event.data.name, life: 3000 });
        }
    }
};
</script>
