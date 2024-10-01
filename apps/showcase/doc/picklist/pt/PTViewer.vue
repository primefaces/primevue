<template>
    <DocPTViewer :docs="docs">
        <PickList v-model="products" dataKey="id" breakpoint="1400px" class="w-full">
            <template #option="{ option }">
                {{ option.name }}
            </template>
        </PickList>
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
                    data: getPTOptions('PickList'),
                    key: 'PickList'
                }
            ]
        };
    },
    mounted() {
        ProductService.getProductsSmall().then((data) => (this.products = [data, []]));
    }
};
</script>
