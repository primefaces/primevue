<template>
    <DocPTViewer :docs="docs">
        <RadioButton v-model="value" value="1" />
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
                    data: getPTOptions('RadioButton'),
                    key: 'RadioButton'
                }
            ]
        };
    }
};
</script>
