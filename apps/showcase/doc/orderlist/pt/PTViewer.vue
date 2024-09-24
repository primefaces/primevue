<template>
    <DocPTViewer :docs="docs">
        <OrderList v-model="products" dataKey="id" breakpoint="575px" pt:pcList:root="w-full sm:w-56">
            <template #option="{ option }">
                {{ option.name }}
            </template>
        </OrderList>
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
                    data: getPTOptions('OrderList'),
                    key: 'OrderList'
                }
            ]
        };
    },
    mounted() {
        ProductService.getProductsSmall().then((data) => (this.products = data));
    }
};
</script>
