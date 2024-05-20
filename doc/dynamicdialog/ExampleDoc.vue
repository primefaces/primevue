<template>
    <DocSectionText v-bind="$attrs">
        <p>A sample implementation to demonstrate loading components asynchronously, nested content and passing data.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Button label="Select a Product" icon="pi pi-search" @click="showProducts" />

        <DynamicDialog />
    </div>
    <DocSectionCode :code="code" :extFiles="extFiles" :service="['ProductService']" />
</template>

<script>
import { markRaw } from 'vue';
import FooterDemo from './demo/FooterDemo';
import ProductListDemo from './demo/ProductListDemo';

export default {
    data() {
        return {
            code: {
                basic: `
<Button label="Select a Product" icon="pi pi-search" @click="showProducts" />

<DynamicDialog />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Button label="Select a Product" icon="pi pi-search" @click="showProducts" />
        <Toast />
        <DynamicDialog />
    </div>
</template>

<script>
import Button from 'primevue/button';
import { markRaw, defineAsyncComponent } from 'vue';
const ProductListDemo = defineAsyncComponent(() => import('./components/ProductListDemo.vue'));
const FooterDemo = defineAsyncComponent(() => import('./components/FooterDemo.vue'));

export default {
    methods: {
        showProducts() {
            const dialogRef = this.$dialog.open(ProductListDemo, {
                props: {
                    header: 'Product List',
                    style: {
                        width: '50vw'
                    },
                    breakpoints: {
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

                        this.$toast.add({ severity: 'info', ...summary_and_detail, life: 3000 });
                    }
                }
            });
        }
    }
}
<\/script>
`,
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
...`
            },
            extFiles: {
                options: {
                    'src/components/ProductListDemo.vue': {
                        content: `
<template>
	<div>
        <div class="flex justify-end mt-1 mb-4">
            <Button icon="pi pi-external-link" label="Nested Dialog" outlined severity="success" @click="showInfo" />
        </div>
        <DataTable :value="products">
			<Column field="code" header="Code"></Column>
			<Column field="name" header="Name"></Column>
            <Column header="Image">
                <template #body="slotProps">
                    <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-16" />
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
        <div class="flex justify-end">
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
    <Button type="button" label="Cancel" icon="pi pi-times" @click="closeDialog({ buttonType: 'Cancel' })" autofocus></Button>
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
        <div class="flex justify-end mt-1 mb-4">
            <Button icon="pi pi-external-link" label="Nested Dialog" outlined severity="success" @click="showInfo" />
        </div>
        <DataTable :value="products">
			<Column field="code" header="Code"></Column>
			<Column field="name" header="Name"></Column>
            <Column header="Image">
                <template #body="slotProps">
                    <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-16" />
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
    <Button type="button" label="Cancel" icon="pi pi-times" @click="closeDialog({ buttonType: 'Cancel' })" autofocus></Button>
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
    },
    methods: {
        showProducts() {
            const dialogRef = this.$dialog.open(ProductListDemo, {
                props: {
                    header: 'Product List',
                    style: {
                        width: '50vw'
                    },
                    breakpoints: {
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
                        const summary_and_detail = buttonType ? { summary: 'No Product Selected', detail: `Pressed '${buttonType}' button` } : { summary: 'Product Selected', detail: data.name };

                        this.$toast.add({ severity: 'info', ...summary_and_detail, life: 3000 });
                    }
                }
            });
        }
    }
};
</script>
