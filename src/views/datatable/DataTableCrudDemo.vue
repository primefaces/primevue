<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>Crud</span></h1>
				<p>This samples demonstrates a CRUD implementation using various PrimeVue components.</p>
			</div>
		</div>

		<div class="content-section implementation">
            <div class="card">
                <Toolbar class="p-mb-4">
                    <template slot="left">
                        <Button label="New" icon="pi pi-plus" class="p-button-success p-mr-2" @click="openNew" />
                        <Button label="Delete" icon="pi pi-trash" class="p-button-danger" @click="confirmDeleteSelected" :disabled="!selectedProducts || !selectedProducts.length" />
                    </template>

                    <template slot="right">
                        <FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" chooseLabel="Import" class="p-mr-2" />
                        <Button label="Export" icon="pi pi-upload" class="p-button-help" @click="exportCSV($event)"  />
                    </template>
                </Toolbar>

                <DataTable ref="dt" :value="products" :selection.sync="selectedProducts" dataKey="id"
                    :paginator="true" :rows="10" :filters="filters"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products">
                    <template #header>
                        <div class="table-header">
                            <h5 class="p-m-0">Manage Products</h5>
                            <span class="p-input-icon-left">
                                <i class="pi pi-search" />
                                <InputText v-model="filters['global']" placeholder="Search..." />
                            </span>
                        </div>
                    </template>

                    <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
                    <Column field="code" header="Code" sortable></Column>
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
                           <Rating :value="slotProps.data.rating" :readonly="true" :cancel="false" />
                        </template>
                    </Column>
                    <Column field="inventoryStatus" header="Status" sortable>
                        <template #body="slotProps">
                            <span :class="'product-badge status-' + slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>
                        </template>
                    </Column>
                    <Column>
                        <template #body="slotProps">
                            <Button icon="pi pi-pencil" class="p-button-rounded p-button-success p-mr-2" @click="editProduct(slotProps.data)" />
                            <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="confirmDeleteProduct(slotProps.data)" />
                        </template>
                    </Column>
                </DataTable>
            </div>

            <Dialog :visible.sync="productDialog" :style="{width: '450px'}" header="Product Details" :modal="true" class="p-fluid">
                <img :src="'demo/images/product/' + product.image" :alt="product.image" class="product-image" v-if="product.image" />
                <div class="p-field">
                    <label for="name">Name</label>
                    <InputText id="name" v-model.trim="product.name" required="true" autofocus :class="{'p-invalid': submitted && !product.name}" />
                    <small class="p-invalid" v-if="submitted && !product.name">Name is required.</small>
                </div>
                <div class="p-field">
                    <label for="description">Description</label>
                    <Textarea id="description" v-model="product.description" required="true" rows="3" cols="20" />
                </div>

                <div class="p-field">
                    <label class="p-mb-3">Category</label>
                    <div class="p-formgrid p-grid">
                        <div class="p-field-radiobutton p-col-6">
                            <RadioButton id="category1" name="category" value="Accessories" v-model="product.category" />
                            <label for="category1">Accessories</label>
                        </div>
                        <div class="p-field-radiobutton p-col-6">
                            <RadioButton id="category2" name="category" value="Clothing" v-model="product.category" />
                            <label for="category2">Clothing</label>
                        </div>
                        <div class="p-field-radiobutton p-col-6">
                            <RadioButton id="category3" name="category" value="Electronics" v-model="product.category" />
                            <label for="category3">Electronics</label>
                        </div>
                        <div class="p-field-radiobutton p-col-6">
                            <RadioButton id="category4" name="category" value="Fitness" v-model="product.category" />
                            <label for="category4">Fitness</label>
                        </div>
                    </div>
                </div>

                <div class="p-formgrid p-grid">
                    <div class="p-field p-col">
                        <label for="price">Price</label>
                        <InputNumber id="price" v-model="product.price" mode="currency" currency="USD" locale="en-US" />
                    </div>
                    <div class="p-field p-col">
                        <label for="quantity">Quantity</label>
                        <InputNumber id="quantity" v-model="product.quantity" integeronly />
                    </div>
                </div>
                <template #footer>
                    <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog"/>
                    <Button label="Save" icon="pi pi-check" class="p-button-text" @click="saveProduct" />
                </template>
            </Dialog>

            <Dialog :visible.sync="deleteProductDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
                <p v-if="product">Are you sure you want to delete <b>{{product.name}}</b>?</p>
                <template #footer>
                    <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductDialog = false"/>
                    <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteProduct" />
                </template>
            </Dialog>

            <Dialog :visible.sync="deleteProductsDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
                <p v-if="product">Are you sure you want to delete selected products?</p>
                <template #footer>
                    <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductsDialog = false"/>
                    <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteSelectedProducts" />
                </template>
            </Dialog>
		</div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;Toolbar class="p-mb-4"&gt;
    &lt;template slot="left"&gt;
        &lt;Button label="New" icon="pi pi-plus" class="p-button-success p-mr-2" @click="openNew" /&gt;
        &lt;Button label="Delete" icon="pi pi-trash" class="p-button-danger" @click="confirmDeleteSelected" :disabled="!selectedProducts || !selectedProducts.length" /&gt;
    &lt;/template&gt;

    &lt;template slot="right"&gt;
        &lt;FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" chooseLabel="Import" class="p-mr-2" /&gt;
        &lt;Button label="Export" icon="pi pi-upload" class="p-button-help" @click="exportCSV($event)"  /&gt;
    &lt;/template&gt;
&lt;/Toolbar&gt;

&lt;DataTable ref="dt" :value="products" :selection.sync="selectedProducts" dataKey="id"
    :paginator="true" :rows="10" :filters="filters"
    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"&gt;
    &lt;template #header&gt;
        &lt;div class="table-header"&gt;
            &lt;h5 class="p-m-0"&gt;Manage Products&lt;/h5&gt;
            &lt;span class="p-input-icon-left"&gt;
                &lt;i class="pi pi-search" /&gt;
                &lt;InputText v-model="filters['global']" placeholder="Search..." /&gt;
            &lt;/span&gt;
        &lt;/div&gt;
    &lt;/template&gt;

    &lt;Column selectionMode="multiple" headerStyle="width: 3rem"&gt;&lt;/Column&gt;
    &lt;Column field="code" header="Code" sortable&gt;&lt;/Column&gt;
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
            &lt;Rating :value="slotProps.data.rating" :readonly="true" :cancel="false" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column field="inventoryStatus" header="Status" sortable&gt;
        &lt;template #body="slotProps"&gt;
            &lt;span :class="'product-badge status-' + slotProps.data.inventoryStatus.toLowerCase()"&gt;{{slotProps.data.inventoryStatus}}&lt;/span&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
    &lt;Column&gt;
        &lt;template #body="slotProps"&gt;
            &lt;Button icon="pi pi-pencil" class="p-button-rounded p-button-success p-mr-2" @click="editProduct(slotProps.data)" /&gt;
            &lt;Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="confirmDeleteProduct(slotProps.data)" /&gt;
        &lt;/template&gt;
    &lt;/Column&gt;
&lt;/DataTable&gt;
&lt;/div&gt;

&lt;Dialog :visible.sync="productDialog" :style="{width: '450px'}" header="Product Details" :modal="true" class="p-fluid"&gt;
&lt;img :src="'demo/images/product/' + product.image" :alt="product.image" class="product-image" v-if="product.image" /&gt;
&lt;div class="p-field"&gt;
    &lt;label for="name"&gt;Name&lt;/label&gt;
    &lt;InputText id="name" v-model.trim="product.name" required="true" autofocus :class="{'p-invalid': submitted &amp;&amp; !product.name}" /&gt;
    &lt;small class="p-invalid" v-if="submitted &amp;&amp; !product.name"&gt;Name is required.&lt;/small&gt;
&lt;/div&gt;
&lt;div class="p-field"&gt;
    &lt;label for="description"&gt;Description&lt;/label&gt;
    &lt;Textarea id="description" v-model="product.description" required="true" rows="3" cols="20" /&gt;
&lt;/div&gt;

&lt;div class="p-field"&gt;
    &lt;label class="p-mb-3"&gt;Category&lt;/label&gt;
    &lt;div class="p-formgrid p-grid"&gt;
        &lt;div class="p-field-radiobutton p-col-6"&gt;
            &lt;RadioButton id="category1" name="category" value="Accessories" v-model="product.category" /&gt;
            &lt;label for="category1"&gt;Accessories&lt;/label&gt;
        &lt;/div&gt;
        &lt;div class="p-field-radiobutton p-col-6"&gt;
            &lt;RadioButton id="category2" name="category" value="Clothing" v-model="product.category" /&gt;
            &lt;label for="category2"&gt;Clothing&lt;/label&gt;
        &lt;/div&gt;
        &lt;div class="p-field-radiobutton p-col-6"&gt;
            &lt;RadioButton id="category3" name="category" value="Electronics" v-model="product.category" /&gt;
            &lt;label for="category3"&gt;Electronics&lt;/label&gt;
        &lt;/div&gt;
        &lt;div class="p-field-radiobutton p-col-6"&gt;
            &lt;RadioButton id="category4" name="category" value="Fitness" v-model="product.category" /&gt;
            &lt;label for="category4"&gt;Fitness&lt;/label&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="p-formgrid p-grid"&gt;
    &lt;div class="p-field p-col"&gt;
        &lt;label for="price"&gt;Price&lt;/label&gt;
        &lt;InputNumber id="price" v-model="product.price" mode="currency" currency="USD" locale="en-US" /&gt;
    &lt;/div&gt;
    &lt;div class="p-field p-col"&gt;
        &lt;label for="quantity"&gt;Quantity&lt;/label&gt;
        &lt;InputNumber id="quantity" v-model="product.quantity" integeronly /&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;template #footer&gt;
    &lt;Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog"/&gt;
    &lt;Button label="Save" icon="pi pi-check" class="p-button-text" @click="saveProduct" /&gt;
&lt;/template&gt;
&lt;/Dialog&gt;

&lt;Dialog :visible.sync="deleteProductDialog" :style="{width: '450px'}" header="Confirm" :modal="true"&gt;
&lt;p v-if="product"&gt;Are you sure you want to delete &lt;b&gt;{{product.name}}&lt;/b&gt;?&lt;/p&gt;
&lt;template #footer&gt;
    &lt;Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductDialog = false"/&gt;
    &lt;Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteProduct" /&gt;
&lt;/template&gt;
&lt;/Dialog&gt;

&lt;Dialog :visible.sync="deleteProductsDialog" :style="{width: '450px'}" header="Confirm" :modal="true"&gt;
&lt;p v-if="product"&gt;Are you sure you want to delete selected products?&lt;/p&gt;
&lt;template #footer&gt;
    &lt;Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductsDialog = false"/&gt;
    &lt;Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteSelectedProducts" /&gt;
&lt;/template&gt;
&lt;/Dialog&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import ProductService from '../../service/ProductService';

export default {
    data() {
        return {
            products: null,
            productDialog: false,
            deleteProductDialog: false,
            deleteProductsDialog: false,
            product: {},
            selectedProducts: null,
            filters: {},
            submitted: false
        }
    },
    productService: null,
    created() {
        this.productService = new ProductService();
    },
    mounted() {
        this.productService.getProducts().then(data => this.products = data);
    },
    methods: {
        formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        },
        openNew() {
            this.product = {};
            this.submitted = false;
            this.productDialog = true;
        },
        hideDialog() {
            this.productDialog = false;
            this.submitted = false;
        },
        saveProduct() {
            this.submitted = true;

            if (this.product.name.trim()) {
                if (this.product.id) {
                    this.$set(this.products, this.findIndexById(this.product.id), this.product);
                    this.$toast.add({severity:'success', summary: 'Product Updated', life: 3000});
                }
                else {
                    this.product.id = this.createId();
                    this.product.image = 'product-placeholder.svg';
                    this.products.push(this.product);
                    this.$toast.add({severity:'success', summary: 'Product Created', life: 3000});
                }

                this.productDialog = false;
                this.product = {};
            }
        },
        editProduct(product) {
            this.product = {...product};
            this.productDialog = true;
        },
        confirmDeleteProduct(product) {
            this.product = product;
            this.deleteProductDialog = true;
        },
        deleteProduct() {
            this.products = this.products.filter(val => val.id !== this.product.id);
            this.deleteProductDialog = false;
            this.product = {};
            this.$toast.add({severity:'success', summary: 'Product Deleted', life: 3000});
        },
        findIndexById(id) {
            let index = -1;
            for (let i = 0; i &lt; this.products.length; i++) {
                if (this.products[i].id === id) {
                    index = i;
                    break;
                }
            }

            return index;
        },
        createId() {
            let id = '';
            var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            for ( var i = 0; i &lt; 5; i++ ) {
                id += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return id;
        },
        exportCSV() {
            this.$refs.dt.exportCSV();
        },
        confirmDeleteSelected() {
            this.deleteProductsDialog = true;
        },
        deleteSelectedProducts() {
            this.products = this.products.filter(val => !this.selectedProducts.includes(val));
            this.deleteProductsDialog = false;
            this.selectedProducts = null;
            this.$toast.add({severity:'success', summary: 'Completed', life: 3000});
        }
    }
}
</CodeHighlight>
                </TabPanel>
            </TabView>
        </div>
	</div>
</template>

<script>
import ProductService from '../../service/ProductService';

export default {
    data() {
        return {
            products: null,
            productDialog: false,
            deleteProductDialog: false,
            deleteProductsDialog: false,
            product: {},
            selectedProducts: null,
            filters: {},
            submitted: false
        }
    },
    productService: null,
    created() {
        this.productService = new ProductService();
    },
    mounted() {
        this.productService.getProducts().then(data => this.products = data);
    },
    methods: {
        formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        },
        openNew() {
            this.product = {};
            this.submitted = false;
            this.productDialog = true;
        },
        hideDialog() {
            this.productDialog = false;
            this.submitted = false;
        },
        saveProduct() {
            this.submitted = true;

            if (this.product.name.trim()) {
                if (this.product.id) {
                    this.$set(this.products, this.findIndexById(this.product.id), this.product);
                    this.$toast.add({severity:'success', summary: 'Product Updated', life: 3000});
                }
                else {
                    this.product.id = this.createId();
                    this.product.image = 'product-placeholder.svg';
                    this.products.push(this.product);
                    this.$toast.add({severity:'success', summary: 'Product Created', life: 3000});
                }

                this.productDialog = false;
                this.product = {};
            }
        },
        editProduct(product) {
            this.product = {...product};
            this.productDialog = true;
        },
        confirmDeleteProduct(product) {
            this.product = product;
            this.deleteProductDialog = true;
        },
        deleteProduct() {
            this.products = this.products.filter(val => val.id !== this.product.id);
            this.deleteProductDialog = false;
            this.product = {};
            this.$toast.add({severity:'success', summary: 'Product Deleted', life: 3000});
        },
        findIndexById(id) {
            let index = -1;
            for (let i = 0; i < this.products.length; i++) {
                if (this.products[i].id === id) {
                    index = i;
                    break;
                }
            }

            return index;
        },
        createId() {
            let id = '';
            var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            for ( var i = 0; i < 5; i++ ) {
                id += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return id;
        },
        exportCSV() {
            this.$refs.dt.exportCSV();
        },
        confirmDeleteSelected() {
            this.deleteProductsDialog = true;
        },
        deleteSelectedProducts() {
            this.products = this.products.filter(val => !this.selectedProducts.includes(val));
            this.deleteProductsDialog = false;
            this.selectedProducts = null;
            this.$toast.add({severity:'success', summary: 'Completed', life: 3000});
        }
    }
}
</script>

<style scoped>
.table-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.product-image {
    width: 100px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.p-dialog .product-image {
    width: 150px;
    margin: 0 auto 2rem auto;
    display: block;
}
</style>