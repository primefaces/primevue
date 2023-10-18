<template>
    <DocSectionText v-bind="$attrs">
        <p>
            PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the
            <PrimeVueNuxtLink to="/tailwind">Tailwind Customization</PrimeVueNuxtLink> section for an example.
        </p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideCodeSandbox hideStackBlitz scrollable />
        <p class="mt-4">A playground sample with the pre-built Tailwind theme.</p>
        <DocSectionCode :code="code2" embedded :service="['ProductService']" />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
export default {
    carousel: {
        root: 'flex flex-col',
        content: 'flex flex-col overflow-auto',
        container: ({ props }) => ({
            class: [
                'flex',
                {
                    'flex-row': props.orientation !== 'vertical',
                    'flex-col': props.orientation == 'vertical'
                }
            ]
        }),
        previousbutton: {
            class: ['flex justify-center items-center self-center overflow-hidden relative shrink-0 grow-0', 'w-8 h-8 text-gray-600 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mx-2']
        },
        itemscontent: 'overflow-hidden w-full',
        itemscontainer: ({ props }) => ({
            class: [
                'flex ',
                {
                    'flex-row': props.orientation !== 'vertical',
                    'flex-col h-full': props.orientation == 'vertical'
                }
            ]
        }),
        item: ({ props }) => ({
            class: [
                'flex shrink-0 grow',
                {
                    'w-1/3': props.orientation !== 'vertical',
                    'w-full': props.orientation == 'vertical'
                }
            ]
        }),
        indicators: {
            class: ['flex flex-row justify-center flex-wrap']
        },
        indicator: 'mr-2 mb-2',
        indicatorbutton: ({ context }) => ({
            class: [
                'w-8 h-2 transition duration-200 rounded-0',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {
                    'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600': !context.highlighted,
                    'bg-blue-500 hover:bg-blue-600': context.highlighted
                }
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
        <Carousel :value="products" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
            <template #item="slotProps">
                <div class="border bg-white dark:bg-gray-900 border-gray-300 dark:border-blue-900/40 rounded-lg m-2 text-center py-5 px-3">
                    <div class="mb-3 flex justify-center">
                        <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-1/2 shadow-sm" />
                    </div>
                    <div>
                        <h4 class="mb-1 text-gray-700 font-medium dark:text-white/80">{{ slotProps.data.name }}</h4>
                        <h6 class="mt-0 mb-3 font-medium text-gray-700 dark:text-white/80">\${{ slotProps.data.price }}</h6>
                        <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" />
                        <div class="mt-5 flex flex-wrap gap-2 justify-center align-center">
                            <Button icon="pi pi-search" rounded class="mr-2 text-gray-700 dark:text-white/80 inline-flex" />
                            <Button icon="pi pi-star-fill" rounded severity="success" class="mr-2 text-gray-700 dark:text-white/80 inline-flex" />
                        </div>
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
const responsiveOptions = ref([
    {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
]);

const getSeverity = (status) => {
    switch (status) {
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

<\/script>
`
            }
        };
    }
};
</script>
