# Vue ToggleSwitch Component

ToggleSwitch is used to select a boolean value.

## Import

```javascript
import ToggleSwitch from 'primevue/toggleswitch';
```

## Accessibility

Screen Reader ToggleSwitch component uses a hidden native checkbox element with switch role internally that is only visible to screen readers. Value to describe the component can either be provided via label tag combined with id prop or using aria-labelledby , aria-label props. Keyboard Support Key Function tab Moves focus to the switch. space Toggles the checked state.

```vue
<label for="switch1">Remember Me</label>
<ToggleSwitch inputId="switch1" />

<span id="switch2">Remember Me</span>
<ToggleSwitch aria-labelledby="switch2" />

<ToggleSwitch aria-label="Remember Me" />
```

## Basic

ToggleSwitch is used with the v-model property for two-way value binding.

```vue
<ToggleSwitch v-model="checked" />
```

## Disabled

When disabled is present, the element cannot be edited and focused.

```vue
<ToggleSwitch v-model="checked" disabled />
```

## Forms

ToggleSwitch integrates seamlessly with the PrimeVue Forms library.

## Invalid

Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries.

```vue
<ToggleSwitch v-model="checked" :invalid="!checked" />
```

## Preselection

Enabling checked property displays the component as active initially.

```vue
<ToggleSwitch v-model="checked" />
```

## Template

The handle slot is available to display custom content.

```vue
<ToggleSwitch v-model="checked">
    <template #handle="{ checked }">
        <i :class="['!text-xs pi', { 'pi-check': checked, 'pi-times': !checked }]" />
    </template>
</ToggleSwitch>
```

## Toggleswitch

## Toggleswitch

