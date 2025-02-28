<template>
    <DocSectionText v-bind="$attrs">
        <p>TieredMenu offers item customization with the <i>item</i> template that receives the menuitem instance from the model as a parameter.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <TieredMenu :model="items">
            <template #item="{ item, props, hasSubmenu }">
                <a v-ripple class="flex items-center" v-bind="props.action">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                    <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
                    <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
                    <i v-if="hasSubmenu" class="pi pi-angle-right ml-auto"></i>
                </a>
            </template>
        </TieredMenu>
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
                                    icon: 'pi pi-file',
                                    shortcut: '⌘+N'
                                },
                                {
                                    label: 'Image',
                                    icon: 'pi pi-image',
                                    shortcut: '⌘+I'
                                },
                                {
                                    label: 'Video',
                                    icon: 'pi pi-video',
                                    shortcut: '⌘+L'
                                }
                            ]
                        },
                        {
                            label: 'Open',
                            icon: 'pi pi-folder-open',
                            shortcut: '⌘+O'
                        },
                        {
                            label: 'Print',
                            icon: 'pi pi-print',
                            shortcut: '⌘+P'
                        }
                    ]
                },
                {
                    label: 'Edit',
                    icon: 'pi pi-file-edit',
                    items: [
                        {
                            label: 'Copy',
                            icon: 'pi pi-copy',
                            shortcut: '⌘+C'
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-times',
                            shortcut: '⌘+D'
                        }
                    ]
                },
                {
                    label: 'Search',
                    icon: 'pi pi-search',
                    shortcut: '⌘+S'
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
                            icon: 'pi pi-slack',
                            badge: 2
                        },
                        {
                            label: 'Whatsapp',
                            icon: 'pi pi-whatsapp',
                            badge: 3
                        }
                    ]
                }
            ],
            code: {
                basic: `
<TieredMenu :model="items">
    <template #item="{ item, props, hasSubmenu }">
        <a v-ripple class="flex items-center" v-bind="props.action">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
            <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
            <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
            <i v-if="hasSubmenu" class="pi pi-angle-right ml-auto"></i>
        </a>
    </template>
</TieredMenu>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <TieredMenu :model="items">
            <template #item="{ item, props, hasSubmenu }">
                <a v-ripple class="flex items-center" v-bind="props.action">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                    <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
                    <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
                    <i v-if="hasSubmenu" class="pi pi-angle-right ml-auto"></i>
                </a>
            </template>
        </TieredMenu>
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
                                    icon: 'pi pi-file',
                                    shortcut: '⌘+N'
                                },
                                {
                                    label: 'Image',
                                    icon: 'pi pi-image',
                                    shortcut: '⌘+I'
                                },
                                {
                                    label: 'Video',
                                    icon: 'pi pi-video',
                                    shortcut: '⌘+L'
                                }
                            ]
                        },
                        {
                            label: 'Open',
                            icon: 'pi pi-folder-open',
                            shortcut: '⌘+O'
                        },
                        {
                            label: 'Print',
                            icon: 'pi pi-print',
                            shortcut: '⌘+P'
                        }
                    ]
                },
                {
                    label: 'Edit',
                    icon: 'pi pi-file-edit',
                    items: [
                        {
                            label: 'Copy',
                            icon: 'pi pi-copy',
                            shortcut: '⌘+C'
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-times',
                            shortcut: '⌘+D'
                        }
                    ]
                },
                {
                    label: 'Search',
                    icon: 'pi pi-search',
                    shortcut: '⌘+S'
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
                            icon: 'pi pi-slack',
                            badge: 2
                        },
                        {
                            label: 'Whatsapp',
                            icon: 'pi pi-whatsapp',
                            badge: 3
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
        <TieredMenu :model="items">
            <template #item="{ item, props, hasSubmenu }">
                <a v-ripple class="flex items-center" v-bind="props.action">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                    <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
                    <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
                    <i v-if="hasSubmenu" class="pi pi-angle-right ml-auto"></i>
                </a>
            </template>
        </TieredMenu>
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
                        icon: 'pi pi-file',
                        shortcut: '⌘+N'
                    },
                    {
                        label: 'Image',
                        icon: 'pi pi-image',
                        shortcut: '⌘+I'
                    },
                    {
                        label: 'Video',
                        icon: 'pi pi-video',
                        shortcut: '⌘+L'
                    }
                ]
            },
            {
                label: 'Open',
                icon: 'pi pi-folder-open',
                shortcut: '⌘+O'
            },
            {
                label: 'Print',
                icon: 'pi pi-print',
                shortcut: '⌘+P'
            }
        ]
    },
    {
        label: 'Edit',
        icon: 'pi pi-file-edit',
        items: [
            {
                label: 'Copy',
                icon: 'pi pi-copy',
                shortcut: '⌘+C'
            },
            {
                label: 'Delete',
                icon: 'pi pi-times',
                shortcut: '⌘+D'
            }
        ]
    },
    {
        label: 'Search',
        icon: 'pi pi-search',
        shortcut: '⌘+S'
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
                icon: 'pi pi-slack',
                badge: 2
            },
            {
                label: 'Whatsapp',
                icon: 'pi pi-whatsapp',
                badge: 3
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
