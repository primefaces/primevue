# Vue Image Component

Displays a single image with preview and tranformation options.

## Import

```javascript
import Image from 'primevue/image';
```

## Accessibility

Screen Reader The preview button is a native button element with an aria-label that refers to the aria.zoomImage property of the locale API by default, with previewButtonProps you may use your own aria roles and attributes as any valid attribute is passed to the button element implicitly. When preview is active, dialog role with aria-modal is applied to the overlay image container. Button controls use aria.rotateRight , aria.rotateLeft , aria.zoomIn , aria.zoomOut and aria.close from the locale API as aria-label . ButtonBar Keyboard Support When preview is activated, close button receives the initial focus. Key Function tab Moves focus through button bar. enter Activates the button. space Activates the button. esc Closes the image preview.

## Basic

Image is used similar to the standard img element.

```vue
<Image src="/image.jpg" alt="Image" width="250" />
```

## Preview

Enabling preview mode displays a modal layer when the image is clicked to provide transformation options such as rotating and zooming.

```vue
<Image src="/image.jpg" alt="Image" width="250" preview />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="250" preview />
    </div>
</template>
```

</details>

## Template

An eye icon is displayed by default when the image is hovered in preview mode, use the previewicon slot for custom content. In addition, the image and preview slots are available to define the thumbnail and detailed image respectively.

```vue
<Image alt="Image" preview>
    <template #previewicon>
        <i class="pi pi-search"></i>
    </template>
    <template #image>
        <img src="/thumbnail.jpg" alt="image" />
    </template>
    <template #preview="slotProps">
        <img src="/image.jpg" alt="preview" :style="slotProps.style" @click="slotProps.onClick" />
    </template>
</Image>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Image alt="Image" preview>
            <template #previewicon>
                <i class="pi pi-search"></i>
            </template>
            <template #image>
                <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria11.jpg" alt="image" width="250" />
            </template>
            <template #preview="slotProps">
                <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria11.jpg" alt="preview" :style="slotProps.style" @click="slotProps.onClick" />
            </template>
        </Image>
    </div>
</template>
```

</details>

## Image

### Props

| Name            | Type                                 | Default | Description                                                              |
| --------------- | ------------------------------------ | ------- | ------------------------------------------------------------------------ |
| src             | string                               | -       | Image url.                                                               |
| preview         | boolean                              | false   | Controls the preview functionality.                                      |
| imageStyle      | any                                  | -       | Inline style of the image element.                                       |
| imageClass      | any                                  | -       | Style class of the image element.                                        |
| indicatorIcon   | string                               | -       | Custom indicator icon.                                                   |
| previewIcon     | string                               | -       | Custom indicator icon.                                                   |
| zoomInDisabled  | boolean                              | false   | Disable the zoom-in button                                               |
| zoomOutDisabled | boolean                              | false   | Disable the zoom-out button                                              |
| dt              | any                                  | -       | It generates scoped CSS variables using design tokens for the component. |
| pt              | PassThrough<ImagePassThroughOptions> | -       | Used to pass attributes to DOM elements inside the component.            |
| ptOptions       | any                                  | -       | Used to configure passthrough(pt) options of the component.              |
| unstyled        | boolean                              | false   | When enabled, it removes component related styles in the core.           |

## Pass Through Options

| Name              | Type                           | Description                                                       |
| ----------------- | ------------------------------ | ----------------------------------------------------------------- |
| root              | ImagePassThroughOptionType     | Used to pass attributes to the root's DOM element.                |
| image             | ImagePassThroughOptionType     | Used to pass attributes to the image's DOM element.               |
| previewMask       | ImagePassThroughOptionType     | Used to pass attributes to the preview mask's DOM element.        |
| previewIcon       | ImagePassThroughOptionType     | Used to pass attributes to the preview icon's DOM element.        |
| mask              | ImagePassThroughOptionType     | Used to pass attributes to the mask's DOM element.                |
| toolbar           | ImagePassThroughOptionType     | Used to pass attributes to the toolbar's DOM element.             |
| rotateRightButton | ImagePassThroughOptionType     | Used to pass attributes to the rotate right button's DOM element. |
| rotateRightIcon   | ImagePassThroughOptionType     | Used to pass attributes to the rotate right icon's DOM element.   |
| rotateLeftButton  | ImagePassThroughOptionType     | Used to pass attributes to the rotate left button's DOM element.  |
| rotateLeftIcon    | ImagePassThroughOptionType     | Used to pass attributes to the rotate left icon's DOM element.    |
| zoomOutButton     | ImagePassThroughOptionType     | Used to pass attributes to the zoom out button's DOM element.     |
| zoomOutIcon       | ImagePassThroughOptionType     | Used to pass attributes to the zoom out icon's DOM element.       |
| zoomInButton      | ImagePassThroughOptionType     | Used to pass attributes to the zoom in button's DOM element.      |
| zoomInIcon        | ImagePassThroughOptionType     | Used to pass attributes to the zoom in icon's DOM element.        |
| closeButton       | ImagePassThroughOptionType     | Used to pass attributes to the close button's DOM element.        |
| closeIcon         | ImagePassThroughOptionType     | Used to pass attributes to the close icon's DOM element.          |
| originalContainer | ImagePassThroughOptionType     | Used to pass attributes to the original container's DOM element.  |
| original          | ImagePassThroughOptionType     | Used to pass attributes to the original's DOM element.            |
| hooks             | any                            | Used to manage all lifecycle hooks.                               |
| transition        | ImagePassThroughTransitionType | Used to control Vue Transition API.                               |

## Theming

### CSS Classes

| Class                       | Description                                   |
| --------------------------- | --------------------------------------------- |
| p-image                     | Class name of the root element                |
| p-image-preview-mask        | Class name of the preview mask element        |
| p-image-preview-icon        | Class name of the preview icon element        |
| p-image-mask                | Class name of the mask element                |
| p-image-toolbar             | Class name of the toolbar element             |
| p-image-rotate-right-button | Class name of the rotate right button element |
| p-image-rotate-left-button  | Class name of the rotate left button element  |
| p-image-zoom-out-button     | Class name of the zoom out button element     |
| p-image-zoom-in-button      | Class name of the zoom in button element      |
| p-image-close-button        | Class name of the close button element        |
| p-image-original            | Class name of the original element            |

### Design Tokens

| Token                          | CSS Variable                       | Description                 |
| ------------------------------ | ---------------------------------- | --------------------------- |
| image.transition.duration      | --p-image-transition-duration      | Transition duration of root |
| image.preview.icon.size        | --p-image-preview-icon-size        | Icon size of preview        |
| image.preview.mask.background  | --p-image-preview-mask-background  | Mask background of preview  |
| image.preview.mask.color       | --p-image-preview-mask-color       | Mask color of preview       |
| image.toolbar.position.left    | --p-image-toolbar-position-left    | Position left of toolbar    |
| image.toolbar.position.right   | --p-image-toolbar-position-right   | Position right of toolbar   |
| image.toolbar.position.top     | --p-image-toolbar-position-top     | Position top of toolbar     |
| image.toolbar.position.bottom  | --p-image-toolbar-position-bottom  | Position bottom of toolbar  |
| image.toolbar.blur             | --p-image-toolbar-blur             | Blur of toolbar             |
| image.toolbar.background       | --p-image-toolbar-background       | Background of toolbar       |
| image.toolbar.border.color     | --p-image-toolbar-border-color     | Border color of toolbar     |
| image.toolbar.border.width     | --p-image-toolbar-border-width     | Border width of toolbar     |
| image.toolbar.border.radius    | --p-image-toolbar-border-radius    | Border radius of toolbar    |
| image.toolbar.padding          | --p-image-toolbar-padding          | Padding of toolbar          |
| image.toolbar.gap              | --p-image-toolbar-gap              | Gap of toolbar              |
| image.action.hover.background  | --p-image-action-hover-background  | Hover background of action  |
| image.action.color             | --p-image-action-color             | Color of action             |
| image.action.hover.color       | --p-image-action-hover-color       | Hover color of action       |
| image.action.size              | --p-image-action-size              | Size of action              |
| image.action.icon.size         | --p-image-action-icon-size         | Icon size of action         |
| image.action.border.radius     | --p-image-action-border-radius     | Border radius of action     |
| image.action.focus.ring.width  | --p-image-action-focus-ring-width  | Focus ring width of action  |
| image.action.focus.ring.style  | --p-image-action-focus-ring-style  | Focus ring style of action  |
| image.action.focus.ring.color  | --p-image-action-focus-ring-color  | Focus ring color of action  |
| image.action.focus.ring.offset | --p-image-action-focus-ring-offset | Focus ring offset of action |
| image.action.focus.ring.shadow | --p-image-action-focus-ring-shadow | Focus ring shadow of action |
