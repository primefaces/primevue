# Styled Mode

Choose from a variety of pre-styled themes or develop your own.

## Architecture

PrimeVue is a design agnostic library so unlike some other UI libraries it does not enforce a certain styling such as material design. Styling is decoupled from the components using the themes instead. A theme consists of two parts; base and preset . The base is the style rules with CSS variables as placeholders whereas the preset is a set of design tokens to feed a base by mapping the tokens to CSS variables. A base may be configured with different presets, currently Aura, Material, Lara and Nora are the available built-in options. The core of the styled mode architecture is based on a concept named design token , a preset defines the token configuration in 3 tiers; primitive , semantic and component . Primitive Tokens Primitive tokens have no context, a color palette is a good example for a primitive token such as blue-50 to blue-900 . A token named blue-500 may be used as the primary color, the background of a message however on its own, the name of the token does not indicate context. Usually they are utilized by the semantic tokens. Semantic Tokens Semantic tokens define content and their names indicate where they are utilized, a well known example of a semantic token is the primary.color . Semantic tokens map to primitive tokens or other semantic tokens. The colorScheme token group is a special variable to define tokens based on the color scheme active in the application, this allows defining different tokens based on the color scheme like dark mode. Component Tokens Component tokens are isolated tokens per component such as inputtext.background or button.color that map to the semantic tokens. As an example, button.background component token maps to the primary.color semantic token which maps to the green.500 primitive token. Best Practices Use primitive tokens when defining the core color palette and semantic tokens to specify the common design elements such as focus ring, primary colors and surfaces. Components tokens should only be used when customizing a specific component. By defining your own design tokens as a custom preset, you'll be able to define your own style without touching CSS. Overriding the PrimeVue components using style classes is not a best practice and should be the last resort, design tokens are the suggested approach. Video Tutorial Watch the PrimeVue Theming Demystified series to learn more about the architecture with examples.

## C S S Modules

CSS modules are supported by enabling the module property on a style element within your SFC. Use the $style keyword to apply classes to a PrimeVue component. It is recommend to enable cssLayer when using CSS modules so that the PrimeVue styles have low CSS specificity.

## Colors

Color palette of a preset is defined by the primitive design token group. You can access colors using CSS variables or the $dt utility.

## Dark Mode

PrimeVue uses the system as the default darkModeSelector in theme configuration. If you have a dark mode switch in your application, set the darkModeSelector to the selector you utilize such as .my-app-dark so that PrimeVue can fit in seamlessly with your color scheme. Following is a very basic example implementation of a dark mode switch, you may extend it further by involving prefers-color-scheme to retrieve it from the system initially and use localStorage to make it stateful. See this article for more information. In case you prefer to use dark mode all the time, apply the darkModeSelector initially and never change it. It is also possible to disable dark mode completely using false or none as the value of the selector.

## Presets

Aura, Material, Lara and Nora are the available built-in options, created to demonstrate the power of the design-agnostic theming. Aura is PrimeTek's own vision, Material follows Google Material Design v2, Lara is based on Bootstrap and Nora is inspired by enterprise applications. Visit the source code to learn more about the structure of presets. You may use them out of the box with modifications or utilize them as reference in case you need to build your own presets from scratch.

## Reserved Keys

Following keys are reserved in the preset scheme and cannot be used as a token name; primitive , semantic , components , directives , colorscheme , light , dark , common , root , states , and extend .

## Scale

PrimeVue UI component use rem units, 1rem equals to the font size of the html element which is 16px by default. Use the root font-size to adjust the size of the components globally. This website uses 14px as the base so it may differ from your application if your base font size is different.

```vue
html { font-size: 14px; }
```

## Scoped Tokens

Design tokens can be scoped to a certain component using the dt property. In this example, first switch uses the global tokens whereas second one overrides the global with its own tokens. This approach is recommended over the :deep() as it offers a cleaner API while avoiding the hassle of CSS rule overrides.

## Options

The options property defines the how the CSS would be generated from the design tokens of the preset. prefix The prefix of the CSS variables, defaults to p . For instance, the primary.color design token would be var(--p-primary-color) . darkModeSelector The CSS rule to encapsulate the CSS variables of the dark mode, the default is the system to generate @media (prefers-color-scheme: dark) . If you need to make the dark mode toggleable based on the user selection define a class selector such as .app-dark and toggle this class at the document root. See the dark mode toggle section for an example. cssLayer Defines whether the styles should be defined inside a CSS layer by default or not. A CSS layer would be handy to declare a custom cascade layer for easier customization if necessary. The default is false .

## Theme

The theme property is used to customize the initial theme.

```vue
import PrimeVue from 'primevue/config'; import Aura from '@primeuix/themes/aura'; const app = createApp(App); app.use(PrimeVue, { // Default theme configuration theme: { preset: Aura, options: { prefix: 'p', darkModeSelector: 'system', cssLayer:
false } } });
```

## Libraries

Example layer configuration for the popular CSS libraries.

## Reset

In case PrimeVue components have visual issues in your application, a Reset CSS may be the culprit. CSS layers would be an efficient solution that involves enabling the PrimeVue layer, wrapping the Reset CSS in another layer and defining the layer order. This way, your Reset CSS does not get in the way of PrimeVue components.

```vue
/* Order */ @layer reset, primevue; /* Reset CSS */ @layer reset { button, input { /* CSS to Reset */ } }
```

## Specificity

The &#64;layer is a standard CSS feature to define cascade layers for a customizable order of precedence. If you need to become more familiar with layers, visit the documentation at MDN to begin with. The cssLayer is disabled by default, when it is enabled at theme configuration, PrimeVue wraps the built-in style classes under the primevue cascade layer to make the library styles easy to override. CSS in your app without a layer has the highest CSS specificity, so you'll be able to override styles regardless of the location or how strong a class is written. Layers also make it easier to use CSS Modules, view the CSS Modules guide for examples.

## Color Scheme

A token can be defined per color scheme using light and dark properties of the colorScheme property. Each token can have specific values based on the current color scheme. Common Pitfall When customizing an existing preset, your token overrides may be ignored if you don't properly account for color scheme variations. If the original preset defines a token using the colorScheme property, but your customization only provides a direct value, your override will be ignored because the colorScheme property takes precedence over direct values and the system will continue using the preset's scheme-specific values. When customizing tokens that are not defined with colorScheme in the original preset, your customizations will be applied successfully regardless of how you structure them; whether direct or under colorScheme. Best Practices Check how tokens are defined in the preset before customizing from the source . Always maintain the same structure (direct value or colorScheme) as the original preset. Consider both light and dark mode values when overriding scheme-dependent tokens. This approach ensures your customizations will be applied correctly regardless of the user's selected color scheme.

## Component

The design tokens of a specific component is defined at components layer. Overriding components tokens is not the recommended approach if you are building your own style, building your own preset should be preferred instead. This configuration is global and applies to all card components, in case you need to customize a particular component on a page locally, view the Scoped CSS section for an example.

```vue
const MyPreset = definePreset(Aura, { components: { card: { colorScheme: { light: { root: { background: '{surface.0}', color: '{surface.700}' }, subtitle: { color: '{surface.500}' } }, dark: { root: { background: '{surface.900}', color: '{surface.0}'
}, subtitle: { color: '{surface.400}' } } } } } });
```

## Define Preset

The definePreset utility is used to customize an existing preset during the PrimeVue setup. The first parameter is the preset to customize and the second is the design tokens to override.

```vue
import PrimeVue from 'primevue/config'; import { definePreset } from '@primeuix/themes'; import Aura from '@primeuix/themes/aura'; const MyPreset = definePreset(Aura, { //Your customizations, see the following sections for examples });
app.use(PrimeVue, { theme: { preset: MyPreset } });
```

## Extend

The theming system can be extended by adding custom design tokens and additional styles. This feature provides a high degree of customization, allowing you to adjust styles according to your needs, as you are not limited to the default tokens. The example preset configuration adds a new accent button with custom button.accent.color and button.accent.inverse.color tokens. It is also possible to add tokens globally to share them within the components.

```vue
const MyPreset = definePreset(Aura, { components: { // custom button tokens and additional style button: { extend: { accent: { color: '#f59e0b', inverseColor: '#ffffff' } } css: ({ dt }) => \` .p-button-accent { background:
\${dt('button.accent.color')}; color: \${dt('button.accent.inverse.color')}; transition-duration: \${dt('my.transition.fast')}; } \` } }, // common tokens and styles extend: { my: { transition: { slow: '0.75s' normal: '0.5s' fast: '0.25s' },
imageDisplay: 'block' } }, css: ({ dt }) => \` /* Global CSS */ img { display: \${dt('my.image.display')}; } \` });
```

## Focus Ring

Focus ring defines the outline width, style, color and offset. Let's use a thicker ring with the primary color for the outline.

```vue
const MyPreset = definePreset(Aura, { semantic: { focusRing: { width: '2px', style: 'dashed', color: '{primary.color}', offset: '1px' } } });
```

## Font

There is no design for fonts as UI components inherit their font settings from the application.

## Forms

The design tokens of the form input components are derived from the form.field token group. This customization example changes border color to primary on hover. Any component that depends on this semantic token such as dropdown.hover.border.color and textarea.hover.border.color would receive the change.

```vue
const MyPreset = definePreset(Aura, { semantic: { colorScheme: { light: { formField: { hoverBorderColor: '{primary.color}' } }, dark: { formField: { hoverBorderColor: '{primary.color}' } } } } });
```

## Noir

The noir mode is the nickname of a variant that uses surface tones as the primary and requires and additional colorScheme configuration to implement. A sample preset configuration with black and white variants as the primary color;

```vue
const Noir = definePreset(Aura, { semantic: { primary: { 50: '{zinc.50}', 100: '{zinc.100}', 200: '{zinc.200}', 300: '{zinc.300}', 400: '{zinc.400}', 500: '{zinc.500}', 600: '{zinc.600}', 700: '{zinc.700}', 800: '{zinc.800}', 900: '{zinc.900}', 950:
'{zinc.950}' }, colorScheme: { light: { primary: { color: '{zinc.950}', inverseColor: '#ffffff', hoverColor: '{zinc.900}', activeColor: '{zinc.800}' }, highlight: { background: '{zinc.950}', focusBackground: '{zinc.700}', color: '#ffffff',
focusColor: '#ffffff' } }, dark: { primary: { color: '{zinc.50}', inverseColor: '{zinc.950}', hoverColor: '{zinc.100}', activeColor: '{zinc.200}' }, highlight: { background: 'rgba(250, 250, 250, .16)', focusBackground: 'rgba(250, 250, 250, .24)',
color: 'rgba(255,255,255,.87)', focusColor: 'rgba(255,255,255,.87)' } } } } });
```

## Primary

The primary defines the main color palette, default value maps to the emerald primitive token. Let's setup to use indigo instead.

```vue
const MyPreset = definePreset(Aura, { semantic: { primary: { 50: '{indigo.50}', 100: '{indigo.100}', 200: '{indigo.200}', 300: '{indigo.300}', 400: '{indigo.400}', 500: '{indigo.500}', 600: '{indigo.600}', 700: '{indigo.700}', 800: '{indigo.800}',
900: '{indigo.900}', 950: '{indigo.950}' } } });
```

## Surface

The color scheme palette that varies between light and dark modes is specified with the surface tokens. Example below uses zinc for light mode and slategray for dark mode. With this setting, light mode, would have a grayscale tone and dark mode would include bluish tone.

```vue
const MyPreset = definePreset(Aura, { semantic: { colorScheme: { light: { surface: { 0: '#ffffff', 50: '{zinc.50}', 100: '{zinc.100}', 200: '{zinc.200}', 300: '{zinc.300}', 400: '{zinc.400}', 500: '{zinc.500}', 600: '{zinc.600}', 700: '{zinc.700}',
800: '{zinc.800}', 900: '{zinc.900}', 950: '{zinc.950}' } }, dark: { surface: { 0: '#ffffff', 50: '{slate.50}', 100: '{slate.100}', 200: '{slate.200}', 300: '{slate.300}', 400: '{slate.400}', 500: '{slate.500}', 600: '{slate.600}', 700:
'{slate.700}', 800: '{slate.800}', 900: '{slate.900}', 950: '{slate.950}' } } } } });
```

## D T

The $dt function returns the information about a token like the full path and value. This would be useful if you need to access tokens programmatically.

```vue
import { $dt } from '@primeuix/themes'; const duration = $dt('transition.duration'); /* duration: { name: '--transition-duration', variable: 'var(--p-transition-duration)', value: '0.2s' } */ const primaryColor = $dt('primary.color'); /*
primaryColor: { name: '--primary-color', variable: 'var(--p-primary-color)', value: { light: { value: '#10b981', paths: { name: 'semantic.primary.color', binding: { name: 'primitive.emerald.500' } } }, dark: { value: '#34d399', paths: { name:
'semantic.primary.color', binding: { name: 'primitive.emerald.400' } } } } } */
```

## Palette

Returns shades and tints of a given color from 50 to 950 as an object.

```vue
import { palette } from '@primeuix/themes'; // custom color const values1 = palette('#10b981'); // copy an existing token set const primaryColor = palette('{blue}');
```

## Update Preset

Merges the provided tokens to the current preset, an example would be changing the primary color palette dynamically.

```vue
import { updatePreset } from '@primeuix/themes'; const changePrimaryColor() { updatePreset({ semantic: { primary: { 50: '{indigo.50}', 100: '{indigo.100}', 200: '{indigo.200}', 300: '{indigo.300}', 400: '{indigo.400}', 500: '{indigo.500}', 600:
'{indigo.600}', 700: '{indigo.700}', 800: '{indigo.800}', 900: '{indigo.900}', 950: '{indigo.950}' } } }) }
```

## Update Primary Palette

Updates the primary colors, this is a shorthand to do the same update using updatePreset .

```vue
import { updatePrimaryPalette } from '@primeuix/themes'; const changePrimaryColor() { updatePrimaryPalette({ 50: '{indigo.50}', 100: '{indigo.100}', 200: '{indigo.200}', 300: '{indigo.300}', 400: '{indigo.400}', 500: '{indigo.500}', 600:
'{indigo.600}', 700: '{indigo.700}', 800: '{indigo.800}', 900: '{indigo.900}', 950: '{indigo.950}' }); }
```

## Update Surface Palette

Updates the surface colors, this is a shorthand to do the same update using updatePreset .

```vue
import { updateSurfacePalette } from '@primeuix/themes'; const changeSurfaces() { //changes surfaces both in light and dark mode updateSurfacePalette({ 50: '{zinc.50}', // ... 950: '{zinc.950}' }); } const changeLightSurfaces() { //changes surfaces
only in light updateSurfacePalette({ light: { 50: '{zinc.50}', // ... 950: '{zinc.950}' } }); } const changeDarkSurfaces() { //changes surfaces only in dark mode updateSurfacePalette({ dark: { 50: '{zinc.50}', // ... 950: '{zinc.950}' } }); }
```

## Use Preset

Replaces the current presets entirely, common use case is changing the preset dynamically at runtime.

```vue
import { usePreset } from '@primeuix/themes'; const onButtonClick() { usePreset(MyPreset); }
```
