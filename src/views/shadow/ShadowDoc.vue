<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Getting Started</h3>
				<p>A shadow is added to an element using the <i>.p-shadow-{level}</i> class.</p>
<CodeHighlight>
&lt;div class="p-shadow-1" /&gt;
</CodeHighlight>

                <h3>Levels</h3>
                <p>There are 5 depths available varying from 1 to 5.</p>
<CodeHighlight>
&lt;div class="p-shadow-1" /&gt;
&lt;div class="p-shadow-2" /&gt;
&lt;div class="p-shadow-3" /&gt;
&lt;div class="p-shadow-4" /&gt;
&lt;div class="p-shadow-5" /&gt;
</CodeHighlight>

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/shadow" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;div class="p-grid"&gt;
    &lt;div class="p-col-12 p-md-2"&gt;
        &lt;div class="box"&gt;
            none
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col-12 p-md-2"&gt;
        &lt;div class="box p-shadow-1"&gt;
            p-shadow-1
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col-12 p-md-2"&gt;
        &lt;div class="box p-shadow-2"&gt;
            p-shadow-2
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col-12 p-md-2"&gt;
        &lt;div class="box p-shadow-3"&gt;
            p-shadow-3
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col-12 p-md-2"&gt;
        &lt;div class="box p-shadow-4"&gt;
            p-shadow-4
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col-12 p-md-2"&gt;
        &lt;div class="box p-shadow-5"&gt;
            p-shadow-5
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</template>
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>