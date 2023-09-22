<template>
    <DocSectionText v-bind="$attrs">
        <p>Built-in sorting is controlled by bindings <i>sortField</i> and <i>sortField</i> properties from a custom UI.</p>
    </DocSectionText>
    <div class="card">
        <DataView :value="products" :sortOrder="sortOrder" :sortField="sortField">
            <template #header>
                <Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By Price" @change="onSortChange($event)" />
            </template>
            <template #list="slotProps">
                <div class="col-12">
                    <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                        <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`" :alt="slotProps.data.name" />
                        <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                            <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                                <div class="text-2xl font-bold text-900">{{ slotProps.data.name }}</div>
                                <Rating :modelValue="slotProps.data.rating" readonly :cancel="false"></Rating>
                                <div class="flex align-items-center gap-3">
                                    <span class="flex align-items-center gap-2">
                                        <i class="pi pi-tag"></i>
                                        <span class="font-semibold">{{ slotProps.data.category }}</span>
                                    </span>
                                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></Tag>
                                </div>
                            </div>
                            <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                                <span class="text-2xl font-semibold">${{ slotProps.data.price }}</span>
                                <Button icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
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
            sortKey: null,
            sortOrder: null,
            sortField: null,
            sortOptions: [
                { label: 'Price High to Low', value: '!price' },
                { label: 'Price Low to High', value: 'price' }
            ],
            code: {
                basic: `
<DataView :value="products" :sortOrder="sortOrder" :sortField="sortField">
    <template #header>
        <Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By Price" @change="onSortChange($event)" />
    </template>
    <template #list="slotProps">
        <div class="col-12">
            <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.name" />
                <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                    <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                        <div class="text-2xl font-bold text-900">{{ slotProps.data.name }}</div>
                        <Rating :modelValue="slotProps.data.rating" readonly :cancel="false"></Rating>
                        <div class="flex align-items-center gap-3">
                            <span class="flex align-items-center gap-2">
                                <i class="pi pi-tag"></i>
                                <span class="font-semibold">{{ slotProps.data.category }}</span>
                            </span>
                            <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></Tag>
                        </div>
                    </div>
                    <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                        <span class="text-2xl font-semibold">\${{ slotProps.data.price }}</span>
                        <Button icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
                    </div>
                </div>
            </div>
        </div>
    </template>
</DataView>`,
                options: `
<template>
    <div class="card">
        <DataView :value="products" :sortOrder="sortOrder" :sortField="sortField">
            <template #header>
                <Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By Price" @change="onSortChange($event)" />
            </template>
            <template #list="slotProps">
                <div class="col-12">
                    <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                        <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.name" />
                        <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                            <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                                <div class="text-2xl font-bold text-900">{{ slotProps.data.name }}</div>
                                <Rating :modelValue="slotProps.data.rating" readonly :cancel="false"></Rating>
                                <div class="flex align-items-center gap-3">
                                    <span class="flex align-items-center gap-2">
                                        <i class="pi pi-tag"></i>
                                        <span class="font-semibold">{{ slotProps.data.category }}</span>
                                    </span>
                                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></Tag>
                                </div>
                            </div>
                            <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                                <span class="text-2xl font-semibold">\${{ slotProps.data.price }}</span>
                                <Button icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
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
            sortKey: null,
            sortOrder: null,
            sortField: null,
            sortOptions: [
                { label: 'Price High to Low', value: '!price' },
                { label: 'Price Low to High', value: 'price' }
            ]
        };
    },
    mounted() {
        ProductService.getProductsSmall().then((data) => (this.products = data.slice(0, 5)));
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
        },
        onSortChange(event) {
            const value = event.value.value;
            const sortValue = event.value;

            if (value.indexOf('!') === 0) {
                this.sortOrder = -1;
                this.sortField = value.substring(1, value.length);
                this.sortKey = sortValue;
            } else {
                this.sortOrder = 1;
                this.sortField = value;
                this.sortKey = sortValue;
            }
        }
    }
};
<\/script>`,
                composition: `
<template>
    <div class="card">
        <DataView :value="products" :sortOrder="sortOrder" :sortField="sortField">
            <template #header>
                <Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By Price" @change="onSortChange($event)" />
            </template>
            <template #list="slotProps">
                <div class="col-12">
                    <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                        <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.name" />
                        <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                            <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                                <div class="text-2xl font-bold text-900">{{ slotProps.data.name }}</div>
                                <Rating :modelValue="slotProps.data.rating" readonly :cancel="false"></Rating>
                                <div class="flex align-items-center gap-3">
                                    <span class="flex align-items-center gap-2">
                                        <i class="pi pi-tag"></i>
                                        <span class="font-semibold">{{ slotProps.data.category }}</span>
                                    </span>
                                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></Tag>
                                </div>
                            </div>
                            <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                                <span class="text-2xl font-semibold">\${{ slotProps.data.price }}</span>
                                <Button icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
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
    ProductService.getProductsSmall().then((data) => (products.value = data.slice(0, 5)));
});

const products = ref();
const sortKey = ref();
const sortOrder = ref();
const sortField = ref();
const sortOptions = ref([
    {label: 'Price High to Low', value: '!price'},
    {label: 'Price Low to High', value: 'price'},
]);
const onSortChange = (event) => {
    const value = event.value.value;
    const sortValue = event.value;

    if (value.indexOf('!') === 0) {
        sortOrder.value = -1;
        sortField.value = value.substring(1, value.length);
        sortKey.value = sortValue;
    }
    else {
        sortOrder.value = 1;
        sortField.value = value;
        sortKey.value = sortValue;
    }
};
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
};
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
        ProductService.getProductsSmall().then((data) => (this.products = data.slice(0, 5)));
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
        },
        onSortChange(event) {
            const value = event.value.value;
            const sortValue = event.value;

            if (value.indexOf('!') === 0) {
                this.sortOrder = -1;
                this.sortField = value.substring(1, value.length);
                this.sortKey = sortValue;
            } else {
                this.sortOrder = 1;
                this.sortField = value;
                this.sortKey = sortValue;
            }
        }
    }
};
</script>
