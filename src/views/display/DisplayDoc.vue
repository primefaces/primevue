<template>
	<AppDoc name="DisplayDemo" :sources="sources" github="display/DisplayDemo.vue">
        <h5>Getting Started</h5>
        <p>The display classes use the <i>p-d-{value}</i> format and <i>p-d-{breakpoint}-{value}</i> format for responsive design.</p>

        <h5>Values</h5>
        <p>Value field can be one of the following options.</p>
        <ul>
            <li>none</li>
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
&lt;div class="p-d-inline"&gt;Displayed as inline.&lt;/div&gt;
&lt;div class="p-d-flex"&gt;Displayed as a flexbox container.&lt;/div&gt;
&lt;div class="p-d-block p-d-lg-inline"&gt;Inline for larger screens and block for others.&lt;/div&gt;
&lt;div class="p-d-md-none"&gt;Visible on a Small Screen&lt;/div&gt;
&lt;div class="p-d-none p-d-md-inline-flex"&gt;Hidden on a Small Screen&lt;/div&gt;
&lt;div class="p-d-none p-d-print-block"&gt;Only visible when printed.&lt;/div&gt;
&lt;div class="p-d-block p-d-print-none"&gt;Not available for printing.&lt;/div&gt;

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
        <h5>Inline</h5>
        <InputText class="p-mr-2 p-d-inline" />
        <InputText class="p-d-inline" />

        <h5>Block</h5>
        <InputText class="p-mb-2 p-d-block" />
        <InputText class="p-d-block" />

        <h5>Visible on a Small Screen</h5>
        <p>Resize to view.</p>
        <Button type="button" icon="pi pi-bars" class="p-button-rounded p-d-md-none" />

        <h5>Hidden on a Small Screen</h5>
        <p>Resize to hide.</p>
        <Button type="button" icon="pi pi-search" class="p-button-rounded p-button-success p-d-none p-d-md-inline-flex" />

        <h5>Visible to Print, Invisible for Screen</h5>
        <p class="p-d-none p-d-print-block">Only visible when printed.</p>

        <h5>Visible to Screen, Invisible for Print</h5>
        <p class="p-d-block p-d-print-none">Not available for printing.</p>
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
        <InputText class="p-mr-2 p-d-inline" />
        <InputText class="p-d-inline" />

        <h5>Block</h5>
        <InputText class="p-mb-2 p-d-block" />
        <InputText class="p-d-block" />

        <h5>Visible on a Small Screen</h5>
        <p>Resize to view.</p>
        <Button type="button" icon="pi pi-bars" class="p-button-rounded p-d-md-none" />

        <h5>Hidden on a Small Screen</h5>
        <p>Resize to hide.</p>
        <Button type="button" icon="pi pi-search" class="p-button-rounded p-button-success p-d-none p-d-md-inline-flex" />

        <h5>Visible to Print, Invisible for Screen</h5>
        <p class="p-d-none p-d-print-block">Only visible when printed.</p>

        <h5>Visible to Screen, Invisible for Print</h5>
        <p class="p-d-block p-d-print-none">Not available for printing.</p>
    </div>
</template>

<script>
export default {

}
<\\/script>
`
                }
            }
        }
    }
}
</script>