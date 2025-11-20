# Vue Input Component

InputText is an extension to standard input element with theming.

## Import

```javascript
import InputText from 'primevue/inputtext';
```

## Accessibility

Screen Reader InputText component renders a native input element that implicitly includes any passed prop. Value to describe the component can either be provided via label tag combined with id prop or using aria-labelledby , aria-label props. Keyboard Support Key Function tab Moves focus to the input.

```vue
<label for="firstname">Firstname</label>
<InputText id="firstname" />

<span id="lastname">Lastname</span>
<InputText aria-labelledby="lastname" />

<InputText aria-label="Age"/>
```

## Basic

InputText is used with the v-model property for two-way value binding.

```vue
<InputText type="text" v-model="value" />
```

## Disabled

When disabled is present, the element cannot be edited and focused.

```vue
<InputText v-model="value" disabled placeholder="Disabled" />
```

## Filled

Specify the variant property as filled to display the component with a higher visual emphasis than the default outlined style.

```vue
<InputText type="text" v-model="value" variant="filled" />
```

## Float Label

FloatLabel visually integrates a label with its form element. Visit FloatLabel documentation for more information.

```vue
<FloatLabel>
    <InputText id="over_label" v-model="value1" />
    <label for="over_label">Over Label</label>
</FloatLabel>

<FloatLabel variant="in">
    <InputText id="in_label" v-model="value2" variant="filled" />
    <label for="in_label">In Label</label>
</FloatLabel>

<FloatLabel variant="on">
    <InputText id="on_label" v-model="value3" />
    <label for="on_label">On Label</label>
</FloatLabel>
```

## Fluid

The fluid prop makes the component take up the full width of its container when set to true.

```vue
<InputText type="text" v-model="value" fluid />
```

## Forms

InputText integrates seamlessly with the PrimeVue Forms library.

## Help Text

An advisory text can be defined with the Message component.

```vue
<div class="flex flex-col gap-2">
    <label for="username">Username</label>
    <InputText id="username" v-model="value" aria-describedby="username-help" />
    <Message size="small" severity="secondary" variant="simple">Enter your username to reset your password.</Message>
</div>
```

## Ifta Label

IftaLabel is used to create infield top aligned labels. Visit IftaLabel documentation for more information.

```vue
<IftaLabel>
    <InputText id="username" v-model="value" variant="filled" />
    <label for="username">Username</label>
</IftaLabel>
```

## Invalid

Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries.

```vue
<InputText v-model="value1" :invalid="!value1" placeholder="Name" />
<InputText v-model="value2" :invalid="!value2" variant="filled" placeholder="Name" />
```

## Sizes

InputText provides small and large sizes as alternatives to the base.

```vue
<InputText v-model="value1" type="text" size="small" placeholder="Small" />
<InputText v-model="value2" type="text" placeholder="Normal" />
<InputText v-model="value3" type="text" size="large" placeholder="Large" />
```

## Inputtext

