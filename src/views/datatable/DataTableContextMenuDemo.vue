<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>ContextMenu</span></h1>
				<p>CDataTable has exclusive integration with ContextMenu.</p>
			</div>
		</div>

		<div class="content-section implementation">
            <div class="card">
                <DataTable :value="products" contextMenu v-model:contextMenuSelection="selectedProduct" @row-contextmenu="onRowContextMenu">
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

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;DataTable :value="products" contextMenu :contextMenuSelection.sync="selectedProduct" @row-contextmenu="onRowContextMenu"&gt;
    &lt;Column field="code" header="Code"&gt;&lt;/Column&gt;
    &lt;Column field="name" header="Name"&gt;&lt;/Column&gt;
    &lt;Column field="category" header="Category"&gt;&lt;/Column&gt;
    &lt;Column field="price" header="Price"&gt;
        &lt;template #body="slotProps"&gt;
            {{formatCurrency(slotProps.data.price)}}
        &lt;/template&gt;
    &lt;/Column&gt;
&lt;/DataTable&gt;

&lt;ContextMenu :model="menuModel" ref="cm" /&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import ProductService from '../../service/ProductService';

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
            this.$toast.add({severity: 'info', summary: 'Product Deleted', detail: product.name});
            this.selectedProduct = null;
        },
        formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
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
            this.$toast.add({severity: 'info', summary: 'Product Deleted', detail: product.name});
            this.selectedProduct = null;
        },
        formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        }
    }
}
</script>