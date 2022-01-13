<template>
	<AppDoc name="DisplayDemo" :sources="sources" github="display/DisplayDemo.vue">
        <h5>Getting Started</h5>
        <p>The display classes use the <i>{value}</i> format and <i>{breakpoint}:{value}</i> format for responsive design.</p>

        <h5>Values</h5>
        <p>Value field can be one of the following options.</p>
        <ul>
            <li>hidden</li>
            <li>inline</li>
            <li>inline-block</li>
            <li>block</li>
            <li>flex</li>
            <li>inline-flex</li>
        </ul>

        <h5>Breakpoint</h5>
        <p>Breakpoints define how the display property should be defined depending on the screen size. Design is mobile first so smaller values
            can also apply to larger values e.g. md also applies to lg or xl if they are not explicitly defined.</p>
        <ul>
            <li><b>sm</b>: small screens e.g. phones</li>
            <li><b>md</b>: medium screens e.g. tablets</li>
            <li><b>lg</b>: large screens e.g. notebooks</li>
            <li><b>xl</b>: larger screens .e.g monitors</li>
        </ul>

        <h5>Examples</h5>
<pre v-code><code>
&lt;div class="inline"&gt;Displayed as inline.&lt;/div&gt;
&lt;div class="flex"&gt;Displayed as a flexbox container.&lt;/div&gt;
&lt;div class="block lg:inline"&gt;Inline for larger screens and block for others.&lt;/div&gt;
&lt;div class="md:hidden"&gt;Visible on a Small Screen&lt;/div&gt;
&lt;div class="hidden md:inline-flex"&gt;Hidden on a Small Screen&lt;/div&gt;

</code></pre>

        <h5>Customization</h5>
        <p>A custom build with different values can be obtained from <a href="https://github.com/primefaces/primeflex">PrimeFlex</a> using the _variables.scss file.</p>

        <h5>Dependencies</h5>
        <p>PrimeFlex 3.1.2.</p>
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
        <h5>Inline</h5>
        <InputText class="mr-2 inline" />
        <InputText class="inline" />

        <h5>Block</h5>
        <InputText class="mb-2 block" />
        <InputText class="block" />

        <h5>Visible on a Small Screen</h5>
        <p>Resize to view.</p>
        <Button type="button" icon="pi pi-bars" class="p-button-rounded md:hidden" />

        <h5>Hidden on a Small Screen</h5>
        <p>Resize to hide.</p>
        <Button type="button" icon="pi pi-search" class="p-button-rounded p-button-success hidden md:inline-flex" />
    </div>
</template>

<script>
export default {

}
<\\/script>
`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <h5>Inline</h5>
        <InputText class="mr-2 inline" />
        <InputText class="inline" />

        <h5>Block</h5>
        <InputText class="mb-2 block" />
        <InputText class="block" />

        <h5>Visible on a Small Screen</h5>
        <p>Resize to view.</p>
        <Button type="button" icon="pi pi-bars" class="p-button-rounded md:hidden" />

        <h5>Hidden on a Small Screen</h5>
        <p>Resize to hide.</p>
        <Button type="button" icon="pi pi-search" class="p-button-rounded p-button-success hidden md:inline-flex" />
    </div>
</template>

<script>
export default {

}
<\\/script>
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    content: `<div id="app">
            <h5>Inline</h5>
            <p-inputtext class="mr-2 inline"></p-inputtext>
            <p-inputtext class="inline"></p-inputtext>

            <h5>Block</h5>
            <p-inputtext class="mb-2 block"></p-inputtext>
            <p-inputtext class="block"></p-inputtext>

            <h5>Visible on a Small Screen</h5>
            <p>Resize to view.</p>
            <p-button type="button" icon="pi pi-bars" class="p-button-rounded md:hidden"></p-button>

            <h5>Hidden on a Small Screen</h5>
            <p>Resize to hide.</p>
            <p-button type="button" icon="pi pi-search" class="p-button-rounded p-button-success hidden md:inline-flex"></p-button>
        </div>

    <script type="module">
    const { createApp } = Vue;
    
    const App = {
        components: {
            "p-inputtext": primevue.inputtext,
            "p-button": primevue.button
        }
    };

    createApp(App)
            .use(primevue.config.default)
            .mount("#app");
    <\\/script>
`
                }
            }
        }
    }
}
</script>