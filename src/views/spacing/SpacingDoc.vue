<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
                <h5>Getting Started</h5>
                <p>The classes modify the margins and use the <i>p-m{position}-{value}</i> syntax whereas for responsive
                values <i>p-m{position}-{breakpoint}-{value}</i> format is used.</p>
<CodeHighlight>
&lt;div class="p-mb-2"&gt;&lt;/i&gt;
&lt;div class="p-mt-4"&gt;&lt;/i&gt;
&lt;div class="p-m-1 p-m-lg-2"&gt;&lt;/i&gt;
</CodeHighlight>

                <h5>Position</h5>
                <p>Position can either be either of the 4 sides, the x-y axis or blank for the shortand of all sides.</p>
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
                <p>Value field varies from 0 to 6 where default value of the <i>$spacer</i> is 1rem. The special auto value is used to center elements using auto margins.</p>
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
                <p>Breakpoints define how the spacing should be depending on the screen size.</p>
                <ul>
                    <li><b>sm</b>: small screens e.g. phones</li>
                    <li><b>md</b>: medium screens e.g. tablets</li>
                    <li><b>lg</b>: large screens e.g. notebooks</li>
                    <li><b>xl</b>: larger screens .e.g monitors</li>
                </ul>

				<h5>Dependencies</h5>
				<p>PrimeFlex.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/spacing" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>

</template>
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>