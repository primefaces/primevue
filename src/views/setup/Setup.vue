<template>
    <div>
        <div class="content-section documentation">
            <Message severity="warn">This guide is for Vue 3 and PrimeVue 3, visit <a href="https://www.primefaces.org/primevue/showcase-v2">PrimeVue 2.x website</a> if you are using Vue 2.</Message>

            <h1>Setup</h1>
            <p>PrimeVue is a rich set of open source native components for Vue.</p>

            <h5>Video Tutorial</h5>
            <p>Watch the video tutorial that goes through the steps documented on this guide.</p>
            <div class="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/cGTXuyqIwMA" frameborder="0" allowfullscreen></iframe>
            </div>

            <h5>Download</h5>
            <p>PrimeVue is available at <a href="https://www.npmjs.com/package/primevue">npm</a>, if you have an existing application run the following commands to download PrimeVue and PrimeIcons to your project.</p>

<pre v-code.script><code>
npm install primevue@^3.6.2 --save
npm install primeicons --save

</code></pre>

            <h5>Module Loader</h5>
            <p>This is the recommended way if your application uses <a href="https://cli.vuejs.org">Vue CLI</a>, <a href="https://vitejs.dev">Vite</a> or has a webpack based build with <a href="https://github.com/vuejs/vue-loader">vue-loader</a> configured.</p>

            <p>Begin with installing PrimeVue. This command only sets up the core configuration like locale and does not register any component.</p>
<pre v-code.script><code>
import {createApp} from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
const app = createApp(App);

app.use(PrimeVue);

</code></pre>

            <p>Then import and register a component from the library. Import path is available in the documentation of the corresponding component.</p>
<pre v-code.script><code>
import {createApp} from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
const app = createApp(App);

app.use(PrimeVue);

app.component('Dialog', Dialog);

</code></pre>

            <p>Finally you'll be able to utilize the component in your application.</p>
<pre v-code><code>
&lt;Dialog&gt;&lt;/Dialog&gt;

</code></pre>

            <h5>Single File Components</h5>
            <p>SFC files are available in the npm distribution and if you'd like to use SFCs directly, add <i>/sfc</i> as a suffix when referencing an import path. This will instruct your bundler to process the *.vue files
                in your local build instead of using the compiled output. One use case for this approach is optimizing for SSR by removing whitespaces.</p>

<pre v-code.script><code>
import Dialog from 'primevue/dialog/sfc';

</code></pre>

            <h5>Script Tag</h5>
            <p>Other alternative is utilizing the components directly within the browser with the <i>iife</i> build. Note that PrimeVue does not provide a <i>umd</i> build.</p>
<pre v-code><code><template v-pre>
&lt;html&gt;
    &lt;head&gt;
        &lt;meta charset="utf-8"&gt;
        &lt;title&gt;PrimeVue Demo&lt;/title&gt;
        &lt;link href="https://unpkg.com/primevue/resources/themes/saga-blue/theme.css" rel="stylesheet"&gt;
        &lt;link href="https://unpkg.com/primevue/resources/primevue.min.css" rel="stylesheet"&gt;
        &lt;link href="https://unpkg.com/primeicons/primeicons.css" rel="stylesheet"&gt;

        &lt;script src="https://unpkg.com/vue@next"&gt;&lt;/script&gt;
        &lt;script src="https://unpkg.com/primevue/inputtext/inputtext.min.js"&gt;&lt;/script&gt;
    &lt;/head&gt;

    &lt;body&gt;
        &lt;div id="app"&gt;
            &lt;p-inputtext v-model="val"&gt;&lt;/p-inputtext&gt;
            &lt;h6&gt;{{val}}&lt;/h6&gt;
        &lt;/div&gt;

        &lt;script&gt;
            const {createApp, ref} = Vue;

            const App = {
                setup() {
                    const val = ref(null);

                    return {
                        val
                    };
                },
                components: {
                    'p-inputtext': primevue.inputtext
                } 
            };

            createApp(App).mount("#app");
        &lt;/script&gt;
    &lt;/body&gt;
&lt;/html&gt;
</template>
</code></pre>

            <h5>Dependencies</h5>
            <p>Majority of PrimeVue components (95%) are native and there are some exceptions having 3rd party dependencies such as Quill for Editor.</p>
            <p>In addition, components require PrimeIcons library for icons.</p>

            <h6>Mandatory</h6>
<pre v-code.script><code>
dependencies: {
    "vue": "^3.0.0",
    "primeicons": "^4.0.0"
}

</code></pre>

            <h6>Optional</h6>
            <p>Here is the list of components with 3rd party dependencies. Documentation of each component has a dependencies section as well.</p>
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
                            <td>Charts.js 3.3.2+</td>
                        </tr>
                        <tr>
                            <td>Editor</td>
                            <td>Quill.js 1.3.3+</td>
                        </tr>
                        <tr>
                            <td>PrimeFlex</td>
                            <td>DataView</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h5>Styles</h5>
            <p>The css dependencies are as follows, note that you may change the theme with another one of your choice. If you are using a bundler such as webpack with a css loader you
                may import them to your main application component.</p>

<pre v-code.script><code>
primevue/resources/themes/saga-blue/theme.css       //theme
primevue/resources/primevue.min.css                 //core css
primeicons/primeicons.css                           //icons

</code></pre>

            <h5>Free Themes</h5>
            <p>PrimeVue ships with various free themes to choose from.</p>
<pre v-code.css><code>
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
primevue/resources/themes/fluent-light/theme.css
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

</code></pre>

            <h5>PrimeFlex</h5>
            <p>PrimeFlex is a CSS utility library featuring various helpers such as a grid system, flexbox, spacing, elevation and more. Although it is not required, it is highly
                recommended to add PrimeFlex as it is likely to need such utilities when developing applications. View the <router-link to="/primeflex">PrimeFlex</router-link> section for the installation.</p>

            <h5>Ripple</h5>
            <p>Ripple is an optional animation for the supported components such as buttons. It is disabled by default and needs to be enabled at
                your app's entry file (e.g. main.js) during the PrimeVue setup.
            </p>
<pre v-code.script><code>
import {createApp} from 'vue';
import PrimeVue from 'primevue/config';
const app = createApp(App);

app.use(PrimeVue, {ripple: true});

</code></pre>

            <h5>Outlined vs Filled Input Styles</h5>
            <p>Input fields come in two styles, default is <i>outlined</i> with borders around the field whereas <i>filled</i> alternative adds a background color
            to the field. Applying <i>p-input-filled</i> to an ancestor of an input enables the filled style. If you prefer to use filled inputs in the entire application, 
            use a global container such as the document body or the application element to apply the style class. Note that in case you add it to the application element, components that are teleported to the document body such as Dialog
            will not be able to display filled inputs as they are not a descendant of the application root element in the DOM tree, to resolve this case set inputStyle to 'filled' at PrimeVue configuration as well.</p>

<pre v-code.script><code>
import {createApp} from 'vue';
import PrimeVue from 'primevue/config';
const app = createApp(App);

app.use(PrimeVue, {inputStyle: 'filled'});

</code></pre>

            <h5>ZIndex Layering</h5>
            <p>ZIndexes are managed automatically to make sure layering of overlay components work seamlessly when combining multiple components. Still there may be cases where you'd like to configure
            the configure default values such as a custom layout where header section is fixed. In a case like this, dropdown needs to be displayed below the application header but a modal dialog should be displayed above. PrimeVue configuration
            offers the <i>zIndex</i> property to customize the default values for components categories. Default values are described below and can be customized when setting up PrimeVue.</p>
<pre v-code.script><code>
import {createApp} from 'vue';
import PrimeVue from 'primevue/config';
const app = createApp(App);

app.use(PrimeVue, {
    zIndex: {
        modal: 1100,        //dialog, sidebar
        overlay: 1000,      //dropdown, overlaypanel
        menu: 1000,         //overlay menus
        tooltip: 1100       //tooltip
    }
});

</code></pre>
            <h5>Locale</h5>
            <p>PrimeVue provides a Locale API to support i18n and l7n, visit the <router-link to="/locale">Locale</router-link> documentation for more information.</p>

            <h5>Quickstart with Vue CLI</h5>
            <p>An <a href="https://github.com/primefaces/primevue-quickstart">example application</a> based on Vue CLI is available at github.</p>

            <h5>Quickstart with Vite</h5>
            <p>A <a href="https://github.com/primefaces/primevue-quickstart-vite">starter application</a> is also provided for Vite users.</p>

            <h5>Typescript</h5>
            <p>Typescript is fully supported as type definition files are provided in the npm package of PrimeVue. A sample <a href="https://github.com/primefaces/primevue-typescript-quickstart">typescript-primevue</a> application with Vue CLI is available as at github.</p>
            <h5>Browser Support</h5>
            <div class="doc-tablewrapper">
                <table class="doc-table browsers">
                    <thead>
                        <tr>
                            <th>
                                <div class="p-d-flex p-ai-center">
                                    <img src="../../assets/images//browsers/edge.svg" alt="edge" style="width: 1.5rem;" class="p-mr-2">
                                    IE / Edge
                                </div>
                            </th>
                            <th>
                                <div class="p-d-flex p-ai-center">
                                    <img src="../../assets/images/browsers/firefox.svg" alt="firefox" style="width: 1.5rem;" class="p-mr-2">
                                    Firefox
                                </div>
                            </th>
                            <th>
                                <div class="p-d-flex p-ai-center">
                                    <img src="../../assets/images/browsers/chrome.svg" alt="chrome" style="width: 1.5rem;" class="p-mr-2">
                                    Chrome
                                </div>
                            </th>
                            <th>
                                <div class="p-d-flex p-ai-center">
                                    <img src="../../assets/images/browsers/safari.svg" alt="safari" style="width: 1.5rem;" class="p-mr-2">
                                    Safari
                                </div>
                            </th>
                            <th>
                                <div class="p-d-flex p-ai-center">
                                    <img src="../../assets/images/browsers/opera.svg" alt="opera" style="width: 1.5rem;" class="p-mr-2">
                                    Opera
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>IE11, Edge</td>
                            <td>Last 2 versions</td>
                            <td>Last 2 versions</td>
                            <td>Last 2 versions</td>
                            <td>Last 2 versions</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>