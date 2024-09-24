<template>
    <DocPTViewer :docs="docs">
        <Textarea v-model="value" rows="5" cols="30" style="resize: none" />
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
                    data: getPTOptions('Textarea'),
                    key: 'Textarea'
                }
            ]
        };
    }
};
</script>
