# Vue ScrollTop Component

ScrollTop gets displayed after a certain scroll position and used to navigates to the top of the page quickly.

## Import

```javascript
import ScrollTop from 'primevue/scrolltop';
```

## Accessibility

Screen Reader ScrollTop uses a button element with an aria-label that refers to the aria.scrollTop property of the locale API by default, you may use your own aria roles and attributes as any valid attribute is passed to the button element implicitly. Keyboard Support Key Function enter Scrolls to top. space Scrolls to top.

## Basic

ScrollTop listens window scroll by default.

```vue
<ScrollTop />
```

## Element

Setting the target property to parent binds ScrollTop to its parent element that has scrolling content.

```vue
<ScrollPanel style="width: 250px; height: 200px">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing
        elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris. Semper
        feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet
        dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan in nisl nisi.
        Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec.
    </p>
    <ScrollTop target="parent" :threshold="100" icon="pi pi-arrow-up" :buttonProps="{ severity: 'contrast', raised: true, rounded: true }" />
</ScrollPanel>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <ScrollPanel style="width: 250px; height: 200px">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing
                elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris. Semper
                feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet
                dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan in nisl nisi.
                Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec.
            </p>
            <ScrollTop target="parent" :threshold="100" icon="pi pi-arrow-up" :buttonProps="{ severity: 'contrast', raised: true, rounded: true }" />
        </ScrollPanel>
    </div>
</template>
```

</details>

## Scroll Top

### Props

| Name        | Type                                     | Default | Description                                                                                         |
| ----------- | ---------------------------------------- | ------- | --------------------------------------------------------------------------------------------------- |
| target      | HintedString<"window" \| "parent">       | window  | Target of the ScrollTop.                                                                            |
| threshold   | number                                   | 400     | Defines the threshold value of the vertical scroll position of the target to toggle the visibility. |
| icon        | string                                   | -       | Icon to display.                                                                                    |
| behavior    | string                                   | smooth  | Defines the scrolling behaviour, 'smooth' adds an animation and 'auto' scrolls with a jump.         |
| buttonProps | object                                   | -       | Used to pass all properties of the ButtonProps to the Button component.                             |
| dt          | any                                      | -       | It generates scoped CSS variables using design tokens for the component.                            |
| pt          | PassThrough<ScrollTopPassThroughOptions> | -       | Used to pass attributes to DOM elements inside the component.                                       |
| ptOptions   | any                                      | -       | Used to configure passthrough(pt) options of the component.                                         |
| unstyled    | boolean                                  | false   | When enabled, it removes component related styles in the core.                                      |

## Pass Through Options

| Name       | Type                               | Description                                        |
| ---------- | ---------------------------------- | -------------------------------------------------- |
| root       | any                                | Used to pass attributes to the root's DOM element. |
| hooks      | any                                | Used to manage all lifecycle hooks.                |
| transition | ScrollTopPassThroughTransitionType | Used to control Vue Transition API.                |

## Theming

### CSS Classes

| Class            | Description                    |
| ---------------- | ------------------------------ |
| p-scrolltop      | Class name of the root element |
| p-scrolltop-icon | Class name of the icon element |
