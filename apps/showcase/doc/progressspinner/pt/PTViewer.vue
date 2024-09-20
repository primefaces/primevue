<template>
    <DocPTViewer :docs="docs">
        <ProgressSpinner />
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            docs: [
                {
                    data: getPTOptions('ProgressSpinner'),
                    key: 'ProgressSpinner'
                }
            ]
        };
    }
};
</script>
