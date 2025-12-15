# Vue Slider Component

Slider is a component to provide input with a drag handle.

## Import

```javascript
import Slider from 'primevue/slider';
```

## Accessibility

Screen Reader Slider element component uses slider role on the handle in addition to the aria-orientation , aria-valuemin , aria-valuemax and aria-valuenow attributes. Value to describe the component can be defined using aria-labelledby and aria-label props. Keyboard Support Key Function tab Moves focus to the slider. left arrow up arrow Decrements the value. right arrow down arrow Increments the value. home Set the minimum value. end Set the maximum value. page up Increments the value by 10 steps. page down Decrements the value by 10 steps.

```vue
<span id="label_number">Number</span>
<Slider aria-labelledby="label_number" />

<Slider aria-label="Number" />
```

## Basic

Slider is used with the v-model property for two-way value binding.

```vue
<Slider v-model="value" class="w-56" />
```

## Filter

Image filter implementation using multiple sliders.

```vue
<img alt="user header" class="w-full md:w-80 rounded mb-6" src="https://primefaces.org/cdn/primevue/images/card-vue.jpg" :style="filterStyle" />
<SelectButton v-model="filter" :options="filterOptions" optionLabel="label" optionValue="value" class="mb-4" />
<Slider v-model="filterValues[filter]" class="w-56" :min="0" :max="200" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-col items-center justify-center">
        <img alt="user header" class="w-full md:w-80 rounded mb-6" src="https://primefaces.org/cdn/primevue/images/card-vue.jpg" :style="filterStyle" />
        <SelectButton v-model="filter" :options="filterOptions" optionLabel="label" optionValue="value" class="mb-4" />
        <Slider v-model="filterValues[filter]" class="w-56" :min="0" :max="200" />
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const filter = ref(0);
const filterValues = ref([100, 100, 0]);
const filterOptions = ref([
    { label: 'Contrast', value: 0 },
    { label: 'Brightness', value: 1 },
    { label: 'Sepia', value: 2 }
]);
const filterStyle = computed(() => {
    return {
        filter: \`contrast(\${filterValues.value[0]}%) brightness(\${filterValues.value[1]}%) sepia(\${filterValues.value[2]}%)\`
    };
})
<\/script>
```

</details>

## Forms

Slider integrates seamlessly with the PrimeVue Forms library.

```vue
<Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
    <div class="flex flex-col gap-4">
        <Slider name="slider" />
        <Message v-if="$form.slider?.invalid" severity="error" size="small" variant="simple">{{ $form.slider.error?.message }}</Message>
    </div>
    <Button type="submit" severity="secondary" label="Submit" />
</Form>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
            <div class="flex flex-col gap-4">
                <Slider name="slider" />
                <Message v-if="$form.slider?.invalid" severity="error" size="small" variant="simple">{{ $form.slider.error?.message }}</Message>
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
    slider: 0
});
const resolver = ref(zodResolver(
    z.object({
        slider: z.number().gt(25, { message: 'Must be greater than 25.' }).lt(75, { message: 'Must be less than 75.' })
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

## Input

Slider is connected to an input field using two-way binding.

```vue
<InputText v-model.number="value" />
<Slider v-model="value" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <div class="w-56">
            <InputText v-model.number="value" class="w-full mb-4" />
            <Slider v-model="value" class="w-full" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(50);
<\/script>
```

</details>

## Range

When range property is present, slider provides two handles to define two values. In range mode, value should be an array instead of a single value.

```vue
<Slider v-model="value" range class="w-56" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Slider v-model="value" range class="w-56" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref([20, 80]);
<\/script>
```

</details>

## Step

Size of each movement is defined with the step property.

```vue
<Slider v-model="value" :step="20" class="w-56" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Slider v-model="value" :step="20" class="w-56" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(20);
<\/script>
```

</details>

## Vertical

Default layout of slider is horizontal , use orientation property for the alternative vertical mode.

```vue
<Slider v-model="value" orientation="vertical" class="h-56" />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Slider v-model="value" orientation="vertical" class="h-56" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(50);
<\/script>
```

</details>

## Slider

### Props

| Name           | Type                                     | Default    | Description                                                                                                     |
| -------------- | ---------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------- |
| modelValue     | number \| number[]                       | -          | Value of the component.                                                                                         |
| defaultValue   | number \| number[]                       | -          | The default value for the input when not controlled by `modelValue` .                                           |
| name           | string                                   | -          | The name attribute for the element, typically used in form submissions.                                         |
| min            | number                                   | 0          | Mininum boundary value.                                                                                         |
| max            | number                                   | 100        | Maximum boundary value.                                                                                         |
| orientation    | HintedString<"horizontal" \| "vertical"> | horizontal | Orientation of the slider.                                                                                      |
| step           | number                                   | 1          | Step factor to increment/decrement the value.                                                                   |
| range          | boolean                                  | false      | When speficed, allows two boundary values to be picked.                                                         |
| invalid        | boolean                                  | false      | When present, it specifies that the component should have invalid state style.                                  |
| disabled       | boolean                                  | false      | When present, it specifies that the component should be disabled.                                               |
| tabindex       | number                                   | -          | Index of the element in tabbing order.                                                                          |
| ariaLabelledby | string                                   | -          | Establishes relationships between the component and label(s) where its value should be one or more element IDs. |
| ariaLabel      | string                                   | -          | Used to define a string that labels the element.                                                                |
| formControl    | Record<string, any>                      | -          | Form control object, typically used for handling validation and form state.                                     |
| dt             | any                                      | -          | It generates scoped CSS variables using design tokens for the component.                                        |
| pt             | PassThrough<SliderPassThroughOptions>    | -          | Used to pass attributes to DOM elements inside the component.                                                   |
| ptOptions      | any                                      | -          | Used to configure passthrough(pt) options of the component.                                                     |
| unstyled       | boolean                                  | false      | When enabled, it removes component related styles in the core.                                                  |

## Pass Through Options

| Name         | Type                        | Description                                                 |
| ------------ | --------------------------- | ----------------------------------------------------------- |
| root         | SliderPassThroughOptionType | Used to pass attributes to the root's DOM element.          |
| range        | SliderPassThroughOptionType | Used to pass attributes to the range's DOM element.         |
| handle       | SliderPassThroughOptionType | Used to pass attributes to the handle's DOM element.        |
| startHandler | SliderPassThroughOptionType | Used to pass attributes to the start handler's DOM element. |
| endHandler   | SliderPassThroughOptionType | Used to pass attributes to the end handler's DOM element.   |
| hooks        | any                         | Used to manage all lifecycle hooks.                         |

## Theming

### CSS Classes

| Class           | Description                      |
| --------------- | -------------------------------- |
| p-slider        | Class name of the root element   |
| p-slider-range  | Class name of the range element  |
| p-slider-handle | Class name of the handle element |

### Design Tokens

| Token                                  | CSS Variable                               | Description                        |
| -------------------------------------- | ------------------------------------------ | ---------------------------------- |
| slider.transition.duration             | --p-slider-transition-duration             | Transition duration of root        |
| slider.track.background                | --p-slider-track-background                | Background of track                |
| slider.track.border.radius             | --p-slider-track-border-radius             | Border radius of track             |
| slider.track.size                      | --p-slider-track-size                      | Size of track                      |
| slider.range.background                | --p-slider-range-background                | Background of range                |
| slider.handle.width                    | --p-slider-handle-width                    | Width of handle                    |
| slider.handle.height                   | --p-slider-handle-height                   | Height of handle                   |
| slider.handle.border.radius            | --p-slider-handle-border-radius            | Border radius of handle            |
| slider.handle.background               | --p-slider-handle-background               | Background of handle               |
| slider.handle.hover.background         | --p-slider-handle-hover-background         | Hover background of handle         |
| slider.handle.content.border.radius    | --p-slider-handle-content-border-radius    | Content border radius of handle    |
| slider.handle.content.background       | --p-slider-handle-content-background       | Background of handle               |
| slider.handle.content.hover.background | --p-slider-handle-content-hover-background | Content hover background of handle |
| slider.handle.content.width            | --p-slider-handle-content-width            | Content width of handle            |
| slider.handle.content.height           | --p-slider-handle-content-height           | Content height of handle           |
| slider.handle.content.shadow           | --p-slider-handle-content-shadow           | Content shadow of handle           |
| slider.handle.focus.ring.width         | --p-slider-handle-focus-ring-width         | Focus ring width of handle         |
| slider.handle.focus.ring.style         | --p-slider-handle-focus-ring-style         | Focus ring style of handle         |
| slider.handle.focus.ring.color         | --p-slider-handle-focus-ring-color         | Focus ring color of handle         |
| slider.handle.focus.ring.offset        | --p-slider-handle-focus-ring-offset        | Focus ring offset of handle        |
| slider.handle.focus.ring.shadow        | --p-slider-handle-focus-ring-shadow        | Focus ring shadow of handle        |
