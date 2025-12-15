# Vue TieredMenu Component

TieredMenu displays submenus in nested overlays.

## Import

```javascript
import TieredMenu from 'primevue/tieredmenu';
```

## Accessibility

Screen Reader TieredMenu component uses the menubar role with aria-orientation set to "vertical" and the value to describe the menu can either be provided with aria-labelledby or aria-label props. Each list item has a menuitem role with aria-label referring to the label of the item and aria-disabled defined if the item is disabled. A submenu within a TieredMenu uses the menu role with an aria-labelledby defined as the id of the submenu root menuitem label. In addition, menuitems that open a submenu have aria-haspopup and aria-expanded to define the relation between the item and the submenu. In popup mode, the component implicitly manages the aria-expanded , aria-haspopup and aria-controls attributes of the target element to define the relation between the target and the popup. Keyboard Support Key Function tab Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the next focusable item in the page tab sequence. shift + tab Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the previous focusable item in the page tab sequence. enter If menuitem has a submenu, opens the submenu otherwise activates the menuitem and closes all open overlays. space If menuitem has a submenu, opens the submenu otherwise activates the menuitem and closes all open overlays. escape If focus is inside a popup submenu, closes the submenu and moves focus to the root item of the closed submenu. down arrow Moves focus to the next menuitem within the submenu. up arrow Moves focus to the previous menuitem within the submenu. alt + up arrow Closes the popup, then moves focus to the target element. right arrow If option is closed, opens the option otherwise moves focus to the first child option. left arrow If option is open, closes the option otherwise moves focus to the parent option. home Moves focus to the first menuitem within the submenu. end Moves focus to the last menuitem within the submenu. any printable character Moves focus to the menuitem whose label starts with the characters being typed.

## Basic

TieredMenu requires a collection of menuitems as its model .

```vue
<TieredMenu :model="items" />
```

## Command

The command property defines the callback to run when an item is activated by click or a key event.

```vue
<TieredMenu :model="items" />
<Toast />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <TieredMenu :model="items" />
        <Toast />
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useToast } from "primevue/usetoast";

const toast = useToast();

const items = ref([
    {
        label: 'File',
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
                label: 'Print',
                icon: 'pi pi-print',
                command: () => {
                    toast.add({ severity: 'error', summary: 'Error', detail: 'No printer connected', life: 3000 });
                }
            }
        ]
    },
    {
        label: 'Search',
        icon: 'pi pi-search',
        command: () => {
            toast.add({ severity: 'warn', summary: 'Search Results', detail: 'No results found', life: 3000 });
        }
    },
    {
        separator: true
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
    }
]);
<\/script>
```

</details>

## Popup

Overlay mode is enabled by adding popup property and calling toggle function of the menu ref with an event of the target.

```vue
<Button type="button" label="Toggle" @click="toggle" aria-haspopup="true" aria-controls="overlay_tmenu" />
<TieredMenu ref="menu" id="overlay_tmenu" :model="items" popup />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Button type="button" label="Toggle" @click="toggle" aria-haspopup="true" aria-controls="overlay_tmenu" />
        <TieredMenu ref="menu" id="overlay_tmenu" :model="items" popup />
    </div>
</template>

<script setup>
import { ref } from "vue";

const menu = ref();
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

const toggle = (event) => {
    menu.value.toggle(event);
};
<\/script>
```

</details>

## Router

Items with navigation are defined with templating to be able to use a router link component, an external link or programmatic navigation.

```vue
<TieredMenu :model="items">
    <template #item="{ item, props, hasSubmenu }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                <span :class="item.icon" />
                <span class="ml-2">{{ item.label }}</span>
            </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
            <span v-if="hasSubmenu" class="pi pi-angle-right ml-auto" />
        </a>
    </template>
</TieredMenu>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <TieredMenu :model="items">
            <template #item="{ item, props, hasSubmenu }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                        <span :class="item.icon" />
                        <span class="ml-2">{{ item.label }}</span>
                    </a>
                </router-link>
                <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                    <span v-if="hasSubmenu" class="pi pi-angle-right ml-auto" />
                </a>
            </template>
        </TieredMenu>
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
                route: '/theming/styled'
            },
            {
                label: 'Unstyled',
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
                url: 'https://vuejs.org/'
            },
            {
                label: 'Vite.js',
                url: 'https://vuejs.org/'
            }
        ]
    }
]);
<\/script>
```

</details>

## Template

TieredMenu offers item customization with the item template that receives the menuitem instance from the model as a parameter.

```vue
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
```

<details>
<summary>Composition API Example</summary>

```vue
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
```

</details>
