<template>
    <DocSectionText v-bind="$attrs">
        <p>Multi-level menus are supported with a nested menu hierarchy.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <SplitButton label="Save" @click="save" :model="items" />
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
<SplitButton label="Save" @click="save" :model="items" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <SplitButton label="Save" @click="save" :model="items" />
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
    },
    methods: {
        save() {
            this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <SplitButton label="Save" @click="save" :model="items" />
    </div>
</template>

<script setup>
const items = [
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
];

const save = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
};
<\/script>
`
            }
        };
    },
    methods: {
        save() {
            this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
        }
    }
};
</script>
