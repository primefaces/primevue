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

            <h3>Import</h3>
            <p>Path of each component is available at the "import" section of a component documentation.</p>

<CodeHighlight lang="js">
{`
//import {ComponentName} from 'primevue/{componentname}';
import {Dialog} from 'primevue/dialog';
import {Accordion,AccordionTab} from 'primevue/accordion';

`}
</CodeHighlight>
        
            <h3>Dependencies</h3>
            <p>Majority of PrimeVue components (95%) are native and there are some exceptions having 3rd party dependencies such as Google Maps for GMap.</p>
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
                            <td>DataView and MegaMenu components.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
                
            <h3>Styles</h3>
            <p>The css dependencies are as follows, note that you may change the theme with another one of your choice. If you are using a bundler such as webpack with a css loader you 
                may import them to your main application component.</p>
            
<CodeHighlight class="language-javascript">
primevue/resources/themes/nova-light/theme.css
primevue/resources/primevue.min.css
primeicons/primeicons.css
</CodeHighlight>

            <h3>Quickstart</h3>
            <p>An example application based on vue-cli is available at <a href="https://github.com/primefaces/primevue-quickstart">github</a>.</p>
            
        </div>        
    </div>
</template>

<script>