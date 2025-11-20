# Vue Panel Component

Panel is a grouping component providing with content toggle feature.

## Import

```javascript
import Panel from 'primevue/panel';
```

## Accessibility

Screen Reader Toggleable panels use a content toggle button at the header that has aria-controls to define the id of the content section along with aria-expanded for the visibility state. The value to read the button defaults to the value of the header property and can be customized by defining an aria-label or aria-labelledby via the toggleButtonProps property. The content uses region , defines an id that matches the aria-controls of the content toggle button and aria-labelledby referring to the id of the header. Content Toggle Button Keyboard Support Key Function tab Moves focus to the next the focusable element in the page tab sequence. shift + tab Moves focus to the previous the focusable element in the page tab sequence. enter Toggles the visibility of the content. space Toggles the visibility of the content.

## Basic

A simple Panel is created with a header property along with the content as children.

```vue
<Panel header="Header">
    <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Panel>
```

## Template

Header, icons and footer sections of the panel are customizable via templating.

```vue
<Panel toggleable>
    <template #header>
        <div class="flex items-center gap-2">
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
            <span class="font-bold">Amy Elsner</span>
        </div>
    </template>
    <template #footer>
        <div class="flex flex-wrap items-center justify-between gap-4">
            <div class="flex items-center gap-2">
                <Button icon="pi pi-user" rounded text></Button>
                <Button icon="pi pi-bookmark" severity="secondary" rounded text></Button>
            </div>
            <span class="text-surface-500 dark:text-surface-400">Updated 2 hours ago</span>
        </div>
    </template>
    <template #icons>
        <Button icon="pi pi-cog" severity="secondary" rounded text @click="toggle" />
        <Menu ref="menu" id="config_menu" :model="items" popup />
    </template>
    <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Panel>
```

## Toggleable

Content of the panel can be expanded and collapsed using toggleable option.

```vue
<Panel header="Header" toggleable>
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
        <Panel header="Header" toggleable>
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

## Panel

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| header | string | - | Header text of the panel. |
| toggleable | boolean | false | Defines if content of panel can be expanded and collapsed. |
| collapsed | boolean | false | Defines the initial state of panel content. |
| toggleButtonProps | object | - | Used to pass the custom value to read for the button inside the component. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<PanelPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

## Panel

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| header | string | - | Header text of the panel. |
| toggleable | boolean | false | Defines if content of panel can be expanded and collapsed. |
| collapsed | boolean | false | Defines the initial state of panel content. |
| toggleButtonProps | object | - | Used to pass the custom value to read for the button inside the component. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<PanelPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

## Panelmenu

## Panelmenu

## Pass Through Options

| Name | Type | Description |
|------|------|-------------|
| root | PanelPassThroughOptionType | Used to pass attributes to the root's DOM element. |
| header | PanelPassThroughOptionType | Used to pass attributes to the header's DOM element. |
| title | PanelPassThroughOptionType | Used to pass attributes to the title's DOM element. |
| headerActions | PanelPassThroughOptionType | Used to pass attributes to the header actions' DOM element. |
| pcToggleButton | any | Used to pass attributes to the toggle button button's DOM element. |
| contentContainer | PanelPassThroughOptionType | Used to pass attributes to the content container's DOM element. |
| content | PanelPassThroughOptionType | Used to pass attributes to the content's DOM element. |
| footer | PanelPassThroughOptionType | Used to pass attributes to the footer's DOM element. |
| transition | PanelPassThroughTransitionType | Used to control Vue Transition API. |
| hooks | any | Used to manage all lifecycle hooks. |

## Theming

### CSS Classes

| Class | Description |
|-------|-------------|
| p-panel | Class name of the root element |
| p-panel-header | Class name of the header element |
| p-panel-title | Class name of the title element |
| p-panel-header-actions | Class name of the header actions element |
| p-panel-toggle-button | Class name of the toggle button element |
| p-panel-content-container | Class name of the content container element |
| p-panel-content | Class name of the content element |
| p-panel-footer | Class name of the footer element |

