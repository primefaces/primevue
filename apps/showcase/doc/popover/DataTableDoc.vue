<template>
    <DocSectionText v-bind="$attrs">
        <p>Place the Popover outside of the data iteration components to avoid rendering it multiple times.</p>
    </DocSectionText>

    <div class="card">
        <DataTable :value="products" :rows="5" paginator tableStyle="min-width: 50rem">
            <Column field="id" header="Id" class="w-1/6"></Column>
            <Column field="code" header="Code" class="w-1/6"></Column>
            <Column field="name" header="Name" class="w-1/6" bodyClass="whitespace-nowrap"></Column>
            <Column field="price" header="Price" sortable class="w-1/6">
                <template #body="slotProps"> $ {{ slotProps.data.price }} </template>
            </Column>
            <Column header="Image" class="w-1/6">
                <template #body="slotProps">
                    <img :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`" :alt="slotProps.data.image" class="w-16 shadow-sm" />
                </template>
            </Column>
            <Column header="Details" class="w-1/6">
                <template #body="slotProps">
                    <Button type="button" @click="displayProduct($event, slotProps.data)" icon="pi pi-search" severity="secondary" rounded></Button>
                </template>
            </Column>
        </DataTable>

        <Popover ref="op">
            <div v-if="selectedProduct" class="rounded flex flex-col">
                <div class="flex justify-center rounded">
                    <div class="relative mx-auto">
                        <img class="rounded w-44 sm:w-64" :src="`https://primefaces.org/cdn/primevue/images/product/${selectedProduct.image}`" :alt="selectedProduct.name" />
                        <Tag :value="selectedProduct.inventoryStatus" :severity="getSeverity(selectedProduct)" class="absolute dark:!bg-surface-900" style="left: 4px; top: 4px"></Tag>
                    </div>
                </div>
                <div class="pt-4">
                    <div class="flex flex-row justify-between items-start gap-2 mb-4">
                        <div>
                            <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{ selectedProduct.category }}</span>
                            <div class="text-lg font-medium mt-1">{{ selectedProduct.name }}</div>
                        </div>
                        <div class="bg-surface-100 p-1" style="border-radius: 30px">
                            <div
                                class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2"
                                style="
                                    border-radius: 30px;
                                    box-shadow:
                                        0px 1px 2px 0px rgba(0, 0, 0, 0.04),
                                        0px 1px 2px 0px rgba(0, 0, 0, 0.06);
                                "
                            >
                                <span class="text-surface-900 font-medium text-sm">{{ selectedProduct.rating }}</span>
                                <i class="pi pi-star-fill text-yellow-500"></i>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-2">
                        <Button icon="pi pi-shopping-cart" :label="`Buy Now | \$${selectedProduct.price}`" :disabled="selectedProduct.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto whitespace-nowrap" @click="hidePopover"></Button>
                        <Button icon="pi pi-heart" variant="outlined" @click="hidePopover"></Button>
                    </div>
                </div>
            </div>
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
<DataTable :value="products" :rows="5" paginator tableStyle="min-width: 50rem">
    <Column field="id" header="Id" class="w-1/6"></Column>
    <Column field="code" header="Code" class="w-1/6"></Column>
    <Column field="name" header="Name" class="w-1/6" bodyClass="whitespace-nowrap"></Column>
    <Column field="price" header="Price" sortable class="w-1/6">
        <template #body="slotProps"> $ {{ slotProps.data.price }} </template>
    </Column>
    <Column header="Image" class="w-1/6">
        <template #body="slotProps">
            <img :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.image" class="w-16 shadow-sm" />
        </template>
    </Column>
    <Column header="Details" class="w-1/6">
        <template #body="slotProps">
            <Button type="button" @click="displayProduct($event, slotProps.data)" icon="pi pi-search" severity="secondary" rounded></Button>
        </template>
    </Column>
</DataTable>

<Popover ref="op">
    <div v-if="selectedProduct" class="rounded flex flex-col">
        <div class="flex justify-center rounded">
            <div class="relative mx-auto">
                <img class="rounded w-44 sm:w-64" :src="\`https://primefaces.org/cdn/primevue/images/product/\${selectedProduct.image}\`" :alt="selectedProduct.name" />
                <Tag :value="selectedProduct.inventoryStatus" :severity="getSeverity(selectedProduct)" class="absolute dark:!bg-surface-900" style="left: 4px; top: 4px"></Tag>
            </div>
        </div>
        <div class="pt-4">
            <div class="flex flex-row justify-between items-start gap-2 mb-4">
                <div>
                    <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{ selectedProduct.category }}</span>
                    <div class="text-lg font-medium mt-1">{{ selectedProduct.name }}</div>
                </div>
                <div class="bg-surface-100 p-1" style="border-radius: 30px">
                    <div class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                        <span class="text-surface-900 font-medium text-sm">{{ selectedProduct.rating }}</span>
                        <i class="pi pi-star-fill text-yellow-500"></i>
                    </div>
                </div>
            </div>
            <div class="flex gap-2">
                <Button icon="pi pi-shopping-cart" :label="\`Buy Now | \\$\${selectedProduct.price}\`" :disabled="selectedProduct.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto whitespace-nowrap" @click="hidePopover"></Button>
                <Button icon="pi pi-heart" variant="outlined" @click="hidePopover"></Button>
            </div>
        </div>
    </div>
</Popover>
`,
                options: `
<template>
    <div class="card">
        <DataTable :value="products" :rows="5" paginator tableStyle="min-width: 50rem">
            <Column field="id" header="Id" class="w-1/6"></Column>
            <Column field="code" header="Code" class="w-1/6"></Column>
            <Column field="name" header="Name" class="w-1/6" bodyClass="whitespace-nowrap"></Column>
            <Column field="price" header="Price" sortable class="w-1/6">
                <template #body="slotProps"> $ {{ slotProps.data.price }} </template>
            </Column>
            <Column header="Image" class="w-1/6">
                <template #body="slotProps">
                    <img :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.image" class="w-16 shadow-sm" />
                </template>
            </Column>
            <Column header="Details" class="w-1/6">
                <template #body="slotProps">
                    <Button type="button" @click="displayProduct($event, slotProps.data)" icon="pi pi-search" severity="secondary" rounded></Button>
                </template>
            </Column>
        </DataTable>

        <Popover ref="op">
            <div v-if="selectedProduct" class="rounded flex flex-col">
                <div class="flex justify-center rounded">
                    <div class="relative mx-auto">
                        <img class="rounded w-44 sm:w-64" :src="\`https://primefaces.org/cdn/primevue/images/product/\${selectedProduct.image}\`" :alt="selectedProduct.name" />
                        <Tag :value="selectedProduct.inventoryStatus" :severity="getSeverity(selectedProduct)" class="absolute dark:!bg-surface-900" style="left: 4px; top: 4px"></Tag>
                    </div>
                </div>
                <div class="pt-4">
                    <div class="flex flex-row justify-between items-start gap-2 mb-4">
                        <div>
                            <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{ selectedProduct.category }}</span>
                            <div class="text-lg font-medium mt-1">{{ selectedProduct.name }}</div>
                        </div>
                        <div class="bg-surface-100 p-1" style="border-radius: 30px">
                            <div class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                <span class="text-surface-900 font-medium text-sm">{{ selectedProduct.rating }}</span>
                                <i class="pi pi-star-fill text-yellow-500"></i>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-2">
                        <Button icon="pi pi-shopping-cart" :label="\`Buy Now | \\$\${selectedProduct.price}\`" :disabled="selectedProduct.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto whitespace-nowrap" @click="hidePopover"></Button>
                        <Button icon="pi pi-heart" variant="outlined" @click="hidePopover"></Button>
                    </div>
                </div>
            </div>
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
        ProductService.getProductsSmall().then((data) => (this.products = data));
    },
    methods: {
        displayProduct(event, product) {
            this.$refs.op.hide();

            if (this.selectedProduct?.id === product.id) {
                this.selectedProduct = null;
            } else {
                this.selectedProduct = product;

                this.$nextTick(() => {
                    this.$refs.op.show(event);
                });
            }
        },
        hidePopover() {
            this.$refs.op.hide();
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
        <DataTable :value="products" :rows="5" paginator tableStyle="min-width: 50rem">
            <Column field="id" header="Id" class="w-1/6"></Column>
            <Column field="code" header="Code" class="w-1/6"></Column>
            <Column field="name" header="Name" class="w-1/6" bodyClass="whitespace-nowrap"></Column>
            <Column field="price" header="Price" sortable class="w-1/6">
                <template #body="slotProps"> $ {{ slotProps.data.price }} </template>
            </Column>
            <Column header="Image" class="w-1/6">
                <template #body="slotProps">
                    <img :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.image" class="w-16 shadow-sm" />
                </template>
            </Column>
            <Column header="Details" class="w-1/6">
                <template #body="slotProps">
                    <Button type="button" @click="displayProduct($event, slotProps.data)" icon="pi pi-search" severity="secondary" rounded></Button>
                </template>
            </Column>
        </DataTable>

        <Popover ref="op">
            <div v-if="selectedProduct" class="rounded flex flex-col">
                <div class="flex justify-center rounded">
                    <div class="relative mx-auto">
                        <img class="rounded w-44 sm:w-64" :src="\`https://primefaces.org/cdn/primevue/images/product/\${selectedProduct.image}\`" :alt="selectedProduct.name" />
                        <Tag :value="selectedProduct.inventoryStatus" :severity="getSeverity(selectedProduct)" class="absolute dark:!bg-surface-900" style="left: 4px; top: 4px"></Tag>
                    </div>
                </div>
                <div class="pt-4">
                    <div class="flex flex-row justify-between items-start gap-2 mb-4">
                        <div>
                            <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{ selectedProduct.category }}</span>
                            <div class="text-lg font-medium mt-1">{{ selectedProduct.name }}</div>
                        </div>
                        <div class="bg-surface-100 p-1" style="border-radius: 30px">
                            <div class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                <span class="text-surface-900 font-medium text-sm">{{ selectedProduct.rating }}</span>
                                <i class="pi pi-star-fill text-yellow-500"></i>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-2">
                        <Button icon="pi pi-shopping-cart" :label="\`Buy Now | \\$\${selectedProduct.price}\`" :disabled="selectedProduct.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto whitespace-nowrap" @click="hidePopover"></Button>
                        <Button icon="pi pi-heart" variant="outlined" @click="hidePopover"></Button>
                    </div>
                </div>
            </div>
        </Popover>
    </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { useToast } from "primevue/usetoast";
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data));
});

const op = ref();
const products = ref();
const selectedProduct = ref();

const displayProduct = (event, product) => {
    op.value.hide();

    if (selectedProduct.value?.id === product.id) {
        selectedProduct.value = null;
    } else {
        selectedProduct.value = product;

        nextTick(() => {
            op.value.show(event);
        });
    }
}

const hidePopover = () => {
    op.value.hide();
}

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
        ProductService.getProductsSmall().then((data) => (this.products = data));
    },
    methods: {
        displayProduct(event, product) {
            this.$refs.op.hide();

            if (this.selectedProduct?.id === product.id) {
                this.selectedProduct = null;
            } else {
                this.selectedProduct = product;

                this.$nextTick(() => {
                    this.$refs.op.show(event);
                });
            }
        },
        hidePopover() {
            this.$refs.op.hide();
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
