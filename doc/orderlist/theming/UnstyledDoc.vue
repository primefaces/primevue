<template>
    <DocSectionText v-bind="$attrs">
        <p>Theming is implemented with the pass through properties in unstyled mode. Example below demonstrates the built-in Tailwind theme.</p>
    </DocSectionText>
    <DocSectionCode :code="code" :service="['ProductService']" embedded />
</template>

<script>
export default {
    data() {
        return {
            code: {
                composition: `
<template>
    <div class="card xl:flex xl:justify-center">
        <OrderList v-model="products" listStyle="height:auto" dataKey="id">
            <template #header> List of Products </template>
            <template #item="slotProps">
                <div class="flex flex-wrap p-2 items-center gap-3">
                    <img class="w-16 shadow-md shrink-0 rounded" :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.item.image" :alt="slotProps.item.name" />
                    <div class="flex-1 flex flex-col gap-2">
                        <span class="font-bold text-gray-700 dark:text-white/80">{{ slotProps.item.name }}</span>
                        <div class="flex items-center gap-2">
                            <i class="pi pi-tag text-sm text-gray-700 dark:text-white/80"></i>
                            <span class="text-gray-700 dark:text-white/80">{{ slotProps.item.category }}</span>
                        </div>
                    </div>
                    <span class="font-bold text-gray-700 dark:text-white/80">$ {{ slotProps.item.price }}</span>
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
<\/script>`
            }
        };
    }
};
</script>
