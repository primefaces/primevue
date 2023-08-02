<template>
    <DocSectionText v-bind="$attrs">
        <p>Theming is implemented with the pass through properties in unstyled mode. Example below demonstrates the built-in Tailwind theme.</p>
    </DocSectionText>
    <DocSectionCode :code="code" embedded />
    <DocSectionCode :code="code" :service="['ProductService']" embedded />
</template>

<script>
import { ProductService } from '@/service/ProductService';
export default {
    data() {
        return {
            code: {
                composition: `
<template>
    <div class="card">
        <Carousel :value="products" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
            <template #item="slotProps">
                <div class="border bg-white dark:bg-gray-900 border-gray-300 dark:border-blue-900/40 rounded-lg m-2 text-center py-5 px-3">
                    <div class="mb-3">
                        <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-1/2 shadow-sm" />
                    </div>
                    <div>
                        <h4 class="mb-1 text-gray-700 dark:text-white/80">{{ slotProps.data.name }}</h4>
                        <h6 class="mt-0 mb-3 text-gray-700 dark:text-white/80">\${{ slotProps.data.price }}</h6>
                        <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" />
                        <div class="mt-5">
                            <Button icon="pi pi-search" rounded class="mr-2 text-gray-700 dark:text-white/80 inline-flex" />
                            <Button icon="pi pi-star-fill" rounded severity="success" class="mr-2 text-gray-700 dark:text-white/80 inline-flex" />
                        </div>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data.slice(0, 9)));
})

const products = ref();
const responsiveOptions = ref([
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
]);

const getSeverity = (status) => {
    switch (status) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};

<\/script>`
            }
        };
    },
    mounted() {
        ProductService.getProductsSmall().then((data) => (products.value = data.slice(0, 9)));
    }
};
</script>
