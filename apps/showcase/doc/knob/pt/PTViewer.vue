<template>
    <DocPTViewer :docs="docs">
        <Knob v-model="value" />
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            value: 0,
            docs: [
                {
                    data: getPTOptions('Knob'),
                    key: 'Knob'
                }
            ]
        };
    }
};
</script>
