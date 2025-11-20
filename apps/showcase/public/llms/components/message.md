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

## Forms

Validation errors in a form are displayed with the error severity.

```vue
<Message v-if="!username || !email" severity="error" icon="pi pi-times-circle" class="mb-2">Validation error</Message>
<Message v-if="username && email" severity="success" icon="pi pi-times-circle" class="mb-2">Form is valid</Message>
<div class="flex flex-col gap-1">
    <InputText v-model="username" placeholder="Username" aria-label="username" :invalid="!username" />
    <Message v-if="!username" severity="error" variant="simple" size="small">Username is required</Message>
</div>
<div class="flex flex-col gap-1">
    <InputText v-model="email" placeholder="Email" aria-label="email" :invalid="!email" />
    <Message v-if="!email" severity="error" variant="simple" size="small">Email is not valid</Message>
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
            <Message v-if="!username" severity="error" variant="simple" size="small">Username is required</Message>
        </div>
        <div class="flex flex-col gap-1">
            <InputText v-model="email" placeholder="Email" aria-label="email" :invalid="!email" />
            <Message v-if="!email" severity="error" variant="simple" size="small">Email is not valid</Message>
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

| Name | Type | Default | Description |
|------|------|---------|-------------|
| severity | HintedString<"error" \| "secondary" \| "info" \| "success" \| "warn" \| "contrast"> | info | Severity level of the message. |
| closable | boolean | false | Whether the message can be closed manually using the close icon. |
| sticky | boolean | true |  |
| life | number | null | Delay in milliseconds to close the message automatically. |
| icon | string | - | Display a custom icon for the message. |
| closeIcon | string | - | Icon to display in the message close button. |
| closeButtonProps | ButtonHTMLAttributes | - | Used to pass all properties of the HTMLButtonElement to the close button. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<MessagePassThroughOptions<any>> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |
| size | HintedString<"small" \| "large"> | - | Defines the size of the component. |
| variant | HintedString<"outlined" \| "simple"> | undefined | Specifies the variant of the component. |

## Pass Through Options

| Name | Type | Description |
|------|------|-------------|
| root | MessagePassThroughOptionType<T> | Used to pass attributes to the root's DOM element. |
| content | MessagePassThroughOptionType<T> | Used to pass attributes to the content's DOM element. |
| icon | MessagePassThroughOptionType<T> | Used to pass attributes to the icon's DOM element. |
| text | MessagePassThroughOptionType<T> | Used to pass attributes to the text's DOM element. |
| closeButton | MessagePassThroughOptionType<T> | Used to pass attributes to the button's DOM element. |
| closeIcon | MessagePassThroughOptionType<T> | Used to pass attributes to the button icon's DOM element. |
| hooks | any | Used to manage all lifecycle hooks. |
| transition | MessagePassThroughTransitionType<T> | Used to control Vue Transition API. |

## Theming

### CSS Classes

| Class | Description |
|-------|-------------|
| p-message | Class name of the root element |
| p-message-content | Class name of the content element |
| p-message-icon | Class name of the icon element |
| p-message-text | Class name of the text element |
| p-message-close-button | Class name of the close button element |
| p-message-close-icon | Class name of the close icon element |

