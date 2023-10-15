<template>
    <DocSectionText v-bind="$attrs">
        <p>A practical example that loads only when table becomes visible in viewport.</p>
    </DocSectionText>
    <div class="card">
        <div style="height: 800px">Scroll down to lazy load a DataTable.</div>

        <DeferredContent @load="onDataLoad" role="region" aria-live="polite" aria-label="Content loaded after page scrolled down">
            <DataTable :value="products">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </DeferredContent>
    </div>
    <DocSectionCode :code="code" :service="['ProductService']" v-bind="$attrs" />
</template>

<script>
import { ProductService } from '/service/ProductService';
export default {
    data() {
        return {
            code: {
                basic: `
<DeferredContent @load="onDataLoad" role="region" aria-live="polite" aria-label="Content loaded after page scrolled down">
    <DataTable :value="products">
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
    </DataTable>
</DeferredContent>
`,
                options: `
<template>
    <div class="card">
        <Toast />
        <div style="height: 800px">Scroll down to lazy load a DataTable.</div>
        
        <DeferredContent @load="onDataLoad" role="region" aria-live="polite" aria-label="Content loaded after page scrolled down">
            <DataTable :value="products">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </DeferredContent>
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
    methods: {
        onDataLoad() {
            ProductService.getProductsSmall().then((data) => (this.products = data));
            this.$toast.add({ severity: 'success', summary: 'Data Initialized', detail: 'Render Completed', life: 2000 });
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Toast />
        <div style="height: 800px">Scroll down to lazy load a DataTable.</div>

        <DeferredContent @load="onDataLoad" role="region" aria-live="polite" aria-label="Content loaded after page scrolled down">
            <DataTable :value="products">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </DeferredContent>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { ProductService } from '@/service/ProductService';

const products = ref(null);

const onDataLoad = () => {
    ProductService.getProductsSmall().then((data) => (products.value = data));
    toast.add({ severity: 'success', summary: 'Data Initialized', detail: 'Render Completed', life: 2000 });
};
<\/script>
`
            },
            products: null
        };
    },
    methods: {
        onDataLoad() {
            ProductService.getProductsSmall().then((data) => (this.products = data));
            this.$toast.add({ severity: 'success', summary: 'Data Initialized', detail: 'Render Completed', life: 2000 });
        }
    }
};
</script>
