<template>
    <DocPTViewer :docs="docs">
        <Rating v-model="value" />
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
                    data: getPTOptions('Rating'),
                    key: 'Rating'
                }
            ]
        };
    }
};
</script>
