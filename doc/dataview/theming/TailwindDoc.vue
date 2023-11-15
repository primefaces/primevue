<template>
    <DocSectionText v-bind="$attrs">
        <p>
            PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the
            <PrimeVueNuxtLink to="/tailwind">Tailwind Customization</PrimeVueNuxtLink> section for an example.
        </p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideCodeSandbox hideStackBlitz scrollable />
        <p class="mt-4">A playground sample with the pre-built Tailwind theme.</p>
        <DocSectionCode :code="code2" :service="['ProductService']" embedded />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
export default {
    dataview: {
        content: {
            class: [
                'bg-white blue-gray-700 border-0 p-0',
                'dark:bg-gray-900 dark:text-white/80' // Dark Mode
            ]
        },
        grid: 'flex flex-wrap ml-0 mr-0 mt-0 bg-white dark:bg-gray-900',
        header: 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white/80 border-gray-200 dark:border-blue-900/40 border-t border-b p-4 font-bold'
    },
    dataviewlayoutoptions: {
        listbutton: ({ props }) => ({
            class: [
                'items-center cursor-pointer inline-flex overflow-hidden relative select-none text-center align-bottom justify-center border',
                'transition duration-200',
                'w-12 pt-3 pb-3 rounded-lg rounded-r-none',
                props.modelValue === 'list' ? 'bg-blue-500 border-blue-500 text-white dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900' : 'bg-white border-gray-300 text-blue-gray-700 dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' // highlighted state
            ]
        }),
        gridbutton: ({ props }) => ({
            class: [
                'items-center cursor-pointer inline-flex overflow-hidden relative select-none text-center align-bottom justify-center border',
                'transition duration-200',
                'w-12 pt-3 pb-3 rounded-lg rounded-l-none',
                props.modelValue === 'grid' ? 'bg-blue-500 border-blue-500 text-white dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900' : 'bg-white border-gray-300 text-blue-gray-700 dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' // highlighted state
            ]
        })
    }
}
`
            },
            code2: {
                composition: `
<template>
    <div class="card">
        <DataView :value="products" :layout="layout">
            <template #header>
                <div class="flex justify-end bg-gray-100 dark:bg-gray-800">
                    <DataViewLayoutOptions v-model="layout" />
                </div>
            </template>

            <template #list="slotProps">
                <div class="flex-initial shrink-0 w-full">
                    <div class="flex flex-col xl:flex-row xl:items-start p-4 gap-4 bg-white dark:bg-gray-900">
                        <img class="w-3/4 sm:w-64 xl:w-40 shadow-md block xl:block mx-auto rounded-md " :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.items.image}\`" :alt="slotProps.items.name" />
                        <div class="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-4">
                            <div class="flex flex-col items-center sm:items-start gap-3">
                                <div class="text-2xl font-bold text-gray-700 dark:text-white/80">
                                    {{ slotProps.items.name }}
                                </div>
                                <Rating :modelValue="slotProps.items.rating" readonly :cancel="false"></Rating>
                                <div class="flex items-center gap-3">
                                    <span class="flex items-center gap-2">
                                        <i class="pi pi-tag text-gray-700 dark:text-white/80"></i>
                                        <span class="font-semibold text-gray-700 dark:text-white/80">{{ slotProps.items.category }}</span>
                                    </span>
                                    <Tag :value="slotProps.items.inventoryStatus" :severity="getSeverity(slotProps.items)"></Tag>
                                </div>
                            </div>
                            <div class="flex sm:flex-col items-center sm:align-end gap-3 sm:gap-2">
                                <span class="text-2xl font-semibold text-gray-700 dark:text-white/80">\${{ slotProps.items.price }}</span>
                                <Button icon="pi pi-shopping-cart" rounded :disabled="slotProps.items.inventoryStatus === 'OUTOFSTOCK'"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template #grid="slotProps">
                <div class="flex-initial shrink-0 w-full sm:w-1/2 lg:w-full xl:w-1/3 p-2">
                    <div class="p-4 border rounded-md bg-white dark:bg-gray-900 border-gray-300 dark:border-blue-900/40">
                        <div class="flex flex-wrap items-center justify-between gap-2">
                            <div class="flex items-center gap-2">
                                <i class="pi pi-tag text-gray-700 dark:text-white/80"></i>
                                <span class="font-semibold text-gray-700 dark:text-white/80">{{ slotProps.items.category }}</span>
                            </div>
                            <Tag :value="slotProps.items.inventoryStatus" :severity="getSeverity(slotProps.items)"></Tag>
                        </div>
                        <div class="flex flex-col items-center gap-3 py-5">
                            <img class="w-3/4 shadow-md rounded-md" :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.items.image}\`" :alt="slotProps.items.name" />
                            <div class="text-2xl font-bold text-gray-700 dark:text-white/80">{{ slotProps.items.name }}</div>
                            <Rating :modelValue="slotProps.items.rating" readonly :cancel="false"></Rating>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-2xl font-semibold text-gray-700 dark:text-white/80">\${{ slotProps.items.price }}</span>
                            <Button icon="pi pi-shopping-cart" rounded :disabled="slotProps.items.inventoryStatus === 'OUTOFSTOCK'"></Button>
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
`
            }
        };
    }
};
</script>
