<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Getting Started</h3>
				<p>Elevation is added to an element using the <i>.p-shadow-{level}</i> class.</p>
<CodeHighlight>
&lt;div class="p-shadow-1" /&gt;
</CodeHighlight>

                <h3>Levels</h3>
                <p>There are 24 depths available varying from 1 to 24.</p>
<CodeHighlight>
&lt;div class="p-shadow-1" /&gt;
&lt;div class="p-shadow-24" /&gt;
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
    &lt;div class="p-col" v-for="index in 24" :key="index"&gt;
        &lt;div :class="['box', 'p-shadow-' + index]"&gt;
            p-shadow-{{index}}
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</template>
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>