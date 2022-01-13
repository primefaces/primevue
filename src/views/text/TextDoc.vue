<template>
	<AppDoc name="TextDemo" :sources="sources" github="text/TextDemo.vue">
        <h5>Getting Started</h5>
        <p>The text classes use the <i>text-{value}</i> syntax.</p>

        <h5>Alignment</h5>
        <p>Four options are available for alignment.</p>
        <ul>
            <li>left</li>
            <li>center</li>
            <li>right</li>
            <li>justify</li>
        </ul>
<pre v-code><code><template v-pre>
&lt;div class="text-left"&gt;Left&lt;/div&gt;
&lt;div class="text-center"&gt;Center&lt;/div&gt;
&lt;div class="text-right"&gt;Right&lt;/div&gt;
&lt;div class="text-justify"&gt;Justify&lt;/div&gt;
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
&lt;div class="text-lowercase"&gt;LOWERCASE&lt;/div&gt;
&lt;div class="text-uppercase"&gt;uppercase&lt;/div&gt;
&lt;div class="text-capitalize"&gt;capitalize&lt;/div&gt;
</template>
</code></pre>

        <h5>Wrap</h5>
        <p>Text wrapping defines how the text would be displayed when it exceeds the size of its container.</p>
<pre v-code><code><template v-pre>
&lt;div style="width: 10rem"&gt;Long text wraps and does not overlow.&lt;/div&gt;
&lt;div class="white-space-nowrap" style="width: 10rem"&gt;Long text does not wrap and overflows the parent.&lt;/div&gt;
&lt;div class="white-space-nowrap overflow-hidden text-overflow-ellipsis" style="width: 10rem"&gt;Long text does not wrap and overflows the parent.&lt;/div&gt;
</template>
</code></pre>

        <h5>Style</h5>
        <p>Text styling applies to font weight and style and also uses <i>font-{value}</i> syntax.</p>
        <ul>
            <li>bold</li>
            <li>semi-bold</li>
            <li>medium</li>
            <li>normal</li>
            <li>light</li>
            <li>italic</li>
        </ul>
<pre v-code><code><template v-pre>
&lt;div class="font-bold"&gt;Bold&lt;/div&gt;
&lt;div class="font-norrmal"&gt;Normal&lt;/div&gt;
&lt;div class="font-light"&gt;Light&lt;/div&gt;
&lt;div class="font-italic"&gt;Italic&lt;/div&gt;
</template>
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
        <h5>Alignment</h5>
        <div class="mb-3 text-left">Left</div>
        <div class="mb-3 text-center">Center</div>
        <div class="text-right">Right</div>

        <h5>Wrap</h5>
        <div class="mb-3 demo-container" style="width: 10rem">Long text wraps and does not overlow.</div>
        <div class="mb-3 demo-container white-space-nowrap" style="width: 10rem">Long text does not wrap and overflows the parent.</div>
        <div class="mb-3 demo-container white-space-nowrap overflow-hidden text-overflow-ellipsis" style="width: 10rem">Long text does not wrap and overflows the parent.</div>

        <h5>Transform</h5>
        <div class="mb-3 text-lowercase">LOWERCASE</div>
        <div class="mb-3 text-uppercase">uppercase</div>
        <div class="text-capitalize">capitalize</div>

        <h5>Style</h5>
        <div class="mb-3 font-bold">Bold</div>
        <div class="mb-3 font-norrmal">Normal</div>
        <div class="mb-3 font-light">Light</div>
        <div class="mb-3 font-italic">Italic</div>
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
        <div class="mb-3 text-left">Left</div>
        <div class="mb-3 text-center">Center</div>
        <div class="text-right">Right</div>

        <h5>Wrap</h5>
        <div class="mb-3 demo-container" style="width: 10rem">Long text wraps and does not overlow.</div>
        <div class="mb-3 demo-container white-space-nowrap" style="width: 10rem">Long text does not wrap and overflows the parent.</div>
        <div class="mb-3 demo-container white-space-nowrap overflow-hidden text-overflow-ellipsis" style="width: 10rem">Long text does not wrap and overflows the parent.</div>

        <h5>Transform</h5>
        <div class="mb-3 text-lowercase">LOWERCASE</div>
        <div class="mb-3 text-uppercase">uppercase</div>
        <div class="text-capitalize">capitalize</div>

        <h5>Style</h5>
        <div class="mb-3 font-bold">Bold</div>
        <div class="mb-3 font-norrmal">Normal</div>
        <div class="mb-3 font-light">Light</div>
        <div class="mb-3 font-italic">Italic</div>
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
            <div class="mb-3 text-left">Left</div>
            <div class="mb-3 text-center">Center</div>
            <div class="text-right">Right</div>

            <h5>Wrap</h5>
            <div class="mb-3 demo-container" style="width: 10rem">Long text wraps and does not overlow.</div>
            <div class="mb-3 demo-container white-space-nowrap" style="width: 10rem">Long text does not wrap and overflows the parent.</div>
            <div class="mb-3 demo-container white-space-nowrap overflow-hidden text-overflow-ellipsis" style="width: 10rem">Long text does not wrap and overflows the parent.</div>

            <h5>Transform</h5>
            <div class="mb-3 text-lowercase">LOWERCASE</div>
            <div class="mb-3 text-uppercase">uppercase</div>
            <div class="text-capitalize">capitalize</div>

            <h5>Style</h5>
            <div class="mb-3 font-bold">Bold</div>
            <div class="mb-3 font-norrmal">Normal</div>
            <div class="mb-3 font-light">Light</div>
            <div class="mb-3 font-italic">Italic</div>
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