# configuration



## Import

```javascript
import PrimeVue from 'primevue/config';
const app = createApp(App);

app.use(PrimeVue, { /* options */ });
```

## InputVariant

Input fields come in two styles, default is outlined with borders around the field whereas filled alternative adds a background color to the field. Applying p-variant-filled to an ancestor of an input enables the filled style. If you prefer to use filled inputs in the entire application, use a global container such as the document body or the application element to apply the style class. Note that in case you add it to the application element, components that are teleported to the document body such as Dialog will not be able to display filled inputs as they are not a descendant of the application root element in the DOM tree, to resolve this case set inputVariant to filled at PrimeVue configuration as well.

```vue
import {createApp} from "vue";
import PrimeVue from "primevue/config";
const app = createApp(App);

app.use(PrimeVue, { inputVariant: "filled" });
```

## Pass Through

Defines the shared pass through properties per component type. Visit the Pass Through Props documentation for more information.

## Pass Through Options

Used to configure the ptOptions properties of components and the usePassThrough method. The mergeSections defines whether the sections from the main configuration gets added and the mergeProps controls whether to override or merge the defined props. Defaults are true for mergeSections and false for mergeProps .

## Ripple

Ripple is an optional animation for the supported components such as buttons. It is disabled by default and needs to be enabled at your app's entry file (e.g. main.js) during the PrimeVue setup.

```vue
import { createApp } from "vue";
import PrimeVue from "primevue/config";
const app = createApp(App);

app.use(PrimeVue, { ripple: true });
```

## Theme

Style mode offers theming based on a design token based architecture. See the styled mode documentation for details such as building your own theme.

## Unstyled

Unstyled mode instructs the components not to add any built-in style classes so that they can be styled using custom css or libraries like Tailwind and Bootstrap. Visit Unstyled mode documentation for more information.

```vue
import { createApp } from "vue";
import PrimeVue from "primevue/config";
const app = createApp(App);

app.use(PrimeVue, { unstyled: true });
```

## ZIndex

ZIndexes are managed automatically to make sure layering of overlay components work seamlessly when combining multiple components. Still there may be cases where you'd like to configure the configure default values such as a custom layout where header section is fixed. In a case like this, dropdown needs to be displayed below the application header but a modal dialog should be displayed above. PrimeVue configuration offers the zIndex property to customize the default values for components categories. Default values are described below and can be customized when setting up PrimeVue.

