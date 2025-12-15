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

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <ColorPicker v-model="color" disabled />
    </div>
</template>

<script setup>
import { ref } from "vue";

const color = ref();
<\/script>
```

</details>

## Format

Default color format to use in value binding is hex and other possible values can be rgb and hsb using the format property.

```vue
<ColorPicker v-model="colorHEX" inputId="cp-hex" format="hex" class="mb-4" />
<ColorPicker v-model="colorRGB" inputId="cp-rgb" format="rgb" class="mb-4" />
<ColorPicker v-model="colorHSB" inputId="cp-hsb" format="hsb" class="mb-4" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap gap-4">
        <div class="flex-1 flex flex-col items-center">
            <label for="cp-hex" class="font-bold block mb-2"> HEX </label>
            <ColorPicker v-model="colorHEX" inputId="cp-hex" format="hex" class="mb-4" />
            <span>{{ colorHEX }}</span>
        </div>
        <div class="flex-1 flex flex-col items-center">
            <label for="cp-rgb" class="font-bold block mb-2"> RGB </label>
            <ColorPicker v-model="colorRGB" inputId="cp-rgb" format="rgb" class="mb-4" />
            <span>{{ JSON.stringify(colorRGB) }}</span>
        </div>
        <div class="flex-1 flex flex-col items-center">
            <label for="cp-hsb" class="font-bold block mb-2"> HSB </label>
            <ColorPicker v-model="colorHSB" inputId="cp-hsb" format="hsb" class="mb-4" />
            <span>{{ JSON.stringify(colorHSB) }}</span>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const colorHEX = ref('6466f1');
const colorRGB = ref({ r: 100, g: 102, b: 241 });
const colorHSB = ref({ h: 239, s: 59, b: 95 });
<\/script>
```

</details>

## Forms

ColorPicker integrates seamlessly with the PrimeVue Forms library.

```vue
<Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4">
    <div class="flex flex-col items-center gap-2">
        <ColorPicker name="color" />
        <Message v-if="$form.color?.invalid" severity="error" size="small" variant="simple">{{ $form.color.error?.message }}</Message>
    </div>
    <Button type="submit" severity="secondary" label="Submit" />
</Form>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4">
            <div class="flex flex-col items-center gap-2">
                <ColorPicker name="color" />
                <Message v-if="$form.color?.invalid" severity="error" size="small" variant="simple">{{ $form.color.error?.message }}</Message>
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { useToast } from "primevue/usetoast";
import { z } from 'zod';

const toast = useToast();
const initialValues = ref({
    color: null
});
const resolver = ref(zodResolver(
    z.object({
        color: z.union([z.string(), z.literal(null)]).refine((value) => value !== null, { message: 'Color is required.' })
    })
));

const onFormSubmit = ({ valid }) => {
    if (valid) {
        toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
    }
};
<\/script>
```

</details>

## Inline

ColorPicker is displayed as a popup by default, add inline property to customize this behavior.

```vue
<ColorPicker v-model="color" inline />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <ColorPicker v-model="color" inline />
    </div>
</template>

<script setup>
import { ref } from "vue";

const color = ref();
<\/script>
```

</details>

## Color Picker

### Props

| Name         | Type                                          | Default | Description                                                                                                                                                           |
| ------------ | --------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| modelValue   | any                                           | -       | Value of the component.                                                                                                                                               |
| defaultColor | any                                           | ff0000  | Initial color to display when value is not defined.                                                                                                                   |
| defaultValue | any                                           | -       | The default value for the input when not controlled by `modelValue` .                                                                                                 |
| name         | string                                        | -       | The name attribute for the element, typically used in form submissions.                                                                                               |
| inline       | boolean                                       | false   | Whether to display as an overlay or not.                                                                                                                              |
| format       | HintedString<"hex" \| "rgb" \| "hsb">         | hex     | Format to use in value binding, supported formats are 'hex', 'rgb' and 'hsb'.                                                                                         |
| invalid      | boolean                                       | false   | When present, it specifies that the component should have invalid state style.                                                                                        |
| disabled     | boolean                                       | false   | When present, it specifies that the component should be disabled.                                                                                                     |
| tabindex     | string                                        | -       | Index of the element in tabbing order.                                                                                                                                |
| autoZIndex   | boolean                                       | true    | Whether to automatically manage layering.                                                                                                                             |
| baseZIndex   | number                                        | 0       | Base zIndex value to use in layering.                                                                                                                                 |
| inputId      | string                                        | -       | Identifier of the focus input to match a label defined for the dropdown.                                                                                              |
| panelClass   | any                                           | -       | Style class of the overlay panel.                                                                                                                                     |
| overlayClass | any                                           | -       | Style class of the overlay panel.                                                                                                                                     |
| appendTo     | HTMLElement \| HintedString<"body" \| "self"> | body    | A valid query selector or an HTMLElement to specify where the overlay gets attached. Special keywords are 'body' for document body and 'self' for the element itself. |
| formControl  | Record<string, any>                           | -       | Form control object, typically used for handling validation and form state.                                                                                           |
| dt           | any                                           | -       | It generates scoped CSS variables using design tokens for the component.                                                                                              |
| pt           | PassThrough<ColorPickerPassThroughOptions>    | -       | Used to pass attributes to DOM elements inside the component.                                                                                                         |
| ptOptions    | any                                           | -       | Used to configure passthrough(pt) options of the component.                                                                                                           |
| unstyled     | boolean                                       | false   | When enabled, it removes component related styles in the core.                                                                                                        |

## Pass Through Options

| Name            | Type                                 | Description                                                    |
| --------------- | ------------------------------------ | -------------------------------------------------------------- |
| root            | ColorPickerPassThroughOptionType     | Used to pass attributes to the root's DOM element.             |
| preview         | ColorPickerPassThroughOptionType     | Used to pass attributes to the preview's DOM element.          |
| overlay         | ColorPickerPassThroughOptionType     | Used to pass attributes to the panel's DOM element.            |
| content         | ColorPickerPassThroughOptionType     | Used to pass attributes to the content's DOM element.          |
| colorSelector   | ColorPickerPassThroughOptionType     | Used to pass attributes to the color selector's DOM element.   |
| colorBackground | ColorPickerPassThroughOptionType     | Used to pass attributes to the color background's DOM element. |
| colorHandle     | ColorPickerPassThroughOptionType     | Used to pass attributes to the color handler's DOM element.    |
| hue             | ColorPickerPassThroughOptionType     | Used to pass attributes to the hue's DOM element.              |
| hueHandle       | ColorPickerPassThroughOptionType     | Used to pass attributes to the hue handler's DOM element.      |
| hooks           | any                                  | Used to manage all lifecycle hooks.                            |
| transition      | ColorPickerPassThroughTransitionType | Used to control Vue Transition API.                            |

## Theming

### CSS Classes

| Class                          | Description                                |
| ------------------------------ | ------------------------------------------ |
| p-colorpicker                  | Class name of the root element             |
| p-colorpicker-preview          | Class name of the preview element          |
| p-colorpicker-panel            | Class name of the panel element            |
| p-colorpicker-color-selector   | Class name of the color selector element   |
| p-colorpicker-color-background | Class name of the color background element |
| p-colorpicker-color-handle     | Class name of the color handle element     |
| p-colorpicker-hue              | Class name of the hue element              |
| p-colorpicker-hue-handle       | Class name of the hue handle element       |

### Design Tokens

| Token                                 | CSS Variable                              | Description                  |
| ------------------------------------- | ----------------------------------------- | ---------------------------- |
| colorpicker.transition.duration       | --p-colorpicker-transition-duration       | Transition duration of root  |
| colorpicker.preview.width             | --p-colorpicker-preview-width             | Width of preview             |
| colorpicker.preview.height            | --p-colorpicker-preview-height            | Height of preview            |
| colorpicker.preview.border.radius     | --p-colorpicker-preview-border-radius     | Border radius of preview     |
| colorpicker.preview.focus.ring.width  | --p-colorpicker-preview-focus-ring-width  | Focus ring width of preview  |
| colorpicker.preview.focus.ring.style  | --p-colorpicker-preview-focus-ring-style  | Focus ring style of preview  |
| colorpicker.preview.focus.ring.color  | --p-colorpicker-preview-focus-ring-color  | Focus ring color of preview  |
| colorpicker.preview.focus.ring.offset | --p-colorpicker-preview-focus-ring-offset | Focus ring offset of preview |
| colorpicker.preview.focus.ring.shadow | --p-colorpicker-preview-focus-ring-shadow | Focus ring shadow of preview |
| colorpicker.panel.shadow              | --p-colorpicker-panel-shadow              | Shadow of panel              |
| colorpicker.panel.border.radius       | --p-colorpicker-panel-border-radius       | Border radius of panel       |
| colorpicker.panel.background          | --p-colorpicker-panel-background          | Background of panel          |
| colorpicker.panel.border.color        | --p-colorpicker-panel-border-color        | Border color of panel        |
| colorpicker.handle.color              | --p-colorpicker-handle-color              | Color of handle              |
