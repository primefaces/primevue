# Vue Dynamic Dialog Component

Dialogs can be created dynamically with any component as the content using a DialogService.

## Import

```javascript
import DynamicDialog from 'primevue/dynamicdialog';
```

## Accessibility

Visit accessibility section of dialog component for more information.

## CloseDialogDoc

The close function is available through a dialogRef that is injected to the component loaded by the dialog.

```vue
import { inject } from "vue";

const dialogRef = inject('dialogRef');

const closeDialog = () => {
    dialogRef.value.close();
}
```

## Customization

DynamicDialog uses the Dialog component internally, visit dialog for more information about the available props.

## Dialog Service

A single shared dialog instance is required in the application, ideal location would be defining it once at the main application template. A dynamic dialog is controlled via the DialogService that needs to be installed as an application plugin. The service is available with the useDialog function for Composition API or using the $dialog property of the application for Options API.

## Events

The emits object defines callbacks to handle events emitted by the component within the Dialog.

## Example

A sample implementation to demonstrate loading components asynchronously, nested content and passing data.

```vue
<Button label="Select a Product" icon="pi pi-search" @click="showProducts" />

<DynamicDialog />
```

## OpenDialogDoc

The open function of the DialogService is used to open a Dialog. First parameter is the component to load and second one is the configuration object to customize the Dialog. The component can also be loaded asynchronously, this approach is useful in conditional cases and to improve initial load times as well.

## Passing Data

Use the data property to pass parameters when opening a Dialog, the internal component can later access this data using dialogRef . Similarly when hiding a Dialog, any parameter passed to the close function is received from the onClose callback.

## Dynamic Dialog

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

