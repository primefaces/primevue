<template>
    <div>
        <div class="content-section documentation">
            <h1>Setup</h1>
            <p>PrimeVue is a rich set of open source native components for Vue.</p>

            <h5>Download</h5>
            <p>PrimeVue is available at <a href="https://www.npmjs.com/package/primevue">npm</a>, if you have an existing application run the following commands to download PrimeVue and PrimeIcons to your project.</p>

<CodeHighlight lang="js">
npm install primevue --save
npm install primeicons --save
</CodeHighlight>

            <h5>PrimeFlex</h5>
            <p>PrimeFlex is a CSS utility library featuring various helpers such as a grid system, flexbox, spacing, elevation and more. Although it is not required, it is highly
                recommended to add PrimeFlex as it is likely to need such utilities when developing applications. View the <router-link to="/primeflex">PrimeFlex</router-link> section for the installation.</p>

            <h5>Module Loader</h5>
            <p>This is the recommended way if your application uses <a href="https://cli.vuejs.org/">vue-cli</a> or has a webpack based build with <a href="https://github.com/vuejs/vue-loader">vue-loader</a> configured.
            Import the components as .vue files for seamless integration within your project where path of each component is available at the "import" section of a component documentation.</p>

<CodeHighlight lang="js">
//import ComponentName from 'primevue/componentname';

import Dialog from 'primevue/dialog';
</CodeHighlight>

            <p>In the next step, register the component with the tag name you'd like to use.</p>
<CodeHighlight lang="js">
Vue.component('Dialog', Dialog);
</CodeHighlight>

            <p>Then you'll be able to utilize the component in your application.</p>
<CodeHighlight>
&lt;Dialog&gt;&lt;/Dialog&gt;
</CodeHighlight>

            <h5>Script Tag</h5>
            <p>Other alternative is utilizing the components directly within the browser with UMD packages.</p>
<CodeHighlight>
&lt;meta charset="utf-8"&gt;
&lt;title&gt;calendar demo&lt;/title&gt;
&lt;link href="https://unpkg.com/primevue/resources/themes/saga-blue/theme.css " rel="stylesheet"&gt;
&lt;link href="https://unpkg.com/primevue/resources/primevue.min.css " rel="stylesheet"&gt;
&lt;link href="https://unpkg.com/primeicons/primeicons.css " rel="stylesheet"&gt;
&lt;script src="https://unpkg.com/vue"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue/components/calendar/calendar.umd.min.js"&gt;&lt;/script&gt;

&lt;div id="app"&gt;
  &lt;p-calendar&gt;&lt;/p-calendar&gt;
&lt;/div&gt;

&lt;script&gt;
new Vue({
  components: {
    'p-calendar': calendar
  }
}).$mount('#app')
&lt;/script&gt;
</CodeHighlight>

            <h5>Dependencies</h5>
            <p>Majority of PrimeVue components (95%) are native and there are some exceptions having 3rd party dependencies such as Quill for Editor.</p>
            <p>In addition, components require PrimeIcons library for icons.</p>

<CodeHighlight lang="js">
dependencies: {
    "vue": "^2.6.10",
    "primeicons": "^4.0.0"
}
</CodeHighlight>

            <p>Here is the list of components with 3rd party dependencies.</p>
            <div class="doc-tablewrapper">
                <table class="doc-table">
                    <thead>
                        <tr>
                            <th>Component</th>
                            <th>Dependency</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Charts</td>
                            <td>Charts.js 2.1.x+</td>
                        </tr>
                        <tr>
                            <td>Editor</td>
                            <td>Quill.js 1.3.3+</td>
                        </tr>
                        <tr>
                            <td>FullCalendar</td>
                            <td>FullCalendar 4.0.2+.</td>
                        </tr>
                        <tr>
                            <td>PrimeFlex</td>
                            <td>DataView</td>
                        </tr>
                        <tr>
                            <td>Mitt</td>
                            <td>Toast and Terminal</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h5>Styles</h5>
            <p>The css dependencies are as follows, note that you may change the theme with another one of your choice. If you are using a bundler such as webpack with a css loader you
                may import them to your main application component.</p>

<CodeHighlight lang="js">
primevue/resources/themes/saga-blue/theme.css       //theme
primevue/resources/primevue.min.css                 //core css
primeicons/primeicons.css                           //icons
</CodeHighlight>

            <h5>Free Themes</h5>
            <p>PrimeVue ships with 32 free themes to choose from.</p>
<CodeHighlight lang="css">
primevue/resources/themes/bootstrap4-light-blue/theme.css
primevue/resources/themes/bootstrap4-light-purple/theme.css
primevue/resources/themes/bootstrap4-dark-blue/theme.css
primevue/resources/themes/bootstrap4-dark-purple/theme.css
primevue/resources/themes/md-light-indigo/theme.css
primevue/resources/themes/md-light-deeppurple/theme.css
primevue/resources/themes/md-dark-indigo/theme.css
primevue/resources/themes/md-dark-deeppurple/theme.css
primevue/resources/themes/mdc-light-indigo/theme.css
primevue/resources/themes/mdc-light-deeppurple/theme.css
primevue/resources/themes/mdc-dark-indigo/theme.css
primevue/resources/themes/mdc-dark-deeppurple/theme.css
primevue/resources/themes/saga-blue/theme.css
primevue/resources/themes/saga-green/theme.css
primevue/resources/themes/saga-orange/theme.css
primevue/resources/themes/saga-purple/theme.css
primevue/resources/themes/vela-blue/theme.css
primevue/resources/themes/vela-green/theme.css
primevue/resources/themes/vela-orange/theme.css
primevue/resources/themes/vela-purple/theme.css
primevue/resources/themes/arya-blue/theme.css
primevue/resources/themes/arya-green/theme.css
primevue/resources/themes/arya-orange/theme.css
primevue/resources/themes/arya-purple/theme.css
primevue/resources/themes/nova/theme.css
primevue/resources/themes/nova-alt/theme.css
primevue/resources/themes/nova-accent/theme.css
primevue/resources/themes/nova-vue/theme.css
primevue/resources/themes/luna-amber/theme.css
primevue/resources/themes/luna-blue/theme.css
primevue/resources/themes/luna-green/theme.css
primevue/resources/themes/luna-pink/theme.css
primevue/resources/themes/rhea/theme.css
</CodeHighlight>

            <h5>Ripple</h5>
            <p>Ripple is an optional animation for the supported components such as buttons. It is disabled by default and needs to be enabled at
                your app's entry file (e.g. main.js) using the <i>$primevue</i> instance variable.
            </p>
<CodeHighlight class="language-javascript">
Vue.prototype.$primevue = {ripple: true};
</CodeHighlight>

            <h5>Quickstart</h5>
            <p>An <a href="https://github.com/primefaces/primevue-quickstart">example application</a> based on vue-cli is available at github.</p>

            <h5>Typescript</h5>
            <p>Typescript is fully supported as type definition files are provided in the npm package of PrimeVue. A sample <a href="https://github.com/primefaces/primevue-typescript-quickstart">typescript-primevue</a> application is available as well at github.</p>

            <h5>Nuxt.js Integration</h5>
            <p>PrimeVue can easily be added to a Nuxt.js with the following steps.</p>
            <p><strong>1)</strong> Add primevue.js to the plugins folder with the components you'd like to use.</p>
<CodeHighlight class="language-javascript">
import Vue from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

Vue.use(ToastService);

Vue.component('InputText', InputText);
Vue.component('Button', Button);
Vue.component('Toast', Toast);
</CodeHighlight>

            <p><strong>2)</strong> Add requires CSS dependencies and the plugin configuration in nuxt.config.js.</p>
<CodeHighlight class="language-javascript">
css: [
    {src: 'primevue/resources/primevue.min.css'},
    {src: 'primevue/resources/themes/saga-blue/theme.css'},
    {src: 'primeicons/primeicons.css'},
  ],
plugins: [
    {src:'~/plugins/primevue.js', mode: 'client'}
]
</CodeHighlight>

            <p>That is all, for a complete example please refer to the <a href="https://github.com/primefaces/primevue-nuxtjs-quickstart">primevue-nuxtjs-quickstart</a> sample.</p>

        </div>
    </div>
</template>