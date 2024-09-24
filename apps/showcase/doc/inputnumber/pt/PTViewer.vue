<template>
    <DocPTViewer :docs="docs">
        <InputNumber v-model="value" inputId="stacked-buttons" showButtons mode="currency" currency="USD" />
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            value: 20,
            docs: [
                {
                    data: getPTOptions('InputNumber'),
                    key: 'InputNumber'
                }
            ]
        };
    }
};
</script>
