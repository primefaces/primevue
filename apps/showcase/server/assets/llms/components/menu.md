# Vue Menu Component

Menu displays a list of items in vertical orientation.

## Import

```javascript
import Menu from 'primevue/menu';
```

## Accessibility

Screen Reader Menu component uses the menu role and the value to describe the menu can either be provided with aria-labelledby or aria-label props. Each list item has a menuitem role with aria-label referring to the label of the item and aria-disabled defined if the item is disabled. In popup mode, the component implicitly manages the aria-expanded , aria-haspopup and aria-controls attributes of the target element to define the relation between the target and the popup. Keyboard Support Key Function tab Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the next focusable item in the page tab sequence. shift + tab Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the previous focusable item in the page tab sequence. enter Activates the focused menuitem. If menu is in overlay mode, popup gets closes and focus moves to target. space Activates the focused menuitem. If menu is in overlay mode, popup gets closes and focus moves to target. escape If menu is in overlay mode, popup gets closes and focus moves to target. down arrow Moves focus to the next menuitem. up arrow Moves focus to the previous menuitem. alt + up arrow If menu is in overlay mode, popup gets closes and focus moves to the target. home Moves focus to the first menuitem. end Moves focus to the last menuitem.

## Basic

Menu requires a collection of menuitems as its model .

```vue
<Menu :model="items" />
```

## Command

The command property defines the callback to run when an item is activated by click or a key event.

```vue
<Menu :model="items" />
<Toast />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Menu :model="items" />
        <Toast />
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useToast } from "primevue/usetoast";

const toast = useToast();

const items = ref([
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
            toast.add({ severity: 'warn', summary: 'Search Completed', detail: 'No results found', life: 3000 });
        }
    }
]);
<\/script>
```

</details>

## Group

Menu supports single level of grouping by defining children with the items property.

```vue
<Menu :model="items" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Menu :model="items" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Documents',
        items: [
            {
                label: 'New',
                icon: 'pi pi-plus'
            },
            {
                label: 'Search',
                icon: 'pi pi-search'
            }
        ]
    },
    {
        label: 'Profile',
        items: [
            {
                label: 'Settings',
                icon: 'pi pi-cog'
            },
            {
                label: 'Logout',
                icon: 'pi pi-sign-out'
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
<Button type="button" icon="pi pi-ellipsis-v" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
<Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Button type="button" icon="pi pi-ellipsis-v" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const menu = ref();
const items = ref([
    {
        label: 'Options',
        items: [
            {
                label: 'Refresh',
                icon: 'pi pi-refresh'
            },
            {
                label: 'Export',
                icon: 'pi pi-upload'
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
<Menu :model="items">
    <template #item="{ item, props }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                <span :class="item.icon" />
                <span class="ml-2">{{ item.label }}</span>
            </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
        </a>
    </template>
</Menu>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Menu :model="items">
            <template #item="{ item, props }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                        <span :class="item.icon" />
                        <span class="ml-2">{{ item.label }}</span>
                    </a>
                </router-link>
                <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                </a>
            </template>
        </Menu>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();

const items = ref([
    {
        label: 'Router Link',
        icon: 'pi pi-palette',
        route: '/theming/unstyled'
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
        url: 'https://vuejs.org/'
    }
]);
<\/script>
```

</details>

## Template

Menu offers item customization with the item template that receives the menuitem instance from the model as a parameter. The submenu label has its own submenulabel template, additional slots named start and end are provided to embed content before or after the menu.

```vue
<Menu :model="items" class="w-full md:w-60">
    <template #start>
        <span class="inline-flex items-center gap-1 px-2 py-2">
            <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-8">
                <path d="..." fill="var(--p-primary-color)" />
                <path d="..." fill="var(--p-text-color)" />
            </svg>
            <span class="text-xl font-semibold">PRIME<span class="text-primary">APP</span></span>
        </span>
    </template>
    <template #submenulabel="{ item }">
        <span class="text-primary font-bold">{{ item.label }}</span>
    </template>
    <template #item="{ item, props }">
        <a v-ripple class="flex items-center" v-bind="props.action">
            <span :class="item.icon" />
            <span>{{ item.label }}</span>
            <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
            <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
        </a>
    </template>
    <template #end>
        <button v-ripple class="relative overflow-hidden w-full border-0 bg-transparent flex items-start p-2 pl-4 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-none cursor-pointer transition-colors duration-200">
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="mr-2" shape="circle" />
            <span class="inline-flex flex-col items-start">
                <span class="font-bold">Amy Elsner</span>
                <span class="text-sm">Admin</span>
            </span>
        </button>
    </template>
</Menu>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Menu :model="items" class="w-full md:w-60">
            <template #start>
                <span class="inline-flex items-center gap-1 px-2 py-2">
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
                    <span class="text-xl font-semibold">PRIME<span class="text-primary">APP</span></span>
                </span>
            </template>
            <template #submenulabel="{ item }">
                <span class="text-primary font-bold">{{ item.label }}</span>
            </template>
            <template #item="{ item, props }">
                <a v-ripple class="flex items-center" v-bind="props.action">
                    <span :class="item.icon" />
                    <span>{{ item.label }}</span>
                    <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
                    <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
                </a>
            </template>
            <template #end>
                <button v-ripple class="relative overflow-hidden w-full border-0 bg-transparent flex items-start p-2 pl-4 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-none cursor-pointer transition-colors duration-200">
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="mr-2" shape="circle" />
                    <span class="inline-flex flex-col items-start">
                        <span class="font-bold">Amy Elsner</span>
                        <span class="text-sm">Admin</span>
                    </span>
                </button>
            </template>
        </Menu>
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        separator: true
    },
    {
        label: 'Documents',
        items: [
            {
                label: 'New',
                icon: 'pi pi-plus',
                shortcut: '⌘+N'
            },
            {
                label: 'Search',
                icon: 'pi pi-search',
                shortcut: '⌘+S'
            }
        ]
    },
    {
        label: 'Profile',
        items: [
            {
                label: 'Settings',
                icon: 'pi pi-cog',
                shortcut: '⌘+O'
            },
            {
                label: 'Messages',
                icon: 'pi pi-inbox',
                badge: 2
            },
            {
                label: 'Logout',
                icon: 'pi pi-sign-out',
                shortcut: '⌘+Q'
            }
        ]
    },
    {
        separator: true
    }
]);
<\/script>
```

</details>
