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
                <DataTable :value="products" v-model:selection="selectedProduct1" selectionMode="single" dataKey="id" responsiveLayout="scroll" >
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
                <DataTable :value="products" v-model:selection="selectedProducts1" selectionMode="multiple" dataKey="id" responsiveLayout="scroll" >
                    <template #header>
                        Multiple Selection with MetaKey
                    </template>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>

                <DataTable :value="products" v-model:selection="selectedProducts2" selectionMode="multiple" dataKey="id" :metaKeySelection="false" style="margin-top: 2em" responsiveLayout="scroll">
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
                <DataTable :value="products" v-model:selection="selectedProduct2" selectionMode="single" dataKey="id"
                    @row-select="onRowSelect" @row-unselect="onRowUnselect" responsiveLayout="scroll" >
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>

            <div class="card">
                <h5>RadioButton</h5>
                <p>Single selection can also be handled using radio buttons by enabling the selectionMode property of column as "single".</p>
                <DataTable :value="products" v-model:selection="selectedProduct3" dataKey="id" responsiveLayout="scroll" >
                    <Column selectionMode="single" headerStyle="width: 3em"></Column>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>

            <div class="card">
                <h5>Checkbox</h5>

                <DataTable :value="products" v-model:selection="selectedProducts3" dataKey="id" responsiveLayout="scroll" >
                    <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>
		</div>

        <AppDoc name="DataTableSelectionDemo" :sources="sources" service="ProductService" :data="['products-small']" />
                  
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
            selectedProducts3: null,
            sources: {
                'options-api': {
                    tabName: 'Source',
                    content: `
<template>
	<div>
        <Toast />

        <div class="card">
            <h5>Single</h5>
            <DataTable :value="products" v-model:selection="selectedProduct1" selectionMode="single" dataKey="id" responsiveLayout="scroll" >
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>

        <div class="card">
            <h5>Multiple</h5>
            <DataTable :value="products" v-model:selection="selectedProducts1" selectionMode="multiple" dataKey="id" responsiveLayout="scroll" >
                <template #header>
                    Multiple Selection with MetaKey
                </template>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>

            <DataTable :value="products" v-model:selection="selectedProducts2" selectionMode="multiple" dataKey="id" :metaKeySelection="false" style="margin-top: 2em" responsiveLayout="scroll" >
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
            <DataTable :value="products" v-model:selection="selectedProduct2" selectionMode="single" dataKey="id"
                @rowSelect="onRowSelect" @rowUnselect="onRowUnselect" responsiveLayout="scroll">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>

        <div class="card">
            <h5>RadioButton</h5>
            <DataTable :value="products" v-model:selection="selectedProduct3" dataKey="id" responsiveLayout="scroll" >
                <Column selectionMode="single" headerStyle="width: 3em"></Column>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>

        <div class="card">
            <h5>Checkbox</h5>

            <DataTable :value="products" v-model:selection="selectedProducts3" dataKey="id" responsiveLayout="scroll" >
                <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
		</div>    
	</div>
</template>

<script>
import ProductService from './service/ProductService';

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
<\\/script>                 
`
                },
                'composition-api': {
                    tabName: 'Composition API',
                    content: `
<template>
	<div>
        <Toast />

        <div class="card">
            <h5>Single</h5>
            <DataTable :value="products" v-model:selection="selectedProduct1" selectionMode="single" dataKey="id" responsiveLayout="scroll" >
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>

        <div class="card">
            <h5>Multiple</h5>
            <DataTable :value="products" v-model:selection="selectedProducts1" selectionMode="multiple" dataKey="id" responsiveLayout="scroll" >
                <template #header>
                    Multiple Selection with MetaKey
                </template>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>

            <DataTable :value="products" v-model:selection="selectedProducts2" selectionMode="multiple" dataKey="id" :metaKeySelection="false" style="margin-top: 2em" responsiveLayout="scroll" >
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
            <DataTable :value="products" v-model:selection="selectedProduct2" selectionMode="single" dataKey="id"
                @rowSelect="onRowSelect" @rowUnselect="onRowUnselect" responsiveLayout="scroll">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>

        <div class="card">
            <h5>RadioButton</h5>
            <DataTable :value="products" v-model:selection="selectedProduct3" dataKey="id" responsiveLayout="scroll" >
                <Column selectionMode="single" headerStyle="width: 3em"></Column>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>

        <div class="card">
            <h5>Checkbox</h5>

            <DataTable :value="products" v-model:selection="selectedProducts3" dataKey="id" responsiveLayout="scroll" >
                <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
		</div>    
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

        const toast = useToast();
        const products = ref();
        const selectedProduct1 = ref();
        const selectedProduct2 = ref();
        const selectedProduct3 = ref();
        const selectedProducts1 = ref();
        const selectedProducts2 = ref();
        const selectedProducts3 = ref();
        const productService = ref(new ProductService());

        const onRowSelect = (event) => {
            toast.add({severity: 'info', summary: 'Product Selected', detail: 'Name: ' + event.data.name, life: 3000});
        };

        const onRowUnselect = (event) => {
            toast.add({severity: 'warn', summary: 'Product Unselected', detail: 'Name: ' + event.data.name, life: 3000});
        };

        return { products, selectedProduct1, selectedProduct2, selectedProduct3, selectedProducts1, selectedProducts2, selectedProducts3, onRowSelect, onRowUnselect}
    }
}
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
        onRowSelect(event) {
            this.$toast.add({severity: 'info', summary: 'Product Selected', detail: 'Name: ' + event.data.name, life: 3000});
        },
        onRowUnselect(event) {
            this.$toast.add({severity: 'warn', summary: 'Product Unselected', detail: 'Name: ' + event.data.name, life: 3000});
        }
    }
}
</script>