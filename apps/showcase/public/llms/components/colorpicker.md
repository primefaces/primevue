# Vue ColorPicker Component

ColorPicker is an input component to select a color.

## Import

```javascript
import ColorPicker from 'primevue/colorpicker';
```

## Accessibility

Screen Reader Specification does not cover a color picker yet and using a semantic native color picker is not consistent across browsers so currently component is not compatible with screen readers. In the upcoming versions, text fields will be introduced below the slider section to be able to pick a color using accessible text boxes in hsl, rgba and hex formats. Closed State Keyboard Support of Popup ColorPicker Key Function tab Moves focus to the color picker button. space Opens the popup and moves focus to the color slider. Popup Keyboard Support Key Function enter Selects the color and closes the popup. space Selects the color and closes the popup. escape Closes the popup, moves focus to the input. Color Picker Slider Key Function arrow keys Changes color. Hue Slider Key Function up arrow down arrow Changes hue.

## Basic

ColorPicker is used with the v-model property for two-way value binding.

```vue
<ColorPicker v-model="color" />
```

## Disabled

When disabled is present, the element cannot be edited and focused.

```vue
<ColorPicker v-model="color" disabled />
```

## Format

Default color format to use in value binding is hex and other possible values can be rgb and hsb using the format property.

```vue
<ColorPicker v-model="colorHEX" inputId="cp-hex" format="hex" class="mb-4" />
<ColorPicker v-model="colorRGB" inputId="cp-rgb" format="rgb" class="mb-4" />
<ColorPicker v-model="colorHSB" inputId="cp-hsb" format="hsb" class="mb-4" />
```

## Forms

ColorPicker integrates seamlessly with the PrimeVue Forms library.

## Inline

ColorPicker is displayed as a popup by default, add inline property to customize this behavior.

```vue
<ColorPicker v-model="color" inline />
```

## Colorpicker

