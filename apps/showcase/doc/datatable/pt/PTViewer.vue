<template>
    <DocSectionText v-bind="$attrs" />
    <DocPTViewer :docs="docs">
        <DataTable :value="products" tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            docs: [
                {
                    data: getPTOptions('DataTable'),
                    key: 'DataTable'
                },
                {
                    data: getPTOptions('Column'),
                    key: 'Column'
                }
            ]
        };
    },
    mounted() {
        ProductService.getProductsMini().then((data) => (this.products = data));
    }
};
</script>
