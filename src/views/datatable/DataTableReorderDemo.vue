<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>Reorder</span></h1>
				<p>Order of the columns and rows can be changed using drag and drop.</p>
			</div>
		</div>

		<div class="content-section implementation">
            <div class="card">
                <DataTable :value="products" :reorderableColumns="true" @column-reorder="onColReorder" @row-reorder="onRowReorder" responsiveLayout="scroll">
                    <Column :rowReorder="true" headerStyle="width: 3rem" :reorderableColumn="false" />
                    <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"></Column>
                </DataTable>
            </div>
		</div>

        <AppDoc name="DataTableReorderDemo" :sources="sources" :service="['ProductService']" :data="['products-small']" />

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