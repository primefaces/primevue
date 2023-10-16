<template>
    <DocSectionText v-bind="$attrs">
        <p>Using the <i>open</i> event, data can be loaded in a lazy manner before displaying it in a table.</p>
    </DocSectionText>
    <div class="card">
        <Inplace @open="loadData">
            <template #display> View Data </template>
            <template #content>
                <DataTable :value="products">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </template>
        </Inplace>
    </div>
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
<Inplace @open="loadData">
    <template #display> View Data </template>
    <template #content>
        <DataTable :value="products">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </template>
</Inplace>
`,
                options: `
<template>
    <div class="card">
        <Inplace @open="loadData">
            <template #display> View Data </template>
            <template #content>
                <DataTable :value="products">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </template>
        </Inplace>
    </div>
</template>

<script>
import {ProductService} from '@/service/ProductService';

export default {
    data() {
        return {
            products: null
        }
    },
    methods: {
        loadData() {
            ProductService.getProductsSmall().then((data) => (this.products = data));
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Inplace @open="loadData">
            <template #display> View Data </template>
            <template #content>
                <DataTable :value="products">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </template>
        </Inplace>
    </div>
</template>

<script setup>
import { ref } from "vue";
import {ProductService} from "@/service/ProductService";


const products = ref();
const loadData = () => {
    ProductService.getProductsSmall().then((data) => (products.value = data));
}
<\/script>
`
            }
        };
    },
    methods: {
        loadData() {
            ProductService.getProductsSmall().then((data) => (this.products = data));
        }
    }
};
</script>
