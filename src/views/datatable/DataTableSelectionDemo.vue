<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>Selection</span></h1>
				<p>DataTable provides single and multiple selection modes based on row click or using radio button and checkbox elements.</p>
			</div>
            <AppDemoActions />
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

                <DataTable :value="products" v-model:selection="selectedProducts3" dataKey="id" responsiveLayout="scroll">
                    <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>
		</div>

        <AppDoc name="DataTableSelectionDemo" :sources="sources" :service="['ProductService']" :data="['products-small']" github="datatable/DataTableSelectionDemo.vue" />

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
                    tabName: 'Options API Source',
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
                    tabName: 'Composition API Source',
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
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/datatable/datatable.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/toast/toast.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/usetoast/usetoast.min.js"><\\/script>
        <script src="./ProductService.js"><\\/script>`,
                    content: `<div id="app">
            <p-toast></p-toast>

            <div class="card">
                <h5>Single</h5>
                <p-datatable :value="products" v-model:selection="selectedProduct1" selection-mode="single" dataKey="id" responsive-layout="scroll" >
                    <p-column field="code" header="Code"></p-column>
                    <p-column field="name" header="Name"></p-column>
                    <p-column field="category" header="Category"></p-column>
                    <p-column field="quantity" header="Quantity"></p-column>
                </p-datatable>
            </div>

            <div class="card">
                <h5>Multiple</h5>
                <p-datatable :value="products" v-model:selection="selectedProducts1" selection-mode="multiple" dataKey="id" responsive-layout="scroll" >
                    <template #header>
                        Multiple Selection with MetaKey
                    </template>
                    <p-column field="code" header="Code"></p-column>
                    <p-column field="name" header="Name"></p-column>
                    <p-column field="category" header="Category"></p-column>
                    <p-column field="quantity" header="Quantity"></p-column>
                </p-datatable>

                <p-datatable :value="products" v-model:selection="selectedProducts2" selection-mode="multiple" dataKey="id" :meta-key-selection="false" style="margin-top: 2em" responsive-layout="scroll" >
                    <template #header>
                        Multiple Selection without MetaKey
                    </template>
                    <p-column field="code" header="Code"></p-column>
                    <p-column field="name" header="Name"></p-column>
                    <p-column field="category" header="Category"></p-column>
                    <p-column field="quantity" header="Quantity"></p-column>
                </p-datatable>
            </div>

            <div class="card">
                <h5>Events</h5>
                <p-datatable :value="products" v-model:selection="selectedProduct2" selection-mode="single" dataKey="id"
                    @row-select="onRowSelect" @row-unselect="onRowUnselect" responsive-layout="scroll">
                    <p-column field="code" header="Code"></p-column>
                    <p-column field="name" header="Name"></p-column>
                    <p-column field="category" header="Category"></p-column>
                    <p-column field="quantity" header="Quantity"></p-column>
                </p-datatable>
            </div>

            <div class="card">
                <h5>RadioButton</h5>
                <p-datatable :value="products" v-model:selection="selectedProduct3" dataKey="id" responsive-layout="scroll" >
                    <p-column selection-mode="single" header-style="width: 3em"></p-column>
                    <p-column field="code" header="Code"></p-column>
                    <p-column field="name" header="Name"></p-column>
                    <p-column field="category" header="Category"></p-column>
                    <p-column field="quantity" header="Quantity"></p-column>
                </p-datatable>
            </div>

            <div class="card">
                <h5>Checkbox</h5>

                <p-datatable :value="products" v-model:selection="selectedProducts3" dataKey="id" responsive-layout="scroll" >
                    <p-column selection-mode="multiple" header-style="width: 3em"></p-column>
                    <p-column field="code" header="Code"></p-column>
                    <p-column field="name" header="Name"></p-column>
                    <p-column field="category" header="Category"></p-column>
                    <p-column field="quantity" header="Quantity"></p-column>
                </p-datatable>
            </div>
        </div>

    <script type="module">
    const { createApp, ref, onMounted } = Vue;
    const { useToast } = primevue.usetoast;

    const App = {
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
        },
        components: {
            "p-datatable": primevue.datatable,
            "p-column": primevue.column,
            "p-toast": primevue.toast
        }
    };

    createApp(App)
            .use(primevue.config.default)
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
        onRowSelect(event) {
            this.$toast.add({severity: 'info', summary: 'Product Selected', detail: 'Name: ' + event.data.name, life: 3000});
        },
        onRowUnselect(event) {
            this.$toast.add({severity: 'warn', summary: 'Product Unselected', detail: 'Name: ' + event.data.name, life: 3000});
        }
    }
}
</script>
