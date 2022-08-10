<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Inplace</h1>
                <p>Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Input</h5>
                <Inplace :closable="true">
                    <template #display>
                        {{text || 'Click to Edit'}}
                    </template>
                    <template #content>
                        <InputText v-model="text" autoFocus />
                    </template>
                </Inplace>

                <h5>Image</h5>
                <Inplace>
                    <template #display>
                        <span class="pi pi-search" style="vertical-align: middle"></span>
                        <span style="margin-left:.5rem; vertical-align: middle">View Picture</span>
                    </template>
                    <template #content>
                        <img src="demo/images/nature/nature1.jpg" />
                    </template>
                </Inplace>

                <h5>Lazy Data</h5>
                <Inplace @open="loadData">
                    <template #display>
                        View Data
                    </template>
                    <template #content>
                        <DataTable :value="products">
                            <Column field="code" header="Code"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="category" header="Category"></Column>
                            <Column field="quantity" header="Quantity"></Column>
                        </DataTable>
                    </template>
                </Inplace>
            </div>
        </div>

        <InplaceDoc />
    </div>
</template>

<script>
import ProductService from '../../service/ProductService';
import InplaceDoc from './InplaceDoc';

export default {
    data() {
        return {
            text: null,
            products: null
        }
    },
    productService: null,
    created() {
        this.productService = new ProductService();
    },
    methods: {
        loadData() {
            this.productService.getProductsSmall().then(data => this.products = data);
        }
    },
    components: {
        'InplaceDoc': InplaceDoc
    }
}
</script>
