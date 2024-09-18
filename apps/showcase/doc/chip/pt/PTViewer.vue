<template>
    <DocSectionText v-bind="$attrs" />
    <DocPTViewer :docs="ptViewerDoc">
        <div class="flex flex-wrap gap-8">
            <Chip label="Microsoft" icon="pi pi-microsoft" removable />
            <Chip label="Xuxue Feng" image="https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png" removable />
        </div>
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            ptViewerDoc: [
                {
                    data: getPTOptions('Chip'),
                    key: 'Chip'
                }
            ]
        };
    }
};
</script>
