# Vue Ifta Label

IftaLabel is used to create infield top aligned labels

## Import

```javascript
import IftaLabel from 'primevue/iftalabel';
```

## Accessibility

Screen Reader IftaLabel does not require any roles and attributes. Keyboard Support Component does not include any interactive elements.

## Basic

IftaLabel is used by wrapping the input and its label.

```vue
<IftaLabel>
    <InputText id="username" v-model="value" />
    <label for="username">Username</label>
</IftaLabel>
```

## Invalid

When the form element is invalid, the label is also highlighted.

```vue
<IftaLabel>
    <InputText id="username" v-model="value" :invalid="!value" />
    <label for="username">Username</label>
</IftaLabel>
```

## Iftalabel

