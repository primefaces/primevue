<template>
	<AppDoc name="TextDemo" :sources="sources" github="text/TextDemo.vue">
        <h5>Getting Started</h5>
        <p>The text classes use the <i>p-text-{value}</i> syntax.</p>

        <h5>Alignment</h5>
        <p>Four options are available for alignment.</p>
        <ul>
            <li>left</li>
            <li>center</li>
            <li>right</li>
            <li>justify</li>
        </ul>
<pre v-code><code><template v-pre>
&lt;div class="p-text-left"&gt;Left&lt;/div&gt;
&lt;div class="p-text-center"&gt;Center&lt;/div&gt;
&lt;div class="p-text-right"&gt;Right&lt;/div&gt;
&lt;div class="p-text-justify"&gt;Justify&lt;/div&gt;
</template>
</code></pre>

        <h5>Wrap</h5>
        <p>Text wrapping defines how the text would be displayed when it exceeds the size of its container.</p>
        <ul>
            <li>nowrap</li>
            <li>wrap</li>
            <li>truncate</li>
        </ul>
<pre v-code><code><template v-pre>
&lt;div style="width: 10rem"&gt;Long text wraps and does not overlow.&lt;/div&gt;
&lt;div class="p-text-nowrap" style="width: 10rem"&gt;Long text does not wrap and overflows the parent.&lt;/div&gt;
&lt;div class="p-text-nowrap p-text-truncate" style="width: 10rem"&gt;Long text does not wrap and overflows the parent.&lt;/div&gt;
</template>
</code></pre>

        <h5>Transform</h5>
        <p>Transform property changes the case of the text.</p>
        <ul>
            <li>lowercase</li>
            <li>uppercase</li>
            <li>capitalize</li>
        </ul>
<pre v-code><code><template v-pre>
&lt;div class="p-text-lowercase"&gt;LOWERCASE&lt;/div&gt;
&lt;div class="p-text-uppercase"&gt;uppercase&lt;/div&gt;
&lt;div class="p-text-capitalize"&gt;capitalize&lt;/div&gt;
</template>
</code></pre>

        <h5>Style</h5>
        <p>Text styling applies to font weight and style.</p>
        <ul>
            <li>bold</li>
            <li>normal</li>
            <li>light</li>
            <li>italic</li>
        </ul>
<pre v-code><code><template v-pre>
&lt;div class="p-text-bold"&gt;Bold&lt;/div&gt;
&lt;div class="p-text-normal"&gt;Normal&lt;/div&gt;
&lt;div class="p-text-light"&gt;Light&lt;/div&gt;
&lt;div class="p-text-italic"&gt;Italic&lt;/div&gt;
</template>
</code></pre>

        <h5>Customization</h5>
        <p>A custom build with different values can be obtained from <a href="https://github.com/primefaces/primeflex">PrimeFlex</a> using the _variables.scss file.</p>
        
        <h5>Dependencies</h5>
        <p>PrimeFlex 2.0.0.</p>
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
        <h5>Alignment</h5>
        <div class="p-mb-3 p-text-left">Left</div>
        <div class="p-mb-3 p-text-center">Center</div>
        <div class="p-text-right">Right</div>

        <h5>Wrap</h5>
        <div class="p-mb-3 demo-container" style="width: 10rem">Long text wraps and does not overlow.</div>
        <div class="p-mb-3 demo-container p-text-nowrap" style="width: 10rem">Long text does not wrap and overflows the parent.</div>
        <div class="p-mb-3 demo-container p-text-nowrap p-text-truncate" style="width: 10rem">Long text does not wrap and overflows the parent.</div>

        <h5>Transform</h5>
        <div class="p-mb-3 p-text-lowercase">LOWERCASE</div>
        <div class="p-mb-3 p-text-uppercase">uppercase</div>
        <div class="p-text-capitalize">capitalize</div>

        <h5>Style</h5>
        <div class="p-mb-3 p-text-bold">Bold</div>
        <div class="p-mb-3 p-text-normal">Normal</div>
        <div class="p-mb-3 p-text-light">Light</div>
        <div class="p-mb-3 p-text-italic">Italic</div>
    </div>
</template>

<script>
export default {
}
<\\/script>

<style scoped>
.demo-container {
    border: 2px solid var(--surface-d);
}
</style>                    
`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <h5>Alignment</h5>
        <div class="p-mb-3 p-text-left">Left</div>
        <div class="p-mb-3 p-text-center">Center</div>
        <div class="p-text-right">Right</div>

        <h5>Wrap</h5>
        <div class="p-mb-3 demo-container" style="width: 10rem">Long text wraps and does not overlow.</div>
        <div class="p-mb-3 demo-container p-text-nowrap" style="width: 10rem">Long text does not wrap and overflows the parent.</div>
        <div class="p-mb-3 demo-container p-text-nowrap p-text-truncate" style="width: 10rem">Long text does not wrap and overflows the parent.</div>

        <h5>Transform</h5>
        <div class="p-mb-3 p-text-lowercase">LOWERCASE</div>
        <div class="p-mb-3 p-text-uppercase">uppercase</div>
        <div class="p-text-capitalize">capitalize</div>

        <h5>Style</h5>
        <div class="p-mb-3 p-text-bold">Bold</div>
        <div class="p-mb-3 p-text-normal">Normal</div>
        <div class="p-mb-3 p-text-light">Light</div>
        <div class="p-mb-3 p-text-italic">Italic</div>
    </div>
</template>

<script>
export default {
}
<\\/script>

<style scoped>
.demo-container {
    border: 2px solid var(--surface-d);
}
</style>                    
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    content: `<div id="app">
            <h5>Alignment</h5>
            <div class="p-mb-3 p-text-left">Left</div>
            <div class="p-mb-3 p-text-center">Center</div>
            <div class="p-text-right">Right</div>

            <h5>Wrap</h5>
            <div class="p-mb-3 demo-container" style="width: 10rem">Long text wraps and does not overlow.</div>
            <div class="p-mb-3 demo-container p-text-nowrap" style="width: 10rem">Long text does not wrap and overflows the parent.</div>
            <div class="p-mb-3 demo-container p-text-nowrap p-text-truncate" style="width: 10rem">Long text does not wrap and overflows the parent.</div>

            <h5>Transform</h5>
            <div class="p-mb-3 p-text-lowercase">LOWERCASE</div>
            <div class="p-mb-3 p-text-uppercase">uppercase</div>
            <div class="p-text-capitalize">capitalize</div>

            <h5>Style</h5>
            <div class="p-mb-3 p-text-bold">Bold</div>
            <div class="p-mb-3 p-text-normal">Normal</div>
            <div class="p-mb-3 p-text-light">Light</div>
            <div class="p-mb-3 p-text-italic">Italic</div>
        </div>

        <script type="module">
        const { createApp } = Vue;

        const App = {

        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>

        <style>
        .demo-container {
            border: 2px solid var(--surface-d);
        }
        </style>                    
`
                }
            }
        }
    }
}
</script>