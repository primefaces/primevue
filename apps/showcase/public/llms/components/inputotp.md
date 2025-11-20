# Vue Otp Input Component

Input Otp is used to enter one time passwords.

## Import

```javascript
import InputOtp from 'primevue/inputotp';
```

## Accessibility

Screen Reader Input OTP uses a set of InputText components, refer to the InputText component for more information about the screen reader support. Keyboard Support Key Function tab Moves focus to the input otp. right arrow Moves focus to the next input element. left arrow Moves focus to the previous input element. backspace Deletes the input and moves focus to the previous input element.

## Basic

InputOtp is used with the v-model property for two-way value binding. The number of characters is defined with the length option, which is set to 4 by default.

```vue
<InputOtp v-model="value" />
```

## Filled

Specify the variant property as filled to display the component with a higher visual emphasis than the default outlined style.

```vue
<InputOtp v-model="value" variant="filled" />
```

## Forms

InputOtp integrates seamlessly with the PrimeVue Forms library.

## Integer Only

When integerOnly is present, only integers can be accepted as input.

```vue
<InputOtp v-model="value" integerOnly />
```

## Mask

Enable the mask option to hide the values in the input fields.

```vue
<InputOtp v-model="value" mask />
```

## Sample

A sample UI implementation with templating and additional elements.

```vue
<div class="flex flex-col items-center">
    <div class="font-bold text-xl mb-2">Authenticate Your Account</div>
    <p class="text-surface-500 dark:text-surface-400 block mb-8">Please enter the code sent to your phone.</p>
    <InputOtp v-model="value" :length="6" style="gap: 0">
        <template #default="{ attrs, events, index }">
            <input type="text" v-bind="attrs" v-on="events" class="custom-otp-input" />
            <div v-if="index === 3" class="px-4">
                <i class="pi pi-minus" />
            </div>
        </template>
    </InputOtp>
    <div class="flex justify-between mt-8 self-stretch">
        <Button label="Resend Code" link class="p-0"></Button>
        <Button label="Submit Code"></Button>
    </div>
</div>
```

## Sizes

InputOtp provides small and large sizes as alternatives to the base.

```vue
<InputOtp v-model="value1" size="small" />
<InputOtp v-model="value2" />
<InputOtp v-model="value3" size="large" />
```

## Template

Define a template with your own UI elements with bindings to the provided events and attributes to replace the default design.

```vue
<InputOtp v-model="value">
    <template #default="{ attrs, events }">
        <input type="text" v-bind="attrs" v-on="events" class="custom-otp-input" />
    </template>
</InputOtp>
```

## Inputotp

## Inputotp

