<template>
    <DocSectionText v-bind="$attrs">
        <p>Custom content at <i>header</i> and <i>footer</i> sections are supported via templating.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <DataTable :value="products" tableStyle="min-width: 50rem">
                <template #header>
                    <div class="flex flex-wrap items-center justify-between gap-2">
                        <span class="text-xl font-bold">Products</span>
                        <Button icon="pi pi-refresh" rounded raised />
                    </div>
                </template>
                <Column field="name" header="Name"></Column>
                <Column header="Image">
                    <template #body="slotProps">
                        <img :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`" :alt="slotProps.data.image" class="w-24 rounded" />
                    </template>
                </Column>
                <Column field="price" header="Price">
                    <template #body="slotProps">
                        {{ formatCurrency(slotProps.data.price) }}
                    </template>
                </Column>
                <Column field="category" header="Category"></Column>
                <Column field="rating" header="Reviews">
                    <template #body="slotProps">
                        <Rating :modelValue="slotProps.data.rating" readonly :cancel="false" />
                    </template>
                </Column>
                <Column header="Status">
                    <template #body="slotProps">
                        <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)" />
                    </template>
                </Column>
                <template #footer> In total there are {{ products ? products.length : 0 }} products. </template>
            </DataTable>
        </div>
    </DeferredDemo>
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
<DataTable :value="products" tableStyle="min-width: 50rem">
    <template #header>
        <div class="flex flex-wrap items-center justify-between gap-2">
            <span class="text-xl font-bold">Products</span>
            <Button icon="pi pi-refresh" rounded raised />
        </div>
    </template>
    <Column field="name" header="Name"></Column>
    <Column header="Image">
        <template #body="slotProps">
            <img :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.image" class="w-24 rounded" />
        </template>
    </Column>
    <Column field="price" header="Price">
        <template #body="slotProps">
            {{ formatCurrency(slotProps.data.price) }}
        </template>
    </Column>
    <Column field="category" header="Category"></Column>
    <Column field="rating" header="Reviews">
        <template #body="slotProps">
            <Rating :modelValue="slotProps.data.rating" readonly :cancel="false" />
        </template>
    </Column>
    <Column header="Status">
        <template #body="slotProps">
            <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)" />
        </template>
    </Column>
    <template #footer> In total there are {{ products ? products.length : 0 }} products. </template>
</DataTable>
`,
                options: `
<template>
    <div class="card">
        <DataTable :value="products" tableStyle="min-width: 50rem">
            <template #header>
                <div class="flex flex-wrap items-center justify-between gap-2">
                    <span class="text-xl font-bold">Products</span>
                    <Button icon="pi pi-refresh" rounded raised />
                </div>
            </template>
            <Column field="name" header="Name"></Column>
            <Column header="Image">
                <template #body="slotProps">
                    <img :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.image" class="w-24 rounded" />
                </template>
            </Column>
            <Column field="price" header="Price">
                <template #body="slotProps">
                    {{ formatCurrency(slotProps.data.price) }}
                </template>
            </Column>
            <Column field="category" header="Category"></Column>
            <Column field="rating" header="Reviews">
                <template #body="slotProps">
                    <Rating :modelValue="slotProps.data.rating" readonly :cancel="false" />
                </template>
            </Column>
            <Column header="Status">
                <template #body="slotProps">
                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)" />
                </template>
            </Column>
            <template #footer> In total there are {{ products ? products.length : 0 }} products. </template>
        </DataTable>
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
        ProductService.getProductsMini().then((data) => (this.products = data));
    },
    methods: {
        formatCurrency(value) {
            return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        },
        getSeverity(product) {
            switch (product.inventoryStatus) {
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
        <DataTable :value="products" tableStyle="min-width: 50rem">
            <template #header>
                <div class="flex flex-wrap items-center justify-between gap-2">
                    <span class="text-xl font-bold">Products</span>
                    <Button icon="pi pi-refresh" rounded raised />
                </div>
            </template>
            <Column field="name" header="Name"></Column>
            <Column header="Image">
                <template #body="slotProps">
                    <img :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.image" class="w-24 rounded" />
                </template>
            </Column>
            <Column field="price" header="Price">
                <template #body="slotProps">
                    {{ formatCurrency(slotProps.data.price) }}
                </template>
            </Column>
            <Column field="category" header="Category"></Column>
            <Column field="rating" header="Reviews">
                <template #body="slotProps">
                    <Rating :modelValue="slotProps.data.rating" readonly :cancel="false" />
                </template>
            </Column>
            <Column header="Status">
                <template #body="slotProps">
                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)" />
                </template>
            </Column>
            <template #footer> In total there are {{ products ? products.length : 0 }} products. </template>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();
const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
const getSeverity = (product) => {
    switch (product.inventoryStatus) {
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
    methods: {
        loadDemoData() {
            ProductService.getProductsMini().then((data) => (this.products = data));
        },
        formatCurrency(value) {
            return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        },
        getSeverity(product) {
            switch (product.inventoryStatus) {
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
