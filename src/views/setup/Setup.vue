<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Setup</h1>
                <p>PrimeVue is a rich set of open source native components for Vue.</p>
            </div>
        </div>

        <div class="content-section documentation">
            <h3 style="margin:0">Download</h3>
            <p>PrimeVue is available at npm, if you have an existing application run the following commands to download PrimeVue and PrimeIcons to your project.</p>

<CodeHighlight lang="js">
npm install primevue --save
npm install primeicons --save
</CodeHighlight>

            <h3>Module Loader</h3>
            <p>This is the recommended way if your application uses <a href="https://cli.vuejs.org/">vue-cli</a> or has a webpack based build with <a href="https://github.com/vuejs/vue-loader">vue-loader</a> configured.
            Import the components as .vue files for seamless integration within your project where path of each component is available at the "import" section of a component documentation.</p>

<CodeHighlight lang="js">
//import {ComponentName} from 'primevue/{componentname}';

import {Dialog} from 'primevue/dialog';
</CodeHighlight>

            <p>In the next step, register the component with the tag name you'd like to use.</p>
<CodeHighlight lang="js">
Vue.component('Dialog', Dialog);
</CodeHighlight>

            <p>Then you'll be able to utilize the component in your application.</p>
<CodeHighlight>
&lt;Dialog&gt;&lt;/Dialog&gt;
</CodeHighlight>

            <h3>Script Tag</h3>
            <p>Other alternative is utilizing the components directly within the browser with UMD packages.</p>
<CodeHighlight>
&lt;meta charset="utf-8"&gt;
&lt;title&gt;calendar demo&lt;/title&gt;
&lt;link href="https://unpkg.com/primevue/resources/themes/nova-light/theme.css " rel="stylesheet"&gt;
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

            <h3>Dependencies</h3>
            <p>Majority of PrimeVue components (95%) are native and there are some exceptions having 3rd party dependencies such as Quill for Editor.</p>
            <p>In addition, components require PrimeIcons library for icons.</p>

<CodeHighlight lang="js">
dependencies: {
    "vue": "^2.6.10",
    "primeicons": "^1.0.0"
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
                    </tbody>
                </table>
            </div>

            <h3>Styles</h3>
            <p>The css dependencies are as follows, note that you may change the theme with another one of your choice. If you are using a bundler such as webpack with a css loader you
                may import them to your main application component.</p>

<CodeHighlight class="language-javascript">
primevue/resources/themes/nova-light/theme.css      //theme
primevue/resources/primevue.min.css                 //shared css
primeicons/primeicons.css                           //icons
</CodeHighlight>

            <h3>Quickstart</h3>
            <p>An <a href="https://github.com/primefaces/primevue-quickstart">example application</a> based on vue-cli is available at github.</p>

            <h3>Typescript</h3>
            <p>Typescript is fully supported as type definition files are provided in the npm package of PrimeVue. A sample <a href="https://github.com/primefaces/primevue-typescript-quickstart">typescript-primevue</a> application is available as well at github.</p>

            <h3>Nuxt.js Integration</h3>
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
    {src: 'primevue/resources/themes/nova-light/theme.css'},
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

<script>