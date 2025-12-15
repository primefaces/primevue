# Vue ContextMenu Component

ContextMenu displays an overlay menu to display actions related to an element.

## Import

```javascript
import ContextMenu from 'primevue/contextmenu';
```

## Accessibility

Screen Reader ContextMenu component uses the menubar role with aria-orientation set to "vertical" and the value to describe the menu can either be provided with aria-labelledby or aria-label props. Each list item has a menuitem role with aria-label referring to the label of the item and aria-disabled defined if the item is disabled. A submenu within a ContextMenu uses the menu role with an aria-labelledby defined as the id of the submenu root menuitem label. In addition, menuitems that open a submenu have aria-haspopup and aria-expanded to define the relation between the item and the submenu. Keyboard Support Key Function tab When focus is in the menu, closes the context menu and moves focus to the next focusable element in the page sequence. enter If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays. space If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays. escape Closes the context menu. down arrow If focus is not inside the menu and menu is open, add focus to the first item. If an item is already focused, moves focus to the next menuitem within the submenu. up arrow If focus is not inside the menu and menu is open, add focus to the last item. If an item is already focused, moves focus to the next menuitem within the submenu. right arrow Opens a submenu if there is one available and moves focus to the first item. left arrow Closes a submenu and moves focus to the root item of the closed submenu. home Moves focus to the first menuitem within the submenu. end Moves focus to the last menuitem within the submenu. any printable character Moves focus to the menuitem whose label starts with the characters being typed.

## Basic

ContextMenu requires a collection of menuitems as its model and the show method needs to be called explicity using an event of the target like contextmenu to display the menu.

```vue
<img alt="Logo" src="/images/nature/nature2.jpg" class="w-full md:w-[30rem] rounded shadow-lg" @contextmenu="onImageRightClick" aria-haspopup="true" />
<ContextMenu ref="menu" :model="items" />
```

## Command

The command property defines the callback to run when an item is activated by click or a key event.

```vue
<ul class="m-0 list-none border border-surface rounded p-4 flex flex-col gap-2 w-full sm:w-96">
    <li
        v-for="user in users"
        :key="user.id"
        :class="['p-2 hover:bg-emphasis rounded border border-transparent transition-all duration-200 flex items-center justify-content-between', { 'border-primary': selectedUser?.id === user.id }]"
        @contextmenu="onRightClick($event, user)"
    >
        <div class="flex flex-1 items-center gap-2">
            <img :alt="user.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${user.image}\`" class="w-8 h-8" />
            <span class="font-bold">{{ user.name }}</span>
        </div>
        <Tag :value="user.role" :severity="getBadge(user)" />
    </li>
</ul>
<ContextMenu ref="menu" :model="items" @hide="selectedUser = null" />
<Toast />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex sm:justify-center">
        <ul class="m-0 list-none border border-surface rounded p-4 flex flex-col gap-2 w-full sm:w-96">
            <li
                v-for="user in users"
                :key="user.id"
                :class="['p-2 hover:bg-emphasis rounded border border-transparent transition-all duration-200 flex items-center justify-content-between', { 'border-primary': selectedUser?.id === user.id }]"
                @contextmenu="onRightClick($event, user)"
            >
                <div class="flex flex-1 items-center gap-2">
                    <img :alt="user.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${user.image}\`" class="w-8 h-8" />
                    <span class="font-bold">{{ user.name }}</span>
                </div>
                <Tag :value="user.role" :severity="getBadge(user)" />
            </li>
        </ul>
        <ContextMenu ref="menu" :model="items" @hide="selectedUser = null" />
        <Toast />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from "primevue/usetoast";

const toast = useToast();
const selectedUser = ref();
const menu = ref();
const users = ref([
    { id: 0, name: 'Amy Elsner', image: 'amyelsner.png', role: 'Admin' },
    { id: 1, name: 'Anna Fali', image: 'annafali.png', role: 'Member' },
    { id: 2, name: 'Asiya Javayant', image: 'asiyajavayant.png', role: 'Member' },
    { id: 3, name: 'Bernardo Dominic', image: 'bernardodominic.png', role: 'Guest' },
    { id: 4, name: 'Elwin Sharvill', image: 'elwinsharvill.png', role: 'Member' }
]);
const items = ref([
    {
        label: 'Roles',
        icon: 'pi pi-users',
        items: [
            {
                label: 'Admin',
                command: () => {
                    selectedUser.value.role = 'Admin';
                }
            },
            {
                label: 'Member',
                command: () => {
                    selectedUser.value.role = 'Member';
                }
            },
            {
                label: 'Guest',
                command: () => {
                    selectedUser.value.role = 'Guest';
                }
            }
        ]
    },
    {
        label: 'Invite',
        icon: 'pi pi-user-plus',
        command: () => {
            toast.add({ severity: 'success', summary: 'Success', detail: 'Invitation sent!', life: 3000 });
        }
    }
]);

const onRightClick = (event, user) => {
    selectedUser.value = user;
    menu.value.show(event);
};

const getBadge = (user) => {
    if (user.role === 'Member') return 'info';
    else if (user.role === 'Guest') return 'warn';
    else return null;
}
<\/script>
```

</details>

## DataTable

DataTable has built-in support for ContextMenu, see the ContextMenu demo for an example.

## Document

Setting global property attaches the context menu to the document.

```vue
<ContextMenu global :model="items" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card text-center">
        <p class="mb-0">Right-Click anywhere on this page to view the global ContextMenu.</p>
        <ContextMenu global :model="items" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Translate',
        icon: 'pi pi-language'
    },
    {
        label: 'Speech',
        icon: 'pi pi-volume-up',
        items: [
            {
                label: 'Start',
                icon: 'pi pi-caret-right'
            },
            {
                label: 'Stop',
                icon: 'pi pi-pause'
            }
        ]
    },
    {
        separator: true
    },
    {
        label: 'Print',
        icon: 'pi pi-print'
    }
]);
<\/script>
```

</details>

## Router

Items with navigation are defined with templating to be able to use a router link component, an external link or programmatic navigation.

```vue
<span class="inline-flex items-center justify-center border-2 border-primary rounded w-16 h-16" @contextmenu="onRightClick" aria-haspopup="true">
    <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="..." fill="var(--p-primary-color)" />
        <path d="..." fill="var(--p-text-color)" />
    </svg>
</span>
<ContextMenu ref="routemenu" :model="items">
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
</ContextMenu>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <span class="inline-flex items-center justify-center border-2 border-primary rounded w-16 h-16" @contextmenu="onRightClick" aria-haspopup="true">
            <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"
                    fill="var(--p-primary-color)"
                />
                <path
                    d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z"
                    fill="var(--p-text-color)"
                />
            </svg>
        </span>
        <ContextMenu ref="routemenu" :model="items">
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
        </ContextMenu>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const routemenu = ref();
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

const onRightClick = (event) => {
    routemenu.value.show(event);
};
<\/script>
```

</details>

## Template

ContextMenu offers item customization with the item template that receives the menuitem instance from the model as a parameter.

```vue
<ul class="m-0 p-0 list-none border border-surface-200 dark:border-surface-700 rounded p-4 flex flex-col gap-2 w-full md:w-[30rem]">
    <li
        v-for="product in products"
        :key="product.id"
        :class="['p-2 hover:bg-surface-100 dark:hover:bg-surface-800 rounded border border-transparent transition-all transition-duration-200', { 'border-primary': selectedId === product.id }]"
        @contextmenu="onRightClick($event, product.id)"
    >
        <div class="flex flex-wrap p-2 items-center gap-4">
            <img class="w-16 shrink-0 rounded" :src="'/images/product/' + product.image" :alt="product.name" />
            <div class="flex-1 flex flex-col gap-1">
                <span class="font-bold">{{ product.name }}</span>
                <div class="flex items-center gap-2">
                    <i class="pi pi-tag text-sm"></i>
                    <span>{{ product.category }}</span>
                </div>
            </div>
            <span class="font-bold ml-8">\${{ product.price }}</span>
        </div>
    </li>
</ul>
<ContextMenu ref="menu" :model="items" @hide="selectedId = null">
    <template #item="{ item, props }">
        <a v-ripple class="flex items-center" v-bind="props.action">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
            <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
            <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
            <i v-if="item.items" class="pi pi-angle-right ml-auto"></i>
        </a>
    </template>
</ContextMenu>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex md:justify-center">
        <ul class="m-0 p-0 list-none border border-surface-200 dark:border-surface-700 rounded p-4 flex flex-col gap-2 w-full md:w-[30rem]" @hide="selectedId = null">
            <li
                v-for="product in products"
                :key="product.id"
                :class="['p-2 hover:bg-surface-100 dark:hover:bg-surface-800 rounded border border-transparent transition-all transition-duration-200', { 'border-primary': selectedId === product.id }]"
                @contextmenu="onRightClick($event, product.id)"
            >
                <div class="flex flex-wrap p-2 items-center gap-4">
                    <img class="w-16 shrink-0 rounded" :src="'https://primefaces.org/cdn/primevue/images/product/' + product.image" :alt="product.name" />
                    <div class="flex-1 flex flex-col gap-1">
                        <span class="font-bold">{{ product.name }}</span>
                        <div class="flex items-center gap-2">
                            <i class="pi pi-tag text-sm"></i>
                            <span>{{ product.category }}</span>
                        </div>
                    </div>
                    <span class="font-bold ml-8">\${{ product.price }}</span>
                </div>
            </li>
        </ul>
        <ContextMenu ref="menu" :model="items">
            <template #item="{ item, props }">
                <a v-ripple class="flex items-center" v-bind="props.action">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                    <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
                    <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
                    <i v-if="item.items" class="pi pi-angle-right ml-auto"></i>
                </a>
            </template>
        </ContextMenu>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService'

const menu = ref();
const items = ref([
    {
        label: 'Favorite',
        icon: 'pi pi-star',
        shortcut: '⌘+D'
    },
    {
        label: 'Add',
        icon: 'pi pi-shopping-cart',
        shortcut: '⌘+A'
    },
    {
        separator: true
    },
    {
        label: 'Share',
        icon: 'pi pi-share-alt',
        items: [
            {
                label: 'Whatsapp',
                icon: 'pi pi-whatsapp',
                badge: 2
            },
            {
                label: 'Instagram',
                icon: 'pi pi-instagram',
                badge: 3
            }
        ]
    }
]);

const products = ref(null);
const selectedId = ref(null);

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data));
});

const onRightClick = (event, id) => {
    selectedId.value = id;
    menu.value.show(event);
};

<\/script>
```

</details>
