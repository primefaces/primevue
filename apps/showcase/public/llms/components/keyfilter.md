# Vue KeyFilter Component

A keyfilter is a directive used to block individual keystrokes based on a pattern.

## Import

```javascript
import KeyFilter from 'primevue/keyfilter';

app.directive('keyfilter', KeyFilter);
```

## Accessibility

KeyFilter is a directive and do not require any accessibility features.

## Presets

KeyFilter provides various presets configured with the v-keyfilter directive.

```vue
<InputText v-keyfilter.int />
<InputText v-keyfilter.num />
<InputText v-keyfilter.money />
<InputText v-keyfilter.hex />
<InputText v-keyfilter.alpha />
<InputText v-keyfilter.alphanum />
```

## Regex (Single Keypress)

In addition to the presets, a regular expression can be configured for customization of blocking a single key press.

```vue
<InputText v-model="spacekey" v-keyfilter="/[^\s]/" />
<InputText v-model="chars" v-keyfilter="/^[^<>*!]+$/" />
```

## Regex (Whole Word)

In addition to the presets, a regular expression can be used to validate the entire word using validateOnly option.

```vue
<InputText v-model="text" v-keyfilter="{ pattern: /^[+]?(\d{1,12})?$/, validateOnly: true }" />
```

## Keyfilter

