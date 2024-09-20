<template>
    <DocSectionText v-bind="$attrs" />
    <DocPTViewer :docs="ptViewerDoc">
        <Tag icon="pi pi-user" value="Primary"></Tag>
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            ptViewerDoc: [
                {
                    data: getPTOptions('Tag'),
                    key: 'Tag'
                }
            ]
        };
    }
};
</script>
