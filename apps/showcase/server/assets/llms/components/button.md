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
<Button type="button" label="Messages" icon="pi pi-users" badge="2" badgeSeverity="contrast" variant="outlined" />
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

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <div class="flex justify-center mb-8">
            <SelectButton v-model="size" :options="sizeOptions" optionLabel="label" optionValue="value" dataKey="label" />
        </div>

        <div class="flex flex-wrap justify-center gap-4 mb-6">
            <Button icon="pi pi-check" aria-label="Filter" :size="size" />
            <Button icon="pi pi-bookmark" severity="secondary" aria-label="Bookmark" :size="size" />
            <Button icon="pi pi-search" severity="success" aria-label="Search" :size="size" />
            <Button icon="pi pi-user" severity="info" aria-label="User" :size="size" />
            <Button icon="pi pi-bell" severity="warn" aria-label="Notification" :size="size" />
            <Button icon="pi pi-heart" severity="help" aria-label="Favorite" :size="size" />
            <Button icon="pi pi-times" severity="danger" aria-label="Cancel" :size="size" />
            <Button icon="pi pi-star" severity="contrast" aria-label="Star" :size="size" />
        </div>

        <div class="flex flex-wrap justify-center gap-4 mb-6">
            <Button icon="pi pi-check" rounded aria-label="Filter" :size="size" />
            <Button icon="pi pi-bookmark" severity="secondary" rounded aria-label="Bookmark" :size="size" />
            <Button icon="pi pi-search" severity="success" rounded aria-label="Search" :size="size" />
            <Button icon="pi pi-user" severity="info" rounded aria-label="User" :size="size" />
            <Button icon="pi pi-bell" severity="warn" rounded aria-label="Notification" :size="size" />
            <Button icon="pi pi-heart" severity="help" rounded aria-label="Favorite" :size="size" />
            <Button icon="pi pi-times" severity="danger" rounded aria-label="Cancel" :size="size" />
            <Button icon="pi pi-star" severity="contrast" rounded aria-label="Star" :size="size" />
        </div>

        <div class="flex flex-wrap justify-center gap-4 mb-6">
            <Button icon="pi pi-check" rounded variant="outlined" aria-label="Filter" :size="size" /> <Button icon="pi pi-bookmark" severity="secondary" rounded variant="outlined" aria-label="Bookmark" :size="size" />
            <Button icon="pi pi-search" severity="success" rounded variant="outlined" aria-label="Search" :size="size" />
            <Button icon="pi pi-user" severity="info" rounded variant="outlined" aria-label="User" :size="size" />
            <Button icon="pi pi-bell" severity="warn" rounded variant="outlined" aria-label="Notification" :size="size" />
            <Button icon="pi pi-heart" severity="help" rounded variant="outlined" aria-label="Favorite" :size="size" />
            <Button icon="pi pi-times" severity="danger" rounded variant="outlined" aria-label="Cancel" :size="size" />
            <Button icon="pi pi-star" severity="contrast" rounded variant="outlined" aria-label="Star" :size="size" />
        </div>

        <div class="flex flex-wrap justify-center gap-4 mb-6">
            <Button icon="pi pi-check" variant="text" raised rounded aria-label="Filter" :size="size" />
            <Button icon="pi pi-bookmark" severity="secondary" variant="text" raised rounded aria-label="Bookmark" :size="size" />
            <Button icon="pi pi-search" severity="success" variant="text" raised rounded aria-label="Search" :size="size" />
            <Button icon="pi pi-user" severity="info" variant="text" raised rounded aria-label="User" :size="size" />
            <Button icon="pi pi-bell" severity="warn" variant="text" raised rounded aria-label="Notification" :size="size" />
            <Button icon="pi pi-heart" severity="help" variant="text" raised rounded aria-label="Favorite" :size="size" />
            <Button icon="pi pi-times" severity="danger" variant="text" raised rounded aria-label="Cancel" :size="size" />
            <Button icon="pi pi-star" severity="contrast" variant="text" raised rounded aria-label="Star" :size="size" />
        </div>

        <div class="flex flex-wrap justify-center gap-4">
            <Button icon="pi pi-check" variant="text" rounded aria-label="Filter" :size="size" />
            <Button icon="pi pi-bookmark" severity="secondary" variant="text" rounded aria-label="Bookmark" :size="size" />
            <Button icon="pi pi-search" severity="success" variant="text" rounded aria-label="Search" :size="size" />
            <Button icon="pi pi-user" severity="info" variant="text" rounded aria-label="User" :size="size" />
            <Button icon="pi pi-bell" severity="warn" variant="text" rounded aria-label="Notification" :size="size" />
            <Button icon="pi pi-heart" severity="help" variant="text" rounded aria-label="Favorite" :size="size" />
            <Button icon="pi pi-times" severity="danger" variant="text" rounded aria-label="Cancel" :size="size" />
            <Button icon="pi pi-star" severity="contrast" variant="text" rounded aria-label="Star" :size="size" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const size = ref('normal');
const sizeOptions = ref([
    { label: 'Small', value: 'small' },
    { label: 'Normal', value: 'normal' },
    { label: 'Large', value: 'large' }
]);
<\/script>
```

</details>

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

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Button type="button" label="Search" icon="pi pi-search" :loading="loading" @click="load" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(false);

const load = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
    }, 2000);
};
<\/script>
```

</details>

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

| Name                      | Type                                                                                                                                                                       | Default   | Description                                                                                                                                                                                                          |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| aria-activedescendant     | string                                                                                                                                                                     | -         | Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.                                                                                                     |
| aria-atomic               | Booleanish                                                                                                                                                                 | -         | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.                                            |
| aria-autocomplete         | "none" \| "inline" \| "list" \| "both"                                                                                                                                     | -         | Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be presented if they are made.                       |
| aria-busy                 | Booleanish                                                                                                                                                                 | -         | Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.                                                       |
| aria-checked              | Booleanish \| "mixed"                                                                                                                                                      | -         | Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.                                                                                                                               |
| aria-colcount             | Numberish                                                                                                                                                                  | -         | Defines the total number of columns in a table, grid, or treegrid.                                                                                                                                                   |
| aria-colindex             | Numberish                                                                                                                                                                  | -         | Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.                                                                                         |
| aria-colspan              | Numberish                                                                                                                                                                  | -         | Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.                                                                                                                       |
| aria-controls             | string                                                                                                                                                                     | -         | Identifies the element (or elements) whose contents or presence are controlled by the current element.                                                                                                               |
| aria-current              | Booleanish \| "page" \| "step" \| "location" \| "date" \| "time"                                                                                                           | -         | Indicates the element that represents the current item within a container or set of related elements.                                                                                                                |
| aria-describedby          | string                                                                                                                                                                     | -         | Identifies the element (or elements) that describes the object.                                                                                                                                                      |
| aria-details              | string                                                                                                                                                                     | -         | Identifies the element that provides a detailed, extended description for the object.                                                                                                                                |
| aria-disabled             | Booleanish                                                                                                                                                                 | -         | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.                                                                                                                 |
| aria-dropeffect           | "link" \| "none" \| "copy" \| "execute" \| "move" \| "popup"                                                                                                               | -         | Indicates what functions can be performed when a dragged object is released on the drop target.                                                                                                                      |
| aria-errormessage         | string                                                                                                                                                                     | -         | Identifies the element that provides an error message for the object.                                                                                                                                                |
| aria-expanded             | Booleanish                                                                                                                                                                 | -         | Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.                                                                                                          |
| aria-flowto               | string                                                                                                                                                                     | -         | Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion, allows assistive technology to override the general default of reading in document source order. |
| aria-grabbed              | Booleanish                                                                                                                                                                 | -         | Indicates an element's "grabbed" state in a drag-and-drop operation.                                                                                                                                                 |
| aria-haspopup             | Booleanish \| "menu" \| "listbox" \| "tree" \| "grid" \| "dialog"                                                                                                          | -         | Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.                                                                                       |
| aria-hidden               | Booleanish                                                                                                                                                                 | -         | Indicates whether the element is exposed to an accessibility API.                                                                                                                                                    |
| aria-invalid              | Booleanish \| "grammar" \| "spelling"                                                                                                                                      | -         | Indicates the entered value does not conform to the format expected by the application.                                                                                                                              |
| aria-keyshortcuts         | string                                                                                                                                                                     | -         | Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.                                                                                                                 |
| aria-label                | string                                                                                                                                                                     | -         | Defines a string value that labels the current element.                                                                                                                                                              |
| aria-labelledby           | string                                                                                                                                                                     | -         | Identifies the element (or elements) that labels the current element.                                                                                                                                                |
| aria-level                | Numberish                                                                                                                                                                  | -         | Defines the hierarchical level of an element within a structure.                                                                                                                                                     |
| aria-live                 | "off" \| "assertive" \| "polite"                                                                                                                                           | -         | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.                                                     |
| aria-modal                | Booleanish                                                                                                                                                                 | -         | Indicates whether an element is modal when displayed.                                                                                                                                                                |
| aria-multiline            | Booleanish                                                                                                                                                                 | -         | Indicates whether a text box accepts multiple lines of input or only a single line.                                                                                                                                  |
| aria-multiselectable      | Booleanish                                                                                                                                                                 | -         | Indicates that the user may select more than one item from the current selectable descendants.                                                                                                                       |
| aria-orientation          | "horizontal" \| "vertical"                                                                                                                                                 | -         | Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.                                                                                                                           |
| aria-owns                 | string                                                                                                                                                                     | -         | Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship between DOM elements where the DOM hierarchy cannot be used to represent the relationship.      |
| aria-placeholder          | string                                                                                                                                                                     | -         | Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value. A hint could be a sample value or a brief description of the expected format.                  |
| aria-posinset             | Numberish                                                                                                                                                                  | -         | Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.                                                                |
| aria-pressed              | Booleanish \| "mixed"                                                                                                                                                      | -         | Indicates the current "pressed" state of toggle buttons.                                                                                                                                                             |
| aria-readonly             | Booleanish                                                                                                                                                                 | -         | Indicates that the element is not editable, but is otherwise operable.                                                                                                                                               |
| aria-relevant             | "text" \| "additions" \| "additions removals" \| "additions text" \| "all" \| "removals" \| "removals additions" \| "removals text" \| "text additions" \| "text removals" | -         | Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.                                                                                               |
| aria-required             | Booleanish                                                                                                                                                                 | -         | Indicates that user input is required on the element before a form may be submitted.                                                                                                                                 |
| aria-roledescription      | string                                                                                                                                                                     | -         | Defines a human-readable, author-localized description for the role of an element.                                                                                                                                   |
| aria-rowcount             | Numberish                                                                                                                                                                  | -         | Defines the total number of rows in a table, grid, or treegrid.                                                                                                                                                      |
| aria-rowindex             | Numberish                                                                                                                                                                  | -         | Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.                                                                                               |
| aria-rowspan              | Numberish                                                                                                                                                                  | -         | Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.                                                                                                                          |
| aria-selected             | Booleanish                                                                                                                                                                 | -         | Indicates the current "selected" state of various widgets.                                                                                                                                                           |
| aria-setsize              | Numberish                                                                                                                                                                  | -         | Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.                                                                            |
| aria-sort                 | "none" \| "ascending" \| "descending" \| "other"                                                                                                                           | -         | Indicates if items in a table or grid are sorted in ascending or descending order.                                                                                                                                   |
| aria-valuemax             | Numberish                                                                                                                                                                  | -         | Defines the maximum allowed value for a range widget.                                                                                                                                                                |
| aria-valuemin             | Numberish                                                                                                                                                                  | -         | Defines the minimum allowed value for a range widget.                                                                                                                                                                |
| aria-valuenow             | Numberish                                                                                                                                                                  | -         | Defines the current value for a range widget.                                                                                                                                                                        |
| aria-valuetext            | string                                                                                                                                                                     | -         | Defines the human readable text alternative of aria-valuenow for a range widget.                                                                                                                                     |
| innerHTML                 | string                                                                                                                                                                     | -         |                                                                                                                                                                                                                      |
| accesskey                 | string                                                                                                                                                                     | -         |                                                                                                                                                                                                                      |
| contenteditable           | Booleanish \| "inherit" \| "plaintext-only"                                                                                                                                | -         |                                                                                                                                                                                                                      |
| contextmenu               | string                                                                                                                                                                     | -         |                                                                                                                                                                                                                      |
| dir                       | string                                                                                                                                                                     | -         |                                                                                                                                                                                                                      |
| draggable                 | Booleanish                                                                                                                                                                 | -         |                                                                                                                                                                                                                      |
| enterkeyhint              | "enter" \| "done" \| "go" \| "next" \| "previous" \| "search" \| "send"                                                                                                    | -         |                                                                                                                                                                                                                      |
| enterKeyHint              | "enter" \| "done" \| "go" \| "next" \| "previous" \| "search" \| "send"                                                                                                    | -         |                                                                                                                                                                                                                      |
| hidden                    | "" \| Booleanish \| "hidden" \| "until-found"                                                                                                                              | -         |                                                                                                                                                                                                                      |
| id                        | string                                                                                                                                                                     | -         |                                                                                                                                                                                                                      |
| inert                     | Booleanish                                                                                                                                                                 | -         |                                                                                                                                                                                                                      |
| lang                      | string                                                                                                                                                                     | -         |                                                                                                                                                                                                                      |
| placeholder               | string                                                                                                                                                                     | -         |                                                                                                                                                                                                                      |
| spellcheck                | Booleanish                                                                                                                                                                 | -         |                                                                                                                                                                                                                      |
| tabindex                  | Numberish                                                                                                                                                                  | -         |                                                                                                                                                                                                                      |
| title                     | string                                                                                                                                                                     | -         |                                                                                                                                                                                                                      |
| translate                 | "yes" \| "no"                                                                                                                                                              | -         |                                                                                                                                                                                                                      |
| radiogroup                | string                                                                                                                                                                     | -         |                                                                                                                                                                                                                      |
| role                      | string                                                                                                                                                                     | -         |                                                                                                                                                                                                                      |
| about                     | string                                                                                                                                                                     | -         |                                                                                                                                                                                                                      |
| datatype                  | string                                                                                                                                                                     | -         |                                                                                                                                                                                                                      |
| inlist                    | any                                                                                                                                                                        | -         |                                                                                                                                                                                                                      |
| prefix                    | string                                                                                                                                                                     | -         |                                                                                                                                                                                                                      |
| property                  | string                                                                                                                                                                     | -         |                                                                                                                                                                                                                      |
| resource                  | string                                                                                                                                                                     | -         |                                                                                                                                                                                                                      |
| typeof                    | string                                                                                                                                                                     | -         |                                                                                                                                                                                                                      |
| vocab                     | string                                                                                                                                                                     | -         |                                                                                                                                                                                                                      |
| autocapitalize            | string                                                                                                                                                                     | -         |                                                                                                                                                                                                                      |
| autocorrect               | string                                                                                                                                                                     | -         |                                                                                                                                                                                                                      |
| autosave                  | string                                                                                                                                                                     | -         |                                                                                                                                                                                                                      |
| color                     | string                                                                                                                                                                     | -         |                                                                                                                                                                                                                      |
| itemprop                  | string                                                                                                                                                                     | -         |                                                                                                                                                                                                                      |
| itemscope                 | Booleanish                                                                                                                                                                 | -         |                                                                                                                                                                                                                      |
| itemtype                  | string                                                                                                                                                                     | -         |                                                                                                                                                                                                                      |
| itemid                    | string                                                                                                                                                                     | -         |                                                                                                                                                                                                                      |
| itemref                   | string                                                                                                                                                                     | -         |                                                                                                                                                                                                                      |
| results                   | Numberish                                                                                                                                                                  | -         |                                                                                                                                                                                                                      |
| security                  | string                                                                                                                                                                     | -         |                                                                                                                                                                                                                      |
| unselectable              | "on" \| "off"                                                                                                                                                              | -         |                                                                                                                                                                                                                      |
| inputmode                 | "text" \| "search" \| "none" \| "tel" \| "url" \| "email" \| "numeric" \| "decimal"                                                                                        | -         | Hints at the type of data that might be entered by the user while editing the element or its contents                                                                                                                |
| is                        | string                                                                                                                                                                     | -         | Specify that a standard HTML element should behave like a defined custom built-in element                                                                                                                            |
| exportparts               | string                                                                                                                                                                     | -         |                                                                                                                                                                                                                      |
| part                      | string                                                                                                                                                                     | -         |                                                                                                                                                                                                                      |
| autofocus                 | Booleanish                                                                                                                                                                 | -         |                                                                                                                                                                                                                      |
| disabled                  | Booleanish                                                                                                                                                                 | -         |                                                                                                                                                                                                                      |
| form                      | string                                                                                                                                                                     | -         |                                                                                                                                                                                                                      |
| formaction                | string                                                                                                                                                                     | -         |                                                                                                                                                                                                                      |
| formenctype               | string                                                                                                                                                                     | -         |                                                                                                                                                                                                                      |
| formmethod                | string                                                                                                                                                                     | -         |                                                                                                                                                                                                                      |
| formnovalidate            | Booleanish                                                                                                                                                                 | -         |                                                                                                                                                                                                                      |
| formtarget                | string                                                                                                                                                                     | -         |                                                                                                                                                                                                                      |
| name                      | string                                                                                                                                                                     | -         |                                                                                                                                                                                                                      |
| type                      | "submit" \| "reset" \| "button"                                                                                                                                            | -         |                                                                                                                                                                                                                      |
| value                     | string \| number \| readonly string[]                                                                                                                                      | -         |                                                                                                                                                                                                                      |
| onCopy                    | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onCut                     | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onPaste                   | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onCompositionend          | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onCompositionstart        | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onCompositionupdate       | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onDrag                    | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onDragend                 | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onDragenter               | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onDragexit                | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onDragleave               | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onDragover                | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onDragstart               | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onDrop                    | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onFocus                   | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onFocusin                 | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onFocusout                | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onBlur                    | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onChange                  | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onBeforeinput             | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onFormdata                | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onInput                   | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onReset                   | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onSubmit                  | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onInvalid                 | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onFullscreenchange        | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onFullscreenerror         | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onLoad                    | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onError                   | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onKeydown                 | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onKeypress                | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onKeyup                   | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onDblclick                | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onMousedown               | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onMouseenter              | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onMouseleave              | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onMousemove               | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onMouseout                | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onMouseover               | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onMouseup                 | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onAbort                   | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onCanplay                 | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onCanplaythrough          | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onDurationchange          | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onEmptied                 | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onEncrypted               | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onEnded                   | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onLoadeddata              | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onLoadedmetadata          | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onLoadstart               | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onPause                   | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onPlay                    | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onPlaying                 | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onProgress                | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onRatechange              | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onSeeked                  | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onSeeking                 | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onStalled                 | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onSuspend                 | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onTimeupdate              | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onVolumechange            | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onWaiting                 | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onSelect                  | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onScroll                  | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onScrollend               | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onTouchcancel             | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onTouchend                | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onTouchmove               | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onTouchstart              | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onAuxclick                | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onClick                   | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onContextmenu             | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onGotpointercapture       | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onLostpointercapture      | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onPointerdown             | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onPointermove             | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onPointerup               | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onPointercancel           | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onPointerenter            | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onPointerleave            | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onPointerover             | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onPointerout              | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onBeforetoggle            | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onToggle                  | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onWheel                   | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onAnimationcancel         | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onAnimationstart          | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onAnimationend            | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onAnimationiteration      | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onSecuritypolicyviolation | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onTransitioncancel        | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onTransitionend           | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onTransitionrun           | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| onTransitionstart         | Function                                                                                                                                                                   | -         |                                                                                                                                                                                                                      |
| style                     | any                                                                                                                                                                        | -         | Inline style of the button.                                                                                                                                                                                          |
| class                     | any                                                                                                                                                                        | -         | Style class of the button.                                                                                                                                                                                           |
| label                     | string                                                                                                                                                                     | -         | Text of the button.                                                                                                                                                                                                  |
| icon                      | string                                                                                                                                                                     | -         | Name of the icon.                                                                                                                                                                                                    |
| iconPos                   | HintedString<"left" \| "right" \| "top" \| "bottom">                                                                                                                       | left      | Position of the icon.                                                                                                                                                                                                |
| iconClass                 | string \| object                                                                                                                                                           | -         | Style class of the icon.                                                                                                                                                                                             |
| badge                     | string                                                                                                                                                                     | -         | Value of the badge.                                                                                                                                                                                                  |
| badgeClass                | string \| object                                                                                                                                                           | -         | Style class of the badge.                                                                                                                                                                                            |
| badgeSeverity             | null \| HintedString<"secondary" \| "info" \| "success" \| "warn" \| "danger" \| "contrast">                                                                               | -         | Severity type of the badge.                                                                                                                                                                                          |
| loading                   | boolean                                                                                                                                                                    | false     | Whether the button is in loading state.                                                                                                                                                                              |
| loadingIcon               | string                                                                                                                                                                     | -         | Icon to display in loading state.                                                                                                                                                                                    |
| as                        | string \| Component                                                                                                                                                        | BUTTON    | Use to change the HTML tag of root element.                                                                                                                                                                          |
| asChild                   | boolean                                                                                                                                                                    | false     | When enabled, it changes the default rendered element for the one passed as a child element.                                                                                                                         |
| link                      | boolean                                                                                                                                                                    | false     | Add a link style to the button.                                                                                                                                                                                      |
| severity                  | HintedString<"secondary" \| "info" \| "success" \| "warn" \| "danger" \| "contrast" \| "help">                                                                             | -         | Defines the style of the button.                                                                                                                                                                                     |
| raised                    | boolean                                                                                                                                                                    | false     | Add a shadow to indicate elevation.                                                                                                                                                                                  |
| rounded                   | boolean                                                                                                                                                                    | false     | Add a circular border radius to the button.                                                                                                                                                                          |
| text                      | boolean                                                                                                                                                                    | false     | Add a textual class to the button without a background initially.                                                                                                                                                    |
| outlined                  | boolean                                                                                                                                                                    | false     | Add a border class without a background initially.                                                                                                                                                                   |
| size                      | HintedString<"small" \| "large">                                                                                                                                           | -         | Defines the size of the button.                                                                                                                                                                                      |
| variant                   | HintedString<"outlined" \| "text" \| "link">                                                                                                                               | undefined | Specifies the variant of the component.                                                                                                                                                                              |
| plain                     | boolean                                                                                                                                                                    | false     | Add a plain textual class to the button without a background initially.                                                                                                                                              |
| fluid                     | boolean                                                                                                                                                                    | null      | Spans 100% width of the container when enabled.                                                                                                                                                                      |
| dt                        | any                                                                                                                                                                        | -         | It generates scoped CSS variables using design tokens for the component.                                                                                                                                             |
| pt                        | PassThrough<ButtonPassThroughOptions<any>>                                                                                                                                 | -         | Used to pass attributes to DOM elements inside the component.                                                                                                                                                        |
| ptOptions                 | any                                                                                                                                                                        | -         | Used to configure passthrough(pt) options of the component.                                                                                                                                                          |
| unstyled                  | boolean                                                                                                                                                                    | false     | When enabled, it removes component related styles in the core.                                                                                                                                                       |

## Pass Through Options

| Name        | Type                           | Description                                                |
| ----------- | ------------------------------ | ---------------------------------------------------------- |
| root        | ButtonPassThroughOptionType<T> | Used to pass attributes to the root's DOM element.         |
| loadingIcon | ButtonPassThroughOptionType<T> | Used to pass attributes to the loading icon's DOM element. |
| icon        | ButtonPassThroughOptionType<T> | Used to pass attributes to the icon's DOM element.         |
| label       | ButtonPassThroughOptionType<T> | Used to pass attributes to the label's DOM element.        |
| pcBadge     | ButtonPassThroughOptionType<T> | Used to pass attributes to the Badge component.            |
| hooks       | any                            | Used to manage all lifecycle hooks.                        |

## Theming

### CSS Classes

| Class                 | Description                            |
| --------------------- | -------------------------------------- |
| p-button              | Class name of the root element         |
| p-button-loading-icon | Class name of the loading icon element |
| p-button-icon         | Class name of the icon element         |
| p-button-label        | Class name of the label element        |

### Design Tokens

| Token                                       | CSS Variable                                    | Description                             |
| ------------------------------------------- | ----------------------------------------------- | --------------------------------------- |
| button.border.radius                        | --p-button-border-radius                        | Border radius of root                   |
| button.rounded.border.radius                | --p-button-rounded-border-radius                | Rounded border radius of root           |
| button.gap                                  | --p-button-gap                                  | Gap of root                             |
| button.padding.x                            | --p-button-padding-x                            | Padding x of root                       |
| button.padding.y                            | --p-button-padding-y                            | Padding y of root                       |
| button.icon.only.width                      | --p-button-icon-only-width                      | Icon only width of root                 |
| button.sm.font.size                         | --p-button-sm-font-size                         | Sm font size of root                    |
| button.sm.padding.x                         | --p-button-sm-padding-x                         | Sm padding x of root                    |
| button.sm.padding.y                         | --p-button-sm-padding-y                         | Sm padding y of root                    |
| button.sm.icon.only.width                   | --p-button-sm-icon-only-width                   | Sm icon only width of root              |
| button.lg.font.size                         | --p-button-lg-font-size                         | Lg font size of root                    |
| button.lg.padding.x                         | --p-button-lg-padding-x                         | Lg padding x of root                    |
| button.lg.padding.y                         | --p-button-lg-padding-y                         | Lg padding y of root                    |
| button.lg.icon.only.width                   | --p-button-lg-icon-only-width                   | Lg icon only width of root              |
| button.label.font.weight                    | --p-button-label-font-weight                    | Label font weight of root               |
| button.raised.shadow                        | --p-button-raised-shadow                        | Raised shadow of root                   |
| button.focus.ring.width                     | --p-button-focus-ring-width                     | Focus ring width of root                |
| button.focus.ring.style                     | --p-button-focus-ring-style                     | Focus ring style of root                |
| button.focus.ring.offset                    | --p-button-focus-ring-offset                    | Focus ring offset of root               |
| button.badge.size                           | --p-button-badge-size                           | Badge size of root                      |
| button.transition.duration                  | --p-button-transition-duration                  | Transition duration of root             |
| button.primary.background                   | --p-button-primary-background                   | Primary background of root              |
| button.primary.hover.background             | --p-button-primary-hover-background             | Primary hover background of root        |
| button.primary.active.background            | --p-button-primary-active-background            | Primary active background of root       |
| button.primary.border.color                 | --p-button-primary-border-color                 | Primary border color of root            |
| button.primary.hover.border.color           | --p-button-primary-hover-border-color           | Primary hover border color of root      |
| button.primary.active.border.color          | --p-button-primary-active-border-color          | Primary active border color of root     |
| button.primary.color                        | --p-button-primary-color                        | Primary color of root                   |
| button.primary.hover.color                  | --p-button-primary-hover-color                  | Primary hover color of root             |
| button.primary.active.color                 | --p-button-primary-active-color                 | Primary active color of root            |
| button.primary.focus.ring.color             | --p-button-primary-focus-ring-color             | Primary focus ring color of root        |
| button.primary.focus.ring.shadow            | --p-button-primary-focus-ring-shadow            | Primary focus ring shadow of root       |
| button.secondary.background                 | --p-button-secondary-background                 | Secondary background of root            |
| button.secondary.hover.background           | --p-button-secondary-hover-background           | Secondary hover background of root      |
| button.secondary.active.background          | --p-button-secondary-active-background          | Secondary active background of root     |
| button.secondary.border.color               | --p-button-secondary-border-color               | Secondary border color of root          |
| button.secondary.hover.border.color         | --p-button-secondary-hover-border-color         | Secondary hover border color of root    |
| button.secondary.active.border.color        | --p-button-secondary-active-border-color        | Secondary active border color of root   |
| button.secondary.color                      | --p-button-secondary-color                      | Secondary color of root                 |
| button.secondary.hover.color                | --p-button-secondary-hover-color                | Secondary hover color of root           |
| button.secondary.active.color               | --p-button-secondary-active-color               | Secondary active color of root          |
| button.secondary.focus.ring.color           | --p-button-secondary-focus-ring-color           | Secondary focus ring color of root      |
| button.secondary.focus.ring.shadow          | --p-button-secondary-focus-ring-shadow          | Secondary focus ring shadow of root     |
| button.info.background                      | --p-button-info-background                      | Info background of root                 |
| button.info.hover.background                | --p-button-info-hover-background                | Info hover background of root           |
| button.info.active.background               | --p-button-info-active-background               | Info active background of root          |
| button.info.border.color                    | --p-button-info-border-color                    | Info border color of root               |
| button.info.hover.border.color              | --p-button-info-hover-border-color              | Info hover border color of root         |
| button.info.active.border.color             | --p-button-info-active-border-color             | Info active border color of root        |
| button.info.color                           | --p-button-info-color                           | Info color of root                      |
| button.info.hover.color                     | --p-button-info-hover-color                     | Info hover color of root                |
| button.info.active.color                    | --p-button-info-active-color                    | Info active color of root               |
| button.info.focus.ring.color                | --p-button-info-focus-ring-color                | Info focus ring color of root           |
| button.info.focus.ring.shadow               | --p-button-info-focus-ring-shadow               | Info focus ring shadow of root          |
| button.success.background                   | --p-button-success-background                   | Success background of root              |
| button.success.hover.background             | --p-button-success-hover-background             | Success hover background of root        |
| button.success.active.background            | --p-button-success-active-background            | Success active background of root       |
| button.success.border.color                 | --p-button-success-border-color                 | Success border color of root            |
| button.success.hover.border.color           | --p-button-success-hover-border-color           | Success hover border color of root      |
| button.success.active.border.color          | --p-button-success-active-border-color          | Success active border color of root     |
| button.success.color                        | --p-button-success-color                        | Success color of root                   |
| button.success.hover.color                  | --p-button-success-hover-color                  | Success hover color of root             |
| button.success.active.color                 | --p-button-success-active-color                 | Success active color of root            |
| button.success.focus.ring.color             | --p-button-success-focus-ring-color             | Success focus ring color of root        |
| button.success.focus.ring.shadow            | --p-button-success-focus-ring-shadow            | Success focus ring shadow of root       |
| button.warn.background                      | --p-button-warn-background                      | Warn background of root                 |
| button.warn.hover.background                | --p-button-warn-hover-background                | Warn hover background of root           |
| button.warn.active.background               | --p-button-warn-active-background               | Warn active background of root          |
| button.warn.border.color                    | --p-button-warn-border-color                    | Warn border color of root               |
| button.warn.hover.border.color              | --p-button-warn-hover-border-color              | Warn hover border color of root         |
| button.warn.active.border.color             | --p-button-warn-active-border-color             | Warn active border color of root        |
| button.warn.color                           | --p-button-warn-color                           | Warn color of root                      |
| button.warn.hover.color                     | --p-button-warn-hover-color                     | Warn hover color of root                |
| button.warn.active.color                    | --p-button-warn-active-color                    | Warn active color of root               |
| button.warn.focus.ring.color                | --p-button-warn-focus-ring-color                | Warn focus ring color of root           |
| button.warn.focus.ring.shadow               | --p-button-warn-focus-ring-shadow               | Warn focus ring shadow of root          |
| button.help.background                      | --p-button-help-background                      | Help background of root                 |
| button.help.hover.background                | --p-button-help-hover-background                | Help hover background of root           |
| button.help.active.background               | --p-button-help-active-background               | Help active background of root          |
| button.help.border.color                    | --p-button-help-border-color                    | Help border color of root               |
| button.help.hover.border.color              | --p-button-help-hover-border-color              | Help hover border color of root         |
| button.help.active.border.color             | --p-button-help-active-border-color             | Help active border color of root        |
| button.help.color                           | --p-button-help-color                           | Help color of root                      |
| button.help.hover.color                     | --p-button-help-hover-color                     | Help hover color of root                |
| button.help.active.color                    | --p-button-help-active-color                    | Help active color of root               |
| button.help.focus.ring.color                | --p-button-help-focus-ring-color                | Help focus ring color of root           |
| button.help.focus.ring.shadow               | --p-button-help-focus-ring-shadow               | Help focus ring shadow of root          |
| button.danger.background                    | --p-button-danger-background                    | Danger background of root               |
| button.danger.hover.background              | --p-button-danger-hover-background              | Danger hover background of root         |
| button.danger.active.background             | --p-button-danger-active-background             | Danger active background of root        |
| button.danger.border.color                  | --p-button-danger-border-color                  | Danger border color of root             |
| button.danger.hover.border.color            | --p-button-danger-hover-border-color            | Danger hover border color of root       |
| button.danger.active.border.color           | --p-button-danger-active-border-color           | Danger active border color of root      |
| button.danger.color                         | --p-button-danger-color                         | Danger color of root                    |
| button.danger.hover.color                   | --p-button-danger-hover-color                   | Danger hover color of root              |
| button.danger.active.color                  | --p-button-danger-active-color                  | Danger active color of root             |
| button.danger.focus.ring.color              | --p-button-danger-focus-ring-color              | Danger focus ring color of root         |
| button.danger.focus.ring.shadow             | --p-button-danger-focus-ring-shadow             | Danger focus ring shadow of root        |
| button.contrast.background                  | --p-button-contrast-background                  | Contrast background of root             |
| button.contrast.hover.background            | --p-button-contrast-hover-background            | Contrast hover background of root       |
| button.contrast.active.background           | --p-button-contrast-active-background           | Contrast active background of root      |
| button.contrast.border.color                | --p-button-contrast-border-color                | Contrast border color of root           |
| button.contrast.hover.border.color          | --p-button-contrast-hover-border-color          | Contrast hover border color of root     |
| button.contrast.active.border.color         | --p-button-contrast-active-border-color         | Contrast active border color of root    |
| button.contrast.color                       | --p-button-contrast-color                       | Contrast color of root                  |
| button.contrast.hover.color                 | --p-button-contrast-hover-color                 | Contrast hover color of root            |
| button.contrast.active.color                | --p-button-contrast-active-color                | Contrast active color of root           |
| button.contrast.focus.ring.color            | --p-button-contrast-focus-ring-color            | Contrast focus ring color of root       |
| button.contrast.focus.ring.shadow           | --p-button-contrast-focus-ring-shadow           | Contrast focus ring shadow of root      |
| button.outlined.primary.hover.background    | --p-button-outlined-primary-hover-background    | Primary hover background of outlined    |
| button.outlined.primary.active.background   | --p-button-outlined-primary-active-background   | Primary active background of outlined   |
| button.outlined.primary.border.color        | --p-button-outlined-primary-border-color        | Primary border color of outlined        |
| button.outlined.primary.color               | --p-button-outlined-primary-color               | Primary color of outlined               |
| button.outlined.secondary.hover.background  | --p-button-outlined-secondary-hover-background  | Secondary hover background of outlined  |
| button.outlined.secondary.active.background | --p-button-outlined-secondary-active-background | Secondary active background of outlined |
| button.outlined.secondary.border.color      | --p-button-outlined-secondary-border-color      | Secondary border color of outlined      |
| button.outlined.secondary.color             | --p-button-outlined-secondary-color             | Secondary color of outlined             |
| button.outlined.success.hover.background    | --p-button-outlined-success-hover-background    | Success hover background of outlined    |
| button.outlined.success.active.background   | --p-button-outlined-success-active-background   | Success active background of outlined   |
| button.outlined.success.border.color        | --p-button-outlined-success-border-color        | Success border color of outlined        |
| button.outlined.success.color               | --p-button-outlined-success-color               | Success color of outlined               |
| button.outlined.info.hover.background       | --p-button-outlined-info-hover-background       | Info hover background of outlined       |
| button.outlined.info.active.background      | --p-button-outlined-info-active-background      | Info active background of outlined      |
| button.outlined.info.border.color           | --p-button-outlined-info-border-color           | Info border color of outlined           |
| button.outlined.info.color                  | --p-button-outlined-info-color                  | Info color of outlined                  |
| button.outlined.warn.hover.background       | --p-button-outlined-warn-hover-background       | Warn hover background of outlined       |
| button.outlined.warn.active.background      | --p-button-outlined-warn-active-background      | Warn active background of outlined      |
| button.outlined.warn.border.color           | --p-button-outlined-warn-border-color           | Warn border color of outlined           |
| button.outlined.warn.color                  | --p-button-outlined-warn-color                  | Warn color of outlined                  |
| button.outlined.help.hover.background       | --p-button-outlined-help-hover-background       | Help hover background of outlined       |
| button.outlined.help.active.background      | --p-button-outlined-help-active-background      | Help active background of outlined      |
| button.outlined.help.border.color           | --p-button-outlined-help-border-color           | Help border color of outlined           |
| button.outlined.help.color                  | --p-button-outlined-help-color                  | Help color of outlined                  |
| button.outlined.danger.hover.background     | --p-button-outlined-danger-hover-background     | Danger hover background of outlined     |
| button.outlined.danger.active.background    | --p-button-outlined-danger-active-background    | Danger active background of outlined    |
| button.outlined.danger.border.color         | --p-button-outlined-danger-border-color         | Danger border color of outlined         |
| button.outlined.danger.color                | --p-button-outlined-danger-color                | Danger color of outlined                |
| button.outlined.contrast.hover.background   | --p-button-outlined-contrast-hover-background   | Contrast hover background of outlined   |
| button.outlined.contrast.active.background  | --p-button-outlined-contrast-active-background  | Contrast active background of outlined  |
| button.outlined.contrast.border.color       | --p-button-outlined-contrast-border-color       | Contrast border color of outlined       |
| button.outlined.contrast.color              | --p-button-outlined-contrast-color              | Contrast color of outlined              |
| button.outlined.plain.hover.background      | --p-button-outlined-plain-hover-background      | Plain hover background of outlined      |
| button.outlined.plain.active.background     | --p-button-outlined-plain-active-background     | Plain active background of outlined     |
| button.outlined.plain.border.color          | --p-button-outlined-plain-border-color          | Plain border color of outlined          |
| button.outlined.plain.color                 | --p-button-outlined-plain-color                 | Plain color of outlined                 |
| button.text.primary.hover.background        | --p-button-text-primary-hover-background        | Primary hover background of text        |
| button.text.primary.active.background       | --p-button-text-primary-active-background       | Primary active background of text       |
| button.text.primary.color                   | --p-button-text-primary-color                   | Primary color of text                   |
| button.text.secondary.hover.background      | --p-button-text-secondary-hover-background      | Secondary hover background of text      |
| button.text.secondary.active.background     | --p-button-text-secondary-active-background     | Secondary active background of text     |
| button.text.secondary.color                 | --p-button-text-secondary-color                 | Secondary color of text                 |
| button.text.success.hover.background        | --p-button-text-success-hover-background        | Success hover background of text        |
| button.text.success.active.background       | --p-button-text-success-active-background       | Success active background of text       |
| button.text.success.color                   | --p-button-text-success-color                   | Success color of text                   |
| button.text.info.hover.background           | --p-button-text-info-hover-background           | Info hover background of text           |
| button.text.info.active.background          | --p-button-text-info-active-background          | Info active background of text          |
| button.text.info.color                      | --p-button-text-info-color                      | Info color of text                      |
| button.text.warn.hover.background           | --p-button-text-warn-hover-background           | Warn hover background of text           |
| button.text.warn.active.background          | --p-button-text-warn-active-background          | Warn active background of text          |
| button.text.warn.color                      | --p-button-text-warn-color                      | Warn color of text                      |
| button.text.help.hover.background           | --p-button-text-help-hover-background           | Help hover background of text           |
| button.text.help.active.background          | --p-button-text-help-active-background          | Help active background of text          |
| button.text.help.color                      | --p-button-text-help-color                      | Help color of text                      |
| button.text.danger.hover.background         | --p-button-text-danger-hover-background         | Danger hover background of text         |
| button.text.danger.active.background        | --p-button-text-danger-active-background        | Danger active background of text        |
| button.text.danger.color                    | --p-button-text-danger-color                    | Danger color of text                    |
| button.text.contrast.hover.background       | --p-button-text-contrast-hover-background       | Contrast hover background of text       |
| button.text.contrast.active.background      | --p-button-text-contrast-active-background      | Contrast active background of text      |
| button.text.contrast.color                  | --p-button-text-contrast-color                  | Contrast color of text                  |
| button.text.plain.hover.background          | --p-button-text-plain-hover-background          | Plain hover background of text          |
| button.text.plain.active.background         | --p-button-text-plain-active-background         | Plain active background of text         |
| button.text.plain.color                     | --p-button-text-plain-color                     | Plain color of text                     |
| button.link.color                           | --p-button-link-color                           | Color of link                           |
| button.link.hover.color                     | --p-button-link-hover-color                     | Hover color of link                     |
| button.link.active.color                    | --p-button-link-active-color                    | Active color of link                    |
