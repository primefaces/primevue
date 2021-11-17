<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>Reorder</span></h1>
				<p>Order of the columns and rows can be changed using drag and drop.</p>
			</div>
            <AppDemoActions />
		</div>

		<div class="content-section implementation">
            <div class="card">
                <DataTable :value="products" :reorderableColumns="true" @column-reorder="onColReorder" @row-reorder="onRowReorder" responsiveLayout="scroll">
                    <Column :rowReorder="true" headerStyle="width: 3rem" :reorderableColumn="false" />
                    <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"></Column>
                </DataTable>
            </div>
		</div>

        <AppDoc name="DataTableReorderDemo" :sources="sources" :service="['ProductService']" :data="['products-small']" github="datatable/DataTableReorderDemo.vue" />

	</div>
</template>

<script>
import ProductService from '../../service/ProductService';

export default {
    data() {
        return {
            columns: null,
            products: null,
            sources: {
                'options-api': {
                    tabName: 'Options API Source',
                    content: `
<template>
	<div>
        <Toast />

        <DataTable :value="products" :reorderableColumns="true" @columnReorder="onColReorder" @rowReorder="onRowReorder" responsiveLayout="scroll">
            <Column :rowReorder="true" headerStyle="width: 3rem" :reorderableColumn="false" />
            <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"></Column>
        </DataTable>
	</div>
</template>

<script>
import ProductService from './service/ProductService';

export default {
    data() {
        return {
            columns: null,
            products: null
        }
    },
    productService: null,
    created() {
        this.productService = new ProductService();

        this.columns = [
            {field: 'code', header: 'Code'},
            {field: 'name', header: 'Name'},
            {field: 'category', header: 'Category'},
            {field: 'quantity', header: 'Quantity'}
        ];
    },
    mounted() {
        this.productService.getProductsSmall().then(data => this.products = data);
    },
    methods: {
        onColReorder() {
            this.$toast.add({severity:'success', summary: 'Column Reordered', life: 3000});
        },
        onRowReorder(event) {
            this.products = event.value;
            this.$toast.add({severity:'success', summary: 'Rows Reordered', life: 3000});
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
        <DataTable :value="products" :reorderableColumns="true" @columnReorder="onColReorder" @rowReorder="onRowReorder" responsiveLayout="scroll">
            <Column :rowReorder="true" headerStyle="width: 3rem" :reorderableColumn="false" />
            <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"></Column>
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
            productService.value.getProductsSmall().then(data => products.value = data);
        }) 

        const toast = useToast();
        const columns = ref([
            {field: 'code', header: 'Code'},
            {field: 'name', header: 'Name'},
            {field: 'category', header: 'Category'},
            {field: 'quantity', header: 'Quantity'}
        ]);
        const products = ref();
        const productService = ref(new ProductService());

        const onColReorder = () => {
            toast.add({severity:'success', summary: 'Column Reordered', life: 3000});
        };
        const onRowReorder = (event) => {
            products.value = event.value;
            toast.add({severity:'success', summary: 'Rows Reordered', life: 3000});
        };

        return { columns, products, onColReorder, onRowReorder }
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
        <script src="https://unpkg.com/primevue@^3/toastservice/toastservice.min.js"><\\/script>
        <script src="./ProductService.js"><\\/script>`,
                    content: `<div id="app">
            <p-toast></p-toast>
            <p-datatable :value="products" :reorderable-columns="true" @column-reorder="onColReorder" @row-reorder="onRowReorder" responsive-layout="scroll">
                <p-column :row-reorder="true" header-style="width: 3rem" :reorderable-column="false"></p-column>
                <p-column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"></p-column>
            </p-datatable>
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
                const columns = ref([
                    {field: 'code', header: 'Code'},
                    {field: 'name', header: 'Name'},
                    {field: 'category', header: 'Category'},
                    {field: 'quantity', header: 'Quantity'}
                ]);
                const products = ref();
                const productService = ref(new ProductService());

                const onColReorder = () => {
                    toast.add({severity:'success', summary: 'Column Reordered', life: 3000});
                };
                const onRowReorder = (event) => {
                    products.value = event.value;
                    toast.add({severity:'success', summary: 'Rows Reordered', life: 3000});
                };

                return { columns, products, onColReorder, onRowReorder }
            },
            components: {
                "p-datatable": primevue.datatable,
                "p-column": primevue.column,
                "p-toast": primevue.toast
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

        this.columns = [
            {field: 'code', header: 'Code'},
            {field: 'name', header: 'Name'},
            {field: 'category', header: 'Category'},
            {field: 'quantity', header: 'Quantity'}
        ];
    },
    mounted() {
        this.productService.getProductsSmall().then(data => this.products = data);
    },
    methods: {
        onColReorder() {
            this.$toast.add({severity:'success', summary: 'Column Reordered', life: 3000});
        },
        onRowReorder(event) {
            this.products = event.value;
            this.$toast.add({severity:'success', summary: 'Rows Reordered', life: 3000});
        }
    }
}
</script>