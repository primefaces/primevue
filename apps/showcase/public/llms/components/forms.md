# Vue Form Library

The PrimeVue Forms library provides comprehensive form state management with built-in validation support.

## Import

```javascript
import { Form } from '@primevue/forms';
```

## AccessibilityDoc

Screen Reader Form does not require any roles and attributes. Keyboard Support Component does not include any interactive elements.

## Basic

All PrimeVue form components are designed for seamless integration with the forms library. Instead of using the standard v-model , the name property is used to link a state object that tracks values, errors, and actions. The form component provides four key properties for state management.

## Download

Forms add-on is available for download on npm registry.

```vue
# Using npm
npm install @primevue/forms

# Using yarn
yarn add @primevue/forms

# Using pnpm
pnpm add @primevue/forms
```

## DynamicDoc

This section demonstrates how to create a dynamic form using a custom Form component. It showcases an example where form fields are generated dynamically based on the provided configuration, allowing for flexible form structures. The components named Dynamic* shown in this example are not built-in, and only available for sampling purposes. First form uses a declarative approach whereas second form goes for a programmatic approach. We suggest running this sample in StackBlitz to view the comprehensive implementation.

```vue
<Fieldset legend="Form 1" pt:content:class="flex justify-center">
    <DynamicForm @submit="onFormSubmit('Form 1', $event)">
        <DynamicFormField groupId="userId_1" name="username">
            <DynamicFormLabel>Username</DynamicFormLabel>
            <DynamicFormControl defaultValue="PrimeVue" fluid :schema="userNameSchema" />
            <DynamicFormMessage />
        </DynamicFormField>
        <DynamicFormField groupId="passId_1" name="password">
            <DynamicFormLabel>Password</DynamicFormLabel>
            <DynamicFormControl as="Password" :feedback="false" toggleMask fluid :schema="passwordSchema" />
            <DynamicFormMessage errorType="minimum" />
            <DynamicFormMessage errorType="maximum" />
            <DynamicFormMessage errorType="uppercase" severity="warn" />
            <DynamicFormMessage errorType="lowercase" severity="warn" />
            <DynamicFormMessage errorType="number" severity="secondary" />
        </DynamicFormField>
        <DynamicFormSubmit />
    </DynamicForm>
</Fieldset>

<Fieldset legend="Form 2" pt:content:class="flex justify-center">
    <DynamicForm :fields @submit="onFormSubmit('Form 2', $event)" />
</Fieldset>
```

## Resolvers

Validations are implemented with the resolver property. A custom resolver is responsible for handling the validation and returning an errors object with key-value pairs where key is the form field name and value is an array of error object data. For productivity, we recommend using a schema validation library instead of building your own custom validation logic. The forms library provide built-in resolvers for popular options including Zod , Yup , Joi , Valibot , and Superstruct that can be imported from @primevue/forms/resolvers path.

## States

The $form object tracks the state management of the fields. Each field is linked with the name property. View the FormFieldState type in the API documentation for details about each property.

## SubmitDoc

The submit callback returns an object that encapsulates the form's validity, any existing errors, and its current state. This enables access to the form values, validation status, and any errors present at the time of submission. View the FormSubmitEvent in the API documentation for more information about the available event data.

## ValidateOn

Form component supports flexible validation triggers, allowing validation on value updates, blur events, form mount, or submission. These behaviors can be configured at form level or on specific fields via the validateOnValueUpdate , validateOnBlur , validateOnMount , and validateOnSubmit options of the formControl property. In this example, form disables validateOnValueUpdate and enables validateOnBlur at form level, and validates firstName on mount. The firstName field, overrides the form level setting locally.

## Form

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resolver | Function | - |  |
| initialValues | Record<string, any> | - | The initial values for the form fields. |
| validateOnValueUpdate | boolean \| string[] | true | Whether to validate the form fields when the values change. |
| validateOnBlur | boolean \| string[] | false | Whether to validate the form fields when they lose focus (on blur). |
| validateOnMount | boolean \| string[] | false | Whether to validate the form fields immediately after the form is mounted. |
| validateOnSubmit | boolean \| string[] | true | Whether to validate the form fields when the form is submitted. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<FormPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | PassThroughOptions | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

### Slots

| Name | Parameters | Description |
|------|------------|-------------|
| default | Function |  |

### Emits

| Name | Parameters | Description |
|------|------------|-------------|
| submit | Function |  |
| reset | Function |  |

## Forms/src

## Forms/src/resolvers/joi

## Forms/src/resolvers/superstruct

## Forms/src/resolvers/valibot

## Forms/src/resolvers/yup

## Forms/src/resolvers/zod

## Forms/src/types

## Forms/src/useform

