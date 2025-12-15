# Vue Navbar Component

Menubar also known as Navbar, is a horizontal menu component.

## Import

```javascript
import Menubar from 'primevue/menubar';
```

## Accessibility

Screen Reader Menubar component uses the menubar role and the value to describe the menu can either be provided with aria-labelledby or aria-label props. Each list item has a menuitem role with aria-label referring to the label of the item and aria-disabled defined if the item is disabled. A submenu within a MenuBar uses the menu role with an aria-labelledby defined as the id of the submenu root menuitem label. In addition, menuitems that open a submenu have aria-haspopup , aria-expanded and aria-controls to define the relation between the item and the submenu. In mobile viewports, a menu icon appears with a button role along with aria-haspopup , aria-expanded and aria-controls to manage the relation between the overlay menubar and the button. The value to describe the button can be defined aria-label or aria-labelledby specified using buttonProps , by default navigation key of the aria property from the locale API as the aria-label . Keyboard Support Key Function tab Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the next focusable item in the page tab sequence. shift + tab Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the previous focusable item in the page tab sequence. enter If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays. space If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays. escape If focus is inside a popup submenu, closes the submenu and moves focus to the root item of the closed submenu. down arrow If focus is on a root element, open a submenu and moves focus to the first element in the submenu otherwise moves focus to the next menuitem within the submenu. up arrow If focus is on a root element, opens a submenu and moves focus to the last element in the submenu otherwise moves focus to the previous menuitem within the submenu. right arrow If focus is on a root element, moves focus to the next menuitem otherwise opens a submenu if there is one available and moves focus to the first item. left arrow If focus is on a root element, moves focus to the previous menuitem otherwise closes a submenu and moves focus to the root item of the closed submenu. home Moves focus to the first menuitem within the submenu. end Moves focus to the last menuitem within the submenu. any printable character Moves focus to the menuitem whose label starts with the characters being typed.

## Advanced

Menubar is a simple horizontal navigation component, for advanced use cases consider Marketing and Application NavBars in PrimeBlocks or templates with horizontal menus in application templates.

## Basic

Menubar requires a collection of menuitems as its model .

```vue
<Menubar :model="items" />
```

## Command

The command property defines the callback to run when an item is activated by click or a key event.

```vue
<Menubar :model="items" />
<Toast />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Menubar :model="items" />
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

## Router

Items with navigation are defined with templating to be able to use a router link component, an external link or programmatic navigation.

```vue
<Menubar :model="items">
    <template #item="{ item, props, hasSubmenu }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                <span :class="item.icon" />
                <span>{{ item.label }}</span>
            </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
            <span :class="item.icon" />
            <span>{{ item.label }}</span>
            <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
        </a>
    </template>
</Menubar>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Menubar :model="items">
            <template #item="{ item, props, hasSubmenu }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                        <span :class="item.icon" />
                        <span>{{ item.label }}</span>
                    </a>
                </router-link>
                <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                    <span :class="item.icon" />
                    <span>{{ item.label }}</span>
                    <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
                </a>
            </template>
        </Menubar>
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
                url: 'https://vitejs.dev/'
            }
        ]
    }
]);
<\/script>
```

</details>

## Template

Menubar offers item customization with the item template that receives the menuitem instance from the model as a parameter. Additional slots named start and end are provided to embed content before or after the menu.

```vue
<Menubar :model="items">
    <template #start>
        <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-8">
            <path d="..." fill="var(--p-primary-color)" />
            <path d="..." fill="var(--p-text-color)" />
        </svg>
    </template>
    <template #item="{ item, props, hasSubmenu, root }">
        <a v-ripple class="flex items-center" v-bind="props.action">
            <span>{{ item.label }}</span>
            <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
            <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
            <i v-if="hasSubmenu" :class="['pi pi-angle-down ml-auto', { 'pi-angle-down': root, 'pi-angle-right': !root }]"></i>
        </a>
    </template>
    <template #end>
        <div class="flex items-center gap-2">
            <InputText placeholder="Search" type="text" class="w-32 sm:w-auto" />
            <Avatar image="/images/avatar/amyelsner.png" shape="circle" />
        </div>
    </template>
</Menubar>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Menubar :model="items">
            <template #start>
                <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-8">
                    <path
                        d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"
                        fill="var(--p-primary-color)"
                    />
                    <path
                        d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z"
                        fill="var(--p-text-color)"
                    />
                </svg>
            </template>
            <template #item="{ item, props, hasSubmenu, root }">
                <a v-ripple class="flex items-center" v-bind="props.action">
                    <span>{{ item.label }}</span>
                    <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
                    <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
                    <i v-if="hasSubmenu" :class="['pi pi-angle-down ml-auto', { 'pi-angle-down': root, 'pi-angle-right': !root }]"></i>
                </a>
            </template>
            <template #end>
                <div class="flex items-center gap-2">
                    <InputText placeholder="Search" type="text" class="w-32 sm:w-auto" />
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                </div>
            </template>
        </Menubar>
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home'
    },
    {
        label: 'Projects',
        icon: 'pi pi-search',
        badge: 3,
        items: [
            {
                label: 'Core',
                icon: 'pi pi-bolt',
                shortcut: '⌘+S'
            },
            {
                label: 'Blocks',
                icon: 'pi pi-server',
                shortcut: '⌘+B'
            },
            {
                separator: true
            },
            {
                label: 'UI Kit',
                icon: 'pi pi-pencil',
                shortcut: '⌘+U'
            }
        ]
    }
]);
<\/script>
```

</details>
