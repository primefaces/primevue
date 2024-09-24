<template>
    <DocPTViewer :docs="docs">
        <InputMask id="basic" v-model="value" mask="99-999999" placeholder="99-999999" />
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
                    data: getPTOptions('InputMask'),
                    key: 'InputMask'
                }
            ]
        };
    }
};
</script>
