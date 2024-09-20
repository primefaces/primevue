<template>
    <DocPTViewer :docs="docs">
        <FloatLabel>
            <InputText id="username" v-model="value" autocomplete="off" />
            <label for="username">Username</label>
        </FloatLabel>
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
                    data: getPTOptions('FloatLabel'),
                    key: 'FloatLabel'
                }
            ]
        };
    }
};
</script>
