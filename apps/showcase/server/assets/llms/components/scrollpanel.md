# Vue ScrollPanel Component

ScrollPanel is a cross browser, lightweight and skinnable alternative to native browser scrollbar.

## Import

```javascript
import ScrollPanel from 'primevue/scrollpanel';
```

## Accessibility

Screen Reader Scrollbars of the ScrollPanel has a scrollbar role along with the aria-controls attribute that refers to the id of the scrollable content container and the aria-orientation to indicate the orientation of scrolling. Header Keyboard Support Key Function tab Moves focus through the bar. down arrow Scrolls content down when vertical scrolling is available. up arrow Scrolls content up when vertical scrolling is available. left Scrolls content left when horizontal scrolling is available. right Scrolls content right when horizontal scrolling is available.

## Basic

ScrollPanel is defined using dimensions for the scrollable viewport.

```vue
<ScrollPanel style="width: 100%; height: 200px">
    <p>
        Lorem ipsum dolor ...
    </p>
</ScrollPanel>
```

## Custom

Scrollbar visuals can be styled for a unified look across different platforms.

```vue
<ScrollPanel
    style="width: 100%; height: 200px"
    :dt="{
        bar: {
            background: '{primary.color}'
        }
    }"
>
    ...
</ScrollPanel>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <ScrollPanel
            style="width: 100%; height: 200px"
            :dt="{
                bar: {
                    background: '{primary.color}'
                }
            }"
        >
            ...
        </ScrollPanel>
    </div>
</template>

<script setup>
<\/script>
```

</details>

## Scroll Panel

### Props

| Name      | Type                                       | Default | Description                                                              |
| --------- | ------------------------------------------ | ------- | ------------------------------------------------------------------------ |
| step      | number                                     | 5       | Step factor to scroll the content while pressing the arrow keys.         |
| dt        | any                                        | -       | It generates scoped CSS variables using design tokens for the component. |
| pt        | PassThrough<ScrollPanelPassThroughOptions> | -       | Used to pass attributes to DOM elements inside the component.            |
| ptOptions | any                                        | -       | Used to configure passthrough(pt) options of the component.              |
| unstyled  | boolean                                    | false   | When enabled, it removes component related styles in the core.           |

### Slots

| Name    | Parameters | Description |
| ------- | ---------- | ----------- |
| default | Function   |             |

## Pass Through Options

| Name             | Type                             | Description                                                     |
| ---------------- | -------------------------------- | --------------------------------------------------------------- |
| root             | ScrollPanelPassThroughOptionType | Used to pass attributes to the root's DOM element.              |
| contentContainer | ScrollPanelPassThroughOptionType | Used to pass attributes to the content container's DOM element. |
| content          | ScrollPanelPassThroughOptionType | Used to pass attributes to the content's DOM element.           |
| barX             | ScrollPanelPassThroughOptionType | Used to pass attributes to the horizontal panel's DOM element.  |
| barY             | ScrollPanelPassThroughOptionType | Used to pass attributes to the vertical panel's DOM element.    |
| hooks            | any                              | Used to manage all lifecycle hooks.                             |

## Theming

### CSS Classes

| Class                           | Description                                 |
| ------------------------------- | ------------------------------------------- |
| p-scrollpanel                   | Class name of the root element              |
| p-scrollpanel-content-container | Class name of the content container element |
| p-scrollpanel-content           | Class name of the content element           |
| p-scrollpanel-bar-x             | Class name of the bar x element             |
| p-scrollpanel-bar-y             | Class name of the bar y element             |

### Design Tokens

| Token                             | CSS Variable                          | Description                 |
| --------------------------------- | ------------------------------------- | --------------------------- |
| scrollpanel.transition.duration   | --p-scrollpanel-transition-duration   | Transition duration of root |
| scrollpanel.bar.size              | --p-scrollpanel-bar-size              | Size of bar                 |
| scrollpanel.bar.border.radius     | --p-scrollpanel-bar-border-radius     | Border radius of bar        |
| scrollpanel.bar.focus.ring.width  | --p-scrollpanel-bar-focus-ring-width  | Focus ring width of bar     |
| scrollpanel.bar.focus.ring.style  | --p-scrollpanel-bar-focus-ring-style  | Focus ring style of bar     |
| scrollpanel.bar.focus.ring.color  | --p-scrollpanel-bar-focus-ring-color  | Focus ring color of bar     |
| scrollpanel.bar.focus.ring.offset | --p-scrollpanel-bar-focus-ring-offset | Focus ring offset of bar    |
| scrollpanel.bar.focus.ring.shadow | --p-scrollpanel-bar-focus-ring-shadow | Focus ring shadow of bar    |
| scrollpanel.bar.background        | --p-scrollpanel-bar-background        | Background of bar           |
