# Pass Through

The Pass Through attributes is an API to access the internal DOM Structure of the components.

## Basic

Each component has a special pt property to define an object with keys corresponding to the available DOM elements. Each value can either be a string, an object or a function that returns a string or an object to define the arbitrary properties to apply to the element such as styling, aria, data-\* or custom attributes. If the value is a string or a function that returns a string, it is considered as a class definition and added to the class attribute of the element. Every component documentation has a dedicated section to document the available section names exposed via PT. Most common usage of pt is styling and customization. The class and style properties support the exact syntax of the corresponding Vue bindings like arrays, objects and conditionals. Example below styles an unstyled Panel component with Tailwind CSS library.

```vue
<Panel
    header="Header"
    toggleable
    :pt="{
        root: 'border border-primary rounded-xl p-4',
        header: (options) => ({
            id: 'myPanelHeader',
            style: {
                'user-select': 'none'
            },
            class: ['flex items-center justify-between text-primary font-bold']
        }),
        content: { class: 'text-primary-700 dark:text-primary-200 mt-4' },
        title: 'text-xl',
        toggler: () => 'bg-primary text-primary-contrast hover:text-primary hover:bg-primary-contrast'
    }"
>
    <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Panel>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Panel header="Header" toggleable
            :pt="{
                header: (options) => ({
                    id: 'myPanelHeader',
                    style: {
                        'user-select': 'none'
                    },
                    class: [
                        'border-primary',
                        {
                            'bg-primary text-primary-contrast': options.state.d_collapsed,
                            'text-primary bg-primary-contrast': !options.state.d_collapsed
                        }
                    ]
                }),
                content: { class: 'border-primary text-lg text-primary-700' },
                title: 'text-xl',                                     // OR { class: 'text-xl' }
                toggler: () => 'bg-primary text-primary-contrast hover:text-primary hover:bg-primary-contrast'  // OR { class: 'bg-primary text-primary-contrast hover:text-primary hover:bg-primary-contrast' }
            }">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
    </div>
</template>

<script setup>
<\/script>
```

</details>

## Custom CSS

The global property has a css option to define custom css that belongs to a global pt configuration. Common use case of this feature is defining global styles and animations related to the pass through configuration.

```vue
import { createApp } from "vue"; import PrimeVue from "primevue/config"; const app = createApp(App); app.use(PrimeVue, { pt: { global: { css: \` .my-button { border-width: 2px; } \` }, button: { root: 'my-button' } } });
```

## Declarative

The declarative syntax provides an alternative to the programmatic syntax. The attributes that start with pt are interpreted differently by the component based on the format below. An IDE extension is also being planned to autocomplete the values for better developer experience in the future. Here is another example using both syntax alternatives for the same options.

## Global

Defines the shared pass through properties per component type. For example, with the configuration below all panel headers have the bg-primary style class and all autocomplete components have a fixed width. These settings can be overridden by a particular component as components pt property has higher precedence over global pt .

```vue
import { createApp } from "vue"; import PrimeVue from "primevue/config"; const app = createApp(App); app.use(PrimeVue, { pt: { panel: { header: { class: 'bg-primary text-primary-contrast' } }, autocomplete: { input: { root: 'w-64' // OR { class:
'w-64' } } } } });
```

## Introduction

In traditional 3rd party UI libraries, users are limited to the API provided by component author. This API commonly consists of props, events and slots. Whenever a requirement emerges for a new customization option in the API, the component author needs to develop and publish it with a new release. Vision of PrimeTek is Your components, not ours . The pass through feature is a key element to implement this vision by exposing the component internals in order to apply arbitrary attributes and listeners to the DOM elements. The primary advantage of this approach is that it frees you from being restricted by the main component API. We recommend considering the pass-through feature whenever you need to tailor a component that lacks a built-in feature for your specific requirement. Two videos are available at PrimeTV youtube channel, first one is an introduction and second one covers a unique case that is solved by the pass-through.

## Lifecycle

Lifecycle hooks of components are exposed as pass through using the hooks property so that callback functions can be registered. Available callbacks are onBeforeCreate , onCreated , onBeforeUpdate , onUpdated , onBeforeMount , onMounted , onBeforeUnmount and onUnmounted . Refer to the Vue.js documentation for detailed information about lifecycle hooks.

```vue
<Panel header="Header" :pt="panelPT">
    Content
</Panel>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <Panel header="Header" :pt="panelPT">
        Content
    </Panel>
</template>

<script setup>
import { ref } from 'vue';

const panelPt = ref({
    hooks: {
        onMounted: () => {
            //panel mounted
        },
        onUnmounted: () => {
            //panel unmounted
        }
    }
);
<\/script>
```

</details>

## PC Prefix

Section names prefixed with pc denote PrimeVue components, distinguishing them from standard DOM elements and indicating the necessity for a nested structure. For example, the "badge" section is identified as pcBadge because the button component incorporates the badge component internally.

```vue
<Button
    type="button"
    label="Messages"
    icon="pi pi-inbox"
    badge="2"
    variant="outlined"
    severity="secondary"
    :pt="{
        root: '!px-4 !py-3',
        icon: '!text-xl !text-violet-500 dark:!text-violet-400',
        label: '!text-lg !text-violet-500 dark:!text-violet-400',
        pcBadge: {
            root: '!bg-violet-500 dark:!bg-violet-400 !text-white dark:!text-black'
        }
    }"
/>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <Button
        type="button"
        label="Messages"
        icon="pi pi-inbox"
        badge="2"
        variant="outlined"
        severity="secondary"
        :pt="{
            root: '!px-4 !py-3',
            icon: '!text-xl !text-violet-500 dark:!text-violet-400',
            label: '!text-lg !text-violet-500 dark:!text-violet-400',
            pcBadge: {
                root: '!bg-violet-500 dark:!bg-violet-400 !text-white dark:!text-black'
            }
        }"
    />
</template>
```

</details>

## UsePassThrough

An existing pass through configuration is customized with the usePassThrough utility. The first parameter is the object to customize, the second parameter is the customizations and the final parameter is the merge strategy. The mergeSections defines whether the sections from the main configuration gets added and the mergeProps controls whether to override or merge the defined props. Defaults are true for mergeSections and false for mergeProps .
