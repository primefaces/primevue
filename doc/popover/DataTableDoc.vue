<template>
    <DocSectionText v-bind="$attrs">
        <p>An example that displays a DataTable inside a popup to select an item.</p>
    </DocSectionText>

    <div class="card flex flex-col items-center gap-4">
        <Button type="button" icon="pi pi-search" :label="selectedProduct ? selectedProduct.name : 'Select a Product'" @click="toggle" aria-haspopup="true" aria-controls="overlay_panel" />

        <div v-if="selectedProduct" class="p-8 bg-surface-0 dark:bg-surface-900 rounded border border-surface-200 dark:border-surface-700">
            <div class="relative">
                <img :src="`https://primefaces.org/cdn/primevue/images/product/${selectedProduct.image}`" :alt="selectedProduct.name" class="w-full sm:w-80" />
            </div>
            <div class="flex items-center justify-between mt-4 mb-2">
                <span class="font-semibold text-xl">{{ selectedProduct.name }}</span>
                <span class="text-xl ml-4">{{ '$' + selectedProduct.price }}</span>
            </div>
            <span class="text-surface-500 dark:text-surface-400">{{ selectedProduct.category }}</span>
        </div>

        <Popover ref="op" appendTo="body">
            <DataTable v-model:selection="selectedProduct" :value="products" selectionMode="single" :paginator="true" :rows="5" @row-select="onProductSelect">
                <Column field="name" header="Name" sortable style="min-width: 12rem"></Column>
                <Column header="Image">
                    <template #body="slotProps">
                        <img :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`" :alt="slotProps.data.image" class="w-16 shadow-sm" />
                    </template>
                </Column>
                <Column field="price" header="Price" sortable style="min-width: 8rem">
                    <template #body="slotProps"> $ {{ slotProps.data.price }} </template>
                </Column>
            </DataTable>
        </Popover>
    </div>
    <DocSectionCode :code="code" :service="['ProductService']" />
</template>
<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            selectedProduct: null,
            code: {
                basic: `
<Toast />
<Button type="button" icon="pi pi-search" :label="selectedProduct ? selectedProduct.name : 'Select a Product'" @click="toggle" aria-haspopup="true" aria-controls="overlay_panel" />

<div v-if="selectedProduct" class="p-8 bg-surface-0 dark:bg-surface-900 rounded border border-surface-200 dark:border-surface-700">
    <div class="relative">
        <img :src="\`/images/product/\${selectedProduct.image}\`" :alt="selectedProduct.name" class="w-16 shadow-sm" class="w-full sm:w-80" />
    </div>
    <div class="flex items-center justify-between mt-4 mb-2">
        <span class="font-semibold text-xl">{{ selectedProduct.name }}</span>
        <span class="text-xl ml-4">{{ '$' + selectedProduct.price }}</span>
    </div>
    <span class="text-surface-500 dark:text-surface-400">{{ selectedProduct.category }}</span>
</div>

<Popover ref="op" appendTo="body">
    <DataTable v-model:selection="selectedProduct" :value="products" selectionMode="single" :paginator="true" :rows="5" @row-select="onProductSelect">
        <Column field="name" header="Name" sortable style="width: 50%"></Column>
        <Column header="Image" style="width: 20%">
            <template #body="slotProps">
                <img :src="\`/images/product/\${selectedProduct.image}\`" :alt="slotProps.data.image" class="w-16 shadow-sm" />
            </template>
        </Column>
        <Column field="price" header="Price" sortable style="width: 30%">
            <template #body="slotProps">
                $ {{ slotProps.data.price }}
            </template>
        </Column>
    </DataTable>
</Popover>
`,
                options: `
<template>
    <div class="card flex flex-col items-center gap-4">
        <Toast />
        <Button type="button" icon="pi pi-search" :label="selectedProduct ? selectedProduct.name : 'Select a Product'" @click="toggle" aria-haspopup="true" aria-controls="overlay_panel" />

        <div v-if="selectedProduct" class="p-8 bg-surface-0 dark:bg-surface-900 rounded border border-surface-200 dark:border-surface-700">
            <div class="relative">
                <img :src="\`https://primefaces.org/cdn/primevue/images/product/\${selectedProduct.image}\`" :alt="selectedProduct.name" class="w-full sm:w-80" />
            </div>
            <div class="flex items-center justify-between mt-4 mb-2">
                <span class="font-semibold text-xl">{{ selectedProduct.name }}</span>
                <span class="text-xl ml-4">{{ '$' + selectedProduct.price }}</span>
            </div>
            <span class="text-surface-500 dark:text-surface-400">{{ selectedProduct.category }}</span>
        </div>

        <Popover ref="op" appendTo="body">
            <DataTable v-model:selection="selectedProduct" :value="products" selectionMode="single" :paginator="true" :rows="5" @row-select="onProductSelect">
                <Column field="name" header="Name" sortable style="min-width: 12rem"></Column>
                <Column header="Image">
                    <template #body="slotProps">
                        <img :src="\`https://primefaces.org/cdn/primevue/images/product/\${selectedProduct.image}\`" :alt="slotProps.data.image" class="w-16 shadow-sm" />
                    </template>
                </Column>
                <Column field="price" header="Price" sortable style="min-width: 8rem">
                    <template #body="slotProps">
                        $ {{ slotProps.data.price }}
                    </template>
                </Column>
            </DataTable>
        </Popover>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            selectedProduct: null
        };
    },
    mounted() {
        ProductService.getProductsSmall()
            .then((data) => (this.products = data))
            .then(() => (this.selectedProduct = this.products[0]));
    },
    methods: {
        toggle(event) {
            this.$refs.op.toggle(event);
        },
        onProductSelect(event) {
            this.$refs.op.hide();
            this.$toast.add({ severity: 'info', summary: 'Product Selected', detail: event.data.name, life: 3000 });
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-col items-center gap-4">
        <Toast />
        <Button type="button" icon="pi pi-search" :label="selectedProduct ? selectedProduct.name : 'Select a Product'" @click="toggle" aria-haspopup="true" aria-controls="overlay_panel" />

        <div v-if="selectedProduct" class="p-8 bg-surface-0 dark:bg-surface-900 rounded border border-surface-200 dark:border-surface-700">
            <div class="relative">
                <img :src="\`https://primefaces.org/cdn/primevue/images/product/\${selectedProduct.image}\`" :alt="selectedProduct.name" class="w-full sm:w-80" />
            </div>
            <div class="flex items-center justify-between mt-4 mb-2">
                <span class="font-semibold text-xl">{{ selectedProduct.name }}</span>
                <span class="text-xl ml-4">{{ '$' + selectedProduct.price }}</span>
            </div>
            <span class="text-surface-500 dark:text-surface-400">{{ selectedProduct.category }}</span>
        </div>

        <Popover ref="op" appendTo="body">
            <DataTable v-model:selection="selectedProduct" :value="products" selectionMode="single" :paginator="true" :rows="5" @row-select="onProductSelect">
                <Column field="name" header="Name" sortable style="min-width: 12rem"></Column>
                <Column header="Image">
                    <template #body="slotProps">
                        <img :src="\`https://primefaces.org/cdn/primevue/images/product/\${selectedProduct.image}\`" :alt="slotProps.data.image" class="w-16 shadow-sm" />
                    </template>
                </Column>
                <Column field="price" header="Price" sortable style="min-width: 8rem">
                    <template #body="slotProps">
                        $ {{ slotProps.data.price }}
                    </template>
                </Column>
            </DataTable>
        </Popover>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useToast } from "primevue/usetoast";
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsSmall()
        .then((data) => (products.value = data))
        .then(() => (selectedProduct.value = products.value[0]));
});

const toast = useToast();
const op = ref();
const products = ref();
const selectedProduct = ref();

const toggle = (event) => {
    op.value.toggle(event);
};

const onProductSelect = (event) => {
    op.value.hide();
    toast.add({ severity: 'info', summary: 'Product Selected', detail: event.data.name, life: 3000 });
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
    image: '/bamboo-watch.jpg',
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
        ProductService.getProductsSmall()
            .then((data) => (this.products = data))
            .then(() => (this.selectedProduct = this.products[0]));
    },
    methods: {
        toggle(event) {
            this.$refs.op.toggle(event);
        },
        onProductSelect(event) {
            this.$refs.op.hide();
            this.$toast.add({ severity: 'info', summary: 'Product Selected', detail: event.data.name, life: 3000 });
        }
    }
};
</script>
