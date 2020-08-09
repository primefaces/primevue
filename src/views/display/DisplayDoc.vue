<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
                <h5>Getting Started</h5>
                After installing primeflex with npm or yarn, you need to import primeflex css in main.js:
                <CodeHighlight>
                  <p>import 'primeflex/primeflex.css'</p>
                </CodeHighlight>
                
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
<CodeHighlight>
&lt;div class="p-d-inline"&gt;Displayed as inline.&lt;/div&gt;
&lt;div class="p-d-flex"&gt;Displayed as a flexbox container.&lt;/div&gt;
&lt;div class="p-d-block p-d-lg-inline"&gt;Inline for larger screens and block for others.&lt;/div&gt;
&lt;div class="p-d-md-none"&gt;Visible on a Small Screen&lt;/div&gt;
&lt;div class="p-d-none p-d-md-inline-flex"&gt;Hidden on a Small Screen&lt;/div&gt;
&lt;div class="p-d-none p-print-block"&gt;Only visible when printed.&lt;/div&gt;
&lt;div class="p-d-block p-print-none"&gt;Not available for printing.&lt;/div&gt;
</CodeHighlight>

                <h5>Customization</h5>
                <p>A custom build with different values can be obtained from <a href="https://github.com/primefaces/primeflex">PrimeFlex</a> using the _variables.scss file.</p>

				<h5>Dependencies</h5>
				<p>PrimeFlex.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/display" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;div class="card"&gt;
    &lt;h5&gt;Inline&lt;/h5&gt;
    &lt;InputText class="p-mr-2 p-d-inline" /&gt;
    &lt;InputText class="p-d-inline" /&gt;

    &lt;h5&gt;Block&lt;/h5&gt;
    &lt;InputText class="p-mb-2 p-d-block" /&gt;
    &lt;InputText class="p-d-block" /&gt;

    &lt;h5&gt;Visible on a Small Screen&lt;/h5&gt;
    &lt;p&gt;Resize to view.&lt;/p&gt;
    &lt;Button type="button" icon="pi pi-bars" class="p-button-rounded p-d-md-none" /&gt;

    &lt;h5&gt;Hidden on a Small Screen&lt;/h5&gt;
    &lt;p&gt;Resize to hide.&lt;/p&gt;
    &lt;Button type="button" icon="pi pi-search" class="p-button-rounded p-button-success p-d-none p-d-md-inline-flex" /&gt;

    &lt;h5&gt;Visible to Print, Invisible for Screen&lt;/h5&gt;
    &lt;p class="p-d-none p-print-block"&gt;Only visible when printed.&lt;/p&gt;

    &lt;h5&gt;Visible to Screen, Invisible for Print&lt;/h5&gt;
    &lt;p class="p-d-block p-print-none"&gt;Not available for printing.&lt;/p&gt;
&lt;/div&gt;
</template>
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>
