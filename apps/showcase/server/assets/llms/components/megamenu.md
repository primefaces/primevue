# Vue MegaMenu Component

MegaMenu is a navigation component that displays submenus and content in columns.

## Import

```javascript
import MegaMenu from 'primevue/megamenu';
```

## Accessibility

Screen Reader MegaMenu component uses the menubar role along with aria-orientation and the value to describe the component can either be provided with aria-labelledby or aria-label props. Each list item has a menuitem role with aria-label referring to the label of the item and aria-disabled defined if the item is disabled. A submenu within a MegaMenu uses the menu role with an aria-labelledby defined as the id of the submenu root menuitem label. In addition, root menuitems that open a submenu have aria-haspopup and aria-expanded to define the relation between the item and the submenu. Keyboard Support Key Function tab Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the next focusable item in the page tab sequence. shift + tab Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the previous focusable item in the page tab sequence. enter If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays. space If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays. escape If focus is inside a popup submenu, closes the submenu and moves focus to the root item of the closed submenu. down arrow If focus is on a root element, open a submenu and moves focus to the first element in the submenu otherwise moves focus to the next menuitem within the submenu. up arrow If focus is on a root element, opens a submenu and moves focus to the last element in the submenu otherwise moves focus to the previous menuitem within the submenu. alt + up arrow If focus is inside a popup menu, moves focus to the first element in the submenu otherwise closes the submenu and moves focus to the root item of the closed submenu in horizontal mode. right arrow If focus is on a root element, moves focus to the next menuitem. If the focus in inside a submenu, moves focus to the first menuitem of the next menu group. left arrow If focus is on a root element, moves focus to the previous menuitem. If the focus in inside a submenu, moves focus to the first menuitem of the previous menu group. home Moves focus to the first menuitem within the submenu. end Moves focus to the last menuitem within the submenu. any printable character Moves focus to the menuitem whose label starts with the characters being typed.

## Basic

MegaMenu requires a collection of menuitems as its model .

```vue
<MegaMenu :model="items" />
```

## Command

The command property of a menuitem defines the callback to run when an item is activated by click or a key event.

```vue
{ label: 'Log out', icon: 'pi pi-signout', command: () => { // Callback to run } }
```

## Router

Items with navigation are defined with templating to be able to use a router link component, an external link or programmatic navigation.

```vue
<MegaMenu :model="items">
    <template #item="{ item }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a v-ripple :href="href" @click="navigate">
                <span :class="item.icon" />
                <span class="ml-2">{{ item.label }}</span>
            </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
        </a>
    </template>
</MegaMenu>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <MegaMenu :model="items">
            <template #item="{ item }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a v-ripple :href="href" @click="navigate">
                        <span :class="item.icon" />
                        <span class="ml-2">{{ item.label }}</span>
                    </a>
                </router-link>
                <a v-else v-ripple :href="item.url" :target="item.target">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                </a>
            </template>
        </MegaMenu>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();

const items = ref([
    {
        label: 'Navigation',
        icon: 'pi pi-link',
        items: [
            [
                {
                    label: 'Router',
                    items: [
                        { label: 'Theming', route: '/theming/styled' },
                        { label: 'Unstyled', route: '/theming/unstyled' }
                    ]
                }
            ],
            [
                {
                    label: 'Programmatic',
                    items: [
                        {
                            label: 'Installation',
                            command: () => {
                                router.push('/introduction');
                            }
                        }
                    ]
                }
            ],
            [
                {
                    label: 'External',
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
            ]
        ]
    }
]);
<\/script>
```

</details>

## Template

MegaMenu offers item customization with the item template that receives the menuitem instance from the model as a parameter. Additional slots named start and end are provided to embed content before or after the menu.

```vue
<MegaMenu :model="items" class="p-4 bg-surface-0" style="border-radius: 3rem">
    <template #start>
        <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-8">
            <path d="..." fill="var(--p-primary-color)" />
            <path d="..." fill="var(--p-text-color)" />
        </svg>
    </template>
    <template #item="{ item }">
        <a v-if="item.root" class="flex items-center cursor-pointer px-4 py-2 overflow-hidden relative font-semibold text-lg uppercase" style="border-radius: 2rem">
            <span>{{ item.label }}</span>
        </a>
        <a v-else-if="!item.image" class="flex items-center p-4 cursor-pointer mb-2 gap-3">
            <span class="inline-flex items-center justify-center rounded-full bg-primary text-primary-contrast w-12 h-12">
                <i :class="[item.icon, 'text-lg']"></i>
            </span>
            <span class="inline-flex flex-col gap-1">
                <span class="font-bold text-lg">{{ item.label }}</span>
                <span class="whitespace-nowrap">{{ item.subtext }}</span>
            </span>
        </a>
        <div v-else class="flex flex-col items-start gap-4 p-2">
            <img alt="megamenu-demo" :src="item.image" class="w-full" />
            <span>{{ item.subtext }}</span>
            <Button :label="item.label" variant="outlined" />
        </div>
    </template>
    <template #end>
        <Avatar image="/images/avatar/amyelsner.png" shape="circle" />
    </template>
</MegaMenu>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <MegaMenu :model="items" class="p-4 bg-surface-0" style="border-radius: 3rem">
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
            <template #item="{ item }">
                <a v-if="item.root" class="flex items-center cursor-pointer px-4 py-2 overflow-hidden relative font-semibold text-lg uppercase" style="border-radius: 2rem">
                    <span>{{ item.label }}</span>
                </a>
                <a v-else-if="!item.image" class="flex items-center p-4 cursor-pointer mb-2 gap-3">
                    <span class="inline-flex items-center justify-center rounded-full bg-primary text-primary-contrast w-12 h-12">
                        <i :class="[item.icon, 'text-lg']"></i>
                    </span>
                    <span class="inline-flex flex-col gap-1">
                        <span class="font-bold text-lg">{{ item.label }}</span>
                        <span class="whitespace-nowrap">{{ item.subtext }}</span>
                    </span>
                </a>
                <div v-else class="flex flex-col items-start gap-4 p-2">
                    <img alt="megamenu-demo" :src="item.image" class="w-full" />
                    <span>{{ item.subtext }}</span>
                    <Button :label="item.label" variant="outlined" />
                </div>
            </template>
            <template #end>
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
            </template>
        </MegaMenu>
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Company',
        root: true,
        items: [
            [
                {
                    items: [
                        { label: 'Features', icon: 'pi pi-list', subtext: 'Subtext of item' },
                        { label: 'Customers', icon: 'pi pi-users', subtext: 'Subtext of item' },
                        { label: 'Case Studies', icon: 'pi pi-file', subtext: 'Subtext of item' }
                    ]
                }
            ],
            [
                {
                    items: [
                        { label: 'Solutions', icon: 'pi pi-shield', subtext: 'Subtext of item' },
                        { label: 'Faq', icon: 'pi pi-question', subtext: 'Subtext of item' },
                        { label: 'Library', icon: 'pi pi-search', subtext: 'Subtext of item' }
                    ]
                }
            ],
            [
                {
                    items: [
                        { label: 'Community', icon: 'pi pi-comments', subtext: 'Subtext of item' },
                        { label: 'Rewards', icon: 'pi pi-star', subtext: 'Subtext of item' },
                        { label: 'Investors', icon: 'pi pi-globe', subtext: 'Subtext of item' }
                    ]
                }
            ],
            [
                {
                    items: [{ image: 'https://primefaces.org/cdn/primevue/images/uikit/uikit-system.png', label: 'GET STARTED', subtext: 'Build spectacular apps in no time.' }]
                }
            ]
        ]
    },
    {
        label: 'Resources',
        root: true
    },
    {
        label: 'Contact',
        root: true
    }
]);
<\/script>
```

</details>

## VerticalDoc

Layout of the MegaMenu is configured with the orientation property that accepts horizontal and vertical as options.

```vue
<MegaMenu :model="items" orientation="vertical" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <MegaMenu :model="items" orientation="vertical" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Furniture',
        icon: 'pi pi-box',
        items: [
            [
                {
                    label: 'Living Room',
                    items: [{ label: 'Accessories' }, { label: 'Armchair' }, { label: 'Coffee Table' }, { label: 'Couch' }, { label: 'TV Stand' }]
                }
            ],
            [
                {
                    label: 'Kitchen',
                    items: [{ label: 'Bar stool' }, { label: 'Chair' }, { label: 'Table' }]
                },
                {
                    label: 'Bathroom',
                    items: [{ label: 'Accessories' }]
                }
            ],
            [
                {
                    label: 'Bedroom',
                    items: [{ label: 'Bed' }, { label: 'Chaise lounge' }, { label: 'Cupboard' }, { label: 'Dresser' }, { label: 'Wardrobe' }]
                }
            ],
            [
                {
                    label: 'Office',
                    items: [{ label: 'Bookcase' }, { label: 'Cabinet' }, { label: 'Chair' }, { label: 'Desk' }, { label: 'Executive Chair' }]
                }
            ]
        ]
    },
    {
        label: 'Electronics',
        icon: 'pi pi-mobile',
        items: [
            [
                {
                    label: 'Computer',
                    items: [{ label: 'Monitor' }, { label: 'Mouse' }, { label: 'Notebook' }, { label: 'Keyboard' }, { label: 'Printer' }, { label: 'Storage' }]
                }
            ],
            [
                {
                    label: 'Home Theater',
                    items: [{ label: 'Projector' }, { label: 'Speakers' }, { label: 'TVs' }]
                }
            ],
            [
                {
                    label: 'Gaming',
                    items: [{ label: 'Accessories' }, { label: 'Console' }, { label: 'PC' }, { label: 'Video Games' }]
                }
            ],
            [
                {
                    label: 'Appliances',
                    items: [{ label: 'Coffee Machine' }, { label: 'Fridge' }, { label: 'Oven' }, { label: 'Vaccum Cleaner' }, { label: 'Washing Machine' }]
                }
            ]
        ]
    },
    {
        label: 'Sports',
        icon: 'pi pi-clock',
        items: [
            [
                {
                    label: 'Football',
                    items: [{ label: 'Kits' }, { label: 'Shoes' }, { label: 'Shorts' }, { label: 'Training' }]
                }
            ],
            [
                {
                    label: 'Running',
                    items: [{ label: 'Accessories' }, { label: 'Shoes' }, { label: 'T-Shirts' }, { label: 'Shorts' }]
                }
            ],
            [
                {
                    label: 'Swimming',
                    items: [{ label: 'Kickboard' }, { label: 'Nose Clip' }, { label: 'Swimsuits' }, { label: 'Paddles' }]
                }
            ],
            [
                {
                    label: 'Tennis',
                    items: [{ label: 'Balls' }, { label: 'Rackets' }, { label: 'Shoes' }, { label: 'Training' }]
                }
            ]
        ]
    }
]);
<\/script>
```

</details>
