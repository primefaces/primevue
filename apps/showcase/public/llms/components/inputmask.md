# Vue Mask Component

InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone.

## Import

```javascript
import InputMask from 'primevue/inputmask';
```

## Accessibility

Screen Reader InputMask component renders a native input element that implicitly includes any passed prop. Value to describe the component can either be provided via label tag combined with id prop or using aria-labelledby , aria-label props. Keyboard Support Key Function tab Moves focus to the input.

```vue
<label for="date">Date</label>
<InputMask id="date" />

<span id="phone">Phone</span>
<InputMask aria-labelledby="phone" />

<InputMask aria-label="Age" />
```

## Basic

InputMask is used with the v-model property for two-way value binding.

```vue
<InputMask id="basic" v-model="value" mask="99-999999" placeholder="99-999999" />
```

## Disabled

When disabled is present, the element cannot be edited and focused.

```vue
<InputMask mask="99-999999" placeholder="Disabled" disabled />
```

## Filled

Specify the variant property as filled to display the component with a higher visual emphasis than the default outlined style.

```vue
<InputMask id="basic" v-model="value" variant="filled" mask="99-999999" placeholder="99-999999" />
```

## Float Label

FloatLabel visually integrates a label with its form element. Visit FloatLabel documentation for more information.

```vue
<FloatLabel>
    <InputMask id="over_label" v-model="value1" mask="999-99-9999" />
    <label for="over_label">Over Label</label>
</FloatLabel>

<FloatLabel variant="in">
    <InputMask id="in_label" v-model="value2" mask="999-99-9999" variant="filled" />
    <label for="in_label">In Label</label>
</FloatLabel>

<FloatLabel variant="on">
    <InputMask id="on_label" v-model="value3" mask="999-99-9999" />
    <label for="on_label">On Label</label>
</FloatLabel>
```

## Fluid

The fluid prop makes the component take up the full width of its container when set to true.

```vue
<InputMask v-model="value" fluid mask="99-999999" placeholder="99-999999" />
```

## Forms

InputMask integrates seamlessly with the PrimeVue Forms library.

## Ifta Label

IftaLabel is used to create infield top aligned labels. Visit IftaLabel documentation for more information.

```vue
<IftaLabel>
    <InputMask id="ssn" v-model="value" mask="999-99-9999" variant="filled" />
    <label for="ssn">SSN</label>
</IftaLabel>
```

## Invalid

Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries.

```vue
<InputMask v-model="value1" mask="99-999999" placeholder="Serial Key" :invalid="!value1" />
<InputMask v-model="value2" mask="99-999999" placeholder="Serial Key" :invalid="!value2" variant="filled" />
```

## Mask

Mask format can be a combination of the following definitions; a for alphabetic characters, 9 for numeric characters and * for alphanumberic characters. In addition, formatting characters like ( , ) , - are also accepted.

```vue
<div class="flex-auto">
    <label for="ssn" class="font-bold block mb-2">SSN</label>
    <InputMask id="ssn" v-model="value1" mask="999-99-9999" placeholder="999-99-9999" fluid />
</div>

<div class="flex-auto">
    <label for="phone" class="font-bold block mb-2">Phone</label>
    <InputMask id="phone" v-model="value2" mask="(999) 999-9999" placeholder="(999) 999-9999" fluid />
</div>

<div class="flex-auto">
    <label for="serial" class="font-bold block mb-2">Serial</label>
    <InputMask id="serial" v-model="value3" mask="a*-999-a999" placeholder="a*-999-a999" fluid />
</div>
```

## Optional

When the input does not complete the mask definition, it is cleared by default. Use autoClear property to control this behavior. In addition, ? is used to mark anything after the question mark optional.

```vue
<InputMask v-model="value" mask="(999) 999-9999? x99999" placeholder="(999) 999-9999? x99999" />
```

## Sizes

InputMask provides small and large sizes as alternatives to the base.

```vue
<InputMask v-model="value1" placeholder="Small" size="small" mask="99-999999" />
<InputMask v-model="value2" placeholder="Normal" mask="99-999999" />
<InputMask v-model="value3" placeholder="Large" size="large" mask="99-999999" />
```

## SlotChar

Default placeholder for a mask is underscore that can be customized using slotChar property.

```vue
<InputMask id="basic" v-model="value" placeholder="99/99/9999" mask="99/99/9999" slotChar="mm/dd/yyyy" />
```

## Inputmask

