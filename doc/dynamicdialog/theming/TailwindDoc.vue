<template>
    <DocSectionText v-bind="$attrs">
        <p>
            PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the
            <PrimeVueNuxtLink to="/tailwind">Tailwind Customization</PrimeVueNuxtLink> section for an example.
        </p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideCodeSandbox hideStackBlitz scrollable />
        <p class="mt-4">A playground sample with the pre-built Tailwind theme.</p>
        <DocSectionCode :code="code2" embedded />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
export default {
    dialog: {
        root: ({ state }) => ({
            class: [
                'rounded-lg shadow-lg border-0',
                'max-h-90 transform scale-100',
                'm-0 w-[50vw]',
                'dark:border dark:border-blue-900/40',
                {
                    'transition-none transform-none !w-screen !h-screen !max-h-full !top-0 !left-0': state.maximized
                }
            ]
        }),
        header: {
            class: ['flex items-center justify-between shrink-0', 'bg-white text-gray-800 border-t-0  rounded-tl-lg rounded-tr-lg p-6', 'dark:bg-gray-900  dark:text-white/80']
        },
        headerTitle: 'font-bold text-lg',
        headerIcons: 'flex items-center',
        closeButton: {
            class: [
                'flex items-center justify-center overflow-hidden relative',
                'w-8 h-8 text-gray-500 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mr-2 last:mr-0',
                'hover:text-gray-700 hover:border-transparent hover:bg-gray-200',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // focus
                'dark:hover:text-white/80 dark:hover:border-transparent dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            ]
        },
        closeButtonIcon: 'w-4 h-4 inline-block',
        content: ({ state }) => ({
            class: [
                'overflow-y-auto',
                'bg-white text-gray-700 px-6 pb-8 pt-0',
                'rounded-bl-lg rounded-br-lg',
                'dark:bg-gray-900  dark:text-white/80 ',
                {
                    grow: state.maximized
                }
            ]
        }),
        footer: {
            class: ['shrink-0 ', 'border-t-0 bg-white text-gray-700 px-6 pb-6 text-right rounded-b-lg', 'dark:bg-gray-900  dark:text-white/80']
        },
        mask: ({ props }) => ({
            class: ['transition duration-200', { 'bg-black/40': props.modal }]
        }),
        transition: ({ props }) => {
            return props.position === 'top'
                ? {
                      enterFromClass: 'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0',
                      enterActiveClass: 'transition-all duration-200 ease-out',
                      leaveActiveClass: 'transition-all duration-200 ease-out',
                      leaveToClass: 'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0'
                  }
                : props.position === 'bottom'
                ? {
                      enterFromClass: 'opacity-0 scale-75 translate-y-full',
                      enterActiveClass: 'transition-all duration-200 ease-out',
                      leaveActiveClass: 'transition-all duration-200 ease-out',
                      leaveToClass: 'opacity-0 scale-75 translate-x-0 translate-y-full translate-z-0'
                  }
                : props.position === 'left' || props.position === 'topleft' || props.position === 'bottomleft'
                ? {
                      enterFromClass: 'opacity-0 scale-75 -translate-x-full translate-y-0 translate-z-0',
                      enterActiveClass: 'transition-all duration-200 ease-out',
                      leaveActiveClass: 'transition-all duration-200 ease-out',
                      leaveToClass: 'opacity-0 scale-75  -translate-x-full translate-y-0 translate-z-0'
                  }
                : props.position === 'right' || props.position === 'topright' || props.position === 'bottomright'
                ? {
                      enterFromClass: 'opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0',
                      enterActiveClass: 'transition-all duration-200 ease-out',
                      leaveActiveClass: 'transition-all duration-200 ease-out',
                      leaveToClass: 'opacity-0 scale-75 opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0'
                  }
                : {
                      enterFromClass: 'opacity-0 scale-75',
                      enterActiveClass: 'transition-all duration-200 ease-out',
                      leaveActiveClass: 'transition-all duration-200 ease-out',
                      leaveToClass: 'opacity-0 scale-75'
                  };
        }
    }
}
`
            },
            code2: {
                composition: `
<template>
    <div class="card flex justify-center">
        <Button label="Select a Product" icon="pi pi-search" @click="showProducts" />
        <Toast />
        <DynamicDialog />
    </div>
</template>

<script setup>
import { markRaw, defineAsyncComponent } from 'vue';
import { useDialog } from 'primevue/usedialog';
import { useToast } from 'primevue/usetoast';
import Button from 'primevue/button';
const ProductListDemo = defineAsyncComponent(() => import('./components/ProductListDemo.vue'));
const FooterDemo = defineAsyncComponent(() => import('./components/FooterDemo.vue'));

const dialog = useDialog();
const toast = useToast();

const showProducts = () => {
    const dialogRef = dialog.open(ProductListDemo, {
        props: {
            header: 'Product List',
            style: {
                width: '50vw',
            },
            breakpoints:{
                '960px': '75vw',
                '640px': '90vw'
            },
            modal: true
        },
        templates: {
            footer: markRaw(FooterDemo)
        },
        onClose: (options) => {
            const data = options.data;
            if (data) {
                const buttonType = data.buttonType;
                const summary_and_detail = buttonType ? { summary: 'No Product Selected', detail: \`Pressed '\${buttonType}' button\` } : { summary: 'Product Selected', detail: data.name };

                toast.add({ severity:'info', ...summary_and_detail, life: 3000 });
            }
        }
    });
}
<\/script>
`
            },
            extFiles: {
                options: {
                    'src/components/ProductListDemo.vue': {
                        content: `
<template>
	<div>
        <div class="flex justify-content-end mt-1 mb-3">
            <Button icon="pi pi-external-link" label="Nested Dialog" outlined severity="success" @click="showInfo" />
        </div>
        <DataTable :value="products">
			<Column field="code" header="Code"></Column>
			<Column field="name" header="Name"></Column>
            <Column header="Image">
                <template #body="slotProps">
                    <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="shadow-2 w-4rem" />
                </template>
            </Column>
			<Column field="category" header="Category"></Column>
			<Column field="quantity" header="Quantity"></Column>
            <Column style="width:5rem">
                <template #body="slotProps">
                    <Button type="button" icon="pi pi-plus" text rounded @click="selectProduct(slotProps.data)"></Button>
                </template>
            </Column>
		</DataTable>

	</div>
</template>

<script>
import { ProductService } from '@/service/ProductService';
import InfoDemo from './InfoDemo.vue';

export default {
    inject: ['dialogRef'],
    data() {
        return {
            products: null
        }
    },
    mounted() {
        ProductService.getProductsSmall().then(data => this.products = data.slice(0,5));
    },
    methods: {
        selectProduct(data) {
            this.dialogRef.close(data);
        },
        showInfo() {
            this.$dialog.open(InfoDemo, {
                props: {
                    header: 'Information',
                    modal: true,
                    dismissableMask: true
                },
                data: {
                    totalProducts: this.products ? this.products.length : 0
                }
            });
        }
    }
}
<\/script>
`
                    },
                    'src/components/InfoDemo.vue': {
                        content: `
<template>
    <div>
        <p>There are <strong>{{totalProducts}}</strong> products in total in this list.</p>
        <div class="flex justify-content-end">
            <Button type="button" label="Close" @click="closeDialog"></Button>
        </div>
    </div>
</template>

<script>
export default {
    inject: ['dialogRef'],
    data() {
        return {
            totalProducts: 0
        }
    },
    mounted() {
        this.totalProducts = this.dialogRef.data.totalProducts;
    },
    methods: {
        closeDialog() {
            this.dialogRef.close();
        }
    }
}
<\/script>
                            `
                    },
                    'src/components/FooterDemo.vue': {
                        content: `
<template>
    <Button type="button" label="No" icon="pi pi-times" @click="closeDialog({ buttonType: 'No' })" text></Button>
    <Button type="button" label="Yes" icon="pi pi-check" @click="closeDialog({ buttonType: 'Yes' })" autofocus></Button>
</template>

<script>
export default {
    inject: ['dialogRef'],
    methods: {
        closeDialog(e) {
            this.dialogRef.close(e);
        }
    }
};
<\/script>
`
                    }
                },
                composition: {
                    'src/components/ProductListDemo.vue': {
                        content: `
<template>
	<div>
        <div class="flex justify-end mt-1 mb-3">
            <Button icon="pi pi-external-link" label="Nested Dialog" outlined severity="success" @click="showInfo" />
        </div>
        <DataTable :value="products">
			<Column field="code" header="Code"></Column>
			<Column field="name" header="Name"></Column>
            <Column header="Image">
                <template #body="slotProps">
                    <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="shadow-2 w-4rem" />
                </template>
            </Column>
			<Column field="category" header="Category"></Column>
			<Column field="quantity" header="Quantity"></Column>
            <Column style="width:5rem">
                <template #body="slotProps">
                    <Button type="button" icon="pi pi-plus" text rounded @click="selectProduct(slotProps.data)"></Button>
                </template>
            </Column>
		</DataTable>

	</div>
</template>

<script setup>
import { ref, onMounted, inject } from "vue";
import { useDialog } from "primevue/usedialog";
import { ProductService } from "@/service/ProductService";
import InfoDemo from "./InfoDemo.vue";

const dialogRef = inject("dialogRef");
const dialog = useDialog();
const products = ref(null);

onMounted(() => {
    ProductService
        .getProductsSmall()
        .then((data) => (products.value = data.slice(0, 5)));
});

const selectProduct = (data) => {
    dialogRef.value.close(data);
};

const showInfo = () => {
    dialog.open(InfoDemo, {
        props: {
            header: "Information",
            modal: true,
            dismissableMask: true,
        },
        data: {
            totalProducts: products.value ? products.value.length : 0,
        }
    });
};
<\/script>
`
                    },
                    'src/components/InfoDemo.vue': {
                        content: `
<template>
    <div>
        <p>There are <strong>{{totalProducts}}</strong> products in total in this list.</p>
        <div class="flex justify-end">
            <Button type="button" label="Close" @click="closeDialog"></Button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, inject } from "vue";

const totalProducts = ref(0);
const dialogRef = inject("dialogRef");

onMounted(() => {
    totalProducts.value = dialogRef.value.data.totalProducts;
});

const closeDialog = () => {
    dialogRef.value.close();
};
<\/script>
                            `
                    },
                    'src/components/FooterDemo.vue': {
                        content: `
<template>
    <Button type="button" label="No" icon="pi pi-times" @click="closeDialog({ buttonType: 'No' })" text></Button>
    <Button type="button" label="Yes" icon="pi pi-check" @click="closeDialog({ buttonType: 'Yes' })" autofocus></Button>
</template>

<script setup>
import { inject } from "vue";

const dialogRef = inject("dialogRef");

const closeDialog = (e) => {
    dialogRef.value.close(e);
};
<\/script>
`
                    }
                }
            }
        };
    }
};
</script>
