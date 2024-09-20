<template>
    <DocPTViewer :docs="docs">
        <ColorPicker v-model="color" inline />
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            color: null,
            docs: [
                {
                    data: getPTOptions('ColorPicker'),
                    key: 'ColorPicker'
                }
            ]
        };
    }
};
</script>
