<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;template&gt;
	&lt;div&gt;
		&lt;div class=&quot;content-section introduction&quot;&gt;
			&lt;div class=&quot;feature-intro&quot;&gt;
				&lt;h1&gt;Pie Chart&lt;/h1&gt;
				&lt;p&gt;A pie chart is a circular statistical graphic, which is divided into slices to illustrate numerical proportion.&lt;/p&gt;
			&lt;/div&gt;
		&lt;/div&gt;

		&lt;div class=&quot;content-section implementation&quot;&gt;
			&lt;Chart type=&quot;pie&quot; :data=&quot;chartData&quot; /&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/template&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
	data() {
		return {
			chartData: {
				labels: ['A','B','C'],
				datasets: [
					{
						data: [300, 50, 100],
						backgroundColor: [
							"#FF6384",
							"#36A2EB",
							"#FFCE56"
						],
						hoverBackgroundColor: [
							"#FF6384",
							"#36A2EB",
							"#FFCE56"
						]
					}
				]
			}
		}
	}
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>