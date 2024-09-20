<template>
    <DocPTViewer :docs="docs">
        <InputGroup>
            <InputGroupAddon>$</InputGroupAddon>
            <InputNumber v-model="value" placeholder="Price" />
            <InputGroupAddon>.00</InputGroupAddon>
        </InputGroup>
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            value: null,
            docs: [
                {
                    data: getPTOptions('InputGroup'),
                    key: 'InputGroup'
                },
                {
                    data: getPTOptions('InputGroupAddon'),
                    key: 'InputGroupAddon'
                }
            ]
        };
    }
};
</script>
