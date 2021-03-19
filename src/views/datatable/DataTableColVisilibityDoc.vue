<template>
  <AppDoc
    name="DataTableDemo"
    :sources="sources"
    service="ProductService"
    data="products-small"
  />
</template>

<script>
export default {
  data() {
    return {
      sources: {
        "options-api": {
          tabName: "Source",
          content: `
<template>
    <div>
        <Button @click="colVisible = !colVisible" label="Toggle Name column visibility"></Button>
        <div class="card">
            <DataTable :value="products" responsiveLayout="scroll">
                <Column field="code" header="Code"></Column>
                <Column :isVisible="colVisibility" field="name" header="Name"></Column>
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
            colVisible: true
        }
    },
    productService: null,
    computed: {
        colVisibility() {
            return this.colVisible;
        }
    },
    created() {
        this.productService = new ProductService();
    },
    mounted() {
        this.productService.getProductsSmall().then(data => this.products = data);
    }
}
<\\/script>
                    `
        },
        "composition-api": {
          tabName: "Composition API",
          content: `
<template>
	<div>
        <Button @click="colVisible = !colVisible" label="Toggle Name column visibility"></Button>
        <div class="card">
            <DataTable :value="products" responsiveLayout="scroll">
                <Column field="code" header="Code"></Column>
                <Column :isVisible="colVisible" field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
	</div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import ProductService from './service/ProductService';

export default {
    setup() {
        onMounted(() => {
            productService.value.getProductsSmall().then(data => products.value = data);
        })

        const products = ref();
        const colVisible = ref(true);
        const productService = ref(new ProductService());

        return { products, productService, colVisible }
    }
}
<\\/script>         
`
        }
      }
    };
  }
};
</script>
