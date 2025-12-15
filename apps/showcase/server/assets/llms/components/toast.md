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

```vue
<Toast position="top-center" group="headless" @close="visible = false">
    <template #container="{ message, closeCallback }">
        <section class="flex flex-col p-4 gap-4 w-full bg-primary/70 rounded-xl">
            <div class="flex items-center gap-5">
                <i class="pi pi-cloud-upload text-white dark:text-black text-2xl"></i>
                <span class="font-bold text-base text-white dark:text-black">{{ message.summary }}</span>
            </div>
            <div class="flex flex-col gap-2">
                <ProgressBar :value="progress" :showValue="false" :style="{ height: '4px' }" pt:value:class="!bg-primary-50 dark:!bg-primary-900" class="!bg-primary/80"></ProgressBar>
                <label class="text-sm font-bold text-white dark:text-black">{{ progress }}% uploaded</label>
            </div>
            <div class="flex gap-4 mb-4 justify-end">
                <Button label="Another Upload?" size="small" @click="closeCallback"></Button>
                <Button label="Cancel" size="small" @click="closeCallback"></Button>
            </div>
        </section>
    </template>
</Toast>
<Button @click="show" label="View" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Toast position="top-center" group="headless" @close="visible = false">
            <template #container="{ message, closeCallback }">
                <section class="flex flex-col p-4 gap-4 w-full bg-primary/70 rounded-xl">
                    <div class="flex items-center gap-5">
                        <i class="pi pi-cloud-upload text-white dark:text-black text-2xl"></i>
                        <span class="font-bold text-base text-white dark:text-black">{{ message.summary }}</span>
                    </div>
                    <div class="flex flex-col gap-2">
                        <ProgressBar :value="progress" :showValue="false" :style="{ height: '4px' }" pt:value:class="!bg-primary-50 dark:!bg-primary-900" class="!bg-primary/80"></ProgressBar>
                        <label class="text-sm font-bold text-white dark:text-black">{{ progress }}% uploaded</label>
                    </div>
                    <div class="flex gap-4 mb-4 justify-end">
                        <Button label="Another Upload?" size="small" @click="closeCallback"></Button>
                        <Button label="Cancel" size="small" @click="closeCallback"></Button>
                    </div>
                </section>
            </template>
        </Toast>
        <Button @click="show" label="View" />
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
import { ref, onUnmounted } from 'vue';
const toast = useToast();
const visible = ref(false);
const progress = ref(0);
const interval = ref();

onUnmounted(() => {
    if (interval.value) {
        clearInterval(interval.value);
    }
})

const show = () => {
    if (!visible.value) {
        toast.add({ severity: 'custom', summary: 'Uploading your files.', group: 'headless', styleClass: 'backdrop-blur-lg rounded-2xl' });
        visible.value = true;
        progress.value = 0;

        if (interval.value) {
            clearInterval(interval.value);
        }

        interval.value = setInterval(() => {
            if (progress.value <= 100) {
                progress.value = progress.value + 20;
            }

            if (progress.value >= 100) {
                progress.value = 100;
                clearInterval(interval.value);
            }
        }, 1000);
    }
};
<\/script>
```

</details>

## Multiple

Multiple messages are displayed by passing an array to the show method.

```vue
<Toast />
<Button label="Multiple" @click="showMultiple()" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Toast />
        <Button label="Multiple" @click="showMultiple()" />
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const showMultiple = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Message Content', life: 3000 });
    toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3050 });
    toast.add({ severity: 'warn', summary: 'Warn', detail: 'Message Content', life: 3100 });
    toast.add({ severity: 'error', summary: 'Error', detail: 'Message Content', life: 3150 });
};
<\/script>
```

</details>

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

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Toast position="top-left" group="tl" />
        <Toast position="bottom-left" group="bl" />
        <Toast position="bottom-right" group="br" />

        <div class="flex flex-wrap gap-2">
            <Button label="Top Left" @click="showTopLeft" />
            <Button label="Bottom Left" @click="showBottomLeft" />
            <Button label="Bottom Right" @click="showBottomRight" />
        </div>
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const showTopLeft = () => {
    toast.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', group: 'tl', life: 3000 });
};

const showBottomLeft = () => {
    toast.add({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', group: 'bl', life: 3000 });
};

const showBottomRight = () => {
    toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', group: 'br', life: 3000 });
};
<\/script>
```

</details>

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

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Toast />
        <div class="flex flex-wrap gap-2">
            <Button label="Success" severity="success" @click="showSuccess" />
            <Button label="Info" severity="info" @click="showInfo" />
            <Button label="Warn" severity="warn" @click="showWarn" />
            <Button label="Error" severity="danger" @click="showError" />
            <Button label="Secondary" severity="secondary" @click="showSecondary" />
            <Button label="Contrast" severity="contrast" @click="showContrast" />
        </div>
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const showSuccess = () => {
    toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
};

const showInfo = () => {
    toast.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', life: 3000 });
};

const showWarn = () => {
    toast.add({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', life: 3000 });
};

const showError = () => {
    toast.add({ severity: 'error', summary: 'Error Message', detail: 'Message Content', life: 3000 });
};

const showSecondary = () => {
    toast.add({ severity: 'secondary', summary: 'Secondary Message', detail: 'Message Content', life: 3000 });
};

const showContrast = () => {
    toast.add({ severity: 'contrast', summary: 'Contrast Message', detail: 'Message Content', life: 3000 });
};
<\/script>
```

</details>

## Sticky

A message disappears after the number of milliseconds defined in the life option. Omit the life option to make the message sticky.

```vue
<Toast />
<Button @click="showSticky" label="Sticky" />
<Button label="Clear" severity="secondary" @click="clear()" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Toast />
        <div class="flex flex-wrap gap-2">
            <Button @click="showSticky" label="Sticky" />
            <Button label="Clear" severity="secondary" @click="clear()" />
        </div>
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const showSticky = () => {
    toast.add({ severity: 'info', summary: 'Sticky Message', detail: 'Message Content'});
}

const clear = () => {
    toast.removeAllGroups();
}
<\/script>
```

</details>

## Template

Custom content inside a message is defined with the message template.

```vue
<Toast position="bottom-center" group="bc" @close="onClose">
    <template #message="slotProps">
        <div class="flex flex-col items-start flex-auto">
            <div class="flex items-center gap-2">
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                <span class="font-bold">Amy Elsner</span>
            </div>
            <div class="font-medium text-lg my-4">{{ slotProps.message.summary }}</div>
            <Button size="small" label="Reply" severity="success" @click="onReply()"></Button>
        </div>
    </template>
</Toast>
<Button @click="showTemplate" label="View" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Toast position="bottom-center" group="bc" @close="onClose">
            <template #message="slotProps">
                <div class="flex flex-col items-start flex-auto">
                    <div class="flex items-center gap-2">
                        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                        <span class="font-bold">Amy Elsner</span>
                    </div>
                    <div class="font-medium text-lg my-4">{{ slotProps.message.summary }}</div>
                    <Button size="small" label="Reply" severity="success" @click="onReply()"></Button>
                </div>
            </template>
        </Toast>
        <Button @click="showTemplate" label="View" />
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
import { ref } from 'vue';
const toast = useToast();
const visible = ref(false);

const showTemplate = () => {
    if (!visible.value) {
        toast.add({ severity: 'success', summary: 'Can you send me the report?', group: 'bc' });
        visible.value = true;
    }
};

const onReply = () => {
    toast.removeGroup('bc');
    visible.value = false;
}

const onClose = () => {
    visible.value = false;
}
<\/script>
```

</details>

## ToastServiceDoc

Toast component is controlled via the ToastService that needs to be installed as an application plugin.

## Toast

### Props

| Name             | Type                                                                                                        | Default   | Description                                                                                                |
| ---------------- | ----------------------------------------------------------------------------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------- |
| group            | string                                                                                                      | -         | Unique identifier of a message group.                                                                      |
| position         | "center" \| "top-left" \| "top-center" \| "top-right" \| "bottom-left" \| "bottom-center" \| "bottom-right" | top-right | Position of the toast in viewport.                                                                         |
| autoZIndex       | boolean                                                                                                     | true      | Whether to automatically manage layering.                                                                  |
| baseZIndex       | number                                                                                                      | 0         | Base zIndex value to use in layering.                                                                      |
| breakpoints      | ToastBreakpointsType                                                                                        | -         | Object literal to define styles per screen size.                                                           |
| closeIcon        | string                                                                                                      | -         | Icon to display in the toast close button.                                                                 |
| infoIcon         | string                                                                                                      | -         | Icon to display in the toast with info severity.                                                           |
| warnIcon         | string                                                                                                      | -         | Icon to display in the toast with warn severity.                                                           |
| errorIcon        | string                                                                                                      | -         | Icon to display in the toast with error severity.                                                          |
| successIcon      | string                                                                                                      | -         | Icon to display in the toast with success severity.                                                        |
| closeButtonProps | ButtonHTMLAttributes                                                                                        | -         | Used to pass all properties of the HTMLButtonElement to the close button.                                  |
| message          | ToastMessageOptions                                                                                         | -         | Used to access message options.                                                                            |
| onMouseEnter     | Function                                                                                                    | -         | Used to specify a callback function to be run when the mouseenter event is fired on the message component. |
| onMouseLeave     | Function                                                                                                    | -         | Used to specify a callback function to be run when the mouseleave event is fired on the message component. |
| onClick          | Function                                                                                                    | -         | Used to specify a callback function to be run when the click event is fired on the message component.      |
| dt               | any                                                                                                         | -         | It generates scoped CSS variables using design tokens for the component.                                   |
| pt               | PassThrough<ToastPassThroughOptions>                                                                        | -         | Used to pass attributes to DOM elements inside the component.                                              |
| ptOptions        | any                                                                                                         | -         | Used to configure passthrough(pt) options of the component.                                                |
| unstyled         | boolean                                                                                                     | false     | When enabled, it removes component related styles in the core.                                             |

## Pass Through Options

| Name            | Type                           | Description                                                    |
| --------------- | ------------------------------ | -------------------------------------------------------------- |
| root            | ToastPassThroughOptionType     | Used to pass attributes to the root's DOM element.             |
| message         | ToastPassThroughOptionType     | Used to pass attributes to the message's DOM element.          |
| messageContent  | ToastPassThroughOptionType     | Used to pass attributes to the message content's DOM element.  |
| messageIcon     | ToastPassThroughOptionType     | Used to pass attributes to the message icon's DOM element.     |
| messageText     | ToastPassThroughOptionType     | Used to pass attributes to the message text's DOM element.     |
| summary         | ToastPassThroughOptionType     | Used to pass attributes to the summary's DOM element.          |
| detail          | ToastPassThroughOptionType     | Used to pass attributes to the detail's DOM element.           |
| buttonContainer | ToastPassThroughOptionType     | Used to pass attributes to the button container's DOM element. |
| closeButton     | ToastPassThroughOptionType     | Used to pass attributes to the button's DOM element.           |
| closeIcon       | ToastPassThroughOptionType     | Used to pass attributes to the button icon's DOM element.      |
| hooks           | any                            | Used to manage all lifecycle hooks.                            |
| transition      | ToastPassThroughTransitionType | Used to control Vue Transition API.                            |

## Theming

### CSS Classes

| Class                   | Description                               |
| ----------------------- | ----------------------------------------- |
| p-toast                 | Class name of the root element            |
| p-toast-message         | Class name of the message element         |
| p-toast-message-content | Class name of the message content element |
| p-toast-message-icon    | Class name of the message icon element    |
| p-toast-message-text    | Class name of the message text element    |
| p-toast-summary         | Class name of the summary element         |
| p-toast-detail          | Class name of the detail element          |
| p-toast-close-button    | Class name of the close button element    |
| p-toast-close-icon      | Class name of the close icon element      |

### Design Tokens

| Token                                          | CSS Variable                                       | Description                                 |
| ---------------------------------------------- | -------------------------------------------------- | ------------------------------------------- |
| toast.width                                    | --p-toast-width                                    | Width of root                               |
| toast.border.radius                            | --p-toast-border-radius                            | Border radius of root                       |
| toast.border.width                             | --p-toast-border-width                             | Border width of root                        |
| toast.transition.duration                      | --p-toast-transition-duration                      | Transition duration of root                 |
| toast.blur                                     | --p-toast-blur                                     | Used to pass tokens of the blur section     |
| toast.icon.size                                | --p-toast-icon-size                                | Size of icon                                |
| toast.content.padding                          | --p-toast-content-padding                          | Padding of content                          |
| toast.content.gap                              | --p-toast-content-gap                              | Gap of content                              |
| toast.text.gap                                 | --p-toast-text-gap                                 | Gap of text                                 |
| toast.summary.font.weight                      | --p-toast-summary-font-weight                      | Font weight of summary                      |
| toast.summary.font.size                        | --p-toast-summary-font-size                        | Font size of summary                        |
| toast.detail.font.weight                       | --p-toast-detail-font-weight                       | Font weight of detail                       |
| toast.detail.font.size                         | --p-toast-detail-font-size                         | Font size of detail                         |
| toast.close.button.width                       | --p-toast-close-button-width                       | Width of close button                       |
| toast.close.button.height                      | --p-toast-close-button-height                      | Height of close button                      |
| toast.close.button.border.radius               | --p-toast-close-button-border-radius               | Border radius of close button               |
| toast.close.button.focus.ring.width            | --p-toast-close-button-focus-ring-width            | Focus ring width of close button            |
| toast.close.button.focus.ring.style            | --p-toast-close-button-focus-ring-style            | Focus ring style of close button            |
| toast.close.button.focus.ring.offset           | --p-toast-close-button-focus-ring-offset           | Focus ring offset of close button           |
| toast.close.icon.size                          | --p-toast-close-icon-size                          | Size of close icon                          |
| toast.info.background                          | --p-toast-info-background                          | Background of info                          |
| toast.info.border.color                        | --p-toast-info-border-color                        | Border color of info                        |
| toast.info.color                               | --p-toast-info-color                               | Color of info                               |
| toast.info.detail.color                        | --p-toast-info-detail-color                        | Detail color of info                        |
| toast.info.shadow                              | --p-toast-info-shadow                              | Shadow of info                              |
| toast.info.close.button.hover.background       | --p-toast-info-close-button-hover-background       | Close button hover background of info       |
| toast.info.close.button.focus.ring.color       | --p-toast-info-close-button-focus-ring-color       | Close button focus ring color of info       |
| toast.info.close.button.focus.ring.shadow      | --p-toast-info-close-button-focus-ring-shadow      | Close button focus ring shadow of info      |
| toast.success.background                       | --p-toast-success-background                       | Background of success                       |
| toast.success.border.color                     | --p-toast-success-border-color                     | Border color of success                     |
| toast.success.color                            | --p-toast-success-color                            | Color of success                            |
| toast.success.detail.color                     | --p-toast-success-detail-color                     | Detail color of success                     |
| toast.success.shadow                           | --p-toast-success-shadow                           | Shadow of success                           |
| toast.success.close.button.hover.background    | --p-toast-success-close-button-hover-background    | Close button hover background of success    |
| toast.success.close.button.focus.ring.color    | --p-toast-success-close-button-focus-ring-color    | Close button focus ring color of success    |
| toast.success.close.button.focus.ring.shadow   | --p-toast-success-close-button-focus-ring-shadow   | Close button focus ring shadow of success   |
| toast.warn.background                          | --p-toast-warn-background                          | Background of warn                          |
| toast.warn.border.color                        | --p-toast-warn-border-color                        | Border color of warn                        |
| toast.warn.color                               | --p-toast-warn-color                               | Color of warn                               |
| toast.warn.detail.color                        | --p-toast-warn-detail-color                        | Detail color of warn                        |
| toast.warn.shadow                              | --p-toast-warn-shadow                              | Shadow of warn                              |
| toast.warn.close.button.hover.background       | --p-toast-warn-close-button-hover-background       | Close button hover background of warn       |
| toast.warn.close.button.focus.ring.color       | --p-toast-warn-close-button-focus-ring-color       | Close button focus ring color of warn       |
| toast.warn.close.button.focus.ring.shadow      | --p-toast-warn-close-button-focus-ring-shadow      | Close button focus ring shadow of warn      |
| toast.error.background                         | --p-toast-error-background                         | Background of error                         |
| toast.error.border.color                       | --p-toast-error-border-color                       | Border color of error                       |
| toast.error.color                              | --p-toast-error-color                              | Color of error                              |
| toast.error.detail.color                       | --p-toast-error-detail-color                       | Detail color of error                       |
| toast.error.shadow                             | --p-toast-error-shadow                             | Shadow of error                             |
| toast.error.close.button.hover.background      | --p-toast-error-close-button-hover-background      | Close button hover background of error      |
| toast.error.close.button.focus.ring.color      | --p-toast-error-close-button-focus-ring-color      | Close button focus ring color of error      |
| toast.error.close.button.focus.ring.shadow     | --p-toast-error-close-button-focus-ring-shadow     | Close button focus ring shadow of error     |
| toast.secondary.background                     | --p-toast-secondary-background                     | Background of secondary                     |
| toast.secondary.border.color                   | --p-toast-secondary-border-color                   | Border color of secondary                   |
| toast.secondary.color                          | --p-toast-secondary-color                          | Color of secondary                          |
| toast.secondary.detail.color                   | --p-toast-secondary-detail-color                   | Detail color of secondary                   |
| toast.secondary.shadow                         | --p-toast-secondary-shadow                         | Shadow of secondary                         |
| toast.secondary.close.button.hover.background  | --p-toast-secondary-close-button-hover-background  | Close button hover background of secondary  |
| toast.secondary.close.button.focus.ring.color  | --p-toast-secondary-close-button-focus-ring-color  | Close button focus ring color of secondary  |
| toast.secondary.close.button.focus.ring.shadow | --p-toast-secondary-close-button-focus-ring-shadow | Close button focus ring shadow of secondary |
| toast.contrast.background                      | --p-toast-contrast-background                      | Background of contrast                      |
| toast.contrast.border.color                    | --p-toast-contrast-border-color                    | Border color of contrast                    |
| toast.contrast.color                           | --p-toast-contrast-color                           | Color of contrast                           |
| toast.contrast.detail.color                    | --p-toast-contrast-detail-color                    | Detail color of contrast                    |
| toast.contrast.shadow                          | --p-toast-contrast-shadow                          | Shadow of contrast                          |
| toast.contrast.close.button.hover.background   | --p-toast-contrast-close-button-hover-background   | Close button hover background of contrast   |
| toast.contrast.close.button.focus.ring.color   | --p-toast-contrast-close-button-focus-ring-color   | Close button focus ring color of contrast   |
| toast.contrast.close.button.focus.ring.shadow  | --p-toast-contrast-close-button-focus-ring-shadow  | Close button focus ring shadow of contrast  |
