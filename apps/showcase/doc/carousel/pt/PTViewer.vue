<template>
    <DocPTViewer :docs="docs">
        <Carousel :value="products" :numVisible="1" :numScroll="1" :responsiveOptions="responsiveOptions" class="!w-3/4 !p-2">
            <template #item="slotProps">
                <div class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4">
                    <div class="mb-4">
                        <div class="relative mx-auto">
                            <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-full rounded" />
                            <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute" style="left: 5px; top: 5px" />
                        </div>
                    </div>
                    <div class="mb-4 font-medium">{{ slotProps.data.name }}</div>
                    <div class="flex justify-between items-center">
                        <div class="mt-0 font-semibold text-xl">${{ slotProps.data.price }}</div>
                        <span>
                            <Button icon="pi pi-heart" severity="secondary" variant="outlined" />
                            <Button icon="pi pi-shopping-cart" class="ml-2" />
                        </span>
                    </div>
                </div>
            </template>
        </Carousel>
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            responsiveOptions: [
                {
                    breakpoint: '1400px',
                    numVisible: 2,
                    numScroll: 1
                },
                {
                    breakpoint: '1199px',
                    numVisible: 3,
                    numScroll: 1
                },
                {
                    breakpoint: '767px',
                    numVisible: 2,
                    numScroll: 1
                },
                {
                    breakpoint: '575px',
                    numVisible: 1,
                    numScroll: 1
                }
            ],
            docs: [
                {
                    data: getPTOptions('Carousel'),
                    key: 'Carousel'
                }
            ]
        };
    },
    mounted() {
        ProductService.getProductsSmall().then((data) => (this.products = data.slice(0, 9)));
    },
    methods: {
        getSeverity(status) {
            switch (status) {
                case 'INSTOCK':
                    return 'success';

                case 'LOWSTOCK':
                    return 'warn';

                case 'OUTOFSTOCK':
                    return 'danger';

                default:
                    return null;
            }
        }
    }
};
</script>
