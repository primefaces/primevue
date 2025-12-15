# Vue Tabs Component

Tabs facilitates seamless switching between different views.

## Import

```javascript
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
```

## Accessibility

Screen Reader The tabs container in TabList is defined with the tablist role, as any attribute is passed to the container element aria-labelledby can be optionally used to specify an element to describe the Tabs. Each Tab has a tab role along with aria-selected state attribute and aria-controls to refer to the corresponding TabPanel. TabPanel has tabpanel role, an id to match the aria-controls of Tab and aria-labelledby reference to Tab as the accessible name. Tab Keyboard Support Key Function tab Moves focus through the header. enter Activates the focused tab header. space Activates the focused tab header. right arrow Moves focus to the next header. If focus is on the last header, moves focus to the first header. left arrow Moves focus to the previous header. If focus is on the first header, moves focus to the last header. home Moves focus to the last header. end Moves focus to the first header. pageUp Moves scroll position to first header. pageDown Moves scroll position to last header.

## Basic

Tabs is defined using TabList , Tab , TabPanels and TabPanel components. Tab and TabPanel components are associated with their value properties.

```vue
<Tabs value="0">
    <TabList>
        <Tab value="0">Header I</Tab>
        <Tab value="1">Header II</Tab>
        <Tab value="2">Header III</Tab>
    </TabList>
    <TabPanels>
        <TabPanel value="0">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </TabPanel>
        <TabPanel value="1">
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
        </TabPanel>
        <TabPanel value="2">
            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
        </TabPanel>
    </TabPanels>
</Tabs>
```

## Controlled

Tabs can be controlled programmatically using value property as a model.

```vue
<div class="flex mb-2 gap-2 justify-end">
    <Button @click="value = '0'" rounded label="1" class="w-8 h-8 p-0" :outlined="value !== '0'" />
    <Button @click="value = '1'" rounded label="2" class="w-8 h-8 p-0" :outlined="value !== '1'" />
    <Button @click="value = '2'" rounded label="3" class="w-8 h-8 p-0" :outlined="value !== '2'" />
</div>

<Tabs v-model:value="value">
    <TabList>
        <Tab value="0">Header I</Tab>
        <Tab value="1">Header II</Tab>
        <Tab value="2">Header III</Tab>
    </TabList>
    <TabPanels>
        <TabPanel value="0">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </TabPanel>
        <TabPanel value="1">
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
        </TabPanel>
        <TabPanel value="2">
            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
        </TabPanel>
    </TabPanels>
</Tabs>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <div class="flex mb-2 gap-2 justify-end">
            <Button @click="value = '0'" rounded label="1" class="w-8 h-8 p-0" :outlined="value !== '0'" />
            <Button @click="value = '1'" rounded label="2" class="w-8 h-8 p-0" :outlined="value !== '1'" />
            <Button @click="value = '2'" rounded label="3" class="w-8 h-8 p-0" :outlined="value !== '2'" />
        </div>

        <Tabs v-model:value="value">
            <TabList>
                <Tab value="0">Header I</Tab>
                <Tab value="1">Header II</Tab>
                <Tab value="2">Header III</Tab>
            </TabList>
            <TabPanels>
                <TabPanel value="0">
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </TabPanel>
                <TabPanel value="1">
                    <p class="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </TabPanel>
                <TabPanel value="2">
                    <p class="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('0');
<\/script>
```

</details>

## Disabled

Enabling disabled property of a Tab prevents user interaction.

```vue
<Tabs value="0">
    <TabList>
        <Tab value="0">Header I</Tab>
        <Tab value="1">Header II</Tab>
        <Tab value="2">Header III</Tab>
        <Tab disabled>Header IV</Tab>
    </TabList>
    <TabPanels>
        <TabPanel value="0">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </TabPanel>
        <TabPanel value="1">
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
        </TabPanel>
        <TabPanel value="2">
            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
        </TabPanel>
    </TabPanels>
</Tabs>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Tabs value="0">
            <TabList>
                <Tab value="0">Header I</Tab>
                <Tab value="1">Header II</Tab>
                <Tab value="2">Header III</Tab>
                <Tab disabled>Header IV</Tab>
            </TabList>
            <TabPanels>
                <TabPanel value="0">
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </TabPanel>
                <TabPanel value="1">
                    <p class="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </TabPanel>
                <TabPanel value="2">
                    <p class="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
</template>

<script setup>
<\/script>
```

</details>

## Dynamic

Tabs can be generated dynamically using the standard v-for directive on Tab and TabPanel.

```vue
<Tabs value="0">
    <TabList>
        <Tab v-for="tab in tabs" :key="tab.title" :value="tab.value">{{ tab.title }}</Tab>
    </TabList>
    <TabPanels>
        <TabPanel v-for="tab in tabs" :key="tab.content" :value="tab.value">
            <p class="m-0">{{ tab.content }}</p>
        </TabPanel>
    </TabPanels>
</Tabs>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Tabs value="0">
            <TabList>
                <Tab v-for="tab in tabs" :key="tab.title" :value="tab.value">{{ tab.title }}</Tab>
            </TabList>
            <TabPanels>
                <TabPanel v-for="tab in tabs" :key="tab.content" :value="tab.value">
                    <p class="m-0">{{ tab.content }}</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const tabs = ref([
    { title: 'Tab 1', content: 'Tab 1 Content', value: '0' },
    { title: 'Tab 2', content: 'Tab 2 Content', value: '1' },
    { title: 'Tab 3', content: 'Tab 3 Content', value: '2' }
]);
<\/script>
```

</details>

## Scrollable

Adding scrollable property displays navigational buttons at each side to scroll between tabs.

```vue
<Tabs value="0" scrollable>
    <TabList>
        <Tab v-for="tab in scrollableTabs" :key="tab.title" :value="tab.value">
            {{ tab.title }}
        </Tab>
    </TabList>
    <TabPanels>
        <TabPanel v-for="tab in scrollableTabs" :key="tab.content" :value="tab.value">
            <p class="m-0">{{ tab.content }}</p>
        </TabPanel>
    </TabPanels>
</Tabs>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Tabs value="0" scrollable>
            <TabList>
                <Tab v-for="tab in scrollableTabs" :key="tab.title" :value="tab.value">
                    {{ tab.title }}
                </Tab>
            </TabList>
            <TabPanels>
                <TabPanel v-for="tab in scrollableTabs" :key="tab.content" :value="tab.value">
                    <p class="m-0">{{ tab.content }}</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const scrollableTabs = ref(Array.from({ length: 50 }, (_, i) => ({ title: \`Tab \${i + 1}\`, content: \`Tab \${i + 1} Content\`, value: \`\${i}\` })));
<\/script>
```

</details>

## Tab Menu

A navigation menu is implemented using tabs without the panels where the content of a tab is provided by a route component like router-view . For the purpose of this demo, router-view is not included.

```vue
<Tabs value="/dashboard">
    <TabList>
        <Tab v-for="tab in items" :key="tab.label" :value="tab.route">
            <router-link v-if="tab.route" v-slot="{ href, navigate }" :to="tab.route" custom>
                <a v-ripple :href="href" @click="navigate" class="flex items-center gap-2 text-inherit">
                    <i :class="tab.icon" />
                    <span>{{ tab.label }}</span>
                </a>
            </router-link>
        </Tab>
    </TabList>
</Tabs>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Tabs value="/dashboard">
            <TabList>
                <Tab v-for="tab in items" :key="tab.label" :value="tab.route">
                    <router-link v-if="tab.route" v-slot="{ href, navigate }" :to="tab.route" custom>
                        <a v-ripple :href="href" @click="navigate" class="flex items-center gap-2 text-inherit">
                            <i :class="tab.icon" />
                            <span>{{ tab.label }}</span>
                        </a>
                    </router-link>
                </Tab>
            </TabList>
        </Tabs>
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    { route: '/dashboard', label: 'Dashboard', icon: 'pi pi-home' },
    { route: '/transactions', label: 'Transactions', icon: 'pi pi-chart-line' },
    { route: '/products', label: 'Products', icon: 'pi pi-list' },
    { route: '/messages', label: 'Messages', icon: 'pi pi-inbox' }
]);
<\/script>
```

</details>

## Template

Custom content for a tab is defined with the default slot. The optional as property controls the default container element of a tab, for example setting it to a div renders a div for the header instead of a button. The asChild option enables the headless mode for further customization by passing callbacks and properties to implement your own tab header.

```vue
<Tabs value="0">
    <TabList>
        <Tab value="0" as="div" class="flex items-center gap-2">
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
            <span class="font-bold whitespace-nowrap">Amy Elsner</span>
        </Tab>
        <Tab value="1" as="div" class="flex items-center gap-2">
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" />
            <span class="font-bold whitespace-nowrap">Onyama Limba</span>
        </Tab>
        <Tab v-slot="slotProps" value="2" asChild>
            <div :class="['flex items-center gap-2', slotProps.class]" @click="slotProps.onClick" v-bind="slotProps.a11yAttrs">
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" shape="circle" />
                <span class="font-bold whitespace-nowrap">Ioni Bowcher</span>
                <Badge value="2" />
            </div>
        </Tab>
    </TabList>
    <TabPanels>
        <TabPanel value="0" as="p" class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </TabPanel>
        <TabPanel value="1" as="p" class="m-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
        </TabPanel>
        <TabPanel v-slot="slotProps" value="2" asChild>
            <div v-show="slotProps.active" :class="slotProps.class" v-bind="slotProps.a11yAttrs">
                <p class="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                    culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </div>
        </TabPanel>
    </TabPanels>
</Tabs>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Tabs value="0">
            <TabList>
                <Tab value="0" as="div" class="flex items-center gap-2">
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                    <span class="font-bold whitespace-nowrap">Amy Elsner</span>
                </Tab>
                <Tab value="1" as="div" class="flex items-center gap-2">
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" />
                    <span class="font-bold whitespace-nowrap">Onyama Limba</span>
                </Tab>
                <Tab v-slot="slotProps" value="2" asChild>
                    <div :class="['flex items-center gap-2', slotProps.class]" @click="slotProps.onClick" v-bind="slotProps.a11yAttrs">
                        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" shape="circle" />
                        <span class="font-bold whitespace-nowrap">Ioni Bowcher</span>
                        <Badge value="2" />
                    </div>
                </Tab>
            </TabList>
            <TabPanels>
                <TabPanel value="0" as="p" class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </TabPanel>
                <TabPanel value="1" as="p" class="m-0">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </TabPanel>
                <TabPanel v-slot="slotProps" value="2" asChild>
                    <div v-show="slotProps.active" :class="slotProps.class" v-bind="slotProps.a11yAttrs">
                        <p class="m-0">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                            culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                        </p>
                    </div>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
</template>

<script setup>
<\/script>
```

</details>

## Tabs

### Props

| Name           | Type                                | Default | Description                                                                                    |
| -------------- | ----------------------------------- | ------- | ---------------------------------------------------------------------------------------------- |
| value          | string \| number                    | -       | Value of the active tab.                                                                       |
| lazy           | boolean                             | false   | When enabled, hidden tabs are not rendered at all. Defaults to false that hides tabs with css. |
| scrollable     | boolean                             | false   | When specified, enables horizontal and/or vertical scrolling.                                  |
| showNavigators | boolean                             | true    | Whether to display navigation buttons in container when scrollable is enabled.                 |
| tabindex       | number                              | 0       | Index of the element in tabbing order.                                                         |
| selectOnFocus  | boolean                             | false   | When enabled, the focused tab is activated.                                                    |
| dt             | any                                 | -       | It generates scoped CSS variables using design tokens for the component.                       |
| pt             | PassThrough<TabsPassThroughOptions> | -       | Used to pass attributes to DOM elements inside the component.                                  |
| ptOptions      | any                                 | -       | Used to configure passthrough(pt) options of the component.                                    |
| unstyled       | boolean                             | false   | When enabled, it removes component related styles in the core.                                 |

## Pass Through Options

| Name  | Type                      | Description                                        |
| ----- | ------------------------- | -------------------------------------------------- |
| root  | TabsPassThroughOptionType | Used to pass attributes to the root's DOM element. |
| hooks | any                       | Used to manage all lifecycle hooks.                |

## Theming

### CSS Classes

| Class  | Description                    |
| ------ | ------------------------------ |
| p-tabs | Class name of the root element |

### Design Tokens

| Token                             | CSS Variable                          | Description                     |
| --------------------------------- | ------------------------------------- | ------------------------------- |
| tabs.transition.duration          | --p-tabs-transition-duration          | Transition duration of root     |
| tabs.tablist.border.width         | --p-tabs-tablist-border-width         | Border width of tablist         |
| tabs.tablist.background           | --p-tabs-tablist-background           | Background of tablist           |
| tabs.tablist.border.color         | --p-tabs-tablist-border-color         | Border color of tablist         |
| tabs.tab.background               | --p-tabs-tab-background               | Background of tab               |
| tabs.tab.hover.background         | --p-tabs-tab-hover-background         | Hover background of tab         |
| tabs.tab.active.background        | --p-tabs-tab-active-background        | Active background of tab        |
| tabs.tab.border.width             | --p-tabs-tab-border-width             | Border width of tab             |
| tabs.tab.border.color             | --p-tabs-tab-border-color             | Border color of tab             |
| tabs.tab.hover.border.color       | --p-tabs-tab-hover-border-color       | Hover border color of tab       |
| tabs.tab.active.border.color      | --p-tabs-tab-active-border-color      | Active border color of tab      |
| tabs.tab.color                    | --p-tabs-tab-color                    | Color of tab                    |
| tabs.tab.hover.color              | --p-tabs-tab-hover-color              | Hover color of tab              |
| tabs.tab.active.color             | --p-tabs-tab-active-color             | Active color of tab             |
| tabs.tab.padding                  | --p-tabs-tab-padding                  | Padding of tab                  |
| tabs.tab.font.weight              | --p-tabs-tab-font-weight              | Font weight of tab              |
| tabs.tab.margin                   | --p-tabs-tab-margin                   | Margin of tab                   |
| tabs.tab.gap                      | --p-tabs-tab-gap                      | Gap of tab                      |
| tabs.tab.focus.ring.width         | --p-tabs-tab-focus-ring-width         | Focus ring width of tab         |
| tabs.tab.focus.ring.style         | --p-tabs-tab-focus-ring-style         | Focus ring style of tab         |
| tabs.tab.focus.ring.color         | --p-tabs-tab-focus-ring-color         | Focus ring color of tab         |
| tabs.tab.focus.ring.offset        | --p-tabs-tab-focus-ring-offset        | Focus ring offset of tab        |
| tabs.tab.focus.ring.shadow        | --p-tabs-tab-focus-ring-shadow        | Focus ring shadow of tab        |
| tabs.tabpanel.background          | --p-tabs-tabpanel-background          | Background of tabpanel          |
| tabs.tabpanel.color               | --p-tabs-tabpanel-color               | Color of tabpanel               |
| tabs.tabpanel.padding             | --p-tabs-tabpanel-padding             | Padding of tabpanel             |
| tabs.tabpanel.focus.ring.width    | --p-tabs-tabpanel-focus-ring-width    | Focus ring width of tabpanel    |
| tabs.tabpanel.focus.ring.style    | --p-tabs-tabpanel-focus-ring-style    | Focus ring style of tabpanel    |
| tabs.tabpanel.focus.ring.color    | --p-tabs-tabpanel-focus-ring-color    | Focus ring color of tabpanel    |
| tabs.tabpanel.focus.ring.offset   | --p-tabs-tabpanel-focus-ring-offset   | Focus ring offset of tabpanel   |
| tabs.tabpanel.focus.ring.shadow   | --p-tabs-tabpanel-focus-ring-shadow   | Focus ring shadow of tabpanel   |
| tabs.nav.button.background        | --p-tabs-nav-button-background        | Background of nav button        |
| tabs.nav.button.color             | --p-tabs-nav-button-color             | Color of nav button             |
| tabs.nav.button.hover.color       | --p-tabs-nav-button-hover-color       | Hover color of nav button       |
| tabs.nav.button.width             | --p-tabs-nav-button-width             | Width of nav button             |
| tabs.nav.button.focus.ring.width  | --p-tabs-nav-button-focus-ring-width  | Focus ring width of nav button  |
| tabs.nav.button.focus.ring.style  | --p-tabs-nav-button-focus-ring-style  | Focus ring style of nav button  |
| tabs.nav.button.focus.ring.color  | --p-tabs-nav-button-focus-ring-color  | Focus ring color of nav button  |
| tabs.nav.button.focus.ring.offset | --p-tabs-nav-button-focus-ring-offset | Focus ring offset of nav button |
| tabs.nav.button.focus.ring.shadow | --p-tabs-nav-button-focus-ring-shadow | Focus ring shadow of nav button |
| tabs.nav.button.shadow            | --p-tabs-nav-button-shadow            | Shadow of nav button            |
| tabs.active.bar.height            | --p-tabs-active-bar-height            | Height of active bar            |
| tabs.active.bar.bottom            | --p-tabs-active-bar-bottom            | Bottom of active bar            |
| tabs.active.bar.background        | --p-tabs-active-bar-background        | Background of active bar        |
