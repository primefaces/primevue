# Vue Chip Component

Chip represents entities using icons, labels and images.

## Import

```javascript
import Chip from 'primevue/chip';
```

## Accessibility

Screen Reader Chip uses the label property as the default aria-label , since any attribute is passed to the root element aria-labelledby or aria-label can be used to override the default behavior. Removable chips have a tabindex and focusable with the tab key. Keyboard Support Key Function backspace Hides removable. enter Hides removable.

## Basic

A basic chip with a text is created with the label property. In addition when removable is added, a delete icon is displayed to remove a chip.

```vue
<Chip label="Action" />
<Chip label="Comedy" />
<Chip label="Mystery" />
<Chip label="Thriller" removable />
```

## Icon

A font icon next to the label can be displayed with the icon property.

```vue
<Chip label="Apple" icon="pi pi-apple" />
<Chip label="Facebook" icon="pi pi-facebook" />
<Chip label="Google" icon="pi pi-google" />
<Chip label="Microsoft" icon="pi pi-microsoft" removable />
<Chip label="GitHub" icon="pi pi-github" removable>
    <template #removeicon="{ removeCallback, keydownCallback }">
        <i class="pi pi-minus-circle" @click="removeCallback" @keydown="keydownCallback" />
    </template>
</Chip>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap gap-2">
        <Chip label="Apple" icon="pi pi-apple" />
        <Chip label="Facebook" icon="pi pi-facebook" />
        <Chip label="Google" icon="pi pi-google" />
        <Chip label="Microsoft" icon="pi pi-microsoft" removable />
        <Chip label="GitHub" icon="pi pi-github" removable>
            <template #removeicon="{ removeCallback, keydownCallback }">
                <i class="pi pi-minus-circle" @click="removeCallback" @keydown="keydownCallback" />
            </template>
        </Chip>
    </div>
</template>
<script setup>

<\/script>
```

</details>

## Image

The image property is used to display an image like an avatar.

```vue
<Chip label="Amy Elsner" image="/images/avatar/amyelsner.png" />
<Chip label="Asiya Javayant" image="/images/avatar/asiyajavayant.png" />
<Chip label="Onyama Limba" image="/images/avatar/onyamalimba.png" />
<Chip label="Xuxue Feng" image="/images/avatar/xuxuefeng.png" removable />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap gap-2">
        <Chip label="Amy Elsner" image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
        <Chip label="Asiya Javayant" image=https://primefaces.org/cdn/primevue"/images/avatar/asiyajavayant.png" />
        <Chip label="Onyama Limba" image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" />
        <Chip label="Xuxue Feng" image="https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png" removable />
    </div>
</template>

<script setup>

<\/script>
```

</details>

## StyleDoc

List of class names used in the styled mode.

## TemplateDoc

The default slot allows displaying custom content inside a chip.

```vue
<Chip class="py-0 pl-0 pr-4">
    <span class="bg-primary text-primary-contrast rounded-full w-8 h-8 flex items-center justify-center">P</span>
    <span class="ml-2 font-medium">PRIME</span>
</Chip>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Chip class="py-0 pl-0 pr-4">
            <span class="bg-primary text-primary-contrast rounded-full w-8 h-8 flex items-center justify-center">P</span>
            <span class="ml-2 font-medium">PRIME</span>
        </Chip>
    </div>
</template>

<script setup>

<\/script>
```

</details>

## Chip

### Props

| Name       | Type                                     | Default | Description                                                              |
| ---------- | ---------------------------------------- | ------- | ------------------------------------------------------------------------ |
| label      | string \| number                         | -       | Defines the text to display.                                             |
| icon       | string                                   | -       | Defines the icon to display.                                             |
| image      | string                                   | -       | Defines the image to display.                                            |
| removable  | boolean                                  | false   | Whether to display a remove icon.                                        |
| removeIcon | string                                   | -       | Icon of the remove element.                                              |
| dt         | any                                      | -       | It generates scoped CSS variables using design tokens for the component. |
| pt         | PassThrough<ChipPassThroughOptions<any>> | -       | Used to pass attributes to DOM elements inside the component.            |
| ptOptions  | any                                      | -       | Used to configure passthrough(pt) options of the component.              |
| unstyled   | boolean                                  | false   | When enabled, it removes component related styles in the core.           |

## Pass Through Options

| Name       | Type                         | Description                                              |
| ---------- | ---------------------------- | -------------------------------------------------------- |
| root       | ChipPassThroughOptionType<T> | Used to pass attributes to the root's DOM element.       |
| image      | ChipPassThroughOptionType<T> | Used to pass attributes to the image's DOM element.      |
| icon       | ChipPassThroughOptionType<T> | Used to pass attributes to the icon's DOM element.       |
| label      | ChipPassThroughOptionType<T> | Used to pass attributes to the label' DOM element.       |
| removeIcon | ChipPassThroughOptionType<T> | Used to pass attributes to the removeIcon's DOM element. |
| hooks      | any                          | Used to manage all lifecycle hooks.                      |

## Theming

### CSS Classes

| Class              | Description                           |
| ------------------ | ------------------------------------- |
| p-chip             | Class name of the root element        |
| p-chip-image       | Class name of the image element       |
| p-chip-icon        | Class name of the icon element        |
| p-chip-label       | Class name of the label element       |
| p-chip-remove-icon | Class name of the remove icon element |

### Design Tokens

| Token                              | CSS Variable                           | Description                      |
| ---------------------------------- | -------------------------------------- | -------------------------------- |
| chip.border.radius                 | --p-chip-border-radius                 | Border radius of root            |
| chip.padding.x                     | --p-chip-padding-x                     | Padding x of root                |
| chip.padding.y                     | --p-chip-padding-y                     | Padding y of root                |
| chip.gap                           | --p-chip-gap                           | Gap of root                      |
| chip.transition.duration           | --p-chip-transition-duration           | Transition duration of root      |
| chip.background                    | --p-chip-background                    | Background of root               |
| chip.color                         | --p-chip-color                         | Color of root                    |
| chip.image.width                   | --p-chip-image-width                   | Width of image                   |
| chip.image.height                  | --p-chip-image-height                  | Height of image                  |
| chip.icon.size                     | --p-chip-icon-size                     | Size of icon                     |
| chip.icon.color                    | --p-chip-icon-color                    | Color of icon                    |
| chip.remove.icon.size              | --p-chip-remove-icon-size              | Size of remove icon              |
| chip.remove.icon.focus.ring.width  | --p-chip-remove-icon-focus-ring-width  | Focus ring width of remove icon  |
| chip.remove.icon.focus.ring.style  | --p-chip-remove-icon-focus-ring-style  | Focus ring style of remove icon  |
| chip.remove.icon.focus.ring.color  | --p-chip-remove-icon-focus-ring-color  | Focus ring color of remove icon  |
| chip.remove.icon.focus.ring.offset | --p-chip-remove-icon-focus-ring-offset | Focus ring offset of remove icon |
| chip.remove.icon.focus.ring.shadow | --p-chip-remove-icon-focus-ring-shadow | Focus ring shadow of remove icon |
| chip.remove.icon.color             | --p-chip-remove-icon-color             | Color of remove icon             |
