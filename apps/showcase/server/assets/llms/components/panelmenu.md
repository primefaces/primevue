# Vue PanelMenu Component

PanelMenu is a hybrid of accordion-tree components.

## Import

```javascript
import PanelMenu from 'primevue/panelmenu';
```

## Accessibility

Screen Reader Accordion header elements have a button role, an aria-label defined using the label property of the menuitem model and aria-controls to define the id of the content section along with aria-expanded for the visibility state. The content of an accordion panel uses region role, defines an id that matches the aria-controls of the header and aria-labelledby referring to the id of the header. The tree elements has a tree as the role and each menu item has a treeitem role along with aria-label and aria-expanded attributes. The container element of a treenode has the group role. The aria-setsize , aria-posinset and aria-level attributes are calculated implicitly and added to each treeitem. Header Keyboard Support Key Function tab Moves focus to the next the focusable element in the page tab sequence. shift + tab Moves focus to the previous the focusable element in the page tab sequence. enter Toggles the visibility of the content. space Toggles the visibility of the content. down arrow Moves focus to the next header. If focus is on the last header, moves focus to the first header. up arrow Moves focus to the previous header. If focus is on the first header, moves focus to the last header. home Moves focus to the first header. end Moves focus to the last header.

## Basic

PanelMenu requires a collection of menuitems as its model .

```vue
<PanelMenu :model="items" />
```

## Command

The command property defines the callback to run when an item is activated by click or a key event.

```vue
<PanelMenu :model="items" />
<Toast />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <PanelMenu :model="items" class="w-full md:w-80" />
        <Toast />
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useToast } from "primevue/usetoast";

const toast = useToast();

const items = ref([
    {
        label: 'Files',
        icon: 'pi pi-file',
        items: [
            {
                label: 'New',
                icon: 'pi pi-plus',
                command: () => {
                    toast.add({ severity: 'success', summary: 'Success', detail: 'File created', life: 3000 });
                }
            },
            {
                label: 'Search',
                icon: 'pi pi-search',
                command: () => {
                    toast.add({ severity: 'warn', summary: 'Search Results', detail: 'No results found', life: 3000 });
                }
            },
            {
                label: 'Print',
                icon: 'pi pi-print',
                command: () => {
                    toast.add({ severity: 'error', summary: 'Error', detail: 'No printer connected', life: 3000 });
                }
            }
        ]
    },
    {
        label: 'Sync',
        icon: 'pi pi-cloud',
        items: [
            {
                label: 'Import',
                icon: 'pi pi-cloud-download',
                command: () => {
                    toast.add({ severity: 'info', summary: 'Downloads', detail: 'Downloaded from cloud', life: 3000 });
                }
            },
            {
                label: 'Export',
                icon: 'pi pi-cloud-upload',
                command: () => {
                    toast.add({ severity: 'info', summary: 'Shared', detail: 'Exported to cloud', life: 3000 });
                }
            }
        ]
    },
    {
        label: 'Sign Out',
        icon: 'pi pi-sign-out',
        command: () => {
            toast.add({ severity: 'info', summary: 'Signed out', detail: 'User logged out', life: 3000 });
        }
    }
]);
<\/script>
```

</details>

## Controlled

If the menuitem has a key defined, PanelMenu state can be controlled programmatically with the expandedKeys property that defines the keys that are expanded. This property is a Map instance whose key is the key of a node and value is a boolean.

```vue
<Button type="button" label="Toggle All" text @click="toggleAll" />
<PanelMenu v-model:expandedKeys="expandedKeys" :model="items" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-col items-center gap-4">
        <Button type="button" label="Toggle All" text @click="toggleAll" />
        <PanelMenu v-model:expandedKeys="expandedKeys" :model="items" class="w-full md:w-80" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const expandedKeys = ref({});
const items = ref([
    {
        key: '0',
        label: 'Users',
        icon: 'pi pi-users',
        items: [
            {
                key: '0_1',
                label: 'New',
                items: [
                    {
                        key: '0_1_0',
                        label: 'Member'
                    },
                    {
                        key: '0_1_1',
                        label: 'Group'
                    }
                ]
            },
            {
                key: '0_2',
                label: 'Search'
            }
        ]
    },
    {
        key: '1',
        label: 'Tasks',
        icon: 'pi pi-server',
        items: [
            {
                key: '1_0',
                label: 'Add New'
            },
            {
                key: '1_1',
                label: 'Pending'
            },
            {
                key: '1_2',
                label: 'Overdue'
            }
        ]
    },
    {
        key: '2',
        label: 'Calendar',
        icon: 'pi pi-calendar',
        items: [
            {
                key: '2_0',
                label: 'New Event'
            },
            {
                key: '2_1',
                label: 'Today'
            },
            {
                key: '2_2',
                label: 'This Week'
            }
        ]
    }
]);

const toggleAll = () => {
    if (Object.keys(expandedKeys.value).length) collapseAll();
    else expandAll();
}

const expandAll = () => {
    for (let node of items.value) {
        expandNode(node);
    }

    expandedKeys.value = {...expandedKeys.value};
};

const collapseAll = () => {
    expandedKeys.value = {};
};

const expandNode = (node) => {
    if (node.items && node.items.length) {
        expandedKeys.value[node.key] = true;

        for (let child of node.items) {
            expandNode(child);
        }
    }
};
<\/script>
```

</details>

## Multiple

Only one root menuitem at a time can be active by default, enabling multiple property changes this behavior to allow multiple root menuitems.

```vue
<PanelMenu :model="items" multiple />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <PanelMenu :model="items" multiple class="w-full md:w-80" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Files',
        icon: 'pi pi-file',
        items: [
            {
                label: 'Documents',
                icon: 'pi pi-file',
                items: [
                    {
                        label: 'Invoices',
                        icon: 'pi pi-file-pdf',
                        items: [
                            {
                                label: 'Pending',
                                icon: 'pi pi-stop'
                            },
                            {
                                label: 'Paid',
                                icon: 'pi pi-check-circle'
                            }
                        ]
                    },
                    {
                        label: 'Clients',
                        icon: 'pi pi-users'
                    }
                ]
            },
            {
                label: 'Images',
                icon: 'pi pi-image',
                items: [
                    {
                        label: 'Logos',
                        icon: 'pi pi-image'
                    }
                ]
            }
        ]
    },
    {
        label: 'Cloud',
        icon: 'pi pi-cloud',
        items: [
            {
                label: 'Upload',
                icon: 'pi pi-cloud-upload'
            },
            {
                label: 'Download',
                icon: 'pi pi-cloud-download'
            },
            {
                label: 'Sync',
                icon: 'pi pi-refresh'
            }
        ]
    },
    {
        label: 'Devices',
        icon: 'pi pi-desktop',
        items: [
            {
                label: 'Phone',
                icon: 'pi pi-mobile'
            },
            {
                label: 'Desktop',
                icon: 'pi pi-desktop'
            },
            {
                label: 'Tablet',
                icon: 'pi pi-tablet'
            }
        ]
    }
]);
<\/script>
```

</details>

## Router

Items with navigation are defined with templating to be able to use a router link component, an external link or programmatic navigation.

```vue
<PanelMenu :model="items">
    <template #item="{ item }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a v-ripple class="flex items-center cursor-pointer text-surface-700 dark:text-surface-0 px-4 py-2" :href="href" @click="navigate">
                <span :class="item.icon" />
                <span class="ml-2">{{ item.label }}</span>
            </a>
        </router-link>
        <a v-else v-ripple class="flex items-center cursor-pointer text-surface-700 dark:text-surface-0 px-4 py-2" :href="item.url" :target="item.target">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
            <span v-if="item.items" class="pi pi-angle-down text-primary ml-auto" />
        </a>
    </template>
</PanelMenu>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <PanelMenu :model="items" class="w-full md:w-80">
            <template #item="{ item }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a v-ripple class="flex items-center cursor-pointer text-surface-700 dark:text-surface-0 px-4 py-2" :href="href" @click="navigate">
                        <span :class="item.icon" />
                        <span class="ml-2">{{ item.label }}</span>
                    </a>
                </router-link>
                <a v-else v-ripple class="flex items-center cursor-pointer text-surface-700 dark:text-surface-0 px-4 py-2" :href="item.url" :target="item.target">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                    <span v-if="item.items" class="pi pi-angle-down text-primary ml-auto" />
                </a>
            </template>
        </PanelMenu>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();

const items = ref([
    {
        label: 'Router',
        icon: 'pi pi-palette',
        items: [
            {
                label: 'Styled',
                icon: 'pi pi-eraser',
                route: '/theming/styled'
            },
            {
                label: 'Unstyled',
                icon: 'pi pi-heart',
                route: '/theming/unstyled'
            }
        ]
    },
    {
        label: 'Programmatic',
        icon: 'pi pi-link',
        command: () => {
            router.push('/introduction');
        }
    },
    {
        label: 'External',
        icon: 'pi pi-home',
        items: [
            {
                label: 'Vue.js',
                icon: 'pi pi-star',
                url: 'https://vuejs.org/'
            },
            {
                label: 'Vite.js',
                icon: 'pi pi-bookmark',
                url: 'https://vuejs.org/'
            }
        ]
    }
]);
<\/script>
```

</details>

## Template

PanelMenu offers item customization with the item template that receives the menuitem instance from the model as a parameter.

```vue
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
```

<details>
<summary>Composition API Example</summary>

```vue
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
```

</details>
