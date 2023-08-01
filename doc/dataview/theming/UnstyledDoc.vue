<template>
    <DocSectionText v-bind="$attrs">
        <p>Theming is implemented with the pass through properties in unstyled mode. Example below demonstrates the built-in Tailwind theme.</p>
    </DocSectionText>
    <DocSectionCode :code="code" :service="['ProductService']" embedded />
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            layout: 'grid',
            code: {
                composition: `
<template>
    <div class="card">
        <DataView :value="products" :layout="layout">
            <template #header>
                <div class="flex justify-end bg-gray-100 dark:bg-gray-800">
                    <DataViewLayoutOptions v-model="layout" />
                </div>
            </template>

            <template #list="slotProps">
                <div class="flex-initial shrink-0 w-full">
                    <div class="flex flex-col xl:flex-row xl:items-start p-4 gap-4 bg-white dark:bg-gray-900">
                        <img class="w-3/4 sm:w-64 xl:w-40 shadow-md block xl:block mx-auto rounded-md " :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.name" />
                        <div class="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-4">
                            <div class="flex flex-col items-center sm:items-start gap-3">
                                <div class="text-2xl font-bold text-gray-700 dark:text-white/80">
                                    {{ slotProps.data.name }}
                                </div>
                                <Rating :modelValue="slotProps.data.rating" readonly :cancel="false"></Rating>
                                <div class="flex items-center gap-3">
                                    <span class="flex items-center gap-2">
                                        <i class="pi pi-tag text-gray-700 dark:text-white/80"></i>
                                        <span class="font-semibold text-gray-700 dark:text-white/80">{{ slotProps.data.category }}</span>
                                    </span>
                                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></Tag>
                                </div>
                            </div>
                            <div class="flex sm:flex-col items-center sm:align-end gap-3 sm:gap-2">
                                <span class="text-2xl font-semibold text-gray-700 dark:text-white/80">\${{ slotProps.data.price }}</span>
                                <Button icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template #grid="slotProps">
                <div class="flex-initial shrink-0 w-full sm:w-1/2 lg:w-full xl:w-1/3 p-2">
                    <div class="p-4 border rounded-md bg-white dark:bg-gray-900 border-gray-300 dark:border-blue-900/40">
                        <div class="flex flex-wrap items-center justify-between gap-2">
                            <div class="flex items-center gap-2">
                                <i class="pi pi-tag text-gray-700 dark:text-white/80"></i>
                                <span class="font-semibold text-gray-700 dark:text-white/80">{{ slotProps.data.category }}</span>
                            </div>
                            <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></Tag>
                        </div>
                        <div class="flex flex-col items-center gap-3 py-5">
                            <img class="w-3/4 shadow-md rounded-md" :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.name" />
                            <div class="text-2xl font-bold text-gray-700 dark:text-white/80">{{ slotProps.data.name }}</div>
                            <Rating :modelValue="slotProps.data.rating" readonly :cancel="false"></Rating>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-2xl font-semibold text-gray-700 dark:text-white/80">\${{ slotProps.data.price }}</span>
                            <Button icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
                        </div>
                    </div>
                </div>
            </template>
        </DataView>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProducts().then((data) => (products.value = data.slice(0, 12)));
});

const products = ref();
const layout = ref('grid');

const getSeverity = (product) => {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
}

<\/script>`,
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
...
        `
            }
        };
    },
    mounted() {
        ProductService.getProducts().then((data) => (this.products = data.slice(0, 12)));
    },
    methods: {
        getSeverity(product) {
            switch (product.inventoryStatus) {
                case 'INSTOCK':
                    return 'success';

                case 'LOWSTOCK':
                    return 'warning';

                case 'OUTOFSTOCK':
                    return 'danger';

                default:
                    return null;
            }
        }
    }
};
</script>
