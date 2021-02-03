<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
                <h5>Getting Started</h5>
                <p>The spacing classes use the <i>p-{property}{position}-{value}</i> syntax whereas for responsive
                values <i>p-{property}{position}-{breakpoint}-{value}</i> format is used.</p>

                <h5>Property</h5>
                <p>Property can either be a margin or a padding.</p>
                <ul>
                    <li><b>m</b>: margin</li>
                    <li><b>p</b>: padding</li>
                </ul>

                <h5>Position</h5>
                <p>Position are available for the individual sides, the x-y axis or blank for the shortand of all sides.</p>
                <ul>
                    <li><b>t</b>: top</li>
                    <li><b>b</b>: bottom</li>
                    <li><b>l</b>: left</li>
                    <li><b>r</b>: right</li>
                    <li><b>x</b>: left and right</li>
                    <li><b>y</b>: top and bottom</li>
                    <li><b>blank</b>: all sides</li>
                </ul>

                <h5>Value</h5>
                <p>Value field varies from 0 to 6 where default value of the <i>$spacer</i> is 1rem. The special <i>auto</i> value is available to margins only and used to center elements.</p>
                <ul>
                    <li><b>0</b>: $spacer * 0</li>
                    <li><b>1</b>: $spacer * .25</li>
                    <li><b>2</b>: $spacer * .5</li>
                    <li><b>3</b>: $spacer * 1</li>
                    <li><b>4</b>: $spacer * 1.5</li>
                    <li><b>5</b>: $spacer * 2</li>
                    <li><b>6</b>: $spacer * 3</li>
                    <li><b>auto</b>: auto margin</li>
                </ul>

                <h5>Breakpoint</h5>
                <p>Breakpoints define how the spacing should be defined depending on the screen size. Design is mobile first so smaller values
                    can also apply to larger values e.g. md also applies to lg or xl if they are not explicitly defined.</p>
                <ul>
                    <li><b>sm</b>: small screens e.g. phones</li>
                    <li><b>md</b>: medium screens e.g. tablets</li>
                    <li><b>lg</b>: large screens e.g. notebooks</li>
                    <li><b>xl</b>: larger screens .e.g monitors</li>
                </ul>

                <h5>Examples</h5>
<pre v-code><code>
&lt;div class="p-mb-2"&gt;Margin bottom with level 2&lt;/div&gt;
&lt;div class="p-mt-4"&gt;Margin top with level 2&lt;/div&gt;
&lt;div class="p-m-2"&gt;Margin for all sides with level 2&lt;/div&gt;
&lt;div class="p-mx-auto"&gt;Auto margins for left and right side&lt;/div&gt;
&lt;div class="p-pb-4"&gt;Padding bottom with level 4&lt;/div&gt;
&lt;div class="p-p-1"&gt;Padding for all sides with level 1&lt;/div&gt;
&lt;div class="p-m-1 p-p-1 p-m-lg-3 p-b-lg-3"&gt;Level 3 spacing for lg screens and level 1 for smaller screens (xs).&lt;/div&gt;

</code></pre>

                <h5>Customization</h5>
                <p>A custom build with different values can be obtained from <a href="https://github.com/primefaces/primeflex">PrimeFlex</a> using the _variables.scss file.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/spacing" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<pre v-code><code><template v-pre>
&lt;div class="card"&gt;
    &lt;h5&gt;Margin&lt;/h5&gt;
    &lt;h6&gt;Without Spacing&lt;/h6&gt;
    &lt;Button type="button" label="Button 1" style="width:20rem" /&gt;
    &lt;Button type="button" label="Button 2" style="width:20rem" /&gt;

    &lt;h6&gt;With Spacing&lt;/h6&gt;
    &lt;Button type="button" label="Button 1" style="width:20rem" class="p-mr-2 p-mb-2" /&gt;
    &lt;Button type="button" label="Button 2" style="width:20rem" class="p-mb-2"/&gt;

    &lt;h5&gt;Responsive Margin&lt;/h5&gt;
    &lt;h6&gt;Without Spacing&lt;/h6&gt;
    &lt;div class="p-grid p-formgrid p-fluid"&gt;
        &lt;div class="p-col-12 p-lg-4"&gt;
            &lt;InputText /&gt;
        &lt;/div&gt;
        &lt;div class="p-col-12 p-lg-4"&gt;
            &lt;InputText /&gt;
        &lt;/div&gt;
        &lt;div class="p-col-12 p-lg-4"&gt;
            &lt;InputText /&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;h6&gt;With Spacing&lt;/h6&gt;
    &lt;div class="p-grid p-formgrid p-fluid"&gt;
        &lt;div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0"&gt;
            &lt;InputText /&gt;
        &lt;/div&gt;
        &lt;div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0"&gt;
            &lt;InputText /&gt;
        &lt;/div&gt;
        &lt;div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0"&gt;
            &lt;InputText /&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;h6&gt;Center&lt;/h6&gt;
    &lt;div class="demo-container p-p-4"&gt;
        &lt;Button type="button" label="Button" class="p-d-block p-mx-auto" /&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="card"&gt;
    &lt;h5&gt;Padding&lt;/h5&gt;
    &lt;h6&gt;Without Spacing&lt;/h6&gt;
    &lt;div class="demo-container"&gt;
        &lt;Button type="button" label="Button" /&gt;
    &lt;/div&gt;

    &lt;h6&gt;With Spacing&lt;/h6&gt;
    &lt;div class="demo-container p-p-3"&gt;
        &lt;Button type="button" label="Button" /&gt;
    &lt;/div&gt;

    &lt;h6&gt;Responsive Spacing&lt;/h6&gt;
    &lt;div class="demo-container p-p-0 p-p-sm-1 p-p-md-2 p-p-lg-3"&gt;
        &lt;Button type="button" label="Button" /&gt;
    &lt;/div&gt;
&lt;/div&gt;
</template>
</code></pre>
			</TabPanel>
		</TabView>
	</div>
</template>
