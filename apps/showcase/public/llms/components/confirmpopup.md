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

## Template

Templating allows customizing the message content.

## Confirmpopup

