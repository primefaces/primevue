<template>
    <DocSectionText v-bind="$attrs"> </DocSectionText>
    <div class="card">
        <DataView
            :value="products"
            :layout="layout"
            :pt="{
                grid: { class: 'surface-ground' }
            }"
        >
            <template #header>
                <div class="flex justify-content-end">
                    <DataViewLayoutOptions
                        v-model="layout"
                        :pt="{
                            listButton: ({ props }) => ({ class: props.modelValue === 'list' ? 'bg-teal-400 border-teal-400' : 'undefined' }),
                            gridButton: ({ props }) => ({ class: props.modelValue === 'grid' ? 'bg-teal-400 border-teal-400' : 'undefined' })
                        }"
                    />
                </div>
            </template>

            <template #list="slotProps">
                <div class="grid grid-nogutter">
                    <div v-for="(item, index) in slotProps.items" :key="index" class="col-12">
                        <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4" :class="{ 'border-top-1 surface-border': index !== 0 }">
                            <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" :src="`https://primefaces.org/cdn/primevue/images/product/${item.image}`" :alt="item.name" />
                            <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                                <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                                    <div class="text-2xl font-bold text-900">{{ item.name }}</div>
                                    <Rating :modelValue="item.rating" readonly :cancel="false"></Rating>
                                    <div class="flex align-items-center gap-3">
                                        <span class="flex align-items-center gap-2">
                                            <i class="pi pi-tag"></i>
                                            <span class="font-semibold">{{ item.category }}</span>
                                        </span>
                                        <Tag :value="item.inventoryStatus" :severity="getSeverity(item)"></Tag>
                                    </div>
                                </div>
                                <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                                    <span class="text-2xl font-semibold">${{ item.price }}</span>
                                    <Button icon="pi pi-shopping-cart" rounded :disabled="item.inventoryStatus === 'OUTOFSTOCK'"></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template #grid="slotProps">
                <div class="grid grid-nogutter">
                    <div v-for="(item, index) in slotProps.items" :key="index" class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
                        <div class="p-4 border-1 surface-border surface-card border-round">
                            <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                                <div class="flex align-items-center gap-2">
                                    <i class="pi pi-tag"></i>
                                    <span class="font-semibold">{{ item.category }}</span>
                                </div>
                                <Tag :value="item.inventoryStatus" :severity="getSeverity(item)"></Tag>
                            </div>
                            <div class="flex flex-column align-items-center gap-3 py-5">
                                <img class="w-9 shadow-2 border-round" :src="`https://primefaces.org/cdn/primevue/images/product/${item.image}`" :alt="item.name" />
                                <div class="text-2xl font-bold">{{ item.name }}</div>
                                <Rating value="{product.rating}" readonly :cancel="false"></Rating>
                            </div>
                            <div class="flex align-items-center justify-content-between">
                                <span class="text-2xl font-semibold">${{ item.price }}</span>
                                <Button icon="pi pi-shopping-cart" rounded :disabled="item.inventoryStatus === 'OUTOFSTOCK'"></Button>
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
<DataView
    :value="products"
    :layout="layout"
    :pt="{
        grid: { class: 'surface-ground' }
    }"
>
    <template #header>
        <div class="flex justify-content-end">
            <DataViewLayoutOptions
                v-model="layout"
                :pt="{
                    listButton: ({ props }) => ({ class: props.modelValue === 'list' ? 'bg-teal-400 border-teal-400' : 'undefined' }),
                    gridButton: ({ props }) => ({ class: props.modelValue === 'grid' ? 'bg-teal-400 border-teal-400' : 'undefined' })
                }"
            />
        </div>
    </template>

    <template #list="slotProps">
        <div class="grid grid-nogutter">
            <div v-for="(item, index) in slotProps.items" :key="index" class="col-12">
                <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4" :class="{ 'border-top-1 surface-border': index !== 0 }">
                    <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" :src="\`https://primefaces.org/cdn/primevue/images/product/\${item.image}\`" :alt="item.name" />
                    <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                            <div class="text-2xl font-bold text-900">{{ item.name }}</div>
                            <Rating :modelValue="item.rating" readonly :cancel="false"></Rating>
                            <div class="flex align-items-center gap-3">
                                <span class="flex align-items-center gap-2">
                                    <i class="pi pi-tag"></i>
                                    <span class="font-semibold">{{ item.category }}</span>
                                </span>
                                <Tag :value="item.inventoryStatus" :severity="getSeverity(item)"></Tag>
                            </div>
                        </div>
                        <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                            <span class="text-2xl font-semibold">\${{ item.price }}</span>
                            <Button icon="pi pi-shopping-cart" rounded :disabled="item.inventoryStatus === 'OUTOFSTOCK'"></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>

    <template #grid="slotProps">
        <div class="grid grid-nogutter">
            <div v-for="(item, index) in slotProps.items" :key="index" class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
                <div class="p-4 border-1 surface-border surface-card border-round">
                    <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                        <div class="flex align-items-center gap-2">
                            <i class="pi pi-tag"></i>
                            <span class="font-semibold">{{ item.category }}</span>
                        </div>
                        <Tag :value="item.inventoryStatus" :severity="getSeverity(item)"></Tag>
                    </div>
                    <div class="flex flex-column align-items-center gap-3 py-5">
                        <img class="w-9 shadow-2 border-round" :src="\`https://primefaces.org/cdn/primevue/images/product/\${item.image}\`" :alt="item.name" />
                        <div class="text-2xl font-bold">{{ item.name }}</div>
                        <Rating value="{product.rating}" readonly :cancel="false"></Rating>
                    </div>
                    <div class="flex align-items-center justify-content-between">
                        <span class="text-2xl font-semibold">\${{ item.price }}</span>
                        <Button icon="pi pi-shopping-cart" rounded :disabled="item.inventoryStatus === 'OUTOFSTOCK'"></Button>
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
        <DataView
            :value="products"
            :layout="layout"
            :pt="{
                grid: { class: 'surface-ground' }
            }"
        >
            <template #header>
                <div class="flex justify-content-end">
                    <DataViewLayoutOptions
                        v-model="layout"
                        :pt="{
                            listButton: ({ props }) => ({ class: props.modelValue === 'list' ? 'bg-teal-400 border-teal-400' : 'undefined' }),
                            gridButton: ({ props }) => ({ class: props.modelValue === 'grid' ? 'bg-teal-400 border-teal-400' : 'undefined' })
                        }"
                    />
                </div>
            </template>

            <template #list="slotProps">
                <div class="grid grid-nogutter">
                    <div v-for="(item, index) in slotProps.items" :key="index" class="col-12">
                        <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4" :class="{ 'border-top-1 surface-border': index !== 0 }">
                            <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" :src="\`https://primefaces.org/cdn/primevue/images/product/\${item.image}\`" :alt="item.name" />
                            <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                                <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                                    <div class="text-2xl font-bold text-900">{{ item.name }}</div>
                                    <Rating :modelValue="item.rating" readonly :cancel="false"></Rating>
                                    <div class="flex align-items-center gap-3">
                                        <span class="flex align-items-center gap-2">
                                            <i class="pi pi-tag"></i>
                                            <span class="font-semibold">{{ item.category }}</span>
                                        </span>
                                        <Tag :value="item.inventoryStatus" :severity="getSeverity(item)"></Tag>
                                    </div>
                                </div>
                                <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                                    <span class="text-2xl font-semibold">\${{ item.price }}</span>
                                    <Button icon="pi pi-shopping-cart" rounded :disabled="item.inventoryStatus === 'OUTOFSTOCK'"></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template #grid="slotProps">
                <div class="grid grid-nogutter">
                    <div v-for="(item, index) in slotProps.items" :key="index" class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
                        <div class="p-4 border-1 surface-border surface-card border-round">
                            <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                                <div class="flex align-items-center gap-2">
                                    <i class="pi pi-tag"></i>
                                    <span class="font-semibold">{{ item.category }}</span>
                                </div>
                                <Tag :value="item.inventoryStatus" :severity="getSeverity(item)"></Tag>
                            </div>
                            <div class="flex flex-column align-items-center gap-3 py-5">
                                <img class="w-9 shadow-2 border-round" :src="\`https://primefaces.org/cdn/primevue/images/product/\${item.image}\`" :alt="item.name" />
                                <div class="text-2xl font-bold">{{ item.name }}</div>
                                <Rating value="{product.rating}" readonly :cancel="false"></Rating>
                            </div>
                            <div class="flex align-items-center justify-content-between">
                                <span class="text-2xl font-semibold">\${{ item.price }}</span>
                                <Button icon="pi pi-shopping-cart" rounded :disabled="item.inventoryStatus === 'OUTOFSTOCK'"></Button>
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
        ProductService.getProducts().then((data) => (this.products = data.slice(0, 6)));
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
        <DataView
            :value="products"
            :layout="layout"
            :pt="{
                grid: { class: 'surface-ground' }
            }"
        >
            <template #header>
                <div class="flex justify-content-end">
                    <DataViewLayoutOptions
                        v-model="layout"
                        :pt="{
                            listButton: ({ props }) => ({ class: props.modelValue === 'list' ? 'bg-teal-400 border-teal-400' : 'undefined' }),
                            gridButton: ({ props }) => ({ class: props.modelValue === 'grid' ? 'bg-teal-400 border-teal-400' : 'undefined' })
                        }"
                    />
                </div>
            </template>

            <template #list="slotProps">
                <div class="grid grid-nogutter">
                    <div v-for="(item, index) in slotProps.items" :key="index" class="col-12">
                        <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4" :class="{ 'border-top-1 surface-border': index !== 0 }">
                            <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" :src="\`https://primefaces.org/cdn/primevue/images/product/\${item.image}\`" :alt="item.name" />
                            <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                                <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                                    <div class="text-2xl font-bold text-900">{{ item.name }}</div>
                                    <Rating :modelValue="item.rating" readonly :cancel="false"></Rating>
                                    <div class="flex align-items-center gap-3">
                                        <span class="flex align-items-center gap-2">
                                            <i class="pi pi-tag"></i>
                                            <span class="font-semibold">{{ item.category }}</span>
                                        </span>
                                        <Tag :value="item.inventoryStatus" :severity="getSeverity(item)"></Tag>
                                    </div>
                                </div>
                                <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                                    <span class="text-2xl font-semibold">\${{ item.price }}</span>
                                    <Button icon="pi pi-shopping-cart" rounded :disabled="item.inventoryStatus === 'OUTOFSTOCK'"></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template #grid="slotProps">
                <div class="grid grid-nogutter">
                    <div v-for="(item, index) in slotProps.items" :key="index" class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
                        <div class="p-4 border-1 surface-border surface-card border-round">
                            <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                                <div class="flex align-items-center gap-2">
                                    <i class="pi pi-tag"></i>
                                    <span class="font-semibold">{{ item.category }}</span>
                                </div>
                                <Tag :value="item.inventoryStatus" :severity="getSeverity(item)"></Tag>
                            </div>
                            <div class="flex flex-column align-items-center gap-3 py-5">
                                <img class="w-9 shadow-2 border-round" :src="\`https://primefaces.org/cdn/primevue/images/product/\${item.image}\`" :alt="item.name" />
                                <div class="text-2xl font-bold">{{ item.name }}</div>
                                <Rating value="{product.rating}" readonly :cancel="false"></Rating>
                            </div>
                            <div class="flex align-items-center justify-content-between">
                                <span class="text-2xl font-semibold">\${{ item.price }}</span>
                                <Button icon="pi pi-shopping-cart" rounded :disabled="item.inventoryStatus === 'OUTOFSTOCK'"></Button>
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
    ProductService.getProducts().then((data) => (products.value = data.slice(0, 6)));
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
        ProductService.getProducts().then((data) => (this.products = data.slice(0, 6)));
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
