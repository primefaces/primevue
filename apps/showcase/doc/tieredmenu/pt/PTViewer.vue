<template>
    <DocSectionText v-bind="$attrs" />
    <DocPTViewer :docs="ptViewerDoc">
        <TieredMenu :model="items" />
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            items: [
                {
                    label: 'File',
                    icon: 'pi pi-file',
                    items: [
                        {
                            label: 'New',
                            icon: 'pi pi-plus',
                            items: [
                                {
                                    label: 'Document',
                                    icon: 'pi pi-file'
                                },
                                {
                                    label: 'Image',
                                    icon: 'pi pi-image'
                                },
                                {
                                    label: 'Video',
                                    icon: 'pi pi-video'
                                }
                            ]
                        },
                        {
                            label: 'Open',
                            icon: 'pi pi-folder-open'
                        },
                        {
                            label: 'Print',
                            icon: 'pi pi-print'
                        }
                    ]
                },
                {
                    label: 'Edit',
                    icon: 'pi pi-file-edit',
                    items: [
                        {
                            label: 'Copy',
                            icon: 'pi pi-copy'
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-times'
                        }
                    ]
                },
                {
                    label: 'Search',
                    icon: 'pi pi-search'
                },
                {
                    separator: true
                },
                {
                    label: 'Share',
                    icon: 'pi pi-share-alt',
                    items: [
                        {
                            label: 'Slack',
                            icon: 'pi pi-slack'
                        },
                        {
                            label: 'Whatsapp',
                            icon: 'pi pi-whatsapp'
                        }
                    ]
                }
            ],
            ptViewerDoc: [
                {
                    data: getPTOptions('TieredMenu'),
                    key: 'TieredMenu'
                }
            ]
        };
    }
};
</script>
