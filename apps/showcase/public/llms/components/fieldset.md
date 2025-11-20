# Vue Fieldset Component

Fieldset is a grouping component with a content toggle feature.

## Import

```javascript
import Fieldset from 'primevue/fieldset';
```

## Accessibility

Screen Reader Fieldset component uses the semantic fieldset element. When toggleable option is enabled, a button element is included inside the legend element, this button has aria-controls to define the id of the content section along with aria-expanded for the visibility state. The value to read the button defaults to the value of the legend property and can be customized by defining an aria-label or aria-labelledby via the toggleButtonProps property. The content uses region , defines an id that matches the aria-controls of the content toggle button and aria-labelledby referring to the id of the header. Content Toggle Button Keyboard Support Key Function tab Moves focus to the next the focusable element in the page tab sequence. shift + tab Moves focus to the previous the focusable element in the page tab sequence. enter Toggles the visibility of the content. space Toggles the visibility of the content.

## Basic

A simple Fieldset is created with a legend property along with the content as children.

```vue
<Fieldset legend="Header">
    <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Fieldset>
```

## Template

Legend section can be customized with custom content using templating.

```vue
<Fieldset>
    <template #legend>
        <div class="flex items-center pl-2">
            <Avatar image="/images/avatar/amyelsner.png" shape="circle" />
            <span class="font-bold p-2">Amy Elsner</span>
        </div>
    </template>
    <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Fieldset>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Fieldset>
            <template #legend>
                <div class="flex items-center pl-2">
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                    <span class="font-bold p-2">Amy Elsner</span>
                </div>
            </template>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Fieldset>
    </div>
</template>

<script setup>
<\/script>
```
</details>

## Toggleable

Content of the fieldset can be expanded and collapsed when toggleable option is enabled.

```vue
<Fieldset legend="Header" :toggleable="true">
    <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Fieldset>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Fieldset legend="Header" :toggleable="true">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Fieldset>
    </div>
</template>

<script setup>
<\/script>
```
</details>

## Fieldset

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| legend | string | - | Header text of the fieldset. |
| toggleable | boolean | false | When specified, content can toggled by clicking the legend. |
| collapsed | boolean | false | Defines the default visibility state of the content. |
| toggleButtonProps | AnchorHTMLAttributes | - | Used to pass the custom value to read for the AnchorHTMLAttributes inside the component. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<FieldsetPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

### Slots

| Name | Parameters | Description |
|------|------------|-------------|
| default | Function |  |

## Fieldset

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| legend | string | - | Header text of the fieldset. |
| toggleable | boolean | false | When specified, content can toggled by clicking the legend. |
| collapsed | boolean | false | Defines the default visibility state of the content. |
| toggleButtonProps | AnchorHTMLAttributes | - | Used to pass the custom value to read for the AnchorHTMLAttributes inside the component. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<FieldsetPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

### Slots

| Name | Parameters | Description |
|------|------------|-------------|
| default | Function |  |

## Pass Through Options

| Name | Type | Description |
|------|------|-------------|
| root | FieldsetPassThroughOptionType | Used to pass attributes to the root's DOM element. |
| legend | FieldsetPassThroughOptionType | Used to pass attributes to the legend's DOM element. |
| toggleButton | FieldsetPassThroughOptionType | Used to pass attributes to the toggle button's DOM element. |
| toggleIcon | FieldsetPassThroughOptionType | Used to pass attributes to the toggle icon's DOM element. |
| legendLabel | FieldsetPassThroughOptionType | Used to pass attributes to the legend label's DOM element. |
| contentContainer | FieldsetPassThroughOptionType | Used to pass attributes to the content container's DOM element. |
| content | FieldsetPassThroughOptionType | Used to pass attributes to the content's DOM element. |
| hooks | any | Used to manage all lifecycle hooks. |
| transition | FieldsetPassThroughTransitionType | Used to control Vue Transition API. |

## Theming

### CSS Classes

| Class | Description |
|-------|-------------|
| p-fieldset | Class name of the root element |
| p-fieldset-legend | Class name of the legend element |
| p-fieldset-legend-label | Class name of the legend label element |
| p-fieldset-toggle-icon | Class name of the toggle icon element |
| p-fieldset-content-container | Class name of the content container element |
| p-fieldset-content | Class name of the content element |

