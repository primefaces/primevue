<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>Row Expansion</span></h1>
				<p>A row can be expanded to display additional content.</p>
			</div>
            <AppDemoActions />
		</div>

		<div class="content-section implementation">
            <div class="card">
                <DataTable :value="products" v-model:expandedRows="expandedRows" dataKey="id"
                    @row-expand="onRowExpand" @row-collapse="onRowCollapse" responsiveLayout="scroll">
                    <template #header>
                        <div class="table-header-container">
                            <Button icon="pi pi-plus" label="Expand All" @click="expandAll" class="mr-2" />
                            <Button icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
                        </div>
                    </template>
                     <Column :expander="true" headerStyle="width: 3rem" />
                    <Column field="name" header="Name" sortable></Column>
                    <Column header="Image">
                         <template #body="slotProps">
                            <img :src="'demo/images/product/' + slotProps.data.image" :alt="slotProps.data.image" class="product-image" />
                        </template>
                    </Column>
                    <Column field="price" header="Price" sortable>
                        <template #body="slotProps">
                            {{formatCurrency(slotProps.data.price)}}
                        </template>
                    </Column>
                    <Column field="category" header="Category" sortable></Column>
                    <Column field="rating" header="Reviews" sortable>
                        <template #body="slotProps">
                           <Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false" />
                        </template>
                    </Column>
                    <Column field="inventoryStatus" header="Status" sortable>
                        <template #body="slotProps">
                            <span :class="'product-badge status-' + slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>
                        </template>
                    </Column>
                    <template #expansion="slotProps">
                        <div class="orders-subtable">
                            <h5>Orders for {{slotProps.data.name}}</h5>
                            <DataTable :value="slotProps.data.orders" responsiveLayout="scroll">
                                <Column field="id" header="Id" sortable></Column>
                                <Column field="customer" header="Customer" sortable></Column>
                                <Column field="date" header="Date" sortable></Column>
                                <Column field="amount" header="Amount" sortable>
                                    <template #body="slotProps" sortable>
                                        {{formatCurrency(slotProps.data.amount)}}
                                    </template>
                                </Column>
                                <Column field="status" header="Status" sortable>
                                    <template #body="slotProps">
                                        <span :class="'order-badge order-' + slotProps.data.status.toLowerCase()">{{slotProps.data.status}}</span>
                                    </template>
                                </Column>
                                <Column headerStyle="width:4rem">
                                    <template #body>
                                        <Button icon="pi pi-search" />
                                    </template>
                                </Column>
                            </DataTable>
                        </div>
                    </template>
                </DataTable>
            </div>
		</div>

        <AppDoc name="DataTableRowExpandDemo" :sources="sources" :service="['ProductService']" :data="['products-orders-small']" github="datatable/DataTableRowExpandDemo.vue" />
            
	</div>
</template>

<script>
import ProductService from '../../service/ProductService';

export default {
    data() {
        return {
            products: null,
            expandedRows: [],
            sources: {
                'options-api': {
                    tabName: 'Options API Source',
                    content: `
<template>
	<div>
        <Toast />

        <DataTable :value="products" v-model:expandedRows="expandedRows" dataKey="id"
            @rowExpand="onRowExpand" @rowCollapse="onRowCollapse" responsiveLayout="scroll">
            <template #header>
                <div class="table-header-container">
                    <Button icon="pi pi-plus" label="Expand All" @click="expandAll" class="mr-2" />
                    <Button icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
                </div>
            </template>
             <Column :expander="true" headerStyle="width: 3rem" />
            <Column field="name" header="Name" sortable></Column>
            <Column header="Image">
                 <template #body="slotProps">
                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.image" class="product-image" />
                </template>
            </Column>
            <Column field="price" header="Price" sortable>
                <template #body="slotProps">
                    {{formatCurrency(slotProps.data.price)}}
                </template>
            </Column>
            <Column field="category" header="Category" sortable></Column>
            <Column field="rating" header="Reviews" sortable>
                <template #body="slotProps">
                   <Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false" />
                </template>
            </Column>
            <Column field="inventoryStatus" header="Status" sortable>
                <template #body="slotProps">
                    <span :class="'product-badge status-' + slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>
                </template>
            </Column>
            <template #expansion="slotProps">
                <div class="orders-subtable">
                    <h5>Orders for {{slotProps.data.name}}</h5>
                    <DataTable :value="slotProps.data.orders" responsiveLayout="scroll">
                        <Column field="id" header="Id" sortable></Column>
                        <Column field="customer" header="Customer" sortable></Column>
                        <Column field="date" header="Date" sortable></Column>
                        <Column field="amount" header="Amount" sortable>
                            <template #body="slotProps" sortable>
                                {{formatCurrency(slotProps.data.amount)}}
                            </template>
                        </Column>
                        <Column field="status" header="Status" sortable>
                            <template #body="slotProps">
                                <span :class="'order-badge order-' + slotProps.data.status.toLowerCase()">{{slotProps.data.status}}</span>
                            </template>
                        </Column>
                        <Column headerStyle="width:4rem">
                            <template #body>
                                <Button icon="pi pi-search" />
                            </template>
                        </Column>
                    </DataTable>
                </div>
            </template>
        </DataTable>
	</div>
</template>

<script>
import ProductService from './service/ProductService';

export default {
    data() {
        return {
            products: null,
            expandedRows: [] 
        }
    },
    productService: null,
    created() {
        this.productService = new ProductService();
    },
    mounted() {
        this.productService.getProductsWithOrdersSmall().then(data => this.products = data);
    },
    methods: {
        onRowExpand(event) {
            this.$toast.add({severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000});
        },
        onRowCollapse(event) {
            this.$toast.add({severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000});
        },
        expandAll() {
            this.expandedRows = this.products.filter(p => p.id);
            this.$toast.add({severity: 'success', summary: 'All Rows Expanded', life: 3000});
        },
        collapseAll() {
            this.expandedRows = null;
            this.$toast.add({severity: 'success', summary: 'All Rows Collapsed', life: 3000});
        },
        formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        }
    }
}
<\\/script>

<style lang="scss" scoped>
.product-image {
    width: 50px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
}

.orders-subtable {
    padding: 1rem;
}
</style>                    
`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
	<div>
        <Toast />
        
        <DataTable :value="products" v-model:expandedRows="expandedRows" dataKey="id"
            @rowExpand="onRowExpand" @rowCollapse="onRowCollapse" responsiveLayout="scroll">
            <template #header>
                <div class="table-header-container">
                    <Button icon="pi pi-plus" label="Expand All" @click="expandAll" class="mr-2" />
                    <Button icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
                </div>
            </template>
             <Column :expander="true" headerStyle="width: 3rem" />
            <Column field="name" header="Name" sortable></Column>
            <Column header="Image">
                 <template #body="slotProps">
                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.image" class="product-image" />
                </template>
            </Column>
            <Column field="price" header="Price" sortable>
                <template #body="slotProps">
                    {{formatCurrency(slotProps.data.price)}}
                </template>
            </Column>
            <Column field="category" header="Category" sortable></Column>
            <Column field="rating" header="Reviews" sortable>
                <template #body="slotProps">
                   <Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false" />
                </template>
            </Column>
            <Column field="inventoryStatus" header="Status" sortable>
                <template #body="slotProps">
                    <span :class="'product-badge status-' + slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>
                </template>
            </Column>
            <template #expansion="slotProps">
                <div class="orders-subtable">
                    <h5>Orders for {{slotProps.data.name}}</h5>
                    <DataTable :value="slotProps.data.orders" responsiveLayout="scroll">
                        <Column field="id" header="Id" sortable></Column>
                        <Column field="customer" header="Customer" sortable></Column>
                        <Column field="date" header="Date" sortable></Column>
                        <Column field="amount" header="Amount" sortable>
                            <template #body="slotProps" sortable>
                                {{formatCurrency(slotProps.data.amount)}}
                            </template>
                        </Column>
                        <Column field="status" header="Status" sortable>
                            <template #body="slotProps">
                                <span :class="'order-badge order-' + slotProps.data.status.toLowerCase()">{{slotProps.data.status}}</span>
                            </template>
                        </Column>
                        <Column headerStyle="width:4rem">
                            <template #body>
                                <Button icon="pi pi-search" />
                            </template>
                        </Column>
                    </DataTable>
                </div>
            </template>
        </DataTable>
	</div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import ProductService from './service/ProductService';

export default {
    setup() {
        onMounted(() => {
            productService.value.getProductsWithOrdersSmall().then(data => products.value = data);
        })

        const toast = useToast();
        const products = ref();
        const productService = ref(new ProductService());
        const expandedRows = ref([]);

        const onRowExpand = (event) => {
            toast.add({severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000});
        };
        const onRowCollapse = (event) => {
            toast.add({severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000});
        };
        const expandAll = () => {
            expandedRows.value = products.value.filter(p => p.id);
            toast.add({severity: 'success', summary: 'All Rows Expanded', life: 3000});
        };
        const collapseAll = () => {
            expandedRows.value = null;
            toast.add({severity: 'success', summary: 'All Rows Collapsed', life: 3000});
        };
        const formatCurrency = (value) => {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        };

        return { products, expandedRows, onRowExpand, onRowCollapse, expandAll, collapseAll, formatCurrency }
    }
}
<\\/script>

<style lang="scss" scoped>
.product-image {
    width: 50px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
}

.orders-subtable {
    padding: 1rem;
}
</style>                    
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/datatable/datatable.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/rating/rating.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/toast/toast.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/toastservice/toastservice.min.js"><\\/script>
        <script src="./ProductService.js"><\\/script>`,
                    content: `<div id="app">
            <p-toast></p-toast>
            
            <p-datatable :value="products" v-model:expanded-rows="expandedRows" dataKey="id"
                @row-expand="onRowExpand" @row-collapse="onRowCollapse" responsive-layout="scroll">
                <template #header>
                    <div class="table-header-container">
                        <p-button icon="pi pi-plus" label="Expand All" @click="expandAll" class="mr-2"></p-button>
                        <p-button icon="pi pi-minus" label="Collapse All" @click="collapseAll"></p-button>
                    </div>
                </template>
                <p-column :expander="true" headerStyle="width: 3rem"></p-column>
                <p-column field="name" header="Name" sortable></p-column>
                <p-column header="Image">
                    <template #body="slotProps">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.image" class="product-image" />
                    </template>
                </p-column>
                <p-column field="price" header="Price" sortable>
                    <template #body="slotProps">
                        {{formatCurrency(slotProps.data.price)}}
                    </template>
                </p-column>
                <p-column field="category" header="Category" sortable></p-column>
                <p-column field="rating" header="Reviews" sortable>
                    <template #body="slotProps">
                    <p-rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false"></p-rating>
                    </template>
                </p-column>
                <p-column field="inventoryStatus" header="Status" sortable>
                    <template #body="slotProps">
                        <span :class="'product-badge status-' + slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>
                    </template>
                </p-column>
                <template #expansion="slotProps">
                    <div class="orders-subtable">
                        <h5>Orders for {{slotProps.data.name}}</h5>
                        <p-datatable :value="slotProps.data.orders" responsive-layout="scroll">
                            <p-column field="id" header="Id" sortable></p-column>
                            <p-column field="customer" header="Customer" sortable></p-column>
                            <p-column field="date" header="Date" sortable></p-column>
                            <p-column field="amount" header="Amount" sortable>
                                <template #body="slotProps" sortable>
                                    {{formatCurrency(slotProps.data.amount)}}
                                </template>
                            </p-column>
                            <p-column field="status" header="Status" sortable>
                                <template #body="slotProps">
                                    <span :class="'order-badge order-' + slotProps.data.status.toLowerCase()">{{slotProps.data.status}}</span>
                                </template>
                            </p-column>
                            <p-column header-style="width:4rem">
                                <template #body>
                                    <p-button icon="pi pi-search"></p-button>
                                </template>
                            </p-column>
                        </p-datatable>
                    </div>
                </template>
            </p-datatable>
        </div>

        <script type="module">
        const { createApp, ref, onMounted } = Vue;
        const { useToast } = primevue.usetoast;

        const App = {
            setup() {
                onMounted(() => {
                    productService.value.getProductsWithOrdersSmall().then(data => products.value = data);
                })

                const toast = useToast();
                const products = ref();
                const productService = ref(new ProductService());
                const expandedRows = ref([]);

                const onRowExpand = (event) => {
                    toast.add({severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000});
                };
                const onRowCollapse = (event) => {
                    toast.add({severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000});
                };
                const expandAll = () => {
                    expandedRows.value = products.value.filter(p => p.id);
                    toast.add({severity: 'success', summary: 'All Rows Expanded', life: 3000});
                };
                const collapseAll = () => {
                    expandedRows.value = null;
                    toast.add({severity: 'success', summary: 'All Rows Collapsed', life: 3000});
                };
                const formatCurrency = (value) => {
                    return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
                };

                return { products, expandedRows, onRowExpand, onRowCollapse, expandAll, collapseAll, formatCurrency }
            },
            components: {
                "p-datatable": primevue.datatable,
                "p-column": primevue.column,
                "p-button": primevue.button,
                "p-toast": primevue.toast,
                "p-rating": primevue.rating
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .use(primevue.toastservice)
            .mount("#app");
        <\\/script>

        <style>
        .product-image {
            width: 50px;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
        }

        .orders-subtable {
            padding: 1rem;
        }
        </style>                    
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
        this.productService.getProductsWithOrdersSmall().then(data => this.products = data);
    },
    methods: {
        onRowExpand(event) {
            this.$toast.add({severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000});
        },
        onRowCollapse(event) {
            this.$toast.add({severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000});
        },
        expandAll() {
            this.expandedRows = this.products.filter(p => p.id);
            this.$toast.add({severity: 'success', summary: 'All Rows Expanded', life: 3000});
        },
        collapseAll() {
            this.expandedRows = null;
            this.$toast.add({severity: 'success', summary: 'All Rows Collapsed', life: 3000});
        },
        formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        }
    },
}
</script>

<style lang="scss" scoped>
.product-image {
    width: 100px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
}

.orders-subtable {
    padding: 1rem;
}
</style>