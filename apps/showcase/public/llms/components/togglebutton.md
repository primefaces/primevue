# Vue ToggleButton Component

ToggleButton is used to select a boolean value using a button.

## Import

```javascript
import ToggleButton from 'primevue/togglebutton';
```

## Accessibility

Screen Reader ToggleButton component uses a native button element as the switch element internally that is only visible to screen readers. Value to describe the component can be defined with aria-labelledby or aria-label props, it is highly suggested to use either of these props as the component changes the label displayed which will result in screen readers to read different labels when the component receives focus. To prevent this, always provide an aria label that does not change related to state. Keyboard Support Keyboard interaction is derived from the native browser handling of checkboxs in a group. Key Function tab Moves focus to the button. space Toggles the checked state.

```vue
<span id="rememberme">Remember Me</span>
<ToggleButton aria-labelledby="rememberme" />

<ToggleButton aria-label="Remember Me" />
```

## Basic

ToggleButton is used with the v-model property for two-way value binding.

```vue
<ToggleButton v-model="checked" onLabel="On" offLabel="Off" />
```

## Customized

Icons and Labels can be customized using onLabel , offLabel , onIcon and offIcon properties.

```vue
<ToggleButton v-model="checked" onLabel="Locked" offLabel="Unlocked" onIcon="pi pi-lock" 
    offIcon="pi pi-lock-open" class="w-36" aria-label="Do you confirm" />
```

## Disabled

When disabled is present, the element cannot be edited and focused.

```vue
<ToggleButton v-model="checked" disabled onIcon="pi pi-check" offIcon="pi pi-times"
    class="w-full sm:w-40" aria-label="Confirmation" />
```

## Fluid

The fluid prop makes the component take up the full width of its container when set to true.

```vue
<ToggleButton v-model="checked" onLabel="On" offLabel="Off" />
```

## Forms

ToggleButton integrates seamlessly with the PrimeVue Forms library.

## Invalid

Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries.

```vue
<ToggleButton v-model="checked" onIcon="pi pi-check" offIcon="pi pi-times" :invalid="!checked" class="w-full sm:w-40" aria-label="Confirmation" />
```

## Sizes

ToggleButton provides small and large sizes as alternatives to the base.

```vue
<ToggleButton v-model="value1" onLabel="On" offLabel="Off" size="small" class="min-w-16" />
<ToggleButton v-model="value2" onLabel="On" offLabel="Off" class="min-w-20" />
<ToggleButton v-model="value3" onLabel="On" offLabel="Off" size="large" class="min-w-24" />
```

## Togglebutton

## Togglebutton

