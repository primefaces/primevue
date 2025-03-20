<template>
    <DocComponent title="Vue Paginator Component" header="Paginator" description="Paginator displays data in paged format and provides navigation between pages." :componentDocs="docs" />
</template>

<script>
import BasicDoc from '@/doc/paginator/BasicDoc.vue';
import DownloadDoc from '@/doc/paginator/DownloadDoc.vue';
import ImportDoc from '@/doc/paginator/ImportDoc.vue';
import CustomDoc from '~/doc/paginator/CustomDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'download',
                    label: 'Download',
                    component: DownloadDoc
                },
                {
                    id: 'import',
                    label: 'Import',
                    component: ImportDoc
                },
                {
                    id: 'basic',
                    label: 'Basic',
                    component: BasicDoc
                },
                {
                    id: 'custom',
                    label: 'Custom',
                    component: CustomDoc
                }
            ]
        };
    }
};
</script>
