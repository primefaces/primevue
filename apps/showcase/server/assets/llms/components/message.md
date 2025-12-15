# Vue Message Component

Message component is used to display inline messages.

## Import

```javascript
import Message from 'primevue/message';
```

## Accessibility

Screen Reader Message component uses alert role that implicitly defines aria-live as "assertive" and aria-atomic as "true". Since any attribute is passed to the root element, attributes like aria-labelledby and aria-label can optionally be used as well. Close element is a button with an aria-label that refers to the aria.close property of the locale API by default, you may use closeButtonProps to customize the element and override the default aria-label . Close Button Keyboard Support Key Function enter Closes the message. space Closes the message.

## Basic

Message component requires a content to display.

```vue
<Message>Message Content</Message>
```

## Closable

Enable closable option to display an icon to remove a message.

```vue
<Message closable>Closable Message</Message>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Message closable>Closable Message</Message>
    </div>
</template>

<script setup>
<\/script>
```

</details>

## Dynamic

Multiple messages can be displayed using the standard v-for directive.

```vue
<Button label="Show" @click="addMessages()" />
<Button label="Clear" severity="secondary" class="ml-2" @click="clearMessages()" />
<transition-group name="p-message" tag="div" class="flex flex-col">
    <Message v-for="msg of messages" :key="msg.id" :severity="msg.severity" class="mt-4">{{ msg.content }}</Message>
</transition-group>
```

## Forms

Validation errors in a form are displayed with the error severity.

```vue
<Message v-if="!username || !email" severity="error" icon="pi pi-times-circle" class="mb-2">Validation error</Message>
<Message v-if="username && email" severity="success" icon="pi pi-times-circle" class="mb-2">Form is valid</Message>
<div class="flex flex-col gap-1">
    <InputText v-model="username" placeholder="Username" aria-label="username" :invalid="!username" />
    <Message v-show="!username" severity="error" variant="simple" size="small">Username is required</Message>
</div>
<div class="flex flex-col gap-1">
    <InputText v-model="email" placeholder="Email" aria-label="email" :invalid="!email" />
    <Message v-show="!email" severity="error" variant="simple" size="small">Email is not valid</Message>
</div>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="flex flex-col gap-4">
        <Message v-if="!username || !email" severity="error" icon="pi pi-times-circle" class="mb-2">Validation error</Message>
        <Message v-if="username && email" severity="success" icon="pi pi-times-circle" class="mb-2">Form is valid</Message>
        <div class="flex flex-col gap-1">
            <InputText v-model="username" placeholder="Username" aria-label="username" :invalid="!username" />
            <Message v-show="!username" severity="error" variant="simple" size="small">Username is required</Message>
        </div>
        <div class="flex flex-col gap-1">
            <InputText v-model="email" placeholder="Email" aria-label="email" :invalid="!email" />
            <Message v-show="!email" severity="error" variant="simple" size="small">Email is not valid</Message>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const username = ref(null);
const email = ref(null);
<\/script>
```

</details>

## Icon

Icon property and the icon slots are available to customize the icon of the message.

```vue
<Message severity="info" icon="pi pi-send">Info Message</Message>
<Message severity="success">
    <template #icon>
        <Avatar image="/images/avatar/amyelsner.png" shape="circle" />
    </template>
    <span class="ml-2">How may I help you?</span>
</Message>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center gap-4">
        <Message severity="info" icon="pi pi-send">Info Message</Message>
        <Message severity="success">
            <template #icon>
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
            </template>
            <span class="ml-2">How may I help you?</span>
        </Message>
    </div>
</template>

<script setup>
<\/script>
```

</details>

## Life

Messages can disappear automatically by defined the life in milliseconds.

```vue
<Button label="Show" @click="showMessage" :disabled="visible" class="mb-4" />
<Message v-if="visible" severity="success" :life="3000">Auto Disappear Message</Message>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-col items-center justify-center">
        <Button label="Show" @click="showMessage" :disabled="visible" class="mb-4" />
        <Message v-if="visible" severity="success" :life="3000">Auto Disappear Message</Message>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let visible = ref(false);

const showMessage = () => {
    visible.value = true;

    setTimeout(() => {
        visible.value = false;
    }, 3500);
}
<\/script>
```

</details>

## Outlined

Configure the variant value as outlined for messages with borders and no background.

```vue
<Message severity="success" variant="outlined">Success Message</Message>
<Message severity="info" variant="outlined">Info Message</Message>
<Message severity="warn" variant="outlined">Warn Message</Message>
<Message severity="error" variant="outlined">Error Message</Message>
<Message severity="secondary" variant="outlined">Secondary Message</Message>
<Message severity="contrast" variant="outlined">Contrast Message</Message>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap gap-4 justify-center">
        <Message severity="success" variant="outlined">Success Message</Message>
        <Message severity="info" variant="outlined">Info Message</Message>
        <Message severity="warn" variant="outlined">Warn Message</Message>
        <Message severity="error" variant="outlined">Error Message</Message>
        <Message severity="secondary" variant="outlined">Secondary Message</Message>
        <Message severity="contrast" variant="outlined">Contrast Message</Message>
    </div>
</template>

<script setup>
<\/script>
```

</details>

## Severity

The severity option specifies the type of the message.

```vue
<Message severity="success">Success Message</Message>
<Message severity="info">Info Message</Message>
<Message severity="warn">Warn Message</Message>
<Message severity="error">Error Message</Message>
<Message severity="secondary">Secondary Message</Message>
<Message severity="contrast">Contrast Message</Message>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap gap-4 justify-center">
        <Message severity="success">Success Message</Message>
        <Message severity="info">Info Message</Message>
        <Message severity="warn">Warn Message</Message>
        <Message severity="error">Error Message</Message>
        <Message severity="secondary">Secondary Message</Message>
        <Message severity="contrast">Contrast Message</Message>
    </div>
</template>

<script setup>
<\/script>
```

</details>

## Simple

Configure the variant value as simple for messages without borders, backgrounds and paddings.

```vue
<Message severity="success" variant="simple">Success Message</Message>
<Message severity="info" variant="simple">Info Message</Message>
<Message severity="warn" variant="simple">Warn Message</Message>
<Message severity="error" variant="simple">Error Message</Message>
<Message severity="secondary" variant="simple">Secondary Message</Message>
<Message severity="contrast" variant="simple">Contrast Message</Message>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap gap-8 justify-center">
        <Message severity="success" variant="simple">Success Message</Message>
        <Message severity="info" variant="simple">Info Message</Message>
        <Message severity="warn" variant="simple">Warn Message</Message>
        <Message severity="error" variant="simple">Error Message</Message>
        <Message severity="secondary" variant="simple">Secondary Message</Message>
        <Message severity="contrast" variant="simple">Contrast Message</Message>
    </div>
</template>

<script setup>
<\/script>
```

</details>

## Sizes

Message provides small and large sizes as alternatives to the base.

```vue
<Message size="small" icon="pi pi-send">Small Message</Message>
<Message icon="pi pi-user">Normal Message</Message>
<Message size="large" icon="pi pi-check">Large Message</Message>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-col items-center gap-4">
        <Message size="small" icon="pi pi-send">Small Message</Message>
        <Message icon="pi pi-user">Normal Message</Message>
        <Message size="large" icon="pi pi-check">Large Message</Message>
    </div>
</template>

<script setup>
<\/script>
```

</details>

## Message

### Props

| Name             | Type                                                                                | Default   | Description                                                               |
| ---------------- | ----------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------- |
| severity         | HintedString<"error" \| "secondary" \| "info" \| "success" \| "warn" \| "contrast"> | info      | Severity level of the message.                                            |
| closable         | boolean                                                                             | false     | Whether the message can be closed manually using the close icon.          |
| sticky           | boolean                                                                             | true      |                                                                           |
| life             | number                                                                              | null      | Delay in milliseconds to close the message automatically.                 |
| icon             | string                                                                              | -         | Display a custom icon for the message.                                    |
| closeIcon        | string                                                                              | -         | Icon to display in the message close button.                              |
| closeButtonProps | ButtonHTMLAttributes                                                                | -         | Used to pass all properties of the HTMLButtonElement to the close button. |
| dt               | any                                                                                 | -         | It generates scoped CSS variables using design tokens for the component.  |
| pt               | PassThrough<MessagePassThroughOptions<any>>                                         | -         | Used to pass attributes to DOM elements inside the component.             |
| ptOptions        | any                                                                                 | -         | Used to configure passthrough(pt) options of the component.               |
| unstyled         | boolean                                                                             | false     | When enabled, it removes component related styles in the core.            |
| size             | HintedString<"small" \| "large">                                                    | -         | Defines the size of the component.                                        |
| variant          | HintedString<"outlined" \| "simple">                                                | undefined | Specifies the variant of the component.                                   |

## Pass Through Options

| Name           | Type                                | Description                                                 |
| -------------- | ----------------------------------- | ----------------------------------------------------------- |
| root           | MessagePassThroughOptionType<T>     | Used to pass attributes to the root's DOM element.          |
| contentWrapper | MessagePassThroughOptionType<T>     | Used to pass attributes to the content wrapper DOM element. |
| content        | MessagePassThroughOptionType<T>     | Used to pass attributes to the content's DOM element.       |
| icon           | MessagePassThroughOptionType<T>     | Used to pass attributes to the icon's DOM element.          |
| text           | MessagePassThroughOptionType<T>     | Used to pass attributes to the text's DOM element.          |
| closeButton    | MessagePassThroughOptionType<T>     | Used to pass attributes to the button's DOM element.        |
| closeIcon      | MessagePassThroughOptionType<T>     | Used to pass attributes to the button icon's DOM element.   |
| hooks          | any                                 | Used to manage all lifecycle hooks.                         |
| transition     | MessagePassThroughTransitionType<T> | Used to control Vue Transition API.                         |

## Theming

### CSS Classes

| Class                  | Description                            |
| ---------------------- | -------------------------------------- |
| p-message              | Class name of the root element         |
| p-message-content      | Class name of the content element      |
| p-message-icon         | Class name of the icon element         |
| p-message-text         | Class name of the text element         |
| p-message-close-button | Class name of the close button element |
| p-message-close-icon   | Class name of the close icon element   |

### Design Tokens

| Token                                            | CSS Variable                                         | Description                                 |
| ------------------------------------------------ | ---------------------------------------------------- | ------------------------------------------- |
| message.border.radius                            | --p-message-border-radius                            | Border radius of root                       |
| message.border.width                             | --p-message-border-width                             | Border width of root                        |
| message.transition.duration                      | --p-message-transition-duration                      | Transition duration of root                 |
| message.content.padding                          | --p-message-content-padding                          | Padding of content                          |
| message.content.gap                              | --p-message-content-gap                              | Gap of content                              |
| message.content.sm.padding                       | --p-message-content-sm-padding                       | Sm padding of content                       |
| message.content.lg.padding                       | --p-message-content-lg-padding                       | Lg padding of content                       |
| message.text.font.size                           | --p-message-text-font-size                           | Font size of text                           |
| message.text.font.weight                         | --p-message-text-font-weight                         | Font weight of text                         |
| message.text.sm.font.size                        | --p-message-text-sm-font-size                        | Sm font size of text                        |
| message.text.lg.font.size                        | --p-message-text-lg-font-size                        | Lg font size of text                        |
| message.icon.size                                | --p-message-icon-size                                | Size of icon                                |
| message.icon.sm.size                             | --p-message-icon-sm-size                             | Sm size of icon                             |
| message.icon.lg.size                             | --p-message-icon-lg-size                             | Lg size of icon                             |
| message.close.button.width                       | --p-message-close-button-width                       | Width of close button                       |
| message.close.button.height                      | --p-message-close-button-height                      | Height of close button                      |
| message.close.button.border.radius               | --p-message-close-button-border-radius               | Border radius of close button               |
| message.close.button.focus.ring.width            | --p-message-close-button-focus-ring-width            | Focus ring width of close button            |
| message.close.button.focus.ring.style            | --p-message-close-button-focus-ring-style            | Focus ring style of close button            |
| message.close.button.focus.ring.offset           | --p-message-close-button-focus-ring-offset           | Focus ring offset of close button           |
| message.close.icon.size                          | --p-message-close-icon-size                          | Size of close icon                          |
| message.close.icon.sm.size                       | --p-message-close-icon-sm-size                       | Sm size of close icon                       |
| message.close.icon.lg.size                       | --p-message-close-icon-lg-size                       | Lg size of close icon                       |
| message.outlined.border.width                    | --p-message-outlined-border-width                    | Root border width of outlined               |
| message.simple.content.padding                   | --p-message-simple-content-padding                   | Content padding of simple                   |
| message.info.background                          | --p-message-info-background                          | Background of info                          |
| message.info.border.color                        | --p-message-info-border-color                        | Border color of info                        |
| message.info.color                               | --p-message-info-color                               | Color of info                               |
| message.info.shadow                              | --p-message-info-shadow                              | Shadow of info                              |
| message.info.close.button.hover.background       | --p-message-info-close-button-hover-background       | Close button hover background of info       |
| message.info.close.button.focus.ring.color       | --p-message-info-close-button-focus-ring-color       | Close button focus ring color of info       |
| message.info.close.button.focus.ring.shadow      | --p-message-info-close-button-focus-ring-shadow      | Close button focus ring shadow of info      |
| message.info.outlined.color                      | --p-message-info-outlined-color                      | Outlined color of info                      |
| message.info.outlined.border.color               | --p-message-info-outlined-border-color               | Outlined border color of info               |
| message.info.simple.color                        | --p-message-info-simple-color                        | Simple color of info                        |
| message.success.background                       | --p-message-success-background                       | Background of success                       |
| message.success.border.color                     | --p-message-success-border-color                     | Border color of success                     |
| message.success.color                            | --p-message-success-color                            | Color of success                            |
| message.success.shadow                           | --p-message-success-shadow                           | Shadow of success                           |
| message.success.close.button.hover.background    | --p-message-success-close-button-hover-background    | Close button hover background of success    |
| message.success.close.button.focus.ring.color    | --p-message-success-close-button-focus-ring-color    | Close button focus ring color of success    |
| message.success.close.button.focus.ring.shadow   | --p-message-success-close-button-focus-ring-shadow   | Close button focus ring shadow of success   |
| message.success.outlined.color                   | --p-message-success-outlined-color                   | Outlined color of success                   |
| message.success.outlined.border.color            | --p-message-success-outlined-border-color            | Outlined border color of success            |
| message.success.simple.color                     | --p-message-success-simple-color                     | Simple color of success                     |
| message.warn.background                          | --p-message-warn-background                          | Background of warn                          |
| message.warn.border.color                        | --p-message-warn-border-color                        | Border color of warn                        |
| message.warn.color                               | --p-message-warn-color                               | Color of warn                               |
| message.warn.shadow                              | --p-message-warn-shadow                              | Shadow of warn                              |
| message.warn.close.button.hover.background       | --p-message-warn-close-button-hover-background       | Close button hover background of warn       |
| message.warn.close.button.focus.ring.color       | --p-message-warn-close-button-focus-ring-color       | Close button focus ring color of warn       |
| message.warn.close.button.focus.ring.shadow      | --p-message-warn-close-button-focus-ring-shadow      | Close button focus ring shadow of warn      |
| message.warn.outlined.color                      | --p-message-warn-outlined-color                      | Outlined color of warn                      |
| message.warn.outlined.border.color               | --p-message-warn-outlined-border-color               | Outlined border color of warn               |
| message.warn.simple.color                        | --p-message-warn-simple-color                        | Simple color of warn                        |
| message.error.background                         | --p-message-error-background                         | Background of error                         |
| message.error.border.color                       | --p-message-error-border-color                       | Border color of error                       |
| message.error.color                              | --p-message-error-color                              | Color of error                              |
| message.error.shadow                             | --p-message-error-shadow                             | Shadow of error                             |
| message.error.close.button.hover.background      | --p-message-error-close-button-hover-background      | Close button hover background of error      |
| message.error.close.button.focus.ring.color      | --p-message-error-close-button-focus-ring-color      | Close button focus ring color of error      |
| message.error.close.button.focus.ring.shadow     | --p-message-error-close-button-focus-ring-shadow     | Close button focus ring shadow of error     |
| message.error.outlined.color                     | --p-message-error-outlined-color                     | Outlined color of error                     |
| message.error.outlined.border.color              | --p-message-error-outlined-border-color              | Outlined border color of error              |
| message.error.simple.color                       | --p-message-error-simple-color                       | Simple color of error                       |
| message.secondary.background                     | --p-message-secondary-background                     | Background of secondary                     |
| message.secondary.border.color                   | --p-message-secondary-border-color                   | Border color of secondary                   |
| message.secondary.color                          | --p-message-secondary-color                          | Color of secondary                          |
| message.secondary.shadow                         | --p-message-secondary-shadow                         | Shadow of secondary                         |
| message.secondary.close.button.hover.background  | --p-message-secondary-close-button-hover-background  | Close button hover background of secondary  |
| message.secondary.close.button.focus.ring.color  | --p-message-secondary-close-button-focus-ring-color  | Close button focus ring color of secondary  |
| message.secondary.close.button.focus.ring.shadow | --p-message-secondary-close-button-focus-ring-shadow | Close button focus ring shadow of secondary |
| message.secondary.outlined.color                 | --p-message-secondary-outlined-color                 | Outlined color of secondary                 |
| message.secondary.outlined.border.color          | --p-message-secondary-outlined-border-color          | Outlined border color of secondary          |
| message.secondary.simple.color                   | --p-message-secondary-simple-color                   | Simple color of secondary                   |
| message.contrast.background                      | --p-message-contrast-background                      | Background of contrast                      |
| message.contrast.border.color                    | --p-message-contrast-border-color                    | Border color of contrast                    |
| message.contrast.color                           | --p-message-contrast-color                           | Color of contrast                           |
| message.contrast.shadow                          | --p-message-contrast-shadow                          | Shadow of contrast                          |
| message.contrast.close.button.hover.background   | --p-message-contrast-close-button-hover-background   | Close button hover background of contrast   |
| message.contrast.close.button.focus.ring.color   | --p-message-contrast-close-button-focus-ring-color   | Close button focus ring color of contrast   |
| message.contrast.close.button.focus.ring.shadow  | --p-message-contrast-close-button-focus-ring-shadow  | Close button focus ring shadow of contrast  |
| message.contrast.outlined.color                  | --p-message-contrast-outlined-color                  | Outlined color of contrast                  |
| message.contrast.outlined.border.color           | --p-message-contrast-outlined-border-color           | Outlined border color of contrast           |
| message.contrast.simple.color                    | --p-message-contrast-simple-color                    | Simple color of contrast                    |
