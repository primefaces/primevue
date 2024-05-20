<template>
    <DocSectionText v-bind="$attrs">
        <p>TieredMenu requires a collection of menuitems as its <i>model</i>.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <TieredMenu :model="items" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
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
            code: {
                basic: `
<TieredMenu :model="items" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <TieredMenu :model="items" />
    </div>
</template>

<script>
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
            ]
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <TieredMenu :model="items" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
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
]);
<\/script>
`
            }
        };
    }
};
</script>
