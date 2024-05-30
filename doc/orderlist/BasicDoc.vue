<template>
    <DocSectionText v-bind="$attrs">
        <p>OrderList requires an array as its value bound with the <i>v-model</i> directive and <i>option</i> template for its content.</p>
    </DocSectionText>
    <div class="card sm:flex sm:justify-center">
        <OrderList v-model="products" dataKey="id" breakpoint="575px" pt:pcList:root="w-full sm:w-56">
            <template #option="{ option }">
                {{ option.name }}
            </template>
        </OrderList>
    </div>
    <DocSectionCode :code="code" v-bind="$attrs" :service="['ProductService']" />
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            code: {
                basic: `
<OrderList v-model="products" dataKey="id" breakpoint="575px" pt:pcList:root="w-full sm:w-56">
    <template #option="{ option }">
        {{ option.name }}
    </template>
</OrderList>
`,
                options: `
<template>
    <div class="card sm:flex sm:justify-center">
        <OrderList v-model="products" dataKey="id" breakpoint="575px" pt:pcList:root="w-full sm:w-56">
            <template #option="{ option }">
                {{ option.name }}
            </template>
        </OrderList>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService'
export default {
    data() {
        return {
            products: null
        }
    },
    mounted() {
        ProductService.getProductsSmall().then((data) => (this.products = data));
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card sm:flex sm:justify-center">
        <OrderList v-model="products" dataKey="id" breakpoint="575px" pt:pcList:root="w-full sm:w-56">
            <template #option="{ option }">
                {{ option.name }}
            </template>
        </OrderList>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService'

const products = ref(null);

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data));
});
<\/script>
`,
                data: `
/* ProductService */
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
    mounted() {
        ProductService.getProductsSmall().then((data) => (this.products = data));
    }
};
</script>
