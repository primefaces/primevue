<template>
    <DocSectionText v-bind="$attrs">
        <p>A complete example using a PrimeVue DatePicker. You can also view this sample live at <a href="https://stackblitz.com/edit/web-platform-jt1jz4?file=index.html" target="_blank" rel="noopener noreferrer">Stackblitz</a>.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>PrimeVue + CDN</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
  </head>
  <body>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>
    <script src="https://unpkg.com/primevue@4.0.0-beta.4/umd/primevue.min.js"><\/script>
    <script src="https://unpkg.com/primevue@4.0.0-beta.4/umd/themes/aura.min.js"><\/script>

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
            preset: PrimeVue.Themes.Aura
        }
      });

      app.component('p-datepicker', PrimeVue.DatePicker);

      app.mount('#app');
    <\/script>
  </body>
</html>
`
            }
        };
    }
};
</script>
