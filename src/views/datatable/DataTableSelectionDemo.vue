<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>Selection</span></h1>
				<p>DataTable provides single and multiple selection modes based on row click or using radio button and checkbox elements.</p>
			</div>
		</div>

		<div class="content-section implementation">
            <div class="card">
                <h5>Single</h5>
                <p>In single mode, a row is selected on click event of a row. If the row is already selected then the row gets unselected.</p>
                <DataTable :value="products" :selection.sync="selectedProduct1" selectionMode="single" dataKey="id">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>

            <div class="card">
                <h5>Multiple</h5>
                <p>In multiple mode, selection binding should be an array. For touch enabled devices, selection is managed by tapping and for other devices metakey or shiftkey are required.
                        Setting metaKeySelection property as false enables multiple selection without meta key.</p>
                <DataTable :value="products" :selection.sync="selectedProducts1" selectionMode="multiple" dataKey="id">
                    <template #header>
                        Multiple Selection with MetaKey
                    </template>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>

                <DataTable :value="products" :selection.sync="selectedProducts2" selectionMode="multiple" dataKey="id" :metaKeySelection="false" style="margin-top: 2em">
                    <template #header>
                        Multiple Selection without MetaKey
                    </template>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>

            <div class="card">
                <h5>Events</h5>
                <p>row-select and row-unselects are available as selection events.</p>
                <DataTable :value="products" :selection.sync="selectedProduct2" selectionMode="single" dataKey="id"
                    @row-select="onRowSelect" @row-unselect="onRowUnselect">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>

            <div class="card">
                <h5>RadioButton</h5>
                <p>Single selection can also be handled using radio buttons by enabling the selectionMode property of column as "single".</p>
                <DataTable :value="products" :selection.sync="selectedProduct3" dataKey="id">
                    <Column selectionMode="single" headerStyle="width: 3em"></Column>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>

            <div class="card">
                <h5>Checkbox</h5>
                
                <DataTable :value="products" :selection.sync="selectedProducts3" dataKey="id">
                    <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>
		</div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;div class="card"&gt;
    &lt;h5&gt;Single&lt;/h5&gt;
    &lt;p&gt;In single mode, a row is selected on click event of a row. If the row is already selected then the row gets unselected.&lt;/p&gt;
    &lt;DataTable :value="products" :selection.sync="selectedProduct1" selectionMode="single" dataKey="id"&gt;
        &lt;Column field="code" header="Code"&gt;&lt;/Column&gt;
        &lt;Column field="name" header="Name"&gt;&lt;/Column&gt;
        &lt;Column field="category" header="Category"&gt;&lt;/Column&gt;
        &lt;Column field="quantity" header="Quantity"&gt;&lt;/Column&gt;
    &lt;/DataTable&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
    &lt;h5&gt;Multiple&lt;/h5&gt;
    &lt;p&gt;In multiple mode, selection binding should be an array. For touch enabled devices, selection is managed by tapping and for other devices metakey or shiftkey are required.
            Setting metaKeySelection property as false enables multiple selection without meta key.&lt;/p&gt;
    &lt;DataTable :value="products" :selection.sync="selectedProducts1" selectionMode="multiple" dataKey="id"&gt;
        &lt;template #header&gt;
            Multiple Selection with MetaKey
        &lt;/template&gt;
        &lt;Column field="code" header="Code"&gt;&lt;/Column&gt;
        &lt;Column field="name" header="Name"&gt;&lt;/Column&gt;
        &lt;Column field="category" header="Category"&gt;&lt;/Column&gt;
        &lt;Column field="quantity" header="Quantity"&gt;&lt;/Column&gt;
    &lt;/DataTable&gt;

    &lt;DataTable :value="products" :selection.sync="selectedProducts2" selectionMode="multiple" dataKey="id" :metaKeySelection="false" style="margin-top: 2em"&gt;
        &lt;template #header&gt;
            Multiple Selection without MetaKey
        &lt;/template&gt;
        &lt;Column field="code" header="Code"&gt;&lt;/Column&gt;
        &lt;Column field="name" header="Name"&gt;&lt;/Column&gt;
        &lt;Column field="category" header="Category"&gt;&lt;/Column&gt;
        &lt;Column field="quantity" header="Quantity"&gt;&lt;/Column&gt;
    &lt;/DataTable&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
    &lt;h5&gt;Events&lt;/h5&gt;
    &lt;p&gt;row-select and row-unselects are available as selection events.&lt;/p&gt;
    &lt;DataTable :value="products" :selection.sync="selectedProduct2" selectionMode="single" dataKey="id"
        @row-select="onRowSelect" @row-unselect="onRowUnselect"&gt;
        &lt;Column field="code" header="Code"&gt;&lt;/Column&gt;
        &lt;Column field="name" header="Name"&gt;&lt;/Column&gt;
        &lt;Column field="category" header="Category"&gt;&lt;/Column&gt;
        &lt;Column field="quantity" header="Quantity"&gt;&lt;/Column&gt;
    &lt;/DataTable&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
    &lt;h5&gt;RadioButton&lt;/h5&gt;
    &lt;p&gt;Single selection can also be handled using radio buttons by enabling the selectionMode property of column as "single".&lt;/p&gt;
    &lt;DataTable :value="products" :selection.sync="selectedProduct3" dataKey="id"&gt;
        &lt;Column selectionMode="single" headerStyle="width: 3em"&gt;&lt;/Column&gt;
        &lt;Column field="code" header="Code"&gt;&lt;/Column&gt;
        &lt;Column field="name" header="Name"&gt;&lt;/Column&gt;
        &lt;Column field="category" header="Category"&gt;&lt;/Column&gt;
        &lt;Column field="quantity" header="Quantity"&gt;&lt;/Column&gt;
    &lt;/DataTable&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
    &lt;h5&gt;Checkbox&lt;/h5&gt;
    &lt;p&gt;Multiple selection can also be handled using checkboxes by enabling the selectionMode property of column as "multiple".&lt;/p&gt;
    &lt;DataTable :value="products" :selection.sync="selectedProducts3" dataKey="id"&gt;
        &lt;Column selectionMode="multiple" headerStyle="width: 3em"&gt;&lt;/Column&gt;
        &lt;Column field="code" header="Code"&gt;&lt;/Column&gt;
        &lt;Column field="name" header="Name"&gt;&lt;/Column&gt;
        &lt;Column field="category" header="Category"&gt;&lt;/Column&gt;
        &lt;Column field="quantity" header="Quantity"&gt;&lt;/Column&gt;
    &lt;/DataTable&gt;
&lt;/div&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import ProductService from '../../service/ProductService';

export default {
    data() {
        return {
            products: null,
            selectedProduct1: null,
            selectedProduct2: null,
            selectedProduct3: null,
            selectedProducts1: null,
            selectedProducts2: null,
            selectedProducts3: null
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
        onRowSelect(event) {
            this.$toast.add({severity: 'info', summary: 'Product Selected', detail: 'Name: ' + event.data.name, life: 3000});
        },
        onRowUnselect(event) {
            this.$toast.add({severity: 'warn', summary: 'Product Unselected', detail: 'Name: ' + event.data.name, life: 3000});
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
            selectedProduct1: null,
            selectedProduct2: null,
            selectedProduct3: null,
            selectedProducts1: null,
            selectedProducts2: null,
            selectedProducts3: null
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
        onRowSelect(event) {
            this.$toast.add({severity: 'info', summary: 'Product Selected', detail: 'Name: ' + event.data.name, life: 3000});
        },
        onRowUnselect(event) {
            this.$toast.add({severity: 'warn', summary: 'Product Unselected', detail: 'Name: ' + event.data.name, life: 3000});
        }
    }
}
</script>