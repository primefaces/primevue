<template>
    <AppDoc name="StyleClassDemo" :sources="sources" github="styleclass/StyleClassDemo.vue">
        <h5>Import via Module</h5>
<pre v-code.script><code>
import StyleClass from 'primevue/styleclass';

app.directive('styleclass', StyleClass);

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/styleclass/styleclass.min.js"&gt;&lt;/script&gt;

</code></pre>

        <h5>Getting Started</h5>
        <p>StyleClass has two modes, <i>toggleClass</i> to simply add-remove a class and enter/leave animations.</p>

        <p><b>ToggleClass</b></p>
<pre v-code><code>
&lt;Button label="Toggle p-disabled" v-styleclass="{ selector: '@next', toggleClass: 'p-disabled' }" /&gt;
&lt;InputText class="block mt-3" /&gt;

</code></pre>

        <p><b>Enter/Leave Animation</b></p>
<pre v-code><code>
&lt;Button label="Show" class="mr-2" v-styleclass="{ selector: '.box', enterClass: 'hidden', enterActiveClass: 'my-fadein' }" /&gt;
&lt;Button label="Hide" v-styleclass="{ selector: '.box', leaveActiveClass: 'my-fadeout', leaveToClass: 'hidden' }" /&gt;
&lt;div class="box hidden"&gt;Content&lt;/div&gt;

</code></pre>

        <h5>Target</h5>
        <p>Target element is defined with the <i>v-styleclass</i> attribute that can either be a valid css query or one of the keywords below.</p>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>@next</td>
                        <td>Next element.</td>
                    </tr>
                    <tr>
                        <td>@prev</td>
                        <td>Previous element.</td>
                    </tr>
                    <tr>
                        <td>@parent</td>
                        <td>Parent element.</td>
                    </tr>
                    <tr>
                        <td>@grandparent</td>
                        <td>Parent element of the parent.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5>Properties</h5>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>selector</td>
                        <td>string</td>
                        <td>selector</td>
                        <td>Selector to define the target element.</td>
                    </tr>
                    <tr>
                        <td>enterClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Class to add when item begins to get displayed.</td>
                    </tr>
                    <tr>
                        <td>enterActiveClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Class to add during enter animation.</td>
                    </tr>
                    <tr>
                        <td>enterToClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Class to add when enter animation is completed.</td>
                    </tr>
                    <tr>
                        <td>leaveClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Class to add when item begins to get hidden.</td>
                    </tr>
                    <tr>
                        <td>leaveActiveClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Class to add during leave animation</td>
                    </tr>
                    <tr>
                        <td>leaveToClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Class to add when leave animation is completed.</td>
                    </tr>
                    <tr>
                        <td>hideOnOutsideClick</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Whether to trigger leave animation when outside of the element is clicked.</td>
                    </tr>
                    <tr>
                        <td>toggleClass</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Adds or removes a class when no enter-leave animation is required.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5>Events</h5>
        <p>Directive has no events.</p>

        <h5>Dependencies</h5>
        <p>None.</p>
    </AppDoc>
</template>

<script>
export default {
    data() {
        return {
            sources: {
                'options-api': {
                    tabName: 'Options API Source',
                    content: `
<template>
    <div>
        <h5>Toggle Class</h5>
        <Button label="Toggle p-disabled" v-styleclass="{ selector: '@next', toggleClass: 'p-disabled' }" />
        <InputText class="block mt-3" />

        <h5>Animations</h5>
        <Button label="Show" class="mr-2" v-styleclass="{ selector: '.box', enterClass: 'hidden', enterActiveClass: 'my-fadein' }" />
        <Button label="Hide" v-styleclass="{ selector: '.box', leaveActiveClass: 'my-fadeout', leaveToClass: 'hidden' }" />
        <div class="box hidden">Content</div>
    </div>    
</template>

<style lang="scss" scoped>
.box {
    background-color: var(--green-500);
    color: #ffffff;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 4px;
    margin-top: 1rem;
    font-weight: bold;
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
}

@keyframes my-fadein {
    0%   { opacity: 0; }
    100% { opacity: 1; }
}

@keyframes my-fadeout {
    0%   { opacity: 1; }
    100% { opacity: 0; }
}

.my-fadein {
    animation: my-fadein 150ms linear;
}
        
.my-fadeout {
    animation: my-fadeout 150ms linear;
}
</style>

`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <h5>Toggle Class</h5>
        <Button label="Toggle p-disabled" v-styleclass="{ selector: '@next', toggleClass: 'p-disabled' }" />
        <InputText class="block mt-3" />

        <h5>Animations</h5>
        <Button label="Show" class="mr-2" v-styleclass="{ selector: '.box', enterClass: 'hidden', enterActiveClass: 'my-fadein' }" />
        <Button label="Hide" v-styleclass="{ selector: '.box', leaveActiveClass: 'my-fadeout', leaveToClass: 'hidden' }" />
        <div class="box hidden">Content</div>
    </div>
</template>

<style lang="scss" scoped>
.box {
    background-color: var(--green-500);
    color: #ffffff;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 4px;
    margin-top: 1rem;
    font-weight: bold;
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
}

@keyframes my-fadein {
    0%   { opacity: 0; }
    100% { opacity: 1; }
}

@keyframes my-fadeout {
    0%   { opacity: 1; }
    100% { opacity: 0; }
}

.my-fadein {
    animation: my-fadein 150ms linear;
}
        
.my-fadeout {
    animation: my-fadeout 150ms linear;
}
</style>

`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/styleclass/styleclass.min.js"><\\/script>`,
                    content: `<div id="app">
            <h5>Toggle Class</h5>
            <p-button label="Toggle p-disabled" v-styleclass="{ selector: '@next', toggleClass: 'p-disabled' }"></p-button>
            <p-inputtext class="block mt-3"></p-inputtext>

            <h5>Animations</h5>
            <p-button label="Show" class="mr-2" v-styleclass="{ selector: '.box', enterClass: 'hidden', enterActiveClass: 'my-fadein' }"></p-button>
            <p-button label="Hide" v-styleclass="{ selector: '.box', leaveActiveClass: 'my-fadeout', leaveToClass: 'hidden' }"></p-button>
            <div class="box hidden">Content</div>
        </div>

        <script>
            const { createApp } = Vue;
            const StyleClass = primevue.styleclass;

            const App = {
                components: {
                    "p-inputtext": primevue.inputtext,
                    "p-button": primevue.button
                }
            };

            createApp(App)
                .use(primevue.config.default)
                .directive("styleclass", StyleClass)
                .mount("#app");
        <\\/script>

        <style>
        .box {
            background-color: var(--green-500);
            color: #ffffff;
            width: 100px;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 1rem;
            padding-bottom: 1rem;
            border-radius: 4px;
            margin-top: 1rem;
            font-weight: bold;
            box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
        }

        @keyframes my-fadein {
            0%   { opacity: 0; }
            100% { opacity: 1; }
        }

        @keyframes my-fadeout {
            0%   { opacity: 1; }
            100% { opacity: 0; }
        }

        .my-fadein {
            animation: my-fadein 150ms linear;
        }
                
        .my-fadeout {
            animation: my-fadeout 150ms linear;
        }
        </style>

`
                }
            }
        }
    }
}
</script>