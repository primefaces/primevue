<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Row expansion is controlled with <i>expandedRows</i> property. The column that has the expander element requires <i>expander</i> property to be enabled. Optional <i>rowExpand</i> and <i>rowCollapse</i>
            events are available as callbacks.
        </p>
        <p>
            Expanded rows can either be an array of row data or when <i>dataKey</i> is present, an object whose keys are strings referring to the identifier of the row data and values are booleans to represent the expansion state e.g.
            <i>&#123;'1004': true&#125;</i>. The <i>dataKey</i> alternative is more performant for large amounts of data.
        </p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <DataTable v-model:expandedRows="expandedRows" :value="products" dataKey="id" @rowExpand="onRowExpand" @rowCollapse="onRowCollapse" tableStyle="min-width: 60rem">
                <template #header>
                    <div class="flex flex-wrap justify-end gap-2">
                        <Button text icon="pi pi-plus" label="Expand All" @click="expandAll" />
                        <Button text icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
                    </div>
                </template>
                <Column expander style="width: 5rem" />
                <Column field="name" header="Name"></Column>
                <Column header="Image">
                    <template #body="slotProps">
                        <img :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`" :alt="slotProps.data.image" class="shadow-lg" width="64" />
                    </template>
                </Column>
                <Column field="price" header="Price">
                    <template #body="slotProps">
                        {{ formatCurrency(slotProps.data.price) }}
                    </template>
                </Column>
                <Column field="category" header="Category"></Column>
                <Column field="rating" header="Reviews">
                    <template #body="slotProps">
                        <Rating :modelValue="slotProps.data.rating" readonly :cancel="false" />
                    </template>
                </Column>
                <Column header="Status">
                    <template #body="slotProps">
                        <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)" />
                    </template>
                </Column>
                <template #expansion="slotProps">
                    <div class="p-4">
                        <h5>Orders for {{ slotProps.data.name }}</h5>
                        <DataTable :value="slotProps.data.orders">
                            <Column field="id" header="Id" sortable></Column>
                            <Column field="customer" header="Customer" sortable></Column>
                            <Column field="date" header="Date" sortable></Column>
                            <Column field="amount" header="Amount" sortable>
                                <template #body="slotProps">
                                    {{ formatCurrency(slotProps.data.amount) }}
                                </template>
                            </Column>
                            <Column field="status" header="Status" sortable>
                                <template #body="slotProps">
                                    <Tag :value="slotProps.data.status.toLowerCase()" :severity="getOrderSeverity(slotProps.data)" />
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
    </DeferredDemo>
    <DocSectionCode :code="code" :service="['ProductService']" />
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            expandedRows: {},
            code: {
                basic: `
<DataTable v-model:expandedRows="expandedRows" :value="products" dataKey="id"
        @rowExpand="onRowExpand" @rowCollapse="onRowCollapse" tableStyle="min-width: 60rem">
    <template #header>
        <div class="flex flex-wrap justify-end gap-2">
            <Button text icon="pi pi-plus" label="Expand All" @click="expandAll" />
            <Button text icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
        </div>
    </template>
    <Column expander style="width: 5rem" />
    <Column field="name" header="Name"></Column>
    <Column header="Image">
        <template #body="slotProps">
            <img :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.image" class="shadow-lg" width="64" />
        </template>
    </Column>
    <Column field="price" header="Price">
        <template #body="slotProps">
            {{ formatCurrency(slotProps.data.price) }}
        </template>
    </Column>
    <Column field="category" header="Category"></Column>
    <Column field="rating" header="Reviews">
        <template #body="slotProps">
            <Rating :modelValue="slotProps.data.rating" readonly :cancel="false" />
        </template>
    </Column>
    <Column header="Status">
        <template #body="slotProps">
            <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)" />
        </template>
    </Column>
    <template #expansion="slotProps">
        <div class="p-4">
            <h5>Orders for {{ slotProps.data.name }}</h5>
            <DataTable :value="slotProps.data.orders">
                <Column field="id" header="Id" sortable></Column>
                <Column field="customer" header="Customer" sortable></Column>
                <Column field="date" header="Date" sortable></Column>
                <Column field="amount" header="Amount" sortable>
                    <template #body="slotProps">
                        {{ formatCurrency(slotProps.data.amount) }}
                    </template>
                </Column>
                <Column field="status" header="Status" sortable>
                    <template #body="slotProps">
                        <Tag :value="slotProps.data.status.toLowerCase()" :severity="getOrderSeverity(slotProps.data)" />
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
`,
                options: `
<template>
    <div class="card">
        <DataTable v-model:expandedRows="expandedRows" :value="products" dataKey="id"
                @rowExpand="onRowExpand" @rowCollapse="onRowCollapse" tableStyle="min-width: 60rem">
            <template #header>
                <div class="flex flex-wrap justify-end gap-2">
                    <Button text icon="pi pi-plus" label="Expand All" @click="expandAll" />
                    <Button text icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
                </div>
            </template>
            <Column expander style="width: 5rem" />
            <Column field="name" header="Name"></Column>
            <Column header="Image">
                <template #body="slotProps">
                    <img :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.image" class="shadow-lg" width="64" />
                </template>
            </Column>
            <Column field="price" header="Price">
                <template #body="slotProps">
                    {{ formatCurrency(slotProps.data.price) }}
                </template>
            </Column>
            <Column field="category" header="Category"></Column>
            <Column field="rating" header="Reviews">
                <template #body="slotProps">
                    <Rating :modelValue="slotProps.data.rating" readonly :cancel="false" />
                </template>
            </Column>
            <Column header="Status">
                <template #body="slotProps">
                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)" />
                </template>
            </Column>
            <template #expansion="slotProps">
                <div class="p-4">
                    <h5>Orders for {{ slotProps.data.name }}</h5>
                    <DataTable :value="slotProps.data.orders" >
                        <Column field="id" header="Id" sortable></Column>
                        <Column field="customer" header="Customer" sortable></Column>
                        <Column field="date" header="Date" sortable></Column>
                        <Column field="amount" header="Amount" sortable>
                            <template #body="slotProps">
                                {{ formatCurrency(slotProps.data.amount) }}
                            </template>
                        </Column>
                        <Column field="status" header="Status" sortable>
                            <template #body="slotProps">
                                <Tag :value="slotProps.data.status.toLowerCase()" :severity="getOrderSeverity(slotProps.data)" />
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
        <Toast />
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            expandedRows: {}
        };
    },
    mounted() {
        ProductService.getProductsWithOrdersSmall().then((data) => (this.products = data));
    },
    methods: {
        onRowExpand(event) {
            this.$toast.add({ severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000 });
        },
        onRowCollapse(event) {
            this.$toast.add({ severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000 });
        },
        expandAll() {
            this.expandedRows = this.products.reduce((acc, p) => (acc[p.id] = true) && acc, {});
        },
        collapseAll() {
            this.expandedRows = null;
        },
        formatCurrency(value) {
            return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
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
        },
        getOrderSeverity(order) {
            switch (order.status) {
                case 'DELIVERED':
                    return 'success';

                case 'CANCELLED':
                    return 'danger';

                case 'PENDING':
                    return 'warn';

                case 'RETURNED':
                    return 'info';

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
        <DataTable v-model:expandedRows="expandedRows" :value="products" dataKey="id"
                @rowExpand="onRowExpand" @rowCollapse="onRowCollapse" tableStyle="min-width: 60rem">
            <template #header>
                <div class="flex flex-wrap justify-end gap-2">
                    <Button text icon="pi pi-plus" label="Expand All" @click="expandAll" />
                    <Button text icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
                </div>
            </template>
            <Column expander style="width: 5rem" />
            <Column field="name" header="Name"></Column>
            <Column header="Image">
                <template #body="slotProps">
                    <img :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.image" class="shadow-lg" width="64" />
                </template>
            </Column>
            <Column field="price" header="Price">
                <template #body="slotProps">
                    {{ formatCurrency(slotProps.data.price) }}
                </template>
            </Column>
            <Column field="category" header="Category"></Column>
            <Column field="rating" header="Reviews">
                <template #body="slotProps">
                    <Rating :modelValue="slotProps.data.rating" readonly :cancel="false" />
                </template>
            </Column>
            <Column header="Status">
                <template #body="slotProps">
                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)" />
                </template>
            </Column>
            <template #expansion="slotProps">
                <div class="p-4">
                    <h5>Orders for {{ slotProps.data.name }}</h5>
                    <DataTable :value="slotProps.data.orders">
                        <Column field="id" header="Id" sortable></Column>
                        <Column field="customer" header="Customer" sortable></Column>
                        <Column field="date" header="Date" sortable></Column>
                        <Column field="amount" header="Amount" sortable>
                            <template #body="slotProps">
                                {{ formatCurrency(slotProps.data.amount) }}
                            </template>
                        </Column>
                        <Column field="status" header="Status" sortable>
                            <template #body="slotProps">
                                <Tag :value="slotProps.data.status.toLowerCase()" :severity="getOrderSeverity(slotProps.data)" />
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
        <Toast />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import { ProductService } from '@/service/ProductService';

const products = ref();
const expandedRows = ref({});
const toast = useToast();

onMounted(() => {
    ProductService.getProductsWithOrdersSmall().then((data) => (products.value = data));
});

const onRowExpand = (event) => {
    toast.add({ severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000 });
};
const onRowCollapse = (event) => {
    toast.add({ severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000 });
};
const expandAll = () => {
    expandedRows.value = products.value.reduce((acc, p) => (acc[p.id] = true) && acc, {});
};
const collapseAll = () => {
    expandedRows.value = null;
};
const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
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
const getOrderSeverity = (order) => {
    switch (order.status) {
        case 'DELIVERED':
            return 'success';

        case 'CANCELLED':
            return 'danger';

        case 'PENDING':
            return 'warn';

        case 'RETURNED':
            return 'info';

        default:
            return null;
    }
};

<\/script>
`,
                data: `
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
    rating: 5,
    orders: [
        {
            id: '1000-0',
            productCode: 'f230fh0g3',
            date: '2020-09-13',
            amount: 65,
            quantity: 1,
            customer: 'David James',
            status: 'PENDING'
        },
        ...
    ]
},
...
`
            }
        };
    },
    methods: {
        loadDemoData() {
            ProductService.getProductsWithOrdersSmall().then((data) => (this.products = data));
        },
        onRowExpand(event) {
            this.$toast.add({ severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000 });
        },
        onRowCollapse(event) {
            this.$toast.add({ severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000 });
        },
        expandAll() {
            this.expandedRows = this.products.reduce((acc, p) => (acc[p.id] = true) && acc, {});
        },
        collapseAll() {
            this.expandedRows = null;
        },
        formatCurrency(value) {
            return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
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
        },
        getOrderSeverity(order) {
            switch (order.status) {
                case 'DELIVERED':
                    return 'success';

                case 'CANCELLED':
                    return 'danger';

                case 'PENDING':
                    return 'warn';

                case 'RETURNED':
                    return 'info';

                default:
                    return null;
            }
        }
    }
};
</script>
