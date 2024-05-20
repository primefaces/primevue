<template>
    <DocSectionText v-bind="$attrs">
        <p>To create a vertical Carousel, <i>orientation</i> needs to be set to <i>vertical</i> along with a <i>verticalViewPortHeight</i>.</p>
    </DocSectionText>

    <div class="card">
        <Carousel :value="products" :numVisible="1" :numScroll="1" orientation="vertical" verticalViewPortHeight="330px" containerClass="flex items-center">
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
                            <Button icon="pi pi-heart" severity="secondary" outlined />
                            <Button icon="pi pi-shopping-cart" class="ml-2" />
                        </span>
                    </div>
                </div>
            </template>
        </Carousel>
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
<Carousel :value="products" :numVisible="1" :numScroll="1" orientation="vertical" verticalViewPortHeight="330px" containerClass="flex items-center">
    <template #item="slotProps">
        <div class="border border-surface-200 dark:border-surface-700 rounded m-2  p-4">
            <div class="mb-4">
                <div class="relative mx-auto">
                    <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-full rounded" />
                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute" style="left:5px; top: 5px"/>
                </div>
            </div>
            <div class="mb-4 font-medium">{{ slotProps.data.name }}</div>
            <div class="flex justify-between items-center">
                <div class="mt-0 font-semibold text-xl">\${{ slotProps.data.price }}</div>
                <span>
                    <Button icon="pi pi-heart" severity="secondary" outlined />
                    <Button icon="pi pi-shopping-cart" class="ml-2"/>
                </span>
            </div>
        </div>
    </template>
</Carousel>
`,
                options: `
<template>
    <div class="card">
        <Carousel :value="products" :numVisible="1" :numScroll="1" orientation="vertical" verticalViewPortHeight="330px" containerClass="flex items-center">
            <template #item="slotProps">
                <div class="border border-surface-200 dark:border-surface-700 rounded m-2  p-4">
                    <div class="mb-4">
                        <div class="relative mx-auto">
                            <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-full rounded" />
                            <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute" style="left:5px; top: 5px"/>
                        </div>
                    </div>
                    <div class="mb-4 font-medium">{{ slotProps.data.name }}</div>
                    <div class="flex justify-between items-center">
                        <div class="mt-0 font-semibold text-xl">\${{ slotProps.data.price }}</div>
                        <span>
                            <Button icon="pi pi-heart" severity="secondary" outlined />
                            <Button icon="pi pi-shopping-cart" class="ml-2"/>
                        </span>
                    </div>
                </div>
            </template>
        </Carousel>
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
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Carousel :value="products" :numVisible="1" :numScroll="1" orientation="vertical" verticalViewPortHeight="330px" containerClass="flex items-center">
            <template #item="slotProps">
                <div class="border border-surface-200 dark:border-surface-700 rounded m-2  p-4">
                    <div class="mb-4">
                        <div class="relative mx-auto">
                            <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-full rounded" />
                            <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute" style="left:5px; top: 5px"/>
                        </div>
                    </div>
                    <div class="mb-4 font-medium">{{ slotProps.data.name }}</div>
                    <div class="flex justify-between items-center">
                        <div class="mt-0 font-semibold text-xl">\${{ slotProps.data.price }}</div>
                        <span>
                            <Button icon="pi pi-heart" severity="secondary" outlined />
                            <Button icon="pi pi-shopping-cart" class="ml-2"/>
                        </span>
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

const getSeverity = (status) => {
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
};

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
