# Vue RadioButton Component

RadioButton is an extension to standard radio button element with theming.

## Import

```javascript
import RadioButton from 'primevue/radiobutton';
import RadioButtonGroup from 'primevue/radiobuttongroup';
```

## Accessibility

Screen Reader RadioButton component uses a hidden native radio button element internally that is only visible to screen readers. Value to describe the component can either be provided via label tag combined with id prop or using aria-labelledby , aria-label props. Keyboard Support Key Function tab Moves focus to the checked radio button, if there is none within the group then first radio button receives the focus. left arrow up arrow Moves focus to the previous radio button, if there is none then last radio button receives the focus. right arrow down arrow Moves focus to the next radio button, if there is none then first radio button receives the focus. space If the focused radio button is unchecked, changes the state to checked.

```vue
<label for="rb1">One</label>
<RadioButton inputId="rb1" />

<span id="rb2">Two</span>
<RadioButton aria-labelledby="rb2" />

<RadioButton aria-label="Three" />
```

## Disabled

When disabled is present, the element cannot be edited and focused.

```vue
<RadioButton v-model="value" :value="1" disabled />
<RadioButton v-model="value" :value="2" disabled />
```

## Dynamic

RadioButtons can be generated using a list of values.

## Filled

Specify the variant property as filled to display the component with a higher visual emphasis than the default outlined style.

```vue
<RadioButton v-model="value" value="1" variant="filled" />
```

## Forms

RadioButton integrates seamlessly with the PrimeVue Forms library.

## Group

RadioButton is used with the v-model property for two-way value binding.

```vue
<div class="flex flex-wrap gap-4">
    <div class="flex items-center gap-2">
        <RadioButton v-model="ingredient" inputId="ingredient1" name="pizza" value="Cheese" />
        <label for="ingredient1">Cheese</label>
    </div>
    <div class="flex items-center gap-2">
        <RadioButton v-model="ingredient" inputId="ingredient2" name="pizza" value="Mushroom" />
        <label for="ingredient2">Mushroom</label>
    </div>
    <div class="flex items-center gap-2">
        <RadioButton v-model="ingredient" inputId="ingredient3" name="pizza" value="Pepper" />
        <label for="ingredient3">Pepper</label>
    </div>
    <div class="flex items-center gap-2">
        <RadioButton v-model="ingredient" inputId="ingredient4" name="pizza" value="Onion" />
        <label for="ingredient4">Onion</label>
    </div>
</div>
```

## Invalid

Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries.

```vue
<RadioButton v-model="value" value="1" :invalid="value === null" />
```

## Sizes

RadioButton provides small and large sizes as alternatives to the base.

```vue
<div class="flex flex-wrap gap-4">
    <div class="flex items-center gap-2">
        <RadioButton v-model="size" inputId="size_small" name="size" value="Small" size="small" />
        <label for="size_small" class="text-sm">Small</label>
    </div>
    <div class="flex items-center gap-2">
        <RadioButton v-model="size" inputId="size_normal" name="size" value="Normal" />
        <label for="size_normal">Normal</label>
    </div>
    <div class="flex items-center gap-2">
        <RadioButton v-model="size" inputId="size_large" name="size" value="Large" size="large" />
        <label for="size_large" class="text-lg">Large</label>
    </div>
</div>
```

## Radiobutton

## Radiobutton

## Radiobuttongroup

## Radiobuttongroup

