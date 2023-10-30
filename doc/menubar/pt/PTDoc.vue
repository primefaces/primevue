<template>
    <DocSectionText v-bind="$attrs"> </DocSectionText>
    <div class="card relative z-2">
        <Menubar
            :model="items"
            :pt="{
                action: ({ props, state, context }) => ({
                    class: context.active ? 'bg-primary-200 border-round-sm' : context.focused ? 'bg-primary-300 border-round-sm' : undefined
                })
            }"
        />
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
                    icon: 'pi pi-fw pi-file',
                    items: [
                        {
                            label: 'New',
                            icon: 'pi pi-fw pi-plus',
                            items: [
                                {
                                    label: 'Bookmark',
                                    icon: 'pi pi-fw pi-bookmark'
                                },
                                {
                                    label: 'Video',
                                    icon: 'pi pi-fw pi-video'
                                }
                            ]
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-fw pi-trash'
                        },
                        {
                            separator: true
                        },
                        {
                            label: 'Export',
                            icon: 'pi pi-fw pi-external-link'
                        }
                    ]
                },
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil',
                    items: [
                        {
                            label: 'Left',
                            icon: 'pi pi-fw pi-align-left'
                        },
                        {
                            label: 'Right',
                            icon: 'pi pi-fw pi-align-right'
                        },
                        {
                            label: 'Center',
                            icon: 'pi pi-fw pi-align-center'
                        },
                        {
                            label: 'Justify',
                            icon: 'pi pi-fw pi-align-justify'
                        }
                    ]
                },
                {
                    label: 'Users',
                    icon: 'pi pi-fw pi-user',
                    items: [
                        {
                            label: 'New',
                            icon: 'pi pi-fw pi-user-plus'
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-fw pi-user-minus'
                        },
                        {
                            label: 'Search',
                            icon: 'pi pi-fw pi-users',
                            items: [
                                {
                                    label: 'Filter',
                                    icon: 'pi pi-fw pi-filter',
                                    items: [
                                        {
                                            label: 'Print',
                                            icon: 'pi pi-fw pi-print'
                                        }
                                    ]
                                },
                                {
                                    icon: 'pi pi-fw pi-bars',
                                    label: 'List'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Events',
                    icon: 'pi pi-fw pi-calendar',
                    items: [
                        {
                            label: 'Edit',
                            icon: 'pi pi-fw pi-pencil',
                            items: [
                                {
                                    label: 'Save',
                                    icon: 'pi pi-fw pi-calendar-plus'
                                },
                                {
                                    label: 'Delete',
                                    icon: 'pi pi-fw pi-calendar-minus'
                                }
                            ]
                        },
                        {
                            label: 'Archive',
                            icon: 'pi pi-fw pi-calendar-times',
                            items: [
                                {
                                    label: 'Remove',
                                    icon: 'pi pi-fw pi-calendar-minus'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Quit',
                    icon: 'pi pi-fw pi-power-off'
                }
            ],
            code: {
                basic: `
<Menubar
    :model="items"
    :pt="{
        action: ({ props, state, context }) => ({
            class: context.active ? 'bg-primary-200 border-round-sm' : context.focused ? 'bg-primary-300 border-round-sm' : undefined
        })
    }"
/>
`,
                options: `
<template>
    <div class="card relative z-2">
        <Menubar
            :model="items"
            :pt="{
                action: ({ props, state, context }) => ({
                    class: context.active ? 'bg-primary-200 border-round-sm' : context.focused ? 'bg-primary-300 border-round-sm' : undefined
                })
            }"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'File',
                    icon: 'pi pi-fw pi-file',
                    items: [
                        {
                            label: 'New',
                            icon: 'pi pi-fw pi-plus',
                            items: [
                                {
                                    label: 'Bookmark',
                                    icon: 'pi pi-fw pi-bookmark'
                                },
                                {
                                    label: 'Video',
                                    icon: 'pi pi-fw pi-video'
                                }
                            ]
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-fw pi-trash'
                        },
                        {
                            separator: true
                        },
                        {
                            label: 'Export',
                            icon: 'pi pi-fw pi-external-link'
                        }
                    ]
                },
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil',
                    items: [
                        {
                            label: 'Left',
                            icon: 'pi pi-fw pi-align-left'
                        },
                        {
                            label: 'Right',
                            icon: 'pi pi-fw pi-align-right'
                        },
                        {
                            label: 'Center',
                            icon: 'pi pi-fw pi-align-center'
                        },
                        {
                            label: 'Justify',
                            icon: 'pi pi-fw pi-align-justify'
                        }
                    ]
                },
                {
                    label: 'Users',
                    icon: 'pi pi-fw pi-user',
                    items: [
                        {
                            label: 'New',
                            icon: 'pi pi-fw pi-user-plus'
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-fw pi-user-minus'
                        },
                        {
                            label: 'Search',
                            icon: 'pi pi-fw pi-users',
                            items: [
                                {
                                    label: 'Filter',
                                    icon: 'pi pi-fw pi-filter',
                                    items: [
                                        {
                                            label: 'Print',
                                            icon: 'pi pi-fw pi-print'
                                        }
                                    ]
                                },
                                {
                                    icon: 'pi pi-fw pi-bars',
                                    label: 'List'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Events',
                    icon: 'pi pi-fw pi-calendar',
                    items: [
                        {
                            label: 'Edit',
                            icon: 'pi pi-fw pi-pencil',
                            items: [
                                {
                                    label: 'Save',
                                    icon: 'pi pi-fw pi-calendar-plus'
                                },
                                {
                                    label: 'Delete',
                                    icon: 'pi pi-fw pi-calendar-minus'
                                }
                            ]
                        },
                        {
                            label: 'Archive',
                            icon: 'pi pi-fw pi-calendar-times',
                            items: [
                                {
                                    label: 'Remove',
                                    icon: 'pi pi-fw pi-calendar-minus'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Quit',
                    icon: 'pi pi-fw pi-power-off'
                }
            ]
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card relative z-2">
        <Menubar
            :model="items"
            :pt="{
                action: ({ props, state, context }) => ({
                    class: context.active ? 'bg-primary-200 border-round-sm' : context.focused ? 'bg-primary-300 border-round-sm' : undefined
                })
            }"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [
            {
                label: 'New',
                icon: 'pi pi-fw pi-plus',
                items: [
                    {
                        label: 'Bookmark',
                        icon: 'pi pi-fw pi-bookmark'
                    },
                    {
                        label: 'Video',
                        icon: 'pi pi-fw pi-video'
                    }
                ]
            },
            {
                label: 'Delete',
                icon: 'pi pi-fw pi-trash'
            },
            {
                separator: true
            },
            {
                label: 'Export',
                icon: 'pi pi-fw pi-external-link'
            }
        ]
    },
    {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
            {
                label: 'Left',
                icon: 'pi pi-fw pi-align-left'
            },
            {
                label: 'Right',
                icon: 'pi pi-fw pi-align-right'
            },
            {
                label: 'Center',
                icon: 'pi pi-fw pi-align-center'
            },
            {
                label: 'Justify',
                icon: 'pi pi-fw pi-align-justify'
            }
        ]
    },
    {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
            {
                label: 'New',
                icon: 'pi pi-fw pi-user-plus'
            },
            {
                label: 'Delete',
                icon: 'pi pi-fw pi-user-minus'
            },
            {
                label: 'Search',
                icon: 'pi pi-fw pi-users',
                items: [
                    {
                        label: 'Filter',
                        icon: 'pi pi-fw pi-filter',
                        items: [
                            {
                                label: 'Print',
                                icon: 'pi pi-fw pi-print'
                            }
                        ]
                    },
                    {
                        icon: 'pi pi-fw pi-bars',
                        label: 'List'
                    }
                ]
            }
        ]
    },
    {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'Save',
                        icon: 'pi pi-fw pi-calendar-plus'
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-calendar-minus'
                    }
                ]
            },
            {
                label: 'Archive',
                icon: 'pi pi-fw pi-calendar-times',
                items: [
                    {
                        label: 'Remove',
                        icon: 'pi pi-fw pi-calendar-minus'
                    }
                ]
            }
        ]
    },
    {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off'
    }
]);
<\/script>
`
            }
        };
    }
};
</script>
