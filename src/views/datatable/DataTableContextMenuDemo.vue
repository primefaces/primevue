<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>ContextMenu</span></h1>
				<p>DataTable has exclusive integration with ContextMenu.</p>
			</div>
            <AppDemoActions />
		</div>

		<div class="content-section implementation">
            <div class="card">
                <DataTable :value="products" contextMenu v-model:contextMenuSelection="selectedProduct" @row-contextmenu="onRowContextMenu" responsiveLayout="scroll">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="price" header="Price">
                        <template #body="slotProps">
                            {{formatCurrency(slotProps.data.price)}}
                        </template>
                    </Column>
                </DataTable>
            </div>

            <ContextMenu :model="menuModel" ref="cm" />
		</div>

        <AppDoc name="DataTableContextMenuDemo" :sources="sources" :service="['ProductService']" :data="['products-small']" github="datatable/DataTableContextMenuDemo.vue" />
	</div>
</template>

<script>
import ProductService from '../../service/ProductService';

export default {
    data() {
        return {
            products: null,
            selectedProduct: null,
            menuModel: [
                {label: 'View', icon: 'pi pi-fw pi-search', command: () => this.viewProduct(this.selectedProduct)},
                {label: 'Delete', icon: 'pi pi-fw pi-times', command: () => this.deleteProduct(this.selectedProduct)}
            ],
            sources: {
                'options-api': {
                    tabName: 'Options API Source',
                    content: `
<template>
    <div>
        <Toast />
        <DataTable :value="products" contextMenu v-model:contextMenuSelection="selectedProduct" @rowContextmenu="onRowContextMenu" responsiveLayout="scroll">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="price" header="Price">
                <template #body="slotProps">
                    {{formatCurrency(slotProps.data.price)}}
                </template>
            </Column>
        </DataTable>

        <ContextMenu :model="menuModel" ref="cm" />
    </div>
</template>

<script>
import ProductService from './service/ProductService';

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
    productService: null,
    created() {
        this.productService = new ProductService();
    },
    mounted() {
        this.productService.getProductsSmall().then(data => this.products = data);
    },
    methods: {
        onRowContextMenu(event) {
            this.$refs.cm.show(event.originalEvent);
        },
        viewProduct(product) {
            this.$toast.add({severity: 'info', summary: 'Product Selected', detail: product.name});
        },
        deleteProduct(product) {
            this.products = this.products.filter((p) => p.id !== product.id);
            this.$toast.add({severity: 'error', summary: 'Product Deleted', detail: product.name});
            this.selectedProduct = null;
        },
        formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        }
    }
}
<\\/script>
`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <Toast />
        <DataTable :value="products" contextMenu v-model:contextMenuSelection="selectedProduct" @rowContextmenu="onRowContextMenu" responsiveLayout="scroll">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="price" header="Price">
                <template #body="slotProps">
                    {{formatCurrency(slotProps.data.price)}}
                </template>
            </Column>
        </DataTable>

        <ContextMenu :model="menuModel" ref="cm" />
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import ProductService from './service/ProductService';

export default {
    setup() {
        onMounted(() => {
            productService.value.getProductsSmall().then(data => products.value = data);
        })

        const cm = ref();
        const toast = useToast();
        const products = ref();
        const productService = ref(new ProductService());
        const selectedProduct = ref();
        const menuModel = ref([
            {label: 'View', icon: 'pi pi-fw pi-search', command: () => viewProduct(selectedProduct)},
            {label: 'Delete', icon: 'pi pi-fw pi-times', command: () => deleteProduct(selectedProduct)}
        ]);
        const onRowContextMenu = (event) => {
            cm.value.show(event.originalEvent);
        };
        const viewProduct = (product) => {
            toast.add({severity: 'info', summary: 'Product Selected', detail: product.name});
        };
        const deleteProduct = (product) => {
            products.value = products.value.filter((p) => p.id !== product.value.id);
            toast.add({severity: 'error', summary: 'Product Deleted', detail: product.name});
            selectedProduct.value = null;
        };
        const formatCurrency = (value) => {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        };

        return { cm, products, selectedProduct, menuModel, onRowContextMenu, viewProduct, deleteProduct, formatCurrency }
    }
}
<\\/script>
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/datatable/datatable.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/contextmenu/contextmenu.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/toast/toast.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/toastservice/toastservice.min.js"><\\/script>
        <script src="./ProductService.js"><\\/script>`,
                    content: `<div id="app">
            <p-toast></p-toast>

            <p-datatable :value="products" context-menu v-model:context-menu-selection="selectedProduct" @row-contextmenu="onRowContextMenu" responsive-layout="scroll">
                <p-column field="code" header="Code"></p-column>
                <p-column field="name" header="Name"></p-column>
                <p-column field="category" header="Category"></p-column>
                <p-column field="price" header="Price">
                    <template #body="slotProps">
                        {{formatCurrency(slotProps.data.price)}}
                    </template>
                </p-column>
            </p-datatable>

            <p-contextmenu :model="menuModel" ref="cm"></p-contextmenu>
        </div>

        <script type="module">
        const { createApp, ref, onMounted } = Vue;
        const { useToast } = primevue.usetoast;

        const App = {
            setup() {
                onMounted(() => {
                    productService.value.getProductsSmall().then(data => products.value = data);
                })

                const cm = ref();
                const toast = useToast();
                const products = ref();
                const productService = ref(new ProductService());
                const selectedProduct = ref();
                const menuModel = ref([
                    {label: 'View', icon: 'pi pi-fw pi-search', command: () => viewProduct(selectedProduct)},
                    {label: 'Delete', icon: 'pi pi-fw pi-times', command: () => deleteProduct(selectedProduct)}
                ]);
                const onRowContextMenu = (event) => {
                    cm.value.show(event.originalEvent);
                };
                const viewProduct = (product) => {
                    toast.add({severity: 'info', summary: 'Product Selected', detail: product.name});
                };
                const deleteProduct = (product) => {
                    products.value = products.value.filter((p) => p.id !== product.value.id);
                    toast.add({severity: 'error', summary: 'Product Deleted', detail: product.name});
                    selectedProduct.value = null;
                };
                const formatCurrency = (value) => {
                    return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
                };

                return { cm, products, selectedProduct, menuModel, onRowContextMenu, viewProduct, deleteProduct, formatCurrency }
            },
            components: {
                "p-datatable": primevue.datatable,
                "p-column": primevue.column,
                "p-contextmenu": primevue.contextmenu,
                "p-toast":primevue.toast
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .use(primevue.toastservice)
            .mount("#app");
        <\\/script>
`
                }
            }
        }
    },
    productService: null,
    created() {
        this.productService = new ProductService();
    },
    mounted() {
        this.productService.getProductsSmall().then(data => this.products = data);
    },
    methods: {
        onRowContextMenu(event) {
            this.$refs.cm.show(event.originalEvent);
        },
        viewProduct(product) {
            this.$toast.add({severity: 'info', summary: 'Product Selected', detail: product.name});
        },
        deleteProduct(product) {
            this.products = this.products.filter((p) => p.id !== product.id);
            this.$toast.add({severity: 'error', summary: 'Product Deleted', detail: product.name});
            this.selectedProduct = null;
        },
        formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        }
    }
}
</script>