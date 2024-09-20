<template>
    <DocPTViewer :docs="docs">
        <Tag icon="pi pi-user" value="Primary"></Tag>
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            docs: [
                {
                    data: getPTOptions('Tag'),
                    key: 'Tag'
                }
            ]
        };
    }
};
</script>
