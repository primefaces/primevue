<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>DeferredContent</h1>
                <p>DeferredContent postpones the loading the content that is initially not in the viewport until it becomes visible on scroll..</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <div style="height: 800px">
                    Scroll down to lazy load an image and the DataTable which initiates a query that is not executed on initial page load to speed up load performance.
                </div>

                <DeferredContent @load="onImageLoad">
                    <img src="demo/images/nature/nature4.jpg" alt="Nature"/>
                </DeferredContent>

                <div style="height: 500px">
                </div>

                <DeferredContent @load="onDataLoad">
                    <DataTable :value="products">
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>
                </DeferredContent>
            </div>
        </div>

        <DeferredContentDoc />
    </div>
</template>

<script>
import ProductService from '../../service/ProductService';
import DeferredContentDoc from './DeferredContentDoc';

export default {
    data() {
        return {
            products: null
        }
    },
    productService: null,
    created() {
        this.productService = new ProductService();
    },
    methods: {
        onImageLoad() {
            this.$toast.add({severity: 'success', summary: 'Image Initialized', detail: 'Scroll down to load the datatable'});
        },
        onDataLoad() {
            this.productService.getProductsSmall().then(data => this.products = data);
            this.$toast.add({severity: 'success', summary: 'Data Initialized', detail: 'Render Completed'});
        }
    },
    components: {
        'DeferredContentDoc': DeferredContentDoc
    }
}
</script>