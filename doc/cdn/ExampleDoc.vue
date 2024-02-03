<template>
    <DocSectionText v-bind="$attrs">
        <p>A complete example using a PrimeVue DatePicker. You can also view this sample live at <a href="https://stackblitz.com/edit/web-platform-xceybs?file=index.html" target="_blank" rel="noopener noreferrer">Stackblitz</a>.</p>
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
    <link rel="stylesheet" href="https://unpkg.com/primevue/resources/themes/lara-light-green/theme.css" />
  </head>
  <body>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>
    <script src="https://unpkg.com/primevue/core/core.min.js"><\/script>
    <script src="https://unpkg.com/primevue/calendar/calendar.min.js"><\/script>

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
            date,
          };
        },
      });

      app.use(primevue.config.default);
      app.component('p-datepicker', primevue.calendar);

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
