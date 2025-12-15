# Vue Confirmation Popup Component

ConfirmPopup displays a confirmation overlay displayed relatively to its target.

## Import

```javascript
import ConfirmPopup from 'primevue/confirmpopup';
```

## Accessibility

Screen Reader ConfirmPopup component uses alertdialog role and since any attribute is passed to the root element you may define attributes like aria-label or aria-labelledby to describe the popup contents. In addition aria-modal is added since focus is kept within the popup. When require method of the $confirm instance is used and a trigger is passed as a parameter, ConfirmPopup adds aria-expanded state attribute and aria-controls to the trigger so that the relation between the trigger and the dialog is defined. Overlay Keyboard Support Key Function tab Moves focus to the next the focusable element within the popup. shift + tab Moves focus to the previous the focusable element within the popup. escape Closes the popup and moves focus to the trigger. Buttons Keyboard Support Key Function enter Triggers the action, closes the popup and moves focus to the trigger. space Triggers the action, closes the popup and moves focus to the trigger.

## Basic

ConfirmPopup is displayed by calling the require method of the $confirm instance by passing the options to customize the Popup. The target attribute is mandatory to align the popup to its referrer.

```vue
<ConfirmPopup></ConfirmPopup>
<Button @click="confirm1($event)" label="Save" variant="outlined"></Button>
<Button @click="confirm2($event)" label="Delete" severity="danger" variant="outlined"></Button>
```

## ConfirmationServiceDoc

ConfirmPopup is controlled via the ConfirmationService that needs to be installed as an application plugin.

## Headless

Headless mode is enabled by defining a container slot that lets you implement entire confirmation UI instead of the default elements.

```vue
<ConfirmPopup group="headless">
    <template #container="{ message, acceptCallback, rejectCallback }">
        <div class="rounded p-4">
            <span>{{ message.message }}</span>
            <div class="flex items-center gap-2 mt-4">
                <Button label="Save" @click="acceptCallback" size="small"></Button>
                <Button label="Cancel" variant="outlined" @click="rejectCallback" severity="secondary" size="small" text></Button>
            </div>
        </div>
    </template>
</ConfirmPopup>
<Button @click="requireConfirmation($event)" label="Save"></Button>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <Toast />
    <ConfirmPopup group="headless">
        <template #container="{ message, acceptCallback, rejectCallback }">
            <div class="rounded p-4">
                <span>{{ message.message }}</span>
                <div class="flex items-center gap-2 mt-4">
                    <Button label="Save" @click="acceptCallback" size="small"></Button>
                    <Button label="Cancel" variant="outlined" @click="rejectCallback" severity="secondary" size="small" text></Button>
                </div>
            </div>
        </template>
    </ConfirmPopup>
    <div class="card flex justify-center">
        <Button @click="requireConfirmation($event)" label="Save"></Button>
    </div>
</template>

<script setup>
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

const requireConfirmation = (event) => {
    confirm.require({
        target: event.currentTarget,
        group: 'headless',
        message: 'Save your current process?',
        accept: () => {
            toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});
        },
        reject: () => {
            toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});
        }
    });
}
<\/script>
```

</details>

## Template

Templating allows customizing the message content.

```vue
<ConfirmPopup group="templating">
    <template #message="slotProps">
        <div class="flex flex-col items-center w-full gap-4 border-b border-surface-200 dark:border-surface-700 p-4 mb-4 pb-0">
            <i :class="slotProps.message.icon" class="!text-6xl text-primary-500"></i>
            <p>{{ slotProps.message.message }}</p>
        </div>
    </template>
</ConfirmPopup>
<Button @click="showTemplate($event)" label="Save"></Button>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <Toast />
    <ConfirmPopup group="templating">
        <template #message="slotProps">
            <div class="flex flex-col items-center w-full gap-4 border-b border-surface-200 dark:border-surface-700 p-4 mb-4 pb-0">
                <i :class="slotProps.message.icon" class="!text-6xl text-primary-500"></i>
                <p>{{ slotProps.message.message }}</p>
            </div>
        </template>
    </ConfirmPopup>
    <div class="card flex justify-center">
        <Button @click="showTemplate($event)" label="Save"></Button>
    </div>
</template>

<script setup>
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

const showTemplate = (event) => {
    confirm.require({
        target: event.currentTarget,
        group: 'templating',
        message: 'Please confirm to proceed moving forward.',
        icon: 'pi pi-exclamation-circle',
        rejectProps: {
            icon: 'pi pi-times',
            label: 'Cancel',
            outlined: true
        },
        acceptProps: {
            icon: 'pi pi-check',
            label: 'Confirm'
        },
        accept: () => {
            toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});
        },
        reject: () => {
            toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});
        }
    });
}
<\/script>
```

</details>

## Confirm Popup

### Props

| Name      | Type                                        | Default | Description                                                                                             |
| --------- | ------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------- |
| group     | string                                      | -       | Optional key to match the key of the confirmation, useful to target a specific confirm dialog instance. |
| dt        | any                                         | -       | It generates scoped CSS variables using design tokens for the component.                                |
| pt        | PassThrough<ConfirmPopupPassThroughOptions> | -       | Used to pass attributes to DOM elements inside the component.                                           |
| ptOptions | any                                         | -       | Used to configure passthrough(pt) options of the component.                                             |
| unstyled  | boolean                                     | false   | When enabled, it removes component related styles in the core.                                          |

## Pass Through Options

| Name           | Type                                  | Description                                           |
| -------------- | ------------------------------------- | ----------------------------------------------------- |
| root           | ConfirmPopupPassThroughOptionType     | Used to pass attributes to the root's DOM element.    |
| content        | ConfirmPopupPassThroughOptionType     | Used to pass attributes to the content's DOM element. |
| icon           | ConfirmPopupPassThroughOptionType     | Used to pass attributes to the icon's DOM element.    |
| message        | ConfirmPopupPassThroughOptionType     | Used to pass attributes to the message's DOM element. |
| footer         | ConfirmPopupPassThroughOptionType     | Used to pass attributes to the footer's DOM element.  |
| pcRejectButton | any                                   | Used to pass attributes to the Button component.      |
| pcAcceptButton | any                                   | Used to pass attributes to the Button component.      |
| hooks          | any                                   | Used to manage all lifecycle hooks.                   |
| transition     | ConfirmPopupPassThroughTransitionType | Used to control Vue Transition API.                   |

## Theming

### CSS Classes

| Class                        | Description                             |
| ---------------------------- | --------------------------------------- |
| p-confirmpopup               | Class name of the root element          |
| p-confirmpopup-content       | Class name of the content element       |
| p-confirmpopup-icon          | Class name of the icon element          |
| p-confirmpopup-message       | Class name of the message element       |
| p-confirmpopup-footer        | Class name of the footer element        |
| p-confirmpopup-reject-button | Class name of the reject button element |
| p-confirmpopup-accept-button | Class name of the accept button element |

### Design Tokens

| Token                        | CSS Variable                     | Description           |
| ---------------------------- | -------------------------------- | --------------------- |
| confirmpopup.background      | --p-confirmpopup-background      | Background of root    |
| confirmpopup.border.color    | --p-confirmpopup-border-color    | Border color of root  |
| confirmpopup.color           | --p-confirmpopup-color           | Color of root         |
| confirmpopup.border.radius   | --p-confirmpopup-border-radius   | Border radius of root |
| confirmpopup.shadow          | --p-confirmpopup-shadow          | Shadow of root        |
| confirmpopup.gutter          | --p-confirmpopup-gutter          | Gutter of root        |
| confirmpopup.arrow.offset    | --p-confirmpopup-arrow-offset    | Arrow offset of root  |
| confirmpopup.content.padding | --p-confirmpopup-content-padding | Padding of content    |
| confirmpopup.content.gap     | --p-confirmpopup-content-gap     | Gap of content        |
| confirmpopup.icon.size       | --p-confirmpopup-icon-size       | Size of icon          |
| confirmpopup.icon.color      | --p-confirmpopup-icon-color      | Color of icon         |
| confirmpopup.footer.gap      | --p-confirmpopup-footer-gap      | Gap of footer         |
| confirmpopup.footer.padding  | --p-confirmpopup-footer-padding  | Padding of footer     |
