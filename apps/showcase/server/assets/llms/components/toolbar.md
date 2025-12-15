# Vue Toolbar Component

Toolbar is a grouping component for buttons and other content.

## Import

```javascript
import Toolbar from 'primevue/toolbar';
```

## Accessibility

Screen Reader Toolbar uses toolbar role to the root element, aria-orientation is not included as it defaults to "horizontal". Any valid attribute is passed to the root element so you may add additional properties like aria-labelledby to define the element if required. Keyboard Support Component does not include any interactive elements. Arbitrary content can be placed with templating and elements like buttons inside should follow the page tab sequence.

## Basic

Toolbar provides start , center and end properties to place content at these sections.

```vue
<Toolbar>
    <template #start>
        <Button icon="pi pi-plus" class="mr-2" severity="secondary" text />
        <Button icon="pi pi-print" class="mr-2" severity="secondary" text />
        <Button icon="pi pi-upload" severity="secondary" text />
    </template>

    <template #center>
        <IconField>
            <InputIcon>
                <i class="pi pi-search" />
            </InputIcon>
            <InputText placeholder="Search" />
        </IconField>
    </template>

    <template #end> <SplitButton label="Save" :model="items"></SplitButton></template>
</Toolbar>
```

## Custom

A customized toolbar with navigation bar functionality.

```vue
<Toolbar style="border-radius: 3rem; padding: 1rem 1rem 1rem 1.5rem">
    <template #start>
        <div class="flex items-center gap-2">
            <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="..." fill="var(--p-text-color)" />
                <path d="..." fill="transparent" />
            </svg>
            <Button label="Files" text plain />
            <Button label="Edit" text plain />
            <Button label="View" text plain />
        </div>
    </template>

    <template #end>
        <div class="flex items-center gap-2">
            <Button label="Share" severity="contrast" size="small" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" style="width: 32px; height: 32px" />
        </div>
    </template>
</Toolbar>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Toolbar style="border-radius: 3rem; padding: 1rem 1rem 1rem 1.5rem">
            <template #start>
                <div class="flex items-center gap-2">
                    <svg viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 2rem; margin-right: 1rem">
                        <path
                            d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"
                            fill="var(--p-text-color)"
                        />
                        <path
                            d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z"
                            fill="transparent"
                        />
                    </svg>
                    <Button label="Files" text plain />
                    <Button label="Edit" text plain />
                    <Button label="View" text plain />
                </div>
            </template>

            <template #end>
                <div class="flex items-center gap-2">
                    <Button label="Share" severity="contrast" size="small" />
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" style="width: 32px; height: 32px" />
                </div>
            </template>
        </Toolbar>
    </div>
</template>

<script setup>
<\/script>
```

</details>

## Toolbar

### Props

| Name           | Type                                   | Default | Description                                                              |
| -------------- | -------------------------------------- | ------- | ------------------------------------------------------------------------ |
| ariaLabelledby | string                                 | -       | Defines a string value that labels an interactive element.               |
| dt             | any                                    | -       | It generates scoped CSS variables using design tokens for the component. |
| pt             | PassThrough<ToolbarPassThroughOptions> | -       | Used to pass attributes to DOM elements inside the component.            |
| ptOptions      | any                                    | -       | Used to configure passthrough(pt) options of the component.              |
| unstyled       | boolean                                | false   | When enabled, it removes component related styles in the core.           |

## Pass Through Options

| Name   | Type                         | Description                                          |
| ------ | ---------------------------- | ---------------------------------------------------- |
| root   | ToolbarPassThroughOptionType | Used to pass attributes to the root's DOM element.   |
| start  | ToolbarPassThroughOptionType | Used to pass attributes to the start's DOM element.  |
| center | ToolbarPassThroughOptionType | Used to pass attributes to the center's DOM element. |
| end    | ToolbarPassThroughOptionType | Used to pass attributes to the right's DOM element.  |
| hooks  | any                          | Used to manage all lifecycle hooks.                  |

## Theming

### CSS Classes

| Class            | Description                      |
| ---------------- | -------------------------------- |
| p-toolbar        | Class name of the root element   |
| p-toolbar-start  | Class name of the start element  |
| p-toolbar-center | Class name of the center element |
| p-toolbar-end    | Class name of the end element    |

### Design Tokens

| Token                 | CSS Variable              | Description           |
| --------------------- | ------------------------- | --------------------- |
| toolbar.background    | --p-toolbar-background    | Background of root    |
| toolbar.border.color  | --p-toolbar-border-color  | Border color of root  |
| toolbar.border.radius | --p-toolbar-border-radius | Border radius of root |
| toolbar.color         | --p-toolbar-color         | Color of root         |
| toolbar.gap           | --p-toolbar-gap           | Gap of root           |
| toolbar.padding       | --p-toolbar-padding       | Padding of root       |
