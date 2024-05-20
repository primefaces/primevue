<template>
    <DocSectionText v-bind="$attrs">
        <p>
            More than one row is selectable by setting <i>selectionMode</i> to <i>multiple</i>. By default in multiple selection mode, metaKey press (e.g. <i>⌘</i>) is not necessary to add to existing selections. When the optional
            <i>metaKeySelection</i> is present, behavior is changed in a way that selecting a new row requires meta key to be present. Note that in touch enabled devices, DataTable always ignores metaKey.
        </p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <div class="flex justify-center items-center mb-6 gap-2">
                <ToggleSwitch v-model="metaKey" inputId="input-metakey" />
                <label for="input-metakey">MetaKey</label>
            </div>
            <DataTable v-model:selection="selectedProduct" :value="products" selectionMode="multiple" :metaKeySelection="metaKey" dataKey="id" tableStyle="min-width: 50rem">
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
<ToggleSwitch v-model="metaKey" inputId="input-metakey" />

<DataTable v-model:selection="selectedProduct" :value="products" selectionMode="multiple" :metaKeySelection="metaKey" dataKey="id" tableStyle="min-width: 50rem">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
`,
                options: `
<template>
    <div class="card">
        <div class="flex justify-center items-center mb-6 gap-2">
            <ToggleSwitch v-model="metaKey" inputId="input-metakey" />
            <label for="input-metakey">MetaKey</label>
        </div>
        <DataTable v-model:selection="selectedProduct" :value="products" selectionMode="multiple" :metaKeySelection="metaKey" dataKey="id" tableStyle="min-width: 50rem">
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
        <div class="flex justify-center items-center mb-6 gap-2">
            <ToggleSwitch v-model="metaKey" inputId="input-metakey" />
            <label for="input-metakey">MetaKey</label>
        </div>
        <DataTable v-model:selection="selectedProduct" :value="products" selectionMode="multiple" :metaKeySelection="metaKey" dataKey="id" tableStyle="min-width: 50rem">
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
