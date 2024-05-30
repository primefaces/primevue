<template>
    <DocSectionText v-bind="$attrs">
        <p>PanelMenu offers item customization with the <i>item</i> template that receives the menuitem instance from the model as a parameter.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <PanelMenu :model="items" class="w-full md:w-80">
            <template #item="{ item }">
                <a v-ripple class="flex items-center px-4 py-2 cursor-pointer group">
                    <span :class="[item.icon, 'text-primary group-hover:text-inherit']" />
                    <span :class="['ml-2', { 'font-semibold': item.items }]">{{ item.label }}</span>
                    <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
                    <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
                </a>
            </template>
        </PanelMenu>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Mail',
                    icon: 'pi pi-envelope',
                    badge: 5,
                    items: [
                        {
                            label: 'Compose',
                            icon: 'pi pi-file-edit',
                            shortcut: '⌘+N'
                        },
                        {
                            label: 'Inbox',
                            icon: 'pi pi-inbox',
                            badge: 5
                        },
                        {
                            label: 'Sent',
                            icon: 'pi pi-send',
                            shortcut: '⌘+S'
                        },
                        {
                            label: 'Trash',
                            icon: 'pi pi-trash',
                            shortcut: '⌘+T'
                        }
                    ]
                },
                {
                    label: 'Reports',
                    icon: 'pi pi-chart-bar',
                    shortcut: '⌘+R',
                    items: [
                        {
                            label: 'Sales',
                            icon: 'pi pi-chart-line',
                            badge: 3
                        },
                        {
                            label: 'Products',
                            icon: 'pi pi-list',
                            badge: 6
                        }
                    ]
                },
                {
                    label: 'Profile',
                    icon: 'pi pi-user',
                    shortcut: '⌘+W',
                    items: [
                        {
                            label: 'Settings',
                            icon: 'pi pi-cog',
                            shortcut: '⌘+O'
                        },
                        {
                            label: 'Privacy',
                            icon: 'pi pi-shield',
                            shortcut: '⌘+P'
                        }
                    ]
                }
            ],
            code: {
                basic: `
<PanelMenu :model="items">
    <template #item="{ item }">
        <a v-ripple class="flex items-center px-4 py-2 cursor-pointer group">
            <span :class="[item.icon, 'text-primary group-hover:text-inherit']" />
            <span :class="['ml-2', { 'font-semibold': item.items }]">{{ item.label }}</span>
            <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
            <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
        </a>
    </template>
</PanelMenu>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <PanelMenu :model="items" class="w-full md:w-80">
            <template #item="{ item }">
                <a v-ripple class="flex items-center px-4 py-2 cursor-pointer group">
                    <span :class="[item.icon, 'text-primary group-hover:text-inherit']" />
                    <span :class="['ml-2', { 'font-semibold': item.items }]">{{ item.label }}</span>
                    <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
                    <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
                </a>
            </template>
        </PanelMenu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Mail',
                    icon: 'pi pi-envelope',
                    badge: 5,
                    items: [
                        {
                            label: 'Compose',
                            icon: 'pi pi-file-edit',
                            shortcut: '⌘+N'
                        },
                        {
                            label: 'Inbox',
                            icon: 'pi pi-inbox',
                            badge: 5
                        },
                        {
                            label: 'Sent',
                            icon: 'pi pi-send',
                            shortcut: '⌘+S'
                        },
                        {
                            label: 'Trash',
                            icon: 'pi pi-trash',
                            shortcut: '⌘+T'
                        }
                    ]
                },
                {
                    label: 'Reports',
                    icon: 'pi pi-chart-bar',
                    shortcut: '⌘+R',
                    items: [
                        {
                            label: 'Sales',
                            icon: 'pi pi-chart-line',
                            badge: 3
                        },
                        {
                            label: 'Products',
                            icon: 'pi pi-list',
                            badge: 6
                        }
                    ]
                },
                {
                    label: 'Profile',
                    icon: 'pi pi-user',
                    shortcut: '⌘+W',
                    items: [
                        {
                            label: 'Settings',
                            icon: 'pi pi-cog',
                            shortcut: '⌘+O'
                        },
                        {
                            label: 'Privacy',
                            icon: 'pi pi-shield',
                            shortcut: '⌘+P'
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
        <PanelMenu :model="items" class="w-full md:w-80">
            <template #item="{ item }">
                <a v-ripple class="flex items-center px-4 py-2 cursor-pointer group">
                    <span :class="[item.icon, 'text-primary group-hover:text-inherit']" />
                    <span :class="['ml-2', { 'font-semibold': item.items }]">{{ item.label }}</span>
                    <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
                    <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
                </a>
            </template>
        </PanelMenu>
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Mail',
        icon: 'pi pi-envelope',
        badge: 5,
        items: [
            {
                label: 'Compose',
                icon: 'pi pi-file-edit',
                shortcut: '⌘+N'
            },
            {
                label: 'Inbox',
                icon: 'pi pi-inbox',
                badge: 5
            },
            {
                label: 'Sent',
                icon: 'pi pi-send',
                shortcut: '⌘+S'
            },
            {
                label: 'Trash',
                icon: 'pi pi-trash',
                shortcut: '⌘+T'
            }
        ]
    },
    {
        label: 'Reports',
        icon: 'pi pi-chart-bar',
        shortcut: '⌘+R',
        items: [
            {
                label: 'Sales',
                icon: 'pi pi-chart-line',
                badge: 3
            },
            {
                label: 'Products',
                icon: 'pi pi-list',
                badge: 6
            }
        ]
    },
    {
        label: 'Profile',
        icon: 'pi pi-user',
        shortcut: '⌘+W',
        items: [
            {
                label: 'Settings',
                icon: 'pi pi-cog',
                shortcut: '⌘+O'
            },
            {
                label: 'Privacy',
                icon: 'pi pi-shield',
                shortcut: '⌘+P'
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
