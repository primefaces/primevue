<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Getting Started</h5>
				<p>Elevation is added to an element using the <i>.p-shadow-{level}</i> class.</p>
<pre v-code>
<code>
&lt;div class="p-shadow-1" /&gt;

</code></pre>

                <h5>Levels</h5>
                <p>There are 24 depths available varying from 1 to 24.</p>
<pre v-code>
<code>
&lt;div class="p-shadow-1" /&gt;
&lt;div class="p-shadow-24" /&gt;

</code></pre>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/elevation" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<pre v-code>
<code><template v-pre>
&lt;div class="p-grid"&gt;
    &lt;div class="p-col" v-for="index in 24" :key="index"&gt;
        &lt;div :class="['box', 'p-shadow-' + index]"&gt;
            p-shadow-{{index}}
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</template>
</code></pre>
			</TabPanel>
		</TabView>
	</div>
</template>