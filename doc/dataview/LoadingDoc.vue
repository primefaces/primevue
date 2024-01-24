<template>
    <DocSectionText v-bind="$attrs">
        <p>While data is being loaded. <PrimeVueNuxtLink to="/skeleton">Skeleton</PrimeVueNuxtLink> component may be used to indicate the busy state.</p>
    </DocSectionText>
    <div class="card">
        <DataView :value="products" :layout="layout">
            <template #header>
                <div class="flex justify-content-end">
                    <DataViewLayoutOptions v-model="layout" />
                </div>
            </template>

            <template #list>
                <div class="grid grid-nogutter">
                    <div v-for="i in 6" :key="i" class="col-12">
                        <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4" :class="{ 'border-top-1 surface-border': i !== 0 }">
                            <Skeleton class="w-9 sm:w-16rem xl:w-10rem h-6rem block xl:block mx-auto border-round" />
                            <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                                <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                                    <Skeleton class="w-8rem border-round h-2rem" />
                                    <Skeleton class="w-6rem border-round h-1rem" />
                                    <div class="flex align-items-center gap-3">
                                        <Skeleton class="w-6rem border-round h-1rem" />
                                        <Skeleton class="w-3rem border-round h-1rem" />
                                    </div>
                                </div>
                                <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                                    <Skeleton class="w-4rem border-round h-2rem" />
                                    <Skeleton shape="circle" class="w-3rem h-3rem" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template #grid>
                <div class="grid grid-nogutter">
                    <div v-for="i in 6" :key="i" class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
                        <div class="p-4 border-1 surface-border surface-card border-round">
                            <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                                <Skeleton class="w-6rem border-round h-2rem" />
                                <Skeleton class="w-3rem border-round h-1rem" />
                            </div>
                            <div class="flex flex-column align-items-center gap-3 py-5">
                                <Skeleton class="w-9 border-round h-10rem" />
                                <Skeleton class="w-8rem border-round h-2rem" />
                                <Skeleton class="w-6rem border-round h-1rem" />
                            </div>
                            <div class="flex align-items-center justify-content-between">
                                <Skeleton class="w-4rem border-round h-2rem" />
                                <Skeleton shape="circle" class="w-3rem h-3rem" />
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </DataView>
    </div>
    <DocSectionCode :code="code" :service="['ProductService']" />
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            layout: 'grid',
            code: {
                basic: `
<DataView :value="products" :layout="layout">
    <template #header>
        <div class="flex justify-content-end">
            <DataViewLayoutOptions v-model="layout" />
        </div>
    </template>

    <template #list>
        <div class="grid grid-nogutter">
            <div v-for="i in 6" :key="i" class="col-12">
                <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4" :class="{ 'border-top-1 surface-border': i !== 0 }">
                    <Skeleton class="w-9 sm:w-16rem xl:w-10rem h-6rem block xl:block mx-auto border-round" />
                    <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                            <Skeleton class="w-8rem border-round h-2rem" />
                            <Skeleton class="w-6rem border-round h-1rem" />
                            <div class="flex align-items-center gap-3">
                                <Skeleton class="w-6rem border-round h-1rem" />
                                <Skeleton class="w-3rem border-round h-1rem" />
                            </div>
                        </div>
                        <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                            <Skeleton class="w-4rem border-round h-2rem" />
                            <Skeleton shape="circle" class="w-3rem h-3rem" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>

    <template #grid>
        <div class="grid grid-nogutter">
            <div v-for="i in 6" :key="i" class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
                <div class="p-4 border-1 surface-border surface-card border-round">
                    <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                        <Skeleton class="w-6rem border-round h-2rem" />
                        <Skeleton class="w-3rem border-round h-1rem" />
                    </div>
                    <div class="flex flex-column align-items-center gap-3 py-5">
                        <Skeleton class="w-9 border-round h-10rem" />
                        <Skeleton class="w-8rem border-round h-2rem" />
                        <Skeleton class="w-6rem border-round h-1rem" />
                    </div>
                    <div class="flex align-items-center justify-content-between">
                        <Skeleton class="w-4rem border-round h-2rem" />
                        <Skeleton shape="circle" class="w-3rem h-3rem" />
                    </div>
                </div>
            </div>
        </div>
    </template>
</DataView>
`,
                options: `
<template>
    <div class="card">
        <DataView :value="products" :layout="layout">
            <template #header>
                <div class="flex justify-content-end">
                    <DataViewLayoutOptions v-model="layout" />
                </div>
            </template>

            <template #list>
                <div class="grid grid-nogutter">
                    <div v-for="i in 6" :key="i" class="col-12">
                        <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4" :class="{ 'border-top-1 surface-border': i !== 0 }">
                            <Skeleton class="w-9 sm:w-16rem xl:w-10rem h-6rem block xl:block mx-auto border-round" />
                            <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                                <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                                    <Skeleton class="w-8rem border-round h-2rem" />
                                    <Skeleton class="w-6rem border-round h-1rem" />
                                    <div class="flex align-items-center gap-3">
                                        <Skeleton class="w-6rem border-round h-1rem" />
                                        <Skeleton class="w-3rem border-round h-1rem" />
                                    </div>
                                </div>
                                <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                                    <Skeleton class="w-4rem border-round h-2rem" />
                                    <Skeleton shape="circle" class="w-3rem h-3rem" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template #grid>
                <div class="grid grid-nogutter">
                    <div v-for="i in 6" :key="i" class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
                        <div class="p-4 border-1 surface-border surface-card border-round">
                            <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                                <Skeleton class="w-6rem border-round h-2rem" />
                                <Skeleton class="w-3rem border-round h-1rem" />
                            </div>
                            <div class="flex flex-column align-items-center gap-3 py-5">
                                <Skeleton class="w-9 border-round h-10rem" />
                                <Skeleton class="w-8rem border-round h-2rem" />
                                <Skeleton class="w-6rem border-round h-1rem" />
                            </div>
                            <div class="flex align-items-center justify-content-between">
                                <Skeleton class="w-4rem border-round h-2rem" />
                                <Skeleton shape="circle" class="w-3rem h-3rem" />
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </DataView>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            layout: 'grid'
        }
    },
    mounted() {
        ProductService.getProductsSmall().then((data) => (this.products = data.slice(0, 6)));
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
}
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <DataView :value="products" :layout="layout">
            <template #header>
                <div class="flex justify-content-end">
                    <DataViewLayoutOptions v-model="layout" />
                </div>
            </template>

            <template #list>
                <div class="grid grid-nogutter">
                    <div v-for="i in 6" :key="i" class="col-12">
                        <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4" :class="{ 'border-top-1 surface-border': i !== 0 }">
                            <Skeleton class="w-9 sm:w-16rem xl:w-10rem h-6rem block xl:block mx-auto border-round" />
                            <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                                <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                                    <Skeleton class="w-8rem border-round h-2rem" />
                                    <Skeleton class="w-6rem border-round h-1rem" />
                                    <div class="flex align-items-center gap-3">
                                        <Skeleton class="w-6rem border-round h-1rem" />
                                        <Skeleton class="w-3rem border-round h-1rem" />
                                    </div>
                                </div>
                                <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                                    <Skeleton class="w-4rem border-round h-2rem" />
                                    <Skeleton shape="circle" class="w-3rem h-3rem" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template #grid>
                <div class="grid grid-nogutter">
                    <div v-for="i in 6" :key="i" class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
                        <div class="p-4 border-1 surface-border surface-card border-round">
                            <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                                <Skeleton class="w-6rem border-round h-2rem" />
                                <Skeleton class="w-3rem border-round h-1rem" />
                            </div>
                            <div class="flex flex-column align-items-center gap-3 py-5">
                                <Skeleton class="w-9 border-round h-10rem" />
                                <Skeleton class="w-8rem border-round h-2rem" />
                                <Skeleton class="w-6rem border-round h-1rem" />
                            </div>
                            <div class="flex align-items-center justify-content-between">
                                <Skeleton class="w-4rem border-round h-2rem" />
                                <Skeleton shape="circle" class="w-3rem h-3rem" />
                            </div>
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
    ProductService.getProductsSmall().then((data) => (products.value = data.slice(0, 6)));
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
...
        `
            }
        };
    },
    mounted() {
        ProductService.getProductsSmall().then((data) => (this.products = data.slice(0, 6)));
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
