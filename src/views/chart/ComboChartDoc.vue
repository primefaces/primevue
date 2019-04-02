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
				&lt;h1&gt;Combo Chart&lt;/h1&gt;
				&lt;p&gt;Different chart types can be combined in the same graph.&lt;/p&gt;
			&lt;/div&gt;
		&lt;/div&gt;

		&lt;div class=&quot;content-section implementation&quot;&gt;
			&lt;Chart type=&quot;bar&quot; :data=&quot;chartData&quot; :options=&quot;chartOptions&quot;/&gt;
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
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [{
					type: 'line',
					label: 'Dataset 1',
					borderColor: '#AA5493',
					borderWidth: 2,
					fill: false,
					data: [
						50,
						25,
						12,
						48,
						56,
						76,
						42
					]
				},
				{
					type: 'bar',
					label: 'Dataset 2',
					backgroundColor: '#2f4860',
					data: [
						21,
						84,
						24,
						75,
						37,
						65,
						34
					],
					borderColor: 'white',
					borderWidth: 2
				},
				{
					type: 'bar',
					label: 'Dataset 3',
					backgroundColor: '#00bb7e',
					data: [
						41,
						52,
						24,
						74,
						23,
						21,
						32
					]
				}]
			},
			chartOptions: {
				responsive: true,
				title: {
					display: true,
					text: 'Combo Bar Line Chart'
				},
				tooltips: {
					mode: 'index',
					intersect: true
				}
			}
		}
	}
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>