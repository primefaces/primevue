<template>
    <DocSectionText v-bind="$attrs">
        <p>For custom content support define an <i>option</i> template that gets the item instance as a parameter. In addition <i>header</i> slot is provided for further customization.</p>
    </DocSectionText>
    <div class="card sm:flex sm:justify-center">
        <OrderList v-model="products" dataKey="id" breakpoint="575px" scrollHeight="20rem">
            <template #option="{ option, selected }">
                <div class="flex flex-wrap p-1 items-center gap-4 w-full">
                    <img class="w-12 shrink-0 rounded" :src="'https://primefaces.org/cdn/primevue/images/product/' + option.image" :alt="option.name" />
                    <div class="flex-1 flex flex-col">
                        <span class="font-medium text-sm">{{ option.name }}</span>
                        <span :class="['text-sm', { 'text-surface-500 dark:text-surface-400': !selected, 'text-inherit': selected }]">{{ option.category }}</span>
                    </div>
                    <span class="font-bold sm:ml-8">${{ option.price }}</span>
                </div>
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
<OrderList v-model="products" dataKey="id" breakpoint="575px" scrollHeight="20rem">
    <template #option="{ option , selected }">
        <div class="flex flex-wrap p-1 items-center gap-4 w-full">
            <img class="w-12 shrink-0 rounded" :src="'https://primefaces.org/cdn/primevue/images/product/' + option.image" :alt="option.name" />
            <div class="flex-1 flex flex-col">
                <span class="font-medium text-sm">{{ option.name }}</span>
                <span :class="['text-sm', { 'text-surface-500 dark:text-surface-400': !selected, 'text-inherit': selected }]">{{ option.category }}</span>
            </div>
            <span class="font-bold sm:ml-8">\${{ option.price }}</span>
        </div>
    </template>
</OrderList>
`,
                options: `
<template>
    <div class="card sm:flex sm:justify-center">
        <OrderList v-model="products" dataKey="id" breakpoint="575px" scrollHeight="20rem">
            <template #option="{ option , selected }">
                <div class="flex flex-wrap p-1 items-center gap-4 w-full">
                    <img class="w-12 shrink-0 rounded" :src="'https://primefaces.org/cdn/primevue/images/product/' + option.image" :alt="option.name" />
                    <div class="flex-1 flex flex-col">
                        <span class="font-medium text-sm">{{ option.name }}</span>
                        <span :class="['text-sm', { 'text-surface-500 dark:text-surface-400': !selected, 'text-inherit': selected }]">{{ option.category }}</span>
                    </div>
                    <span class="font-bold sm:ml-8">\${{ option.price }}</span>
                </div>
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
        <OrderList v-model="products" dataKey="id" breakpoint="575px" scrollHeight="20rem">
            <template #option="{ option , selected }">
                <div class="flex flex-wrap p-1 items-center gap-4 w-full">
                    <img class="w-12 shrink-0 rounded" :src="'https://primefaces.org/cdn/primevue/images/product/' + option.image" :alt="option.name" />
                    <div class="flex-1 flex flex-col">
                        <span class="font-medium text-sm">{{ option.name }}</span>
                        <span :class="['text-sm', { 'text-surface-500 dark:text-surface-400': !selected, 'text-inherit': selected }]">{{ option.category }}</span>
                    </div>
                    <span class="font-bold sm:ml-8">\${{ option.price }}</span>
                </div>
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
