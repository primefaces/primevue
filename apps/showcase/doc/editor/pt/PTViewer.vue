<template>
    <DocPTViewer :docs="docs">
        <Editor v-model="value" editorStyle="height: 320px" />
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
                    data: getPTOptions('Editor'),
                    key: 'Editor'
                }
            ]
        };
    }
};
</script>
