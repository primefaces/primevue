# Vue Toast Component

Toast is used to display messages in an overlay.

## Import

```javascript
import Toast from 'primevue/toast';
```

## Accessibility

Screen Reader Toast component use alert role that implicitly defines aria-live as "assertive" and aria-atomic as "true". Close element is a button with an aria-label that refers to the aria.close property of the locale API by default, you may use closeButtonProps to customize the element and override the default aria-label . Close Button Keyboard Support Key Function enter Closes the message. space Closes the message.

## Basic

Ideal location of a Toast is the main application template so that it can be used by any component within the application. A single message is represented by the Message interface that defines properties such as severity, summary and detail.

```vue
<Toast />
<Button label="Show" @click="show()" />
```

## Headless

Headless mode is enabled by defining a container slot that lets you implement entire toast UI instead of the default elements.

## Multiple

Multiple messages are displayed by passing an array to the show method.

```vue
<Toast />
<Button label="Multiple" @click="showMultiple()" />
```

## Position

A message can be targeted to a certain Toast component by matching the group keys whereas location is customized with the position .

```vue
<Toast position="top-left" group="tl" />
<Toast position="bottom-left" group="bl" />
<Toast position="bottom-right" group="br" />

<Button label="Top Left" @click="showTopLeft" />
<Button label="Bottom Left" @click="showBottomLeft" />
<Button label="Bottom Right" @click="showBottomRight" />
```

## Severity

The severity option specifies the type of the message.

```vue
<Toast />
<Button label="Success" severity="success" @click="showSuccess" />
<Button label="Info" severity="info" @click="showInfo" />
<Button label="Warn" severity="warn" @click="showWarn" />
<Button label="Error" severity="danger" @click="showError" />
<Button label="Secondary" severity="secondary" @click="showSecondary" />
<Button label="Contrast" severity="contrast" @click="showContrast" />
```

## Sticky

A message disappears after the number of milliseconds defined in the life option. Omit the life option to make the message sticky.

```vue
<Toast />
<Button @click="showSticky" label="Sticky" />
<Button label="Clear" severity="secondary" @click="clear()" />
```

## Template

Custom content inside a message is defined with the message template.

## ToastServiceDoc

Toast component is controlled via the ToastService that needs to be installed as an application plugin.

## Toast

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | string | - | Unique identifier of a message group. |
| position | "center" \| "top-left" \| "top-center" \| "top-right" \| "bottom-left" \| "bottom-center" \| "bottom-right" | top-right | Position of the toast in viewport. |
| autoZIndex | boolean | true | Whether to automatically manage layering. |
| baseZIndex | number | 0 | Base zIndex value to use in layering. |
| breakpoints | ToastBreakpointsType | - | Object literal to define styles per screen size. |
| closeIcon | string | - | Icon to display in the toast close button. |
| infoIcon | string | - | Icon to display in the toast with info severity. |
| warnIcon | string | - | Icon to display in the toast with warn severity. |
| errorIcon | string | - | Icon to display in the toast with error severity. |
| successIcon | string | - | Icon to display in the toast with success severity. |
| closeButtonProps | ButtonHTMLAttributes | - | Used to pass all properties of the HTMLButtonElement to the close button. |
| message | ToastMessageOptions | - | Used to access message options. |
| onMouseEnter | Function | - | Used to specify a callback function to be run when the mouseenter event is fired on the message component. |
| onMouseLeave | Function | - | Used to specify a callback function to be run when the mouseleave event is fired on the message component. |
| onClick | Function | - | Used to specify a callback function to be run when the click event is fired on the message component. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<ToastPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

## Pass Through Options

| Name | Type | Description |
|------|------|-------------|
| root | ToastPassThroughOptionType | Used to pass attributes to the root's DOM element. |
| message | ToastPassThroughOptionType | Used to pass attributes to the message's DOM element. |
| messageContent | ToastPassThroughOptionType | Used to pass attributes to the message content's DOM element. |
| messageIcon | ToastPassThroughOptionType | Used to pass attributes to the message icon's DOM element. |
| messageText | ToastPassThroughOptionType | Used to pass attributes to the message text's DOM element. |
| summary | ToastPassThroughOptionType | Used to pass attributes to the summary's DOM element. |
| detail | ToastPassThroughOptionType | Used to pass attributes to the detail's DOM element. |
| buttonContainer | ToastPassThroughOptionType | Used to pass attributes to the button container's DOM element. |
| closeButton | ToastPassThroughOptionType | Used to pass attributes to the button's DOM element. |
| closeIcon | ToastPassThroughOptionType | Used to pass attributes to the button icon's DOM element. |
| hooks | any | Used to manage all lifecycle hooks. |
| transition | ToastPassThroughTransitionType | Used to control Vue Transition API. |

## Theming

### CSS Classes

| Class | Description |
|-------|-------------|
| p-toast | Class name of the root element |
| p-toast-message | Class name of the message element |
| p-toast-message-content | Class name of the message content element |
| p-toast-message-icon | Class name of the message icon element |
| p-toast-message-text | Class name of the message text element |
| p-toast-summary | Class name of the summary element |
| p-toast-detail | Class name of the detail element |
| p-toast-close-button | Class name of the close button element |
| p-toast-close-icon | Class name of the close icon element |

