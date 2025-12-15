# Vue Confirmation Dialog Component

ConfirmDialog uses a Dialog UI that is integrated with the Confirmation API.

## Import

```javascript
import ConfirmDialog from 'primevue/confirmdialog';
```

## Accessibility

Screen Reader ConfirmDialog component uses alertdialog role along with aria-labelledby referring to the header element however any attribute is passed to the root element so you may use aria-labelledby to override this default behavior. In addition aria-modal is added since focus is kept within the popup. When require method of the $confirm instance is used and a trigger is passed as a parameter, ConfirmDialog adds aria-expanded state attribute and aria-controls to the trigger so that the relation between the trigger and the dialog is defined. Overlay Keyboard Support Key Function tab Moves focus to the next the focusable element within the dialog. shift + tab Moves focus to the previous the focusable element within the dialog. escape Closes the dialog. Buttons Keyboard Support Key Function enter Closes the dialog. space Closes the dialog.

## Basic

ConfirmDialog is displayed by calling the require method of the $confirm instance by passing the options to customize the Dialog. The target attribute is mandatory to align the popup to its referrer.

```vue
<ConfirmDialog></ConfirmDialog>
<Button @click="confirm1()" label="Save" variant="outlined"></Button>
<Button @click="confirm2()" label="Delete" severity="danger" variant="outlined"></Button>
```

## ConfirmationServiceDoc

ConfirmDialog is controlled via the ConfirmationService that needs to be installed as an application plugin.

## Headless

Headless mode is enabled by defining a container slot that lets you implement entire confirmation UI instead of the default elements.

```vue
<ConfirmDialog group="headless">
    <template #container="{ message, acceptCallback, rejectCallback }">
        <div class="flex flex-col items-center p-8 bg-surface-0 dark:bg-surface-900 rounded">
            <div class="rounded-full bg-primary text-primary-contrast inline-flex justify-center items-center h-24 w-24 -mt-20">
                <i class="pi pi-question !text-4xl"></i>
            </div>
            <span class="font-bold text-2xl block mb-2 mt-6">{{ message.header }}</span>
            <p class="mb-0">{{ message.message }}</p>
            <div class="flex items-center gap-2 mt-6">
                <Button label="Save" @click="acceptCallback" class="w-32"></Button>
                <Button label="Cancel" variant="outlined" @click="rejectCallback" class="w-32"></Button>
            </div>
        </div>
    </template>
</ConfirmDialog>
<Button @click="requireConfirmation()" label="Save"></Button>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <ConfirmDialog group="headless">
        <template #container="{ message, acceptCallback, rejectCallback }">
            <div class="flex flex-col items-center p-8 bg-surface-0 dark:bg-surface-900 rounded">
                <div class="rounded-full bg-primary text-primary-contrast inline-flex justify-center items-center h-24 w-24 -mt-20">
                    <i class="pi pi-question !text-4xl"></i>
                </div>
                <span class="font-bold text-2xl block mb-2 mt-6">{{ message.header }}</span>
                <p class="mb-0">{{ message.message }}</p>
                <div class="flex items-center gap-2 mt-6">
                    <Button label="Save" @click="acceptCallback"></Button>
                    <Button label="Cancel" variant="outlined" @click="rejectCallback"></Button>
                </div>
            </div>
        </template>
    </ConfirmDialog>
    <div class="card flex justify-center">
        <Button @click="requireConfirmation()" label="Save"></Button>
    </div>
    <Toast />
</template>

<script setup>
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

const requireConfirmation = () => {
    confirm.require({
        group: 'headless',
        header: 'Are you sure?',
        message: 'Please confirm to proceed.',
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};
<\/script>
```

</details>

## Position

The position property of the confirm options specifies the location of the Dialog.

```vue
<ConfirmDialog group="positioned"></ConfirmDialog>
<div class="flex flex-wrap justify-center gap-2 mb-4">
    <Button @click="confirmPosition('left')" icon="pi pi-arrow-right" label="Left" severity="secondary" style="min-width: 10rem"></Button>
    <Button @click="confirmPosition('right')" icon="pi pi-arrow-left" label="Right" severity="secondary" style="min-width: 10rem"></Button>
</div>
<div class="flex flex-wrap justify-center gap-2 mb-4">
    <Button @click="confirmPosition('topleft')" icon="pi pi-arrow-down-right" label="TopLeft" severity="secondary" style="min-width: 10rem"></Button>
    <Button @click="confirmPosition('top')" icon="pi pi-arrow-down" label="Top" severity="secondary" style="min-width: 10rem"></Button>
    <Button @click="confirmPosition('topright')" icon="pi pi-arrow-down-left" label="TopRight" severity="secondary" style="min-width: 10rem"></Button>
</div>
<div class="flex flex-wrap justify-center gap-2">
    <Button @click="confirmPosition('bottomleft')" icon="pi pi-arrow-up-right" label="BottomLeft" severity="secondary" style="min-width: 10rem"></Button>
    <Button @click="confirmPosition('bottom')" icon="pi pi-arrow-up" label="Bottom" severity="secondary" style="min-width: 10rem"></Button>
    <Button @click="confirmPosition('bottomright')" icon="pi pi-arrow-up-left" label="BottomRight" severity="secondary" style="min-width: 10rem"></Button>
</div>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <Toast />
    <ConfirmDialog group="positioned"></ConfirmDialog>
    <div class="card">
        <div class="flex flex-wrap justify-center gap-2 mb-4">
            <Button @click="confirmPosition('left')" icon="pi pi-arrow-right" label="Left" severity="secondary" style="min-width: 10rem"></Button>
            <Button @click="confirmPosition('right')" icon="pi pi-arrow-left" label="Right" severity="secondary" style="min-width: 10rem"></Button>
        </div>
        <div class="flex flex-wrap justify-center gap-2 mb-4">
            <Button @click="confirmPosition('topleft')" icon="pi pi-arrow-down-right" label="TopLeft" severity="secondary" style="min-width: 10rem"></Button>
            <Button @click="confirmPosition('top')" icon="pi pi-arrow-down" label="Top" severity="secondary" style="min-width: 10rem"></Button>
            <Button @click="confirmPosition('topright')" icon="pi pi-arrow-down-left" label="TopRight" severity="secondary" style="min-width: 10rem"></Button>
        </div>
        <div class="flex flex-wrap justify-center gap-2">
            <Button @click="confirmPosition('bottomleft')" icon="pi pi-arrow-up-right" label="BottomLeft" severity="secondary" style="min-width: 10rem"></Button>
            <Button @click="confirmPosition('bottom')" icon="pi pi-arrow-up" label="Bottom" severity="secondary" style="min-width: 10rem"></Button>
            <Button @click="confirmPosition('bottomright')" icon="pi pi-arrow-up-left" label="BottomRight" severity="secondary" style="min-width: 10rem"></Button>
        </div>
    </div>
</template>

<script setup>
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

const confirmPosition = (position) => {
    confirm.require({
        group: 'positioned',
        message: 'Are you sure you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-info-circle',
        position: position,
        rejectProps: {
            label: 'Cancel',
            severity: 'secondary',
            text: true
        },
        acceptProps: {
            label: 'Save',
            text: true
        },
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Request submitted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'Process incomplete', life: 3000 });
        }
    });
};
<\/script>
```

</details>

## Template

Templating allows customizing the message content.

```vue
<ConfirmDialog group="templating">
    <template #message="slotProps">
        <div class="flex flex-col items-center w-full gap-4 border-b border-surface-200 dark:border-surface-700">
            <i :class="slotProps.message.icon" class="!text-6xl text-primary-500"></i>
            <p>{{ slotProps.message.message }}</p>
        </div>
    </template>
</ConfirmDialog>
<Button @click="showTemplate()" label="Save"></Button>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <ConfirmDialog group="templating">
        <template #message="slotProps">
            <div class="flex flex-col items-center w-full gap-4 border-b border-surface-200 dark:border-surface-700">
                <i :class="slotProps.message.icon" class="!text-6xl text-primary-500"></i>
                <p>{{ slotProps.message.message }}</p>
            </div>
        </template>
    </ConfirmDialog>
    <div class="card flex justify-center">
        <Button @click="showTemplate()" label="Save"></Button>
    </div>
    <Toast />
</template>

<script setup>
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

const showTemplate = () => {
    confirm.require({
        group: 'templating',
        header: 'Confirmation',
        message: 'Please confirm to proceed moving forward.',
        icon: 'pi pi-exclamation-circle',
        rejectProps: {
            label: 'Cancel',
            icon: 'pi pi-times',
            outlined: true,
            size: 'small'
        },
        acceptProps: {
            label: 'Save',
            icon: 'pi pi-check',
            size: 'small'
        },
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};
<\/script>
```

</details>

## Confirm Dialog

### Props

| Name        | Type                                         | Default | Description                                                                                             |
| ----------- | -------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------- |
| group       | string                                       | -       | Optional key to match the key of the confirmation, useful to target a specific confirm dialog instance. |
| breakpoints | ConfirmDialogBreakpoints                     | -       | Object literal to define widths per screen size.                                                        |
| draggable   | boolean                                      | true    | Enables dragging to change the position using header.                                                   |
| dt          | any                                          | -       | It generates scoped CSS variables using design tokens for the component.                                |
| pt          | PassThrough<ConfirmDialogPassThroughOptions> | -       | Used to pass attributes to DOM elements inside the component.                                           |
| ptOptions   | any                                          | -       | Used to configure passthrough(pt) options of the component.                                             |
| unstyled    | boolean                                      | false   | When enabled, it removes component related styles in the core.                                          |

## Pass Through Options

| Name           | Type                               | Description                                                 |
| -------------- | ---------------------------------- | ----------------------------------------------------------- |
| root           | ConfirmDialogPassThroughOptionType | Used to pass attributes to the root's DOM element.          |
| header         | ConfirmDialogPassThroughOptionType | Used to pass attributes to the header's DOM element.        |
| title          | ConfirmDialogPassThroughOptionType | Used to pass attributes to the header title's DOM element.  |
| headerActions  | ConfirmDialogPassThroughOptionType | Used to pass attributes to the header actions' DOM element. |
| pcCloseButton  | ConfirmDialogPassThroughOptionType | Used to pass attributes to the close button's component.    |
| content        | ConfirmDialogPassThroughOptionType | Used to pass attributes to the content's DOM element.       |
| icon           | ConfirmDialogPassThroughOptionType | Used to pass attributes to the icon's DOM element.          |
| message        | ConfirmDialogPassThroughOptionType | Used to pass attributes to the message's DOM element.       |
| footer         | ConfirmDialogPassThroughOptionType | Used to pass attributes to the footer's DOM element.        |
| mask           | ConfirmDialogPassThroughOptionType | Used to pass attributes to the mask's DOM element.          |
| pcRejectButton | any                                | Used to pass attributes to the Button component.            |
| pcAcceptButton | any                                | Used to pass attributes to the Button component.            |
| hooks          | any                                | Used to manage all lifecycle hooks.                         |
| transition     | ConfirmDialogPassThroughOptionType | Used to control Vue Transition API.                         |

## Theming

### CSS Classes

| Class                         | Description                             |
| ----------------------------- | --------------------------------------- |
| p-confirmdialog               | Class name of the root element          |
| p-confirmdialog-icon          | Class name of the icon element          |
| p-confirmdialog-message       | Class name of the message element       |
| p-confirmdialog-reject-button | Class name of the reject button element |
| p-confirmdialog-accept-button | Class name of the accept button element |

### Design Tokens

| Token                     | CSS Variable                  | Description    |
| ------------------------- | ----------------------------- | -------------- |
| confirmdialog.icon.size   | --p-confirmdialog-icon-size   | Size of icon   |
| confirmdialog.icon.color  | --p-confirmdialog-icon-color  | Color of icon  |
| confirmdialog.content.gap | --p-confirmdialog-content-gap | Gap of content |
