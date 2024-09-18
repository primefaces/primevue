<template>
    <DocSectionText v-bind="$attrs" />
    <DocPTViewer :docs="ptViewerDoc">
        <ProgressSpinner />
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            ptViewerDoc: [
                {
                    data: getPTOptions('ProgressSpinner'),
                    key: 'ProgressSpinner'
                }
            ]
        };
    }
};
</script>
