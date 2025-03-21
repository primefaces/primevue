<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>open</i> event is used to initialize the content such as loading data in a lazy manner.</p>
    </DocSectionText>
    <div class="card">
        <Inplace @open="loadData">
            <template #display> View Data </template>
            <template #content>
                <DataView :value="products">
                    <template #list="slotProps">
                        <div class="flex flex-col">
                            <div v-for="(item, index) in slotProps.items" :key="index">
                                <div class="flex flex-col sm:flex-row sm:items-center p-6 gap-4" :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
                                    <div class="md:w-40 relative">
                                        <img class="block xl:block mx-auto rounded w-full" :src="`https://primefaces.org/cdn/primevue/images/product/${item.image}`" :alt="item.name" />
                                        <div class="absolute bg-black/70 rounded-border" style="left: 4px; top: 4px">
                                            <Tag :value="item.inventoryStatus" :severity="getSeverity(item)"></Tag>
                                        </div>
                                    </div>
                                    <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                                        <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                                            <div>
                                                <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{ item.category }}</span>
                                                <div class="text-lg font-medium mt-2">{{ item.name }}</div>
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
                                                    <span class="text-surface-900 font-medium text-sm">{{ item.rating }}</span>
                                                    <i class="pi pi-star-fill text-yellow-500"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex flex-col md:items-end gap-8">
                                            <span class="text-xl font-semibold">${{ item.price }}</span>
                                            <div class="flex flex-row-reverse md:flex-row gap-2">
                                                <Button icon="pi pi-heart" outlined></Button>
                                                <Button icon="pi pi-shopping-cart" label="Buy Now" :disabled="item.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto md:flex-initial whitespace-nowrap"></Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </DataView>
            </template>
        </Inplace>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import { ProductService } from '@/service/ProductService';
import Button from '@/volt/button';
import DataView from '@/volt/dataview';
import Inplace from '@/volt/inplace';
import Tag from '@/volt/tag';
import { ref } from 'vue';

const products = ref(null);

const loadData = () => {
    ProductService.getProductsMini().then((data) => (products.value = data));
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

const code = ref(`
<template>
    <div class="card">
        <Inplace @open="loadData">
            <template #display> View Data </template>
            <template #content>
                <DataView :value="products">
                    <template #list="slotProps">
                        <div class="flex flex-col">
                            <div v-for="(item, index) in slotProps.items" :key="index">
                                <div class="flex flex-col sm:flex-row sm:items-center p-6 gap-4" :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
                                    <div class="md:w-40 relative">
                                        <img class="block xl:block mx-auto rounded w-full" :src="\`https://primefaces.org/cdn/primevue/images/product/\${item.image}\`" :alt="item.name" />
                                        <div class="absolute bg-black/70 rounded-border" style="left: 4px; top: 4px">
                                            <Tag :value="item.inventoryStatus" :severity="getSeverity(item)"></Tag>
                                        </div>
                                    </div>
                                    <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                                        <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                                            <div>
                                                <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{ item.category }}</span>
                                                <div class="text-lg font-medium mt-2">{{ item.name }}</div>
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
                                                    <span class="text-surface-900 font-medium text-sm">{{ item.rating }}</span>
                                                    <i class="pi pi-star-fill text-yellow-500"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex flex-col md:items-end gap-8">
                                            <span class="text-xl font-semibold">\${{ item.price }}</span>
                                            <div class="flex flex-row-reverse md:flex-row gap-2">
                                                <Button icon="pi pi-heart" outlined></Button>
                                                <Button icon="pi pi-shopping-cart" label="Buy Now" :disabled="item.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto md:flex-initial whitespace-nowrap"></Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </DataView>
            </template>
        </Inplace>
    </div>
</template>

<script setup>
import { ProductService } from '@/service/ProductService';
import Button from '@/volt/button';
import DataView from '@/volt/dataview';
import Tag from '@/volt/tag';
import Inplace from '@/volt/inplace';
import { ref } from 'vue';

const products = ref(null);

const loadData = () => {
    ProductService.getProductsMini().then((data) => (products.value = data));
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
};
<\/script>
`);
</script>
