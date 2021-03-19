<template>
  <div>
    <div class="content-section introduction">
      <div class="feature-intro">
        <h1>DataTable <span>Column Visibility</span></h1>
        <p>
          DataTable requires a collection to display along with column
          components for the representation of the data.
        </p>
        <Button
          @click="colVisible = !colVisible"
          label="Toggle Name column visibility"
        ></Button>
      </div>
    </div>

    <div class="content-section implementation">
      <div class="card">
        <DataTable :value="products" responsiveLayout="scroll">
          <Column field="code" header="Code"></Column>
          <Column
            :isVisible="colVisibility"
            field="name"
            header="Name"
          ></Column>
          <Column field="category" header="Category"></Column>
          <Column field="quantity" header="Quantity"></Column>
        </DataTable>
      </div>
    </div>

    <DataTableColVisilibityDoc />
  </div>
</template>

<script>
import ProductService from "../../service/ProductService";
import DataTableColVisilibityDoc from "./DataTableColVisilibityDoc";

export default {
  data() {
    return {
      products: null,
      colVisible: true
    };
  },
  productService: null,
  created() {
    this.productService = new ProductService();
  },
  mounted() {
    this.productService.getProductsSmall().then(data => (this.products = data));
  },
  computed: {
    colVisibility() {
      return this.colVisible;
    }
  },
  components: {
    DataTableColVisilibityDoc
  }
};
</script>
