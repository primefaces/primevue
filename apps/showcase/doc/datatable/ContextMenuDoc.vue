<template>
    <DocSectionText v-bind="$attrs">
        <p>
            DataTable has exclusive integration with ContextMenu using the <i>contextMenu</i> event to open a menu on right click alont with <i>contextMenuSelection</i> property and <i>row-contextmenu</i> event to control the selection via the menu.
        </p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <ContextMenu ref="cm" :model="menuModel" @hide="selectedProduct = null" />
            <DataTable v-model:contextMenuSelection="selectedProduct" :value="products" contextMenu @row-contextmenu="onRowContextMenu" tableStyle="min-width: 50rem">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="price" header="Price">
                    <template #body="slotProps">
                        {{ formatCurrency(slotProps.data.price) }}
                    </template>
                </Column>
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
            selectedProduct: null,
            menuModel: [
                { label: 'View', icon: 'pi pi-fw pi-search', command: () => this.viewProduct(this.selectedProduct) },
                { label: 'Delete', icon: 'pi pi-fw pi-times', command: () => this.deleteProduct(this.selectedProduct) }
            ],
            code: {
                basic: `
<ContextMenu ref="cm" :model="menuModel" @hide="selectedProduct = null" />
<DataTable v-model:contextMenuSelection="selectedProduct" :value="products" contextMenu
        @row-contextmenu="onRowContextMenu" tableStyle="min-width: 50rem">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="price" header="Price">
        <template #body="slotProps">
            {{ formatCurrency(slotProps.data.price) }}
        </template>
    </Column>
</DataTable>
`,
                options: `
<template>
    <div class="card">
        <ContextMenu ref="cm" :model="menuModel" @hide="selectedProduct = null" />
        <DataTable :value="products" contextMenu v-model:contextMenuSelection="selectedProduct"
                @rowContextmenu="onRowContextMenu" tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="price" header="Price">
                <template #body="slotProps">
                    {{formatCurrency(slotProps.data.price)}}
            </template>
            </Column>
        </DataTable>
        <Toast />
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            selectedProduct: null,
            menuModel: [
                {label: 'View', icon: 'pi pi-fw pi-search', command: () => this.viewProduct(this.selectedProduct)},
                {label: 'Delete', icon: 'pi pi-fw pi-times', command: () => this.deleteProduct(this.selectedProduct)}
            ]
        }
    },
    mounted() {
        ProductService.getProductsMini().then((data) => (this.products = data));
    },
    methods: {
        onRowContextMenu(event) {
            this.$refs.cm.show(event.originalEvent);
        },
        viewProduct(product) {
            this.$toast.add({severity: 'info', summary: 'Product Selected', detail: product.name, life: 3000});
        },
        deleteProduct(product) {
            this.products = this.products.filter((p) => p.id !== product.id);
            this.$toast.add({severity: 'error', summary: 'Product Deleted', detail: product.name, life: 3000});
            this.selectedProduct = null;
        },
        formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        }
    }
}
<\/script>

`,
                composition: `
<template>
    <div class="card">
        <ContextMenu ref="cm" :model="menuModel" @hide="selectedProduct = null" />
        <DataTable :value="products" contextMenu v-model:contextMenuSelection="selectedProduct"
                @rowContextmenu="onRowContextMenu" tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="price" header="Price">
                <template #body="slotProps">
                    {{formatCurrency(slotProps.data.price)}}
                </template>
                </Column>
        </DataTable>
        <Toast />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const cm = ref();
const toast = useToast();
const products = ref();
const selectedProduct = ref();
const menuModel = ref([
    {label: 'View', icon: 'pi pi-fw pi-search', command: () => viewProduct(selectedProduct)},
    {label: 'Delete', icon: 'pi pi-fw pi-times', command: () => deleteProduct(selectedProduct)}
]);
const onRowContextMenu = (event) => {
    cm.value.show(event.originalEvent);
};
const viewProduct = (product) => {
    toast.add({severity: 'info', summary: 'Product Selected', detail: product.value.name, life: 3000});
};
const deleteProduct = (product) => {
    products.value = products.value.filter((p) => p.id !== product.value.id);
    toast.add({severity: 'error', summary: 'Product Deleted', detail: product.value.name, life: 3000});
    selectedProduct.value = null;
};
const formatCurrency = (value) => {
    return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
};

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
            }
        };
    },
    methods: {
        loadDemoData() {
            ProductService.getProductsMini().then((data) => (this.products = data));
        },
        onRowContextMenu(event) {
            this.$refs.cm.show(event.originalEvent);
        },
        viewProduct(product) {
            this.$toast.add({ severity: 'info', summary: 'Product Selected', detail: product.name, life: 3000 });
        },
        deleteProduct(product) {
            this.products = this.products.filter((p) => p.id !== product.id);
            this.$toast.add({ severity: 'error', summary: 'Product Deleted', detail: product.name, life: 3000 });
            this.selectedProduct = null;
        },
        formatCurrency(value) {
            return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        }
    }
};
</script>
