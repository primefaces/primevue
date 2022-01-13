<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>Crud</span></h1>
				<p>This sample demonstrates a CRUD implementation using various PrimeVue components.</p>
			</div>
            <AppDemoActions />
		</div>

		<div class="content-section implementation">
            <div class="card">
                <Toolbar class="mb-4">
                    <template #start>
                        <Button label="New" icon="pi pi-plus" class="p-button-success mr-2" @click="openNew" />
                        <Button label="Delete" icon="pi pi-trash" class="p-button-danger" @click="confirmDeleteSelected" :disabled="!selectedProducts || !selectedProducts.length" />
                    </template>

                    <template #end>
                        <FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" chooseLabel="Import" class="mr-2 inline-block" />
                        <Button label="Export" icon="pi pi-upload" class="p-button-help" @click="exportCSV($event)"  />
                    </template>
                </Toolbar>

                <DataTable ref="dt" :value="products" v-model:selection="selectedProducts" dataKey="id"
                    :paginator="true" :rows="10" :filters="filters"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" responsiveLayout="scroll">
                    <template #header>
                        <div class="table-header flex flex-column md:flex-row md:justiify-content-between">
							<h5 class="mb-2 md:m-0 p-as-md-center">Manage Products</h5>
							<span class="p-input-icon-left">
                                <i class="pi pi-search" />
                                <InputText v-model="filters['global'].value" placeholder="Search..." />
                            </span>
						</div>
                    </template>

                    <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
                    <Column field="code" header="Code" :sortable="true" style="min-width:12rem"></Column>
                    <Column field="name" header="Name" :sortable="true" style="min-width:16rem"></Column>
                    <Column header="Image">
                        <template #body="slotProps">
                            <img :src="'demo/images/product/' + slotProps.data.image" :alt="slotProps.data.image" class="product-image" />
                        </template>
                    </Column>
                    <Column field="price" header="Price" :sortable="true" style="min-width:8rem">
                        <template #body="slotProps">
                            {{formatCurrency(slotProps.data.price)}}
                        </template>
                    </Column>
                    <Column field="category" header="Category" :sortable="true" style="min-width:10rem"></Column>
                    <Column field="rating" header="Reviews" :sortable="true" style="min-width:12rem">
                        <template #body="slotProps">
                            <Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false" />
                        </template>
                    </Column>
                    <Column field="inventoryStatus" header="Status" :sortable="true" style="min-width:12rem">
                        <template #body="slotProps">
                            <span :class="'product-badge status-' + (slotProps.data.inventoryStatus ? slotProps.data.inventoryStatus.toLowerCase() : '')">{{slotProps.data.inventoryStatus}}</span>
                        </template>
                    </Column>
                    <Column :exportable="false" style="min-width:8rem">
                        <template #body="slotProps">
                            <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2" @click="editProduct(slotProps.data)" />
                            <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="confirmDeleteProduct(slotProps.data)" />
                        </template>
                    </Column>
                </DataTable>
            </div>

            <Dialog v-model:visible="productDialog" :style="{width: '450px'}" header="Product Details" :modal="true" class="p-fluid">
                <img :src="'demo/images/product/' + product.image" :alt="product.image" class="product-image" v-if="product.image" />
                <div class="field">
                    <label for="name">Name</label>
                    <InputText id="name" v-model.trim="product.name" required="true" autofocus :class="{'p-invalid': submitted && !product.name}" />
                    <small class="p-error" v-if="submitted && !product.name">Name is required.</small>
                </div>
                <div class="field">
                    <label for="description">Description</label>
                    <Textarea id="description" v-model="product.description" required="true" rows="3" cols="20" />
                </div>

                <div class="field">
					<label for="inventoryStatus" class="mb-3">Inventory Status</label>
					<Dropdown id="inventoryStatus" v-model="product.inventoryStatus" :options="statuses" optionLabel="label" placeholder="Select a Status">
						<template #value="slotProps">
							<div v-if="slotProps.value && slotProps.value.value">
								<span :class="'product-badge status-' +slotProps.value.value">{{slotProps.value.label}}</span>
							</div>
							<div v-else-if="slotProps.value && !slotProps.value.value">
								<span :class="'product-badge status-' +slotProps.value.toLowerCase()">{{slotProps.value}}</span>
							</div>
							<span v-else>
								{{slotProps.placeholder}}
							</span>
						</template>
					</Dropdown>
				</div>

                <div class="field">
                    <label class="mb-3">Category</label>
                    <div class="formgrid grid">
                        <div class="field-radiobutton col-6">
                            <RadioButton id="category1" name="category" value="Accessories" v-model="product.category" />
                            <label for="category1">Accessories</label>
                        </div>
                        <div class="field-radiobutton col-6">
                            <RadioButton id="category2" name="category" value="Clothing" v-model="product.category" />
                            <label for="category2">Clothing</label>
                        </div>
                        <div class="field-radiobutton col-6">
                            <RadioButton id="category3" name="category" value="Electronics" v-model="product.category" />
                            <label for="category3">Electronics</label>
                        </div>
                        <div class="field-radiobutton col-6">
                            <RadioButton id="category4" name="category" value="Fitness" v-model="product.category" />
                            <label for="category4">Fitness</label>
                        </div>
                    </div>
                </div>

                <div class="formgrid grid">
                    <div class="field col">
                        <label for="price">Price</label>
                        <InputNumber id="price" v-model="product.price" mode="currency" currency="USD" locale="en-US" />
                    </div>
                    <div class="field col">
                        <label for="quantity">Quantity</label>
                        <InputNumber id="quantity" v-model="product.quantity" integeronly />
                    </div>
                </div>
                <template #footer>
                    <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog"/>
                    <Button label="Save" icon="pi pi-check" class="p-button-text" @click="saveProduct" />
                </template>
            </Dialog>

            <Dialog v-model:visible="deleteProductDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
                <div class="confirmation-content">
                    <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                    <span v-if="product">Are you sure you want to delete <b>{{product.name}}</b>?</span>
                </div>
                <template #footer>
                    <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductDialog = false"/>
                    <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteProduct" />
                </template>
            </Dialog>

            <Dialog v-model:visible="deleteProductsDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
                <div class="confirmation-content">
                    <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                    <span v-if="product">Are you sure you want to delete the selected products?</span>
                </div>
                <template #footer>
                    <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductsDialog = false"/>
                    <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteSelectedProducts" />
                </template>
            </Dialog>
		</div>

        <AppDoc name="DataTableCrudDemo" :sources="sources" :service="['ProductService']" :data="['products']" github="datatable/DataTableCrudDemo.vue" />
	</div>
</template>

<script>
import {FilterMatchMode} from 'primevue/api';
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
            submitted: false,
            statuses: [
				{label: 'INSTOCK', value: 'instock'},
				{label: 'LOWSTOCK', value: 'lowstock'},
				{label: 'OUTOFSTOCK', value: 'outofstock'}
            ],
            sources: {
                'options-api': {
                    tabName: 'Options API Source',
                    content: `
<template>
    <div>
        <div class="card">
            <Toolbar class="mb-4">
                <template #start>
                    <Button label="New" icon="pi pi-plus" class="p-button-success mr-2" @click="openNew" />
                    <Button label="Delete" icon="pi pi-trash" class="p-button-danger" @click="confirmDeleteSelected" :disabled="!selectedProducts || !selectedProducts.length" />
                </template>

                <template #end>
                    <FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" chooseLabel="Import" class="mr-2 inline-block" />
                    <Button label="Export" icon="pi pi-upload" class="p-button-help" @click="exportCSV($event)"  />
                </template>
            </Toolbar>

            <DataTable ref="dt" :value="products" v-model:selection="selectedProducts" dataKey="id" 
                :paginator="true" :rows="10" :filters="filters"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" responsiveLayout="scroll">
                <template #header>
                    <div class="table-header flex flex-column md:flex-row md:justiify-content-between">
						<h5 class="mb-2 md:m-0 p-as-md-center">Manage Products</h5>
						<span class="p-input-icon-left">
                            <i class="pi pi-search" />
                            <InputText v-model="filters['global'].value" placeholder="Search..." />
                        </span>
					</div>
                </template>

                <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
                <Column field="code" header="Code" :sortable="true" style="min-width:12rem"></Column>
                <Column field="name" header="Name" :sortable="true" style="min-width:16rem"></Column>
                <Column header="Image">
                     <template #body="slotProps">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.image" class="product-image" />
                    </template>
                </Column>
                <Column field="price" header="Price" :sortable="true" style="min-width:8rem">
                    <template #body="slotProps">
                        {{formatCurrency(slotProps.data.price)}}
                    </template>
                </Column>
                <Column field="category" header="Category" :sortable="true" style="min-width:10rem"></Column>
                <Column field="rating" header="Reviews" :sortable="true" style="min-width:12rem">
                    <template #body="slotProps">
                       <Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false" />
                    </template>
                </Column>
                <Column field="inventoryStatus" header="Status" :sortable="true" style="min-width:12rem">
                    <template #body="slotProps">
                        <span :class="'product-badge status-' + (slotProps.data.inventoryStatus ? slotProps.data.inventoryStatus.toLowerCase() : '')">{{slotProps.data.inventoryStatus}}</span>
                    </template>
                </Column>
                <Column :exportable="false" style="min-width:8rem">
                    <template #body="slotProps">
                        <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2" @click="editProduct(slotProps.data)" />
                        <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="confirmDeleteProduct(slotProps.data)" />
                    </template>
                </Column>
            </DataTable>
        </div>

        <Dialog v-model:visible="productDialog" :style="{width: '450px'}" header="Product Details" :modal="true" class="p-fluid">
            <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="product.image" class="product-image" v-if="product.image" />
            <div class="field">
                <label for="name">Name</label>
                <InputText id="name" v-model.trim="product.name" required="true" autofocus :class="{'p-invalid': submitted && !product.name}" />
                <small class="p-error" v-if="submitted && !product.name">Name is required.</small>
            </div>
            <div class="field">
                <label for="description">Description</label>
                <Textarea id="description" v-model="product.description" required="true" rows="3" cols="20" />
            </div>

            <div class="field">
				<label for="inventoryStatus" class="mb-3">Inventory Status</label>
				<Dropdown id="inventoryStatus" v-model="product.inventoryStatus" :options="statuses" optionLabel="label" placeholder="Select a Status">
					<template #value="slotProps">
						<div v-if="slotProps.value && slotProps.value.value">
							<span :class="'product-badge status-' +slotProps.value.value">{{slotProps.value.label}}</span>
						</div>
						<div v-else-if="slotProps.value && !slotProps.value.value">
							<span :class="'product-badge status-' +slotProps.value.toLowerCase()">{{slotProps.value}}</span>
						</div>
						<span v-else>
							{{slotProps.placeholder}}
						</span>
					</template>
				</Dropdown>
			</div>

            <div class="field">
                <label class="mb-3">Category</label>
                <div class="formgrid grid">
                    <div class="field-radiobutton col-6">
                        <RadioButton id="category1" name="category" value="Accessories" v-model="product.category" />
                        <label for="category1">Accessories</label>
                    </div>
                    <div class="field-radiobutton col-6">
                        <RadioButton id="category2" name="category" value="Clothing" v-model="product.category" />
                        <label for="category2">Clothing</label>
                    </div>
                    <div class="field-radiobutton col-6">
                        <RadioButton id="category3" name="category" value="Electronics" v-model="product.category" />
                        <label for="category3">Electronics</label>
                    </div>
                    <div class="field-radiobutton col-6">
                        <RadioButton id="category4" name="category" value="Fitness" v-model="product.category" />
                        <label for="category4">Fitness</label>
                    </div>
                </div>
            </div>

            <div class="formgrid grid">
                <div class="field col">
                    <label for="price">Price</label>
                    <InputNumber id="price" v-model="product.price" mode="currency" currency="USD" locale="en-US" />
                </div>
                <div class="field col">
                    <label for="quantity">Quantity</label>
                    <InputNumber id="quantity" v-model="product.quantity" integeronly />
                </div>
            </div>
            <template #footer>
                <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog"/>
                <Button label="Save" icon="pi pi-check" class="p-button-text" @click="saveProduct" />
            </template>
        </Dialog>

        <Dialog v-model:visible="deleteProductDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
            <div class="confirmation-content">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span v-if="product">Are you sure you want to delete <b>{{product.name}}</b>?</span>
            </div>
            <template #footer>
                <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductDialog = false"/>
                <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteProduct" />
            </template>
        </Dialog>

        <Dialog v-model:visible="deleteProductsDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
            <div class="confirmation-content">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span v-if="product">Are you sure you want to delete the selected products?</span>
            </div>
            <template #footer>
                <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductsDialog = false"/>
                <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteSelectedProducts" />
            </template>
        </Dialog>
	</div>
</template>

<script>
import { FilterMatchMode } from 'primevue/api';
import ProductService from './service/ProductService';

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
            submitted: false,
            statuses: [
				{label: 'INSTOCK', value: 'instock'},
				{label: 'LOWSTOCK', value: 'lowstock'},
				{label: 'OUTOFSTOCK', value: 'outofstock'}
            ]
        }
    },
    productService: null,
    created() {
        this.productService = new ProductService();
        this.initFilters();
    },
    mounted() {
        this.productService.getProducts().then(data => this.products = data);
    },
    methods: {
        formatCurrency(value) {
            if(value)
				return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
			return;
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
                    this.product.inventoryStatus = this.product.inventoryStatus.value ? this.product.inventoryStatus.value: this.product.inventoryStatus;
                    this.products[this.findIndexById(this.product.id)] = this.product;
                    this.$toast.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
                }
                else {
                    this.product.id = this.createId();
                    this.product.code = this.createId();
                    this.product.image = 'product-placeholder.svg';
                    this.product.inventoryStatus = this.product.inventoryStatus ? this.product.inventoryStatus.value : 'INSTOCK';
                    this.products.push(this.product);
                    this.$toast.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
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
            this.$toast.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
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
            this.$toast.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
        },
        initFilters() {
            this.filters = {
                'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
            }
        }
    }
}
<\\/script>

<style lang="scss" scoped>
.table-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 960px) {
        align-items: start;
	}
}

.product-image {
    width: 50px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.p-dialog .product-image {
    width: 50px;
    margin: 0 auto 2rem auto;
    display: block;
}

.confirmation-content {
    display: flex;
    align-items: center;
    justify-content: center;
}
@media screen and (max-width: 960px) {
	::v-deep(.p-toolbar) {
		flex-wrap: wrap;
        
		.p-button {
            margin-bottom: 0.25rem;
        }
	}
}
</style>
`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <div class="card">
            <Toolbar class="mb-4">
                <template #start>
                    <Button label="New" icon="pi pi-plus" class="p-button-success mr-2" @click="openNew" />
                    <Button label="Delete" icon="pi pi-trash" class="p-button-danger" @click="confirmDeleteSelected" :disabled="!selectedProducts || !selectedProducts.length" />
                </template>

                <template #end>
                    <FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" chooseLabel="Import" class="mr-2 inline-block" />
                    <Button label="Export" icon="pi pi-upload" class="p-button-help" @click="exportCSV($event)"  />
                </template>
            </Toolbar>

            <DataTable ref="dt" :value="products" v-model:selection="selectedProducts" dataKey="id" 
                :paginator="true" :rows="10" :filters="filters"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" responsiveLayout="scroll">
                <template #header>
                    <div class="table-header flex flex-column md:flex-row md:justiify-content-between">
						<h5 class="mb-2 md:m-0 p-as-md-center">Manage Products</h5>
						<span class="p-input-icon-left">
                            <i class="pi pi-search" />
                            <InputText v-model="filters['global'].value" placeholder="Search..." />
                        </span>
					</div>
                </template>

                <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
                <Column field="code" header="Code" :sortable="true" style="min-width:12rem"></Column>
                <Column field="name" header="Name" :sortable="true" style="min-width:16rem"></Column>
                <Column header="Image">
                     <template #body="slotProps">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.image" class="product-image" />
                    </template>
                </Column>
                <Column field="price" header="Price" :sortable="true" style="min-width:8rem">
                    <template #body="slotProps">
                        {{formatCurrency(slotProps.data.price)}}
                    </template>
                </Column>
                <Column field="category" header="Category" :sortable="true" style="min-width:10rem"></Column>
                <Column field="rating" header="Reviews" :sortable="true" style="min-width:12rem">
                    <template #body="slotProps">
                       <Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false" />
                    </template>
                </Column>
                <Column field="inventoryStatus" header="Status" :sortable="true" style="min-width:12rem">
                    <template #body="slotProps">
                        <span :class="'product-badge status-' + (slotProps.data.inventoryStatus ? slotProps.data.inventoryStatus.toLowerCase() : '')">{{slotProps.data.inventoryStatus}}</span>
                    </template>
                </Column>
                <Column :exportable="false" style="min-width:8rem">
                    <template #body="slotProps">
                        <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2" @click="editProduct(slotProps.data)" />
                        <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="confirmDeleteProduct(slotProps.data)" />
                    </template>
                </Column>
            </DataTable>
        </div>

        <Dialog v-model:visible="productDialog" :style="{width: '450px'}" header="Product Details" :modal="true" class="p-fluid">
            <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="product.image" class="product-image" v-if="product.image" />
            <div class="field">
                <label for="name">Name</label>
                <InputText id="name" v-model.trim="product.name" required="true" autofocus :class="{'p-invalid': submitted && !product.name}" />
                <small class="p-error" v-if="submitted && !product.name">Name is required.</small>
            </div>
            <div class="field">
                <label for="description">Description</label>
                <Textarea id="description" v-model="product.description" required="true" rows="3" cols="20" />
            </div>

            <div class="field">
				<label for="inventoryStatus" class="mb-3">Inventory Status</label>
				<Dropdown id="inventoryStatus" v-model="product.inventoryStatus" :options="statuses" optionLabel="label" placeholder="Select a Status">
					<template #value="slotProps">
						<div v-if="slotProps.value && slotProps.value.value">
							<span :class="'product-badge status-' +slotProps.value.value">{{slotProps.value.label}}</span>
						</div>
						<div v-else-if="slotProps.value && !slotProps.value.value">
							<span :class="'product-badge status-' +slotProps.value.toLowerCase()">{{slotProps.value}}</span>
						</div>
						<span v-else>
							{{slotProps.placeholder}}
						</span>
					</template>
				</Dropdown>
			</div>

            <div class="field">
                <label class="mb-3">Category</label>
                <div class="formgrid grid">
                    <div class="field-radiobutton col-6">
                        <RadioButton id="category1" name="category" value="Accessories" v-model="product.category" />
                        <label for="category1">Accessories</label>
                    </div>
                    <div class="field-radiobutton col-6">
                        <RadioButton id="category2" name="category" value="Clothing" v-model="product.category" />
                        <label for="category2">Clothing</label>
                    </div>
                    <div class="field-radiobutton col-6">
                        <RadioButton id="category3" name="category" value="Electronics" v-model="product.category" />
                        <label for="category3">Electronics</label>
                    </div>
                    <div class="field-radiobutton col-6">
                        <RadioButton id="category4" name="category" value="Fitness" v-model="product.category" />
                        <label for="category4">Fitness</label>
                    </div>
                </div>
            </div>

            <div class="formgrid grid">
                <div class="field col">
                    <label for="price">Price</label>
                    <InputNumber id="price" v-model="product.price" mode="currency" currency="USD" locale="en-US" />
                </div>
                <div class="field col">
                    <label for="quantity">Quantity</label>
                    <InputNumber id="quantity" v-model="product.quantity" integeronly />
                </div>
            </div>
            <template #footer>
                <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog"/>
                <Button label="Save" icon="pi pi-check" class="p-button-text" @click="saveProduct" />
            </template>
        </Dialog>

        <Dialog v-model:visible="deleteProductDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
            <div class="confirmation-content">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span v-if="product">Are you sure you want to delete <b>{{product.name}}</b>?</span>
            </div>
            <template #footer>
                <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductDialog = false"/>
                <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteProduct" />
            </template>
        </Dialog>

        <Dialog v-model:visible="deleteProductsDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
            <div class="confirmation-content">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span v-if="product">Are you sure you want to delete the selected products?</span>
            </div>
            <template #footer>
                <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductsDialog = false"/>
                <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteSelectedProducts" />
            </template>
        </Dialog>
	</div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { FilterMatchMode } from 'primevue/api';
import { useToast } from 'primevue/usetoast';
import ProductService from './service/ProductService';

export default {
    setup() {
        onMounted(() => {
            productService.value.getProducts().then(data => products.value = data);
        })

        const toast = useToast();
        const dt = ref();
        const products = ref();
        const productDialog = ref(false);
        const deleteProductDialog = ref(false);
        const deleteProductsDialog = ref(false);
        const product = ref({});
        const productService = ref(new ProductService());
        const selectedProducts = ref();
        const filters = ref({
            'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
        });
        const submitted = ref(false);
        const statuses = ref([
	     	{label: 'INSTOCK', value: 'instock'},
	     	{label: 'LOWSTOCK', value: 'lowstock'},
	     	{label: 'OUTOFSTOCK', value: 'outofstock'}
        ]);

        const formatCurrency = (value) => {
            if(value)
				return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
			return;
        };
        const openNew = () => {
            product.value = {};
            submitted.value = false;
            productDialog.value = true;
        };
        const hideDialog = () => {
            productDialog.value = false;
            submitted.value = false;
        };
        const saveProduct = () => {
            submitted.value = true;

			if (product.value.name.trim()) {
                if (product.value.id) {
                    product.value.inventoryStatus = product.value.inventoryStatus.value ? product.value.inventoryStatus.value : product.value.inventoryStatus;
                    products.value[findIndexById(product.value.id)] = product.value;
                    toast.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
                }
                else {
                    product.value.id = createId();
                    product.value.code = createId();
                    product.value.image = 'product-placeholder.svg';
                    product.value.inventoryStatus = product.value.inventoryStatus ? product.value.inventoryStatus.value : 'INSTOCK';
                    products.value.push(product.value);
                    toast.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
                }

                productDialog.value = false;
                product.value = {};
            }
        };
        const editProduct = (prod) => {
            product.value = {...prod};
            productDialog.value = true;
        };
        const confirmDeleteProduct = (prod) => {
            product.value = prod;
            deleteProductDialog.value = true;
        };
        const deleteProduct = () => {
            products.value = products.value.filter(val => val.id !== product.value.id);
            deleteProductDialog.value = false;
            product.value = {};
            toast.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
        };
        const findIndexById = (id) => {
            let index = -1;
            for (let i = 0; i < products.value.length; i++) {
                if (products.value[i].id === id) {
                    index = i;
                    break;
                }
            }

            return index;
        };
        const createId = () => {
            let id = '';
            var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            for ( var i = 0; i < 5; i++ ) {
                id += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return id;
        }
        const exportCSV = () => {
            dt.value.exportCSV();
        };
        const confirmDeleteSelected = () => {
            deleteProductsDialog.value = true;
        };
        const deleteSelectedProducts = () => {
            products.value = products.value.filter(val => !selectedProducts.value.includes(val));
            deleteProductsDialog.value = false;
            selectedProducts.value = null;
            toast.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
        };

        return { dt, products, productDialog, deleteProductDialog, deleteProductsDialog, product, 
            selectedProducts, filters, submitted, statuses, formatCurrency, openNew, hideDialog, saveProduct, editProduct,
            confirmDeleteProduct, deleteProduct, findIndexById, createId, exportCSV, confirmDeleteSelected, deleteSelectedProducts}
    }
}
<\\/script>

<style lang="scss" scoped>
.table-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 960px) {
        align-items: start;
	}
}

.product-image {
    width: 50px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.p-dialog .product-image {
    width: 50px;
    margin: 0 auto 2rem auto;
    display: block;
}

.confirmation-content {
    display: flex;
    align-items: center;
    justify-content: center;
}
@media screen and (max-width: 960px) {
	::v-deep(.p-toolbar) {
		flex-wrap: wrap;
        
		.p-button {
            margin-bottom: 0.25rem;
        }
	}
}
</style>
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/datatable/datatable.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/toolbar/toolbar.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/fileupload/fileupload.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/rating/rating.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/toast/toast.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/toastservice/toastservice.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/textarea/textarea.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/radiobutton/radiobutton.min.js"><\\/script>
        <script src="./ProductService.js"><\\/script>`,
                    content: `<div id="app">
            <div class="card">
                <p-toast></p-toast>

                <p-toolbar class="mb-4">
                    <template #start>
                        <p-button label="New" icon="pi pi-plus" class="p-button-success mr-2" @click="openNew"></p-button>
                        <p-button label="Delete" icon="pi pi-trash" class="p-button-danger" @click="confirmDeleteSelected" :disabled="!selectedProducts || !selectedProducts.length"></p-button>
                    </template>

                    <template #end>
                        <p-fileupload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" chooseLabel="Import" class="mr-2 inline-block"></p-fileupload>
                        <p-button label="Export" icon="pi pi-upload" class="p-button-help" @click="exportCSV($event)"></p-button>
                    </template>
                </p-toolbar>

                <p-datatable ref="dt" :value="products" v-model:selection="selectedProducts" dataKey="id"
                    :paginator="true" :rows="10" :filters="filters"
                    paginator-template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rows-per-page-options="[5,10,25]"
                    current-page-report-template="Showing {first} to {last} of {totalRecords} products" responsive-layout="scroll">
                    <template #header>
                        <div class="table-header flex flex-column md:flex-row md:justiify-content-between">
							<h5 class="mb-2 md:m-0 p-as-md-center">Manage Products</h5>
							<span class="p-input-icon-left">
                                <i class="pi pi-search"></i>
                                <p-inputtext v-model="filters['global'].value" placeholder="Search..."></p-inputtext>
                            </span>
						</div>
                    </template>

                    <column selectionMode="multiple" style="width: 3rem" :exportable="false"></column>
                    <column field="code" header="Code" :sortable="true" style="min-width:12rem"></column>
                    <column field="name" header="Name" :sortable="true" style="min-width:16rem"></column>
                    <column header="Image">
                         <template #body="slotProps">
                            <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="product-image" />
                        </template>
                    </column>
                    <column field="price" header="Price" :sortable="true" style="min-width:8rem">
                        <template #body="slotProps">
                            {{formatCurrency(slotProps.data.price)}}
                        </template>
                    </column>
                    <column field="category" header="Category" :sortable="true" style="min-width:10rem"></column>
                    <column field="rating" header="Reviews" :sortable="true" style="min-width:12rem">
                        <template #body="slotProps">
                           <p-rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false"></p-rating>
                        </template>
                    </column>
                    <column field="inventoryStatus" header="Status" :sortable="true" style="min-width:12rem">
                        <template #body="slotProps">
                            <span :class="'product-badge status-' + (slotProps.data.inventoryStatus ? slotProps.data.inventoryStatus.toLowerCase() : '')">{{slotProps.data.inventoryStatus}}</span>
                        </template>
                    </column>
                    <column :exportable="false" style="min-width:8rem">
                        <template #body="slotProps">
                            <p-button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2" @click="editProduct(slotProps.data)"></p-button>
                            <p-button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="confirmDeleteProduct(slotProps.data)"></p-button>
                        </template>
                    </column>
                </p-datatable>
            </div>

            <p-dialog v-model:visible="productDialog" :style="{width: '450px'}" header="Product Details" :modal="true" class="p-fluid">
                <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="product-image" v-if="product.image" />
                <div class="field">
                    <label for="name">Name</label>
                    <p-inputtext id="name" v-model.trim="product.name" required="true" autofocus :class="{'p-invalid': submitted && !product.name}"></p-inputtext>
                    <small class="p-error" v-if="submitted && !product.name">Name is required.</small>
                </div>
                <div class="field">
                    <label for="description">Description</label>
                    <p-textarea id="description" v-model="product.description" required="true" rows="3" cols="20"></p-textarea>
                </div>

                <div class="field">
					<label for="inventoryStatus" class="mb-3">Inventory Status</label>
					<p-dropdown id="inventoryStatus" v-model="product.inventoryStatus" :options="statuses" option-label="label" placeholder="Select a Status">
						<template #value="slotProps">
							<div v-if="slotProps.value && slotProps.value.value">
								<span :class="'product-badge status-' +slotProps.value.value">{{slotProps.value.label}}</span>
							</div>
							<div v-else-if="slotProps.value && !slotProps.value.value">
								<span :class="'product-badge status-' +slotProps.value.toLowerCase()">{{slotProps.value}}</span>
							</div>
							<span v-else>
								{{slotProps.placeholder}}
							</span>
						</template>
					</p-dropdown>
				</div>

                <div class="field">
                    <label class="mb-3">Category</label>
                    <div class="formgrid grid">
                        <div class="field-radiobutton col-6">
                            <p-radiobutton id="category1" name="category" value="Accessories" v-model="product.category"></p-radiobutton>
                            <label for="category1">Accessories</label>
                        </div>
                        <div class="field-radiobutton col-6">
                            <p-radiobutton id="category2" name="category" value="Clothing" v-model="product.category"></p-radiobutton>
                            <label for="category2">Clothing</label>
                        </div>
                        <div class="field-radiobutton col-6">
                            <p-radiobutton id="category3" name="category" value="Electronics" v-model="product.category"></p-radiobutton>
                            <label for="category3">Electronics</label>
                        </div>
                        <div class="field-radiobutton col-6">
                            <p-radiobutton id="category4" name="category" value="Fitness" v-model="product.category"></p-radiobutton>
                            <label for="category4">Fitness</label>
                        </div>
                    </div>
                </div>

                <div class="formgrid grid">
                    <div class="field col">
                        <label for="price">Price</label>
                        <p-inputnumber id="price" v-model="product.price" mode="currency" currency="USD" locale="en-US"></p-inputnumber></p-inputnumber>
                    </div>
                    <div class="field col">
                        <label for="quantity">Quantity</label>
                        <p-inputnumber id="quantity" v-model="product.quantity" integeronly></p-inputnumber>
                    </div>
                </div>
                <template #footer>
                    <p-button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog"></p-button>
                    <p-button label="Save" icon="pi pi-check" class="p-button-text" @click="saveProduct"></p-button>
                </template>
            </p-dialog>

            <p-dialog v-model:visible="deleteProductDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
                <div class="confirmation-content">
                    <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem"></i>
                    <span v-if="product">Are you sure you want to delete <b>{{product.name}}</b>?</span>
                </div>
                <template #footer>
                    <p-button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductDialog = false"></p-button>
                    <p-button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteProduct"></p-button>
                </template>
            </p-dialog>

            <p-dialog v-model:visible="deleteProductsDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
                <div class="confirmation-content">
                    <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem"></i>
                    <span v-if="product">Are you sure you want to delete the selected products?</span>
                </div>
                <template #footer>
                    <p-button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductsDialog = false"></p-button>
                    <p-button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteSelectedProducts"></p-button>
                </template>
            </p-dialog>            
        </div>

        <script type="module">
            const { createApp, onMounted, ref } = Vue;
            const { useToast } = primevue.usetoast;
            const { FilterMatchMode } = primevue.api;

            const App = {
                setup() {
                    onMounted(() => {
                        productService.value.getProducts().then(data => products.value = data);
                    })

                    const toast = useToast();
                    const dt = ref();
                    const products = ref();
                    const productDialog = ref(false);
                    const deleteProductDialog = ref(false);
                    const deleteProductsDialog = ref(false);
                    const product = ref({});
                    const productService = ref(new ProductService());
                    const selectedProducts = ref();
                    const filters = ref({
                        'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
                    });
                    const submitted = ref(false);
                    const statuses = ref([
	                 	{label: 'INSTOCK', value: 'instock'},
	                 	{label: 'LOWSTOCK', value: 'lowstock'},
	                 	{label: 'OUTOFSTOCK', value: 'outofstock'}
                    ]);

                    const formatCurrency = (value) => {
                        if(value)
		            		return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
		            	return;
                    };
                    const openNew = () => {
                        product.value = {};
                        submitted.value = false;
                        productDialog.value = true;
                    };
                    const hideDialog = () => {
                        productDialog.value = false;
                        submitted.value = false;
                    };
                    const saveProduct = () => {
                        submitted.value = true;

		            	if (product.value.name.trim()) {
                            if (product.value.id) {
                                product.value.inventoryStatus = product.value.inventoryStatus.value ? product.value.inventoryStatus.value : product.value.inventoryStatus;
                                products.value[findIndexById(product.value.id)] = product.value;
                                toast.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
                            }
                            else {
                                product.value.id = createId();
                                product.value.code = createId();
                                product.value.image = 'product-placeholder.svg';
                                product.value.inventoryStatus = product.value.inventoryStatus ? product.value.inventoryStatus.value : 'INSTOCK';
                                products.value.push(product.value);
                                toast.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
                            }

                            productDialog.value = false;
                            product.value = {};
                        }
                    };
                    const editProduct = (prod) => {
                        product.value = {...prod};
                        productDialog.value = true;
                    };
                    const confirmDeleteProduct = (prod) => {
                        product.value = prod;
                        deleteProductDialog.value = true;
                    };
                    const deleteProduct = () => {
                        products.value = products.value.filter(val => val.id !== product.value.id);
                        deleteProductDialog.value = false;
                        product.value = {};
                        toast.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
                    };
                    const findIndexById = (id) => {
                        let index = -1;
                        for (let i = 0; i < products.value.length; i++) {
                            if (products.value[i].id === id) {
                                index = i;
                                break;
                            }
                        }

                        return index;
                    };
                    const createId = () => {
                        let id = '';
                        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                        for ( var i = 0; i < 5; i++ ) {
                            id += chars.charAt(Math.floor(Math.random() * chars.length));
                        }
                        return id;
                    }
                    const exportCSV = () => {
                        dt.value.exportCSV();
                    };
                    const confirmDeleteSelected = () => {
                        deleteProductsDialog.value = true;
                    };
                    const deleteSelectedProducts = () => {
                        products.value = products.value.filter(val => !selectedProducts.value.includes(val));
                        deleteProductsDialog.value = false;
                        selectedProducts.value = null;
                        toast.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
                    };

                    return { dt, products, productDialog, deleteProductDialog, deleteProductsDialog, product, 
                        selectedProducts, filters, submitted, statuses, formatCurrency, openNew, hideDialog, saveProduct, editProduct,
                        confirmDeleteProduct, deleteProduct, findIndexById, createId, exportCSV, confirmDeleteSelected, deleteSelectedProducts}
                },
                components: {
                    "p-datatable": primevue.datatable,
                    "column": primevue.column,
                    "p-toolbar": primevue.toolbar,
                    "p-fileupload": primevue.fileupload,
                    "p-rating": primevue.rating,
                    "p-toast": primevue.toast,
                    "p-inputtext": primevue.inputtext,
                    "p-inputnumber": primevue.inputnumber,
                    "p-button": primevue.button,
                    "p-dialog": primevue.dialog,
                    "p-textarea": primevue.textarea,
                    "p-dropdown": primevue.dropdown,
                    "p-radiobutton": primevue.radiobutton
                }
            };

            createApp(App)
                .use(primevue.config.default)
                .use(primevue.toastservice)
                .mount("#app");
        <\\/script>
        
        <style lang="scss" scoped>
        .table-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .product-image {
            width: 50px;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        }

        .p-dialog .product-image {
            width: 50px;
            margin: 0 auto 2rem auto;
            display: block;
        }

        .confirmation-content {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        @media screen and (max-width: 960px) {
            .table-header {
                align-items: start;
            }

            .p-toolbar {
                flex-wrap: wrap;
            }
                
            .p-toolbar .p-button {
                margin-bottom: 0.25rem;
            }
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
        this.initFilters();
    },
    mounted() {
        this.productService.getProducts().then(data => this.products = data);
    },
    methods: {
        formatCurrency(value) {
            if(value)
				return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
			return;
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
                    this.product.inventoryStatus = this.product.inventoryStatus.value ? this.product.inventoryStatus.value: this.product.inventoryStatus;
                    this.products[this.findIndexById(this.product.id)] = this.product;
                    this.$toast.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
                }
                else {
                    this.product.id = this.createId();
                    this.product.code = this.createId();
                    this.product.image = 'product-placeholder.svg';
                    this.product.inventoryStatus = this.product.inventoryStatus ? this.product.inventoryStatus.value : 'INSTOCK';
                    this.products.push(this.product);
                    this.$toast.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
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
            this.$toast.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
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
            this.$toast.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
        },
        initFilters() {
            this.filters = {
                'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.table-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 960px) {
        align-items: start;
	}
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

.confirmation-content {
    display: flex;
    align-items: center;
    justify-content: center;
}

@media screen and (max-width: 960px) {
	::v-deep(.p-toolbar) {
		flex-wrap: wrap;

		.p-button {
            margin-bottom: 0.25rem;
        }
	}
}
</style>