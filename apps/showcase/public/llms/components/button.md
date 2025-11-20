# Vue Button Component

Button is an extension to standard input element with icons and theming.

## Import

```javascript
import Button from 'primevue/button';
```

## Accessibility

Screen Reader Button component renders a native button element that implicitly includes any passed prop. Text to describe the button is defined with the aria-label prop, if not present label prop is used as the value. If the button is icon only or custom templating is used, it is recommended to use aria-label so that screen readers would be able to read the element properly. Keyboard Support Key Function tab Moves focus to the button. enter Activates the button. space Activates the button.

```vue
<Button icon="pi pi-check" aria-label="Submit" />

<Button icon="pi pi-check" label="Submit" />

<Button class="youtube p-0" aria-label="Youtube">
    <i class="pi pi-youtube px-2"></i>
    <span class="px-4">Youtube</span>
</Button>
```

## Badge

Buttons have built-in badge support with badge and badgeSeverity properties.

```vue
<Button type="button" label="Emails" badge="2" />
<Button type="button" label="Messages" icon="pi pi-users" badge="2" badgeSeverity="contrast" variant="outlined"  />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button type="button" label="Emails" badge="2" />
        <Button type="button" label="Messages" icon="pi pi-users" badge="2" badgeSeverity="contrast" variant="outlined"  />
    </div>
</template>

<script setup>
<\/script>
```
</details>

## Basic

Text to display on a button is defined with the label property.

```vue
<Button label="Submit" />
```

## Button Group

Multiple buttons are grouped when wrapped inside an element with ButtonGroup component.

```vue
<ButtonGroup>
    <Button label="Save" icon="pi pi-check" />
    <Button label="Delete" icon="pi pi-trash" />
    <Button label="Cancel" icon="pi pi-times" />
</ButtonGroup>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <ButtonGroup>
            <Button label="Save" icon="pi pi-check" />
            <Button label="Delete" icon="pi pi-trash" />
            <Button label="Cancel" icon="pi pi-times" />
        </ButtonGroup>
    </div>
</template>

<script setup>
<\/script>
```
</details>

## Disabled

When disabled is present, the element cannot be used.

```vue
<Button label="Submit" disabled />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Button label="Submit" disabled />
    </div>
</template>

<script setup>
<\/script>
```
</details>

## Headless

Headless mode is enabled by adding the asChild property and defining your own UI element with the available bindings.

```vue
<Button v-slot="slotProps" asChild>
    <button
        v-bind="slotProps.a11yAttrs"
        class="rounded-lg bg-gradient-to-br from-primary-400 to-primary-700 active:from-primary-700 active:to-primary-900 text-white border-none px-6 py-3 font-bold hover:ring-2 cursor-pointer ring-offset-2 ring-offset-surface-0 dark:ring-offset-surface-900 ring-primary transition-all"
    >
        SIGN UP
    </button>
</Button>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Button v-slot="slotProps" asChild>
            <button
                v-bind="slotProps.a11yAttrs"
                class="rounded-lg bg-gradient-to-br from-primary-400 to-primary-700 active:from-primary-700 active:to-primary-900 text-white border-none px-6 py-3 font-bold hover:ring-2 cursor-pointer ring-offset-2 ring-offset-surface-0 dark:ring-offset-surface-900 ring-primary transition-all"
            >
                SIGN UP
            </button>
        </Button>
    </div>
</template>

<script setup>
<\/script>
```
</details>

## Icon Only

Buttons can have icons without labels.

```vue
<Button icon="pi pi-check" aria-label="Filter" />
<Button icon="pi pi-bookmark" severity="secondary" aria-label="Bookmark" />
<Button icon="pi pi-search" severity="success" aria-label="Search" />
<Button icon="pi pi-user" severity="info" aria-label="User" />
<Button icon="pi pi-bell" severity="warn" aria-label="Notification" />
<Button icon="pi pi-heart" severity="help" aria-label="Favorite" />
<Button icon="pi pi-times" severity="danger" aria-label="Cancel" />
<Button icon="pi pi-star" severity="contrast" aria-label="Star" />

<Button icon="pi pi-check" rounded aria-label="Filter" />
<Button icon="pi pi-bookmark" severity="secondary" rounded aria-label="Bookmark" />
<Button icon="pi pi-search" severity="success" rounded aria-label="Search" />
<Button icon="pi pi-user" severity="info" rounded aria-label="User" />
<Button icon="pi pi-bell" severity="warn" rounded aria-label="Notification" />
<Button icon="pi pi-heart" severity="help" rounded aria-label="Favorite" />
<Button icon="pi pi-times" severity="danger" rounded aria-label="Cancel" />
<Button icon="pi pi-star" severity="contrast" rounded aria-label="Star" />

<Button icon="pi pi-check" rounded variant="outlined" aria-label="Filter" />
<Button icon="pi pi-bookmark" severity="secondary" rounded variant="outlined" aria-label="Bookmark" />
<Button icon="pi pi-search" severity="success" rounded variant="outlined" aria-label="Search" />
<Button icon="pi pi-user" severity="info" rounded variant="outlined" aria-label="User" />
<Button icon="pi pi-bell" severity="warn" rounded variant="outlined" aria-label="Notification" />
<Button icon="pi pi-heart" severity="help" rounded variant="outlined" aria-label="Favorite" />
<Button icon="pi pi-times" severity="danger" rounded variant="outlined" aria-label="Cancel" />
<Button icon="pi pi-star" severity="contrast" rounded variant="outlined" aria-label="Star" />

<Button icon="pi pi-check" variant="text" raised rounded aria-label="Filter" />
<Button icon="pi pi-bookmark" severity="secondary" variant="text" raised rounded aria-label="Bookmark" />
<Button icon="pi pi-search" severity="success" variant="text" raised rounded aria-label="Search" />
<Button icon="pi pi-user" severity="info" variant="text" raised rounded aria-label="User" />
<Button icon="pi pi-bell" severity="warn" variant="text" raised rounded aria-label="Notification" />
<Button icon="pi pi-heart" severity="help" variant="text" raised rounded aria-label="Favorite" />
<Button icon="pi pi-times" severity="danger" variant="text" raised rounded aria-label="Cancel" />
<Button icon="pi pi-star" severity="contrast" variant="text" raised rounded aria-label="Star" />

<Button icon="pi pi-check" variant="text" rounded aria-label="Filter" />
<Button icon="pi pi-bookmark" severity="secondary" variant="text" rounded aria-label="Bookmark" />
<Button icon="pi pi-search" severity="success" variant="text" rounded aria-label="Search" />
<Button icon="pi pi-user" severity="info" variant="text" rounded aria-label="User" />
<Button icon="pi pi-bell" severity="warn" variant="text" rounded aria-label="Notification" />
<Button icon="pi pi-heart" severity="help" variant="text" rounded aria-label="Favorite" />
<Button icon="pi pi-times" severity="danger" variant="text" rounded aria-label="Cancel" />
<Button icon="pi pi-star" severity="contrast" variant="text" rounded aria-label="Star" />
```

## Icons

Icon of a button is specified with icon property and position is configured using iconPos attribute.

```vue
<Button icon="pi pi-home" aria-label="Save" />
<Button label="Profile" icon="pi pi-user" />
<Button label="Save" icon="pi pi-check" iconPos="right" />
<Button label="Search" icon="pi pi-search" iconPos="top" />
<Button label="Update" icon="pi pi-refresh" iconPos="bottom" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-col items-center gap-4">
        <div class="flex flex-wrap gap-4 justify-center">
            <Button icon="pi pi-home" aria-label="Save" />
            <Button label="Profile" icon="pi pi-user" />
            <Button label="Save" icon="pi pi-check" iconPos="right" />
        </div>
        <div class="flex flex-wrap gap-4 justify-center">
            <Button label="Search" icon="pi pi-search" iconPos="top" />
            <Button label="Update" icon="pi pi-refresh" iconPos="bottom" />
        </div>
    </div>
</template>

<script setup>
<\/script>
```
</details>

## Link

The button element can be displayed as a link element visually when the link property is present. If you need to customize the rendering, use the as to change the element or asChild for advanced templating.

```vue
<Button label="Link" variant="link" />
<Button as="a" label="External" href="https://vuejs.org/" target="_blank" rel="noopener" />
<Button asChild v-slot="slotProps">
    <RouterLink to="/" :class="slotProps.class">Router</RouterLink>
</Button>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center gap-4">
        <Button label="Link" variant="link" />
        <Button as="a" label="External" href="https://vuejs.org/" target="_blank" rel="noopener" />
        <Button asChild v-slot="slotProps">
            <RouterLink to="/" :class="slotProps.class">Router</RouterLink>
        </Button>
    </div>
</template>

<script setup>
<\/script>
```
</details>

## Loading

Busy state is controlled with the loading property.

```vue
<Button type="button" label="Search" icon="pi pi-search" :loading="loading" @click="load" />
```

## Outlined

Outlined buttons display a border without a transparent background.

```vue
<Button label="Primary" variant="outlined" />
<Button label="Secondary" severity="secondary" variant="outlined" />
<Button label="Success" severity="success" variant="outlined" />
<Button label="Info" severity="info" variant="outlined" />
<Button label="Warn" severity="warn" variant="outlined" />
<Button label="Help" severity="help" variant="outlined" />
<Button label="Danger" severity="danger" variant="outlined" />
<Button label="Contrast" severity="contrast" variant="outlined" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button label="Primary" variant="outlined" />
        <Button label="Secondary" severity="secondary" variant="outlined" />
        <Button label="Success" severity="success" variant="outlined" />
        <Button label="Info" severity="info" variant="outlined" />
        <Button label="Warn" severity="warn" variant="outlined" />
        <Button label="Help" severity="help" variant="outlined" />
        <Button label="Danger" severity="danger" variant="outlined" />
        <Button label="Contrast" severity="contrast" variant="outlined" />
    </div>
</template>

<script setup>
<\/script>
```
</details>

## Raised

Raised buttons display a shadow to indicate elevation.

```vue
<Button label="Primary" raised />
<Button label="Secondary" severity="secondary" raised />
<Button label="Success" severity="success" raised />
<Button label="Info" severity="info" raised />
<Button label="Warn" severity="warn" raised />
<Button label="Help" severity="help" raised />
<Button label="Danger" severity="danger" raised />
<Button label="Contrast" severity="contrast" raised />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button label="Primary" raised />
        <Button label="Secondary" severity="secondary" raised />
        <Button label="Success" severity="success" raised />
        <Button label="Info" severity="info" raised />
        <Button label="Warn" severity="warn" raised />
        <Button label="Help" severity="help" raised />
        <Button label="Danger" severity="danger" raised />
        <Button label="Contrast" severity="contrast" raised />
    </div>
</template>

<script setup>
<\/script>
```
</details>

## Raised Text

Text buttons can be displayed elevated with the raised option.

```vue
<Button label="Primary" variant="text" raised />
<Button label="Secondary" severity="secondary" variant="text" raised />
<Button label="Success" severity="success" variant="text" raised />
<Button label="Info" severity="info" variant="text" raised />
<Button label="Warn" severity="warn" variant="text" raised />
<Button label="Help" severity="help" variant="text" raised />
<Button label="Danger" severity="danger" variant="text" raised />
<Button label="Contrast" severity="contrast" variant="text" raised />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button label="Primary" variant="text" raised />
        <Button label="Secondary" severity="secondary" variant="text" raised />
        <Button label="Success" severity="success" variant="text" raised />
        <Button label="Info" severity="info" variant="text" raised />
        <Button label="Warn" severity="warn" variant="text" raised />
        <Button label="Help" severity="help" variant="text" raised />
        <Button label="Danger" severity="danger" variant="text" raised />
        <Button label="Contrast" severity="contrast" variant="text" raised />
    </div>
</template>

<script setup>
<\/script>
```
</details>

## Rounded

Rounded buttons have a circular border radius.

```vue
<Button label="Primary" rounded />
<Button label="Secondary" severity="secondary" rounded />
<Button label="Success" severity="success" rounded />
<Button label="Info" severity="info" rounded />
<Button label="Warn" severity="warn" rounded />
<Button label="Help" severity="help" rounded />
<Button label="Danger" severity="danger" rounded />
<Button label="Contrast" severity="contrast" rounded />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button label="Primary" rounded />
        <Button label="Secondary" severity="secondary" rounded />
        <Button label="Success" severity="success" rounded />
        <Button label="Info" severity="info" rounded />
        <Button label="Warn" severity="warn" rounded />
        <Button label="Help" severity="help" rounded />
        <Button label="Danger" severity="danger" rounded />
        <Button label="Contrast" severity="contrast" rounded />
    </div>
</template>

<script setup>
<\/script>
```
</details>

## Severity

The severity property defines the variant of a button.

```vue
<Button label="Primary" />
<Button label="Secondary" severity="secondary" />
<Button label="Success" severity="success" />
<Button label="Info" severity="info" />
<Button label="Warn" severity="warn" />
<Button label="Help" severity="help" />
<Button label="Danger" severity="danger" />
<Button label="Contrast" severity="contrast" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button label="Primary" />
        <Button label="Secondary" severity="secondary" />
        <Button label="Success" severity="success" />
        <Button label="Info" severity="info" />
        <Button label="Warn" severity="warn" />
        <Button label="Help" severity="help" />
        <Button label="Danger" severity="danger" />
        <Button label="Contrast" severity="contrast" />
    </div>
</template>

<script setup>
<\/script>
```
</details>

## Sizes

Button provides small and large sizes as alternatives to the base.

```vue
<Button label="Small" icon="pi pi-check" size="small" />
<Button label="Normal" icon="pi pi-check" />
<Button label="Large" icon="pi pi-check" size="large" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap items-center justify-center gap-4">
        <Button label="Small" icon="pi pi-check" size="small" />
        <Button label="Normal" icon="pi pi-check" />
        <Button label="Large" icon="pi pi-check" size="large" />
    </div>
</template>

<script setup>
<\/script>
```
</details>

## Template

Custom content inside a button is defined as children.

```vue
<Button variant="outlined" class="!border-2">
    <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="..." fill="var(--p-primary-color)" />
        <path d="..." fill="var(--p-text-color)" />
    </svg>
</Button>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Button variant="outlined" class="!border-2">
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
        </Button>
    </div>
</template>

<script setup>
<\/script>
```
</details>

## Text

Text buttons are displayed as textual elements.

```vue
<Button label="Primary" variant="text" />
<Button label="Secondary" severity="secondary" variant="text" />
<Button label="Success" severity="success" variant="text" />
<Button label="Info" severity="info" variant="text" />
<Button label="Warn" severity="warn" variant="text" />
<Button label="Help" severity="help" variant="text" />
<Button label="Danger" severity="danger" variant="text" />
<Button label="Contrast" severity="contrast" variant="text" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button label="Primary" variant="text" />
        <Button label="Secondary" severity="secondary" variant="text" />
        <Button label="Success" severity="success" variant="text" />
        <Button label="Info" severity="info" variant="text" />
        <Button label="Warn" severity="warn" variant="text" />
        <Button label="Help" severity="help" variant="text" />
        <Button label="Danger" severity="danger" variant="text" />
        <Button label="Contrast" severity="contrast" variant="text" />
    </div>
</template>

<script setup>
<\/script>
```
</details>

## Button

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| aria-activedescendant | string | - | Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. |
| aria-atomic | Booleanish | - | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. |
| aria-autocomplete | "none" \| "inline" \| "list" \| "both" | - | Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be presented if they are made. |
| aria-busy | Booleanish | - | Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. |
| aria-checked | Booleanish \| "mixed" | - | Indicates the current "checked" state of checkboxes, radio buttons, and other widgets. |
| aria-colcount | Numberish | - | Defines the total number of columns in a table, grid, or treegrid. |
| aria-colindex | Numberish | - | Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid. |
| aria-colspan | Numberish | - | Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid. |
| aria-controls | string | - | Identifies the element (or elements) whose contents or presence are controlled by the current element. |
| aria-current | Booleanish \| "page" \| "step" \| "location" \| "date" \| "time" | - | Indicates the element that represents the current item within a container or set of related elements. |
| aria-describedby | string | - | Identifies the element (or elements) that describes the object. |
| aria-details | string | - | Identifies the element that provides a detailed, extended description for the object. |
| aria-disabled | Booleanish | - | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable. |
| aria-dropeffect | "link" \| "none" \| "copy" \| "execute" \| "move" \| "popup" | - | Indicates what functions can be performed when a dragged object is released on the drop target. |
| aria-errormessage | string | - | Identifies the element that provides an error message for the object. |
| aria-expanded | Booleanish | - | Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. |
| aria-flowto | string | - | Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion, allows assistive technology to override the general default of reading in document source order. |
| aria-grabbed | Booleanish | - | Indicates an element's "grabbed" state in a drag-and-drop operation. |
| aria-haspopup | Booleanish \| "menu" \| "listbox" \| "tree" \| "grid" \| "dialog" | - | Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. |
| aria-hidden | Booleanish | - | Indicates whether the element is exposed to an accessibility API. |
| aria-invalid | Booleanish \| "grammar" \| "spelling" | - | Indicates the entered value does not conform to the format expected by the application. |
| aria-keyshortcuts | string | - | Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. |
| aria-label | string | - | Defines a string value that labels the current element. |
| aria-labelledby | string | - | Identifies the element (or elements) that labels the current element. |
| aria-level | Numberish | - | Defines the hierarchical level of an element within a structure. |
| aria-live | "off" \| "assertive" \| "polite" | - | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. |
| aria-modal | Booleanish | - | Indicates whether an element is modal when displayed. |
| aria-multiline | Booleanish | - | Indicates whether a text box accepts multiple lines of input or only a single line. |
| aria-multiselectable | Booleanish | - | Indicates that the user may select more than one item from the current selectable descendants. |
| aria-orientation | "horizontal" \| "vertical" | - | Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. |
| aria-owns | string | - | Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship between DOM elements where the DOM hierarchy cannot be used to represent the relationship. |
| aria-placeholder | string | - | Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value. A hint could be a sample value or a brief description of the expected format. |
| aria-posinset | Numberish | - | Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. |
| aria-pressed | Booleanish \| "mixed" | - | Indicates the current "pressed" state of toggle buttons. |
| aria-readonly | Booleanish | - | Indicates that the element is not editable, but is otherwise operable. |
| aria-relevant | "text" \| "additions" \| "additions removals" \| "additions text" \| "all" \| "removals" \| "removals additions" \| "removals text" \| "text additions" \| "text removals" | - | Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified. |
| aria-required | Booleanish | - | Indicates that user input is required on the element before a form may be submitted. |
| aria-roledescription | string | - | Defines a human-readable, author-localized description for the role of an element. |
| aria-rowcount | Numberish | - | Defines the total number of rows in a table, grid, or treegrid. |
| aria-rowindex | Numberish | - | Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid. |
| aria-rowspan | Numberish | - | Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid. |
| aria-selected | Booleanish | - | Indicates the current "selected" state of various widgets. |
| aria-setsize | Numberish | - | Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. |
| aria-sort | "none" \| "ascending" \| "descending" \| "other" | - | Indicates if items in a table or grid are sorted in ascending or descending order. |
| aria-valuemax | Numberish | - | Defines the maximum allowed value for a range widget. |
| aria-valuemin | Numberish | - | Defines the minimum allowed value for a range widget. |
| aria-valuenow | Numberish | - | Defines the current value for a range widget. |
| aria-valuetext | string | - | Defines the human readable text alternative of aria-valuenow for a range widget. |
| innerHTML | string | - |  |
| accesskey | string | - |  |
| contenteditable | Booleanish \| "inherit" \| "plaintext-only" | - |  |
| contextmenu | string | - |  |
| dir | string | - |  |
| draggable | Booleanish | - |  |
| hidden | "" \| Booleanish \| "hidden" \| "until-found" | - |  |
| id | string | - |  |
| inert | Booleanish | - |  |
| lang | string | - |  |
| placeholder | string | - |  |
| spellcheck | Booleanish | - |  |
| tabindex | Numberish | - |  |
| title | string | - |  |
| translate | "yes" \| "no" | - |  |
| radiogroup | string | - |  |
| role | string | - |  |
| about | string | - |  |
| datatype | string | - |  |
| inlist | any | - |  |
| prefix | string | - |  |
| property | string | - |  |
| resource | string | - |  |
| typeof | string | - |  |
| vocab | string | - |  |
| autocapitalize | string | - |  |
| autocorrect | string | - |  |
| autosave | string | - |  |
| color | string | - |  |
| itemprop | string | - |  |
| itemscope | Booleanish | - |  |
| itemtype | string | - |  |
| itemid | string | - |  |
| itemref | string | - |  |
| results | Numberish | - |  |
| security | string | - |  |
| unselectable | "on" \| "off" | - |  |
| inputmode | "text" \| "none" \| "tel" \| "url" \| "email" \| "numeric" \| "decimal" \| "search" | - | Hints at the type of data that might be entered by the user while editing the element or its contents |
| is | string | - | Specify that a standard HTML element should behave like a defined custom built-in element |
| autofocus | Booleanish | - |  |
| disabled | Booleanish | - |  |
| form | string | - |  |
| formaction | string | - |  |
| formenctype | string | - |  |
| formmethod | string | - |  |
| formnovalidate | Booleanish | - |  |
| formtarget | string | - |  |
| name | string | - |  |
| type | "submit" \| "reset" \| "button" | - |  |
| value | string \| number \| readonly string[] | - |  |
| onCopy | Function | - |  |
| onCut | Function | - |  |
| onPaste | Function | - |  |
| onCompositionend | Function | - |  |
| onCompositionstart | Function | - |  |
| onCompositionupdate | Function | - |  |
| onDrag | Function | - |  |
| onDragend | Function | - |  |
| onDragenter | Function | - |  |
| onDragexit | Function | - |  |
| onDragleave | Function | - |  |
| onDragover | Function | - |  |
| onDragstart | Function | - |  |
| onDrop | Function | - |  |
| onFocus | Function | - |  |
| onFocusin | Function | - |  |
| onFocusout | Function | - |  |
| onBlur | Function | - |  |
| onChange | Function | - |  |
| onBeforeinput | Function | - |  |
| onFormdata | Function | - |  |
| onInput | Function | - |  |
| onReset | Function | - |  |
| onSubmit | Function | - |  |
| onInvalid | Function | - |  |
| onFullscreenchange | Function | - |  |
| onFullscreenerror | Function | - |  |
| onLoad | Function | - |  |
| onError | Function | - |  |
| onKeydown | Function | - |  |
| onKeypress | Function | - |  |
| onKeyup | Function | - |  |
| onDblclick | Function | - |  |
| onMousedown | Function | - |  |
| onMouseenter | Function | - |  |
| onMouseleave | Function | - |  |
| onMousemove | Function | - |  |
| onMouseout | Function | - |  |
| onMouseover | Function | - |  |
| onMouseup | Function | - |  |
| onAbort | Function | - |  |
| onCanplay | Function | - |  |
| onCanplaythrough | Function | - |  |
| onDurationchange | Function | - |  |
| onEmptied | Function | - |  |
| onEncrypted | Function | - |  |
| onEnded | Function | - |  |
| onLoadeddata | Function | - |  |
| onLoadedmetadata | Function | - |  |
| onLoadstart | Function | - |  |
| onPause | Function | - |  |
| onPlay | Function | - |  |
| onPlaying | Function | - |  |
| onProgress | Function | - |  |
| onRatechange | Function | - |  |
| onSeeked | Function | - |  |
| onSeeking | Function | - |  |
| onStalled | Function | - |  |
| onSuspend | Function | - |  |
| onTimeupdate | Function | - |  |
| onVolumechange | Function | - |  |
| onWaiting | Function | - |  |
| onSelect | Function | - |  |
| onScroll | Function | - |  |
| onScrollend | Function | - |  |
| onTouchcancel | Function | - |  |
| onTouchend | Function | - |  |
| onTouchmove | Function | - |  |
| onTouchstart | Function | - |  |
| onAuxclick | Function | - |  |
| onClick | Function | - |  |
| onContextmenu | Function | - |  |
| onGotpointercapture | Function | - |  |
| onLostpointercapture | Function | - |  |
| onPointerdown | Function | - |  |
| onPointermove | Function | - |  |
| onPointerup | Function | - |  |
| onPointercancel | Function | - |  |
| onPointerenter | Function | - |  |
| onPointerleave | Function | - |  |
| onPointerover | Function | - |  |
| onPointerout | Function | - |  |
| onBeforetoggle | Function | - |  |
| onToggle | Function | - |  |
| onWheel | Function | - |  |
| onAnimationcancel | Function | - |  |
| onAnimationstart | Function | - |  |
| onAnimationend | Function | - |  |
| onAnimationiteration | Function | - |  |
| onSecuritypolicyviolation | Function | - |  |
| onTransitioncancel | Function | - |  |
| onTransitionend | Function | - |  |
| onTransitionrun | Function | - |  |
| onTransitionstart | Function | - |  |
| style | any | - | Inline style of the button. |
| class | any | - | Style class of the button. |
| label | string | - | Text of the button. |
| icon | string | - | Name of the icon. |
| iconPos | HintedString<"left" \| "right" \| "top" \| "bottom"> | left | Position of the icon. |
| iconClass | string \| object | - | Style class of the icon. |
| badge | string | - | Value of the badge. |
| badgeClass | string \| object | - | Style class of the badge. |
| badgeSeverity | null \| HintedString<"secondary" \| "info" \| "success" \| "warn" \| "danger" \| "contrast"> | - | Severity type of the badge. |
| loading | boolean | false | Whether the button is in loading state. |
| loadingIcon | string | - | Icon to display in loading state. |
| as | string \| Component | BUTTON | Use to change the HTML tag of root element. |
| asChild | boolean | false | When enabled, it changes the default rendered element for the one passed as a child element. |
| link | boolean | false | Add a link style to the button. |
| severity | HintedString<"secondary" \| "info" \| "success" \| "warn" \| "danger" \| "contrast" \| "help"> | - | Defines the style of the button. |
| raised | boolean | false | Add a shadow to indicate elevation. |
| rounded | boolean | false | Add a circular border radius to the button. |
| text | boolean | false | Add a textual class to the button without a background initially. |
| outlined | boolean | false | Add a border class without a background initially. |
| size | HintedString<"small" \| "large"> | - | Defines the size of the button. |
| variant | HintedString<"outlined" \| "text" \| "link"> | undefined | Specifies the variant of the component. |
| plain | boolean | false | Add a plain textual class to the button without a background initially. |
| fluid | boolean | null | Spans 100% width of the container when enabled. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<ButtonPassThroughOptions<any>> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

## Pass Through Options

| Name | Type | Description |
|------|------|-------------|
| root | ButtonPassThroughOptionType<T> | Used to pass attributes to the root's DOM element. |
| loadingIcon | ButtonPassThroughOptionType<T> | Used to pass attributes to the loading icon's DOM element. |
| icon | ButtonPassThroughOptionType<T> | Used to pass attributes to the icon's DOM element. |
| label | ButtonPassThroughOptionType<T> | Used to pass attributes to the label's DOM element. |
| pcBadge | ButtonPassThroughOptionType<T> | Used to pass attributes to the Badge component. |
| hooks | any | Used to manage all lifecycle hooks. |

## Theming

### CSS Classes

| Class | Description |
|-------|-------------|
| p-button | Class name of the root element |
| p-button-loading-icon | Class name of the loading icon element |
| p-button-icon | Class name of the icon element |
| p-button-label | Class name of the label element |

