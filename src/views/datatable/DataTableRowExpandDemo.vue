<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>Row Expansion</span></h1>
				<p>A row can be expanded to display additional content.</p>
			</div>
		</div>

		<div class="content-section implementation">
            <div class="card">
                <DataTable :value="products" v-model:expandedRows="expandedRows" dataKey="id"
                    @row-expand="onRowExpand" @row-collapse="onRowCollapse">
                    <template #header>
                        <div class="table-header-container">
                            <Button icon="pi pi-plus" label="Expand All" @click="expandAll" class="p-mr-2" />
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
                            <DataTable :value="slotProps.data.orders">
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

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
                    <div class="p-d-flex p-jc-end">
                        <LiveEditor name="DataTableDemo" :sources="sources" :toastService="true" service="ProductService" data="products-orders-small" :components="['Column', 'Button', 'Rating']" />
                    </div>
<pre v-code>
<code><template v-pre>
&lt;DataTable :value="products" v-model:expandedRows="expandedRows" dataKey="id"
    @row-expand="onRowExpand" @row-collapse="onRowCollapse"&gt;
    &lt;template #header&gt;
        &lt;div class="table-header-container"&gt;
            &lt;Button icon="pi pi-plus" label="Expand All" @click="expandAll" class="p-mr-2" /&gt;
            &lt;Button icon="pi pi-minus" label="Collapse All" @click="collapseAll" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
        &lt;Column :expander="true" headerStyle="width: 3rem" /&gt;
    &lt;Column field="name" header="Name" sortable&gt;&lt;/Column&gt;
    &lt;Column header="Image"&gt;
            &lt;template #body="slotProps"&gt;
            &lt;img :src="'demo/images/product/' + slotProps.data.image" :alt="slotProps.data.image" class="product-image" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="price" header="Price" sortable&gt;
        &lt;template #body="slotProps"&gt;
            {{formatCurrency(slotProps.data.price)}}
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="category" header="Category" sortable&gt;&lt;/Column&gt;
    &lt;Column field="rating" header="Reviews" sortable&gt;
        &lt;template #body="slotProps"&gt;
            &lt;Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="inventoryStatus" header="Status" sortable&gt;
        &lt;template #body="slotProps"&gt;
            &lt;span :class="'product-badge status-' + slotProps.data.inventoryStatus.toLowerCase()"&gt;{{slotProps.data.inventoryStatus}}&lt;/span&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;template #expansion="slotProps"&gt;
        &lt;div class="orders-subtable"&gt;
            &lt;h5&gt;Orders for {{slotProps.data.name}}&lt;/h5&gt;
            &lt;DataTable :value="slotProps.data.orders"&gt;
                &lt;Column field="id" header="Id" sortable&gt;&lt;/Column&gt;
                &lt;Column field="customer" header="Customer" sortable&gt;&lt;/Column&gt;
                &lt;Column field="date" header="Date" sortable&gt;&lt;/Column&gt;
                &lt;Column field="amount" header="Amount" sortable&gt;
                    &lt;template #body="slotProps" sortable&gt;
                        {{formatCurrency(slotProps.data.amount)}}
                    &lt;/template&gt;
                &lt;/Column&gt;
                &lt;Column field="status" header="Status" sortable&gt;
                    &lt;template #body="slotProps"&gt;
                        &lt;span :class="'order-badge order-' + slotProps.data.status.toLowerCase()"&gt;{{slotProps.data.status}}&lt;/span&gt;
                    &lt;/template&gt;
                &lt;/Column&gt;
                &lt;Column headerStyle="width:4rem"&gt;
                    &lt;template #body&gt;
                        &lt;Button icon="pi pi-search" /&gt;
                    &lt;/template&gt;
                &lt;/Column&gt;
            &lt;/DataTable&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/DataTable&gt;
</template>
</code></pre>

<pre v-code.script>
<code>
import ProductService from '../../service/ProductService';

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

</code></pre>
                </TabPanel>
            </TabView>
        </div>
	</div>
</template>

<script>
import ProductService from '../../service/ProductService';
import LiveEditor from '../liveeditor/LiveEditor';

export default {
    data() {
        return {
            products: null,
            expandedRows: [],
            sources: {
                'template': {
                    content:`<template>
    <div class="layout-content">
        <Toast />
        <div class="content-section implementation">
            <div class="card">
                <DataTable :value="products" v-model:expandedRows="expandedRows" dataKey="id"
                    @row-expand="onRowExpand" @row-collapse="onRowCollapse">
                    <template #header>
                        <div class="table-header-container">
                            <Button icon="pi pi-plus" label="Expand All" @click="expandAll" class="p-mr-2" />
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
                            <DataTable :value="slotProps.data.orders">
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
    </div>
</template>

<script>
import ProductService from '../service/ProductService';

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
}`,
                    style: `<style lang="scss" scoped>
.product-image {
    width: 100px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
}

.orders-subtable {
    padding: 1rem;
}
</style>`
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
    components: {
        LiveEditor
    }
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