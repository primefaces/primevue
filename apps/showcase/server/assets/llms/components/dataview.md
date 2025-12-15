# Vue DataView Component

DataView displays data in grid or list layout with pagination and sorting features.

## Import

```javascript
import DataView from 'primevue/dataview';
```

## Accessibility

Screen Reader The container element that wraps the layout options buttons has a group role whereas each button element uses button role and aria-pressed is updated depending on selection state. Values to describe the buttons are derived from the aria.listView and aria.gridView properties of the locale API respectively. Refer to paginator accessibility documentation for the paginator of the component. Keyboard Support Key Function tab Moves focus to the buttons. space Toggles the checked state of a button.

## Basic

DataView requires a value to display along with a list slot for item content.

```vue
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
                                <div class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                    <span class="text-surface-900 font-medium text-sm">{{ item.rating }}</span>
                                    <i class="pi pi-star-fill text-yellow-500"></i>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col md:items-end gap-8">
                            <span class="text-xl font-semibold">\${{ item.price }}</span>
                            <div class="flex flex-row-reverse md:flex-row gap-2">
                                <Button icon="pi pi-heart" variant="outlined"></Button>
                                <Button icon="pi pi-shopping-cart" label="Buy Now" :disabled="item.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto md:flex-initial whitespace-nowrap"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>
</DataView>
```

## Layout

DataView supports list and grid display modes defined with the layout property. The grid mode is not built-in for flexibility purposes and requires a library with CSS grid features like Tailwind.

```vue
<DataView :value="products" :layout="layout">
    <template #header>
        <div class="flex justify-end">
            <SelectButton v-model="layout" :options="options" :allowEmpty="false">
                <template #option="{ option }">
                    <i :class="[option === 'list' ? 'pi pi-bars' : 'pi pi-table']" />
                </template>
            </SelectButton>
        </div>
    </template>

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
                                <div class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                    <span class="text-surface-900 font-medium text-sm">{{ item.rating }}</span>
                                    <i class="pi pi-star-fill text-yellow-500"></i>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col md:items-end gap-8">
                            <span class="text-xl font-semibold">\${{ item.price }}</span>
                            <div class="flex flex-row-reverse md:flex-row gap-2">
                                <Button icon="pi pi-heart" variant="outlined"></Button>
                                <Button icon="pi pi-shopping-cart" label="Buy Now" :disabled="item.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto md:flex-initial whitespace-nowrap"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>

    <template #grid="slotProps">
        <div class="grid grid-cols-12 gap-4">
            <div v-for="(item, index) in slotProps.items" :key="index" class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-6 p-2">
                <div class="p-6 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded flex flex-col">
                    <div class="bg-surface-50 flex justify-center rounded p-4">
                        <div class="relative mx-auto">
                            <img class="rounded w-full" :src="\`https://primefaces.org/cdn/primevue/images/product/\${item.image}\`" :alt="item.name" style="max-width: 300px"/>
                            <div class="absolute bg-black/70 rounded-border" style="left: 4px; top: 4px">
                                <Tag :value="item.inventoryStatus" :severity="getSeverity(item)"></Tag>
                            </div>
                        </div>
                    </div>
                    <div class="pt-6">
                        <div class="flex flex-row justify-between items-start gap-2">
                            <div>
                                <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{ item.category }}</span>
                                <div class="text-lg font-medium mt-1">{{ item.name }}</div>
                            </div>
                            <div class="bg-surface-100 p-1" style="border-radius: 30px">
                                <div class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                    <span class="text-surface-900 font-medium text-sm">{{ item.rating }}</span>
                                    <i class="pi pi-star-fill text-yellow-500"></i>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-6 mt-6">
                            <span class="text-2xl font-semibold">\${{ item.price }}</span>
                            <div class="flex gap-2">
                                <Button icon="pi pi-shopping-cart" label="Buy Now" :disabled="item.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto whitespace-nowrap"></Button>
                                <Button icon="pi pi-heart" variant="outlined"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>
</DataView>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <DataView :value="products" :layout="layout">
            <template #header>
                <div class="flex justify-end">
                    <SelectButton v-model="layout" :options="options" :allowEmpty="false">
                        <template #option="{ option }">
                            <i :class="[option === 'list' ? 'pi pi-bars' : 'pi pi-table']" />
                        </template>
                    </SelectButton>
                </div>
            </template>

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
                                        <div class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                            <span class="text-surface-900 font-medium text-sm">{{ item.rating }}</span>
                                            <i class="pi pi-star-fill text-yellow-500"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col md:items-end gap-8">
                                    <span class="text-xl font-semibold">\${{ item.price }}</span>
                                    <div class="flex flex-row-reverse md:flex-row gap-2">
                                        <Button icon="pi pi-heart" variant="outlined"></Button>
                                        <Button icon="pi pi-shopping-cart" label="Buy Now" :disabled="item.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto md:flex-initial whitespace-nowrap"></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template #grid="slotProps">
                <div class="grid grid-cols-12 gap-4">
                    <div v-for="(item, index) in slotProps.items" :key="index" class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-6 p-2">
                        <div class="p-6 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded flex flex-col">
                            <div class="bg-surface-50 flex justify-center rounded p-4">
                                <div class="relative mx-auto">
                                    <img class="rounded w-full" :src="\`https://primefaces.org/cdn/primevue/images/product/\${item.image}\`" :alt="item.name" style="max-width: 300px"/>
                                    <div class="absolute bg-black/70 rounded-border" style="left: 4px; top: 4px">
                                        <Tag :value="item.inventoryStatus" :severity="getSeverity(item)"></Tag>
                                    </div>
                                </div>
                            </div>
                            <div class="pt-6">
                                <div class="flex flex-row justify-between items-start gap-2">
                                    <div>
                                        <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{ item.category }}</span>
                                        <div class="text-lg font-medium mt-1">{{ item.name }}</div>
                                    </div>
                                    <div class="bg-surface-100 p-1" style="border-radius: 30px">
                                        <div class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                            <span class="text-surface-900 font-medium text-sm">{{ item.rating }}</span>
                                            <i class="pi pi-star-fill text-yellow-500"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-6 mt-6">
                                    <span class="text-2xl font-semibold">\${{ item.price }}</span>
                                    <div class="flex gap-2">
                                        <Button icon="pi pi-shopping-cart" label="Buy Now" :disabled="item.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto whitespace-nowrap"></Button>
                                        <Button icon="pi pi-heart" variant="outlined"></Button>
                                    </div>
                                </div>
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
    ProductService.getProducts().then((data) => (products.value = data.slice(0, 12)));
});

const products = ref();
const layout = ref('grid');
const options = ref(['list', 'grid']);

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
```

</details>

## Loading

While data is being loaded, Skeleton component may be used to indicate the busy state.

```vue
<DataView :value="products" :layout="layout">
    <template #header>
        <div class="flex justify-end">
            <SelectButton v-model="layout" :options="options" :allowEmpty="false">
                <template #option="{ option }">
                    <i :class="[option === 'list' ? 'pi pi-bars' : 'pi pi-table']" />
                </template>
            </SelectButton>
        </div>
    </template>

    <template #list>
        <div class="flex flex-col">
            <div v-for="i in 6" :key="i">
                <div class="flex flex-col xl:flex-row xl:items-start p-6 gap-6" :class="{ 'border-t border-surface-200 dark:border-surface-700': i !== 0 }">
                    <Skeleton class="!w-9/12 sm:!w-64 xl:!w-40 !h-24 mx-auto" />
                    <div class="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-6">
                        <div class="flex flex-col items-center sm:items-start gap-4">
                            <Skeleton width="8rem" height="2rem" />
                            <Skeleton width="6rem" height="1rem" />

                            <div class="flex items-center gap-4">
                                <Skeleton width="6rem" height="1rem" />
                                <Skeleton width="3rem" height="1rem" />
                            </div>
                        </div>
                        <div class="flex sm:flex-col items-center sm:items-end gap-4 sm:gap-2">
                            <Skeleton width="4rem" height="2rem" />
                            <Skeleton size="3rem" shape="circle" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>

    <template #grid>
        <div class="grid grid-cols-12 gap-4">
            <div v-for="i in 6" :key="i" class="col-span-12 sm:col-span-6 xl:col-span-4 p-2">
                <div class="p-6 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded">
                    <div class="flex flex-wrap items-center justify-between gap-2">
                        <Skeleton width="6rem" height="2rem" />
                        <Skeleton width="3rem" height="1rem" />
                    </div>
                    <div class="flex flex-col items-center gap-4 py-8">
                        <Skeleton width="75%" height="10rem" />
                        <Skeleton width="8rem" height="2rem" />
                        <Skeleton width="6rem" height="1rem" />
                    </div>
                    <div class="flex items-center justify-between">
                        <Skeleton width="4rem" height="2rem" />
                        <Skeleton width="6rem" height="1rem" shape="circle" size="3rem" />
                    </div>
                </div>
            </div>
        </div>
    </template>
</DataView>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <DataView :value="products" :layout="layout">
            <template #header>
                <div class="flex justify-end">
                    <SelectButton v-model="layout" :options="options" :allowEmpty="false">
                        <template #option="{ option }">
                            <i :class="[option === 'list' ? 'pi pi-bars' : 'pi pi-table']" />
                        </template>
                    </SelectButton>
                </div>
            </template>

            <template #list>
                <div class="flex flex-col">
                    <div v-for="i in 6" :key="i">
                        <div class="flex flex-col xl:flex-row xl:items-start p-6 gap-6" :class="{ 'border-t border-surface-200 dark:border-surface-700': i !== 0 }">
                            <Skeleton class="!w-9/12 sm:!w-64 xl:!w-40 !h-24 mx-auto" />
                            <div class="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-6">
                                <div class="flex flex-col items-center sm:items-start gap-4">
                                    <Skeleton width="8rem" height="2rem" />
                                    <Skeleton width="6rem" height="1rem" />

                                    <div class="flex items-center gap-4">
                                        <Skeleton width="6rem" height="1rem" />
                                        <Skeleton width="3rem" height="1rem" />
                                    </div>
                                </div>
                                <div class="flex sm:flex-col items-center sm:items-end gap-4 sm:gap-2">
                                    <Skeleton width="4rem" height="2rem" />
                                    <Skeleton size="3rem" shape="circle" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template #grid>
                <div class="grid grid-cols-12 gap-4">
                    <div v-for="i in 6" :key="i" class="col-span-12 sm:col-span-6 xl:col-span-4 p-2">
                        <div class="p-6 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded">
                            <div class="flex flex-wrap items-center justify-between gap-2">
                                <Skeleton width="6rem" height="2rem" />
                                <Skeleton width="3rem" height="1rem" />
                            </div>
                            <div class="flex flex-col items-center gap-4 py-8">
                                <Skeleton width="75%" height="10rem" />
                                <Skeleton width="8rem" height="2rem" />
                                <Skeleton width="6rem" height="1rem" />
                            </div>
                            <div class="flex items-center justify-between">
                                <Skeleton width="4rem" height="2rem" />
                                <Skeleton width="6rem" height="1rem" shape="circle" size="3rem" />
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
const options = ref(['list', 'grid']);

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
```

</details>

## Pagination

Pagination is enabled with the paginator and rows properties. Refer to the Paginator for more information about customizing the paginator.

```vue
<DataView :value="products" paginator :rows="5">
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
                                <div class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                    <span class="text-surface-900 font-medium text-sm">{{ item.rating }}</span>
                                    <i class="pi pi-star-fill text-yellow-500"></i>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col md:items-end gap-8">
                            <span class="text-xl font-semibold">\${{ item.price }}</span>
                            <div class="flex flex-row-reverse md:flex-row gap-2">
                                <Button icon="pi pi-heart" variant="outlined"></Button>
                                <Button icon="pi pi-shopping-cart" label="Buy Now" :disabled="item.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto md:flex-initial whitespace-nowrap"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>
</DataView>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <DataView :value="products" paginator :rows="5">
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
                                        <div class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                            <span class="text-surface-900 font-medium text-sm">{{ item.rating }}</span>
                                            <i class="pi pi-star-fill text-yellow-500"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col md:items-end gap-8">
                                    <span class="text-xl font-semibold">\${{ item.price }}</span>
                                    <div class="flex flex-row-reverse md:flex-row gap-2">
                                        <Button icon="pi pi-heart" variant="outlined"></Button>
                                        <Button icon="pi pi-shopping-cart" label="Buy Now" :disabled="item.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto md:flex-initial whitespace-nowrap"></Button>
                                    </div>
                                </div>
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
    ProductService.getProductsSmall().then((data) => (products.value = data));
});

const products = ref();
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
```

</details>

## Sorting

Built-in sorting is controlled by bindings sortField and sortField properties from a custom UI.

```vue
<DataView :value="products" :sortOrder="sortOrder" :sortField="sortField">
    <template #header>
        <Select v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By Price" @change="onSortChange($event)" />
    </template>
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
                                <div class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                    <span class="text-surface-900 font-medium text-sm">{{ item.rating }}</span>
                                    <i class="pi pi-star-fill text-yellow-500"></i>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col md:items-end gap-8">
                            <span class="text-xl font-semibold">\${{ item.price }}</span>
                            <div class="flex flex-row-reverse md:flex-row gap-2">
                                <Button icon="pi pi-heart" variant="outlined"></Button>
                                <Button icon="pi pi-shopping-cart" label="Buy Now" :disabled="item.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto md:flex-initial whitespace-nowrap"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>
</DataView>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <DataView :value="products" :sortOrder="sortOrder" :sortField="sortField">
            <template #header>
                <Select v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By Price" @change="onSortChange($event)" />
            </template>
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
                                        <div class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                            <span class="text-surface-900 font-medium text-sm">{{ item.rating }}</span>
                                            <i class="pi pi-star-fill text-yellow-500"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col md:items-end gap-8">
                                    <span class="text-xl font-semibold">\${{ item.price }}</span>
                                    <div class="flex flex-row-reverse md:flex-row gap-2">
                                        <Button icon="pi pi-heart" variant="outlined"></Button>
                                        <Button icon="pi pi-shopping-cart" label="Buy Now" :disabled="item.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto md:flex-initial whitespace-nowrap"></Button>
                                    </div>
                                </div>
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
            return 'warn';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};
<\/script>
```

</details>

## Data View

### Props

| Name                      | Type                                      | Default                                                                            | Description                                                                                                                                                                                                                                                      |
| ------------------------- | ----------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value                     | null \| T[]                               | -                                                                                  | An array of objects to display.                                                                                                                                                                                                                                  |
| layout                    | HintedString<"list" \| "grid">            | list                                                                               | Layout of the items, valid values are 'list' and 'grid'.                                                                                                                                                                                                         |
| rows                      | number                                    | 0                                                                                  | Number of rows to display per page.                                                                                                                                                                                                                              |
| first                     | number                                    | 0                                                                                  | Index of the first record to render.                                                                                                                                                                                                                             |
| totalRecords              | number                                    | -                                                                                  | Number of total records, defaults to length of value when not defined.                                                                                                                                                                                           |
| paginator                 | boolean                                   | false                                                                              | When specified as true, enables the pagination.                                                                                                                                                                                                                  |
| paginatorPosition         | HintedString<"top" \| "bottom" \| "both"> | bottom                                                                             | Position of the paginator, options are 'top','bottom' or 'both'.                                                                                                                                                                                                 |
| alwaysShowPaginator       | boolean                                   | true                                                                               | Whether to show it even there is only one page.                                                                                                                                                                                                                  |
| paginatorTemplate         | string                                    | FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown | Template of the paginator. It can be customized using the template property using the predefined keys, - FirstPageLink - PrevPageLink - PageLinks - NextPageLink - LastPageLink - RowsPerPageDropdown - JumpToPageDropdown - JumpToPageInput - CurrentPageReport |
| pageLinkSize              | number                                    | 5                                                                                  | Number of page links to display.                                                                                                                                                                                                                                 |
| rowsPerPageOptions        | number[]                                  | -                                                                                  | Array of integer values to display inside rows per page dropdown.                                                                                                                                                                                                |
| currentPageReportTemplate | string                                    | '({currentPage} of {totalPages})'                                                  | Template of the current page report element. It displays information about the pagination state. - {currentPage} - {totalPages} - {rows} - {first} - {last} - {totalRecords}                                                                                     |
| sortField                 | null \| string \| Function                | -                                                                                  | Property name or a getter function of data to use in sorting by default.                                                                                                                                                                                         |
| sortOrder                 | null \| number                            | -                                                                                  | Order to sort the data by default.                                                                                                                                                                                                                               |
| lazy                      | boolean                                   | false                                                                              | Defines if data is loaded and interacted with in lazy manner.                                                                                                                                                                                                    |
| dataKey                   | string                                    | -                                                                                  | Name of the data that uniquely identifies the a record in the data.                                                                                                                                                                                              |
| dt                        | any                                       | -                                                                                  | It generates scoped CSS variables using design tokens for the component.                                                                                                                                                                                         |
| pt                        | PassThrough<DataViewPassThroughOptions>   | -                                                                                  | Used to pass attributes to DOM elements inside the component.                                                                                                                                                                                                    |
| ptOptions                 | any                                       | -                                                                                  | Used to configure passthrough(pt) options of the component.                                                                                                                                                                                                      |
| unstyled                  | boolean                                   | false                                                                              | When enabled, it removes component related styles in the core.                                                                                                                                                                                                   |

## Pass Through Options

| Name         | Type                          | Description                                                 |
| ------------ | ----------------------------- | ----------------------------------------------------------- |
| root         | DataViewPassThroughOptionType | Used to pass attributes to the root's DOM element.          |
| header       | DataViewPassThroughOptionType | Used to pass attributes to the header's DOM element.        |
| pcPaginator  | any                           | Used to pass attributes to the Paginator component.         |
| content      | DataViewPassThroughOptionType | Used to pass attributes to the content's DOM element.       |
| emptyMessage | DataViewPassThroughOptionType | Used to pass attributes to the empty message's DOM element. |
| footer       | DataViewPassThroughOptionType | Used to pass attributes to the footer's DOM element.        |
| hooks        | any                           | Used to manage all lifecycle hooks.                         |

## Theming

### CSS Classes

| Class                           | Description                             |
| ------------------------------- | --------------------------------------- |
| p-dataview                      | Class name of the root element          |
| p-dataview-header               | Class name of the header element        |
| p-dataview-paginator-[position] | Class name of the paginator element     |
| p-dataview-content              | Class name of the content element       |
| p-dataview-empty-message        | Class name of the empty message element |
| p-dataview-footer               | Class name of the footer element        |

### Design Tokens

| Token                                  | CSS Variable                               | Description                      |
| -------------------------------------- | ------------------------------------------ | -------------------------------- |
| dataview.border.color                  | --p-dataview-border-color                  | Border color of root             |
| dataview.border.width                  | --p-dataview-border-width                  | Border width of root             |
| dataview.border.radius                 | --p-dataview-border-radius                 | Border radius of root            |
| dataview.padding                       | --p-dataview-padding                       | Padding of root                  |
| dataview.header.background             | --p-dataview-header-background             | Background of header             |
| dataview.header.color                  | --p-dataview-header-color                  | Color of header                  |
| dataview.header.border.color           | --p-dataview-header-border-color           | Border color of header           |
| dataview.header.border.width           | --p-dataview-header-border-width           | Border width of header           |
| dataview.header.padding                | --p-dataview-header-padding                | Padding of header                |
| dataview.header.border.radius          | --p-dataview-header-border-radius          | Border radius of header          |
| dataview.content.background            | --p-dataview-content-background            | Background of content            |
| dataview.content.color                 | --p-dataview-content-color                 | Color of content                 |
| dataview.content.border.color          | --p-dataview-content-border-color          | Border color of content          |
| dataview.content.border.width          | --p-dataview-content-border-width          | Border width of content          |
| dataview.content.padding               | --p-dataview-content-padding               | Padding of content               |
| dataview.content.border.radius         | --p-dataview-content-border-radius         | Border radius of content         |
| dataview.footer.background             | --p-dataview-footer-background             | Background of footer             |
| dataview.footer.color                  | --p-dataview-footer-color                  | Color of footer                  |
| dataview.footer.border.color           | --p-dataview-footer-border-color           | Border color of footer           |
| dataview.footer.border.width           | --p-dataview-footer-border-width           | Border width of footer           |
| dataview.footer.padding                | --p-dataview-footer-padding                | Padding of footer                |
| dataview.footer.border.radius          | --p-dataview-footer-border-radius          | Border radius of footer          |
| dataview.paginator.top.border.color    | --p-dataview-paginator-top-border-color    | Border color of paginator top    |
| dataview.paginator.top.border.width    | --p-dataview-paginator-top-border-width    | Border width of paginator top    |
| dataview.paginator.bottom.border.color | --p-dataview-paginator-bottom-border-color | Border color of paginator bottom |
| dataview.paginator.bottom.border.width | --p-dataview-paginator-bottom-border-width | Border width of paginator bottom |
