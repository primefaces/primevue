<template>
    <DocPTViewer :docs="docs">
        <InputText v-model="value" placeholder="Username" />
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
                    data: getPTOptions('InputText'),
                    key: 'InputText'
                }
            ]
        };
    }
};
</script>
