<template>
    <div>
        <div class="content-section documentation">
            <h1>PrimeFlex (v2.0.0)</h1>
            <p>PrimeFlex is a CSS utility library featuring various helpers such as a grid system, flexbox, spacing, elevation and more. Although it is not required, it is highly
                recommended to add PrimeFlex as it is likely to need such utilities when developing applications with PrimeVue.</p>

            <h5>Download</h5>
            <p>PrimeFlex is available at <a href="https://www.npmjs.com/package/primeflex">npm</a>, if you have an existing application run the following commands to install it.</p>

<pre v-code.script><code>
npm install primeflex@2.0.0 --save

</code></pre>

            <h5>Import</h5>
            <p>Next step is adding the primeflex.css to your application to include all utilities. If you prefer to pick the utilities, move to next step instead.</p>

<pre v-code.css><code>
import 'primeflex/primeflex.css';

</code></pre>

            <p>PrimeFlex is a lightweight library still if you have an application such as one based on vue-cli
                that is able to import scss then you will be able to pick the utilities you need to make the app bundle even smaller.</p>
<pre v-code.css><code>
import 'primeflex/src/_variables.scss';
import 'primeflex/src/_grid.scss';
import 'primeflex/src/_formlayout.scss';
import 'primeflex/src/_display.scss';
import 'primeflex/src/_text.scss';
import 'primeflex/src/flexbox/_flexbox.scss';
import 'primeflex/src/_spacing.scss';
import 'primeflex/src/_elevation.scss';

</code></pre>

            <h5>Variables</h5>
            <div class="doc-tablewrapper">
                <table class="doc-table">
                    <thead>
                        <tr>
                            <th>Variable</th>
                            <th>Description</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>$sm</td>
                            <td>Breakpoint of screens such as phones.</td>
                            <td>576px</td>
                        </tr>
                        <tr>
                            <td>$md</td>
                            <td>Breakpoint of screens such as tablets.</td>
                            <td>768px</td>
                        </tr>
                        <tr>
                            <td>$lg</td>
                            <td>Breakpoint of screens such as notebook monitors.</td>
                            <td>992px</td>
                        </tr>
                        <tr>
                            <td>$xl</td>
                            <td>Breakpoint of smaller screens such as desktop monitors.</td>
                            <td>1200px</td>
                        </tr>
                        <tr>
                            <td>$gutter</td>
                            <td>Padding of a grid column.</td>
                            <td>.5rem</td>
                        </tr>
                        <tr>
                            <td>$fieldMargin</td>
                            <td>Spacing of a field. Can be vertical of horizontal depending on form layout.</td>
                            <td>.5rem</td>
                        </tr>
                        <tr>
                            <td>$fieldLabelMargin</td>
                            <td>Spacing of a field label. Can be vertical of horizontal depending on form layout.</td>
                            <td>.5rem</td>
                        </tr>
                        <tr>
                            <td>$helperTextMargin</td>
                            <td>Top spacing of a helper text.</td>
                            <td>.5rem</td>
                        </tr>
                        <tr>
                            <td>$spacer</td>
                            <td>Base value to use in spacing utilities, view spacing documentation for details.</td>
                            <td>.5rem</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p>There are two ways to use these variables, one option is getting the source code of PrimeFlex from github, compile your own primeflex and importing the css file. Other
                alternative is importing your own variables to override the defaults if your application can import scss files. Example below overrides breakpoints;
            </p>

            <p><b>_overrides.scss</b></p>
<pre v-code.css><code>
$sm:640px;
$md:720px;
$lg:960px;
$xl:1080px;

</code></pre>

            <pre v-code.css><code>
import './assets/_overrides.scss';
import 'primeflex/src/_variables.css';
import 'primeflex/src/_grid.css';
import 'primeflex/src/_formlayout.css';
import 'primeflex/src/_display.css';
import 'primeflex/src/_text.css';
import 'primeflex/src/flexbox/_flexbox.css';
import 'primeflex/src/_spacing.css';
import 'primeflex/src/_elevation.css';

</code></pre>
        </div>
    </div>
</template>