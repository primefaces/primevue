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
                        <div :class="stockClass(slotProps.data)">
                            {{ slotProps.data.quantity }}
                        </div>
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
            <div :class="stockClass(slotProps.data)">
                {{ slotProps.data.quantity }}
            </div>
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
                    <div :class="stockClass(slotProps.data)">
                        {{ slotProps.data.quantity }}
                    </div>
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
            return [{ 'bg-primary': data.category === 'Fitness' }];
        },
        rowStyle(data) {
            if (data.quantity === 0) {
                return { fontWeight: 'bold', fontStyle: 'italic' };
            }
        },
        stockClass(data) {
            return [
                'border-circle w-2rem h-2rem inline-flex font-bold justify-content-center align-items-center text-sm',
                {
                    'bg-red-100 text-red-900': data.quantity === 0,
                    'bg-blue-100 text-blue-900': data.quantity > 0 && data.quantity < 10,
                    'bg-teal-100 text-teal-900': data.quantity > 10
                }
            ];
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
                    <div :class="stockClass(slotProps.data)">
                        {{ slotProps.data.quantity }}
                    </div>
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
    return [{ 'bg-primary': data.category === 'Fitness' }];
};
const rowStyle = (data) => {
    if (data.quantity === 0) {
        return { fontWeight: 'bold', fontStyle: 'italic' };
    }
};
const stockClass = (data) => {
    return [
        'border-circle w-2rem h-2rem inline-flex font-bold justify-content-center align-items-center text-sm',
        {
            'bg-red-100 text-red-900': data.quantity === 0,
            'bg-blue-100 text-blue-900': data.quantity > 0 && data.quantity < 10,
            'bg-teal-100 text-teal-900': data.quantity > 10
        }
    ];
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
    methods: {
        loadDemoData() {
            ProductService.getProductsSmall().then((data) => (this.products = data));
        },
        rowClass(data) {
            return [{ 'bg-primary': data.category === 'Fitness' }];
        },
        rowStyle(data) {
            if (data.quantity === 0) {
                return { fontWeight: 'bold', fontStyle: 'italic' };
            }
        },
        stockClass(data) {
            return [
                'border-circle w-2rem h-2rem inline-flex font-bold justify-content-center align-items-center text-sm',
                {
                    'bg-red-100 text-red-900': data.quantity === 0,
                    'bg-blue-100 text-blue-900': data.quantity > 0 && data.quantity < 10,
                    'bg-teal-100 text-teal-900': data.quantity > 10
                }
            ];
        }
    }
};
</script>
