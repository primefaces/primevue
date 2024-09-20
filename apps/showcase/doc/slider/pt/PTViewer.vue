<template>
    <DocPTViewer :docs="docs">
        <Slider v-model="value" class="w-56" />
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
                    data: getPTOptions('Slider'),
                    key: 'Slider'
                }
            ]
        };
    }
};
</script>
