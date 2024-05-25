<template>
    <DocSectionText v-bind="$attrs">
        <p>Particular rows and cells can be styled based on conditions. The <i>rowClass</i> receives a row data as a parameter to return a style class for a row whereas cells are customized using the <i>body</i> template.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <DataTable :value="products" :rowClass="rowClass" :rowStyle="rowStyle" tableStyle="min-width: 50rem">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity">
                    <template #body="slotProps">
                        <Badge :value="slotProps.data.quantity" :severity="stockSeverity(slotProps.data)" />
                    </template>
                </Column>
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
            products: null,
            code: {
                basic: `
<DataTable :value="products" :rowClass="rowClass" :rowStyle="rowStyle" tableStyle="min-width: 50rem">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity">
        <template #body="slotProps">
            <Badge :value="slotProps.data.quantity" :severity="stockSeverity(slotProps.data)" />
        </template>
    </Column>
</DataTable>
`,
                options: `
<template>
    <div class="card">
        <DataTable :value="products" :rowClass="rowClass" :rowStyle="rowStyle" tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity">
                <template #body="slotProps">
                    <Badge :value="slotProps.data.quantity" :severity="stockSeverity(slotProps.data)" />
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null
        };
    },
    mounted() {
        ProductService.getProductsSmall().then((data) => (this.products = data));
    },
    methods: {
        rowClass(data) {
            return [{ '!bg-primary !text-primary-contrast': data.category === 'Fitness' }];
        },
        rowStyle(data) {
            if (data.quantity === 0) {
                return { fontWeight: 'bold', fontStyle: 'italic' };
            }
        },
        stockSeverity(data) {
            if (data.quantity === 0) return 'danger';
            else if (data.quantity > 0 && data.quantity < 10) return 'warn';
            else return 'success';
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <DataTable :value="products" :rowClass="rowClass" :rowStyle="rowStyle" tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity">
                <template #body="slotProps">
                    <Badge :value="slotProps.data.quantity" :severity="stockSeverity(slotProps.data)" />
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (this.products = data));
});

const products = ref();

const rowClass = (data) => {
    return [{ '!bg-primary !text-primary-contrast': data.category === 'Fitness' }];
};
const rowStyle = (data) => {
    if (data.quantity === 0) {
        return { fontWeight: 'bold', fontStyle: 'italic' };
    }
};
const stockSeverity = (data) => {
    if (data.quantity === 0) return 'danger';
    else if (data.quantity > 0 && data.quantity < 10) return 'warn';
    else return 'success';
}

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
    methods: {
        loadDemoData() {
            ProductService.getProductsSmall().then((data) => (this.products = data));
        },
        rowClass(data) {
            return [{ '!bg-primary !text-primary-contrast': data.category === 'Fitness' }];
        },
        rowStyle(data) {
            if (data.quantity === 0) {
                return { fontWeight: 'bold', fontStyle: 'italic' };
            }
        },
        stockSeverity(data) {
            if (data.quantity === 0) return 'danger';
            else if (data.quantity > 0 && data.quantity < 10) return 'warn';
            else return 'success';
        }
    }
};
</script>
