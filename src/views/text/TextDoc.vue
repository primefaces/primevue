<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
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
<pre v-code>
<code><template v-pre>
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
<pre v-code>
<code><template v-pre>
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
<pre v-code>
<code><template v-pre>
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
<pre v-code>
<code><template v-pre>
&lt;div class="p-text-bold"&gt;Bold&lt;/div&gt;
&lt;div class="p-text-normal"&gt;Normal&lt;/div&gt;
&lt;div class="p-text-light"&gt;Light&lt;/div&gt;
&lt;div class="p-text-italic"&gt;Italic&lt;/div&gt;
</template>
</code></pre>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/text" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<pre v-code>
<code><template v-pre>
&lt;div class="card"&gt;
    &lt;h5&gt;Alignment&lt;/h5&gt;
    &lt;div class="p-mb-3 p-text-left"&gt;Left&lt;/div&gt;
    &lt;div class="p-mb-3 p-text-center"&gt;Center&lt;/div&gt;
    &lt;div class="p-text-right"&gt;Right&lt;/div&gt;

    &lt;h5&gt;Wrap&lt;/h5&gt;
    &lt;div class="p-mb-3 demo-container" style="width: 10rem"&gt;Long text wraps and does not overlow.&lt;/div&gt;
    &lt;div class="p-mb-3 demo-container p-text-nowrap" style="width: 10rem"&gt;Long text does not wrap and overflows the parent.&lt;/div&gt;
    &lt;div class="p-mb-3 demo-container p-text-nowrap p-text-truncate" style="width: 10rem"&gt;Long text does not wrap and overflows the parent.&lt;/div&gt;

    &lt;h5&gt;Transform&lt;/h5&gt;
    &lt;div class="p-mb-3 p-text-lowercase"&gt;LOWERCASE&lt;/div&gt;
    &lt;div class="p-mb-3 p-text-uppercase"&gt;uppercase&lt;/div&gt;
    &lt;div class="p-text-capitalize"&gt;capitalize&lt;/div&gt;

    &lt;h5&gt;Style&lt;/h5&gt;
    &lt;div class="p-mb-3 p-text-bold"&gt;Bold&lt;/div&gt;
    &lt;div class="p-mb-3 p-text-normal"&gt;Normal&lt;/div&gt;
    &lt;div class="p-mb-3 p-text-light"&gt;Light&lt;/div&gt;
    &lt;div class="p-mb-3 p-text-italic"&gt;Italic&lt;/div&gt;
&lt;/div&gt;
</template>
</code></pre>
			</TabPanel>
		</TabView>
	</div>
</template>