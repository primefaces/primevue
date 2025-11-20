# cdn



## CreateApp

Create an app container element and setup the application using createApp .

## Example

A complete example using a PrimeVue DatePicker. You can also view this sample live at Stackblitz .

## Plugin

PrimeVue plugin is required to be installed as an application plugin to set up the default configuration .

```vue
app.use(PrimeVue.Config);
```

## Script

You can use PrimeVue and Vue.js from a CDN with a script tag. This approach does not involve any build step, and is suitable for enhancing static HTML. This guide uses unpkg however other providers such as jsdeliver and cdnjs can also be used.

```vue
https://unpkg.com/vue@3/dist/vue.global.js
https://unpkg.com/primevue/umd/primevue.min.js
https://unpkg.com/@primeuix/themes/umd/aura.js  // see theming for alternatives
```

## Theming

Include the theme preset via a script element after adding PrimeVue, valid options are Aura, Lara, Nora and Material.

```vue
<!-- <script src="https://unpkg.com/@primeuix/themes/umd/{preset}.js"><\/script> -->

<script src="https://unpkg.com/@primeuix/themes/umd/aura.js"><\/script>
<script src="https://unpkg.com/@primeuix/themes/umd/lara.js"><\/script>
<script src="https://unpkg.com/@primeuix/themes/umd/nora.js"><\/script>
<script src="https://unpkg.com/@primeuix/themes/umd/material.js"><\/script>
```

