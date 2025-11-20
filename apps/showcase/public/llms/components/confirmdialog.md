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

## Template

Templating allows customizing the message content.

## Confirmdialog

## Confirmdialog

