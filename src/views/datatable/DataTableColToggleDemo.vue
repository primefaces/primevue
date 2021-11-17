<template>
	<div>
		<div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable <span>Column Toggle</span></h1>
				<p>MultiSelect component can be used to implement column toggle functionality.</p>
			</div>
            <AppDemoActions />
		</div>

		<div class="content-section implementation">
            <div class="card">
                <DataTable :value="products" responsiveLayout="scroll">
                    <template #header>
                        <div style="text-align:left">
                            <MultiSelect :modelValue="selectedColumns" :options="columns" optionLabel="header" @update:modelValue="onToggle"
                                placeholder="Select Columns" style="width: 20em"/>
                        </div>
                    </template>
                    <Column field="code" header="Code" />
                    <Column v-for="(col, index) of selectedColumns" :field="col.field" :header="col.header" :key="col.field + '_' + index"></Column>
                </DataTable>
            </div>
		</div>

        <AppDoc name="DataTableColToggleDemo" :sources="sources" :service="['ProductService']" :data="['products-small']" github="datatable/DataTableColToggleDemo.vue" />
	</div>
</template>

<script>
import ProductService from '../../service/ProductService';

export default {
    data() {
        return {
            selectedColumns: null,
            columns: null,
            products: null,
            sources: {
                'options-api': {
                    tabName: 'Options API Source',
                    content: `
<template>
    <div>
        <DataTable :value="products" responsiveLayout="scroll">
            <template #header>
                <div style="text-align:left">
                    <MultiSelect :modelValue="selectedColumns" :options="columns" optionLabel="header" @update:modelValue="onToggle"
                        placeholder="Select Columns" style="width: 20em"/>
                </div>
            </template>
            <Column field="code" header="Code" />
            <Column v-for="(col, index) of selectedColumns" :field="col.field" :header="col.header" :key="col.field + '_' + index"></Column>
        </DataTable>
    </div>
</template>

<script>
import ProductService from './service/ProductService';

export default {
    data() {
        return {
            selectedColumns: null,
            columns: null,
            products: null
        }
    },
    productService: null,
    created() {
        this.productService = new ProductService();

        this.columns = [
            {field: 'name', header: 'Name'},
            {field: 'category', header: 'Category'},
            {field: 'quantity', header: 'Quantity'}
        ];
        this.selectedColumns = this.columns;
    },
    mounted() {
        this.productService.getProductsSmall().then(data => this.products = data);
    },
    methods: {
        onToggle(value) {
            this.selectedColumns = this.columns.filter(col => value.includes(col));
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
        <DataTable :value="products" responsiveLayout="scroll">
            <template #header>
                <div style="text-align:left">
                    <MultiSelect :modelValue="selectedColumns" :options="columns" optionLabel="header" @update:modelValue="onToggle"
                        placeholder="Select Columns" style="width: 20em"/>
                </div>
            </template>
            <Column field="code" header="Code" />
            <Column v-for="(col, index) of selectedColumns" :field="col.field" :header="col.header" :key="col.field + '_' + index"></Column>
        </DataTable>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import ProductService from './service/ProductService';

export default {
    setup() {
        onMounted(() => {
            productService.value.getProductsSmall().then(data => products.value = data);
        })

        const columns = ref([
            {field: 'name', header: 'Name'},
            {field: 'category', header: 'Category'},
            {field: 'quantity', header: 'Quantity'}
        ]);
        const selectedColumns = ref(columns.value);
        const products = ref();
        const productService = ref(new ProductService());
        const onToggle = (val) => {
            selectedColumns.value = columns.value.filter(col => val.includes(col));
        };

        return { columns, selectedColumns, products, productService, onToggle }
    }
}
<\\/script>
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/datatable/datatable.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/multiselect/multiselect.min.js"><\\/script>
        <script src="./ProductService.js"><\\/script>`,
                    content: `<div id="app">
            <p-datatable :value="products" responsive-layout="scroll">
                <template #header>
                    <div style="text-align:left">
                        <p-multiselect :model-value="selectedColumns" :options="columns" option-label="header" @update:model-value="onToggle"
                            placeholder="Select Columns" style="width: 20em"></p-multiselect>
                    </div>
                </template>
                <p-column field="code" header="Code"></p-column>
                <p-column v-for="(col, index) of selectedColumns" :field="col.field" :header="col.header" :key="col.field + '_' + index"></p-column>
            </p-datatable>
        </div>

        <script type="module">
        const { createApp, ref, onMounted } = Vue;

        const App = {
            setup() {
                onMounted(() => {
                    productService.value.getProductsSmall().then(data => products.value = data);
                })

                const columns = ref([
                    {field: 'name', header: 'Name'},
                    {field: 'category', header: 'Category'},
                    {field: 'quantity', header: 'Quantity'}
                ]);
                const selectedColumns = ref(columns.value);
                const products = ref();
                const productService = ref(new ProductService());
                const onToggle = (val) => {
                    selectedColumns.value = columns.value.filter(col => val.includes(col));
                };

                return { columns, selectedColumns, products, productService, onToggle }
            },
            components: {
                "p-datatable": primevue.datatable,
                "p-column": primevue.column,
                "p-multiselect": primevue.multiselect
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

        this.columns = [
            {field: 'name', header: 'Name'},
            {field: 'category', header: 'Category'},
            {field: 'quantity', header: 'Quantity'}
        ];
        this.selectedColumns = this.columns;
    },
    mounted() {
        this.productService.getProductsSmall().then(data => this.products = data);
    },
    methods: {
        onToggle(value) {
            this.selectedColumns = this.columns.filter(col => value.includes(col));
        }
    }
}
</script>