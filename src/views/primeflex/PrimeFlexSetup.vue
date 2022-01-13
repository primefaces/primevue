<template>
    <div>
        <div class="content-section documentation">
            <h1>PrimeFlex (v3.0.0)</h1>
            <p>PrimeFlex is a CSS utility library featuring various helpers such as a grid system, flexbox, spacing, elevation and more. Although it is not required, it is highly
                recommended to add PrimeFlex as it is likely to need such utilities when developing applications with PrimeVue.</p>

            <h5>Download</h5>
            <p>PrimeFlex is available at <a href="https://www.npmjs.com/package/primeflex">npm</a>, if you have an existing application run the following commands to install it.</p>

<pre v-code.script><code>
npm install primeflex --save

</code></pre>

            <h5>Import via Module</h5>
            <p>Next step is adding the primeflex.css to your application to include all utilities. If you prefer to pick the utilities, move to next step instead.</p>

<pre v-code.css><code>
import 'primeflex/primeflex.css';

</code></pre>

            <h5>Import via CDN</h5>
<pre v-code.script><code>
&lt;link href="https://unpkg.com/primeflex@^3/primeflex.min.css" rel="stylesheet" /&gt;

</code></pre>

            <p>PrimeFlex is a lightweight library still if you have an application such as one based on vue-cli
                that is able to import scss then you will be able to pick the utilities you need to make the app bundle even smaller.</p>
<pre v-code.css><code>
import 'primeflex/src/_animations.scss';
import 'primeflex/src/_border.scss';
import 'primeflex/src/_borderradius.scss';
import 'primeflex/src/_colors.scss';
import 'primeflex/src/_display.scss';
import 'primeflex/src/_elevation.scss';
import 'primeflex/src/_flexbox.scss';
import 'primeflex/src/_formlayout.scss';
import 'primeflex/src/_grid.scss';
import 'primeflex/src/_image.scss';
import 'primeflex/src/_liststyle.scss';
import 'primeflex/src/_misc.scss';
import 'primeflex/src/_mixins.scss';
import 'primeflex/src/_overflow.scss';
import 'primeflex/src/_padding.scss';
import 'primeflex/src/_position.scss';
import 'primeflex/src/_size.scss';
import 'primeflex/src/_spacing.scss';
import 'primeflex/src/_transform.scss';
import 'primeflex/src/_transition.scss';
import 'primeflex/src/_typography.scss';
import 'primeflex/src/_userselect.scss';
import 'primeflex/src/_utils.scss';
import 'primeflex/src/_variables.scss';
import 'primeflex/src/_zindex.scss';

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
                            <td>1rem</td>
                        </tr>
                        <tr>
                            <td>$fieldLabelMargin</td>
                            <td>Spacing of a field label. Can be vertical of horizontal depending on form layout.</td>
                            <td>.5rem</td>
                        </tr>
                        <tr>
                            <td>$helperTextMargin</td>
                            <td>Top spacing of a helper text.</td>
                            <td>.25rem</td>
                        </tr>
                        <tr>
                            <td>$spacer</td>
                            <td>Base value to use in spacing utilities, view spacing documentation for details.</td>
                            <td>1rem</td>
                        </tr>
                        <tr>
                            <td>$separator</td>
                            <td>Separator between responsive breakpoints like <i>md:</i> and pseudo classes like <i>hover:</i></td>
                            <td>:</td>
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
import 'primeflex/src/_flexbox.css';
import 'primeflex/src/_spacing.css';
import 'primeflex/src/_elevation.css';

</code></pre>

            <h5>Production Size</h5>
            <p>When using a utility CSS library like PrimeFlex, it is likely to use only a set of classes from the library leaving the rest of the library as unused. To avoid including
                the unused part from your application, it is strongly recommended to use a tool like <a href="https://purgecss.com/">PurgeCSS</a> that analyzes your code and generates an optimized primeflex file that only contains the utilities you've used.</p>

            <h5>VSCode Extension</h5>
            <p>The official PrimeFlex extension for <a href="https://marketplace.visualstudio.com/items?itemName=yigitfindikli.primeflexsnippets">VSCode</a> provides code completion and snippets support for the classes. Search for "PrimeFlex" at VSCode marketplace to download and install the extension.</p>
        </div>
    </div>
</template>