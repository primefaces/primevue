# Install PrimeVue with CND

Setting up PrimeVue in a project using CDN.

## CreateApp

Create an app container element and setup the application using createApp .

```vue
<body>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>

    <div id="app">
    </div>

    <script>
        const { createApp, ref } = Vue;

        const app = createApp({
            setup() {

            }
        });

        app.mount('#app');
    <\/script>
</body>
```

## Example

A complete example using a PrimeVue DatePicker. You can also view this sample live at Stackblitz .

```vue
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>PrimeVue + CDN</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width" />
    </head>
    <body>
        <script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>
        <script src="https://unpkg.com/primevue/umd/primevue.min.js"><\/script>
        <script src="https://unpkg.com/@primeuix/themes/umd/aura.js"><\/script>

        <div id="app">
            <p-datepicker v-model="date"></p-datepicker>
            <br /><br />
            {{ date }}
        </div>

        <script>
            const { createApp, ref } = Vue;

            const app = createApp({
                setup() {
                const date = ref();

                return {
                    date
                };
                },
            });

            app.use(PrimeVue.Config, {
                theme: {
                    preset: PrimeUIX.Themes.Aura
                }
            });

            app.component('p-datepicker', PrimeVue.DatePicker);

            app.mount('#app');
        <\/script>
    </body>
</html>
```

## Plugin

PrimeVue plugin is required to be installed as an application plugin to set up the default configuration .

```vue
app.use(PrimeVue.Config);
```

## Script

You can use PrimeVue and Vue.js from a CDN with a script tag. This approach does not involve any build step, and is suitable for enhancing static HTML. This guide uses unpkg however other providers such as jsdeliver and cdnjs can also be used.

```vue
https://unpkg.com/vue@3/dist/vue.global.js https://unpkg.com/primevue/umd/primevue.min.js https://unpkg.com/@primeuix/themes/umd/aura.js // see theming for alternatives
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
