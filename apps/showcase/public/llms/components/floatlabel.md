# Vue Float Label

FloatLabel visually integrates a label with its form element.

## Import

```javascript
import FloatLabel from 'primevue/floatlabel';
```

## Accessibility

Screen Reader FloatLabel does not require any roles and attributes. Keyboard Support Component does not include any interactive elements.

## Basic

FloatLabel is used by wrapping the input and its label.

```vue
<FloatLabel>
    <InputText id="username" v-model="value" />
    <label for="username">Username</label>
</FloatLabel>
```

## Invalid

When the form element is invalid, the label is also highlighted.

```vue
<FloatLabel>
    <InputText id="value1" v-model="value1" :invalid="!value1" />
    <label for="value1">Username</label>
</FloatLabel>

<FloatLabel variant="in">
    <InputText id="value2" v-model="value2" :invalid="!value2" />
    <label for="value2">Username</label>
</FloatLabel>

<FloatLabel variant="on">
    <InputText id="value3" v-model="value3" :invalid="!value3" />
    <label for="value3">Username</label>
</FloatLabel>
```

## Variants

The variant property defines the position of the label. Default value is over , whereas in and on are the alternatives.

```vue
<FloatLabel variant="in">
    <InputText id="in_label" v-model="value1" autocomplete="off" />
    <label for="in_label">In Label</label>
</FloatLabel>

<FloatLabel variant="on">
    <InputText id="on_label" v-model="value2" autocomplete="off" />
    <label for="on_label">On Label</label>
</FloatLabel>
```

## Floatlabel

