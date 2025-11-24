# Vue Toolbar Component

Toolbar is a grouping component for buttons and other content.

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

## Toolbar

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ariaLabelledby | string | - | Defines a string value that labels an interactive element. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<ToolbarPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

## Pass Through Options

| Name | Type | Description |
|------|------|-------------|
| root | ToolbarPassThroughOptionType | Used to pass attributes to the root's DOM element. |
| start | ToolbarPassThroughOptionType | Used to pass attributes to the start's DOM element. |
| center | ToolbarPassThroughOptionType | Used to pass attributes to the center's DOM element. |
| end | ToolbarPassThroughOptionType | Used to pass attributes to the right's DOM element. |
| hooks | any | Used to manage all lifecycle hooks. |

## Theming

### CSS Classes

| Class | Description |
|-------|-------------|
| p-toolbar | Class name of the root element |
| p-toolbar-start | Class name of the start element |
| p-toolbar-center | Class name of the center element |
| p-toolbar-end | Class name of the end element |

### Design Tokens

| Token | CSS Variable | Description |
|-------|--------------|-------------|
| toolbar.background | --p-toolbar-background | Background of root |
| toolbar.border.color | --p-toolbar-border-color | Border color of root |
| toolbar.border.radius | --p-toolbar-border-radius | Border radius of root |
| toolbar.color | --p-toolbar-color | Color of root |
| toolbar.gap | --p-toolbar-gap | Gap of root |
| toolbar.padding | --p-toolbar-padding | Padding of root |

