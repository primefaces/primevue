
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/primevue.svg)](https://badge.fury.io/js/primevue)

[![PrimeVue Hero](https://www.primefaces.org/wp-content/uploads/2020/03/primevue-github-02032020.jpg "PrimeVue Hero")](https://www.primefaces.org/primevue)

# PrimeVue

[![PrimeVue Logo](https://www.primefaces.org/wp-content/uploads/2019/05/primevue-logo-200.png "PrimeVue")](https://www.primefaces.org/primevue)

PrimeVue is available at npm, if you have an existing application run the following commands to download PrimeVue and PrimeIcons to your project.

```js
npm install primevue --save
npm install primeicons --save
```

### Module Loader
This is the recommended way if your application uses [vue-cli](https://cli.vuejs.org/) or has a webpack based build with [vue-loader](https://github.com/vuejs/vue-loader) configured. Import the components as .vue files for seamless integration within your project where path of each component is available at the "import" section of a component documentation.

```js
//import {ComponentName} from 'primevue/{componentname}';

import Dialog from 'primevue/dialog';
```
In the next step, register the component with the tag name you'd like to use.
```js
Vue.component('Dialog', Dialog);
```
Then you'll be able to utilize the component in your application.
```html
<Dialog></Dialog>
```

### Script Tag
Other alternative is utilizing the components directly within the browser with UMD packages.
```html
<meta charset="utf-8">
<title>calendar demo</title>
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/primevue/components/calendar/calendar.umd.js"></script>

<div id="app">
  <p-calendar></p-calendar>
</div>

<script>
new Vue({
  components: {
    'p-calendar': calendar
  }
}).$mount('#app')
</script>
```

### Dependencies
Majority of PrimeVue components (95%) are native and there are some exceptions having 3rd party dependencies such as Quill for Editor.

In addition, components require PrimeIcons library for icons.
```js
dependencies: {
    "vue": "^2.6.10",
    "primeicons": "^2.0.0"
}
```

Here is the list of components with 3rd party dependencies.

Component | Dependency
--- | ---
Charts | Charts.js 2.1.x+
Editor | Quill.js 1.3.3+
FullCalendar | FullCalendar 4.0.2+
PrimeFlex | DataView


### Styles
The css dependencies are as follows, note that you may change the theme with another one of your choice. If you are using a bundler such as webpack with a css loader you may import them to your main application component.

```javascript
primevue/resources/themes/nova-light/theme.css      //theme
primevue/resources/primevue.min.css                 //core css
primeicons/primeicons.css                           //icons
```

### Quickstart
An example application based on vue-cli is available at [GitHub](https://github.com/primefaces/primevue-quickstart).
