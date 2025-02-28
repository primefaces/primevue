<template>
    <DocSectionText v-bind="$attrs">
        <p>Order of the columns and rows can be changed using drag and drop. Column reordering is configured by adding <i>reorderableColumns</i> property.</p>
        <p>
            Similarly, adding <i>rowReorder</i> property to a column enables draggable rows. For the drag handle a column needs to have <i>rowReorder</i> property and table needs to have <i>row-reorder</i> event is required to control the state of
            the rows after reorder completes.
        </p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <DataTable :value="products" reorderableColumns @column-reorder="onColReorder" @row-reorder="onRowReorder" tableStyle="min-width: 50rem">
                <Column rowReorder headerStyle="width: 3rem" :reorderableColumn="false" />
                <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"></Column>
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
            columns: null,
            products: null,
            code: {
                basic: `
<DataTable :value="products" :reorderableColumns="true" @columnReorder="onColReorder" @rowReorder="onRowReorder" tableStyle="min-width: 50rem">
    <Column rowReorder headerStyle="width: 3rem" :reorderableColumn="false" />
    <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"></Column>
</DataTable>
`,
                options: `
<template>
	<div>
        <DataTable :value="products" :reorderableColumns="true" @columnReorder="onColReorder" @rowReorder="onRowReorder" tableStyle="min-width: 50rem">
            <Column rowReorder headerStyle="width: 3rem" :reorderableColumn="false" />
            <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"></Column>
        </DataTable>
        <Toast />
	</div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            columns: null,
            products: null
        }
    },
    created() {
        this.columns = [
            {field: 'code', header: 'Code'},
            {field: 'name', header: 'Name'},
            {field: 'category', header: 'Category'},
            {field: 'quantity', header: 'Quantity'}
        ];
    },
    mounted() {
        ProductService.getProductsMini().then(data => this.products = data);
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
<\/script>

`,
                composition: `
<template>
	<div>
        <DataTable :value="products" :reorderableColumns="true" @columnReorder="onColReorder" @rowReorder="onRowReorder" tableStyle="min-width: 50rem">
            <Column rowReorder headerStyle="width: 3rem" :reorderableColumn="false" />
            <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"></Column>
        </DataTable>
        <Toast />
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then(data => products.value = data);
});

const toast = useToast();
const columns = ref([
    {field: 'code', header: 'Code'},
    {field: 'name', header: 'Name'},
    {field: 'category', header: 'Category'},
    {field: 'quantity', header: 'Quantity'}
]);
const products = ref();

const onColReorder = () => {
    toast.add({severity:'success', summary: 'Column Reordered', life: 3000});
};
const onRowReorder = (event) => {
    products.value = event.value;
    toast.add({severity:'success', summary: 'Rows Reordered', life: 3000});
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
    rating: 5
},
...`
            }
        };
    },
    created() {
        this.columns = [
            { field: 'code', header: 'Code' },
            { field: 'name', header: 'Name' },
            { field: 'category', header: 'Category' },
            { field: 'quantity', header: 'Quantity' }
        ];
    },
    methods: {
        loadDemoData() {
            ProductService.getProductsMini().then((data) => (this.products = data));
        },
        onColReorder() {
            this.$toast.add({ severity: 'success', summary: 'Column Reordered', life: 3000 });
        },
        onRowReorder(event) {
            this.products = event.value;
            this.$toast.add({ severity: 'success', summary: 'Rows Reordered', life: 3000 });
        }
    }
};
</script>
